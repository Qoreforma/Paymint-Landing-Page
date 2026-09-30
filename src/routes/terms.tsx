import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  head: () => ({
    meta: [
      { title: "Terms of Service — PayMint" },
      {
        name: "description",
        content:
          "Read the official Terms of Service governing your PayMint wallet, virtual accounts, and bill payment services.",
      },
      { property: "og:title", content: "Terms of Service — PayMint" },
      {
        property: "og:description",
        content:
          "Official Terms of Service for using the PayMint app, wallet, and bill payment platform.",
      },
      { property: "og:url", content: "https://paymint.com.ng/terms" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://paymint.com.ng/terms" }],
  }),
  component: Terms,
})

function Terms() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-display text-4xl font-bold sm:text-5xl text-foreground">Terms of Service</h1>
        <p className="mt-4 text-muted-foreground">Last updated: August 2026</p>
      </div>
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <p className="text-lg">
          Welcome to PayMint. These Terms of Service govern your use of our wallet, bill payment, and related services. Please read them carefully.
        </p>
        
        <div className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
          <p>By downloading our app, creating an account, or using our services, you agree to be bound by these terms. If you do not agree, please do not use PayMint.</p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-foreground">2. Use of Services</h2>
          <p>You must provide accurate information when creating your account. You are responsible for safeguarding your credentials and for all activities that occur under your account.</p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-foreground">3. Payments and Wallet</h2>
          <p>When you fund your wallet via the provided virtual account, the funds are held securely. You authorize us to deduct the relevant amounts when you initiate a bill payment, purchase airtime, or perform other transactions.</p>
        </div>

        <div className="mt-16 rounded-3xl bg-secondary/40 p-8 text-center border border-border">
          <h3 className="font-semibold text-foreground text-xl">Have questions?</h3>
          <p className="text-muted-foreground mt-2"><a href="mailto:paymint485@gmail.com" className="text-brand-deep font-medium hover:underline">Reach out to our support team</a>.</p>
        </div>
      </div>
    </div>
  )
}
