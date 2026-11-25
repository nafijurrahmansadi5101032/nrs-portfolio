import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Code2, ExternalLink, CheckCircle2 } from "lucide-react";
import { PROJECTS_DATA, slugify } from "@/data/projects";

export async function generateMetadata({ params }) {
    const { title } = await params;
    const decoded = decodeURIComponent(title);
    const project = PROJECTS_DATA.find(
        (p) => slugify(p.title) === decoded || p.title === decoded
    );

    if (!project) {
        return { title: "Project Not Found | NRS.dev" };
    }

    return {
        title: `${project.title} | NRS.dev`,
        description: project.description,
    };
}

export default async function ProjectDetailPage({ params }) {
    const { title } = await params;
    const decoded = decodeURIComponent(title);

    const project = PROJECTS_DATA.find(
        (p) => slugify(p.title) === decoded || p.title === decoded
    );

    if (!project) {
        notFound();
    }

    return (
        <div className="animate-fade-in py-14 sm:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-indigo-300 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to All Projects</span>
                </Link>

                {/* Hero Banner */}
                <div
                    className={`rounded-3xl bg-gradient-to-br ${project.gradient} p-7 sm:p-10 mb-8 shadow-2xl border border-white/10`}
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-950/65 backdrop-blur-md text-xs font-mono text-white border border-white/15 mb-4">
                        {project.category}
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {project.title}
                    </h1>

                    {/* Mock Browser Preview Bar */}
                    <div className="mt-6 bg-slate-950/80 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-rose-400" />
                            <span className="w-3 h-3 rounded-full bg-amber-400" />
                            <span className="w-3 h-3 rounded-full bg-emerald-400" />
                            <span className="ml-2 text-xs font-mono text-slate-300">
                                https://app.nrs.dev/{slugify(project.title)}
                            </span>
                        </div>
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                            LIVE PREVIEW
                        </span>
                    </div>
                </div>

                {/* Project Details Card */}
                <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-8">
                    <div>
                        <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">
                            Overview
                        </h2>
                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                            Key Architecture Highlights
                        </h2>
                        <ul className="space-y-2.5 text-sm sm:text-base text-slate-300">
                            {project.highlights.map((item) => (
                                <li key={item} className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                            Technologies Used
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3.5 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-4">
                        <a
                            href={project.liveUrl || project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold inline-flex items-center gap-2 transition-colors shadow-lg shadow-indigo-600/20"
                        >
                            <ExternalLink className="w-4 h-4" />
                            <span>Open Deployed App</span>
                        </a>

                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold inline-flex items-center gap-2 transition-colors"
                        >
                            <Code2 className="w-4 h-4" />
                            <span>View Source Code</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}