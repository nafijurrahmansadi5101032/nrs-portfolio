"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  FolderGit2,
  Search,
  ArrowRight,
  SearchX,
} from "lucide-react";
import { PROJECTS_DATA, slugify } from "@/data/projects";

const CATEGORIES = ["All", "Full-Stack", "Frontend", "UI/UX", "Backend/API"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return PROJECTS_DATA.filter((project) => {
      const matchesCat =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <div className="animate-fade-in py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" /> Complete Portfolio Archive
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            All Projects ({filteredProjects.length})
          </h1>
          <p className="text-slate-400 mt-3 text-base">
            Explore 12 production-ready full-stack applications, frontend
            interfaces, UI/UX design systems, and scalable backend services.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-800/80">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${active
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700"
                    }`}
                >
                  {category === "All"
                    ? `All (${PROJECTS_DATA.length})`
                    : category}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <SearchX className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white">
              No matching projects found
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Try resetting your category filter or search keyword.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${slugify(project.title)}`}
                className="group rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/30 cursor-pointer"
              >
                <div
                  className={`h-40 bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between`}
                >
                  <span className="self-start px-2.5 py-1 rounded-lg bg-slate-950/65 backdrop-blur-md text-[11px] font-mono text-white border border-white/15">
                    {project.category}
                  </span>
                  <div className="bg-slate-950/75 backdrop-blur-md rounded-xl p-2.5 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-400" />
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-300 truncate max-w-[170px]">
                      app.nrs.dev/{slugify(project.title)}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                        Explore Project{" "}
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}