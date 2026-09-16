import React, { useEffect, useState, useCallback } from "react";
import {
  Gift,
  Copy,
  Check,
  Smartphone,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";

interface InviteHandlerProps {
  referralCode?: string;
}

const PLAY_STORE_BASE = "https://play.google.com/store/apps/details?id=com.paymint.app";
const APP_STORE_URL = "https://apps.apple.com/us/app/paymint/id6801909031";
const WEB_APP_URL = "https://app.paymint.com.ng";

export function InviteHandler({ referralCode = "" }: InviteHandlerProps) {
  const cleanCode = (referralCode || "").trim().toUpperCase();

  // Android deferred deep link format:
  // https://play.google.com/store/apps/details?id=com.paymint.app&referrer=referrer_code%3DABC123
  const playStoreReferrerUrl = cleanCode
    ? `${PLAY_STORE_BASE}&referrer=referrer_code%3D${encodeURIComponent(cleanCode)}`
    : PLAY_STORE_BASE;

  // iOS clipboard payload format:
  // https://paymint.com.ng?referrer=ABC123&page=invite
  const iosClipboardPayload = cleanCode
    ? `https://paymint.com.ng?referrer=${encodeURIComponent(cleanCode)}&page=invite`
    : "https://paymint.com.ng?page=invite";

  const [copied, setCopied] = useState(false);
  const [platform, setPlatform] = useState<"android" | "ios" | "desktop">("desktop");
  const [redirectStatus, setRedirectStatus] = useState<"idle" | "redirecting" | "done">("idle");

  // Robust clipboard copy with fallback
  const copyTextToClipboard = useCallback(async (text: string): Promise<boolean> => {
    if (typeof window === "undefined") return false;

    // Modern navigator.clipboard
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch {
        // Fall back to execCommand below
      }
    }

    // Fallback for older iOS WebViews / Safari
    try {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.top = "-9999px";
      textarea.setAttribute("readonly", "");
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, 99999);
      const success = document.execCommand("copy");
      document.body.removeChild(textarea);
      return success;
    } catch {
      return false;
    }
  }, []);

  // Handle manual code copy
  const handleCopyCode = async () => {
    if (!cleanCode) return;
    const ok = await copyTextToClipboard(cleanCode);
    if (ok) {
      setCopied(true);
      toast.success(`Referral code ${cleanCode} copied!`);
      setTimeout(() => setCopied(false), 2500);
    } else {
      toast.error("Could not copy to clipboard. Please copy manually.");
    }
  };

  // Handle iOS App Store link click: ensures payload is copied before opening App Store
  const handleIosRedirect = async () => {
    await copyTextToClipboard(iosClipboardPayload);
    toast.success("Invite linked! Opening App Store...");
    window.location.href = APP_STORE_URL;
  };

  // Platform detection & automated mobile redirection
  useEffect(() => {
    if (typeof window === "undefined") return;

    const ua = navigator.userAgent || navigator.vendor || (window as any).opera || "";
    const isIOSDevice =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isAndroidDevice = /android/i.test(ua);

    if (isAndroidDevice) {
      setPlatform("android");
      setRedirectStatus("redirecting");

      // Auto-redirect to Google Play with encoded referrer
      const timer = setTimeout(() => {
        window.location.href = playStoreReferrerUrl;
        setRedirectStatus("done");
      }, 700);

      return () => clearTimeout(timer);
    } else if (isIOSDevice) {
      setPlatform("ios");
      setRedirectStatus("redirecting");

      // Attempt automatic clipboard copy on iOS
      copyTextToClipboard(iosClipboardPayload);

      // Auto-redirect to App Store
      const timer = setTimeout(() => {
        window.location.href = APP_STORE_URL;
        setRedirectStatus("done");
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setPlatform("desktop");
    }
  }, [playStoreReferrerUrl, iosClipboardPayload, copyTextToClipboard]);

  // Mobile Redirecting View (Android / iOS)
  if (platform === "android" || platform === "ios") {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 sm:py-24 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-brand/10 text-brand shadow-inner">
          <Smartphone className="h-10 w-10 animate-bounce" />
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold text-brand mb-4">
          <Sparkles className="h-3.5 w-3.5" />
          <span>PayMint Mobile Invitation</span>
        </div>

        <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
          {platform === "android" ? "Opening Google Play Store..." : "Opening Apple App Store..."}
        </h1>

        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-md mx-auto">
          {cleanCode ? (
            <>
              Your invite code <strong className="text-foreground font-mono bg-secondary/80 px-2 py-0.5 rounded">{cleanCode}</strong> is attached and will be automatically applied when you open PayMint.
            </>
          ) : (
            "Connecting you to the official PayMint app on your device store."
          )}
        </p>

        {/* Action Button if auto-redirect doesn't trigger */}
        <div className="mt-8 flex flex-col items-center gap-3">
          {platform === "android" ? (
            <a
              href={playStoreReferrerUrl}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-deep hover:scale-[1.02] active:scale-[0.98] w-full max-w-xs"
            >
              <span>Download on Google Play</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <button
              type="button"
              onClick={handleIosRedirect}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-deep hover:scale-[1.02] active:scale-[0.98] w-full max-w-xs cursor-pointer"
            >
              <span>Download on App Store</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          )}

          <p className="text-xs text-muted-foreground mt-2">
            Tap the button above if you were not redirected automatically.
          </p>
        </div>
      </div>
    );
  }

  // Desktop / Web View
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold text-brand mb-4">
          <Gift className="h-3.5 w-3.5" />
          <span>Exclusive Referral Invite</span>
        </div>

        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          You've been invited to join <span className="text-brand">PayMint</span>
        </h1>

        <p className="mt-4 text-base sm:text-lg text-muted-foreground">
          Fund your wallet, buy airtime, cheap data, utility bills, and trade crypto at industry-best rates with instant Naira settlements.
        </p>
      </div>

      {/* Referral Code Card */}
      {cleanCode && (
        <div className="mt-10 mx-auto max-w-md rounded-3xl border-2 border-brand/20 bg-gradient-to-b from-brand/5 to-transparent p-6 text-center shadow-lg shadow-brand/5">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Your Invitation Code
          </div>

          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="font-mono text-3xl font-extrabold tracking-wider text-brand">
              {cleanCode}
            </span>
            <button
              type="button"
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 rounded-xl border border-input bg-white px-3 py-1.5 text-xs font-medium text-foreground transition hover:bg-secondary active:scale-95 shadow-sm"
              title="Copy referral code"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-green-600" />
                  <span className="text-green-600 font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <p className="mt-3 text-xs text-muted-foreground">
            This code will be automatically detected when you install PayMint through the mobile download buttons below.
          </p>
        </div>
      )}

      {/* Download Options */}
      <div className="mt-12 text-center">
        <h2 className="font-display text-2xl font-bold text-foreground">
          Get the PayMint Mobile App
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Open on your phone to claim your invite automatically:
        </p>

        <div className="mt-6 flex flex-wrap justify-center items-center gap-4">
          {/* Google Play Button */}
          <a
            href={playStoreReferrerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl bg-ink px-6 py-3.5 text-white transition hover:opacity-90 shadow-md"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
              <path d="M3.6 2.3c-.4.3-.6.8-.6 1.5v16.4c0 .7.2 1.2.6 1.5l9.1-9.6L3.6 2.3zm10.3 10.6l2.5 2.6-11.1 6.3c-.3.2-.6.2-.9.1l9.5-9zm3.6-1.9l3 1.7c.9.5.9 1.4 0 1.9l-3 1.7-2.8-2.7 2.8-2.6zM4.4 1.8c.3-.1.6-.1.9.1l11.1 6.3-2.5 2.6L4.4 1.8z" />
            </svg>
            <div className="text-left leading-tight">
              <div className="text-[10px] uppercase tracking-wider opacity-70">Get it on</div>
              <div className="font-display text-lg font-semibold">Google Play</div>
            </div>
          </a>

          {/* App Store Button */}
          <button
            type="button"
            onClick={handleIosRedirect}
            className="group inline-flex items-center gap-3 rounded-2xl bg-ink px-6 py-3.5 text-white transition hover:opacity-90 shadow-md cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
              <path d="M16.365 14.363c-.021-3.155 2.568-4.664 2.686-4.74-1.465-2.145-3.738-2.435-4.549-2.464-1.921-.194-3.754 1.134-4.733 1.134-.977 0-2.5-1.109-4.088-1.077-2.072.031-3.985 1.206-5.048 3.057-2.146 3.722-.549 9.215 1.545 12.247 1.026 1.485 2.235 3.155 3.842 3.093 1.543-.062 2.133-1.002 4.004-1.002 1.869 0 2.401 1.002 4.004.97 1.666-.03 2.697-1.485 3.723-2.969 1.183-1.733 1.671-3.411 1.692-3.497-.037-.014-3.057-1.173-3.078-4.753zm-3.094-8.835c.846-1.026 1.417-2.451 1.261-3.876-1.218.05-2.709.813-3.587 1.838-.787.896-1.468 2.348-1.291 3.752 1.365.105 2.771-.685 3.617-1.714z" />
            </svg>
            <div className="text-left leading-tight">
              <div className="text-[10px] uppercase tracking-wider opacity-70">Download on the</div>
              <div className="font-display text-lg font-semibold">App Store</div>
            </div>
          </button>

          {/* Web App Link */}
          <a
            href={cleanCode ? `${WEB_APP_URL}?ref=${cleanCode}` : WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-2xl border-2 border-ink/10 bg-white px-6 py-3.5 text-ink transition hover:border-brand hover:shadow-md"
          >
            <div className="grid h-7 w-7 place-items-center rounded-lg bg-brand-soft">
              <ExternalLink className="h-4 w-4 text-brand-deep" />
            </div>
            <div className="text-left leading-tight">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Continue on</div>
              <div className="font-display text-lg font-semibold">Web App</div>
            </div>
          </a>
        </div>
      </div>

      {/* How it Works 3 Steps */}
      <div className="mt-16 border-t border-border pt-12">
        <h3 className="text-center font-display text-xl font-bold text-foreground mb-8">
          How to Claim Your Referral Reward
        </h3>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border bg-card p-5 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand font-bold text-sm mb-3">
              1
            </div>
            <div className="font-semibold text-foreground text-sm">Download App</div>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              Install the official PayMint app for Android or iOS.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand font-bold text-sm mb-3">
              2
            </div>
            <div className="font-semibold text-foreground text-sm">Auto-Applied Code</div>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              Open the app — your referral code is captured automatically.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand font-bold text-sm mb-3">
              3
            </div>
            <div className="font-semibold text-foreground text-sm">Trade & Enjoy</div>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              Fund your wallet, buy bills, or complete trades with zero hidden fees.
            </p>
          </div>
        </div>
      </div>

      {/* Security note */}
      <div className="mt-12 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="h-4 w-4 text-brand" />
        <span>Verified official PayMint referral link &bull; paymint.com.ng</span>
      </div>
    </div>
  );
}
