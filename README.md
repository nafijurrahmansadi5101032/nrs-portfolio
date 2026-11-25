# NRS.dev — Full-Stack Developer & UI Engineer Portfolio

A modern, responsive, and scalable developer portfolio built with **Next.js (App Router)**, **Tailwind CSS**, and **Lucide React**. Designed to showcase full-stack engineering projects, technical articles, and interactive UI components with clean URL routing and dynamic SEO metadata.

---

## ✨ Features

- **6-Section Landing Page (`/`)**:
  - **Hero & Live Config Card**: Interactive TypeScript developer profile preview with call-to-action buttons.
  - **About & Capabilities**: Overview of engineering philosophy, metrics, and categorized tech stack.
  - **Featured Projects**: Highlighted projects with full-card clickable navigation to dedicated project detail routes.
  - **Services & Solutions**: Core offerings across Full-Stack Development, UI/UX Design Systems, and API/Database Architecture.
  - **Latest Technical Articles**: Quick preview of recent engineering blog posts.
  - **Direct Contact & Gmail Compose Integration**: Interactive contact form alongside one-click direct Gmail web compose (`nafijurrahmansadi04@gmail.com`).
- **Complete Projects Archive (`/projects` & `/projects/[title]`)**:
  - Showcases **12 projects** with instant category filtering (`All`, `Full-Stack`, `Frontend`, `UI/UX`, `Backend/API`) and real-time keyword/tech search.
  - Dedicated dynamic slug routes (`/projects/[title]`) displaying architecture highlights, tech stacks, deployed preview links, and source code repositories.
- **Engineering Blog (`/blog` & `/blogs/[title]`)**:
  - Features **10 technical articles** filterable by topic (`Next.js & React`, `Database & API`, `UI/UX & CSS`, `DevOps & Career`) and live search.
  - Clean slugified article routes (`/blogs/[title]`) with dynamic per-article SEO metadata (`generateMetadata`).
- **Responsive Navigation & Smooth UX**:
  - Sticky glassmorphic navbar with active route highlighting and mobile drawer toggle.
  - Persistent footer with quick navigation links, social profiles, and a touch-friendly **Back to Top** smooth-scroll button.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI & Styling**: [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (`Inter` & `JetBrains Mono`)

---

## 📂 Project Structure

```text
nrs-portfolio/
├── public/                     # Static assets & icons
├── src/
│   ├── app/
│   │   ├── blogs/
│   │   │   ├── [title]        
│   │   |   |   └── page.js     # Dynamic blog article reader & SEO metadata
│   │   │   └── page.js         # Blog archive with category filter & search
│   │   │            
│   │   ├── projects/
│   │   │   ├── [title]/
│   │   │   │   └── page.js     # Dynamic project detail & architecture view
│   │   │   └── page.js         # Projects archive with filter & search
│   │   ├── globals.css         # Tailwind directives & custom utility styles
│   │   ├── layout.js           # Root layout with persistent Navbar & Footer
│   │   └── page.js             # Home page (6 sections)
│   ├── components/
│   │   ├── Footer.js           # Persistent footer with Back to Top button
│   │   ├── HomeContactForm.js  # Client-side interactive contact form
│   │   └── Navbar.js           # Sticky responsive navigation bar
│   └── data/
│       ├── posts.js            # 10 technical blog posts & slugify helper
│       └── projects.js         # 12 portfolio projects & slugify helper
├── package.json
└── README.md