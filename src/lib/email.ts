import nodemailer from "nodemailer";
import { jsPDF } from "jspdf";

// SMTP Transporter using contactprodevopz@gmail.com and Gmail App Password
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "contactprodevopz@gmail.com",
    pass: "ydqm zvap zecd xsql",
  },
});

// ==========================================
// 1. PDF GENERATORS (Server-Side using jsPDF)
// ==========================================

// A. Generate Offer Letter PDF
export function generateOfferLetterPdf(
  studentName: string,
  domain: string,
  duration: string,
  internshipId: string
): Buffer {
  const doc = new jsPDF();
  
  // Header logo & text
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(20, 20, 20);
  doc.text("ProDevOpz Technologies", 20, 25);
  
  doc.setFontSize(9);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(120, 120, 120);
  doc.text("Intelligent Software Engineering | prodevopz.in", 20, 31);
  doc.text("Email: contactprodevopz@gmail.com | Registered MSME Enterprise", 20, 36);
  
  doc.setDrawColor(210, 210, 210);
  doc.setLineWidth(0.5);
  doc.line(20, 42, 190, 42); // Header Divider
  
  // Date & Reference
  const dateStr = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.text(`Ref: ${internshipId}`, 20, 52);
  doc.text(`Date: ${dateStr}`, 145, 52);
  
  // Title
  doc.setFontSize(13);
  doc.setTextColor(20, 20, 20);
  doc.text("SUB: APPOINTMENT FOR TECHNICAL INTERNSHIP", 20, 68);
  
  // Letter Body
  doc.setFontSize(10);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(80, 80, 80);
  
  doc.text(`Dear ${studentName},`, 20, 80);
  
  const bodyText = `We are pleased to offer you a technical internship in the domain of ${domain} at ProDevOpz Technologies for a duration of ${duration}. Your onboarding process has been successfully validated.\n\nDuring this tenure, you will work on daily domain modules, custom project workflows, and version-controlled sprint releases. All task guides are available on your student dashboard. Your performance will be monitored daily.\n\nUpon successful execution of all assigned modules and graduation, you will receive an official ISO 9001:2015 & MSME Certified Certificate of Completion along with a Letter of Recommendation (LOR) for future placements.\n\nWe look forward to a highly productive engineering experience with us. Welcome to the cohort!`;
  
  const lines = doc.splitTextToSize(bodyText, 170);
  doc.text(lines, 20, 90);
  
  // Signatures
  doc.setFont("Helvetica", "bold");
  doc.setTextColor(40, 40, 40);
  doc.text("MD Jalaluddin", 20, 165);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(120, 120, 120);
  doc.text("Founder & MD, ProDevOpz", 20, 170);
  
  const buffer = doc.output("arraybuffer");
  return Buffer.from(buffer);
}

// B. Generate Certificate PDF (Landscape A4)
export function generateCertificatePdf(
  studentName: string,
  domain: string,
  certificateId: string,
  duration: string
): Buffer {
  const doc = new jsPDF({
    orientation: "landscape",
    format: "a4",
  });
  
  // Double Border Gold/Black
  doc.setDrawColor(255, 107, 0); // Orange/Gold
  doc.setLineWidth(1);
  doc.rect(10, 10, 277, 190);
  doc.setDrawColor(30, 30, 30);
  doc.setLineWidth(2);
  doc.rect(12, 12, 273, 186);

  // Logo Header
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(26);
  doc.setTextColor(30, 30, 30);
  doc.text("ProDevOpz Technologies", 148, 35, { align: "center" });
  
  doc.setFontSize(10);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(120, 120, 120);
  doc.text("Intelligent Software Engineering | Registered MSME Enterprise | ISO 9001:2015 Firm", 148, 42, { align: "center" });
  
  // Subtitle
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(15);
  doc.setTextColor(255, 107, 0);
  doc.text("CERTIFICATE OF INTERNSHIP", 148, 65, { align: "center" });

  doc.setFontSize(12);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(100, 100, 100);
  doc.text("PROUDLY PRESENTED TO", 148, 80, { align: "center" });

  // Student Name
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(20, 20, 20);
  doc.text(studentName.toUpperCase(), 148, 96, { align: "center" });
  
  // Body text
  doc.setFontSize(11);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(80, 80, 80);
  
  const certText = `has successfully completed a professional technical internship in the domain of ${domain} with ProDevOpz Technologies. The candidate has executed all assigned coding modules, version-controlled sprints, and live deployment validation tasks throughout the ${duration} program.`;
  const lines = doc.splitTextToSize(certText, 220);
  doc.text(lines, 148, 112, { align: "center" });
  
  // Signatures & Details
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text(`Certificate ID: ${certificateId}`, 25, 160);
  doc.text(`Verify online at: prodevopz.in/verify-certificate?id=${certificateId}`, 25, 166);
  
  doc.setFont("Helvetica", "bold");
  doc.setTextColor(40, 40, 40);
  doc.text("MD Jalaluddin", 200, 160);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(120, 120, 120);
  doc.text("Founder & MD, ProDevOpz", 200, 165);

  const buffer = doc.output("arraybuffer");
  return Buffer.from(buffer);
}

