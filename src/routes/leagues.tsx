import { createFileRoute } from "@tanstack/react-router";
import {
  Trophy,
  Sparkles,
  Layers,
  ShieldCheck,
  Gift,
  HelpCircle,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/leagues")({
  head: () => ({
    meta: [
      { title: "PayMint Leagues & Leaderboard Guide — How Ranking Works | PayMint" },
      {
        name: "description",
        content:
          "Learn how PayMint Leagues and Leaderboards work. Earn points on everyday bill payments, climb leagues, and win seasonal cash & spin rewards.",
      },
      { property: "og:title", content: "How PayMint Leagues & Leaderboards Work" },
      {
        property: "og:description",
        content:
          "Earn points on airtime, data, electricity, and cable TV payments to unlock higher leagues and win seasonal rewards.",
      },
      { property: "og:url", content: "https://www.paymint.com.ng/leagues" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://www.paymint.com.ng/leagues" }],
  }),
  component: LeaguesGuidePage,
});

const LEAGUES = [
  {
    name: "Bronze League",
    color: "bg-amber-100 text-amber-800 border-amber-300",
    desc: "Starting tier for every PayMint user. Begin transacting to start scoring points.",
  },
  {
    name: "Silver League",
    color: "bg-slate-100 text-slate-700 border-slate-300",
    desc: "Unlocked as your seasonal spend grows. Compete against steady bill payers.",
  },
  {
    name: "Gold League",
    color: "bg-yellow-50 text-yellow-800 border-yellow-300",
    desc: "Mid-to-high volume spenders competing for bigger seasonal reward pools.",
  },
  {
    name: "Platinum League",
    color: "bg-cyan-50 text-cyan-800 border-cyan-300",
    desc: "High-activity power users unlocking higher tier rewards and spin bonuses.",
  },
  {
    name: "Diamond League",
    color: "bg-indigo-50 text-indigo-800 border-indigo-300",
    desc: "Top tier on PayMint with the highest prestige and seasonal prize pools.",
  },
];

const FAQS = [
  {
    q: "What is the difference between spending (leagues) and points (ranks)?",
    a: "Your total qualifying spend during the active season sets your league tier (Bronze, Silver, Gold, Platinum, or Diamond) and resets when a new season starts. Inside your league, your rank is determined by points earned—and you must beat the score of the person ahead (ties do not pass an earlier achiever).",
  },
  {
    q: "How do I earn leaderboard points?",
    a: "Every qualifying bill payment you complete on PayMint (airtime, mobile data, electricity, cable TV, airtime e-pins, or education) automatically earns points based on the transaction amount.",
  },
  {
    q: "How do leagues unlock and do they reset?",
    a: "Your total qualifying spend during the active season determines your league tier. As your seasonal spend crosses each threshold, you unlock the next league automatically. When a new season begins, spend and points start fresh for the new season.",
  },
  {
    q: "What are category leaderboards?",
    a: "In addition to overall league standings, PayMint tracks category rankings such as Data Master, MTN/Airtel/Glo Champions, Electricity, and Cable TV so specialists can win too.",
  },
  {
    q: "When are rewards paid out?",
    a: "Once a season ends, standings are verified to ensure fair play and protect against reversed transactions. Confirmed winners receive wallet cash bonuses, spin tickets, or seasonal prizes.",
  },
  {
    q: "Do reversed or failed transactions count?",
    a: "No. Only completed, successful transactions above the minimum qualifying amount count. Reversed or refunded payments are automatically deducted.",
  },
];

function LeaguesGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-[#EFF5FF] via-background to-background py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-3.5 py-1 text-xs font-semibold text-brand-deep mb-5">
            <Trophy className="h-3.5 w-3.5" />
            PayMint League Leaderboard
          </div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-5xl">
            How PayMint Leagues & Ranking Work
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Pay your everyday bills, earn points automatically, unlock higher leagues, and win
            seasonal cash bonuses, spin tickets, and prizes.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://app.paymint.com.ng/dashboard/leaderboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
            >
              View Live Leaderboard
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 3 Core Steps */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 border border-amber-200">
                <Sparkles className="h-5 w-5" />
              </div>
              <h2 className="font-display text-lg font-bold text-ink">1. Transact & Score</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Every completed transaction across airtime, data bundles, electricity, cable TV, and
                education automatically awards points and builds your seasonal volume.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand border border-blue-200">
                <Layers className="h-5 w-5" />
              </div>
              <h2 className="font-display text-lg font-bold text-ink">2. Unlock Leagues</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                As your seasonal transaction volume crosses tier thresholds, you unlock higher
                leagues — from Bronze up to Diamond — competing with users in your bracket.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200">
                <Gift className="h-5 w-5" />
              </div>
              <h2 className="font-display text-lg font-bold text-ink">3. Win Seasonal Rewards</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                At the end of each season, standings are verified and top-ranked participants across
                leagues and categories win cash bonuses, spin wheel tickets, or special prizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* League Tiers */}
      <section className="border-y border-border bg-muted/30 py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              League Progression Tiers
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Your seasonal spend unlocks each tier automatically — no manual opt-in required.
            </p>
          </div>
          <div className="space-y-3">
            {LEAGUES.map((league, idx) => (
              <div
                key={league.name}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4 sm:px-6"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-muted-foreground w-6">
                    0{idx + 1}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${league.color}`}
                  >
                    {league.name}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground sm:text-right">{league.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fair Play + FAQs */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 mb-12 flex items-start gap-3.5">
            <ShieldCheck className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display text-base font-bold text-ink">Fair Play & Verification</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  Privacy-first rankings: only masked display names and initials appear publicly.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  Automated integrity checks exclude reversed, failed, or abusive transactions.
                </li>
              </ul>
            </div>
          </div>

          <h2 className="font-display text-2xl font-bold text-ink mb-6 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-brand" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {FAQS.map((item) => (
              <div key={item.q} className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-semibold text-ink text-base">{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
