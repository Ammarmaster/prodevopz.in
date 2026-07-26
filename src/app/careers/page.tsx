"use client";

import { Briefcase, MapPin, DollarSign, Send, Star, Compass } from "lucide-react";

export default function Careers() {
  const jobs = [
    {
      title: "Senior Next.js Developer",
      type: "Full-Time",
      loc: "Remote (India)",
      sal: "₹8L - ₹12L / year",
      skills: ["React 19", "Next.js 15", "TypeScript", "Tailwind v4"],
    },
    {
      title: "DevOps / Infrastructure Engineer",
      type: "Full-Time",
      loc: "Belagavi Office / Hybrid",
      sal: "₹6L - ₹9L / year",
      skills: ["Docker", "Kubernetes", "AWS Cloud", "CI/CD Pipelines"],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto flex flex-col gap-4">
        <span className="text-xs font-bold text-accent-orange uppercase tracking-widest bg-accent-orange/10 px-3.5 py-1.5 rounded-full w-fit mx-auto">
          Careers
        </span>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
          Join ProDevOpz Technologies
        </h1>
        <p className="text-sm text-foreground/50 leading-relaxed">
          Help us build the next generation of software products. We offer hybrid/remote flexibility, competitive compensation, and direct access to state-of-the-art AI-first frameworks.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Jobs List (3 columns) */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <h2 className="font-display font-bold text-lg text-white border-b border-white/[0.05] pb-2 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-accent-orange" /> Active Openings
          </h2>
          {jobs.map((job, i) => (
            <div key={i} className="glass-panel border-white/[0.06] p-6 flex flex-col gap-4 hover:border-white/15 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="font-display font-bold text-sm text-white">{job.title}</h3>
                  <div className="flex items-center gap-4 mt-1.5 text-[10px] text-foreground/50 font-semibold">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.loc}</span>
                    <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" /> {job.sal}</span>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-accent-orange bg-accent-orange/10 px-2.5 py-1 rounded-full uppercase tracking-wider w-fit">
                  {job.type}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {job.skills.map((s, si) => (
                  <span
                    key={si}
                    className="text-[9px] font-bold text-foreground/40 border border-white/5 bg-white/[0.01] px-2 py-0.5 rounded"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Application Form (2 columns) */}
        <div className="lg:col-span-2">
          <div className="glass-panel border-white/[0.08] p-6 flex flex-col gap-6 relative overflow-hidden">
            <h2 className="font-display font-bold text-lg text-white border-b border-white/[0.05] pb-2 flex items-center gap-2">
              <Compass className="w-5 h-5 text-accent-purple" /> Fast Apply
            </h2>
            <form className="flex flex-col gap-4">
              <div>
                <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-white/5 text-xs text-white rounded-xl px-3 py-2 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full bg-white/5 text-xs text-white rounded-xl px-3 py-2 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                  Role of Interest
                </label>
                <select className="w-full bg-[#0a0a0a] text-xs text-white rounded-xl px-3 py-2 border border-white/[0.06] focus:outline-none focus:border-accent-orange">
                  <option>Select role</option>
                  <option>Senior Next.js Developer</option>
                  <option>DevOps / Infrastructure Engineer</option>
                  <option>Other / General Application</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-semibold text-foreground/50 uppercase tracking-widest block mb-1">
                  Resume Drive Link
                </label>
                <input
                  type="url"
                  placeholder="Google Drive/Dropbox public link"
                  className="w-full bg-white/5 text-xs text-white rounded-xl px-3 py-2 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
                />
              </div>
              <button
                type="submit"
                onClick={(e) => e.preventDefault()}
                className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-accent-orange to-accent-purple text-xs font-bold text-white shadow-xl hover:opacity-90 flex items-center justify-center gap-1.5"
              >
                Submit Application <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
