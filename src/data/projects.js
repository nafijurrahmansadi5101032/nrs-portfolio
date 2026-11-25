export function slugify(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
}

export const PROJECTS_DATA = [
    {
        id: 1,
        title: "NexaFlow SaaS Analytics",
        category: "Full-Stack",
        featured: true,
        gradient: "from-indigo-600 via-blue-600 to-cyan-500",
        icon: "bar-chart-3",
        description: "Multi-tenant real-time product analytics dashboard with custom funnel tracking, cohort retention charts, and Stripe subscription billing.",
        highlights: [
            "Sub-50ms event ingestion pipeline using PostgreSQL partitioning",
            "Role-based access control (RBAC) with team workspaces",
            "Interactive SVG cohort heatmaps and CSV/PDF export"
        ],
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS", "Stripe"],
        github: "https://github.com"
    },
    {
        id: 2,
        title: "AetherUI Design System",
        category: "UI/UX",
        featured: true,
        gradient: "from-fuchsia-600 via-purple-600 to-indigo-600",
        icon: "layers",
        description: "Accessible, zero-runtime token-based component library featuring 45+ composable primitives, dark mode theming, and Figma sync.",
        highlights: [
            "Full WAI-ARIA keyboard navigation & screen reader compliance",
            "Automated design token pipeline from Figma Variables to CSS",
            "Interactive documentation playground with live code editing"
        ],
        tags: ["React", "TypeScript", "Tailwind CSS", "Figma", "Storybook"],
        github: "https://github.com"
    },
    {
        id: 3,
        title: "PulseAPI Gateway & Rate Limiter",
        category: "Backend/API",
        featured: true,
        gradient: "from-emerald-600 via-teal-600 to-cyan-600",
        icon: "shield-check",
        description: "High-throughput API gateway microservice supporting token-bucket rate limiting, JWT key rotation, and request observability.",
        highlights: [
            "Handles 12,000+ requests/sec with Redis sliding-window counters",
            "Automated OpenAPI 3.1 swagger spec aggregation",
            "Dockerized deployment with Prometheus health metrics"
        ],
        tags: ["Node.js", "Express", "Redis", "Docker", "PostgreSQL"],
        github: "https://github.com"
    },
    {
        id: 4,
        title: "MediSync Telehealth Portal",
        category: "Full-Stack",
        featured: false,
        gradient: "from-sky-600 via-cyan-600 to-emerald-500",
        icon: "stethoscope",
        description: "HIPAA-conscious patient appointment booking, digital prescription management, and encrypted WebRTC video consultation platform.",
        highlights: [
            "Automated SMS & email reminders with calendar sync",
            "Normalized Oracle SQL clinical record schema",
            "Responsive patient portal optimized for mobile devices"
        ],
        tags: ["Next.js", "Django REST", "Oracle SQL", "WebRTC"],
        github: "https://github.com"
    },
    {
        id: 5,
        title: "FinLedger Personal Wealth App",
        category: "Frontend",
        featured: false,
        gradient: "from-amber-500 via-orange-600 to-rose-600",
        icon: "wallet",
        description: "Interactive personal finance & portfolio allocation tracker with multi-currency conversion and visual cashflow forecasting.",
        highlights: [
            "Offline-first IndexedDB caching for instant load times",
            "Interactive budget sliders and recurring expense alerts",
            "Clean zero-clutter dark mode financial charts"
        ],
        tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
        github: "https://github.com"
    },
    {
        id: 6,
        title: "DocuCraft Collaborative Wiki",
        category: "Full-Stack",
        featured: false,
        gradient: "from-violet-600 via-indigo-600 to-blue-600",
        icon: "file-text",
        description: "Real-time multiplayer markdown knowledge base with slash commands, nested page trees, and instant full-text search.",
        highlights: [
            "Conflict-free replicated data types (CRDT) for live co-editing",
            "PostgreSQL ts_vector instant search across 10,000+ docs",
            "Granular public/private page sharing permissions"
        ],
        tags: ["Next.js", "Node.js", "WebSockets", "PostgreSQL"],
        github: "https://github.com"
    },
    {
        id: 7,
        title: "Kinetix Fitness Mobile UI Kit",
        category: "UI/UX",
        featured: false,
        gradient: "from-rose-600 via-pink-600 to-purple-600",
        icon: "activity",
        description: "End-to-end mobile & responsive web UX case study for an AI-guided strength training and macro-nutrition tracker.",
        highlights: [
            "Conducted usability testing with 25 beta athletes",
            "High-contrast outdoor-readable workout timer interface",
            "60+ interactive Figma screens & micro-interaction specs"
        ],
        tags: ["Figma", "Design Systems", "Prototyping", "Tailwind CSS"],
        github: "https://github.com"
    },
    {
        id: 8,
        title: "CargoPulse Logistics API",
        category: "Backend/API",
        featured: false,
        gradient: "from-slate-700 via-indigo-800 to-cyan-800",
        icon: "truck",
        description: "REST & Webhook backend engine for real-time fleet GPS telemetry, geofencing alerts, and automated route ETA calculation.",
        highlights: [
            "Geospatial indexing for sub-second radius queries",
            "Idempotent webhook retry queue with dead-letter logging",
            "Comprehensive integration test suite with 94% coverage"
        ],
        tags: ["Django REST", "PostgreSQL", "PostGIS", "Docker"],
        github: "https://github.com"
    },
    {
        id: 9,
        title: "DevForge Snippet & Gist Hub",
        category: "Frontend",
        featured: false,
        gradient: "from-cyan-600 via-blue-700 to-indigo-800",
        icon: "code",
        description: "Developer utility web app to organize, syntax-highlight, and export beautiful code screenshots with custom themes.",
        highlights: [
            "Supports 35+ programming languages with instant formatting",
            "One-click PNG/SVG export and shareable URL state",
            "Keyboard-first command palette (Cmd+K)"
        ],
        tags: ["React", "TypeScript", "Tailwind CSS", "PrismJS"],
        github: "https://github.com"
    },
    {
        id: 10,
        title: "EduSphere LMS Platform",
        category: "Full-Stack",
        featured: false,
        gradient: "from-emerald-600 via-green-600 to-teal-700",
        icon: "graduation-cap",
        description: "Modern learning management system with video progress tracking, interactive coding quizzes, and automated PDF certificates.",
        highlights: [
            "Adaptive HLS video streaming integration",
            "Instructor revenue & student completion analytics",
            "Automated verifiable certificate generation"
        ],
        tags: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
        github: "https://github.com"
    },
    {
        id: 11,
        title: "Veloce E-Commerce Storefront",
        category: "Frontend",
        featured: false,
        gradient: "from-orange-500 via-amber-600 to-yellow-600",
        icon: "shopping-bag",
        description: "Ultra-fast headless storefront with instant faceted filtering, slide-over cart drawer, and optimistic UI updates.",
        highlights: [
            "99/100 Google Lighthouse Performance score",
            "URL-synchronized multi-attribute product filtering",
            "Smooth mobile gesture-friendly product galleries"
        ],
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Storefront API"],
        github: "https://github.com"
    },
    {
        id: 12,
        title: "ChronoTask Kanban Workspace",
        category: "UI/UX",
        featured: false,
        gradient: "from-indigo-500 via-violet-600 to-fuchsia-600",
        icon: "kanban",
        description: "Minimalist sprint planning and issue tracking interface inspired by Linear, built for high-velocity engineering teams.",
        highlights: [
            "Zero-latency drag-and-drop board & list view switcher",
            "Custom keyboard shortcuts for every workflow action",
            "Clean monochrome & dark-slate visual hierarchy"
        ],
        tags: ["React", "Tailwind CSS", "Figma", "Accessibility"],
        github: "https://github.com"
    }
];