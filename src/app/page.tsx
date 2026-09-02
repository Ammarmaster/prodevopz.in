import Link from "next/link";
import Image from "next/image";
import ProjectEstimator from "@/components/ProjectEstimator";
import MacbookMockup from "@/components/MacbookMockup";
import {
  Cpu,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Server,
  Zap,
  CheckCircle,
  GraduationCap,
  TrendingUp,
  Award,
  Layers,
  UserCheck,
  Code2,
} from "lucide-react";

export default function Home() {
  const stats = [
    { value: "120+", label: "Products Shipped" },
    { value: "25+", label: "Enterprise Clients" },
    { value: "99.8%", label: "SLA Retention" },
    { value: "5000+", label: "Upskilled Interns" },
  ];

  const services = [
    {
      icon: <Sparkles className="w-6 h-6 text-accent-orange" />,
      title: "AI Development",
      slug: "ai-development",
      desc: "Integrate LLMs, neural networks, computer vision, and custom chatbot engines directly into your business logic.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-accent-purple" />,
      title: "Mobile App Development",
      slug: "mobile-development",
      desc: "Native-grade iOS & Android applications built with Swift, Kotlin, React Native, and Flutter for fluid UI performance.",
    },
    {
      icon: <Layers className="w-6 h-6 text-accent-blue" />,
      title: "Web App Development",
      slug: "web-development",
      desc: "Supercharge your business with premium Next.js, React, and Node.js web systems optimized for 100 Lighthouse scores.",
    },
    {
      icon: <Server className="w-6 h-6 text-emerald-400" />,
      title: "Cloud Services & DevOps",
      slug: "cloud-services",
      desc: "Robust AWS/Azure deployment architectures, Docker/Kubernetes container orchestration, and automated CI/CD pipelines.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-red-400" />,
      title: "Enterprise ERP & CRM",
      slug: "erp-crm-systems",
      desc: "Bespoke systems (POS, Billing, Inventory, HRMS, CRM, Hospital/School ERP) custom engineered to synchronize your business operations.",
    },
  ];

  const technologies = [
    "Next.js 15",
    "React 19",
    "Tailwind CSS v4",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "FastAPI",
    "LangChain",
    "OpenAI",
    "Claude API",
    "AWS Cloud",
    "Vercel",
    "Redis",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://prodevopz.jobsio.in/#organization",
        "name": "ProDevOpz",
        "legalName": "ProDevOpz Technologies",
        "url": "https://prodevopz.jobsio.in/",
        "logo": "https://prodevopz.jobsio.in/logo.jpg",
        "image": "https://prodevopz.jobsio.in/logo.jpg",
        "description": "ProDevOpz is a custom software development and technology company building scalable web applications, mobile apps, AI solutions, and software products including EzBill.",
        "sameAs": [
          "https://linkedin.com/company/prodevopz",
          "https://instagram.com/prodevopz.in",
          "https://github.com/Ammarmaster"
        ],
        "founder": {
          "@type": "Person",
          "@id": "https://prodevopz.jobsio.in/founder/ammar-master#person",
          "name": "Ammar Master",
          "alternateName": ["Jalaluddin Master", "Md Jalaluddin Master"],
          "jobTitle": "Founder & Software Engineer",
          "image": "https://prodevopz.jobsio.in/ammar-master-jalaluddin-master-founder-prodevopz.jpg",
          "url": "https://prodevopz.jobsio.in/founder/ammar-master"
        },
        "member": [
          {
            "@type": "Person",
            "@id": "https://prodevopz.jobsio.in/leadership/saad-mulla#person",
            "name": "Saad Mulla",
            "jobTitle": "Chief Executive Officer (CEO)",
            "url": "https://prodevopz.jobsio.in/leadership/saad-mulla"
          },
          {
            "@type": "Person",
            "@id": "https://prodevopz.jobsio.in/leadership/ruvaid-shaikh#person",
            "name": "Ruvaid Shaikh",
            "jobTitle": "Co-Founder",
            "url": "https://prodevopz.jobsio.in/leadership/ruvaid-shaikh"
          },
          {
            "@type": "Person",
            "@id": "https://prodevopz.jobsio.in/leadership/vaibhav-yalamalle#person",
            "name": "Vaibhav Yalamalle",
            "jobTitle": "Managing Director (MD)",
            "url": "https://prodevopz.jobsio.in/leadership/vaibhav-yalamalle"
          }
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "contactprodevopz@gmail.com",
          "contactType": "customer service"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://prodevopz.jobsio.in/#website",
        "url": "https://prodevopz.jobsio.in/",
        "name": "ProDevOpz",
        "description": "Official Web Presence of ProDevOpz - Custom Software Development & Technology Solutions.",
        "publisher": {
          "@id": "https://prodevopz.jobsio.in/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://prodevopz.jobsio.in/founder/ammar-master#person",
        "name": "Ammar Master",
        "alternateName": ["Jalaluddin Master", "Md Jalaluddin Master"],
        "jobTitle": "Founder & Software Engineer",
        "image": "https://prodevopz.jobsio.in/ammar-master-jalaluddin-master-founder-prodevopz.jpg",
        "worksFor": {
          "@id": "https://prodevopz.jobsio.in/#organization"
        },
        "url": "https://prodevopz.jobsio.in/founder/ammar-master"
      },
      {
        "@type": "Person",
        "@id": "https://prodevopz.jobsio.in/leadership/saad-mulla#person",
        "name": "Saad Mulla",
        "jobTitle": "Chief Executive Officer (CEO)",
        "image": "https://prodevopz.jobsio.in/team/saad-mulla-ceo-prodevopz.jpg",
        "worksFor": {
          "@id": "https://prodevopz.jobsio.in/#organization"
        },
        "url": "https://prodevopz.jobsio.in/leadership/saad-mulla"
      },
      {
        "@type": "Person",
        "@id": "https://prodevopz.jobsio.in/leadership/ruvaid-shaikh#person",
        "name": "Ruvaid Shaikh",
        "jobTitle": "Co-Founder",
        "image": "https://prodevopz.jobsio.in/team/ruvaid-shaikh-cofounder-prodevopz.jpg",
        "worksFor": {
          "@id": "https://prodevopz.jobsio.in/#organization"
        },
        "url": "https://prodevopz.jobsio.in/leadership/ruvaid-shaikh"
      },
      {
        "@type": "Person",
        "@id": "https://prodevopz.jobsio.in/leadership/vaibhav-yalamalle#person",
        "name": "Vaibhav Yalamalle",
        "jobTitle": "Managing Director (MD)",
        "image": "https://prodevopz.jobsio.in/team/vaibhav-yalamalle-md-prodevopz.jpg",
        "worksFor": {
          "@id": "https://prodevopz.jobsio.in/#organization"
        },
        "url": "https://prodevopz.jobsio.in/leadership/vaibhav-yalamalle"
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://prodevopz.jobsio.in/ezbill#software",
        "name": "EzBill",
        "alternateName": ["EZBill", "EZ Bill"],
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, Android, Windows, Cloud",
        "description": "EzBill (EZBill) is a business billing and management software product developed by ProDevOpz, with billing, invoicing, sales and analytics capabilities.",
        "url": "https://prodevopz.jobsio.in/ezbill",
        "image": "https://prodevopz.jobsio.in/products/ezbill-app-icon.png",
        "author": {
          "@id": "https://prodevopz.jobsio.in/#organization"
        },
        "creator": {
          "@id": "https://prodevopz.jobsio.in/#organization"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://prodevopz.jobsio.in/s1pro#software",
        "name": "S1Pro",
        "alternateName": ["S1Pro Software", "S1 Pro", "S1Pro Field Service Platform"],
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, Android, iOS, Cloud",
        "description": "S1Pro is a field service management platform developed by ProDevOpz for managing customers, service professionals, bookings, jobs and service operations.",
        "url": "https://prodevopz.jobsio.in/s1pro",
        "image": "https://prodevopz.jobsio.in/products/s1pro-app-icon.png",
        "author": {
          "@id": "https://prodevopz.jobsio.in/#organization"
        },
        "creator": {
          "@id": "https://prodevopz.jobsio.in/#organization"
        }
      }
    ]
  };

  return (
    <div className="w-full flex flex-col gap-24 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-24 px-4">
        {/* Glow overlay */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[300px] bg-accent-orange/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10 px-4 w-full">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            {/* Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs font-semibold text-foreground/80 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-accent-orange animate-spin" />
              <span>Certified MSME &amp; ISO Software Firm</span>
            </div>

            {/* Heading */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-white max-w-4xl">
              Building Intelligent{" "}
              <span className="bg-gradient-to-r from-accent-orange via-accent-purple to-accent-blue bg-clip-text text-transparent">
                Software
              </span>{" "}
              for the Future.
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-foreground/60 max-w-2xl leading-relaxed">
              Transforming complex startup and enterprise ideas into production-ready digital products. Leading custom web development, mobile apps, artificial intelligence engineering, and cloud automation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto justify-center lg:justify-start">
              <Link href="/pricing" className="btn-animated-border">
                <span className="btn-animated-border-inner text-xs px-6 py-3 flex items-center justify-center gap-1.5 font-bold">
                  Launch Project Estimator
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                href="/internship"
                className="flex items-center justify-center gap-1.5 text-xs font-bold px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white"
              >
                <GraduationCap className="w-4.5 h-4.5" />
                Apply for Internship
              </Link>
            </div>
          </div>

          {/* Right 3D Mockup Column */}
          <div className="lg:col-span-5 w-full flex justify-center items-center">
            <MacbookMockup />
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="glass-panel border-white/[0.06] p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2 pt-6 md:pt-0 first:pt-0"
            >
              <span className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-[11px] font-semibold text-foreground/50 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Tech stack Marquee */}
      <section className="w-full overflow-hidden border-y border-white/[0.03] py-6 bg-white/[0.01]">
        <div className="animate-marquee flex gap-12 text-sm font-semibold tracking-wider text-foreground/30 uppercase items-center">
          {/* Double list for smooth loop */}
          {[...technologies, ...technologies].map((tech, i) => (
            <span key={i} className="hover:text-accent-orange transition-colors flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-accent-orange" />
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 4. Services List */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="text-xs font-bold text-accent-orange uppercase tracking-widest bg-accent-orange/10 px-3.5 py-1.5 rounded-full">
            Our Expertise
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Custom Engineering for Scale.
          </h2>
          <p className="text-sm text-foreground/50 max-w-xl">
            We architect and deploy modular applications that perform at lightning speed and grow seamlessly with your startup or enterprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="glass-card p-6 flex flex-col justify-between text-left">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-xs text-foreground/60 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="mt-6 text-xs font-semibold text-accent-orange hover:text-white flex items-center gap-1 hover:gap-2 transition-all w-fit"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Meet the Founder Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="glass-panel border-white/[0.08] p-8 md:p-12 relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-accent-orange uppercase tracking-wider bg-accent-orange/10 px-3 py-1 rounded-full border border-accent-orange/20">
                  Leadership
                </span>
                <span className="text-[10px] font-medium text-foreground/50">
                  ProDevOpz Engineering
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <figure className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/10 shadow-xl shrink-0 bg-white/[0.02]">
                  <Image
                    src="/ammar-master-jalaluddin-master-founder-prodevopz.jpg"
                    alt="Ammar Master (Jalaluddin Master), Founder of ProDevOpz"
                    fill
                    sizes="(max-width: 640px) 96px, 112px"
                    className="object-cover object-top"
                  />
                </figure>
                <div>
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    Meet the Founder
                  </h2>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                    Ammar Master{" "}
                    <span className="text-xs sm:text-sm font-semibold text-accent-purple">
                      (Jalaluddin Master)
                    </span>
                  </h3>
                  <p className="text-xs font-semibold text-foreground/70 mt-0.5">
                    Founder &amp; Software Engineer at ProDevOpz
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed max-w-2xl">
                Ammar Master (also known as Jalaluddin Master) is the Founder and Software Engineer behind ProDevOpz and the EzBill billing software suite. He leads technical architecture, system design, and AI engineering for startups and modern businesses.
              </p>

              <div className="pt-1">
                <Link
                  href="/founder/ammar-master"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 px-5 py-3 rounded-xl transition-all"
                >
                  <UserCheck className="w-4 h-4 text-accent-orange" />
                  Meet Ammar Master, Founder of ProDevOpz
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 glass-card p-6 border-white/[0.06] flex flex-col gap-3">
              <span className="text-[10px] font-bold text-accent-orange uppercase tracking-wider">
                Engineering Specialties
              </span>
              <ul className="flex flex-col gap-2.5 text-xs text-foreground/70">
                <li className="flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-accent-orange shrink-0" />
                  <span>Next.js &amp; Full-Stack Web Development</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-accent-purple shrink-0" />
                  <span>Applied AI &amp; LLM Workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <Server className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Cloud DevOps &amp; Container Architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5.5. Leadership Team Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-8 text-left">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-white/[0.05] pb-6">
            <div>
              <span className="text-[10px] font-bold text-accent-orange uppercase tracking-wider bg-accent-orange/10 px-3 py-1 rounded-full border border-accent-orange/20 w-fit">
                Executive Leadership
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-2">
                Meet Our Leadership Team
              </h2>
              <p className="text-xs text-foreground/60 mt-1 max-w-xl">
                Driving innovation across custom software, AI integrations, enterprise ERP systems, and cloud infrastructure.
              </p>
            </div>
            <Link
              href="/leadership"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-orange hover:text-white transition-colors"
            >
              <span>View All Leadership</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Saad Mulla",
                role: "Chief Executive Officer (CEO)",
                location: "Dodda Ballapur, Karnataka",
                education: "Rani Channamma University (RCUB)",
                image: "/team/saad-mulla-ceo-prodevopz.jpg",
                alt: "Saad Mulla, CEO of ProDevOpz",
                slug: "saad-mulla",
                badge: "text-accent-orange bg-accent-orange/10 border-accent-orange/20",
              },
              {
                name: "Ruvaid Shaikh",
                role: "Co-Founder",
                location: "Sangli, Maharashtra",
                education: "Sanjay Ghodawat University",
                image: "/team/ruvaid-shaikh-cofounder-prodevopz.jpg",
                alt: "Ruvaid Shaikh, Co-Founder of ProDevOpz",
                slug: "ruvaid-shaikh",
                badge: "text-accent-purple bg-accent-purple/10 border-accent-purple/20",
              },
              {
                name: "Vaibhav Yalamalle",
                role: "Managing Director (MD)",
                location: "Athani, Karnataka",
                education: "KLE'S S.C.P Arts & D.D. Shirol PG College",
                image: "/team/vaibhav-yalamalle-md-prodevopz.jpg",
                alt: "Vaibhav Yalamalle, Managing Director of ProDevOpz",
                slug: "vaibhav-yalamalle",
                badge: "text-accent-blue bg-accent-blue/10 border-accent-blue/20",
              },
            ].map((m, idx) => (
              <div
                key={idx}
                className="glass-card p-5 flex flex-col justify-between border-white/[0.08] relative overflow-hidden group hover:border-white/20 transition-all"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <figure className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-white/10 shadow-lg shrink-0 bg-white/[0.02]">
                      <Image
                        src={m.image}
                        alt={m.alt}
                        fill
                        sizes="(max-width: 640px) 64px, 80px"
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </figure>
                    <div className="flex flex-col gap-0.5">
                      <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border w-fit ${m.badge}`}>
                        {m.role}
                      </span>
                      <h3 className="font-display font-bold text-base text-white mt-1">
                        {m.name}
                      </h3>
                      <span className="text-[11px] text-foreground/50">{m.location}</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-foreground/60 bg-white/[0.02] p-2.5 rounded-lg border border-white/5">
                    <span className="line-clamp-1">{m.education}</span>
                  </div>
                </div>
                <div className="border-t border-white/[0.05] pt-3 mt-4">
                  <Link
                    href={`/leadership/${m.slug}`}
                    className="flex items-center justify-between text-xs font-semibold text-foreground/80 hover:text-white transition-colors"
                  >
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 text-accent-orange group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Project Estimator Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span className="text-xs font-bold text-accent-purple uppercase tracking-widest bg-accent-purple/10 px-3.5 py-1.5 rounded-full">
            Budget Calculator
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Configure Your Project Value.
          </h2>
          <p className="text-sm text-foreground/50 max-w-xl">
            Choose your target platform and modules using our interactive budget calculator to simulate initial development costs and timelines.
          </p>
        </div>
        <ProjectEstimator />
      </section>

      {/* 7. Why Choose Us */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="glass-panel border-white/[0.06] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-bold text-accent-blue uppercase tracking-widest bg-accent-blue/10 px-3.5 py-1.5 rounded-full w-fit">
              ProDevOpz Advantage
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
              Why leading teams build with us.
            </h2>
            <p className="text-xs text-foreground/60 leading-relaxed">
              We operate as your dedicated technology partners, combining award-winning design aesthetics with robust cloud engineering.
            </p>

            <ul className="flex flex-col gap-4 mt-2">
              {[
                {
                  title: "AI-First Approach",
                  desc: "We automate routines and integrate advanced models so your systems operate intelligently.",
                },
                {
                  title: "DevOps & Continuous Compliance",
                  desc: "Your builds are containerized, secured, and version-controlled with zero-downtime rollouts.",
                },
                {
                  title: "Premium Aesthetics",
                  desc: "UI/UX designed to match global leaders like Stripe and Apple, featuring glassmorphism and smooth motion.",
                },
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">{item.title}</h4>
                    <p className="text-[11px] text-foreground/50 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6 border-white/[0.08] relative overflow-hidden flex flex-col gap-4">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/5 rounded-full filter blur-2xl pointer-events-none" />
            <h3 className="font-display font-bold text-base text-white border-b border-white/[0.05] pb-2">
              Partnership Milestones
            </h3>
            <div className="flex flex-col gap-4">
              {[
                { icon: <TrendingUp className="w-4 h-4 text-accent-orange" />, name: "Agile Sprints", val: "Continuous Delivery" },
                { icon: <Award className="w-4 h-4 text-accent-purple" />, name: "Quality Assurance", val: "ISO 9001 Compliance" },
                { icon: <ShieldCheck className="w-4 h-4 text-accent-blue" />, name: "Cyber Audits", val: "Encrypted & Safe" },
              ].map((m, i) => (
                <div key={i} className="flex items-center justify-between text-xs py-1">
                  <div className="flex items-center gap-2 text-foreground/70">
                    {m.icon}
                    <span>{m.name}</span>
                  </div>
                  <span className="font-semibold text-white">{m.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call To Action */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto w-full mb-12">
        <div className="glass-panel border-white/[0.06] p-8 sm:p-12 text-center flex flex-col items-center gap-6 relative overflow-hidden bg-gradient-to-br from-accent-orange/5 via-accent-purple/5 to-accent-blue/5">
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white">
            Ready to Build Your Digital Product?
          </h2>
          <p className="text-xs sm:text-sm text-foreground/60 max-w-lg leading-relaxed">
            Collaborate with our team of senior engineers and designers to launch your custom software with luxury UI, speed, and AI capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="mailto:contactprodevopz@gmail.com?subject=Build Inquiry"
              className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs hover:bg-white/95 transition-colors shadow-lg"
            >
              Schedule Consultation
            </a>
            <Link
              href="/portfolio"
              className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 font-bold text-xs transition-all text-white"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
