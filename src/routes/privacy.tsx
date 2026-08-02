import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-display text-4xl font-bold sm:text-5xl text-foreground">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">Last updated: August 2026</p>
      </div>
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <p className="text-lg">
          At PayMint, we take your privacy seriously. This policy explains how we collect, use, and protect your personal information when you use our services.
        </p>
        
        <div className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-foreground">1. Information We Collect</h2>
          <p>We collect information you provide directly to us (such as your name, email address, phone number, and ID details) and information automatically collected through your use of the app (such as device information and transaction history).</p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-foreground">2. How We Use Your Information</h2>
          <p>We use your information to provide, maintain, and improve our services, process your transactions, communicate with you, and detect/prevent fraud or abuse.</p>
        </div>

        <div className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-foreground">3. Information Sharing</h2>
          <p>We do not sell your personal information. We only share it with trusted third-party service providers (like payment processors) necessary to deliver our services, or when required by law.</p>
        </div>

        <div className="mt-16 rounded-3xl bg-secondary/40 p-8 text-center border border-border">
          <h3 className="font-semibold text-foreground text-xl">Privacy concerns?</h3>
          <p className="text-muted-foreground mt-2"><a href="mailto:paymint485@gmail.com" className="text-brand-deep font-medium hover:underline">Contact our Data Protection Officer</a>.</p>
        </div>
      </div>
    </div>
  )
}
