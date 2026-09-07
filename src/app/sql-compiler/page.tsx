import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Database,
  Layers,
  Zap,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  Code2,
  Table,
  CheckCircle2,
  FileSpreadsheet,
  Cpu,
  Share2,
  Sparkles,
  HelpCircle,
  Play,
  Search,
  SlidersHorizontal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Online SQL Compiler & ER Diagram Visualizer | SQLite Studio",
  description:
    "Free in-browser online SQL compiler and interactive database schema ER visualizer powered by SQLite WebAssembly. Execute queries with 0ms server latency, visualize foreign keys, and export data with 100% privacy.",
  alternates: {
    canonical: "/sql-compiler",
  },
  keywords: [
    "online sql compiler",
    "free sql compiler",
    "sql er diagram visualizer",
    "database schema visualizer",
    "sqlite online compiler",
    "sqlite studio",
    "in browser sql runner",
    "sqlite webassembly",
    "entity relationship diagram online",
    "learn sql online",
    "prodevopz sql compiler"
  ],
  openGraph: {
    title: "Free Online SQL Compiler & ER Diagram Visualizer | SQLite Studio",
    description:
      "Run SQL queries online with 0ms server latency using in-browser SQLite WebAssembly. Auto-generate interactive ER diagrams, inspect foreign key relationships, and export results instantly.",
    url: "https://prodevopz.jobsio.in/sql-compiler",
    siteName: "ProDevOpz",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://prodevopz.jobsio.in/products/sql-compiler-app-icon.jpg",
        width: 1024,
        height: 1024,
        alt: "SQLite Studio Online SQL Compiler and ER Visualizer app icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online SQL Compiler & ER Diagram Visualizer | SQLite Studio",
    description:
      "In-browser SQLite WebAssembly engine, interactive database schema ER visualizer, line-by-line statement execution, and 0ms latency.",
    images: ["https://prodevopz.jobsio.in/products/sql-compiler-app-icon.jpg"],
  },
};

