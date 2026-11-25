"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Send, Menu, X, Home, FolderGit2, BookOpen } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleHireMe = () => {
        setMobileOpen(false);
        if (pathname === "/") {
            document
                .getElementById("contact-section")
                ?.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/#contact-section");
        }
    };

    const navItems = [
        { href: "/", label: "Home", icon: Home },
        { href: "/projects", label: "Projects", badge: "12", icon: FolderGit2 },
        { href: "/blogs", label: "Blogs", badge: "10", icon: BookOpen },
    ];

    return (
        <header className="sticky top-0 z-40 w-full glass-nav border-b border-slate-800/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand Logo */}
                    <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 text-left group focus:outline-none"
                    >
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-mono font-bold text-base shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                            &lt;/&gt;
                        </div>
                        <div>
                            <span className="font-bold text-slate-100 tracking-tight text-lg block leading-none">
                                NRS<span className="text-indigo-400">.dev</span>
                            </span>
                            <span className="text-[11px] font-mono text-slate-400">
                                Full-Stack &amp; UI
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1.5 bg-transparent p-1.5 rounded-xl">
                        {navItems.map((item) => {
                            const isActive =
                                item.href === "/"
                                    ? pathname === "/"
                                    : pathname.startsWith(item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-1.5 ${isActive
                                        ? "bg-indigo-600 text-white shadow-sm"
                                        : "text-slate-400 hover:text-white"
                                        }`}
                                >
                                    <span>{item.label}</span>
                                    {/* {item.badge && (
                                        <span className="text-[11px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-indigo-300">
                                            {item.badge}
                                        </span>)
                                    } */}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right CTA & Mobile Menu Toggle */}
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={handleHireMe}
                            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-all shadow-md shadow-indigo-600/20"
                        >
                            <Send className="w-3.5 h-3.5" />
                            Hire Me
                        </button>

                        <button
                            type="button"
                            onClick={() => setMobileOpen((prev) => !prev)}
                            aria-label="Toggle Menu"
                            className="md:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
                        >
                            {mobileOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {mobileOpen && (
                <div className="md:hidden border-t border-slate-800/80 bg-slate-925 px-4 pt-3 pb-5 space-y-2">
                    {navItems.map((item) => {
                        const IconComponent = item.icon;
                        const isActive =
                            item.href === "/"
                                ? pathname === "/"
                                : pathname.startsWith(item.href);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between ${isActive
                                    ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30"
                                    : "text-slate-300 hover:bg-slate-900"
                                    }`}
                            >
                                <span>
                                    {item.label}
                                </span>
                                <IconComponent className="w-4 h-4 opacity-70" />
                            </Link>
                        );
                    })}

                    <div className="pt-2">
                        <button
                            type="button"
                            onClick={handleHireMe}
                            className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium flex items-center justify-center gap-2"
                        >
                            <Send className="w-4 h-4" />
                            Let&apos;s Work Together
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}