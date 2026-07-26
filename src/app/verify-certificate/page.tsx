import { db } from "@/lib/db";
import Link from "next/link";
import { Search, ShieldCheck, CheckCircle2, AlertCircle, Award, Calendar, ExternalLink } from "lucide-react";

interface Props {
  searchParams: Promise<{ id?: string }>;
}

export default async function VerifyCertificate({ searchParams }: Props) {
  const { id } = await searchParams;

  let student = null;
  let searched = false;

  if (id) {
    searched = true;
    student = await db.student.findUnique({
      where: { certificateId: id },
    });
  }

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 flex flex-col gap-10">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto flex flex-col gap-3">
        <span className="text-xs font-bold text-accent-orange uppercase tracking-widest bg-accent-orange/10 px-3.5 py-1.5 rounded-full w-fit mx-auto">
          Credential Registry
        </span>
        <h1 className="font-display font-black text-3xl sm:text-4xl text-white">
          Verify Certificates & LORs
        </h1>
        <p className="text-xs text-foreground/50 leading-relaxed">
          Verify student credentials issued by ProDevOpz. Authenticate MSME and ISO certification validations instantly against our database registry.
        </p>
      </div>

      {/* Search Input bar */}
      <div className="glass-panel border-white/[0.08] p-5 shadow-xl">
        <form method="GET" className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-foreground/40" />
            <input
              type="text"
              name="id"
              defaultValue={id || ""}
              placeholder="Enter unique Certificate ID (e.g. CERT-WEB-XXXXX)"
              className="w-full bg-white/5 text-xs text-white rounded-xl pl-10 pr-4 py-3 border border-white/[0.06] focus:outline-none focus:border-accent-orange"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-accent-orange hover:bg-accent-orange/90 text-white font-bold text-xs shadow-lg transition-colors"
          >
            Verify Credential
          </button>
        </form>
      </div>

      {/* Result Display */}
      {searched && (
        <div className="animate-fade-in">
          {student ? (
            <div className="glass-panel border-emerald-500/20 bg-emerald-500/[0.02] p-8 flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full filter blur-2xl pointer-events-none" />

              {/* Status Ribbon */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.06] pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-display font-extrabold text-lg text-white">Status: VERIFIED</h3>
                    <p className="text-[10px] text-emerald-400 font-semibold tracking-wider uppercase mt-0.5">
                      Official ProDevOpz Document
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/internship/certificate?studentId=${student.id}`}
                    target="_blank"
                    className="flex items-center gap-1 text-[10px] font-bold px-3.5 py-2 rounded-xl bg-white text-black hover:opacity-95"
                  >
                    View Certificate <ExternalLink className="w-3 h-3" />
                  </Link>
                  <Link
                    href={`/internship/lor?studentId=${student.id}`}
                    target="_blank"
                    className="flex items-center gap-1 text-[10px] font-bold px-3.5 py-2 rounded-xl border border-white/10 hover:bg-white/5 text-white"
                  >
                    View LOR <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Details table */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-left">
                <div className="flex flex-col gap-3">
                  <h4 className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
                    Recipient Information
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    <p><span className="text-foreground/40">Full Name:</span> <b className="text-white">{student.name}</b></p>
                    <p><span className="text-foreground/40">College:</span> <b className="text-white">{student.college}</b></p>
                    <p><span className="text-foreground/40">Unique ID:</span> <b className="text-white">{student.internshipId}</b></p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <h4 className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
                    Program Specifications
                  </h4>
                  <div className="flex flex-col gap-1.5">
                    <p><span className="text-foreground/40">Domain:</span> <b className="text-white">{student.domain}</b></p>
                    <p><span className="text-foreground/40">Duration:</span> <b className="text-white">{student.duration}</b></p>
                    <p>
                      <span className="text-foreground/40">Completed:</span>{" "}
                      <b className="text-white">
                        {student.startDate ? new Date(student.startDate).toLocaleDateString("en-IN") : "Start"} -{" "}
                        {student.endDate ? new Date(student.endDate).toLocaleDateString("en-IN") : "End"}
                      </b>
                    </p>
                  </div>
                </div>
              </div>

              {/* Evaluation score */}
              {student.rating && (
                <div className="border-t border-white/[0.05] pt-6 flex flex-col gap-2 text-left">
                  <h4 className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
                    Evaluation & Feedback
                  </h4>
                  <div className="flex items-center gap-4 text-xs">
                    <span>Performance Rating: <b className="text-accent-orange">{student.rating} / 5 Stars</b></span>
                    <span>Evaluation Score: <b className="text-accent-purple">{student.performanceScore}%</b></span>
                  </div>
                  {student.feedback && (
                    <p className="text-xs text-foreground/60 italic bg-white/[0.01] border-l-2 border-white/10 p-2.5 mt-1">
                      &ldquo;{student.feedback}&rdquo;
                    </p>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="glass-panel border-red-500/20 bg-red-500/[0.01] p-6 flex items-center justify-center gap-3 text-red-400 text-xs">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <div className="text-left">
                <span className="font-bold">Invalid or Unverified Credential ID</span>
                <p className="text-[10px] text-foreground/40 mt-0.5">
                  The Certificate ID could not be matched against our active MSME registry. Check for spelling errors or contact our registry desk.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
