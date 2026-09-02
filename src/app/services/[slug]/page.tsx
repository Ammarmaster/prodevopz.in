import { notFound } from "next/navigation";
import Link from "next/link";
import { Cpu, Check, ArrowRight, Clock, Star, Terminal, Zap, ShieldAlert, Sparkles, Award, Layers } from "lucide-react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

interface Props {
  params: Promise<{ slug: string }>;
}

const servicesMap: Record<
  string,
  {
    title: string;
    tagline: string;
    desc: string;
    features: string[];
    techStack: string[];
    benefits: string[];
    timeline: string;
    pricing: string;
    faqs: { q: string; a: string }[];
    process: string[];
    testimonial: { quote: string; author: string; role: string };
  }
> = {
  "web-development": {
    title: "Premium Web App Development",
    tagline: "High-Speed, Next.js & React-Powered Platforms",
    desc: "We build custom, modern web applications leveraging Next.js, React, and Tailwind CSS. Every web platform is engineered with server-side rendering (SSR), optimized API gateways, and rigorous layout guidelines to guarantee 100% Lighthouse audit performance, securing high ranks on traditional engines and AI search models like Perplexity and ChatGPT.",
    features: [
      "Next.js Server-Side Rendering (SSR) & Incremental Static Regeneration (ISR)",
      "Tailwind CSS Glassmorphic responsive layouts",
      "Prisma ORM & high-performance database indexing (PostgreSQL, MySQL)",
      "Robust state management and real-time synchronization dashboards",
      "Secure payment checkout integrations (Razorpay, Stripe, Cashfree)"
    ],
    techStack: ["Next.js 15", "React 19", "Tailwind CSS v4", "TypeScript", "Prisma", "PostgreSQL"],
    benefits: [
      "100% Lighthouse SEO & performance audit targets",
      "Secure cloud architecture protecting customer database parameters",
      "Dynamic SEO rendering with automated sitemap indexation"
    ],
    timeline: "3 - 5 Weeks",
    pricing: "Starting at ₹80,000",
    process: [
      "Architecture & Wireframe Mapping",
      "Premium Frontend Component Building",
      "Serverless Backend Routing & Integrations",
      "Vercel Edge Speed Optimizations",
      "Final Code Validation & Deployment"
    ],
    testimonial: {
      quote: "ProDevOpz delivered a web app that loads instantly and helped us secure high search rankings for our key terms within weeks.",
      author: "Rohan Deshmukh",
      role: "CTO, FinScale India"
    },
    faqs: [
      { q: "Do you build search-engine friendly websites?", a: "Yes. All web applications are server-side rendered (SSR) using Next.js to ensure crawlers index page content instantly." },
      { q: "What is the typical development lifecycle?", a: "Most premium web application builds are fully tested and deployed within 3 to 5 weeks." }
    ]
  },
  "mobile-development": {
    title: "Mobile App Development",
    tagline: "Luxury Native Android & iOS Interfaces",
    desc: "We engineer high-fidelity, cross-platform mobile applications using Flutter and React Native. Our development lifecycle combines native-level security, bio-metrics validations, local SQLite syncing, and smooth 60fps graphic components optimized for high startup retention.",
    features: [
      "Cross-platform code sharing (iOS & Android platforms)",
      "Local offline storage synchronization via SQLite databases",
      "Biometric validation and encrypted keychain storage",
      "Push Notification campaigns & real-time analytics hubs",
      "App Store & Play Store publishing automation pipelines"
    ],
    techStack: ["React Native", "Flutter", "Swift", "Kotlin", "TypeScript", "SQLite"],
    benefits: [
      "Single codebase reducing mobile engineering costs by 40%",
      "Impeccable performance matching native execution standards",
      "Complete App Store review compliance validation built-in"
    ],
    timeline: "5 - 9 Weeks",
    pricing: "Starting at ₹1,20,000",
    process: [
      "User Journey & UX Wireframing",
      "Component Styling & Local DB Setup",
      "Secure API Connection & Authentication Setup",
      "Multi-device simulator testing",
      "App Store Onboarding & Launch"
    ],
    testimonial: {
      quote: "Our mobile app reached 10k users in the first month with zero crashes. ProDevOpz engineers are true experts.",
      author: "Aditi Sharma",
      role: "Founder, HealthPulse"
    },
    faqs: [
      { q: "Do you publish apps to the Apple App Store and Google Play Store?", a: "Yes, we handle the entire compilation, submission, and validation review process until the app is live." },
      { q: "Can we share logic between iOS and Android?", a: "Yes. By using Flutter or React Native, up to 90% of the codebase is shared, reducing maintenance costs." }
    ]
  },
  "ai-development": {
    title: "AI Development & LLM Integration",
    tagline: "Cognitive AI Systems and Autonomous Workflows",
    desc: "Transform your startup or enterprise operations with generative AI. We fine-tune LLMs, build custom Retrieval-Augmented Generation (RAG) databases, construct intelligent support agents, and design neural computer vision pipelines optimized for custom business parameters.",
    features: [
      "Retrieval-Augmented Generation (RAG) with Vector Databases",
      "Custom Fine-tuning of open-source LLMs (Llama, Mistral)",
      "Autonomous conversational customer-support chatbots",
      "Neural object detection & computer vision classifications",
      "Vector embeddings setup (Pinecone, pgvector, Redis)"
    ],
    techStack: ["OpenAI API", "Claude API", "Gemini API", "LangChain", "FastAPI", "Pinecone"],
    benefits: [
      "Reduce customer support response times by up to 70%",
      "Automate complex classification operations dynamically",
      "Provide secure, vector-indexed company document searching"
    ],
    timeline: "4 - 8 Weeks",
    pricing: "Starting at ₹1,50,000",
    process: [
      "Data Cleansing & Vector Indexing Design",
      "LLM Context window tuning",
      "Backend Integration & Prompt Orchestrations",
      "Safety Guardrails & Accuracy Testing",
      "Production deployment via high-speed API Gateways"
    ],
    testimonial: {
      quote: "Integrating custom support bots saved our help desk 50 hours a week. The accuracy of their RAG pipeline is incredible.",
      author: "Vikram Mehta",
      role: "Operations Director, LogiCore"
    },
    faqs: [
      { q: "Is our enterprise data safe when using LLM models?", a: "Yes. We enforce enterprise-grade data boundaries and use private, self-hosted API instances to ensure your data is never used for training public models." },
      { q: "What vector databases do you support?", a: "We specialize in Pinecone, pgvector on PostgreSQL, Redis, and Qdrant depending on operational scale." }
    ]
  },
  "cloud-services": {
    title: "Cloud Infrastructure & DevOps",
    tagline: "Secure, Scalable Kubernetes Container Systems",
    desc: "Automate server scaling, secure data pipelines, and eliminate hosting downtimes. We build cloud container deployments using Docker and Kubernetes, write Infrastructure as Code (IaC) with Terraform, and configure CI/CD continuous delivery pipelines on AWS, Google Cloud, and Azure.",
    features: [
      "Kubernetes cluster automation & Docker container configurations",
      "Infrastructure as Code (IaC) scripts via Terraform",
      "CI/CD continuous delivery channels (GitHub Actions, GitLab CI)",
      "Cloudflare CDN edge cache rules & DDoS defense layers",
      "Real-time server logging dashboards (Grafana, Prometheus)"
    ],
    techStack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Cloudflare"],
    benefits: [
      "99.99% website uptime guarantees via auto-load balancers",
      "Reduce cloud infrastructure spend by up to 35% via automatic sizing",
      "One-click server deployments with zero-downtime rolling updates"
    ],
    timeline: "3 - 6 Weeks",
    pricing: "Starting at ₹90,000",
    process: [
      "Current Hosting & Network Audit",
      "Terraform Architecture Blueprinting",
      "Dockerization of Application Code",
      "Kubernetes Cluster & Load Balancer Setup",
      "Continuous Delivery & Logging Handover"
    ],
    testimonial: {
      quote: "Our hosting bills fell by 40% while page speeds increased dramatically. Their DevOps setup is top tier.",
      author: "Sanjay Sen",
      role: "VP Engineering, RetailGo"
    },
    faqs: [
      { q: "Which cloud providers do you work with?", a: "We build systems across Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, and DigitalOcean." },
      { q: "How do you ensure zero-downtime releases?", a: "We configure rolling updates inside Kubernetes or AWS ECS so new versions are launched before old ones are safely phased out." }
    ]
  },
  "erp-crm-systems": {
    title: "Enterprise ERP & CRM Systems",
    tagline: "Bespoke Business Management Architecture",
    desc: "Unify your company's processes into one secure dashboard. We design and build custom billing, HRMS payroll, inventory ledgers, and POS solutions built for industries like retail, logistics, education, and healthcare.",
    features: [
      "Real-time inventory mapping & low stock alerts",
      "Automated PDF invoicing & GST tax compliance engines",
      "HRMS attendance logging & role-based permission parameters",
      "B2B CRM communications & email integration portals",
      "Automated offsite backups with high encryption"
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "Prisma"],
    benefits: [
      "Eliminate manual invoicing errors and stock leakage",
      "Complete visibility over company operations in one dashboard",
      "Scalable SQL/NoSQL structures that grow with your company"
    ],
    timeline: "6 - 12 Weeks",
    pricing: "Starting at ₹1,80,000",
    process: [
      "Operational Flow Mapping",
      "Database Schema Design & Normalization",
      "Admin Panel & Role Dashboard Building",
      "Billing/Accounting Engine Testing",
      "Data Migration & Live Launch"
    ],
    testimonial: {
      quote: "Our custom ERP solved our inventory leakages and gave us unified billing across 5 warehouses. Unbelievable work.",
      author: "Rajesh K.",
      role: "MD, K-Logistics"
    },
    faqs: [
      { q: "Can we migrate our current Excel/CSV data into the ERP?", a: "Yes, we handle the entire data migration, mapping, and schema sanitation process during launch." },
      { q: "Are user access controls customizable?", a: "Yes. You can customize permissions so managers, clerks, and accountants can only see relevant screens." }
    ]
  },
  "react-native-development": {
    title: "React Native App Development",
    tagline: "State-of-the-Art Cross-Platform App Systems",
    desc: "Deliver premium cross-platform apps built on React Native. We write highly performant, responsive app architectures utilizing React 19 methodologies, offline-first syncing, and luxury transitions that feel identical to native iOS and Android components.",
    features: [
      "Fast-Refresh interactive interface workflows",
      "Native bridge integrations for hardware systems",
      "Offline caching using local JSON-store & SQLite",
      "Smooth layout transitions & micro-animations",
      "Push campaigns using Firebase Cloud Messaging"
    ],
    techStack: ["React Native", "TypeScript", "Expo", "SQLite", "Zustand", "Tailwind CSS"],
    benefits: [
      "Launch on both App Stores simultaneously",
      "Share up to 90% of business logic files",
      "Lower operational maintenance costs"
    ],
    timeline: "4 - 8 Weeks",
    pricing: "Starting at ₹1,10,000",
    process: [
      "UX/UI Visual Planning",
      "State & DB Schema Building",
      "API Integrations & Device Testing",
      "App Store reviews submission",
      "Post-launch support"
    ],
    testimonial: {
      quote: "Our React Native app loads instantly on both Android and iPhone. ProDevOpz exceeded all our speed expectations.",
      author: "Neha Patil",
      role: "Product Lead, QuickCart"
    },
    faqs: [
      { q: "Is React Native performant?", a: "Yes. By using the new architecture (TurboModules and Fabric), React Native delivers native-level rendering speeds." },
      { q: "Can you implement push notifications?", a: "Yes, we integrate Firebase Cloud Messaging for instant notifications." }
    ]
  },
  "flutter-development": {
    title: "Flutter App Development",
    tagline: "High-Performance Pixel-Perfect Apps",
    desc: "We build custom Flutter applications with rich layouts and high-speed compilation. Leveraging Dart's compilation standards, we engineer smooth applications with custom canvas drawings, responsive grids, and biometric security systems.",
    features: [
      "Dart high-speed compilation pipelines",
      "Custom canvas vector drawings & rich visuals",
      "Secure local biometric security checks",
      "Real-time socket notifications & updates",
      "Clean architecture blocks (BLoC or Riverpod)"
    ],
    techStack: ["Flutter", "Dart", "BLoC", "SQLite", "Firebase", "Google Maps API"],
    benefits: [
      "Unified UI representation across all mobile screen sizes",
      "Compiled to native machine code for stellar speeds",
      "Quick app updates deployment"
    ],
    timeline: "5 - 9 Weeks",
    pricing: "Starting at ₹1,15,000",
    process: [
      "Layout & Design blueprints creation",
      "BLoC State Management Setup",
      "Third-party integrations",
      "Hardware-level compatibility checks",
      "Play Store & App Store deployments"
    ],
    testimonial: {
      quote: "The Flutter interface they built is gorgeous. It looks identical on older Androids and the latest iPhones.",
      author: "Manish Shah",
      role: "CTO, FinPay"
    },
    faqs: [
      { q: "Why choose Flutter over React Native?", a: "Flutter is ideal when you need custom UI widgets that look identical on all devices, as it bypasses platform-specific rendering." },
      { q: "Is Flutter suitable for enterprise applications?", a: "Yes, it compiles to native code and is backed by Google, making it suitable for secure applications." }
    ]
  },
  "nextjs-development": {
    title: "Next.js Web App Development",
    tagline: "Enterprise-Grade SEO & Web Engineering",
    desc: "Accelerate your online presence with professional Next.js development. We engineer Next.js websites built with server components, dynamic page rendering, and perfect page speeds, targeting keywords like custom software and free internships to drive traffic.",
    features: [
      "Next.js App Router Server Component architectures",
      "SEO metadata optimization tags built in standard",
      "Dynamic Route caching & high prefetching speeds",
      "PostgreSQL and Prisma schema optimizations",
      "Edge Middleware route validations & security headers"
    ],
    techStack: ["Next.js 15", "React 19", "Prisma", "PostgreSQL", "Tailwind CSS", "Vercel"],
    benefits: [
      "Rank higher on Google with server-side rendered pages",
      "Exceptional user retention with layout speeds < 1s",
      "Zero server configuration when deployed to Vercel"
    ],
    timeline: "3 - 5 Weeks",
    pricing: "Starting at ₹85,000",
    process: [
      "Sitemap & Route Mapping",
      "Server Component setup",
      "Prisma DB setup & integration",
      "SEO schema injection",
      "Vercel Edge launch"
    ],
    testimonial: {
      quote: "Their Next.js setup completely resolved our loading speed issues, causing our Google organic search traffic to double.",
      author: "Preeti Rao",
      role: "Marketing Manager, EduLearn"
    },
    faqs: [
      { q: "Why use Next.js instead of standard React?", a: "Next.js handles server-side rendering (SSR), which is essential for SEO because it sends pre-rendered HTML to search engines." },
      { q: "What is the difference between SSR and static pages?", a: "SSR generates pages on the fly for dynamic data, while static pages are built once and load instantly." }
    ]
  },
  "nodejs-development": {
    title: "Node.js Backend Engineering",
    tagline: "High-Throughput Secure APIs & Microservices",
    desc: "Build a highly scalable backend architecture. We design Node.js microservices, configure secure REST and GraphQL API gateways, set up Redis database caches, and configure WebSockets for real-time operations.",
    features: [
      "Express.js & NestJS secure server architectures",
      "High scale database schema indexing",
      "Redis caching to reduce database loads",
      "Secure JSON Web Token (JWT) authorizations",
      "WebSocket integration for instant operations"
    ],
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Redis", "TypeScript", "Docker"],
    benefits: [
      "Support thousands of connections with zero latency",
      "Protect server resources from SQL injection attempts",
      "Modular components that simplify future feature additions"
    ],
    timeline: "4 - 8 Weeks",
    pricing: "Starting at ₹95,000",
    process: [
      "API Blueprint & Entity mapping",
      "Database normalizations & queries writing",
      "Authentication and Security middleware setup",
      "Unit testing & code coverage checkouts",
      "Dockerized microservices deployment"
    ],
    testimonial: {
      quote: "Our database load fell by 70% after their backend optimizations. The Node.js structure is bulletproof.",
      author: "Sameer Joshi",
      role: "Tech Architect, CloudBase"
    },
    faqs: [
      { q: "Do you use NestJS or Express?", a: "We use both. Express is great for lightweight APIs, while NestJS is preferred for structured enterprise microservices." },
      { q: "How do you handle API security?", a: "We implement JWT authentication, rate limiting, helmet security headers, and query sanitation." }
    ]
  },
  "saas-development": {
    title: "SaaS Digital Product Development",
    tagline: "Launch Your Startup MVP to Market Fast",
    desc: "Build your SaaS software product from idea to MVP. We integrate user authentication, Stripe/Razorpay billing systems, custom databases, and responsive admin panels designed to acquire users quickly.",
    features: [
      "Multi-tenant database schema configurations",
      "Recurring billing & subscription management setups",
      "Interactive usage tracking & report downloads",
      "Social login setups (Google, GitHub, Apple)",
      "High performance responsive customer portals"
    ],
    techStack: ["Next.js", "PostgreSQL", "Stripe/Razorpay", "Tailwind CSS", "Prisma", "AWS"],
    benefits: [
      "Deploy an MVP to staging in as little as 4 weeks",
      "Pre-configured payment flows for instant subscriptions",
      "Responsive design optimized for both mobile and desktop"
    ],
    timeline: "4 - 8 Weeks",
    pricing: "Starting at ₹1,40,000",
    process: [
      "User Story Mapping",
      "Multi-tenant Database Setup",
      "Core Feature Engineering",
      "Billing & Webhook integrations",
      "Beta launch & feedback logging"
    ],
    testimonial: {
      quote: "ProDevOpz built our MVP in 5 weeks. We acquired our first 100 paying customers without a single glitch.",
      author: "Karan Johar",
      role: "Founder, SaaSFlow"
    },
    faqs: [
      { q: "What is a multi-tenant database?", a: "It is an architecture where multiple clients (tenants) share a database but their data is securely separated." },
      { q: "Can we setup metered billing?", a: "Yes, we integrate Stripe or Razorpay subscription webhooks to charge users based on usage." }
    ]
  },
  "restaurant-erp": {
    title: "Intelligent Restaurant ERP Software",
    tagline: "Centralized Management for Food Businesses",
    desc: "Manage kitchen workflows, tables, menus, online orders, and billing in one central portal. We build custom ERP systems for restaurants, bakeries, and cloud kitchens designed to eliminate operational waste.",
    features: [
      "Real-time table orders & Kitchen Display System (KDS)",
      "Live inventory tracking & ingredient cost parameters",
      "Staff shifting registers & role controls",
      "Integrations with Swiggy/Zomato online delivery APIs",
      "Comprehensive daily revenue reports & charts"
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS", "WebSockets", "Prisma"],
    benefits: [
      "Reduce order-to-table times by up to 30%",
      "Prevent raw ingredient wastage with automated tracking",
      "Centralized view of multi-branch revenue reports"
    ],
    timeline: "6 - 10 Weeks",
    pricing: "Starting at ₹1,50,000",
    process: [
      "Kitchen Workflow & Layout Audit",
      "Menu & Database Setup",
      "KDS and POS UI Customizations",
      "Online order API configurations",
      "Staff onboarding training & Launch"
    ],
    testimonial: {
      quote: "Our kitchen order confusion vanished. The real-time KDS update on the tablets is worth every rupee.",
      author: "Chef Harish",
      role: "Owner, SpiceRoute Restos"
    },
    faqs: [
      { q: "Does the system support multiple branches?", a: "Yes. Our cloud database architecture supports central catalog syncs and separate branch portals." },
      { q: "Can it run offline?", a: "Yes, we implement offline-capable hybrid sync so billing never halts during internet drops." }
    ]
  },
  "restaurant-pos": {
    title: "GST-Ready Restaurant POS Software",
    tagline: "High-Speed Billing & Checkout Interfaces",
    desc: "Accelerate checkout counters with a GST-compliant Point-of-Sale. We build fast, touch-friendly POS billing systems that print receipts, handle splits, track table states, and update inventory instantly.",
    features: [
      "Touch-optimized high-speed billing interface",
      "GST-ready taxation & thermal printer integrations",
      "Table status visual layout (Free, Occupied, Billing)",
      "Split-bill checks & multiple payment options",
      "End-of-day sales summary prints"
    ],
    techStack: ["React", "Electron", "SQLite", "Node.js", "Tailwind CSS", "Thermal Print API"],
    benefits: [
      "Generate bills in under 5 seconds",
      "Thermal printing compatibility for standard pos setups",
      "Automatic offline capabilities for billing continuity"
    ],
    timeline: "4 - 7 Weeks",
    pricing: "Starting at ₹85,000",
    process: [
      "Hardware Compatibility Check",
      "UI layout customization",
      "Tax & Receipt configuration",
      "Local testing with thermal printer",
      "Onsite installation & launch"
    ],
    testimonial: {
      quote: "Our billing queue is moving twice as fast. The thermal printer integration works flawlessly.",
      author: "Vikas Hegde",
      role: "Manager, Udupi Express"
    },
    faqs: [
      { q: "What thermal printers are supported?", a: "Our system supports ESC/POS protocol thermal printers (both USB and Network/Wi-Fi)." },
      { q: "Can we customize tax slabs?", a: "Yes, you can easily configure GST, Service Tax, or custom VAT slabs from the admin panel." }
    ]
  },
  "software-testing": {
    title: "Enterprise Software QA & Testing",
    tagline: "Zero-Bug Deployments and High Test Coverage",
    desc: "Secure software releases with comprehensive QA testing. We write automated unit tests, compile end-to-end integration tests using Cypress and Playwright, and run stress tests to ensure your app handles massive traffic spikes.",
    features: [
      "Automated End-to-End browser checks via Playwright/Cypress",
      "Unit testing & Mocking setups (Jest, Vitest, Mocha)",
      "REST & GraphQL API stress tests via k6",
      "Security vulnerability scanning checks",
      "CI/CD pipeline test run gates configurations"
    ],
    techStack: ["Playwright", "Cypress", "Jest", "k6", "GitHub Actions", "SonarQube"],
    benefits: [
      "Detect 95% of regressions before code reaches staging",
      "Stellar code reliability across all browsers",
      "Vulnerability reports for compliance audits"
    ],
    timeline: "3 - 5 Weeks",
    pricing: "Starting at ₹70,000",
    process: [
      "Current Codebase & Flow Audit",
      "Test Plan & Coverage Goal Setup",
      "Automated test scripts writing",
      "Stress test runs and fixes logging",
      "CI/CD automated gating setup"
    ],
    testimonial: {
      quote: "We sleep peacefully at night knowing their automated test suite validates all our main user payment flows before every deploy.",
      author: "Divya N.",
      role: "Director of QA, PaySafe"
    },
    faqs: [
      { q: "Do you write tests for mobile apps?", a: "Yes, we write mobile test scripts using Appium and Flutter integration test modules." },
      { q: "What is your test coverage target?", a: "We standardly target 80% to 95% code coverage depending on project guidelines." }
    ]
  },
  "ui-ux-design": {
    title: "Modern UI/UX Product Design",
    tagline: "High-Converting Glassmorphic Interface Designs",
    desc: "Optimize user conversion with state-of-the-art designs. We build interactive Figma wireframes, craft customized icons, and formulate premium design tokens optimized for mobile and desktop screens.",
    features: [
      "Figma interactive high-fidelity wireframes",
      "Consistent design system tokens (spacing, typography)",
      "Custom vector icons and web illustrations",
      "A/B conversion layout reviews",
      "Complete design handoff files with CSS styles"
    ],
    techStack: ["Figma", "Adobe Illustrator", "CSS Tokens", "Spline 3D", "Lottie Animations"],
    benefits: [
      "Increase signup conversions by up to 25% via design upgrades",
      "Clean, modern visuals that match top global software brands",
      "Developer-friendly layouts that speed up frontend coding"
    ],
    timeline: "2 - 4 Weeks",
    pricing: "Starting at ₹50,000",
    process: [
      "Competitor Study & Moodboarding",
      "UX wireframe layout iterations",
      "High-Fidelity UI styling & coloring",
      "Interactive prototyping & testing",
      "Asset export & developer handoff"
    ],
    testimonial: {
      quote: "The Figma designs were so clean that our developers coded the entire landing page in just 3 days.",
      author: "Rahul V.",
      role: "Product Manager, FitLife"
    },
    faqs: [
      { q: "Do you provide HTML code with the designs?", a: "By default, we deliver Figma handoff files. However, we can also deliver production-ready Tailwind CSS files as an addon." },
      { q: "How many design revisions are included?", a: "We include 3 rounds of comprehensive UI reviews to align on layout details." }
    ]
  },
  "custom-software": {
    title: "Bespoke Custom Software Development",
    tagline: "Tailored Solutions Built for Your Unique Operations",
    desc: "Solve your operational challenges with bespoke software. We study your manual processes, design scalable database schemas, build automated dashboards, and integrate custom APIs to streamline your business workflow.",
    features: [
      "Custom schema designs and database configurations",
      "Automated tasks scheduling (Cron jobs, queues)",
      "Secure integrations with third-party APIs",
      "Interactive data exporting tools (PDF, CSV, Excel)",
      "Robust logging panels for activity tracking"
    ],
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Terraform", "Prisma"],
    benefits: [
      "Build custom features that generic software cannot support",
      "Eliminate repetitive manual tasks through system automation",
      "Maintain full ownership of your code with no recurring license costs"
    ],
    timeline: "6 - 12 Weeks",
    pricing: "Starting at ₹1,60,000",
    process: [
      "Operational flow assessment",
      "Technical layout blueprinting",
      "Core feature programming",
      "Legacy system migrations",
      "Deployment & ongoing support"
    ],
    testimonial: {
      quote: "They automated our manual logistics routing, saving us thousands of hours of manual entry work.",
      author: "Vijay Patil",
      role: "CEO, Western Transport"
    },
    faqs: [
      { q: "Who owns the code source?", a: "You do. Upon project signoff, we hand over full repository ownership and credentials to your team." },
      { q: "Do you provide post-launch support?", a: "Yes. We include 30 days of free operational support and offer monthly maintenance plans." }
    ]
  },
  "startup-development": {
    title: "Rapid Startup MVP Development",
    tagline: "Build & Deploy Your Software MVP in 4 Weeks",
    desc: "Launch your startup MVP to market quickly. We focus on core features, build beautiful modern landing pages, integrate standard payment gateways, and configure user onboarding funnels designed to prove product-market fit.",
    features: [
      "Rapid prototyping of core product features",
      "Standard payment checkout integrations",
      "Database configurations for user registrations",
      "Analytics triggers for tracking user actions",
      "Optimized landing page layouts built for conversion"
    ],
    techStack: ["Next.js", "PostgreSQL", "Tailwind CSS", "Prisma", "Vercel", "Stripe/Razorpay"],
    benefits: [
      "Go from concept to live deployment in 4 weeks",
      "Clean codebase that developers can scale in the future",
      "Pre-optimized SEO metadata for immediate indexing"
    ],
    timeline: "3 - 5 Weeks",
    pricing: "Starting at ₹99,000",
    process: [
      "Core Scope Definition",
      "UX layout mapping",
      "Core features programming",
      "Billing & Analytics setups",
      "Live deployment & public launch"
    ],
    testimonial: {
      quote: "ProDevOpz helped us build our MVP, which enabled us to raise our pre-seed funding within 3 months of launch.",
      author: "Manoj Gowda",
      role: "Co-Founder, EduTech"
    },
    faqs: [
      { q: "How do you decide what features go into the MVP?", a: "We prioritize features that validate your core value proposition to users, saving secondary items for future updates." },
      { q: "Can we scale this code in the future?", a: "Yes. We write clean, modular TypeScript code that is fully scalable for future upgrades." }
    ]
  },
  "api-development": {
    title: "Secure Custom API Engineering",
    tagline: "High-Speed REST & GraphQL API Integration Channels",
    desc: "Build secure, reliable connection gateways. We write custom API services, configure GraphQL schemas, set up secure OAuth authorization flows, and write full developer documentation.",
    features: [
      "REST & GraphQL custom API endpoint configurations",
      "OAuth 2.0 & secure JWT validations",
      "Rate limiting and API DDoS defenses",
      "Developer documentation pages (Swagger, Postman)",
      "Database connection pooling optimizations"
    ],
    techStack: ["Node.js", "Express.js", "GraphQL", "PostgreSQL", "Redis", "TypeScript"],
    benefits: [
      "Enforce sub-100ms response times for all queries",
      "Allow clients and partners to securely query your data",
      "Clean API documentation that speeds up integrations"
    ],
    timeline: "3 - 6 Weeks",
    pricing: "Starting at ₹75,000",
    process: [
      "API Route & Parameter planning",
      "DB schema queries writing",
      "Security, rate-limiting & auth setups",
      "Testing & stress validation runs",
      "Documentation publishing & deploy"
    ],
    testimonial: {
      quote: "Their API integration documentation was so clean that our clients connected to our system in under an hour.",
      author: "Siddharth N.",
      role: "Tech Director, CoreSync"
    },
    faqs: [
      { q: "Do you build Swagger documentation?", a: "Yes, we deliver interactive Swagger or Postman Collections with every API build." },
      { q: "How do you handle API security?", a: "We enforce HTTPS, JWT authentication, rate limiting, and write inputs sanitations." }
    ]
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = servicesMap[slug];

  if (!data) {
    return {
      title: "Service profile | ProDevOpz",
      description: "Custom software engineering and AI integration services.",
    };
  }

  return {
    title: `${data.title} | Premium Services | ProDevOpz`,
    description: data.desc,
    keywords: [slug, ...data.techStack, ...data.features, "software making agency", "custom software development", "prodevopz"],
    openGraph: {
      title: `${data.title} | ProDevOpz`,
      description: data.desc,
      url: `https://prodevopz.jobsio.in/services/${slug}`,
      siteName: "ProDevOpz",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const data = servicesMap[slug];

  if (!data) {
    notFound();
  }

  // Generate Service Schema JSON-LD
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.title,
    "description": data.desc,
    "provider": {
      "@type": "Organization",
      "name": "ProDevOpz",
      "url": "https://prodevopz.jobsio.in/",
      "logo": "https://prodevopz.jobsio.in/logo.jpg",
      "image": "https://prodevopz.jobsio.in/logo.jpg"
    },
    "areaServed": "IN",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": data.pricing.replace(/[^0-9]/g, "") || "80000",
      "description": data.tagline
    }
  };

  // Generate FAQ Schema JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-12">
      {/* Schema Markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Services", href: "/" },
          { label: data.title },
        ]}
      />

      {/* Back button */}
      <Link
        href="/"
        className="flex items-center gap-1.5 text-xs text-foreground/60 hover:text-white transition-colors w-fit border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] px-3.5 py-2 rounded-xl print:hidden"
      >
        <ArrowRight className="w-4 h-4 rotate-180" />
        Back to Home
      </Link>

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 flex flex-col gap-5 text-left">
          <span className="text-[10px] font-extrabold text-accent-orange uppercase tracking-widest bg-accent-orange/10 px-3 py-1 rounded-full w-fit">
            Service Profile
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white leading-tight">
            {data.title}
          </h1>
          <p className="text-xs font-bold text-accent-purple tracking-wide uppercase">
            {data.tagline}
          </p>
          <p className="text-sm text-foreground/60 leading-relaxed">
            {data.desc}
          </p>
        </div>

        {/* Specs Box */}
        <div className="lg:col-span-2 glass-panel border-white/[0.06] p-6 flex flex-col gap-4 relative overflow-hidden text-left">
          <h3 className="font-display font-bold text-sm text-white border-b border-white/[0.05] pb-2">
            Service Parameters
          </h3>
          <div className="flex justify-between text-xs py-1">
            <span className="text-foreground/50">Timeline</span>
            <span className="font-bold text-white flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-accent-purple" /> {data.timeline}
            </span>
          </div>
          <div className="flex justify-between text-xs py-1">
            <span className="text-foreground/50">Investment</span>
            <span className="font-bold text-accent-orange">{data.pricing}</span>
          </div>
          <a
            href={`mailto:contactprodevopz@gmail.com?subject=Service Inquiry: ${data.title}`}
            className="mt-4 block w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-accent-orange to-accent-purple text-xs font-bold text-white shadow-xl hover:opacity-90 transition-opacity"
          >
            Request Call & Blueprint
          </a>
        </div>
      </div>

      {/* Features & Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {/* Features */}
        <div className="glass-panel border-white/[0.06] p-8 flex flex-col gap-6">
          <h3 className="font-display font-bold text-lg text-white border-b border-white/[0.05] pb-2 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-accent-orange" /> Engine Features
          </h3>
          <ul className="flex flex-col gap-4">
            {data.features.map((feat, i) => (
              <li key={i} className="flex gap-2.5 text-xs text-foreground/75 leading-relaxed">
                <Check className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits & Tech Stack */}
        <div className="flex flex-col gap-8">
          <div className="glass-panel p-6 flex flex-col gap-4 border-white/[0.06]">
            <h3 className="font-display font-bold text-base text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent-purple animate-pulse" /> Business ROI Benefits
            </h3>
            <ul className="flex flex-col gap-3">
              {data.benefits.map((b, i) => (
                <li key={i} className="flex gap-2 text-xs text-foreground/60 leading-relaxed">
                  <Star className="w-3.5 h-3.5 text-accent-purple shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel border-white/[0.06] p-6">
            <h4 className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest block mb-4">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {data.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-bold text-white bg-white/[0.03] border border-white/5 hover:border-white/15 px-3 py-1.5 rounded-lg transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="glass-panel border-white/[0.06] p-8 text-left">
        <h3 className="font-display font-bold text-lg text-white border-b border-white/[0.05] pb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-accent-blue" /> Project Execution Process
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 mt-6">
          {data.process.map((step, idx) => (
            <div key={idx} className="flex flex-col gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 relative">
              <span className="absolute top-2 right-3 font-display font-black text-2xl text-white/[0.04]">
                0{idx + 1}
              </span>
              <span className="text-[9px] font-extrabold text-accent-blue uppercase tracking-wider">
                Phase {idx + 1}
              </span>
              <span className="text-xs font-bold text-white leading-snug">
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials & FAQs */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
        {/* FAQs */}
        <div className="lg:col-span-7 glass-panel border-white/[0.06] p-8 flex flex-col gap-6">
          <h3 className="font-display font-bold text-lg text-white border-b border-white/[0.05] pb-2">
            Frequently Asked Questions
          </h3>
          <div className="flex flex-col gap-4">
            {data.faqs.map((faq, i) => (
              <div key={i} className="flex flex-col gap-2 p-4 rounded-xl bg-white/[0.01] border border-white/5">
                <span className="text-xs font-extrabold text-white flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-accent-orange shrink-0" />
                  {faq.q}
                </span>
                <p className="text-xs text-foreground/50 leading-relaxed pl-5.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="glass-panel border-white/[0.06] p-8 flex flex-col justify-between h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-purple/5 rounded-full filter blur-2xl pointer-events-none" />
            <div className="flex flex-col gap-4">
              <Award className="w-8 h-8 text-accent-purple" />
              <p className="text-xs italic text-foreground/70 leading-relaxed">
                &ldquo;{data.testimonial.quote}&rdquo;
              </p>
            </div>
            <div className="mt-6 border-t border-white/[0.05] pt-4 flex flex-col gap-0.5">
              <span className="text-xs font-bold text-white">{data.testimonial.author}</span>
              <span className="text-[10px] text-foreground/40 font-medium">{data.testimonial.role}</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
