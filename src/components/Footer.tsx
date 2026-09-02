import Link from "next/link";
import { Cpu, Mail, Globe, Shield, Award } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "EzBill Billing Software", href: "/ezbill" },
    { name: "AI Development", href: "/services/ai-development" },
    { name: "Mobile App Development", href: "/services/mobile-development" },
    { name: "Web App Development", href: "/services/web-development" },
    { name: "Cloud Infrastructure & DevOps", href: "/services/cloud-services" },
    { name: "Enterprise ERP & CRM Systems", href: "/services/erp-crm-systems" },
    { name: "Cyber Security & Audits", href: "/services/cyber-security" },
  ];

  const companyLinks = [
    { name: "About Story", href: "/about" },
    { name: "Founder Profile", href: "/founder/ammar-master" },
    { name: "EzBill Product", href: "/ezbill" },
    { name: "Project Portfolio", href: "/portfolio" },
    { name: "Pricing Estimate", href: "/pricing" },
    { name: "Tech Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Internship Program", href: "/internship" },
    { name: "Verify Certificate", href: "/verify-certificate" },
  ];

  return (
    <footer className="w-full bg-[#050505] border-t border-white/[0.05] pt-16 pb-8 px-4 md:px-8 mt-auto relative z-10 text-left">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand & Certifications */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-accent-orange to-accent-purple flex items-center justify-center">
              <Cpu className="w-4.5 h-4.5 text-white" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white">
              ProDevOpz
            </span>
          </div>
          <p className="text-xs text-foreground/60 leading-relaxed max-w-xs">
            Building Intelligent Software for the Future. Transforming complex ideas into production-ready digital products and software solutions like EzBill.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-2 text-xs text-foreground/80">
              <Award className="w-4 h-4 text-accent-orange" />
              <span>Registered MSME Enterprise</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-foreground/80">
              <Shield className="w-4 h-4 text-accent-purple" />
              <span>ISO 9001:2015 Standards Compliant</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-sm font-semibold text-white tracking-wider uppercase mb-4">
            Services &amp; Products
          </h4>
          <ul className="flex flex-col gap-2.5">
            {services.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-xs text-foreground/70 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Quick Links */}
        <div>
          <h4 className="font-display text-sm font-semibold text-white tracking-wider uppercase mb-4">
            Navigation
          </h4>
          <ul className="flex flex-col gap-2.5">
            {companyLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-xs text-foreground/70 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts & Socials */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display text-sm font-semibold text-white tracking-wider uppercase">
            Connect
          </h4>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:contactprodevopz@gmail.com"
              className="flex items-center gap-2 text-xs text-foreground/70 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4 text-accent-orange" />
              contactprodevopz@gmail.com
            </a>
            <a
              href="https://prodevopz.jobsio.in"
              className="flex items-center gap-2 text-xs text-foreground/70 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4 text-accent-blue" />
              prodevopz.jobsio.in
            </a>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://instagram.com/prodevopz.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-foreground/60 hover:text-white transition-colors bg-white/[0.03] hover:bg-white/[0.08] px-3 py-1.5 rounded-lg border border-white/5"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/company/prodevopz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-foreground/60 hover:text-white transition-colors bg-white/[0.03] hover:bg-white/[0.08] px-3 py-1.5 rounded-lg border border-white/5"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/[0.05] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[10px] text-foreground/40">
          &copy; {currentYear} ProDevOpz Technologies. All rights reserved.
        </span>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-[10px] text-foreground/40 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[10px] text-foreground/40 hover:text-white">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
