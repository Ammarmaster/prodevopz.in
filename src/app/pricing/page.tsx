import ProjectEstimator from "@/components/ProjectEstimator";
import { CircleDollarSign, Check, Info } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Startup MVP",
      price: "Starting at ₹80,000",
      features: [
        "Interactive Responsive Web System",
        "Standard User Auth & Profiles",
        "SQL/SQLite Database Integration",
        "Stripe or Razorpay Checkout Integration",
        "Deployed on Vercel or Render",
        "3 Weeks Initial Engineering Sprint",
      ],
    },
    {
      name: "Professional App",
      price: "Starting at ₹1,50,000",
      features: [
        "Android & iOS App (React Native/Flutter)",
        "Advanced Custom UI Animations",
        "Push Notifications Engine",
        "API Integration & Custom Admin Dashboard",
        "MSME Standards Validation",
        "5-6 Weeks Engineering Timeline",
      ],
    },
    {
      name: "Enterprise Custom",
      price: "Custom Blueprint",
      features: [
        "Bespoke ERP, CRM, or POS Software",
        "Custom LLM & AI Pipeline Engineering",
        "Containerized Deployments (Docker & K8s)",
        "Advanced Cyber Security Audits",
        "Dedicated DevOps Architect Allocation",
        "Full SLAs & 24/7 Priority Support",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <span className="text-xs font-bold text-accent-purple uppercase tracking-widest bg-accent-purple/10 px-3.5 py-1.5 rounded-full w-fit mx-auto">
          Investment Blueprint
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
          Transparent, Custom Pricing
        </h1>
        <p className="text-sm text-foreground/50 leading-relaxed">
          No templates, no placeholders, no hidden fees. We design, architect, write, and deploy high-performance software customized for your business.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((tier, i) => (
          <div key={i} className="glass-card p-6 flex flex-col justify-between border-white/[0.06]">
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-2">{tier.name}</h3>
              <span className="text-sm font-extrabold text-accent-orange block mb-6">{tier.price}</span>
              <div className="border-b border-white/[0.05] mb-6" />
              <ul className="flex flex-col gap-3">
                {tier.features.map((feat, fi) => (
                  <li key={fi} className="flex gap-2 text-xs text-foreground/75 leading-relaxed">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="mailto:contactprodevopz@gmail.com?subject=Inquiry: Pricing Tier Quote"
              className="mt-8 block w-full text-center py-2.5 rounded-xl border border-white/15 bg-white/5 text-xs font-bold text-white hover:bg-white/10 transition-colors"
            >
              Get Custom Quote
            </a>
          </div>
        ))}
      </div>

      {/* Estimator Section */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="font-display font-bold text-2xl text-white">Dynamic Cost Calculator</h2>
          <p className="text-xs text-foreground/50 max-w-lg">
            Build your feature blueprint using our interactive estimator below to calculate dynamic Indian Rupee cost parameters.
          </p>
        </div>
        <ProjectEstimator />
      </div>

      {/* Info Alert */}
      <div className="glass-panel border-white/[0.06] p-6 max-w-3xl mx-auto flex gap-4 items-start">
        <Info className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
        <div className="flex flex-col gap-1">
          <h4 className="text-xs font-bold text-white">Note on Payment Milestones</h4>
          <p className="text-[11px] text-foreground/50 leading-relaxed">
            All custom projects are structured via milestone sprints. Payments are escrowed or released sequentially upon proof-of-work (sprint reviews and stage deployments). We issue GST-compliant tax invoices for all company operations.
          </p>
        </div>
      </div>
    </div>
  );
}
