import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/">
            <Logo />
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            The wallet for airtime, data, eSIMs, electricity, cable TV and every other bill.
          </p>
        </div>
        <div>
          <div className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Product
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/#features" className="text-ink/80 transition hover:text-brand-deep">Features</a></li>
            <li><a href="/#how" className="text-ink/80 transition hover:text-brand-deep">How it works</a></li>
            <li><a href="https://app.paymint.com.ng" target="_blank" rel="noopener noreferrer" className="text-ink/80 transition hover:text-brand-deep">Web App</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=com.paymint.app" target="_blank" rel="noopener noreferrer" className="text-ink/80 transition hover:text-brand-deep">Google Play</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Company
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/#refer" className="text-ink/80 transition hover:text-brand-deep">Refer & Earn</a></li>
            <li><a href="/#refer" className="text-ink/80 transition hover:text-brand-deep">Partners</a></li>
            <li><a href="mailto:paymint485@gmail.com" className="text-ink/80 transition hover:text-brand-deep">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Legal
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/terms" className="text-ink/80 transition hover:text-brand-deep">Terms</Link></li>
            <li><Link to="/privacy" className="text-ink/80 transition hover:text-brand-deep">Privacy</Link></li>
            <li><Link to="/security" className="text-ink/80 transition hover:text-brand-deep">Security</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span>© {new Date().getFullYear()} PayMint. All rights reserved.</span>
            <span className="text-[10px]">
              Website designed & developed by{" "}
              <a
                href="https://www.upwork.com/freelancers/~01700c62beb4fd95f1?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-colors hover:text-ink"
              >
                Opafunso Oluwaferanmi Benjamin
              </a>
            </span>
          </div>
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
