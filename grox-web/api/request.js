import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method != "POST") {
        return res.status(405).json({ message: "METHOD NOT ALLOWED" })
    }
    try {
        const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

        const {
            name,
            email,
            phone,
            projectType,
            description,
            timeline,
            budget,
        } = data;

        if (!name || !email || !projectType || !description || !timeline) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const response = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "prngurav@gmail.com",
            subject: "New GROX Request",
            html: `<h2>New Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Budget:</strong> ${budget || "Not specified"}</p>

        <hr />

        <p><strong>Description:</strong></p>
        <p>${description}</p>`
        })
        console.log("RESEND RESPONSE:", response);
        return res.status(200).json({ success: true });
    }
    catch (err) {
        console.error("ERROR:", err);
        return res.status(500).json({ message: "Something went wrong" });
    }
}