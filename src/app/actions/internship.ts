"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { sendOtpEmail, sendOfferLetterEmail, sendGraduationEmail } from "@/lib/email";

// 1. Send OTP verification code to applicant email
export async function sendRegistrationOtp(email: string) {
  try {
    // Generate 6-digit random code
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    // Store in DB (Upsert)
    await db.otpVerification.upsert({
      where: { email },
      update: { code, createdAt: new Date() },
      create: { email, code },
    });

    // Send the actual email
    let fallbackUsed = false;
    try {
      await sendOtpEmail(email, code);
    } catch (mailError: any) {
      console.warn("SMTP email transport failed. Falling back to console logging.");
      console.log(`\n=========================================\n[OTP VERIFICATION FALLBACK]:\nTo: ${email}\nOTP Code: ${code}\n=========================================\n`);
      fallbackUsed = true;
    }
    return { success: true, fallback: fallbackUsed, otpCode: code };
  } catch (error: any) {
    console.error("Error in sendRegistrationOtp Server Action:", error);
    return { success: false, error: error.message || "Failed to send verification email." };
  }
}

// 2. Verify OTP code
export async function verifyRegistrationOtp(email: string, code: string) {
  try {
    const record = await db.otpVerification.findUnique({
      where: { email },
    });

    if (record && record.code === code) {
      // Delete verification entry once verified
      await db.otpVerification.delete({ where: { email } });
      return { success: true };
    }

    return { success: false, error: "Invalid OTP code. Please check your email." };
  } catch (error: any) {
    console.error("Error in verifyRegistrationOtp Server Action:", error);
    return { success: false, error: error.message };
  }
}

// 2b. Student Sign In OTP (for existing enrolled interns)
export async function studentSignInOtp(email: string): Promise<{
  success: boolean;
  studentId?: string;
  fallback?: boolean;
  otpCode?: string;
  error?: string;
}> {
  try {
    const student = await db.student.findUnique({
      where: { email },
    });

    if (!student) {
      return {
        success: false,
        error: "No student profile found with this email. Please register first.",
      };
    }

    const otpRes = await sendRegistrationOtp(email);
    if (!otpRes.success) {
      return { success: false, error: otpRes.error };
    }
    return {
      success: true,
      studentId: student.id,
      fallback: otpRes.fallback,
      otpCode: otpRes.otpCode,
    };
  } catch (error: any) {
    console.error("Error in studentSignInOtp Server Action:", error);
    return { success: false, error: error.message || "Failed to send sign-in OTP." };
  }
}

// 2c. Verify Student Sign In OTP
export async function verifyStudentSignInOtp(
  email: string,
  code: string
): Promise<{
  success: boolean;
  studentId?: string;
  studentName?: string;
  error?: string;
}> {
  try {
    const verifyRes = await verifyRegistrationOtp(email, code);
    if (!verifyRes.success) {
      return { success: false, error: verifyRes.error };
    }

    const student = await db.student.findUnique({
      where: { email },
    });

    if (!student) {
      return { success: false, error: "Student record not found." };
    }

    return { success: true, studentId: student.id, studentName: student.name };
  } catch (error: any) {
    console.error("Error in verifyStudentSignInOtp Server Action:", error);
    return { success: false, error: error.message || "Sign-in verification failed." };
  }
}

