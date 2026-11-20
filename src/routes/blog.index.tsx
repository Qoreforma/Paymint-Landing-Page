import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { BLOG_POSTS, BlogPost } from "@/data/blog-posts";
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles } from "lucide-react";

const CANONICAL_URL = "https://www.paymint.com.ng/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      {
        title: "PayMint Blog & Resource Centre — Telecom, Fintech & Utility Guides",
      },
      {
        name: "description",
        content:
          "Read expert guides, money-saving tips, USSD codes, and step-by-step tutorials on buying cheap data, paying electricity bills, and digital payments in Nigeria.",
      },
      { property: "og:title", content: "PayMint Blog & Resource Centre" },
      {
        property: "og:description",
        content: "Expert guides, tutorials, and money-saving hacks for data bundles, utility bills, and smart payments in Nigeria.",
      },
      { property: "og:url", content: CANONICAL_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://www.paymint.com.ng/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "PayMint Blog & Resource Centre" },
      {
        name: "twitter:description",
        content: "Expert guides, tutorials, and money-saving hacks for data bundles, utility bills, and smart payments in Nigeria.",
      },
    ],
    links: [{ rel: "canonical", href: CANONICAL_URL }],
  }),
  component: BlogIndexPage,
});

const CATEGORIES = [
  "All",
  "Data Bundles",
  "Electricity",
  "Cable TV",
  "Guides & Tutorials",
];

function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.paymint.com.ng" },
      { "@type": "ListItem", position: 2, name: "Blog", item: CANONICAL_URL },
    ],
  };

  return (
    <div className="relative overflow-hidden pt-8 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visible Breadcrumbs */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-xs text-muted-foreground flex items-center gap-2">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <span className="text-foreground font-medium">Blog</span>
      </nav>

      {/* Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-white/70 px-4 py-1.5 text-xs font-semibold text-brand-deep backdrop-blur">
          <BookOpen className="h-3.5 w-3.5 text-brand-deep" />
          PayMint Resource Centre & Blog
        </div>

        <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Guides, Tutorials &
          <br />
          <span className="text-gradient-brand">Money-Saving Insights.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Learn how to get the most value out of your money with verified USSD codes, data price breakdowns, and digital payment guides in Nigeria.
        </p>

        {/* Categories */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition border ${
                activeCategory === cat
                  ? "bg-brand text-ink border-brand shadow-sm"
                  : "border-border bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Post List */}
      <section className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="rounded-full bg-brand-soft px-2.5 py-0.5 font-semibold text-brand-deep">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="mt-4 font-display text-lg font-bold group-hover:text-brand-deep transition leading-snug">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-2 text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                  {post.metaDescription}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{post.updatedAt}</span>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="flex items-center gap-1 font-semibold text-brand-deep group-hover:translate-x-0.5 transition"
                >
                  Read Guide <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
