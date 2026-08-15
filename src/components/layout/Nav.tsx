import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ExternalLink } from "lucide-react";
import { Logo } from "@/components/Logo";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.paymint.app";
const WEB_APP_URL = "https://app.paymint.com.ng";

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {[
            ["Features", "/#features"],
            ["How it works", "/#how"],
            ["Refer & Earn", "/#refer"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-muted-foreground transition hover:text-ink">
              {label}
            </a>
          ))}
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
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
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
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center rounded-xl bg-ink py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Get the App (Google Play)
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

