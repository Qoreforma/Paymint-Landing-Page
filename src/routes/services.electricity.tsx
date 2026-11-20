import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  Check,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Clock,
  BadgeCheck,
} from "lucide-react";
import { trackAppDownload, trackWebAppClick } from "@/lib/analytics";

const CANONICAL_URL = "https://www.paymint.com.ng/services/electricity";
const WEB_APP_URL = "https://app.paymint.com.ng";

export const Route = createFileRoute("/services/electricity")({
  head: () => ({
    meta: [
      {
        title: "Buy Prepaid Electricity Tokens Online in Nigeria (IKEDC, EKEDC, AEDC) | PayMint",
      },
      {
        name: "description",
        content:
          "Buy electricity tokens online in Nigeria 24/7. Instant 20-digit prepaid token generation for IKEDC, EKEDC, AEDC, IBEDC, EEDC, and all DisCos with zero hidden fees.",
      },
      {
        name: "keywords",
        content:
          "buy electricity token online, pay electricity bill nigeria, ikedc token online, ekedc token, aedc token instant, prepaid meter token, paymint electricity",
      },
      {
        property: "og:title",
        content: "Buy Prepaid Electricity Tokens Online in Nigeria | PayMint",
      },
      {
        property: "og:description",
        content: "Instant 20-digit prepaid meter token generation for all Nigerian DisCos. 24/7 availability.",
      },
      { property: "og:url", content: CANONICAL_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.paymint.com.ng/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Buy Prepaid Electricity Tokens Online in Nigeria | PayMint" },
      {
        name: "twitter:description",
        content: "Instant 20-digit prepaid meter token generation for all Nigerian DisCos. 24/7 availability.",
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: ElectricityLandingPage,
});

const DISCOS = [
  { name: "Ikeja Electric (IKEDC)", coverage: "Lagos Mainland, Ikeja, Ikorodu, Oshodi" },
  { name: "Eko Electricity (EKEDC)", coverage: "Lagos Island, Lekki, Victoria Island, Ajah" },
  { name: "Abuja Electric (AEDC)", coverage: "Abuja FCT, Nasarawa, Niger, Kogi" },
  { name: "Ibadan Electric (IBEDC)", coverage: "Oyo, Ogun, Osun, Kwara" },
  { name: "Enugu Electric (EEDC)", coverage: "Enugu, Abia, Imo, Anambra, Ebonyi" },
  { name: "Port Harcourt (PHED)", coverage: "Rivers, Bayelsa, Cross River, Akwa Ibom" },
  { name: "Kano Electric (KEDCO)", coverage: "Kano, Katsina, Jigawa" },
  { name: "Kaduna Electric (KAEDCO)", coverage: "Kaduna, Sokoto, Kebbi, Zamfara" },
  { name: "Jos Electric (JED)", coverage: "Plateau, Bauchi, Benue, Gombe" },
];

const FAQS = [
  {
    q: "How fast do I receive my 20-digit prepaid meter token?",
    a: "Your token is generated in real-time within 2 to 5 seconds after payment. It is shown on your screen, sent via SMS, and saved in your transaction receipts.",
  },
  {
    q: "Does PayMint verify the meter name before charging?",
    a: "Yes! When you input your meter number, PayMint queries the DisCo database to verify customer name and address before you confirm payment.",
  },
  {
    q: "Can I pay postpaid electricity bills as well?",
    a: "Yes! PayMint supports both Prepaid (token generation) and Postpaid (direct account settlement) bills across all supported DisCos.",
  },
];

function ElectricityLandingPage() {
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
    serviceType: "Prepaid Electricity Token Settlement",
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
      "Instant prepaid meter token generation and postpaid electricity payments for all Nigerian DisCos.",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.paymint.com.ng" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.paymint.com.ng/services" },
      { "@type": "ListItem", position: 3, name: "Prepaid Electricity", item: CANONICAL_URL },
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
        <span className="text-foreground font-medium">Prepaid Electricity</span>
      </nav>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-deep backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-brand-deep" />
          Prepaid & Postpaid Meter Recharge — 24/7 Instant Token
        </div>

        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Buy Electricity Tokens Online.
          <br />
          <span className="text-gradient-brand">Never Get Stranded in the Dark.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Recharge your prepaid meter anytime, day or night. Instant 20-digit token delivery directly on your screen and via SMS for all Nigerian DisCos.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWebAppClick("electricity_hero")}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Recharge Meter Now <ArrowRight className="h-4 w-4" />
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

      {/* DisCos Grid */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">All Nigerian DisCos Supported</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Pay for your prepaid or postpaid electricity meter across all 36 states and the FCT.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DISCOS.map((disco) => (
            <div
              key={disco.name}
              className="rounded-2xl border border-border bg-card p-5 hover:border-brand transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand-deep">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div className="font-semibold text-sm">{disco.name}</div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">{disco.coverage}</p>
              </div>
              <a
                href={WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWebAppClick(`disco_${disco.name.toLowerCase().replace(/[^a-z0-9]/g, "_")}`)}
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-deep hover:underline"
              >
                Recharge {disco.name.split("(")[0].trim()} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
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
    </div>
  );
}
