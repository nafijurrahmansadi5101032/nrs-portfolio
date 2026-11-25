import Link from "next/link";
import {
  ArrowRight,
  Mail,
  CheckCircle2,
  Terminal,
  Layout,
  Server,
  Wrench,
  Code2,
  Palette,
  Database,
  BookOpen,
  MapPin,
} from "lucide-react";
import { PROJECTS_DATA, slugify } from "@/data/projects";
import { BLOG_POSTS_DATA } from "@/data/posts";
import HomeContactForm from "@/components/HomeContactForm";

export default function HomePage() {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured).slice(0, 3);
  const latestPosts = BLOG_POSTS_DATA.slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative overflow-hidden bg-grid-pattern border-b border-slate-800/70 pt-14 pb-20 lg:pt-24 lg:pb-28">
        <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-32 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for freelance &amp; full-time roles
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Full-Stack Developer &amp;{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
                  UI Engineer
                </span>{" "}
                building scalable digital products
              </h1>

              <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
                I architect high-performance web applications, intuitive design
                systems, and resilient backend APIs using Django, React, Next.js, and modern SQL databases.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/projects"
                  className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/25"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#contact-section"
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 font-semibold text-sm flex items-center gap-2 transition-all"
                >
                  <Mail className="w-4 h-4 text-indigo-400" />
                  <span>Contact Me</span>
                </a>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400" /> Clean
                  Architecture
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />{" "}
                  Pixel-Perfect UI
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 99+
                  Lighthouse Score
                </span>
              </div>
            </div>

            {/* Right Hero Visual: Code Editor Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl shadow-black/60 overflow-hidden">
                <div className="px-4 py-3 bg-slate-925 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    developer.config.ts
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    ONLINE
                  </span>
                </div>

                <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
                  <div className="text-slate-500">
                    {/* Live Developer Profile & Stack */}
                  </div>
                  <div className="mt-1">
                    <span className="text-indigo-400">const</span>{" "}
                    <span className="text-cyan-300">engineer</span> = {"{"}
                  </div>
                  <div className="pl-4">
                    name:{" "}
                    <span className="text-emerald-300">
                      &apos;Nafijur Rahman Sadi&apos;
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    role:{" "}
                    <span className="text-emerald-300">
                      &apos;Full-Stack &amp; UI Engineer&apos;
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    location:{" "}
                    <span className="text-emerald-300">
                      &apos;Dhaka, Bangladesh (UTC+6)&apos;
                    </span>
                    ,
                  </div>
                  <div className="pl-4">coreStack: [</div>
                  <div className="pl-8 text-amber-300">
                    &apos;Django&apos;, &apos;React&apos;,
                    &apos;Next.js&apos;,
                  </div>
                  <div className="pl-8 text-amber-300">
                    &apos;Tailwind CSS&apos;, &apos;Node.js&apos;,
                    &apos;PostgreSQL&apos;
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    shippedProjects:{" "}
                    <span className="text-purple-400">12</span>,
                  </div>
                  <div className="pl-4">
                    publishedArticles:{" "}
                    <span className="text-purple-400">10</span>,
                  </div>
                  <div className="pl-4">
                    openToWork: <span className="text-cyan-400">true</span>
                  </div>
                  <div>{"};"}</div>
                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Terminal className="w-3.5 h-3.5" /> Ready to compile
                      ideas
                    </span>
                    <span>v2026.4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT ME & TECH STACK */}
      <section
        id="about-section"
        className="py-20 border-b border-slate-800/70 bg-slate-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Engineering with precision &amp; empathy
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-slate-300 leading-relaxed text-base">
                I&apos;m a software engineer focused on bridging the gap between
                expressive user interfaces and robust backend systems. Over the
                past several years, I have helped startups and businesses
                transform complex requirements into fast, accessible, and
                maintainable web applications.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                Whether designing a component library from scratch in Figma,
                optimizing relational database queries, or deploying end-to-end applications, I prioritize clarity, performance, and
                developer experience.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">
                    12+
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">
                    Completed Projects
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">
                    10+
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">
                    Technical Articles
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                    100%
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-medium">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 bg-slate-900/60 p-6 sm:p-7 rounded-2xl border border-slate-800">
              <div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Layout className="w-4 h-4 text-indigo-400" /> Frontend
                  Engineering
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React 19",
                    "Next.js (App Router)",
                    "Tailwind CSS",
                    "Framer Motion",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Server className="w-4 h-4 text-cyan-400" /> Backend &amp;
                  Databases
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Django REST",
                    "PostgreSQL",
                    "Oracle SQL",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-emerald-400" /> Design &amp;
                  DevOps Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Figma",
                    "Git & GitHub Actions",
                    "Vercel",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FEATURED PROJECTS */}
      <section className="py-20 border-b border-slate-800/70 bg-slate-925/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                Featured Projects
              </h2>
              <p className="text-slate-400 text-sm mt-2 max-w-xl">
                A curated highlight of recent full-stack platforms, design
                systems, and API architectures.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-indigo-300 border border-slate-700/80 text-sm font-semibold transition-all self-start sm:self-auto"
            >
              <span>View All 12 Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {featuredProjects.map((project) => (
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
        </div>
      </section>

      {/* SECTION 4: SERVICES */}
      <section className="py-20 border-b border-slate-800/70 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Services &amp; Solutions
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              End-to-end product engineering tailored for startups, agencies, and
              growing enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2.5">
                Full-Stack Web Development
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Production-grade SaaS platforms, dashboards, and web
                applications built with Next.js, React with SEO
                and speed baked in.
              </p>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li>→ SSR &amp; Edge Rendering</li>
                <li>→ Role-Based Auth &amp; Security</li>
                <li>→ Payment &amp; Webhook Flows</li>
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2.5">
                UI/UX &amp; Design Systems
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Accessible, responsive component libraries and interactive
                prototypes designed in Figma and translated cleanly into
                Tailwind CSS code.
              </p>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li>→ Figma Wireframes &amp; Tokens</li>
                <li>→ WCAG Accessibility Compliance</li>
                <li>→ Micro-Interactions &amp; Motion</li>
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2.5">
                API &amp; Database Architecture
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Scalable RESTful and GraphQL APIs paired with normalized
                relational schemas, indexing strategies, and automated CI/CD
                pipelines.
              </p>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li>→ PostgreSQL &amp; Oracle Modeling</li>
                <li>→ Node.js &amp; Django REST APIs</li>
                <li>→ Dockerized Cloud Deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LATEST BLOG POSTS */}
      <section className="py-20 border-b border-slate-800/70 bg-slate-925/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
                Latest Blog Posts
              </h2>
              <p className="text-slate-400 text-sm mt-2 max-w-xl">
                Deep dives into frontend architecture, database optimization, and
                modern UI engineering.
              </p>
            </div>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700/80 text-sm font-semibold transition-all self-start sm:self-auto"
            >
              <span>Read All 10 Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {latestPosts.map((post) => (
              <Link
                key={post.id}
                href={`blog/${slugify(post.title)}`}
                className="group rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/30"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {post.category}
                    </span>
                    <span className="text-slate-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">{post.date}</span>
                  <span className="font-semibold text-cyan-400 inline-flex items-center gap-1">
                    Read Article <BookOpen className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT CTA & FORM */}
      <section
        id="contact-section"
        className="py-20 bg-slate-950 relative overflow-hidden"
      >
        <div className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Have a project in mind? Let&apos;s build it together.
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Whether you need a full-stack web application, a UI design
                  system overhaul, or technical consulting, drop a message and I
                  will respond within 24 hours.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-3.5 text-sm text-slate-300">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-indigo-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">
                        Email Directly
                      </div>
                      <div className="font-mono text-slate-200">
                        <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=nafijurrahmansadi04@gmail.com"
                          target="_blank" className="hover:text-white">
                          nafijurrahmansadi04@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 text-sm text-slate-300">
                    <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">
                        Location &amp; Availability
                      </div>
                      <div className="text-slate-200">
                        Dhaka, Bangladesh • Remote Worldwide
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <HomeContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}