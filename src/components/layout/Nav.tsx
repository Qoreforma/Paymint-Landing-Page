import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Nav() {
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
            ["Download", "/#download"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-medium text-muted-foreground transition hover:text-ink">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/#download"
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
