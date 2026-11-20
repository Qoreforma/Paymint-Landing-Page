import { createFileRoute } from "@tanstack/react-router";
import {
  Tv,
  Check,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Clock,
  BadgeCheck,
} from "lucide-react";

const CANONICAL_URL = "https://www.paymint.com.ng/services/cable-tv";
const WEB_APP_URL = "https://app.paymint.com.ng";

export const Route = createFileRoute("/services/cable-tv")({
  head: () => ({
    meta: [
      {
        title: "DStv, GOtv & StarTimes Subscription Renewal Online in Nigeria | PayMint",
      },
      {
        name: "description",
        content:
          "Renew your DStv, GOtv, and StarTimes subscription online in Nigeria. Instant decoder activation, change packages easily, and clear E16 errors in seconds.",
      },
      {
        name: "keywords",
        content:
          "dstv subscription online nigeria, gotv renewal online, startimes subscription, clear dstv e16 error, pay cable tv online, paymint cable",
      },
      {
        property: "og:title",
        content: "DStv, GOtv & StarTimes Subscription Renewal | PayMint",
      },
      {
        property: "og:description",
        content: "Instant decoder activation and package changes for DStv, GOtv, and StarTimes.",
      },
      { property: "og:url", content: CANONICAL_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.paymint.com.ng/logo.png" },
    ],
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: CableTvLandingPage,
});

const PACKAGES = [
  {
    brand: "DStv Nigeria",
    description: "Padi, Yanga, Confam, Compact, Compact Plus & Premium",
    features: ["Instant activation in 2 mins", "Zero convenience fee", "Auto-clear E16 error"],
  },
  {
    brand: "GOtv Nigeria",
    description: "Smallie, Jinja, Jolli, Max & Supa+",
    features: ["Instant smartcard verification", "All monthly packages", "Live Premier League access"],
  },
  {
    brand: "StarTimes",
    description: "Nova, Basic, Classic & Super Bouquets",
    features: ["Daily, weekly, and monthly options", "Dish & Antenna decoders", "Instant reconnection"],
  },
];

const FAQS = [
  {
    q: "How long does it take for channels to restore after payment?",
    a: "If your decoder is left powered on during the payment process, your channels typically restore within 1 to 5 minutes.",
  },
  {
    q: "How do I avoid or clear the E16 error code?",
    a: "Ensure your decoder is switched on and tuned to Channel 114 (African Magic Urban) or Channel 100 before making payment. If E16 persists, PayMint provides a 1-click error clearing tool.",
  },
  {
    q: "Can I upgrade or downgrade my bouquet on PayMint?",
    a: "Yes, you can choose to renew your existing bouquet or select any new tier (e.g. upgrade from Confam to Compact).",
  },
];

function CableTvLandingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <div className="relative overflow-hidden pt-12 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-deep backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-brand-deep" />
          DStv, GOtv & StarTimes — Instant Reconnection
        </div>

        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Renew Cable TV Online.
          <br />
          <span className="text-gradient-brand">Zero Interruption to Your Fun.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Never miss a match or episode again. Pay for DStv, GOtv, and StarTimes online in seconds with verified smartcard validation and instant activation.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Renew Subscription Now <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/download"
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-brand"
          >
            Download Mobile App
          </a>
        </div>
      </section>

      {/* Cable Providers */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.brand}
              className="rounded-3xl border border-border bg-card p-6 flex flex-col justify-between hover:border-brand transition"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
                  <Tv className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{pkg.brand}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{pkg.description}</p>
                <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-1.5 rounded-xl bg-secondary py-2.5 text-xs font-semibold text-foreground hover:bg-brand hover:text-ink transition"
              >
                Pay {pkg.brand}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto mt-24 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand-deep">
            Questions Answered
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {FAQS.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold">
                <HelpCircle className="h-4 w-4 text-brand-deep shrink-0" />
                {faq.q}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
