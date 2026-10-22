import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles, Trophy, ArrowRight, Clock, ShieldCheck, Gift } from "lucide-react";
import { fetchPublicCampaign, PublicCampaignData, FALLBACK_CAMPAIGN } from "@/lib/api-client";

export function LiveCampaignSpotlight() {
  const [campaignData, setCampaignData] = useState<PublicCampaignData>(FALLBACK_CAMPAIGN);
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number } | null>(null);

  useEffect(() => {
    let mounted = true;
    fetchPublicCampaign().then((data) => {
      if (mounted && data) {
        setCampaignData(data);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const campaign = campaignData?.campaign;
  const isLive = campaignData?.isActive === true && campaign;

  // Countdown timer calculation
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
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [campaign?.campaignEnd, campaign?.displayCountdown]);

  if (!isLive) {
    return null;
  }

  const qualificationDesc =
    campaign.qualificationRule?.description ||
    `Invite ${campaign.referralThreshold} friend who completes identity setup & funds at least ₦1,000.`;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#07246b] via-[#0B45C8] to-[#14214b] p-8 text-white sm:p-12 lg:p-16 shadow-2xl border border-blue-400/20">
        {/* Glow ambient background lights */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-indigo-500/30 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Campaign Details */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-400/30 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                OFFICIAL LIVE CAMPAIGN
              </span>

              {campaign.displaySpinsLeft && campaign.totalSpinsLeft > 0 && (
                <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
                  <Gift className="h-3.5 w-3.5 text-cyan-300" />
                  {campaign.totalSpinsLeft} spins left in round
                </span>
              )}
            </div>

            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-5xl text-white">
              {campaign.tierName}
            </h2>

            <p className="mt-4 text-base text-blue-100/90 sm:text-lg leading-relaxed max-w-xl">
              {campaign.description}
            </p>

            {/* Qualification Pill */}
            <div className="mt-6 rounded-2xl bg-white/10 p-4 border border-white/15 backdrop-blur-md max-w-xl">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
                How to Qualify:
              </div>
              <div className="mt-1 text-sm font-medium text-white flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>{qualificationDesc}</span>
              </div>
            </div>

            {/* Prize Chips */}
            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/70">
                Live Wheel Prize Segments:
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {campaign.prizeSegments.map((seg) => (
                  <div
                    key={seg.label}
                    className="flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white border border-white/20 shadow-sm"
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: seg.displayColor }}
                    />
                    <span>{seg.label}</span>
                    <span className="text-[10px] text-white/70">({seg.oddsPercentage}%)</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/spin-win"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/25"
              >
                <span>View Full Rules & Odds</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://app.paymint.com.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                <span>Open App to Spin</span>
              </a>
            </div>
          </div>

          {/* Right Column: Pool Status / Countdown Box */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-md rounded-3xl bg-white/10 p-6 sm:p-8 backdrop-blur-xl border border-white/20 shadow-2xl text-center">
              {timeLeft ? (
                <>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    <Clock className="h-3.5 w-3.5" /> Sprint Countdown
                  </div>
                  <div className="mt-6 grid grid-cols-4 gap-2 sm:gap-3">
                    {[
                      ["Days", timeLeft.days],
                      ["Hours", timeLeft.hours],
                      ["Mins", timeLeft.minutes],
                      ["Secs", timeLeft.seconds],
                    ].map(([label, val]) => (
                      <div
                        key={label as string}
                        className="rounded-2xl bg-black/30 p-3 border border-white/10 text-center"
                      >
                        <div className="font-display text-2xl sm:text-3xl font-extrabold text-cyan-300">
                          {String(val).padStart(2, "0")}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-white/70 mt-1">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300 border border-emerald-400/30">
                    <Trophy className="h-3.5 w-3.5" /> Prize Pool Tracking
                  </div>

                  <div className="mt-5">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="font-display text-4xl sm:text-5xl font-black text-cyan-300">
                        {campaign.totalSpinsLeft}
                      </span>
                      <span className="text-sm font-semibold text-white/80">
                        / {campaign.poolSize} spins left
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-blue-200">
                      {campaign.totalSpinsUsed} ticket(s) claimed &amp; settled to date
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-black/40 p-0.5 border border-white/15">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-500"
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
                </>
              )}

              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
                <span>Per-User Cap:</span>
                <span className="font-bold text-white">
                  {campaign.perUserCap ? `${campaign.perUserCap} spins / user` : "Unlimited"}
                </span>
              </div>

              <div className="mt-2 flex items-center justify-between text-xs text-white/80">
                <span>Payout Guarantee:</span>
                <span className="font-bold text-emerald-300">100% Instant Settle</span>
              </div>

              <div className="mt-4 rounded-xl bg-blue-950/40 p-3 text-[11px] text-white/70 text-left">
                💡 <em>Each spin randomly awards one of the 7 prizes. Payouts reflect immediately on your balance or airtime.</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
