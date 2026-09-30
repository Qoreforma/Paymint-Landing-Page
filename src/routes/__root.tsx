import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" },
      { title: "PayMint — Fund your wallet. Pay every bill. Instantly." },
      {
        name: "description",
        content:
          "PayMint is Nigeria's mobile-first wallet for airtime, cheap data bundles, electricity tokens, cable TV, and global travel eSIMs. Fund via instant virtual accounts.",
      },
      {
        name: "keywords",
        content:
          "PayMint, buy data online, cheap data bundle nigeria, airtime recharge, electricity token, dstv subscription, gotv, startimes, virtual account nigeria, travel esim, fintech nigeria, pay bills whatsapp",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "author", content: "PayMint" },
      { name: "publisher", content: "PayMint" },
      { name: "application-name", content: "PayMint" },
      { name: "apple-mobile-web-app-title", content: "PayMint" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "default" },
      { name: "theme-color", content: "#00C37B" },
      { property: "og:site_name", content: "PayMint" },
      { property: "og:title", content: "PayMint — Fund your wallet. Pay every bill. Instantly." },
      {
        property: "og:description",
        content:
          "One wallet for airtime, cheap data, electricity, cable TV, and travel eSIMs. Fund via instant virtual account and pay in seconds.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://paymint.com.ng" },
      { property: "og:locale", content: "en_NG" },
      { property: "og:image", content: "https://paymint.com.ng/logo.png" },
      { property: "og:image:alt", content: "PayMint — Fund your wallet. Pay every bill." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PayMint — Fund your wallet. Pay every bill." },
      {
        name: "twitter:description",
        content:
          "One wallet for airtime, data, electricity, cable TV, and eSIMs. Pay from the mobile app or web.",
      },
      { name: "twitter:image", content: "https://paymint.com.ng/logo.png" },
    ],
    links: [
      { rel: "canonical", href: "https://paymint.com.ng" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.jpeg", type: "image/jpeg" },
      { rel: "apple-touch-icon", href: "/favicon.jpeg" },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://paymint.com.ng/#organization",
        "name": "PayMint",
        "url": "https://paymint.com.ng",
        "logo": "https://paymint.com.ng/logo.png",
        "sameAs": [
          "https://play.google.com/store/apps/details?id=com.paymint.app",
          "https://apps.apple.com/us/app/paymint/id6801909031",
          "https://app.paymint.com.ng"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "paymint485@gmail.com",
          "contactType": "customer support",
          "areaServed": "NG",
          "availableLanguage": ["en"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://paymint.com.ng/#website",
        "name": "PayMint",
        "url": "https://paymint.com.ng",
        "publisher": {
          "@id": "https://paymint.com.ng/#organization"
        },
        "description": "Smart wallet for instant airtime, data bundles, electricity tokens, cable TV, and global travel eSIMs in Nigeria."
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://paymint.com.ng/#app",
        "name": "PayMint",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "Android, iOS, Web",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "NGN"
        },
        "installUrl": "https://play.google.com/store/apps/details?id=com.paymint.app",
        "downloadUrl": "https://apps.apple.com/us/app/paymint/id6801909031"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";
import { Toaster } from "../components/ui/sonner";

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
        <Toaster richColors position="top-right" />
      </div>
    </QueryClientProvider>
  );
}
