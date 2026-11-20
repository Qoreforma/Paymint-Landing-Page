import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wifi,
  Smartphone,
  Zap,
  Tv,
  Globe,
  Wallet,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const CANONICAL_URL = "https://www.paymint.com.ng/services";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title: "All Bill Payment & Fintech Services in Nigeria | PayMint",
      },
      {
        name: "description",
        content:
          "Explore PayMint's full suite of automated bill payment services: cheap data bundles, airtime recharge, prepaid electricity tokens, and cable TV renewals.",
      },
      { property: "og:title", content: "PayMint Services — One Wallet for Every Bill" },
      {
        property: "og:description",
        content: "Explore instant bill payments, virtual account wallet funding, and wholesale data bundles.",
      },
      { property: "og:url", content: CANONICAL_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.paymint.com.ng/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PayMint Services — One Wallet for Every Bill" },
      {
        name: "twitter:description",
        content: "Explore instant bill payments, virtual account wallet funding, and wholesale data bundles.",
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: ServicesIndexPage,
});

const SERVICES = [
  {
    title: "Mobile Internet Data",
    description: "Cheap SME & Gifting data bundles for MTN, Airtel, Glo, and 9mobile with up to 70% discount.",
    href: "/services/data",
    icon: Wifi,
    badge: "Most Popular",
  },
  {
    title: "Airtime Recharge",
    description: "Instant phone credit top-up with cashbacks on every recharge across MTN, Airtel, Glo, and 9mobile.",
    href: "/services/airtime",
    icon: Smartphone,
    badge: "Instant Cashback",
  },
  {
    title: "Prepaid Electricity",
    description: "Instant 20-digit prepaid meter token generation for IKEDC, EKEDC, AEDC, IBEDC, and all DisCos.",
    href: "/services/electricity",
    icon: Zap,
    badge: "24/7 Delivery",
  },
  {
    title: "Cable TV Renewal",
    description: "Renew DStv, GOtv, and StarTimes decoders in seconds with automatic E16 error clearing.",
    href: "/services/cable-tv",
    icon: Tv,
    badge: "Zero Fee",
  },
  {
    title: "Virtual Wallet Funding",
    description: "Dedicated personal static bank account numbers for instant funding from any Nigerian bank.",
    href: "/#features",
    icon: Wallet,
    badge: "Automated",
  },
];

function ServicesIndexPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.paymint.com.ng" },
      { "@type": "ListItem", position: 2, name: "Services", item: CANONICAL_URL },
    ],
  };

  return (
    <div className="relative overflow-hidden pt-8 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visible Breadcrumbs */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-xs text-muted-foreground flex items-center gap-2">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <span className="text-foreground font-medium">Services</span>
      </nav>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-deep backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-brand-deep" />
          PayMint Service Catalogue
        </div>

        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Everything Money Should Already Do.
          <br />
          <span className="text-gradient-brand">All in One Single Wallet.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Discover PayMint's automated payment infrastructure built for speed, discounts, and 24/7 reliability across Nigeria.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-border bg-card p-6 flex flex-col justify-between hover:border-brand hover:shadow-lg transition"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand-deep group-hover:bg-brand group-hover:text-ink transition">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                    {s.badge}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60">
                <Link
                  to={s.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-deep group-hover:translate-x-0.5 transition"
                >
                  Explore Service <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
