"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Code2, Briefcase, Globe, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
    const pathname = usePathname();
    const router = useRouter();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleContactClick = (e) => {
        e.preventDefault();
        if (pathname === "/") {
            document
                .getElementById("contact-section")
                ?.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/#contact-section");
        }
    };

    return (
        <footer className="bg-slate-925 border-t border-slate-800/80 pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
                    {/* Brand Info */}
                    <div className="md:col-span-5 space-y-3">
                        <Link href="/" className="inline-flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-mono font-bold text-sm">
                                &lt;/&gt;
                            </div>
                            <span className="font-bold text-white text-lg">
                                NRS<span className="text-indigo-400">.dev</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                            Full-Stack Developer &amp; UI Engineer crafting fast, accessible,
                            and scalable web applications with modern technologies.
                        </p>
                    </div>

                    {/* Quick Navigation */}
                    <div className="md:col-span-3 space-y-2.5">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                            Navigation
                        </h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects"
                                    className="hover:text-white transition-colors"
                                >
                                    Projects Archive
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/blogs"
                                    className="hover:text-white transition-colors"
                                >
                                    Technical Blogs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#contact-section"
                                    onClick={handleContactClick}
                                    className="hover:text-white transition-colors"
                                >
                                    Contact Me
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="md:col-span-4 space-y-3">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                            Connect
                        </h4>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://github.com/nafijurrahmansadi5101032"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                            >
                                <Code2 className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/nafijur-rahman-sadi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                            >
                                <Briefcase className="w-4 h-4" />
                            </a>
                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="X / Globe"
                                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                            >
                                <Globe className="w-4 h-4" />
                            </a>
                            <Link
                                href="/#contact-section"
                                onClick={handleContactClick}
                                aria-label="Email"
                                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
                            >
                                <Mail className="w-4 h-4" />
                            </Link>
                        </div>
                        <p className="text-xs text-slate-500 font-mono">
                            Built with Next.js App Router &amp; Tailwind CSS
                        </p>
                    </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>&copy; 2026 NRS. All rights reserved.</p>

                    <button
                        type="button"
                        onClick={scrollToTop}
                        aria-label="Scroll back to top"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 active:scale-95 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white font-mono text-xs transition-all touch-manipulation cursor-pointer"
                    >
                        {/* <span>Back to Top</span> */}
                        <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
                    </button>
                </div>
            </div>
        </footer>
    );
}