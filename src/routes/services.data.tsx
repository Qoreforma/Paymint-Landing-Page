import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Wifi,
  Smartphone,
  Check,
  Zap,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Clock,
  BadgeCheck,
} from "lucide-react";
import { FALLBACK_DATA_PLANS } from "@/lib/api-client";
import { trackAppDownload, trackWebAppClick } from "@/lib/analytics";

const CANONICAL_URL = "https://www.paymint.com.ng/services/data";
const WEB_APP_URL = "https://app.paymint.com.ng";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.paymint.app";
const APP_STORE_URL = "https://apps.apple.com/us/app/paymint/id6801909031";

export const Route = createFileRoute("/services/data")({
  head: () => ({
    meta: [
      {
        title: "Buy Cheap Data Online in Nigeria — MTN, Airtel, Glo & 9mobile | PayMint",
      },
      {
        name: "description",
        content:
          "Buy cheap internet data bundles online in Nigeria. Up to 70% discount on MTN, Airtel, Glo & 9mobile SME data. Instant 2-second automated delivery.",
      },
      {
        name: "keywords",
        content:
          "buy data online, cheap mtn data, buy airtel data, cheap glo data, 9mobile data bundle, sme data nigeria, instant data top up, paymint data",
      },
      {
        property: "og:title",
        content: "Buy Cheap Data Online in Nigeria — Instant Delivery | PayMint",
      },
      {
        property: "og:description",
        content:
          "Get the cheapest internet data bundles for MTN, Airtel, Glo, and 9mobile. Instant delivery 24/7.",
      },
      { property: "og:url", content: CANONICAL_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.paymint.com.ng/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Buy Cheap Data Online in Nigeria | PayMint" },
      {
        name: "twitter:description",
        content: "Instant automated data bundles for all Nigerian networks with up to 70% savings.",
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: DataLandingPage,
});

const NETWORKS = [
  { id: "mtn", name: "MTN Nigeria", color: "bg-[#FFCC00] text-black border-yellow-400" },
  { id: "airtel", name: "Airtel Nigeria", color: "bg-[#FF0000] text-white border-red-500" },
  { id: "glo", name: "Glo Nigeria", color: "bg-[#28A745] text-white border-green-600" },
  { id: "9mobile", name: "9mobile", color: "bg-[#005B00] text-white border-emerald-700" },
];

const FAQS = [
  {
    q: "How fast is data delivery after purchase?",
    a: "Data is delivered automatically via direct telecommunication gateways within 1 to 5 seconds after you confirm your transaction.",
  },
  {
    q: "What is the difference between SME, Gifting, and Corporate Data?",
    a: "SME and Corporate Gifting data are wholesale business pools provided directly by telecom networks. They have identical high speed and 30-day validity as retail data, but cost significantly less.",
  },
  {
    q: "How do I check my data balance on MTN, Airtel, Glo, and 9mobile?",
    a: "Dial *323# or *312# on MTN, *323# on Airtel, *323# on Glo, and *323# on 9mobile to view all active data bundles.",
  },
  {
    q: "Can I buy data directly from WhatsApp?",
    a: "Yes! PayMint offers an automated WhatsApp chatbot. Once your wallet is funded, message us on WhatsApp to top up any number instantly.",
  },
];

function DataLandingPage() {
  const [selectedNetwork, setSelectedNetwork] = useState("mtn");
  const plans = FALLBACK_DATA_PLANS[selectedNetwork] || FALLBACK_DATA_PLANS.mtn;

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
    serviceType: "Mobile Internet Data Top-up",
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
      "Instant cheap data bundles for MTN, Airtel, Glo, and 9mobile in Nigeria.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.paymint.com.ng" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.paymint.com.ng/services" },
      { "@type": "ListItem", position: 3, name: "Cheap Internet Data", item: CANONICAL_URL },
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
        <span className="text-foreground font-medium">Cheap Internet Data</span>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-deep backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-brand-deep" />
          Nigeria's #1 Cheap Data Engine — Up to 70% Off Telco Rates
        </div>

        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Buy Cheap Data Online.
          <br />
          <span className="text-gradient-brand">Instant 2-Second Delivery.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Top up MTN, Airtel, Glo, and 9mobile SME & Gifting data bundles at wholesale rates. 
          Fund your wallet via instant virtual bank transfer and never run out of internet.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWebAppClick("services_data", "buy_data")}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Buy Data Now on Web <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAppDownload("android", "services_data")}
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-brand"
          >
            Download Android App
          </a>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackAppDownload("ios", "services_data")}
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:border-brand"
          >
            Download iOS App
          </a>
        </div>
      </section>

      {/* Network Switcher & Live Rate Table */}
      <section className="mx-auto mt-20 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-sm">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Live Data Plan Rates</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Select your telecommunication network below to view wholesale data bundles.
            </p>
          </div>

          {/* Network tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
            {NETWORKS.map((n) => (
              <button
                key={n.id}
                onClick={() => setSelectedNetwork(n.id)}
                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition border ${
                  selectedNetwork === n.id
                    ? "bg-brand text-ink border-brand shadow-sm"
                    : "border-border bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Wifi className="h-4 w-4" />
                {n.name}
              </button>
            ))}
          </div>

          {/* Pricing Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.size}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-background p-5 transition hover:-translate-y-1 hover:border-brand hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-display text-2xl font-bold">{plan.size}</span>
                    <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-semibold text-brand-deep">
                      {plan.validity}
                    </span>
                  </div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold tracking-tight">₦{plan.price.toLocaleString()}</span>
                    <span className="text-xs text-muted-foreground">/ bundle</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      Instant automated top-up
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      Works on all 4G / 5G smartphones & modems
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      Zero extra gateway fees
                    </li>
                  </ul>
                </div>

                <a
                  href={`${WEB_APP_URL}/auth/signup`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-ink py-2.5 text-xs font-semibold text-white transition hover:opacity-90"
                >
                  Buy {plan.size} Now <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand-deep">
            Seamless Top-ups
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
            How to Buy Data on PayMint in 3 Steps
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-deep font-bold font-display">
              1
            </div>
            <h3 className="mt-4 text-lg font-semibold">Fund Your Wallet</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Transfer funds from any Nigerian bank to your dedicated PayMint virtual account. Balance reflects in 2 seconds.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-deep font-bold font-display">
              2
            </div>
            <h3 className="mt-4 text-lg font-semibold">Choose Network & Size</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Select MTN, Airtel, Glo, or 9mobile. Pick your preferred bundle from 500MB up to 100GB.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand-deep font-bold font-display">
              3
            </div>
            <h3 className="mt-4 text-lg font-semibold">Receive Instant Data</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Enter phone number and confirm. Data is activated on the device immediately with SMS confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Features Strip */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-4 rounded-3xl border border-border bg-secondary/40 p-8 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <div className="font-semibold text-sm">Instant Delivery</div>
              <div className="text-xs text-muted-foreground">Settled in 2 seconds</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="font-semibold text-sm">Bank-Grade Security</div>
              <div className="text-xs text-muted-foreground">256-bit encryption</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <div className="font-semibold text-sm">24/7 Availability</div>
              <div className="text-xs text-muted-foreground">99.9% uptime</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep">
              <BadgeCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="font-semibold text-sm">Cashback Rewards</div>
              <div className="text-xs text-muted-foreground">Earn on every purchase</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto mt-24 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand-deep">
            Got Questions?
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

      {/* Bottom CTA */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl gradient-brand p-8 sm:p-14 text-center text-ink">
          <h2 className="font-display text-3xl font-bold sm:text-5xl">
            Never pay full price for internet data again.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-ink/80 text-base sm:text-lg">
            Join thousands of smart Nigerians buying data at wholesale rates on PayMint.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Get Started Free
            </a>
            <a
              href="/download"
              className="rounded-full border border-ink/20 bg-white/80 px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-white"
            >
              Download Mobile App
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
