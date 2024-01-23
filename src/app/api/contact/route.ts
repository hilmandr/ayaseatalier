import nodemailer from "nodemailer";

export async function POST(
  req: { body: { name: any; email: any; message: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { error: any }): any; new (): any };
    };
  }
) {
  const { name, email, message } = await req.json();
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_APP_EMAIL,
      pass: process.env.MY_APP_PASS,
    },
  });
  try {
    await transporter.sendMail({
      from: email,
      to: process.env.MY_EMAIL_RECIEVER,
      replyTo: email,
      subject: `Anda mendapatkan pesan dari ${name}`,
      html: `<p>Anda mendapatkan pesan dari ${name} | ${email}</p><br>
        <p>${message}</p><br>`,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }

  return res.status(200).json({ error: "" });
}
