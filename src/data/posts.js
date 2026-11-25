export function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
}

export const BLOG_POSTS_DATA = [
    {
        id: 1,
        title: "Architecting Scalable Next.js App Router Applications in 2026",
        category: "Next.js & React",
        date: "Nov 14, 2026",
        readTime: "7 min read",
        excerpt: "How to structure server components, colocate data fetching, and prevent client bundle bloat in large production repositories.",
        content: [
            "As React Server Components have matured, the biggest mistake teams still make is treating the entire component tree as client-rendered by default. Pushing 'use client' boundaries as deep down the leaf nodes as possible dramatically reduces JavaScript payload sizes.",
            "A clean folder architecture separates domain features from UI primitives. By colocating server actions, Zod validation schemas, and database queries inside feature modules, teams avoid circular dependencies and keep code reviews focused.",
            "Finally, always pair streaming Suspense boundaries with meaningful skeleton loaders so users perceive instant navigation even when slow third-party APIs are involved."
        ]
    },
    {
        id: 2,
        title: "PostgreSQL Indexing Strategies Every Full-Stack Developer Should Know",
        category: "Database & API",
        date: "Nov 02, 2026",
        readTime: "9 min read",
        excerpt: "A practical guide to B-Tree, GIN, and partial indexes—and how to read EXPLAIN ANALYZE output before adding indexes blindly.",
        content: [
            "Slow API endpoints are rarely caused by your Node.js or Python runtime; 80% of the time, the bottleneck is an unindexed sequential scan on a growing relational table.",
            "Composite indexes follow the leftmost prefix rule. If you frequently filter by tenant_id and sort by created_at DESC, a composite index on (tenant_id, created_at DESC) eliminates both the table scan and an expensive in-memory sort.",
            "Remember that every index incurs write overhead on INSERT and UPDATE operations. Use partial indexes with a WHERE clause when you only query active or unprocessed rows."
        ]
    },
    {
        id: 3,
        title: "Building a Token-Driven Design System with Tailwind CSS",
        category: "UI/UX & CSS",
        date: "Oct 21, 2026",
        readTime: "6 min read",
        excerpt: "Bridge the gap between Figma variables and utility-first CSS without creating unmaintainable class soup.",
        content: [
            "Design systems succeed when designers and engineers share the exact same vocabulary. Instead of hardcoding hex colors across fifty components, map semantic CSS custom properties like --surface-primary and --border-subtle.",
            "In Tailwind CSS, pairing semantic tokens with small, composable primitive components (Button, Card, Badge, Dialog) ensures visual consistency across an entire SaaS product.",
            "Document spacing scales, border radii, and focus ring states early so every interactive control feels cohesive and accessible."
        ]
    },
    {
        id: 4,
        title: "Designing Idempotent REST APIs for Reliable Payment & Webhook Flows",
        category: "Database & API",
        date: "Oct 09, 2026",
        readTime: "8 min read",
        excerpt: "Prevent duplicate charges and race conditions using idempotency keys, database unique constraints, and transactional outboxes.",
        content: [
            "Network timeouts are inevitable in distributed systems. When a client retries a POST request after a dropped connection, your API must guarantee the operation executes at most once.",
            "By requiring a client-generated Idempotency-Key header and storing the resulting response payload in a transactional table, duplicate requests safely return the original result without re-running side effects.",
            "Always verify cryptographic webhook signatures before parsing payloads, and acknowledge receipt with a 200 OK immediately while offloading heavy processing to a background worker."
        ]
    },
    {
        id: 5,
        title: "Mastering TypeScript Discriminated Unions for Bulletproof UI State",
        category: "Next.js & React",
        date: "Sep 27, 2026",
        readTime: "5 min read",
        excerpt: "Eliminate impossible boolean flag combinations (isLoading && isError) by modeling UI state machines with discriminated unions.",
        content: [
            "Tracking async requests with separate isLoading, isError, and data booleans inevitably leads to impossible states where both an error banner and stale data render simultaneously.",
            "Instead, define a single status discriminant: { status: 'idle' } | { status: 'loading' } | { status: 'success'; data: T } | { status: 'error'; message: string }.",
            "TypeScript automatically narrows the available properties inside switch statements, guaranteeing compile-time safety across every UI state."
        ]
    },
    {
        id: 6,
        title: "Micro-Interactions That Elevate Web Applications from Good to Great",
        category: "UI/UX & CSS",
        date: "Sep 15, 2026",
        readTime: "6 min read",
        excerpt: "Subtle hover transitions, tactile button feedback, and layout animations that guide user attention without hurting performance.",
        content: [
            "Great interface motion is felt rather than noticed. Purposeful transitions under 200 milliseconds confirm user actions, establish spatial hierarchy, and soften abrupt layout shifts.",
            "Stick to GPU-composited properties—transform and opacity—to maintain a locked 60fps frame rate even on mid-range mobile devices.",
            "Always respect the prefers-reduced-motion media query so users sensitive to animation enjoy a calm, static experience."
        ]
    },
    {
        id: 7,
        title: "Zero-Downtime Docker Deployments on a Single VPS",
        category: "DevOps & Career",
        date: "Aug 30, 2026",
        readTime: "7 min read",
        excerpt: "How to configure health checks, reverse proxy upstream switching, and automated rollbacks without complex Kubernetes overhead.",
        content: [
            "Not every startup needs a multi-region Kubernetes cluster on day one. A well-configured Linux VPS running Docker Compose and Caddy or Nginx can effortlessly serve hundreds of thousands of monthly users.",
            "To achieve zero-downtime deploys, spin up the new container version alongside the old one, wait for its /health endpoint to return HTTP 200, and atomically reload the reverse proxy upstream.",
            "Automate database backups to object storage daily and test restoring them monthly—an untested backup is not a backup."
        ]
    },
    {
        id: 8,
        title: "Optimizing Core Web Vitals: Fixing LCP and CLS in Image-Heavy Apps",
        category: "Next.js & React",
        date: "Aug 14, 2026",
        readTime: "6 min read",
        excerpt: "Practical steps to eliminate cumulative layout shift and prioritize hero assets for 99+ Lighthouse performance scores.",
        content: [
            "Largest Contentful Paint (LCP) often suffers because hero images are lazy-loaded by mistake. Never add loading='lazy' to above-the-fold media; instead, mark your primary hero visual with high fetch priority.",
            "Cumulative Layout Shift (CLS) frustrates users when late-loading fonts or dynamic banners push buttons downward mid-click. Always reserve explicit aspect ratios on media containers and use font-display: swap with matched fallback metrics.",
            "Measure real-user metrics (RUM) alongside lab Lighthouse audits to catch device-specific bottlenecks."
        ]
    },
    {
        id: 9,
        title: "Clean SQL Schema Design: Normalization vs. Pragmatic Denormalization",
        category: "Database & API",
        date: "Jul 29, 2026",
        readTime: "8 min read",
        excerpt: "When to enforce strict Third Normal Form (3NF) and when read-heavy dashboards justify calculated summary columns.",
        content: [
            "Start every relational schema in Third Normal Form (3NF). Eliminating duplicate data prevents update anomalies and keeps your source of truth unambiguous.",
            "However, once an analytics dashboard begins joining seven tables on every page load, pragmatic denormalization—such as maintaining a counter cache or materialized view—can cut query latency by 95%.",
            "Document every denormalized column clearly and update it inside the same database transaction as the parent record."
        ]
    },
    {
        id: 10,
        title: "How to Structure Technical Case Studies in Your Developer Portfolio",
        category: "DevOps & Career",
        date: "Jul 11, 2026",
        readTime: "5 min read",
        excerpt: "What hiring managers and freelance clients actually look for when reviewing your projects and engineering decisions.",
        content: [
            "Listing a tech stack next to a screenshot only tells half the story. Decision-makers want to understand the problem you solved, the trade-offs you weighed, and the measurable outcome.",
            "Structure each project walkthrough around four concise pillars: The Problem, Architecture & Tech Choices, Key Technical Challenge Solved, and Live Results.",
            "Include clean code samples, interactive previews, and clear calls to action so visitors can immediately evaluate your craft."
        ]
    }
];