import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Smartphone,
  Check,
  Zap,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Clock,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";
import { trackAppDownload, trackWebAppClick } from "@/lib/analytics";

const CANONICAL_URL = "https://www.paymint.com.ng/services/airtime";
const WEB_APP_URL = "https://app.paymint.com.ng";

export const Route = createFileRoute("/services/airtime")({
  head: () => ({
    meta: [
      {
        title: "Instant Airtime Recharge Online in Nigeria — MTN, Airtel, Glo & 9mobile | PayMint",
      },
      {
        name: "description",
        content:
          "Recharge MTN, Airtel, Glo, and 9mobile airtime instantly online with cashbacks. Zero convenience fees and instant automated top-up.",
      },
      {
        name: "keywords",
        content:
          "airtime recharge online, buy airtime online nigeria, mtn airtime discount, glo recharge online, airtel airtime top up, instant airtime nigeria",
      },
      {
        property: "og:title",
        content: "Instant Airtime Recharge Online in Nigeria | PayMint",
      },
      {
        property: "og:description",
        content: "Recharge phone credit with instant discounts and cashbacks on all Nigerian networks.",
      },
      { property: "og:url", content: CANONICAL_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.paymint.com.ng/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Instant Airtime Recharge Online in Nigeria | PayMint" },
      {
        name: "twitter:description",
        content: "Recharge phone credit with instant discounts and cashbacks on all Nigerian networks.",
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: AirtimeLandingPage,
});

const NETWORKS = [
  { name: "MTN Nigeria", discount: "Up to 3% Cashback", icon: Smartphone },
  { name: "Airtel Nigeria", discount: "Up to 3% Cashback", icon: Smartphone },
  { name: "Glo Nigeria", discount: "Up to 4% Cashback", icon: Smartphone },
  { name: "9mobile", discount: "Up to 4% Cashback", icon: Smartphone },
];

const FAQS = [
  {
    q: "How fast does airtime arrive on my phone?",
    a: "Airtime is delivered automatically via direct telecommunication gateways within 1 to 3 seconds after confirmation.",
  },
  {
    q: "Do I get discounts or cashbacks on airtime recharges?",
    a: "Yes! Every airtime recharge on MTN, Airtel, Glo, and 9mobile earns instant cashback or discounts credited directly to your PayMint wallet.",
  },
  {
    q: "Can I recharge airtime directly from WhatsApp?",
    a: "Yes! PayMint offers an automated WhatsApp chatbot. Once your wallet is funded, message us on WhatsApp to recharge any line instantly without opening an app.",
  },
  {
    q: "Can I send airtime to other phone numbers?",
    a: "Yes, you can enter any Nigerian phone number during the checkout flow to top up family, friends, or employees.",
  },
];

function AirtimeLandingPage() {
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Airtime Top-up & Recharge",
    provider: {
      "@type": "Organization",
      name: "PayMint",
      url: "https://www.paymint.com.ng",
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    description:
      "Instant airtime recharge with automated cashbacks on MTN, Airtel, Glo, and 9mobile in Nigeria.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.paymint.com.ng" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.paymint.com.ng/services" },
      { "@type": "ListItem", position: 3, name: "Airtime Recharge", item: CANONICAL_URL },
    ],
  };

  return (
    <div className="relative overflow-hidden pt-8 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visible Breadcrumbs */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-xs text-muted-foreground flex items-center gap-2">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/services" className="hover:text-foreground">Services</Link>
        <span>/</span>
        <span className="text-foreground font-medium">Airtime Recharge</span>
      </nav>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-deep backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-brand-deep" />
          Instant Airtime Top-Up — Earn Cashbacks on Every Recharge
        </div>

        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Top Up Airtime Fast.
          <br />
          <span className="text-gradient-brand">Never Run Out of Talk Time.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Recharge MTN, Airtel, Glo, and 9mobile in 2 seconds. Enjoy zero convenience fees, automated wallet billing, and cashbacks on every single recharge.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWebAppClick("airtime_hero")}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Recharge Airtime on Web <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="/download"
            onClick={() => trackAppDownload("unknown")}
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-brand"
          >
            Download Mobile App
          </a>
        </div>
      </section>

      {/* Network Cashback Cards */}
      <section className="mx-auto mt-20 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">All Major Networks Supported</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Get instant phone credit and cashback across all Nigerian telecommunication providers.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {NETWORKS.map((n) => (
            <div
              key={n.name}
              className="rounded-3xl border border-border bg-card p-6 flex flex-col justify-between hover:border-brand transition"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
                  <n.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold">{n.name}</h3>
                <p className="mt-1 text-xs font-semibold text-emerald-600">{n.discount}</p>
              </div>
              <a
                href={WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWebAppClick(`airtime_${n.name.toLowerCase().replace(/\s+/g, "_")}`)}
                className="mt-6 flex items-center justify-center gap-1.5 rounded-xl bg-secondary py-2 text-xs font-semibold text-foreground hover:bg-brand hover:text-ink transition"
              >
                Recharge {n.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Features: App & WhatsApp */}
      <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
              <Zap className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold sm:text-3xl">Instant 1-Tap Recharge</h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Send phone credit to any Nigerian number in 1 to 3 seconds. Enjoy automated top-ups without USSD session timeouts, network delays, or bank charges.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" />
                All 4 major networks supported (MTN, Airtel, Glo, 9mobile)
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" />
                Instant cashback credited directly to your wallet
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" />
                Zero transaction fees on wallet transfers
              </li>
            </ul>
          </div>
          <a
            href={WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWebAppClick("airtime_feature_recharge")}
            className="mt-8 inline-flex items-center gap-2 font-semibold text-sm text-brand-deep hover:underline"
          >
            Recharge Now →
          </a>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] text-white">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold sm:text-3xl">Top Up via WhatsApp</h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
              Message PayMint on WhatsApp to buy airtime directly inside your chat. No need to open bank apps or memorize USSD strings.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" />
                Natural chat commands (e.g. &quot;Buy ₦1,000 MTN airtime&quot;)
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" />
                Fast, secure transaction PIN confirmation
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-600" />
                Receipt and confirmation delivered right inside WhatsApp
              </li>
            </ul>
          </div>
          <a
            href={WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWebAppClick("airtime_whatsapp_cta")}
            className="mt-8 inline-flex items-center gap-2 font-semibold text-sm text-brand-deep hover:underline"
          >
            Try WhatsApp Payments →
          </a>
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
