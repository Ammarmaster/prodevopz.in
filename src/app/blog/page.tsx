import { db } from "@/lib/db";
import Link from "next/link";
import { Clock, Calendar, ArrowRight, BookOpen } from "lucide-react";

export default async function BlogPage() {
  // Query seeded blogs directly from SQLite
  const blogs = await db.blog.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
        <span className="text-xs font-bold text-accent-orange uppercase tracking-widest bg-accent-orange/10 px-3.5 py-1.5 rounded-full w-fit mx-auto">
          Tech Blog
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white">
          Insights on AI, DevOps & Scalability
        </h1>
        <p className="text-sm text-foreground/50 leading-relaxed">
          Read articles written by our engineering and design team discussing Next.js, artificial intelligence integrations, and container deployments.
        </p>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="glass-card p-6 flex flex-col justify-between border-white/[0.06]">
            <div>
              <div className="flex items-center justify-between text-[10px] font-semibold text-foreground/40 mb-4">
                <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-accent-orange">
                  {blog.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {blog.readingTime}
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-white mb-3 hover:text-accent-orange transition-colors">
                <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
              </h3>
              <p className="text-xs text-foreground/50 leading-relaxed mb-6 line-clamp-3">
                {blog.content}
              </p>
            </div>
            <div className="border-t border-white/[0.05] pt-4 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-foreground/40">
                By {blog.author}
              </span>
              <Link
                href={`/blog/${blog.slug}`}
                className="text-xs font-semibold text-accent-orange hover:text-white flex items-center gap-1"
              >
                Read Post <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
