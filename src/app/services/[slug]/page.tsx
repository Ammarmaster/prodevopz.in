import { notFound } from "next/navigation";
import Link from "next/link";
import { Cpu, Check, ArrowRight, Clock, Star, Terminal, Zap, ShieldAlert } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;

  // Pre-configured services data for SEO optimization
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
    }
  > = {
    "ai-development": {
      title: "AI Development & LLM Integration",
      tagline: "Building Cognitive Systems for Modern Enterprises",
      desc: "Integrate large language models (LLMs), neural networks, computer vision APIs, and custom automated chatbot agents directly into your products to augment operations.",
      features: [
        "LLM Fine-tuning & Retrieval Augmented Generation (RAG)",
        "Automated Intelligent Customer Support Chatbots",
        "Predictive Machine Learning Data Models",
        "Neural Object Detection & Computer Vision Pipelines",
        "Vector Databases Setup (Pinecone, pgvector, Redis)",
      ],
      techStack: ["OpenAI API", "Claude API (Anthropic)", "Gemini API", "LangChain", "PyTorch", "FastAPI"],
      benefits: [
        "Automate up to 70% of standard user inquiries",
        "Deliver personalized user recommendations in real-time",
        "Optimize operational decisions using predictive ML pipelines",
      ],
      timeline: "4 - 8 Weeks",
      pricing: "Starting at ₹1,50,000",
    },
    "mobile-development": {
      title: "Mobile App Development",
      tagline: "Luxury Native Android & iOS Interfaces",
      desc: "We build native-grade mobile applications combining smooth 60fps micro-animations, offline synchronizations, and secure biometric authentication.",
      features: [
        "Cross-Platform Flutter & React Native Engineering",
        "Biometric Authentication & Encrypted Storage",
        "Offline-First SQLite Database Integration",
        "Real-Time WebSocket Support & Chat Integration",
        "App Store & Play Store Deployment Automation",
      ],
      techStack: ["React Native", "Flutter", "TypeScript", "Swift", "Kotlin", "Firebase"],
      benefits: [
        "100% Shared codebase for Android and iOS systems",
        "Biometric security protocols built in standard",
        "Automated deployment releases via GitHub Actions",
      ],
      timeline: "5 - 9 Weeks",
      pricing: "Starting at ₹1,20,000",
    },
    "web-development": {
      title: "Web App Development",
      tagline: "Premium High-Speed Web Applications",
      desc: "We engineer Next.js and React websites built with Tailwind CSS v4, optimized for search engines and boasting perfect Lighthouse performance metrics.",
      features: [
        "Next.js 15 Server-Side Rendering (SSR) & ISR",
        "Tailwind CSS v4 Glassmorphic Styling",
        "Robust State management via Zustand & React Query",
        "PostgreSQL & Prisma ORM Database Architectures",
        "Dynamic Payment Gateway Checkouts (Razorpay, Cashfree)",
      ],
      techStack: ["Next.js 15", "React 19", "Tailwind CSS v4", "TypeScript", "Prisma", "PostgreSQL"],
      benefits: [
        "Achieve 100% Lighthouse audit scores on launch",
        "Automated SEO optimization including JSON-LD schema layouts",
        "Responsive, state-of-the-art UI animations (Framer Motion)",
      ],
      timeline: "3 - 5 Weeks",
      pricing: "Starting at ₹80,000",
    },
    "cloud-services": {
      title: "Cloud Infrastructure & DevOps",
      tagline: "Secure, Scalable Kubernetes Container Architectures",
      desc: "Continuous Integration & Continuous Deployment setup. We build secure container environments, automate load balancing, and set up real-time server monitors.",
      features: [
        "Docker Containerization & Kubernetes Cluster Scaling",
        "AWS, Google Cloud, and Azure Migration Pipelines",
        "Infrastructure as Code (IaC) via Terraform",
        "CI/CD Orchestration (GitHub Actions, GitLab CI)",
        "Cloudflare CDN caching & Bot Turnstile Protections",
      ],
      techStack: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Cloudflare", "GitHub Actions"],
      benefits: [
        "Reduce cloud hosting billing by up to 40% via auto-scaling",
        "Achieve 99.99% system availability with load balancers",
        "Immediate alert notifications via Slack or email logs",
      ],
      timeline: "3 - 6 Weeks",
      pricing: "Starting at ₹90,000",
    },
    "erp-crm-systems": {
      title: "Enterprise ERP & CRM Systems",
      tagline: "Custom Management Software for Complex Business Workflows",
      desc: "We build tailored Point-of-Sale (POS), billing, inventory, HRMS, CRM, and domain ERP (Restaurant, Hospital, School) systems custom sync'd to your business goals.",
      features: [
        "Real-Time Inventory & Low-Stock Alerts",
        "GST-Ready Automated Invoicing & PDF Receipts",
        "HRMS Attendance Tracking & Staff Role Permissions",
        "Interactive Dashboards with Analytics & Charts",
        "High Scale Database Sharding for Enterprise Speed",
      ],
      techStack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "Prisma"],
      benefits: [
        "Unify all operations into one centralized panel",
        "Eliminate paper-billing errors and inventory leakage",
        "Automated daily backups secured on offsite storage",
      ],
      timeline: "6 - 12 Weeks",
      pricing: "Starting at ₹1,80,000",
    },
  };

  const data = servicesMap[slug];
  if (!data) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-20">
      {/* Back button */}
      <Link
        href="/"
        className="flex items-center gap-1.5 text-xs text-foreground/60 hover:text-white transition-colors w-fit border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] px-3.5 py-2 rounded-xl"
      >
        <ArrowRight className="w-4 h-4 rotate-180" />
        Back to Home
      </Link>

      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3 flex flex-col gap-6">
          <span className="text-xs font-bold text-accent-orange uppercase tracking-wider bg-accent-orange/10 px-3.5 py-1.5 rounded-full w-fit">
            Service Profile
          </span>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white leading-tight">
            {data.title}
          </h1>
          <p className="text-xs font-bold text-accent-purple tracking-wide uppercase">
            {data.tagline}
          </p>
          <p className="text-xs sm:text-sm text-foreground/50 leading-relaxed">
            {data.desc}
          </p>
        </div>

        {/* Specs Box */}
        <div className="lg:col-span-2 glass-panel border-white/[0.06] p-6 flex flex-col gap-4 relative overflow-hidden">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Features */}
        <div className="glass-panel border-white/[0.06] p-8 flex flex-col gap-6">
          <h3 className="font-display font-bold text-lg text-white border-b border-white/[0.05] pb-2 flex items-center gap-2">
            <Terminal className="w-5.5 h-5.5 text-accent-orange" /> Engine Features
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
          <div className="glass-card p-6 flex flex-col gap-4 border-white/[0.08]">
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
    </div>
  );
}