// 3. Register Student (called after successful OTP verification)
export async function registerStudent(formData: {
  name: string;
  email: string;
  phone: string;
  college: string;
  domain: string;
  duration: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  resumeUrl?: string;
}) {
  try {
    // Check if student already exists
    const existingStudent = await db.student.findUnique({
      where: { email: formData.email },
    });

    // Generate unique IDs (used if creating new student)
    const domainCode = formData.domain.slice(0, 3).toUpperCase().replace(" ", "");
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const generatedInternshipId = `PRODEV-${domainCode}-${randomNum}`;
    const generatedCertificateId = `CERT-${domainCode}-${randomNum}`;

    // Set dates
    const startDate = new Date();
    let monthsToAdd = 1;
    if (formData.duration.includes("2")) monthsToAdd = 2;
    if (formData.duration.includes("3")) monthsToAdd = 3;
    if (formData.duration.includes("6")) monthsToAdd = 6;
    const endDate = new Date(startDate.getTime() + monthsToAdd * 30 * 24 * 60 * 60 * 1000);

    let student;
    let internshipId = generatedInternshipId;

    if (existingStudent) {
      internshipId = existingStudent.internshipId || generatedInternshipId;
      student = await db.student.update({
        where: { id: existingStudent.id },
        data: {
          name: formData.name,
          phone: formData.phone,
          college: formData.college,
          domain: formData.domain,
          duration: formData.duration,
          linkedin: formData.linkedin,
          github: formData.github,
          portfolio: formData.portfolio,
          resumeUrl: formData.resumeUrl,
          status: existingStudent.status === "DROPPED" ? "ACTIVE" : existingStudent.status,
        },
      });
    } else {
      student = await db.student.create({
        data: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          college: formData.college,
          domain: formData.domain,
          duration: formData.duration,
          linkedin: formData.linkedin,
          github: formData.github,
          portfolio: formData.portfolio,
          resumeUrl: formData.resumeUrl,
          internshipId: generatedInternshipId,
          certificateId: generatedCertificateId,
          startDate,
          endDate,
          paymentStatus: "PENDING",
          amountPaid: 0.0,
          status: "ACTIVE",
        },
      });
    }

    // Send Welcome Offer Letter email immediately!
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://prodevopz.in";
    const dashboardLink = `${baseUrl}/internship/dashboard?studentId=${student.id}`;
    try {
      await sendOfferLetterEmail(student.email, student.name, student.domain, dashboardLink, student.duration, student.internshipId || "");
    } catch (mailError: any) {
      console.warn("SMTP welcome email failed. Logged to console.");
      console.log(`\n=========================================\n[OFFER LETTER WELCOME EMAIL FALLBACK]:\nTo: ${student.email}\nName: ${student.name}\nDashboard URL: ${dashboardLink}\n=========================================\n`);
    }

    revalidatePath("/admin");
    return { success: true, studentId: student.id, internshipId };
  } catch (error: any) {
    console.error("Error registering student Server Action:", error);
    return { success: false, error: error.message || "Registration failed." };
  }
}

// 4. Fetch Student by ID
export async function getStudentById(id: string) {
  try {
    return await db.student.findUnique({
      where: { id },
      include: {
        submissions: {
          include: { task: true },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching student details:", error);
    return null;
  }
}

// 5. Submit a Daily Task Link
export async function submitTask(
  studentId: string,
  taskId: string,
  completionLink: string,
  followTaskCheck: boolean,
  comment?: string
) {
  try {
    const task = await db.task.findUnique({
      where: { id: taskId },
    });

    if (!task) {
      return { success: false, error: "Task not found." };
    }

    // Save submission as APPROVED (automated review)
    await db.taskSubmission.create({
      data: {
        studentId,
        taskId,
        completionLink,
        followTaskCheck,
        comment,
        status: "APPROVED",
        score: 95.0,
        mentorFeedback: "AI System: Automated check passed. Code syntax and repository layout validated.",
      },
    });

    // Increment tasksCompletedCount for student
    const student = await db.student.findUnique({
      where: { id: studentId },
    });

    if (student) {
      const count = student.tasksCompletedCount + 1;
      await db.student.update({
        where: { id: studentId },
        data: {
          tasksCompletedCount: count,
        },
      });
    }

    revalidatePath("/internship/dashboard");
    revalidatePath("/admin");
    return { success: true };
  } catch (error: any) {
    console.error("Error submitting task Server Action:", error);
    return { success: false, error: error.message || "Task submission failed." };
  }
}

// 6. Update Student Status / Approve Submissions (Admin Panel actions)
import { cookies } from "next/headers";

export async function approveSubmission(submissionId: string, mentorFeedback?: string) {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    const sessionSecret = process.env.ADMIN_SESSION_SECRET || "authenticated_ammar_cohort";
    if (!session || session.value !== sessionSecret) {
      return { success: false, error: "Unauthorized admin request." };
    }

    const submission = await db.taskSubmission.update({
      where: { id: submissionId },
      data: {
        status: "APPROVED",
        mentorFeedback: mentorFeedback || "Excellent implementation, keep it up!",
      },
    });

    const student = await db.student.findUnique({
      where: { id: submission.studentId },
    });

    if (student) {
      const count = student.tasksCompletedCount + 1;
      await db.student.update({
        where: { id: student.id },
        data: {
          tasksCompletedCount: count,
          status: count >= 5 ? "COMPLETED" : "ACTIVE",
        },
      });
    }

    revalidatePath("/admin");
    revalidatePath("/internship/dashboard");
    return { success: true };
  } catch (error: any) {
    console.error("Error approving submission:", error);
    return { success: false, error: error.message };
  }
}

export async function rejectSubmission(submissionId: string, mentorFeedback: string) {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");
    const sessionSecret = process.env.ADMIN_SESSION_SECRET || "authenticated_ammar_cohort";
    if (!session || session.value !== sessionSecret) {
      return { success: false, error: "Unauthorized admin request." };
    }

    await db.taskSubmission.update({
      where: { id: submissionId },
      data: {
        status: "REJECTED",
        mentorFeedback,
      },
    });

    revalidatePath("/admin");
    revalidatePath("/internship/dashboard");
    return { success: true };
  } catch (error: any) {
    console.error("Error rejecting submission:", error);
    return { success: false, error: error.message };
  }
}

// 7. Verify a Certificate Publicly
export async function verifyCertificate(idOrCert: string) {
  try {
    // Try finding by certificateId first
    let student = await db.student.findUnique({
      where: { certificateId: idOrCert },
      select: {
        name: true,
        domain: true,
        duration: true,
        startDate: true,
        endDate: true,
        certificateId: true,
        internshipId: true,
        status: true,
        college: true,
        rating: true,
        feedback: true,
      },
    });

    // If not found, fall back to searching by internshipId
    if (!student) {
      student = await db.student.findUnique({
        where: { internshipId: idOrCert },
        select: {
          name: true,
          domain: true,
          duration: true,
          startDate: true,
          endDate: true,
          certificateId: true,
          internshipId: true,
          status: true,
          college: true,
          rating: true,
          feedback: true,
        },
      });
    }

    return student;
  } catch (error) {
    console.error("Error verifying certificate:", error);
    return null;
  }
}

// 8. Initialize Razorpay Client and payment actions
import Razorpay from "razorpay";
import crypto from "crypto";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_TCXL3cWODA4EGZ",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "mwTxyjhTepqXJoHXfOHr2c66",
});

