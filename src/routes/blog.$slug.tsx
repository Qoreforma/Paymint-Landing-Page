import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOG_POSTS, BlogPost } from "@/data/blog-posts";
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  User,
  Share2,
  CheckCircle,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";
import { trackAppDownload, trackWebAppClick } from "@/lib/analytics";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) {
      return {
        meta: [{ title: "Article Not Found — PayMint" }],
      };
    }

    const canonicalUrl = `https://www.paymint.com.ng/blog/${post.slug}`;

    return {
      meta: [
        { title: `${post.metaTitle} | PayMint Blog` },
        { name: "description", content: post.metaDescription },
        { name: "keywords", content: post.keywords.join(", ") },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.metaDescription },
        { property: "og:url", content: canonicalUrl },
        { property: "og:type", content: "article" },
        { property: "og:image", content: "https://www.paymint.com.ng/logo.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.metaDescription },
      ],
      links: [{ rel: "canonical", href: canonicalUrl }],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-4xl font-bold">Article Not Found</h1>
        <p className="mt-4 text-muted-foreground">The article you are looking for has been moved or updated.</p>
        <div className="mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "PayMint",
      logo: {
        "@type": "ImageObject",
        url: "https://www.paymint.com.ng/logo.png",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.paymint.com.ng/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.paymint.com.ng",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.paymint.com.ng/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.paymint.com.ng/blog/${post.slug}`,
      },
    ],
  };

  const faqSchema =
    post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }
      : null;

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="relative pt-8 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-xs text-muted-foreground flex items-center gap-2">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/blog" className="hover:text-foreground">Blog</Link>
        <span>/</span>
        <span className="text-foreground truncate max-w-[200px] sm:max-w-xs">{post.category}</span>
      </nav>

      {/* Article Header */}
      <header className="mx-auto mt-6 max-w-4xl px-4 sm:px-6 lg:px-8">
        <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-deep">
          {post.category}
        </span>

        <h1 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl text-foreground leading-[1.15]">
          {post.title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-y border-border py-3">
          <div className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <span>Updated {post.updatedAt}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Article Body */}
      <main className="mx-auto mt-8 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none text-foreground text-sm sm:text-base leading-relaxed space-y-6">
          {/* Render article content cleanly */}
          <div
            className="article-content space-y-4 text-foreground/90"
            dangerouslySetInnerHTML={{
              __html: formatMarkdownToHtml(post.content),
            }}
          />
        </div>

        {/* FAQs inside article */}
        {post.faqs.length > 0 && (
          <section className="mt-14 rounded-3xl border border-border bg-card p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-brand-deep" />
              Frequently Asked Questions
            </h2>
            <div className="mt-6 space-y-4">
              {post.faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-border/80 bg-background p-4">
                  <h3 className="text-sm font-semibold text-foreground">{faq.question}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Author Bio & Credibility Section */}
        <div className="mt-12 rounded-3xl border border-border/80 bg-card p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="h-14 w-14 shrink-0 rounded-2xl bg-brand-soft text-brand-deep flex items-center justify-center font-bold text-xl">
              PM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-base font-bold text-foreground">
                  Written by {post.author}
                </h3>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600">
                  Verified Technical Staff
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                The PayMint Editorial & Telecommunications Engineering team monitors Nigerian telecom carrier changes, national payment gateway switches, and DisCo tariff orders to provide verified, actionable bill payment guides.
              </p>
            </div>
          </div>
          <div className="mt-6 border-t border-border/60 pt-4 text-[11px] text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-semibold text-foreground">Sources & Regulations:</span>
            <span>Nigerian Communications Commission (NCC)</span>
            <span>Nigerian Electricity Regulatory Commission (NERC)</span>
            <span>Direct Telecom Carrier Gateways (MTN, Airtel, Glo, 9mobile)</span>
          </div>
        </div>

        {/* Conversion In-Article Card */}
        <div className="mt-12 rounded-3xl gradient-brand p-8 text-center text-ink">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            Save on Every Bill with PayMint
          </h2>
          <p className="mx-auto mt-2 max-w-md text-xs sm:text-sm text-ink/80">
            Enjoy instant SME data, 2-second prepaid electricity tokens, and zero-fee virtual account transfers.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="https://app.paymint.com.ng"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWebAppClick("blog_cta_webapp")}
              className="rounded-full bg-ink px-6 py-2.5 text-xs font-semibold text-white hover:opacity-90 transition"
            >
              Get Started on Web
            </a>
            <Link
              to="/download"
              onClick={() => trackAppDownload("unknown")}
              className="rounded-full border border-ink/20 bg-white/80 px-6 py-2.5 text-xs font-semibold text-ink hover:bg-white transition"
            >
              Download App
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-10 border-t border-border">
          <h2 className="font-display text-xl font-bold">Related Guides & Articles</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                to={`/blog/${related.slug}`}
                className="group rounded-2xl border border-border bg-card p-4 hover:border-brand transition flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-semibold text-brand-deep uppercase">
                    {related.category}
                  </span>
                  <h3 className="mt-2 text-xs font-semibold group-hover:text-brand-deep transition line-clamp-2">
                    {related.title}
                  </h3>
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>{related.readTime}</span>
                  <ArrowRight className="h-3 w-3 text-ink group-hover:translate-x-0.5 transition" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function formatMarkdownToHtml(markdown: string): string {
  // Simple, resilient markdown renderer without external heavy dependencies
  return markdown
    .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold mt-6 mb-2 text-foreground">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-xl sm:text-2xl font-bold mt-8 mb-3 text-foreground border-b border-border/60 pb-2">$1</h2>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code class="bg-secondary px-1.5 py-0.5 rounded text-xs text-brand-deep font-mono">$1</code>')
    .replace(/^\s*-\s+(.*$)/gim, '<li class="ml-4 list-disc">$1</li>')
    .replace(/^\s*\d+\.\s+(.*$)/gim, '<li class="ml-4 list-decimal">$1</li>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-deep font-semibold underline underline-offset-2 hover:opacity-80">$1</a>')
    .replace(/\n\n/g, '<p class="my-4 text-muted-foreground leading-relaxed">')
    .replace(/---/g, '<hr class="my-8 border-border/80" />');
}
