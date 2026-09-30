import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  Shield,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — PayMint Support & Enquiries" },
      {
        name: "description",
        content:
          "Have questions or need assistance? Get in touch with the PayMint support and partnership team. We're here to help 24/7.",
      },
      { property: "og:title", content: "Contact Us — PayMint" },
      {
        property: "og:description",
        content:
          "Reach out to the PayMint support team for any questions or transaction assistance.",
      },
      { property: "og:url", content: "https://paymint.com.ng/contact" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://paymint.com.ng/contact" }],
  }),
  component: ContactPage,
});

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://paymint.qoreformasolutionlimited.com.ng/api/v1";

const FAQ_ITEMS = [
  {
    q: "How fast do wallet deposits reflect?",
    a: "Bank transfers to your dedicated virtual account reflect instantly within 1 to 5 seconds.",
  },
  {
    q: "What should I do if a bill payment is pending?",
    a: "Most bill payments process in real-time. If network delays occur with a provider, our automated reconciliation system verifies and updates your transaction within minutes.",
  },
  {
    q: "How can I partner or integrate with PayMint?",
    a: "Send us a message using this form with the 'Partnership & Business' topic, and our integrations team will get back to you.",
  },
];

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      setErrorMessage("Please enter your full name.");
      toast.error("Please enter your full name");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setErrorMessage("Please provide a valid email address.");
      toast.error("Please provide a valid email address");
      return;
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      setErrorMessage("Message must be at least 10 characters long.");
      toast.error("Please enter a detailed message (at least 10 characters)");
      return;
    }

    setIsSubmitting(true);

    try {
      const fullMessage =
        formData.subject && formData.subject !== "General Inquiry"
          ? `[Subject: ${formData.subject}]\n\n${trimmedMessage}`
          : trimmedMessage;

      const response = await fetch(`${API_BASE_URL}/reference/contact-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: fullMessage,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data?.message || data?.error || "Failed to submit message. Please try again.",
        );
      }

      setIsSuccess(true);
      toast.success("Message sent successfully! Our team will get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
    } catch (err: any) {
      const errorText =
        err?.message || "An unexpected error occurred. Please try again later.";
      setErrorMessage(errorText);
      toast.error(errorText);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden py-16 sm:py-24">
      {/* Background glow decorations */}
      <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-80 h-96 w-96 rounded-full bg-brand-soft/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-brand-deep shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            <span>We are here to help</span>
          </div>

          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Get in touch with <span className="text-gradient-brand">PayMint</span>
          </h1>

          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Have a question about your wallet, a transaction, or looking to partner
            with us? Send us a message and our team will get back to you right away.
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left column: Contact info & quick support */}
          <div className="space-y-8 lg:col-span-5">
            {/* Contact channels card */}
            <div className="rounded-3xl border border-border/80 bg-card/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
              <h2 className="font-display text-xl font-bold text-foreground">
                Contact Channels
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Reach out directly through any of our official channels.
              </p>

              <div className="mt-6 space-y-5">
                <a
                  href="mailto:paymint485@gmail.com"
                  className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-background/60 p-4 transition hover:border-brand/50 hover:bg-brand-soft/20"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-deep transition group-hover:scale-105">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Send Message
                    </div>
                    <div className="font-medium text-foreground group-hover:text-brand-deep">
                      Email Support
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Typically replies in under 1 hour
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/2349000000000?text=Hello%20PayMint%20Support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-background/60 p-4 transition hover:border-brand/50 hover:bg-brand-soft/20"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-deep transition group-hover:scale-105">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      WhatsApp Chat
                    </div>
                    <div className="font-medium text-foreground group-hover:text-brand-deep">
                      Instant Live Assistant
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Pay bills and get help 24/7
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-background/60 p-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand-deep">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Availability
                    </div>
                    <div className="font-medium text-foreground">
                      24/7 Automated & Human Support
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Always active, 365 days a year
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs Preview */}
            <div className="rounded-3xl border border-border/80 bg-secondary/30 p-6 sm:p-8">
              <div className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
                <HelpCircle className="h-5 w-5 text-brand" />
                <span>Frequently Asked Questions</span>
              </div>

              <div className="mt-5 space-y-4 text-sm">
                {FAQ_ITEMS.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-border/50 bg-background/80 p-4"
                  >
                    <div className="font-semibold text-foreground">{faq.q}</div>
                    <div className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {faq.a}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between pt-2">
                <span className="text-xs text-muted-foreground">Need more details?</span>
                <Link
                  to="/security"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand-deep hover:underline"
                >
                  <span>Learn about our security</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Trust badge */}
            <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-white/60 px-4 py-3 text-xs text-muted-foreground backdrop-blur">
              <Shield className="h-4 w-4 shrink-0 text-brand" />
              <span>
                Your privacy and data are encrypted with banking-grade 256-bit SSL
                security.
              </span>
            </div>
          </div>

          {/* Right column: Interactive contact form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-border/80 bg-card p-6 shadow-xl shadow-brand/5 backdrop-blur-lg sm:p-10">
              {isSuccess ? (
                <div className="py-12 text-center">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600 dark:bg-green-950/50 dark:text-green-400">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-foreground">
                    Message Sent Successfully!
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                    Thank you for reaching out. Our support administrators have
                    received your message and will reply to your email address
                    shortly.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Button
                      onClick={() => setIsSuccess(false)}
                      variant="outline"
                      className="rounded-full px-6"
                    >
                      Send another message
                    </Button>
                    <Link to="/">
                      <Button className="rounded-full bg-brand px-6 text-white hover:bg-brand-deep">
                        Back to Home
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      Send a Message
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Fill out the form below and an administrator will respond
                      promptly.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="flex items-center gap-3 rounded-2xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive">
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold">
                        Your Full Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="e.g. John doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        disabled={isSubmitting}
                        className="h-11 rounded-xl border-border bg-background/80 px-3.5 focus-visible:ring-brand"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold">
                        Email Address <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="e.g. you@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        disabled={isSubmitting}
                        className="h-11 rounded-xl border-border bg-background/80 px-3.5 focus-visible:ring-brand"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-semibold">
                      Topic / Category
                    </Label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      disabled={isSubmitting}
                      className="flex h-11 w-full rounded-xl border border-border bg-background/80 px-3.5 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Wallet & Virtual Account Support">
                        Wallet & Virtual Account Support
                      </option>
                      <option value="Bill Payment / Transaction Issue">
                        Bill Payment / Transaction Issue
                      </option>
                      <option value="Partnership & Business Integration">
                        Partnership & Business Integration
                      </option>
                      <option value="Feedback & Suggestions">
                        Feedback & Suggestions
                      </option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="message" className="text-sm font-semibold">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <span className="text-xs text-muted-foreground">
                        {formData.message.length} characters
                      </span>
                    </div>
                    <Textarea
                      id="message"
                      rows={5}
                      placeholder="Please describe how we can help you with as much detail as possible..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      disabled={isSubmitting}
                      className="min-h-[140px] rounded-xl border-border bg-background/80 p-3.5 text-sm focus-visible:ring-brand"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 w-full gap-2 rounded-xl bg-ink font-semibold text-white shadow-lg transition hover:bg-brand-deep disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Submit Message</span>
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to our{" "}
                    <Link to="/terms" className="underline hover:text-ink">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="underline hover:text-ink">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
