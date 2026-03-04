import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Enable CORS for production
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const { name, phone, email, message } = req.body;

  // Validate required fields
  if (!name || !phone || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: "Invalid email format" });
  }

  // Check environment variables
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.error("Missing GMAIL_USER or GMAIL_PASS environment variables");
    return res.status(500).json({ success: false, message: "Email service not configured" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // Use Gmail App Password, not regular password
      },
    });

    const mailOptions = {
      from: `"MU Constructions Website" <${process.env.GMAIL_USER}>`,
      to: "mu.constructions.n.immovables@gmail.com",
      replyTo: email,
      subject: `New Website Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #d4b896; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #2a2a2a; margin: 0;">New Website Enquiry</h2>
          </div>
          <div style="border: 1px solid #e0e0e0; padding: 20px; border-radius: 0 0 8px 8px;">
            <div style="margin-bottom: 15px;">
              <strong style="color: #2a4a3a;">Name:</strong>
              <p style="margin: 5px 0; color: #2a2a2a;">${name}</p>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #2a4a3a;">Phone:</strong>
              <p style="margin: 5px 0;"><a href="tel:${phone}" style="color: #d4b896; text-decoration: none;">${phone}</a></p>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #2a4a3a;">Email:</strong>
              <p style="margin: 5px 0;"><a href="mailto:${email}" style="color: #d4b896; text-decoration: none;">${email}</a></p>
            </div>
            <div style="margin-bottom: 15px;">
              <strong style="color: #2a4a3a;">Message:</strong>
              <div style="background-color: #f5f1e8; padding: 15px; border-radius: 5px; margin-top: 10px;">
                <p style="margin: 0; white-space: pre-wrap; color: #2a2a2a;">${message}</p>
              </div>
            </div>
          </div>
          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 20px;">
            This email was sent from the MU Constructions website contact form on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Thank you! We'll get back to you within 24 hours." });

  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Failed to send email. Please try again later or contact us directly." 
    });
  }
}
