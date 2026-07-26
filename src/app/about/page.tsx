import { Sparkles, Calendar, Award, Target, Eye, Users } from "lucide-react";

export default function About() {
  const milestones = [
    { year: "2024", title: "Company Founded", desc: "ProDevOpz established to bring modern AI architecture to startup web systems." },
    { year: "2025", title: "MSME & ISO Certifications", desc: "Recognized as a registered MSME software enterprise adhering to ISO standards." },
    { year: "2026", title: "Launch of Automation Platform", desc: "Introduced our autonomous internship management and client milestone platform." },
  ];

  const values = [
    { icon: <Target className="w-5 h-5 text-accent-orange" />, title: "Precision", desc: "We build with pixel-perfect design standards and optimized codebase performance." },
    { icon: <Eye className="w-5 h-5 text-accent-purple" />, title: "Visionary", desc: "We construct AI-first systems designed for long-term scalability and business intelligence." },
    { icon: <Users className="w-5 h-5 text-accent-blue" />, title: "Community", desc: "We actively upskill thousands of engineering students via automated mentorship programs." },
  ];

  const leaders = [
    { name: "Ammar", role: "CTO & Co-Founder", bio: "Senior architect specializing in Cloud Infrastructure, DevOps pipelines, and AI systems." },
    { name: "ProDevOpz AI Team", role: "Autonomous Agents", bio: "Lighthouse audit checkers, code linters, and assistant engineers operating 24/7." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-20">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <span className="text-xs font-bold text-accent-orange uppercase tracking-widest bg-accent-orange/10 px-3.5 py-1.5 rounded-full w-fit mx-auto">
          About Us
        </span>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white">
          Our Story, Vision, & Leadership
        </h1>
        <p className="text-sm text-foreground/50 leading-relaxed">
          ProDevOpz is a certified MSME and ISO-compliant software development company. We partner with startups and enterprises globally to deliver state-of-the-art web products, mobile applications, cloud infrastructures, and AI architectures.
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <div key={i} className="glass-card p-6 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
              {v.icon}
            </div>
            <h3 className="font-display font-bold text-base text-white">{v.title}</h3>
            <p className="text-xs text-foreground/50 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* Timeline Milestones */}
      <div className="glass-panel border-white/[0.06] p-8 md:p-12">
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-8 flex items-center gap-2">
          <Calendar className="w-5.5 h-5.5 text-accent-purple" />
          Milestones & Roadmap
        </h2>
        <div className="flex flex-col gap-8 relative border-l border-white/10 pl-6 ml-2">
          {milestones.map((m, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent-orange border-2 border-[#030303]" />
              <span className="text-xs font-bold text-accent-orange">{m.year}</span>
              <h4 className="font-display font-bold text-sm text-white mt-1 mb-1">{m.title}</h4>
              <p className="text-xs text-foreground/50 max-w-xl leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet Leadership */}
      <div>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-8 text-center flex items-center justify-center gap-2">
          <Award className="w-5.5 h-5.5 text-accent-blue" />
          Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, i) => (
            <div key={i} className="glass-card p-6 border-white/[0.08] flex flex-col gap-3">
              <div>
                <h3 className="font-display font-bold text-base text-white">{leader.name}</h3>
                <span className="text-[10px] font-bold text-accent-orange uppercase tracking-wider">
                  {leader.role}
                </span>
              </div>
              <p className="text-xs text-foreground/50 leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
