import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { BLOG_POSTS_DATA, slugify } from "@/data/posts";

export async function generateMetadata({ params }) {
    const { title } = await params;
    const decoded = decodeURIComponent(title);
    const post = BLOG_POSTS_DATA.find(
        (p) => slugify(p.title) === decoded || p.title === decoded
    );

    if (!post) {
        return { title: "Article Not Found | NRS.dev" };
    }

    return {
        title: `${post.title} | NRS.dev`,
        description: post.excerpt,
    };
}

export default async function BlogDetailPage({ params }) {
    const { title } = await params;
    const decoded = decodeURIComponent(title);

    const post = BLOG_POSTS_DATA.find(
        (p) => slugify(p.title) === decoded || p.title === decoded
    );

    if (!post) {
        notFound();
    }

    return (
        <article className="animate-fade-in py-14 sm:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/blogs"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-300 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to All Articles</span>
                </Link>

                <div className="space-y-4 mb-8">
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                        <span className="px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/25">
                            {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-slate-400">
                            <Calendar className="w-3.5 h-3.5" /> {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-slate-400">
                            <Clock className="w-3.5 h-3.5" /> {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                        {post.title}
                    </h1>
                </div>

                {/* Author Bar */}
                <div className="flex items-center gap-3 pb-6 mb-8 border-b border-slate-800">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                        NRS
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-white">
                            Nafijur Rahman Sadi
                        </div>
                        <div className="text-xs text-slate-400">
                            Full-Stack Developer &amp; UI Engineer
                        </div>
                    </div>
                </div>

                {/* Article Body */}
                <div className="space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
                    {post.content.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </article>
    );
}