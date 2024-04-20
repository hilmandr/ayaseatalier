import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      // service: "zoho",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MY_APP_EMAIL,
        pass: process.env.MY_APP_PASS,
      },
    });

    const mailOption = {
      from: email,
      to: process.env.MY_EMAIL_RECIEVER,
      replyTo: email,
      subject: "Send Email Tutorial",
      html: `
        <h3>Hello ${name}</h3>
        <li> message: ${message}</li> 
        `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
