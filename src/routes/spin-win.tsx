import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  fetchPublicCampaign,
  PublicCampaignData,
  FALLBACK_CAMPAIGN,
  WheelSegmentSummary,
} from "@/lib/api-client";
import {
  Clock,
  Gift,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  Mail,
  MessageCircle,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

export const Route = createFileRoute("/spin-win")({
  head: () => ({
    meta: [
      { title: "Spin & Win Sprint — Campaign Rules, Odds & FAQ | PayMint" },
      {
        name: "description",
        content:
          "Official rules, prize odds disclosure, qualification criteria, and FAQ for PayMint's Spin & Win Sprint. Transparent odds, fair play, and instant payouts.",
      },
      { property: "og:title", content: "Spin & Win Sprint Rules & Odds | PayMint" },
      {
        property: "og:description",
        content:
          "Official rules and live prize odds for PayMint's Spin & Win Sprint. Read how to qualify, fair-play protections, and dispute appeals.",
      },
      { property: "og:url", content: "https://paymint.com.ng/spin-win" },
      { property: "og:image", content: "https://paymint.com.ng/spin-win-hero.jpg" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://paymint.com.ng/spin-win" }],
  }),
  component: SpinWinPage,
});

const SUPPORT_EMAIL = "paymint485@gmail.com";
const APPEAL_RESPONSE_HOURS = 48;
const LAST_UPDATED = "22 October 2026";

function SpinWinPage() {
  const [data, setData] = useState<PublicCampaignData>(FALLBACK_CAMPAIGN);
  const [isLoading, setIsLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    let mounted = true;
    fetchPublicCampaign().then((res) => {
      if (mounted) {
        if (res) setData(res);
        setIsLoading(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const campaign = data?.campaign;
  const isActive = data?.isActive === true && !!campaign;

  // Live countdown timer based on campaignEnd
  useEffect(() => {
    if (!campaign?.campaignEnd || !campaign.displayCountdown) {
      setTimeLeft(null);
      return;
    }

    const targetDate = new Date(campaign.campaignEnd).getTime();

    const updateTimer = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [campaign?.campaignEnd, campaign?.displayCountdown]);

  const referralCount = campaign?.referralThreshold ?? 5;
  const minTxnVal =
    campaign?.qualificationRule?.params?.minTransactionValue ?? 100;
  const minTxnLabel = `₦${Number(minTxnVal).toLocaleString()}`;
  const segments = campaign?.prizeSegments ?? FALLBACK_CAMPAIGN.campaign!.prizeSegments;
  const poolSize = campaign?.poolSize ?? 135;
  const perUserCap = campaign?.perUserCap ?? 1;
  const campaignTitle = campaign?.tierName ?? "Round 2 Spin & Win Sprint";
  const campaignDescription =
    campaign?.description ??
    `Invite ${referralCount} friends who perform at least ${minTxnLabel} bill payment transaction to earn 1 spin!`;

  // Dynamically formatted rules
  const rulesSections = [
    {
      icon: "🎯",
      title: "How It Works",
      items: [
        `Invite ${referralCount} friend(s) using your unique PayMint referral code or link`,
        "Each referred friend must download the app and register on their own phone device",
        `Each referee must complete identity verification and a qualifying funding/transaction of at least ${minTxnLabel}`,
        `Once all ${referralCount} qualifying referral(s) are confirmed by automated telemetry, 1 spin ticket is unlocked`,
        `Spin ticket cap: ${perUserCap ? `maximum ${perUserCap} spin(s) per user` : "Unlimited spins per user"}`,
        `All outcomes are generated from a verifiable ticket pool with strictly guaranteed odds`,
      ],
    },
    {
      icon: "🚫",
      title: "What Doesn't Count (Anti-Fraud Policy)",
      items: [
        "Accounts registered on the same physical phone or hardware device as the referrer",
        "Multiple accounts created by or associated with the same individual",
        "Self-referrals (referring your own secondary emails or phone numbers)",
        `Referrals who do not complete the required ${minTxnLabel}+ qualifying funding transaction`,
        "Transactions that are cancelled, reversed, refunded, or failed",
        "Referrals initiated before the official campaign sprint start date",
      ],
    },
    {
      icon: "🏆",
      title: "Where Winnings Go",
      items: [
        "Cash, Bonus, and Jackpot rewards credit directly to your PayMint rewards balance immediately",
        "Airtime prizes are dispatched straight to your verified Nigerian mobile phone number",
        "Rewards balance can be spent on any bill payment (airtime, data bundles, electricity tokens, cable TV)",
        "Rewards balance cannot be withdrawn directly to an external commercial bank account",
        "Winnings are applied automatically as an instant discount at checkout",
      ],
    },
    {
      icon: "⚖️",
      title: "Fair-Play & Dispute Resolution",
      items: [
        "Automated device fingerprinting and IP checks audit all referrals for strict compliance",
        "PayMint reserves the right to withhold spins or reverse unearned rewards that violate these terms",
        "Campaign administration decisions are final, subject only to the formal appeal procedure below",
        `To appeal an excluded referral: email ${SUPPORT_EMAIL} within 7 days of campaign close`,
        `Our integrity desk reviews all evidence and replies within ${APPEAL_RESPONSE_HOURS} business hours`,
        `Rules version binding as of: ${LAST_UPDATED}`,
      ],
    },
  ];

  const dynamicFaqs = [
    {
      q: "How do I earn a spin ticket in this campaign?",
      a: `Share your referral link from the PayMint mobile app. When your friend registers on their device and funds their wallet or pays bills totaling at least ${minTxnLabel}, your referral is verified and unlocks your spin ticket.`,
    },
    {
      q: "What counts as a qualifying transaction?",
      a: `Any wallet funding, airtime purchase, data subscription, electricity token purchase, or cable TV bill of ${minTxnLabel} or more completed within the PayMint app by your friend. Reversed or failed transactions do not qualify.`,
    },
    {
      q: "Why did a referral not count toward my spin?",
      a: `A referral qualifies only when a genuinely distinct user signs up on their own phone device and completes the qualifying transaction of ${minTxnLabel}+. Common reasons for exclusion include: device overlap with your phone, duplicate accounts, missing identity verification, or transactions below ${minTxnLabel}.`,
    },
    {
      q: "Can I sign my friends up on my own phone on their behalf?",
      a: "No. Each user must download the app and register on their own mobile device. Registrations originating from the referrer's hardware device are automatically flagged by our anti-fraud telemetry.",
    },
    {
      q: "How many spins can I earn?",
      a: perUserCap
        ? `In this round, each participating user can earn up to ${perUserCap} spin(s).`
        : "You can earn spins for every set of qualifying referrals with no upper cap.",
    },
    {
      q: "What prizes can I win on the wheel?",
      a: `The live wheel has exactly ${segments.length} prize slots. Each spin outcome is drawn from a pre-generated pool of ${poolSize} tickets with the exact odds disclosed below. Instant prizes range from ₦50 Cash & Airtime up to the ₦1,000 Jackpot.`,
    },
    {
      q: "Can I withdraw cash winnings to my Nigerian bank account?",
      a: "Campaign cash rewards credit your PayMint rewards balance, which can be spent freely to buy airtime, mobile data, pay electricity bills, and renew TV subscriptions. Rewards balance cannot be withdrawn directly to a commercial bank account.",
    },
    {
      q: "What is the dispute and appeal process?",
      a: `If you believe a legitimate referral was omitted, send an email to ${SUPPORT_EMAIL} with the subject line "Spin & Win Referral Appeal". Provide your registered PayMint email and your friend's name/phone. We review all logs and reply within ${APPEAL_RESPONSE_HOURS} hours.`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ── Top Status Strip ── */}
      <div className={`py-2 px-4 text-center text-xs font-semibold ${
        isActive
          ? "bg-emerald-950 text-emerald-200 border-b border-emerald-800/40"
          : "bg-amber-950 text-amber-200 border-b border-amber-800/40"
      }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2">
          <span className={`h-2 w-2 rounded-full ${isActive ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
          <span>
            {isActive
              ? `Campaign Status: ${campaignTitle} is LIVE and accepting qualifying referrals`
              : "Campaign Status: This round has concluded or is paused. Stay tuned for announcements!"}
          </span>
        </div>
      </div>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B45C8] via-[#093db5] to-[#062c82] py-16 sm:py-24 text-white">
        <div aria-hidden className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Copy Column */}
            <div className="text-center lg:text-left lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                <span className={`inline-block h-2 w-2 rounded-full ${isActive ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
                {isActive ? "Official Active Sprint" : "Sprint Concluded"}
              </div>

              <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
                🎰 {campaignTitle}
              </h1>

              <p className="mt-5 text-base sm:text-lg leading-relaxed text-blue-100">
                {campaignDescription}
              </p>

              {/* Countdown or Pool Status Indicator */}
              {isActive && timeLeft && (
                <div className="mt-6 rounded-2xl border border-white/20 bg-black/25 p-4 backdrop-blur-md max-w-md mx-auto lg:mx-0">
                  <div className="flex items-center justify-between text-xs text-cyan-300 font-semibold uppercase tracking-wider mb-2">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> Sprint Closes In:
                    </span>
                    {campaign?.totalSpinsLeft !== undefined && campaign.displaySpinsLeft && (
                      <span className="text-white/80">
                        {campaign.totalSpinsLeft} spins left
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    {[
                      ["Days", timeLeft.days],
                      ["Hours", timeLeft.hours],
                      ["Mins", timeLeft.minutes],
                      ["Secs", timeLeft.seconds],
                    ].map(([label, val]) => (
                      <div key={label as string} className="rounded-xl bg-white/10 py-1.5 px-2">
                        <div className="font-display text-xl font-bold text-white">
                          {String(val).padStart(2, "0")}
                        </div>
                        <div className="text-[9px] uppercase tracking-wider text-blue-200">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {isActive && !timeLeft && campaign?.displaySpinsLeft && (
                <div className="mt-6 rounded-2xl border border-white/20 bg-black/25 p-4 backdrop-blur-md max-w-md mx-auto lg:mx-0">
                  <div className="flex items-center justify-between text-xs text-cyan-300 font-semibold uppercase tracking-wider mb-2">
                    <span className="flex items-center gap-1.5">
                      <Gift className="h-3.5 w-3.5" /> Live Ticket Pool Status
                    </span>
                    <span className="text-emerald-300 font-bold">
                      {campaign.totalSpinsLeft} spins remaining
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/80 mt-1">
                    <span>Pool Total: <strong>{campaign.poolSize} tickets</strong></span>
                    <span>Claimed: <strong>{campaign.totalSpinsUsed}</strong></span>
                  </div>
                  <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-white/10 p-0.5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                      style={{
                        width: `${Math.max(
                          4,
                          Math.min(
                            100,
                            (campaign.totalSpinsLeft / (campaign.poolSize || 1)) * 100
                          )
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              )}

              {/* Key Metrics Quick Strip */}
              <div className="mt-6 grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0">
                <div className="rounded-2xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
                  <p className="font-display text-xl font-bold text-white">{referralCount}</p>
                  <p className="text-[11px] text-blue-200 mt-0.5">Referral{referralCount > 1 ? "s" : ""}</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
                  <p className="font-display text-xl font-bold text-white">{minTxnLabel}</p>
                  <p className="text-[11px] text-blue-200 mt-0.5">Min. Funding</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
                  <p className="font-display text-xl font-bold text-cyan-300">₦1,000</p>
                  <p className="text-[11px] text-blue-200 mt-0.5">Jackpot Prize</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  id="spin-win-open-app-cta"
                  href="https://app.paymint.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-ink shadow-lg transition hover:bg-cyan-300"
                >
                  <span>Launch PayMint App</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  id="spin-win-rules-cta"
                  href="#rules"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <span>Read Official Rules</span>
                  <ChevronDown className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Hero Image Column */}
            <div className="flex justify-center lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30 blur-xl group-hover:opacity-50 transition" />
                <img
                  src="/spin-win-hero.jpg"
                  alt="PayMint Spin & Win promotional wheel showing 7 real prizes: ₦50 Cash, ₦50 Airtime, ₦100 Cash, ₦100 Airtime, ₦200 Bonus, ₦500 Bonus, ₦1,000 Jackpot"
                  width={520}
                  height={520}
                  className="relative w-full max-w-sm rounded-2xl shadow-2xl border border-white/20 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Public Prize Odds Disclosure Banner ── */}
      <section className="border-y border-border bg-amber-500/10 py-4">
        <div className="mx-auto max-w-4xl px-4 text-center text-xs sm:text-sm text-foreground/90 font-medium">
          <strong>Official Odds Transparency (Pool of {poolSize} tickets):</strong>{" "}
          {segments.map((seg, idx) => (
            <span key={seg.label}>
              {seg.label} {seg.oddsPercentage}%{idx < segments.length - 1 ? " · " : ""}
            </span>
          ))}
          . All outcomes are randomly determined at time of claim.
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 space-y-20">
        {/* ── Live Prize Table Section ── */}
        <section id="prizes" className="scroll-mt-20">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <Gift className="h-3.5 w-3.5 text-brand-deep" /> Verified Prize Catalogue
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              What You Can Win
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Every spin ticket unlocks 1 random prize from the live pool. Odds are strictly governed by the configured ticket counts.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-muted/60 border-b border-border">
                <tr>
                  <th className="px-5 py-3.5 text-left font-semibold text-foreground">Prize Segment</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-foreground">Reward Type</th>
                  <th className="px-5 py-3.5 text-left font-semibold text-foreground">Value</th>
                  <th className="px-5 py-3.5 text-right font-semibold text-foreground">Probability (Odds)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {segments.map((seg) => (
                  <tr key={seg.label} className="hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-4 font-medium text-foreground">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="inline-block h-3.5 w-3.5 shrink-0 rounded-full shadow-sm"
                          style={{ backgroundColor: seg.displayColor }}
                        />
                        <span>{seg.label}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 capitalize text-muted-foreground">
                      <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${
                        seg.rewardType === "balance"
                          ? "bg-blue-500/10 text-blue-600 border border-blue-500/20"
                          : "bg-pink-500/10 text-pink-600 border border-pink-500/20"
                      }`}>
                        {seg.rewardType === "balance" ? "Cash Balance" : "Airtime Top-Up"}
                      </span>
                    </td>
                    <td className="px-5 py-4 font-semibold text-foreground">
                      ₦{seg.rewardValue.toLocaleString()}
                    </td>
                    <td className="px-5 py-4 text-right font-mono font-bold text-foreground">
                      {seg.oddsPercentage}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Official Rules Grid ── */}
        <section id="rules" className="scroll-mt-20">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-deep" /> Comprehensive Terms
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Official Campaign Rules
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Please review the participation criteria. All referrals are verified by automated audit systems.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {rulesSections.map((sec) => (
              <div
                key={sec.title}
                className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{sec.icon}</span>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {sec.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    {sec.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-brand-deep shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Campaign FAQ ── */}
        <section id="faq" className="scroll-mt-20">
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <HelpCircle className="h-3.5 w-3.5 text-brand-deep" /> Questions & Clarifications
            </div>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {dynamicFaqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-border bg-card p-5 transition-all open:bg-secondary/40"
              >
                <summary className="flex cursor-pointer items-center justify-between font-display font-semibold text-foreground hover:text-brand-deep list-none">
                  <span>{faq.q}</span>
                  <span className="ml-4 shrink-0 text-muted-foreground transition group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ── Appeal Process Card ── */}
        <section id="appeal" className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                <Mail className="h-4 w-4" /> Formal Appeal Route
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
                Believe an exclusion was made in error?
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                If you referred a genuine user who completed their {minTxnLabel}+ transaction and their credit was omitted, submit an appeal. We audit the transaction hashes and reply within {APPEAL_RESPONSE_HOURS} hours.
              </p>
            </div>
            <a
              href={`mailto:${SUPPORT_EMAIL}?subject=Spin%20%26%20Win%20Referral%20Appeal&body=Hi%20PayMint%20Team%2C%0A%0AMy%20registered%20email%20is%3A%20%0A%0AMy%20friend%27s%20name%2Fusername%20is%3A%20%0A%0ADate%20of%20referral%3A%20%0A%0AQualifying%20transaction%20amount%3A%20%0A%0APlease%20review%20this%20referral.`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 shadow-sm"
            >
              <Mail className="h-4 w-4" />
              <span>Submit Referral Appeal</span>
            </a>
          </div>
        </section>

        {/* ── In-App Minty Support Callout ── */}
        <div className="rounded-2xl border border-border bg-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand text-ink">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <div className="font-display font-semibold text-foreground">Need instantaneous help?</div>
              <div className="text-sm text-muted-foreground">
                Chat with <strong>Minty</strong> directly inside the PayMint app for live assistance.
              </div>
            </div>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center rounded-full border border-border bg-secondary px-5 py-2.5 text-xs font-semibold text-foreground transition hover:bg-secondary/80"
          >
            Visit Help Desk
          </Link>
        </div>

        {/* ── Legal Footer ── */}
        <div className="border-t border-border pt-8 text-center text-xs text-muted-foreground">
          <p>
            PayMint Spin &amp; Win Sprint is operated by Qoreforma Solutions Limited. Official rules binding as of {LAST_UPDATED}.
            Odds are fixed per ticket batch. Void where prohibited by law.
          </p>
          <div className="mt-3 flex justify-center gap-4">
            <Link to="/terms" className="hover:text-foreground transition underline underline-offset-2">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-foreground transition underline underline-offset-2">Privacy Policy</Link>
            <Link to="/security" className="hover:text-foreground transition underline underline-offset-2">Security</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
