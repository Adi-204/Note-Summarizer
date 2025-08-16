import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { recipients, summary, subject } = await request.json();

    if (!recipients || !summary || !subject) {
      return NextResponse.json(
        { error: "Recipients, summary, and subject are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const recipientList = (recipients as string)
      .split(",")
      .map((email: string) => email.trim());

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientList.join(", "),
      subject,
      text: summary,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
