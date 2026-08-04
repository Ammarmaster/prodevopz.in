import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await db.blog.findUnique({
    where: { slug },
  });

  if (!blog) {
    return {
      title: "Blog Article | ProDevOpz",
      description: "Read tech insights from ProDevOpz engineers.",
    };
  }

  return {
    title: `${blog.title} | ProDevOpz Blog`,
    description: blog.content.substring(0, 150) || "ProDevOpz engineering publications.",
    keywords: [blog.category, "prodevopz blog", "software development", "tech article"],
    openGraph: {
      title: blog.title,
      description: blog.content.substring(0, 150) || "ProDevOpz publications.",
      url: `https://prodevopz.in/blog/${slug}`,
      siteName: "ProDevOpz",
      type: "article",
      publishedTime: new Date(blog.createdAt).toISOString(),
      authors: [blog.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  
  // Find blog in database
  const blog = await db.blog.findUnique({
    where: { slug },
  });

  if (!blog) {
    notFound();
  }

  // Generate BlogPosting Schema JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "image": "https://prodevopz.in/logo.jpg",
    "genre": blog.category,
    "keywords": `${blog.category}, software engineering, prodevopz`,
    "publisher": {
      "@type": "Organization",
      "name": "ProDevOpz",
      "logo": {
        "@type": "ImageObject",
        "url": "https://prodevopz.in/logo.jpg"
      }
    },
    "url": `https://prodevopz.in/blog/${slug}`,
    "datePublished": new Date(blog.createdAt).toISOString(),
    "dateModified": new Date(blog.createdAt).toISOString(),
    "author": {
      "@type": "Person",
      "name": blog.author
    },
    "description": blog.content.substring(0, 150)
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-8">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: blog.title },
        ]}
      />

      {/* Back button */}
      <Link
        href="/blog"
        className="flex items-center gap-1.5 text-xs text-foreground/60 hover:text-white transition-colors w-fit border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] px-3.5 py-2 rounded-xl print:hidden"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to blog
      </Link>

      {/* Article Header */}
      <div className="flex flex-col gap-4 border-b border-white/[0.06] pb-8 text-left">
        <span className="text-xs font-bold text-accent-orange uppercase tracking-wider bg-accent-orange/10 px-3 py-1 rounded-full w-fit">
          {blog.category}
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white leading-tight">
          {blog.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 mt-2 text-xs text-foreground/50">
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-accent-purple" />
            {blog.author}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-accent-blue" />
            {blog.readingTime}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-foreground/40" />
            {new Date(blog.createdAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </div>

      {/* Content */}
      <article className="text-foreground/85 text-sm sm:text-base leading-relaxed flex flex-col gap-6 font-sans text-left">
        {blog.content.split("\n\n").map((para, i) => (
          <p key={i} className="whitespace-pre-line">
            {para}
          </p>
        ))}
      </article>

      {/* Footer Info Box */}
      <div className="glass-panel border-white/[0.06] p-6 mt-12 flex items-center justify-between gap-4 text-left">
        <div className="flex flex-col gap-1">
          <h4 className="text-xs font-bold text-white flex items-center gap-1">
            ProDevOpz Publications <Sparkles className="w-3.5 h-3.5 text-accent-orange animate-pulse" />
          </h4>
          <p className="text-[10px] text-foreground/50">
            Insights on shipping high performance web, app and cloud architectures.
          </p>
        </div>
        <Link
          href="/"
          className="text-xs font-bold px-4 py-2 rounded-xl bg-accent-orange text-white hover:opacity-95 transition-opacity"
        >
          Work with us
        </Link>
      </div>
    </div>
  );
}
