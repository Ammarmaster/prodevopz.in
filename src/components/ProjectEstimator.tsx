"use client";

import { useState, useEffect } from "react";
import { Calculator, Clock, CircleDollarSign, Check } from "lucide-react";

export default function ProjectEstimator() {
  const [platform, setPlatform] = useState<"web" | "mobile" | "both" | "ai">("web");
  const [complexity, setComplexity] = useState<"mvp" | "professional" | "enterprise">("mvp");
  const [screens, setScreens] = useState<number>(5);
  const [features, setFeatures] = useState<string[]>(["auth", "database"]);

  const [estimate, setEstimate] = useState({ price: 0, time: "" });

  const featureOptions = [
    { id: "auth", name: "User Auth & Profiles", price: 30000 },
    { id: "database", name: "Database Architecture", price: 40000 },
    { id: "payment", name: "Payment Integration", price: 30000 },
    { id: "ai", name: "Custom LLM / Chatbots", price: 80000 },
    { id: "devops", name: "CI/CD & Cloud Setup", price: 50000 },
    { id: "push", name: "Push Notifications", price: 25000 },
  ];

  const toggleFeature = (id: string) => {
    setFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    let basePrice = 0;
    let baseWeeks = 0;

    // Platform Base
    if (platform === "web") {
      basePrice = 80000;
      baseWeeks = 3;
    } else if (platform === "mobile") {
      basePrice = 120000;
      baseWeeks = 4;
    } else if (platform === "both") {
      basePrice = 180000;
      baseWeeks = 6;
    } else if (platform === "ai") {
      basePrice = 150000;
      baseWeeks = 5;
    }

    // Complexity Multiplier
    let multiplier = 1;
    if (complexity === "professional") {
      multiplier = 1.4;
      baseWeeks += 2;
    } else if (complexity === "enterprise") {
      multiplier = 2.0;
      baseWeeks += 4;
    }

    // Screen Addition
    const screenCost = screens * 8000;
    baseWeeks += Math.ceil(screens / 5);

    // Feature Additions
    const featuresCost = features.reduce((sum, fId) => {
      const option = featureOptions.find((o) => o.id === fId);
      return sum + (option ? option.price : 0);
    }, 0);

    const totalPrice = Math.round((basePrice * multiplier + screenCost + featuresCost) * 1.0);

    setEstimate({
      price: totalPrice,
      time: `${baseWeeks}-${baseWeeks + 2} Weeks`,
    });
  }, [platform, complexity, screens, features]);

  return (
    <div className="w-full max-w-4xl mx-auto glass-panel p-6 sm:p-8 border-white/[0.08] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="flex items-center gap-2 mb-6 border-b border-white/[0.06] pb-4">
        <Calculator className="w-5.5 h-5.5 text-accent-orange animate-pulse" />
        <h3 className="font-display font-bold text-xl text-white">AI Project Estimator</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Input Panel (3 columns) */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* Platform Choice */}
          <div>
            <label className="text-xs font-semibold text-foreground/50 uppercase tracking-wider block mb-3">
              1. Platform Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: "web", name: "Web Application" },
                { id: "mobile", name: "Android & iOS Apps" },
                { id: "both", name: "Cross-Platform (Both)" },
                { id: "ai", name: "AI/LLM System" },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPlatform(p.id as any)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold border text-center transition-all ${
                    platform === p.id
                      ? "border-accent-orange bg-accent-orange/10 text-white shadow-lg shadow-accent-orange/10"
                      : "border-white/5 bg-white/[0.02] text-foreground/60 hover:text-white hover:border-white/10"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* Complexity */}
          <div>
            <label className="text-xs font-semibold text-foreground/50 uppercase tracking-wider block mb-3">
              2. UI/UX & Architecture Complexity
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: "mvp", name: "Startup MVP", desc: "Fast & Clean" },
                { id: "professional", name: "Professional", desc: "Custom Branding" },
                { id: "enterprise", name: "Enterprise", desc: "High Scale/Security" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setComplexity(c.id as any)}
                  className={`px-3 py-2.5 rounded-xl text-left border transition-all flex flex-col gap-0.5 ${
                    complexity === c.id
                      ? "border-accent-purple bg-accent-purple/10 text-white shadow-lg shadow-accent-purple/10"
                      : "border-white/5 bg-white/[0.02] text-foreground/60 hover:text-white hover:border-white/10"
                  }`}
                >
                  <span className="text-xs font-bold">{c.name}</span>
                  <span className="text-[10px] opacity-75">{c.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Screens Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                3. Estimated Interface Screens
              </label>
              <span className="text-xs font-bold text-accent-orange">{screens} Screens</span>
            </div>
            <input
              type="range"
              min="2"
              max="40"
              value={screens}
              onChange={(e) => setScreens(parseInt(e.target.value))}
              className="w-full accent-accent-orange bg-white/5 rounded-lg appearance-none h-1.5 cursor-pointer"
            />
          </div>

          {/* Features */}
          <div>
            <label className="text-xs font-semibold text-foreground/50 uppercase tracking-wider block mb-3">
              4. Features & Integrations
            </label>
            <div className="grid grid-cols-2 gap-2">
              {featureOptions.map((opt) => {
                const active = features.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    onClick={() => toggleFeature(opt.id)}
                    className={`px-3 py-2 rounded-xl border text-left flex items-center justify-between transition-all ${
                      active
                        ? "border-white/20 bg-white/5 text-white"
                        : "border-white/5 bg-white/[0.01] text-foreground/50 hover:text-white"
                    }`}
                  >
                    <span className="text-xs font-medium">{opt.name}</span>
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${
                        active
                          ? "bg-accent-orange border-accent-orange text-white"
                          : "border-white/10 bg-transparent"
                      }`}
                    >
                      {active && <Check className="w-3 h-3" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Output Panel (2 columns) */}
        <div className="lg:col-span-2 bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 flex flex-col justify-between items-center text-center relative">
          <div className="w-full flex flex-col items-center gap-4 py-6">
            <span className="text-xs font-bold text-accent-orange uppercase tracking-wider bg-accent-orange/10 px-3 py-1 rounded-full">
              Estimated Value
            </span>

            <div className="flex flex-col items-center mt-4">
              <div className="flex items-baseline text-white">
                <CircleDollarSign className="w-6 h-6 mr-1 text-accent-orange" />
                <span className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
                  ₹{estimate.price.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="text-[10px] text-foreground/50 mt-1">Starting cost simulation</p>
            </div>

            <div className="flex items-center gap-2 mt-6 bg-white/[0.03] border border-white/[0.05] px-4 py-2 rounded-xl">
              <Clock className="w-4 h-4 text-accent-purple" />
              <span className="text-xs font-semibold text-white">Timeline: {estimate.time}</span>
            </div>
          </div>

          <div className="w-full">
            <p className="text-[10px] text-foreground/40 leading-relaxed mb-4">
              *This is an AI generated estimation based on scope complexity. Contact our engineering team for a final blueprint and quote.
            </p>
            <a
              href="mailto:contactprodevopz@gmail.com?subject=Project Estimate Inquiry"
              className="block w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-accent-orange to-accent-purple text-xs font-bold text-white shadow-xl hover:opacity-90 transition-opacity"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
