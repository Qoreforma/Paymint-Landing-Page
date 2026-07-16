import { createFileRoute } from "@tanstack/react-router";
import {
  Wallet,
  Smartphone,
  Wifi,
  Zap,
  Tv,
  Globe,
  MessageCircle,
  Gift,
  ShieldCheck,
  Lock,
  BadgeCheck,
  ArrowRight,
  Check,
  Sparkles,
  Menu,
} from "lucide-react";
import phoneMockup from "@/assets/paymint-phone.png";

export const Route = createFileRoute("/")({
  component: Landing,
});

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.paymint.app";
const WEB_APP_URL = "https://app.paymint.co";

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src="/logo.png" alt="PayMint Logo" className="h-16 w-auto object-contain" />
    </div>
  );
}

function PlayStoreButton() {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-2xl bg-ink px-5 py-3 text-white transition hover:opacity-90"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M3.6 2.3c-.4.3-.6.8-.6 1.5v16.4c0 .7.2 1.2.6 1.5l9.1-9.6L3.6 2.3zm10.3 10.6l2.5 2.6-11.1 6.3c-.3.2-.6.2-.9.1l9.5-9zm3.6-1.9l3 1.7c.9.5.9 1.4 0 1.9l-3 1.7-2.8-2.7 2.8-2.6zM4.4 1.8c.3-.1.6-.1.9.1l11.1 6.3-2.5 2.6L4.4 1.8z" />
      </svg>
      <div className="text-left leading-tight">
        <div className="text-[10px] uppercase tracking-wider opacity-70">Get it on</div>
        <div className="font-display text-lg font-semibold">Google Play</div>
      </div>
    </a>
  );
}

