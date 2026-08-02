import { createFileRoute } from '@tanstack/react-router'
import { ShieldCheck, Lock, Server } from 'lucide-react'

export const Route = createFileRoute('/security')({
  component: Security,
})

function Security() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-aqua-soft text-aqua-deep">
          <ShieldCheck className="h-8 w-8" />
        </div>
        <h1 className="font-display text-4xl font-bold sm:text-5xl text-foreground">Security at PayMint</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          We treat your money and data with bank-level security. 
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 mt-12">
        <div className="rounded-3xl border border-border bg-card p-8">
          <Lock className="h-8 w-8 text-aqua-deep mb-4" />
          <h3 className="font-display text-xl font-bold mb-2">End-to-End Encryption</h3>
          <p className="text-muted-foreground">All communications between your app and our servers are encrypted using 256-bit TLS encryption, ensuring your data cannot be intercepted.</p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8">
          <ShieldCheck className="h-8 w-8 text-aqua-deep mb-4" />
          <h3 className="font-display text-xl font-bold mb-2">Biometric Protection</h3>
          <p className="text-muted-foreground">Your wallet is protected by Face ID, Touch ID, or a secure PIN. Even if your phone is lost, your funds remain inaccessible to others.</p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8">
          <Server className="h-8 w-8 text-aqua-deep mb-4" />
          <h3 className="font-display text-xl font-bold mb-2">Secure Infrastructure</h3>
          <p className="text-muted-foreground">Our systems run on enterprise-grade cloud infrastructure, monitored 24/7 for suspicious activities and vulnerabilities.</p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8">
          <ShieldCheck className="h-8 w-8 text-aqua-deep mb-4" />
          <h3 className="font-display text-xl font-bold mb-2">Regulated Partners</h3>
          <p className="text-muted-foreground">We partner with fully licensed and regulated financial institutions to process payments and hold your funds securely.</p>
        </div>
      </div>

      <div className="mt-16 rounded-3xl bg-secondary/40 p-8 text-center border border-border">
        <h3 className="font-semibold text-foreground text-xl">Found a vulnerability?</h3>
        <p className="text-muted-foreground mt-2">We have a responsible disclosure program. Reach out to <a href="mailto:security@paymint.co" className="text-aqua-deep font-medium hover:underline">security@paymint.co</a>.</p>
      </div>
    </div>
  )
}