export default function SqlCompilerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://prodevopz.jobsio.in/sql-compiler#software",
        "name": "SQLite Studio",
        "alternateName": [
          "Online SQL Compiler",
          "Free Online SQL Compiler",
          "SQL ER Diagram Visualizer",
          "SQLite WebAssembly IDE",
          "ProDevOpz SQL Compiler"
        ],
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web, Browser, Cloud, Windows, macOS, Linux, Android, iOS",
        "description": "Free in-browser online SQL compiler and interactive database schema ER diagram visualizer powered by SQLite WebAssembly. Execute queries locally with zero latency, inspect foreign key relationships, and export datasets to CSV/JSON.",
        "url": "https://prodevopz.jobsio.in/sql-compiler",
        "sameAs": "https://sqlcompiler.jobsio.in/",
        "image": "https://prodevopz.jobsio.in/products/sql-compiler-app-icon.jpg",
        "author": {
          "@type": "Organization",
          "@id": "https://prodevopz.jobsio.in/#organization",
          "name": "ProDevOpz",
          "url": "https://prodevopz.jobsio.in/"
        },
        "creator": {
          "@type": "Organization",
          "@id": "https://prodevopz.jobsio.in/#organization"
        },
        "publisher": {
          "@id": "https://prodevopz.jobsio.in/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "description": "100% Free online SQL compiler and interactive ER diagram tool by ProDevOpz Technologies"
        },
        "featureList": [
          "In-browser SQLite 3 WebAssembly engine with 0ms server latency",
          "Interactive entity-relationship (ER) diagram visualizer with foreign key links",
          "Line-by-line SQL statement execution directly from code editor gutters",
          "Sortable and searchable data grid results with execution benchmarks",
          "One-click data export to CSV and JSON formats",
          "100% client-side privacy where queries and databases never leave the device",
          "Pre-loaded starter schemas including E-commerce, University, and HRMS"
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://prodevopz.jobsio.in/sql-compiler",
        "url": "https://prodevopz.jobsio.in/sql-compiler",
        "name": "Free Online SQL Compiler & ER Diagram Visualizer | SQLite Studio",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://prodevopz.jobsio.in/#website",
          "name": "ProDevOpz",
          "url": "https://prodevopz.jobsio.in/"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://prodevopz.jobsio.in/sql-compiler#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is SQLite Studio / Online SQL Compiler?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SQLite Studio is a free, modern in-browser SQL compiler and database development workspace engineered by ProDevOpz. It embeds a complete SQLite3 engine compiled to WebAssembly (WASM), allowing developers, students, and analysts to write, execute, and debug SQL queries with 0ms server latency."
            }
          },
          {
            "@type": "Question",
            "name": "How does the ER Diagram Visualizer work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "As you create tables and specify PRIMARY KEY and FOREIGN KEY constraints in your SQL scripts, the ER Diagram Visualizer automatically inspects the SQLite schema catalog and renders an interactive, draggable entity-relationship diagram displaying all table structures, columns, types, and relational foreign key connections."
            }
          },
          {
            "@type": "Question",
            "name": "Is my SQL data private and secure?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, 100%. SQLite Studio executes entirely within your web browser's local sandbox via WebAssembly. None of your SQL queries, table schemas, or imported datasets are ever transmitted to or stored on any external server."
            }
          },
          {
            "@type": "Question",
            "name": "Can I export query results to CSV or JSON?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Every query executed generates an interactive data grid that supports instant 1-click exporting to clean CSV spreadsheets and structured JSON arrays."
            }
          },
          {
            "@type": "Question",
            "name": "Is SQLite Studio completely free to use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, SQLite Studio is 100% free with no registration, no subscription paywalls, and no usage quotas. It is openly available at https://sqlcompiler.jobsio.in/."
            }
          }
        ]
      }
    ]
  };

  const coreFeatures = [
    {
      icon: <Zap className="w-5 h-5 text-accent-orange" />,
      title: "In-Browser WebAssembly Engine",
      desc: "Powered by official SQLite3 compiled to WebAssembly (WASM). Queries run in microsecond speeds directly in your browser without waiting for remote server round-trips.",
      badge: "0ms Server Latency",
    },
    {
      icon: <Layers className="w-5 h-5 text-accent-blue" />,
      title: "Interactive ER Diagram Visualizer",
      desc: "Automatically maps table relationships, composite keys, primary keys, and foreign keys into a clean, interactive entity-relationship canvas as you write DDL.",
      badge: "Visual Database Schemas",
    },
    {
      icon: <Play className="w-5 h-5 text-emerald-400" />,
      title: "Gutter Run & Multi-Query Execution",
      desc: "Execute discrete SQL statements line-by-line directly via editor gutter buttons, or run complete multi-statement migration scripts in one unified batch.",
      badge: "Precision Querying",
    },
    {
      icon: <Table className="w-5 h-5 text-accent-purple" />,
      title: "Sortable Data Grid & Export",
      desc: "Inspect query results in a high-performance virtualized data table. Sort columns dynamically and export result sets into CSV or JSON with a single click.",
      badge: "Instant CSV / JSON Export",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: "100% Client-Side Privacy",
      desc: "Your data stays on your machine. All database files and query executions occur in client-side RAM, ensuring absolute privacy for sensitive schemas and testing data.",
      badge: "Zero Cloud Telemetry",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-accent-orange" />,
      title: "Pre-Loaded SQL Starter Schemas",
      desc: "Jumpstart practice with ready-to-use database templates for E-Commerce, University Management, HRMS, and Social Networks—complete with realistic relational seeds.",
      badge: "Ready-to-Learn Schemas",
    },
  ];

  const comparisonPoints = [
    {
      feature: "Query Execution Latency",
      sqliteStudio: "Instant (~0.4ms) — In-browser WASM",
      traditional: "800ms - 3,500ms — Remote cloud queue",
    },
    {
      feature: "Database ER Visualizer",
      sqliteStudio: "Built-in, interactive & auto-generated",
      traditional: "Not available or requires paid plugin",
    },
    {
      feature: "Data Privacy & Security",
      sqliteStudio: "100% Local sandbox; zero server storage",
      traditional: "Code & data sent to external cloud servers",
    },
    {
      feature: "Gutter Line-by-Line Run",
      sqliteStudio: "Supported on any individual statement",
      traditional: "Runs whole script only or manual selection",
    },
    {
      feature: "Data Export Options",
      sqliteStudio: "1-Click CSV and JSON downloads",
      traditional: "Plain text output or copy-paste only",
    },
    {
      feature: "Cost & Account Requirement",
      sqliteStudio: "100% Free, no sign-up or paywall",
      traditional: "Freemium limits or mandatory registration",
    },
  ];

  const faqs = [
    {
      q: "What is SQLite Studio / Online SQL Compiler?",
      a: "SQLite Studio (hosted at sqlcompiler.jobsio.in) is a modern developer tool engineered by ProDevOpz. It provides a browser-native SQLite workspace that combines a code editor, an interactive entity-relationship schema visualizer, and a high-performance query runner with zero server latency.",
    },
    {
      q: "How does the ER diagram relationship visualizer work?",
      a: "When you execute SQL DDL statements (like CREATE TABLE orders (id INT, user_id INT REFERENCES users(id))), the visualizer inspects SQLite's system catalog (sqlite_master and PRAGMA foreign_key_list) and constructs a visual diagram connecting related tables with relational link lines.",
    },
    {
      q: "Are my databases and queries saved on a server?",
      a: "No. The entire engine runs in WebAssembly on your browser's V8 or JavaScriptCore thread. Your SQL queries, tables, and data records never leave your computer, making it suitable for experimenting with private data formats.",
    },
    {
      q: "What SQL dialects and features are supported?",
      a: "It supports standard SQL conforming to SQLite 3 specifications, including CTEs (WITH queries), Window Functions, Subqueries, Primary & Foreign Keys, CHECK constraints, UPSERT, and JSON1 functions.",
    },
    {
      q: "Who is SQLite Studio built for?",
      a: "It is designed for computer science students learning relational databases, software engineers drafting schemas, database administrators testing complex joins, and instructors teaching database courses.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-12 text-left">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Products", href: "/portfolio" },
          { label: "SQLite Studio (Online SQL Compiler)" },
        ]}
      />

      {/* Hero / Header Section */}
      <header className="glass-panel border-white/[0.08] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col gap-6 relative z-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20">
              Official ProDevOpz Software
            </span>
            <span className="text-[11px] font-semibold text-accent-blue uppercase tracking-wider bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">
              100% Free &amp; Open Web Tool
            </span>
            <span className="text-[11px] font-medium text-foreground/50 bg-white/[0.02] px-3 py-1 rounded-full border border-white/5">
              SQLite 3 WebAssembly
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <figure className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black shrink-0">
              <Image
                src="/products/sql-compiler-app-icon.jpg"
                alt="SQLite Studio Online SQL Compiler and ER Diagram Visualizer app icon"
                fill
                priority
                sizes="(max-width: 640px) 96px, 112px"
                className="object-cover"
              />
            </figure>
            <div>
              <h1 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                SQLite Studio
              </h1>
              <p className="text-sm sm:text-base font-semibold text-emerald-400 mt-1.5 flex items-center gap-2">
                <span>Free Online SQL Compiler &amp; Interactive ER Diagram Visualizer</span>
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed max-w-3xl pt-2 border-t border-white/[0.05]">
            SQLite Studio is an in-browser database development IDE developed by <strong className="text-white">ProDevOpz</strong>. Combining a full SQLite 3 WebAssembly engine with an automatic Entity-Relationship (ER) diagram visualizer, it lets developers, students, and database architects write SQL queries, inspect table relations, and debug schemas with <strong className="text-emerald-400">0ms server latency</strong> and <strong className="text-white">100% client-side privacy</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            <a
              href="https://sqlcompiler.jobsio.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-black bg-gradient-to-r from-emerald-400 to-teal-300 hover:opacity-90 px-5 py-3 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
            >
              <span>Launch SQLite Studio Free</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://sqlcompiler.jobsio.in/features/er-diagram-visualizer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] px-4 py-3 rounded-xl border border-white/10 transition-colors"
            >
              <Layers className="w-3.5 h-3.5 text-accent-blue" />
              <span>ER Diagram Visualizer Feature</span>
            </a>
            <Link
              href="/portfolio"
              className="flex items-center gap-1.5 text-xs font-semibold text-foreground/70 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] px-4 py-3 rounded-xl border border-white/5 transition-colors"
            >
              <span>All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Core Capabilities Grid */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2.5">
          <Database className="w-5 h-5 text-emerald-400" />
          <h2 className="font-display font-bold text-xl text-white">
            Engineered for Fast, Visual Database Development
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="glass-card p-6 flex flex-col justify-between border-white/[0.06] hover:border-white/15 transition-all group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {feat.icon}
                  </div>
                  <span className="text-[10px] font-bold text-foreground/50 bg-white/[0.03] px-2.5 py-1 rounded-full border border-white/5">
                    {feat.badge}
                  </span>
                </div>
                <h3 className="font-display font-bold text-base text-white mt-1">
                  {feat.title}
                </h3>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ER Diagram Visualizer Spotlight */}
      <section className="glass-panel border-white/[0.08] p-8 relative overflow-hidden flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.05] pb-6">
          <div>
            <span className="text-[10px] font-bold text-accent-blue uppercase tracking-widest bg-accent-blue/10 px-3 py-1 rounded-full border border-accent-blue/20">
              Next-Gen Feature
            </span>
            <h2 className="font-display font-black text-2xl text-white mt-2">
              Automatic ER Diagram &amp; Relationship Visualizer
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 mt-1 max-w-2xl">
              Turn raw SQL DDL into clear, interactive entity-relationship diagrams. No manual node drawing or drag-and-drop schema tools required.
            </p>
          </div>
          <a
            href="https://sqlcompiler.jobsio.in/features/er-diagram-visualizer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-white bg-accent-blue/20 hover:bg-accent-blue/30 px-4 py-2.5 rounded-xl border border-accent-blue/30 transition-all shrink-0 w-fit"
          >
            <span>Test Visualizer Online</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 text-white font-semibold text-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Foreign Key Resolution</span>
            </div>
            <p className="text-[11px] text-foreground/60 leading-relaxed">
              Detects `FOREIGN KEY (...) REFERENCES ...` clauses and connects tables with directional relationship lines automatically.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 text-white font-semibold text-xs">
              <CheckCircle2 className="w-4 h-4 text-accent-purple" />
              <span>Draggable Canvas Nodes</span>
            </div>
            <p className="text-[11px] text-foreground/60 leading-relaxed">
              Pan, zoom, and organize large schema tables across the canvas to visually communicate database architecture to teams.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 text-white font-semibold text-xs">
              <CheckCircle2 className="w-4 h-4 text-accent-orange" />
              <span>Field Types &amp; Constraints</span>
            </div>
            <p className="text-[11px] text-foreground/60 leading-relaxed">
              Clearly labels Primary Keys (PK), Foreign Keys (FK), NULL/NOT NULL rules, and exact data types for each attribute.
            </p>
          </div>
        </div>
      </section>

      {/* Head-to-Head Comparison Table */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2.5">
          <SlidersHorizontal className="w-5 h-5 text-accent-purple" />
          <h2 className="font-display font-bold text-xl text-white">
            SQLite Studio vs. Traditional Online Compilers
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-white/[0.01]">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/[0.08] bg-white/[0.03]">
                <th className="p-4 font-semibold text-foreground/60">Feature</th>
                <th className="p-4 font-bold text-emerald-400">SQLite Studio (ProDevOpz)</th>
                <th className="p-4 font-semibold text-foreground/40">Generic Online SQL Compilers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {comparisonPoints.map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-medium text-white">{row.feature}</td>
                  <td className="p-4 font-semibold text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{row.sqliteStudio}</span>
                  </td>
                  <td className="p-4 text-foreground/50">{row.traditional}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Supported SQL Queries & Operations */}
      <section className="glass-panel border-white/[0.08] p-8 flex flex-col gap-6">
        <div className="flex items-center gap-2.5">
          <Code2 className="w-5 h-5 text-accent-orange" />
          <h2 className="font-display font-bold text-xl text-white">
            Full-Featured Relational Database Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          {[
            "CREATE / ALTER TABLE",
            "INNER, LEFT & CROSS JOINS",
            "PRIMARY & FOREIGN KEYS",
            "GROUP BY & HAVING CLAUSES",
            "COMMON TABLE EXPRESSIONS (WITH)",
            "TRANSACTIONS (BEGIN / COMMIT)",
            "AGGREGATIONS (SUM, AVG, COUNT)",
            "JSON FUNCTIONS (json_extract)",
            "WINDOW FUNCTIONS (ROW_NUMBER)",
            "INDEX CREATION (CREATE INDEX)",
            "CSV DATA IMPORT & EXPORT",
            "JSON ARRAY RESULT DOWNLOAD",
          ].map((item, i) => (
            <div
              key={i}
              className="p-3 rounded-lg bg-white/[0.02] border border-white/5 font-mono text-[11px] text-foreground/80 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-2.5">
          <HelpCircle className="w-5 h-5 text-accent-blue" />
          <h2 className="font-display font-bold text-xl text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-card p-5 border-white/[0.06] flex flex-col gap-2 text-left"
            >
              <h3 className="font-display font-bold text-sm text-white">
                {faq.q}
              </h3>
              <p className="text-xs text-foreground/70 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Launch CTA Banner */}
      <section className="glass-panel border-emerald-500/20 bg-gradient-to-r from-emerald-950/40 via-background to-teal-950/40 p-8 sm:p-12 text-center rounded-3xl relative overflow-hidden">
        <div className="flex flex-col items-center gap-5 max-w-2xl mx-auto relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-xl">
            <Play className="w-6 h-6 fill-current" />
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
            Ready to Run SQL Queries With 0ms Latency?
          </h2>
          <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
            Open SQLite Studio directly in your web browser. Write SQL queries, generate live ER diagrams, and analyze relational data without creating an account or paying fees.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://sqlcompiler.jobsio.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-black bg-emerald-400 hover:bg-emerald-300 px-6 py-3 rounded-xl transition-all shadow-xl shadow-emerald-500/25"
            >
              <span>Launch Live SQLite Studio</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://sqlcompiler.jobsio.in/app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] px-5 py-3 rounded-xl border border-white/10 transition-colors"
            >
              <span>Open Studio App directly</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Internal Navigation Links */}
      <footer className="pt-8 border-t border-white/[0.05] flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3 text-foreground/60">
          <span>Other ProDevOpz Products:</span>
          <Link href="/ezbill" className="text-accent-orange hover:underline">
            EzBill Software
          </Link>
          <span>&bull;</span>
          <Link href="/s1pro" className="text-accent-blue hover:underline">
            S1Pro (Auto Mobile Silent)
          </Link>
        </div>
        <Link
          href="/portfolio"
          className="text-foreground/60 hover:text-white flex items-center gap-1.5 transition-colors"
        >
          <span>Back to Portfolio</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </footer>
    </div>
  );
}