function WebButton() {
  return (
    <a
      href={WEB_APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 rounded-2xl border-2 border-ink/10 bg-white px-5 py-3 text-ink transition hover:border-aqua hover:shadow-[0_10px_30px_-10px_oklch(0.82_0.13_200_/_0.5)]"
    >
      <div className="grid h-7 w-7 place-items-center rounded-lg bg-aqua-soft">
        <Globe className="h-4 w-4 text-aqua-deep" />
      </div>
      <div className="text-left leading-tight">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">No app? No problem</div>
        <div className="font-display text-lg font-semibold">Use on Web</div>
      </div>
    </a>
  );
}

function DownloadRow() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <PlayStoreButton />
      <WebButton />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["Features", "#features"],
            ["How it works", "#how"],
            ["Refer & Earn", "#refer"],
            ["Download", "#download"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-muted-foreground transition hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#download"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:inline-flex"
          >
            Get the App
          </a>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-border md:hidden" aria-label="Menu">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 gradient-aqua-radial" />
      <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-aqua/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-aqua-soft/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-12 pb-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8 lg:pt-20 lg:pb-28">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-aqua/40 bg-white/70 px-3 py-1.5 text-xs font-medium text-aqua-deep backdrop-blur">
            <span className="grid h-4 w-4 place-items-center rounded-full bg-aqua">
              <Check className="h-3 w-3 text-white" strokeWidth={3} />
            </span>
            New — Pay bills straight from WhatsApp
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Fund your wallet.<br />
            <span className="text-gradient-aqua">Pay every bill.</span><br />
            Instantly.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            PayMint gives you a personal virtual account to load your wallet — then pays your airtime, data,
            eSIMs, electricity and cable TV in one tap. Right from the app, or from a WhatsApp chat.
          </p>

          <div className="mt-8">
            <DownloadRow />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-aqua-deep" />
              Bank-level security
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-4 w-4 text-aqua-deep" />
              Licensed payment partner
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-aqua-deep" />
              Instant settlement
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10 mx-auto h-[520px] max-w-md rounded-[3rem] gradient-aqua opacity-40 blur-2xl" />
          <img
            src={phoneMockup}
            alt="PayMint app on a smartphone showing wallet balance and bill payment options"
            width={912}
            height={1200}
            className="relative w-full max-w-md drop-shadow-[0_40px_60px_oklch(0.55_0.12_210_/_0.25)]"
          />
          <div className="absolute -left-2 top-16 hidden rounded-2xl border border-border bg-white p-3 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-aqua-soft">
                <MessageCircle className="h-5 w-5 text-aqua-deep" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">via WhatsApp</div>
                <div className="text-sm font-semibold">Airtime sent ✓</div>
              </div>
            </div>
          </div>
          <div className="absolute -right-2 bottom-24 hidden rounded-2xl border border-border bg-white p-3 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-aqua-soft">
                <Wallet className="h-5 w-5 text-aqua-deep" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Wallet funded</div>
                <div className="text-sm font-semibold">+ ₦50,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      icon: Wallet,
      title: "Fund your wallet",
      body: "Get a static or dynamic virtual account number. Send a bank transfer — your balance lands instantly.",
    },
    {
      icon: Sparkles,
      title: "Choose a bill",
      body: "Airtime, data, eSIM, electricity, cable TV — pick what you want to pay in seconds.",
    },
    {
      icon: Zap,
      title: "Pay instantly",
      body: "One tap. Tokens, receipts and confirmations delivered right away.",
    },
    {
      icon: MessageCircle,
      title: "Or do it from WhatsApp",
      body: "Chat with PayMint to top up your wallet and pay bills without opening the app.",
    },
  ];

  return (
    <section id="how" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-sm font-semibold uppercase tracking-widest text-aqua-deep">How it works</div>
        <h2 className="mt-3 text-4xl font-bold sm:text-5xl">From transfer to paid, in seconds</h2>
        <p className="mt-4 text-muted-foreground">
          A wallet you fund by bank transfer, spent on the bills you already pay every month.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="group relative rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-aqua hover:shadow-[0_20px_40px_-20px_oklch(0.82_0.13_200_/_0.4)]"
          >
            <div className="flex items-center justify-between">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-aqua-soft text-aqua-deep">
                <s.icon className="h-6 w-6" />
              </div>
              <span className="font-display text-2xl font-bold text-aqua/70">0{i + 1}</span>
            </div>
            <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const bills = [
    { icon: Smartphone, label: "Airtime" },
    { icon: Wifi, label: "Data" },
    { icon: Globe, label: "eSIM" },
    { icon: Zap, label: "Electricity" },
    { icon: Tv, label: "Cable TV" },
    { icon: Sparkles, label: "And more" },
  ];
  return (
    <section id="features" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-widest text-aqua-deep">Features</div>
          <h2 className="mt-3 text-4xl font-bold sm:text-5xl">Everything money should already do</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Wallet funding */}
          <div className="lg:col-span-7 rounded-3xl border border-border bg-card p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-white">
                <Wallet className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Instant wallet funding</span>
            </div>
            <h3 className="mt-5 font-display text-3xl font-bold">Your own virtual account, ready to receive</h3>
            <p className="mt-3 text-muted-foreground">
              Every PayMint user gets a static account number for repeat funding and dynamic accounts for one-off
              transfers. Send from any bank — funds land in your wallet in real time.
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-background p-5">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Your static account</div>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <div className="font-display text-2xl font-bold tracking-tight">9042 1188 03</div>
                  <div className="text-sm text-muted-foreground">PayMint / Wema Bank</div>
                </div>
                <div className="rounded-full bg-aqua-soft px-3 py-1 text-xs font-semibold text-aqua-deep">
                  ● Live
                </div>
              </div>
            </div>
          </div>

          {/* All bills */}
          <div className="lg:col-span-5 rounded-3xl border border-border gradient-aqua p-8 sm:p-10 text-ink">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/70">
              <Sparkles className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-display text-3xl font-bold">All your bills, one app</h3>
            <p className="mt-3 text-ink/70">
              Stop juggling apps and USSD codes. Pay everything from a single balance.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {bills.map((b) => (
                <div key={b.label} className="flex items-center gap-2 rounded-xl bg-white/70 px-3 py-2 text-sm font-semibold">
                  <b.icon className="h-4 w-4" />
                  {b.label}
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp */}
          <div className="lg:col-span-5 rounded-3xl border border-border bg-card p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#25D366] text-white">
                <MessageCircle className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">WhatsApp payments</span>
            </div>
            <h3 className="mt-5 font-display text-3xl font-bold">Pay bills without leaving your chats</h3>
            <p className="mt-3 text-muted-foreground">
              Message PayMint on WhatsApp to fund your wallet, buy airtime, top up data or pay for electricity —
              no app-switching, no menus.
            </p>
            <div className="mt-6 space-y-2">
              <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-aqua-soft px-4 py-2 text-sm">
                Buy ₦2,000 MTN airtime
              </div>
              <div className="w-fit max-w-[80%] rounded-2xl rounded-bl-sm bg-secondary px-4 py-2 text-sm">
                Sent ✓ New balance: ₦123,400
              </div>
            </div>
          </div>

          {/* Refer & Earn card */}
          <div className="lg:col-span-7 rounded-3xl border border-border bg-ink p-8 sm:p-10 text-white">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-aqua text-ink">
                <Gift className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-widest text-white/60">Refer & Earn</span>
            </div>
            <h3 className="mt-5 font-display text-3xl font-bold">Get paid, cash, for every friend you bring in</h3>
            <p className="mt-3 text-white/70">
              Share your link. When your friends sign up and start paying bills, you get a cash bonus dropped
              straight into your PayMint wallet.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="rounded-2xl bg-white/10 px-4 py-3">
                <div className="text-xs uppercase tracking-widest text-white/60">Bonus / referral</div>
                <div className="font-display text-2xl font-bold text-aqua">₦1,500+</div>
              </div>
              <a href="#refer" className="inline-flex items-center gap-2 rounded-full bg-aqua px-5 py-3 font-semibold text-ink transition hover:opacity-90">
                Become a partner <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReferSpotlight() {
  return (
    <section id="refer" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 gradient-aqua-radial" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-aqua/40 bg-white/70 px-3 py-1.5 text-xs font-medium text-aqua-deep backdrop-blur">
          <Gift className="h-4 w-4" /> PayMint Partners
        </div>
        <h2 className="mt-6 font-display text-4xl font-bold sm:text-6xl">
          Creators earn cash <span className="text-gradient-aqua">every time</span> someone joins.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Built for influencers, community builders and everyday users. Share your link, watch signups roll in,
          and get paid — in real Naira, not points.
        </p>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          {[
            ["Instant payout", "Bonuses hit your wallet the moment your referrals qualify."],
            ["Live dashboard", "Track clicks, signups and earnings from inside the app."],
            ["No cap", "Refer 5 or 5,000 — you keep earning on every one."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-5 text-left">
              <div className="font-display text-lg font-semibold">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>

        <a
          href={WEB_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white transition hover:opacity-90"
        >
          Become a PayMint Partner <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: Lock, title: "256-bit encryption", body: "Every transfer is end-to-end encrypted." },
    { icon: ShieldCheck, title: "Bank-level security", body: "Biometric login and transaction PIN protection." },
    { icon: BadgeCheck, title: "Licensed partner", body: "Working with regulated payment institutions." },
    { icon: Zap, title: "99.9% uptime", body: "Built to settle when you need it — instantly." },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((i) => (
          <div key={i.title} className="flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-aqua-soft text-aqua-deep">
              <i.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold">{i.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{i.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DownloadCTA() {
  return (
    <section id="download" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] gradient-aqua p-10 sm:p-16">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/40 blur-2xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-ink/10 blur-2xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-bold text-ink sm:text-5xl">
              One wallet. Every bill.<br />Ready when you are.
            </h2>
            <p className="mt-4 max-w-xl text-ink/80">
              Download PayMint on Android, or hop on the web app right now. iOS is on the way.
            </p>
            <div className="mt-8">
              <DownloadRow />
            </div>
          </div>
          <div className="hidden justify-end lg:flex">
            <div className="rounded-3xl bg-white/60 p-6 backdrop-blur">
              <div className="text-xs uppercase tracking-widest text-ink/60">This month</div>
              <div className="mt-1 font-display text-4xl font-bold text-ink">₦2.4B+</div>
              <div className="mt-1 text-sm text-ink/70">in bills paid on PayMint</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            The wallet for airtime, data, eSIMs, electricity, cable TV and every other bill.
          </p>
        </div>
        {[
          ["Product", [["Features", "#features"], ["How it works", "#how"], ["Download", "#download"]]],
          ["Company", [["Refer & Earn", "#refer"], ["Partners", "#refer"], ["Contact", "mailto:hello@paymint.co"]]],
          ["Legal", [["Terms", "#"], ["Privacy", "#"], ["Security", "#"]]],
        ].map(([title, links]) => (
          <div key={title as string}>
            <div className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {title as string}
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {(links as [string, string][]).map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="text-ink/80 transition hover:text-aqua-deep">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <div>© {new Date().getFullYear()} PayMint. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-ink">Twitter</a>
            <a href="#" aria-label="Instagram" className="hover:text-ink">Instagram</a>
            <a href="#" aria-label="WhatsApp" className="hover:text-ink">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <ReferSpotlight />
        <TrustStrip />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
