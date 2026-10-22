import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ExternalLink, Sparkles } from "lucide-react";
import { Logo } from "@/components/Logo";
import { fetchPublicCampaign, PublicCampaignData } from "@/lib/api-client";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.paymint.app";
const APP_STORE_URL = "https://apps.apple.com/us/app/paymint/id6801909031";
const WEB_APP_URL = "https://app.paymint.com.ng";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [campaignData, setCampaignData] = useState<PublicCampaignData | null>(null);

  useEffect(() => {
    let mounted = true;
    fetchPublicCampaign().then((data) => {
      if (mounted) setCampaignData(data);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const isCampaignLive = campaignData?.isActive === true;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      {/* Dynamic Top Announcement Banner when campaign is live */}
      {isCampaignLive && (
        <div className="bg-gradient-to-r from-[#0B45C8] via-[#1E5BF0] to-[#0A2E8A] px-4 py-2 text-center text-xs font-medium text-white shadow-inner sm:px-6">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
              <Sparkles className="h-3 w-3" /> Live Sprint
            </span>
            <span>
              <strong>{campaignData?.campaign?.tierName || "Spin & Win Sprint"} is LIVE:</strong> Refer friends to earn spins for up to ₦1,000 instant cash & airtime!
            </span>
            <Link
              to="/spin-win"
              className="inline-flex items-center gap-1 font-semibold underline underline-offset-4 hover:text-white/80 transition"
            >
              See Rules & Prizes →
            </Link>
          </div>
        </div>
      )}

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["Features", "/#features"],
            ["How it works", "/#how"],
            ["Refer & Earn", "/#refer"],
            ["FAQs", "/#faqs"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-muted-foreground transition hover:text-ink"
            >
              {label}
            </a>
          ))}

          {/* Spin & Win Campaign Link */}
          <Link
            to="/spin-win"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep transition hover:text-ink"
          >
            <span>Spin & Win</span>
            {isCampaignLive && (
              <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                LIVE
              </span>
            )}
          </Link>

          <Link
            to="/contact"
            className="text-sm font-medium text-muted-foreground transition hover:text-ink"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-secondary hover:border-brand/40 sm:inline-flex"
          >
            <span>Use Web App</span>
            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
          </a>
          <a
            href="/#download"
            className="hidden rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90 sm:inline-flex"
          >
            Get the App
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition hover:bg-secondary md:hidden"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-b border-border/60 bg-background/95 px-4 py-6 backdrop-blur-lg md:hidden sm:px-6">
          <nav className="flex flex-col space-y-4">
            {[
              ["Features", "/#features"],
              ["How it works", "/#how"],
              ["Refer & Earn", "/#refer"],
              ["FAQs", "/#faqs"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-muted-foreground transition hover:text-ink"
              >
                {label}
              </a>
            ))}

            <Link
              to="/spin-win"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between text-base font-semibold text-brand-deep transition hover:text-ink"
            >
              <span>Spin & Win Sprint</span>
              {isCampaignLive && (
                <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  LIVE
                </span>
              )}
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-muted-foreground transition hover:text-ink"
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/80 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
              >
                <span>Use Web App</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center rounded-xl bg-ink py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Get the App (iOS)
              </a>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center rounded-xl bg-ink py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Get the App (Android)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
