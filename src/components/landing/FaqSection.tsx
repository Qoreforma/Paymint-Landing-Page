import { useState, useEffect, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, HelpCircle, MessageCircle, Sparkles } from "lucide-react";
import { fetchFaqs, FaqItem } from "@/lib/api-client";

interface DisplayFaq {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const DEFAULT_FAQS: DisplayFaq[] = [
  {
    id: "funding-1",
    question: "How do I fund my PayMint wallet?",
    answer:
      "Every PayMint account gets a dedicated Nigerian virtual account number (via licensed banking partners like Wema Bank). Simply open your existing Nigerian banking app, make a standard bank transfer to your PayMint account number, and your balance updates instantly in real time.",
    category: "Wallet & Funding",
  },
  {
    id: "bills-1",
    question: "How fast do airtime, data, and electricity bill payments arrive?",
    answer:
      "All bill payments on PayMint are processed with automated direct gateway connections. Airtime and data top-ups reflect in under 5 seconds. Electricity tokens and cable TV activations generate immediately with verifiable receipts.",
    category: "Bill Payments",
  },
  {
    id: "spin-1",
    question: "How does the Spin & Win Sprint campaign work?",
    answer:
      "Share your unique referral link from the PayMint app. When a referred friend signs up and funds their wallet with at least ₦1,000, you instantly unlock a Spin & Win ticket. You can spin the live wheel in the app to win instant cash or airtime prizes up to ₦1,000.",
    category: "Spin & Win",
  },
  {
    id: "spin-2",
    question: "Where do my Spin & Win winnings go?",
    answer:
      "Cash prizes are credited directly to your PayMint wallet balance and can be spent on any bill payment (airtime, data, electricity, cable TV, eSIMs). Airtime rewards are dispatched instantly to your registered mobile phone number.",
    category: "Spin & Win",
  },
  {
    id: "security-1",
    question: "Is PayMint safe and regulated?",
    answer:
      "Yes. PayMint operates in partnership with CBN-licensed and regulated payment institutions. Your transactions are guarded by 256-bit encryption, biometric authentication (Face ID / Fingerprint), and mandatory transaction PINs.",
    category: "Security",
  },
  {
    id: "whatsapp-1",
    question: "How do WhatsApp payments work?",
    answer:
      "You can chat with PayMint's official verified WhatsApp number to fund your wallet, buy airtime, subscribe to data, or pay electricity bills without switching apps. Simply send a message like 'Buy ₦2,000 MTN airtime' to complete your payment.",
    category: "WhatsApp",
  },
  {
    id: "referral-1",
    question: "Do self-referrals or duplicate device accounts qualify for rewards?",
    answer:
      "No. To maintain fairness for all genuine participants, our automated telemetry detects accounts created on the same device or belonging to the same individual. Only genuine, unique new users who complete identity setup and the qualifying funding action count.",
    category: "Spin & Win",
  },
];

export function FaqSection() {
  const [faqs, setFaqs] = useState<DisplayFaq[]>(DEFAULT_FAQS);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    let mounted = true;
    fetchFaqs().then((apiFaqs) => {
      if (!mounted || !apiFaqs || apiFaqs.length === 0) return;

      const mappedApiFaqs: DisplayFaq[] = apiFaqs.map((f, index) => {
        let cat = "General";
        if (typeof f.faqCategoryId === "object" && f.faqCategoryId?.name) {
          cat = f.faqCategoryId.name;
        } else if (f.category) {
          cat = f.category;
        }

        return {
          id: f._id || f.id || `api-faq-${index}`,
          question: f.question,
          answer: f.answer,
          category: cat,
        };
      });

      // Merge: API FAQs prioritized, supplemented with any unique default FAQs
      const existingQuestions = new Set(
        mappedApiFaqs.map((f) => f.question.toLowerCase().trim())
      );
      const uniqueDefaults = DEFAULT_FAQS.filter(
        (df) => !existingQuestions.has(df.question.toLowerCase().trim())
      );

      setFaqs([...mappedApiFaqs, ...uniqueDefaults]);
    });

    return () => {
      mounted = false;
    };
  }, []);

  const categories = useMemo(() => {
    const set = new Set<string>();
    faqs.forEach((f) => {
      if (f.category) set.add(f.category);
    });
    return ["All", ...Array.from(set)];
  }, [faqs]);

  const filteredFaqs = useMemo(() => {
    return faqs.filter((f) => {
      const matchesCategory =
        activeCategory === "All" ||
        f.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesSearch =
        searchQuery.trim() === "" ||
        f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeCategory, searchQuery]);

  return (
    <section id="faqs" className="relative overflow-hidden py-24 bg-background">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand-soft/50 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-deep">
            <HelpCircle className="h-4 w-4" /> Frequently Asked Questions
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Everything you need to know
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Clear answers about wallet funding, instant bill settlement, referral sprints, and fair play.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-10 mx-auto max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. wallet, spin, airtime, security)..."
              className="w-full rounded-2xl border border-border bg-card py-3.5 pl-12 pr-4 text-sm shadow-sm transition placeholder:text-muted-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-muted-foreground hover:text-foreground"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                activeCategory === cat
                  ? "bg-ink text-white shadow-sm"
                  : "border border-border bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-10 rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-sm">
          {filteredFaqs.length === 0 ? (
            <div className="py-12 text-center">
              <HelpCircle className="mx-auto h-10 w-10 text-muted-foreground/50" />
              <h4 className="mt-3 font-display text-base font-semibold">No questions found</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                We couldn&apos;t find an answer matching &ldquo;{searchQuery}&rdquo;. Try another term or contact support.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 rounded-full border border-border bg-secondary px-4 py-2 text-xs font-semibold transition hover:bg-secondary/80"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <Accordion type="single" collapsible className="w-full divide-y divide-border/60">
              {filteredFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-border/60 py-2">
                  <AccordionTrigger className="text-left font-display text-base font-semibold hover:text-brand-deep transition-colors">
                    <span className="flex items-center gap-2">
                      {faq.question}
                      {faq.category === "Spin & Win" && (
                        <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-semibold text-brand-deep">
                          Campaign
                        </span>
                      )}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground pt-1 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>

        {/* Support & Campaign Prompt */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-border bg-secondary/40 p-6 sm:flex-row sm:px-8">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand text-ink">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <div className="font-display font-semibold text-foreground">Have more questions about PayMint?</div>
              <div className="text-sm text-muted-foreground">
                Chat with Minty, our intelligent in-app assistant, or check the live campaign page.
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/spin-win"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand/50 bg-white px-4 py-2 text-xs font-semibold text-brand-deep transition hover:bg-brand-soft"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Spin & Win Rules</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
