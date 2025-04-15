import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  const adminMail = {
    from: `"Amandis Waitlist" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: "🚀 Nuevo usuario en la lista de espera",
    text: `Un nuevo usuario se ha registrado en Amandis: ${email}`,
  }

  const userMail = {
    from: `"Amandis Team" <${process.env.SMTP_USER}>`,
    to: email,
    subject: "✅ Estás en la lista de espera de Amandis",
    html: `
      <div style="font-family: sans-serif; padding: 20px; background: #fff0f5; border-radius: 8px;">
        <h2 style="color: #d63384;">Bienvenido a Amandis 💌</h2>
        <p>Hola! Gracias por unirte a nuestra lista de espera.</p>
        <p>Muy pronto podrás experimentar una nueva forma de conectar con privacidad y estilo.</p>
        <hr style="margin: 20px 0;" />
        <p style="font-size: 0.9em; color: #555;">Nos vemos pronto,<br/>El equipo de Amandis</p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(adminMail)
    await transporter.sendMail(userMail)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending mail:", error)
    return NextResponse.json({ error: "Mail error" }, { status: 500 })
  }
}
