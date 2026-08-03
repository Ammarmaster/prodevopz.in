import { db } from "@/lib/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import QRCode from "qrcode";
import PrintButton from "@/components/PrintButton";

interface Props {
  searchParams: Promise<{ studentId?: string }>;
}

export default async function CertificatePage({ searchParams }: Props) {
  const { studentId } = await searchParams;

  if (!studentId) {
    notFound();
  }

  const student = await db.student.findUnique({
    where: { id: studentId },
  });

  if (!student || student.status !== "COMPLETED") {
    return (
      <div className="max-w-md mx-auto text-center py-20 px-4">
        <h2 className="text-xl font-bold text-white mb-2">Certificate Unlocked or Unavailable</h2>
        <p className="text-xs text-foreground/50 mb-6">
          This certificate is only issued upon successful completion of all assigned internship modules and payment confirmation.
        </p>
        <Link href="/internship" className="px-4 py-2 rounded-xl bg-accent-orange text-white text-xs font-bold">
          Back
        </Link>
      </div>
    );
  }

  // Generate QR Code data URL dynamically
  const verifyUrl = `https://prodevopz.in/verify-certificate?id=${student.certificateId}`;
  let qrCodeDataUrl = "";
  try {
    qrCodeDataUrl = await QRCode.toDataURL(verifyUrl, {
      margin: 1,
      width: 140,
      color: {
        dark: "#000000",
        light: "#ffffff",
      },
    });
  } catch (err) {
    console.error("Error generating QR code:", err);
  }

  const startDateStr = student.startDate
    ? new Date(student.startDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Start Date";

  const endDateStr = student.endDate
    ? new Date(student.endDate).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "End Date";

  const issueDateStr = new Date(student.createdAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#050505] py-10 px-4 flex flex-col items-center gap-6 print:bg-white print:py-0">
      {/* Google Fonts for Cursive Signature */}
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />

      {/* Print Controls (Hidden on print) */}
      <div className="w-full max-w-5xl flex items-center justify-between glass-panel p-4 border-white/5 print:hidden">
        <div className="flex flex-col text-left">
          <span className="text-xs font-bold text-white">Internship Certificate of Completion</span>
          <span className="text-[10px] text-foreground/50">Ready for Landscape A4 Save/Print</span>
        </div>
        <PrintButton />
      </div>

      {/* A4 Landscape Document Body */}
      <div
        className="w-full max-w-5xl bg-[#fdfdfd] text-neutral-800 p-16 flex flex-col justify-between shadow-2xl relative border-8 border-double border-amber-600 aspect-[1.414/1] print:shadow-none print:border-amber-600 print:bg-white print:p-10 select-none overflow-hidden"
        id="certificate-print"
      >
        {/* Certificate Frame Accents */}
        <div className="absolute top-4 left-4 right-4 bottom-4 border border-amber-600/30 pointer-events-none" />
        
        {/* Background Watermark Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
        
        {/* Top Header Row */}
        <div className="flex justify-between items-center border-b-2 border-amber-600/20 pb-4 relative z-10">
          <div className="flex items-center gap-2.5 text-left">
            <img src="/logo.jpg" alt="ProDevOpz Logo" className="w-9 h-9 rounded-lg object-contain bg-black" />
            <div>
              <span className="font-display font-black text-xl tracking-tight text-neutral-900 block leading-none">
                ProDevOpz
              </span>
              <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-widest block mt-1">
                Intelligent Software Engineering
              </span>
            </div>
          </div>

          {/* MSME & ISO badges */}
          <div className="flex gap-4 items-center">
            {/* MSME Official Badge Representation */}
            <div className="flex items-center gap-1.5 border border-amber-600/20 bg-amber-500/5 px-2.5 py-1 rounded text-[8px] text-amber-700 font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
              MSME Registered
            </div>
            <div className="flex items-center gap-1.5 border border-amber-600/20 bg-amber-500/5 px-2.5 py-1 rounded text-[8px] text-amber-700 font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
              ISO 9001:2015
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="text-center my-4 flex flex-col gap-3 relative z-10">
          <span className="text-[10px] font-extrabold text-amber-700 uppercase tracking-[0.25em] block">
            Certificate of Merit & Completion
          </span>
          <h1 className="font-serif font-extrabold text-3xl text-neutral-900 tracking-wide uppercase">
            PROUDLY PRESENTED TO
          </h1>

          <div className="flex flex-col items-center my-1">
            <span className="font-display font-black text-3xl text-amber-800 border-b-2 border-amber-600/30 pb-1 px-12 tracking-wide uppercase">
              {student.name}
            </span>
            <span className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider mt-2">
              for exceptional project execution and technical module delivery
            </span>
          </div>

          <p className="text-xs text-neutral-600 max-w-2xl mx-auto leading-relaxed mt-1">
            This is to certify that <b className="text-neutral-900">{student.name}</b> has successfully completed a professional technical internship in the domain of <b className="text-amber-800 uppercase">{student.domain}</b> with ProDevOpz Technologies. The candidate has executed all assigned coding modules, version-controlled sprints, and live deployment validation tasks between <b className="text-neutral-900">{startDateStr}</b> and <b className="text-neutral-900">{endDateStr}</b>.
          </p>
        </div>

        {/* Bottom Details Panel */}
        <div className="flex justify-between items-end border-t-2 border-amber-600/10 pt-6 relative z-10">
          
          {/* Metadata details */}
          <div className="text-left flex flex-col gap-1 text-[9px] text-neutral-500 font-medium">
            <span>Certificate ID: <b className="text-neutral-800">{student.certificateId}</b></span>
            <span>Internship ID: <b className="text-neutral-800">{student.internshipId}</b></span>
            <span>Issue Date: <b className="text-neutral-800">{issueDateStr}</b></span>
            <span className="text-[8px] text-neutral-400 mt-1">Registrar: Belagavi, Karnataka</span>
          </div>

          {/* Certificate Stamp & Ribbon */}
          <div className="flex items-center gap-6">
            <div className="text-center flex flex-col items-center">
              {/* Cursive Signature */}
              <div className="h-10 flex items-center justify-center select-none mb-1">
                <span 
                  className="text-amber-700 text-2xl tracking-wide relative block"
                  style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
                >
                  Ammar Master
                </span>
              </div>
              <span className="text-[9px] font-extrabold text-neutral-800 font-display">Ammar Master</span>
              <span className="text-[8px] text-neutral-400 font-semibold">Founder & CEO, ProDevOpz</span>
            </div>

            {/* Circular Stamp */}
            <svg className="w-16 h-16 text-amber-600 opacity-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
              <circle cx="60" cy="60" r="48" fill="none" stroke="currentColor" strokeWidth="0.8" />
              <path id="certCurve" d="M 20 60 A 40 40 0 0 1 100 60" fill="none" stroke="none" />
              <text className="text-[6.5px] font-bold fill-amber-700 tracking-wider">
                <textPath href="#certCurve" startOffset="50%" textAnchor="middle">
                  PRODEVOPZ TECHNOLOGIES
                </textPath>
              </text>
              <path id="certCurveBottom" d="M 100 60 A 40 40 0 0 1 20 60" fill="none" stroke="none" />
              <text className="text-[6.5px] font-bold fill-amber-700 tracking-wider">
                <textPath href="#certCurveBottom" startOffset="50%" textAnchor="middle">
                  ESTD 2024 • VERIFIED COHORT
                </textPath>
              </text>
              <circle cx="60" cy="60" r="32" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <text x="60" y="63" className="text-[9px] font-black fill-amber-800 tracking-widest text-center" textAnchor="middle">
                SEAL
              </text>
            </svg>
          </div>

          {/* QR Code and verification info */}
          <div className="flex items-center gap-3">
            <div className="text-right flex flex-col justify-center gap-0.5 text-[8px] text-neutral-400 max-w-[130px] leading-relaxed">
              <span className="font-bold text-neutral-700">Scan to Verify</span>
              <span>Authenticates instantly against our public registry ledger.</span>
            </div>
            {qrCodeDataUrl && (
              <div className="w-16 h-16 bg-white p-1 rounded border border-neutral-200 flex items-center justify-center shrink-0 shadow-sm">
                <img
                  src={qrCodeDataUrl}
                  alt="Verification QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