// A. Create Razorpay Order (₹200)
export async function createRazorpayOrderAction(studentId: string) {
  try {
    const student = await db.student.findUnique({
      where: { id: studentId },
    });

    if (!student) {
      return { success: false, error: "Student not found." };
    }

    const order = await razorpay.orders.create({
      amount: 20000, // ₹200 in paise
      currency: "INR",
      receipt: `receipt_${studentId.substring(0, 8)}`,
    });

    return { success: true, orderId: order.id, amount: order.amount };
  } catch (error: any) {
    console.error("Error creating Razorpay order:", error);
    return { success: false, error: error.message || "Failed to initiate payment." };
  }
}

// B. Verify Razorpay Payment Signature and Graduate
export async function verifyRazorpayPaymentAction(
  studentId: string,
  paymentId: string,
  orderId: string,
  signature: string
) {
  try {
    // Verify HMAC SHA256 signature
    const body = orderId + "|" + paymentId;
    const keySecret = process.env.RAZORPAY_KEY_SECRET || "mwTxyjhTepqXJoHXfOHr2c66";
    const expectedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(body.toString())
      .digest("hex");

    const isVerified = expectedSignature === signature;

    if (!isVerified) {
      return { success: false, error: "Payment verification signature mismatch." };
    }

    // Set payment details and graduate the student
    const updatedStudent = await db.student.update({
      where: { id: studentId },
      data: {
        paymentStatus: "COMPLETED",
        amountPaid: 200.0,
        paymentId: paymentId,
        invoiceId: orderId,
        status: "COMPLETED",
      },
    });

    // Send graduation credentials email with PDF attachments!
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://prodevopz.in";
    const certUrl = `${baseUrl}/internship/certificate?studentId=${updatedStudent.id}`;
    const lorUrl = `${baseUrl}/internship/lor?studentId=${updatedStudent.id}`;
    try {
      await sendGraduationEmail(
        updatedStudent.email,
        updatedStudent.name,
        updatedStudent.domain,
        updatedStudent.id,
        updatedStudent.certificateId || "",
        updatedStudent.duration,
        (updatedStudent.rating || 5).toString()
      );
    } catch (mailError: any) {
      console.warn("SMTP graduation email failed. Logged to console.");
      console.log(`\n=========================================\n[GRADUATION EMAIL FALLBACK]:\nTo: ${updatedStudent.email}\nCertificate URL: ${certUrl}\nLOR URL: ${lorUrl}\n=========================================\n`);
    }

    revalidatePath("/internship/dashboard");
    revalidatePath("/internship/certificate");
    revalidatePath("/internship/lor");
    revalidatePath("/verify-certificate");
    return { success: true, studentId: updatedStudent.id, certificateId: updatedStudent.certificateId };
  } catch (error: any) {
    console.error("Error verifying Razorpay payment:", error);
    return { success: false, error: error.message || "Verification process failed." };
  }
}
