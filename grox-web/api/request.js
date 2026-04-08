import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  console.log("API HIT");

  if (req.method !== "POST") {
    return res.status(405).json({ message: "METHOD NOT ALLOWED" });
  }

  try {
    console.log("BODY:", req.body);

    const data =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    console.log("PARSED DATA:", data);

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "yourpersonal@gmail.com",
      subject: "TEST EMAIL",
      text: "Testing Resend connection",
    });

    console.log("RESEND RESPONSE:", response);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("ERROR:", err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}