// C. Generate LOR PDF
export function generateLorPdf(
  studentName: string,
  domain: string,
  certificateId: string,
  rating: string
): Buffer {
  const doc = new jsPDF();
  
  // Header
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(20, 20, 20);
  doc.text("ProDevOpz Technologies", 20, 25);
  
  doc.setFontSize(9);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(120, 120, 120);
  doc.text("Intelligent Software Engineering | prodevopz.in", 20, 31);
  doc.text("Email: contactprodevopz@gmail.com | Registered MSME Enterprise", 20, 36);
  
  doc.setDrawColor(210, 210, 210);
  doc.setLineWidth(0.5);
  doc.line(20, 42, 190, 42); // Header Divider
  
  // Date & Reference
  const dateStr = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  doc.setFont("Helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(60, 60, 60);
  doc.text(`Ref: LOR-${certificateId}`, 20, 52);
  doc.text(`Date: ${dateStr}`, 145, 52);
  
  // Title
  doc.setFontSize(13);
  doc.setTextColor(20, 20, 20);
  doc.text("LETTER OF RECOMMENDATION", 20, 68);
  
  // Letter Body
  doc.setFontSize(10);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(80, 80, 80);
  
  doc.text("TO WHOM IT MAY CONCERN,", 20, 80);
  
  const bodyText = `I am writing this letter to recommend ${studentName}, who recently completed a technical internship in the domain of ${domain} with ProDevOpz Technologies. During their tenure, they demonstrated excellent coding standards, problem-solving skills, and deep engineering capabilities.\n\nThey achieved an overall evaluation rating of ${rating || "5"} / 5 Stars across all completed sprints, showing strong adaptation to modern tech stacks and structured development paradigms.\n\nI highly recommend them for any junior developer or cloud engineering opportunities they pursue. They will prove to be a valuable asset to any software engineering team.`;
  
  const lines = doc.splitTextToSize(bodyText, 170);
  doc.text(lines, 20, 90);
  
  // Signatures
  doc.setFont("Helvetica", "bold");
  doc.setTextColor(40, 40, 40);
  doc.text("MD Jalaluddin", 20, 165);
  doc.setFont("Helvetica", "normal");
  doc.setTextColor(120, 120, 120);
  doc.text("Founder & MD, ProDevOpz", 20, 170);
  
  const buffer = doc.output("arraybuffer");
  return Buffer.from(buffer);
}

// ==========================================
// 2. EMAIL SENT LOGIC
// ==========================================

const emailWrapper = (content: string) => `
  <div style="background-color: #030303; color: #f5f5f7; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 20px; line-height: 1.6; text-align: left;">
    <div style="max-width: 600px; margin: 0 auto; background: rgba(15, 15, 15, 0.9); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 30px; box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);">
      
      <!-- Header -->
      <div style="text-align: center; border-bottom: 1px solid rgba(255, 255, 255, 0.06); padding-bottom: 20px; margin-bottom: 25px;">
        <span style="font-size: 24px; font-weight: 800; tracking-tight: -0.05em; color: #ffffff; background: linear-gradient(to right, #ff6b00, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          ProDevOpz
        </span>
        <div style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(255, 255, 255, 0.4); margin-top: 5px; font-weight: bold;">
          Intelligent Software Engineering
        </div>
      </div>

      <!-- Main Body Content -->
      ${content}

      <!-- Footer -->
      <div style="border-top: 1px solid rgba(255, 255, 255, 0.06); margin-top: 35px; padding-top: 20px; text-align: center; font-size: 10px; color: rgba(255, 255, 255, 0.4); font-weight: 500;">
        <p style="margin: 0 0 5px 0;">ProDevOpz Technologies India • Registered MSME Enterprise</p>
        <p style="margin: 0 0 15px 0;">ISO 9001:2015 Certification Standards</p>
        <p style="margin: 0;">
          <a href="https://prodevopz.in" style="color: #ff6b00; text-decoration: none; font-weight: bold; margin-right: 15px;">Website</a>
          <a href="https://instagram.com/prodevopz.in" style="color: #8b5cf6; text-decoration: none; font-weight: bold;">Instagram</a>
        </p>
      </div>

    </div>
  </div>
`;

// A. Send OTP Code Email
export async function sendOtpEmail(toEmail: string, otp: string) {
  const htmlContent = emailWrapper(`
    <h3 style="font-size: 18px; font-weight: bold; color: #ffffff; margin-top: 0; margin-bottom: 15px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding-bottom: 8px;">
      Verify Your Email Address
    </h3>
    <p style="font-size: 13px; color: rgba(255, 255, 255, 0.7); margin-bottom: 25px;">
      Thank you for applying to the ProDevOpz technical internship program. Please verify your email using the following 6-digit OTP code:
    </p>
    <div style="background: rgba(255, 107, 0, 0.08); border: 1px dashed rgba(255, 107, 0, 0.3); border-radius: 12px; padding: 15px; text-align: center; font-size: 28px; font-weight: 800; letter-spacing: 0.25em; color: #ff6b00; margin-bottom: 25px;">
      ${otp}
    </div>
    <p style="font-size: 11px; color: rgba(255, 255, 255, 0.4); line-height: 1.4;">
      This OTP is valid for 15 minutes. If you did not request this verification, please disregard this email.
    </p>
  `);

  await transporter.sendMail({
    from: '"ProDevOpz Support" <contactprodevopz@gmail.com>',
    to: toEmail,
    subject: `[OTP Verification Code] - ${otp}`,
    html: htmlContent,
  });
}

// B. Send Offer Letter Welcome Email
export async function sendOfferLetterEmail(
  toEmail: string,
  studentName: string,
  domain: string,
  dashboardLink: string,
  duration: string,
  internshipId: string
) {
  const htmlContent = emailWrapper(`
    <h3 style="font-size: 18px; font-weight: bold; color: #ffffff; margin-top: 0; margin-bottom: 15px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding-bottom: 8px;">
      Internship Offer Extended!
    </h3>
    <p style="font-size: 13px; color: rgba(255, 255, 255, 0.7); margin-bottom: 15px;">
      Dear <b>${studentName}</b>,
    </p>
    <p style="font-size: 13px; color: rgba(255, 255, 255, 0.7); margin-bottom: 20px;">
      Congratulations! We are pleased to extend an offer for a technical internship in the domain of <b style="color: #ff6b00;">${domain}</b> at ProDevOpz Technologies.
    </p>
    
    <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 18px; margin-bottom: 25px; font-size: 12px;">
      <div style="margin-bottom: 8px;"><span style="color: rgba(255, 255, 255, 0.4);">Domain:</span> <b style="color: #ffffff;">${domain}</b></div>
      <div style="margin-bottom: 8px;"><span style="color: rgba(255, 255, 255, 0.4);">Status:</span> <b style="color: #10b981;">ACTIVE</b></div>
      <div><span style="color: rgba(255, 255, 255, 0.4);">Office Support:</span> <b style="color: #ffffff;">contactprodevopz@gmail.com</b></div>
    </div>

    <p style="font-size: 13px; color: rgba(255, 255, 255, 0.7); margin-bottom: 25px;">
      We have attached your official PDF Offer Letter directly inside this email. You can also access your student dashboard to review daily tasks, check follow requirements, and submit code repos:
    </p>

    <div style="text-align: center; margin-bottom: 30px;">
      <a href="${dashboardLink}" style="background: linear-gradient(to right, #ff6b00, #8b5cf6); color: #ffffff; padding: 12px 30px; border-radius: 9999px; text-decoration: none; font-size: 13px; font-weight: bold; display: inline-block; box-shadow: 0 4px 15px rgba(255, 107, 0, 0.2);">
        Access Student Dashboard
      </a>
    </div>
  `);

  // Generate PDF attachment in real-time
  const pdfBuffer = generateOfferLetterPdf(studentName, domain, duration, internshipId);

  await transporter.sendMail({
    from: '"ProDevOpz Onboarding" <contactprodevopz@gmail.com>',
    to: toEmail,
    subject: "Internship Offer Letter & Onboarding Dashboard - ProDevOpz",
    html: htmlContent,
    attachments: [
      {
        filename: `Offer_Letter_${studentName.replace(/\s+/g, "_")}.pdf`,
        content: pdfBuffer,
      },
    ],
  });
}

// C. Send Graduation Email (Certificate & LOR)
export async function sendGraduationEmail(
  toEmail: string,
  studentName: string,
  domain: string,
  certificateId: string,
  duration: string,
  rating: string
) {
  const certUrl = `http://localhost:3000/internship/certificate?studentId=${certificateId}`;
  const lorUrl = `http://localhost:3000/internship/lor?studentId=${certificateId}`;

  const htmlContent = emailWrapper(`
    <h3 style="font-size: 18px; font-weight: bold; color: #ffffff; margin-top: 0; margin-bottom: 15px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding-bottom: 8px;">
      Congratulations on Graduation!
    </h3>
    <p style="font-size: 13px; color: rgba(255, 255, 255, 0.7); margin-bottom: 15px;">
      Dear <b>${studentName}</b>,
    </p>
    <p style="font-size: 13px; color: rgba(255, 255, 255, 0.7); margin-bottom: 20px;">
      We are proud to confirm that you have successfully completed all technical sprints for your <b style="color: #ff6b00;">${domain}</b> internship!
    </p>

    <p style="font-size: 13px; color: rgba(255, 255, 255, 0.7); margin-bottom: 25px;">
      Your payment was processed, and your verified credentials (certified with our MSME logo) and Letter of Recommendation (LOR) have been generated. We have attached both PDF documents directly inside this email:
    </p>

    <div style="text-align: center; margin-bottom: 30px; display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
      <a href="${certUrl}" style="background: #ff6b00; color: #ffffff; padding: 12px 25px; border-radius: 9999px; text-decoration: none; font-size: 12px; font-weight: bold; display: inline-block; margin-right: 10px;">
        Open Certificate Link
      </a>
      <a href="${lorUrl}" style="background: #8b5cf6; color: #ffffff; padding: 12px 25px; border-radius: 9999px; text-decoration: none; font-size: 12px; font-weight: bold; display: inline-block;">
        Open LOR Link
      </a>
    </div>

    <p style="font-size: 11px; color: rgba(255, 255, 255, 0.4); line-height: 1.4; border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 15px;">
      *All credentials can be verified publicly by third-party recruiters at any time by scanning the QR code or visiting our verification portal at prodevopz.in/verify-certificate.
    </p>
  `);

  // Generate Certificate and LOR PDF buffers
  const certBuffer = generateCertificatePdf(studentName, domain, certificateId, duration);
  const lorBuffer = generateLorPdf(studentName, domain, certificateId, rating);

  await transporter.sendMail({
    from: '"ProDevOpz Graduation Desk" <contactprodevopz@gmail.com>',
    to: toEmail,
    subject: "Internship Certificate of Completion & LOR - ProDevOpz",
    html: htmlContent,
    attachments: [
      {
        filename: `Certificate_${studentName.replace(/\s+/g, "_")}.pdf`,
        content: certBuffer,
      },
      {
        filename: `LOR_${studentName.replace(/\s+/g, "_")}.pdf`,
        content: lorBuffer,
      },
    ],
  });
}
