"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight, Cpu, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ];

  const popularServices = [
    { name: "AI Development", slug: "ai-development" },
    { name: "App Development", slug: "mobile-development" },
    { name: "Cloud & DevOps", slug: "cloud-services" },
    { name: "Enterprise ERP", slug: "erp-crm-systems" },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 px-4 md:px-8 py-4 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel px-6 py-3 border-white/[0.06] shadow-2xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/logo.jpg" alt="ProDevOpz Logo" className="w-8 h-8 rounded-lg object-contain shadow-lg group-hover:scale-105 transition-transform bg-black" />
          <span className="font-display font-bold text-xl tracking-tight bg-gradient-to-r from-white via-white to-accent-orange bg-clip-text text-transparent">
            ProDevOpz
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-white hover:underline decoration-accent-orange underline-offset-4 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          {/* Services Dropdown Trigger (simulated or direct links) */}
          <div className="relative group/dropdown">
            <span className="text-sm font-medium text-foreground/80 hover:text-white cursor-pointer transition-colors flex items-center gap-0.5">
              Services
            </span>
            <div className="absolute top-full left-0 mt-2 w-48 rounded-xl glass-panel p-2 border-white/[0.08] hidden group-hover/dropdown:block animate-fade-in shadow-2xl">
              {popularServices.map((service) => (
                <Link
                  key={service.name}
                  href={`/services/${service.slug}`}
                  className="block px-3 py-2 rounded-lg text-xs font-medium text-foreground/80 hover:text-white hover:bg-white/[0.05] transition-colors"
                >
                  {service.name}
                </Link>
              ))}
              <div className="border-t border-white/[0.05] my-1" />
              <Link
                href="/services/web-development"
                className="block px-3 py-2 rounded-lg text-xs font-medium text-foreground/80 hover:text-white hover:bg-white/[0.05]"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/client"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-all text-foreground/90 hover:text-white"
          >
            <User className="w-3.5 h-3.5" />
            Client Hub
          </Link>
          <Link href="/internship" className="btn-animated-border">
            <span className="btn-animated-border-inner text-xs px-4 py-2 flex items-center gap-1">
              Internship Portal
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-1.5 rounded-lg border border-white/10 text-foreground/80 hover:text-white hover:bg-white/5 transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto rounded-2xl glass-panel p-6 border-white/[0.08] shadow-2xl flex flex-col gap-4 animate-slide-down">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-foreground/80 hover:text-white py-1 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="border-t border-white/[0.05] my-2" />
          <p className="text-xs font-semibold text-accent-orange uppercase tracking-wider">
            Popular Services
          </p>
          <div className="grid grid-cols-2 gap-2">
            {popularServices.map((service) => (
              <Link
                key={service.name}
                href={`/services/${service.slug}`}
                onClick={() => setIsOpen(false)}
                className="text-xs font-medium text-foreground/75 hover:text-white py-1 transition-colors"
              >
                {service.name}
              </Link>
            ))}
          </div>
          <div className="border-t border-white/[0.05] my-2" />
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/client"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-all w-full text-center"
            >
              <User className="w-3.5 h-3.5" />
              Client Hub
            </Link>
            <Link
              href="/internship"
              onClick={() => setIsOpen(false)}
              className="btn-animated-border w-full text-center flex justify-center"
            >
              <span className="btn-animated-border-inner text-xs px-4 py-2.5 flex items-center justify-center gap-1 w-full">
                Internship Portal
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
