import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CustomSelect } from "../CustomSelect";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import StructuredData, { generateBreadcrumbSchema } from "../components/StructuredData";
import Footer from "../components/Footer";

const FONT_URL =
    "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap";

const initialForm = {
    name: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
    timeline: "",
    budget: "",
};

export default function Request() {
    const [form, setForm] = useState(initialForm);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const firstInputRef = useRef(null);

    useEffect(() => {
        if (firstInputRef.current) firstInputRef.current.focus();
    }, []);

    const validate = () => {
        const e = {};
        if (!form.name.trim()) e.name = "Required";
        if (!form.email.trim()) e.email = "Required";
        if (!form.projectType) e.projectType = "Required";
        if (!form.description.trim()) e.description = "Required";
        if (!form.timeline) e.timeline = "Required";
        return e;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setLoading(true);
        try {
            const res = await fetch("/api/request", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            console.log("API RESPONSE:", data);

            if (!res.ok) {
                throw new Error(data.message || "Something failed");
            }
        } catch (_) { }
        setLoading(false);
        setSubmitted(true);
    };

    const reset = () => {
        setForm(initialForm);
        setErrors({});
        setSubmitted(false);
        setTimeout(() => firstInputRef.current?.focus(), 50);
    };

    // Breadcrumb schema for Request page
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://grox.tech" },
        { name: "Request Execution", url: "https://grox.tech/request" }
    ]);

    // Contact page schema
    const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Request Execution — GROX",
        "description": "Submit your project to GROX. We execute design, development, and content systems with structure and speed.",
        "url": "https://grox.tech/request",
        "mainEntity": {
            "@type": "Organization",
            "name": "GROX",
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Project Inquiries",
                "availableLanguage": ["English"]
            }
        }
    };

    const requestPageSchema = {
        "@context": "https://schema.org",
        "@graph": [breadcrumbSchema, contactSchema]
    };

    return (
        <>
            <SEO
                title="Hire Web Development, Video Editing & Design Services | GROX"
                description="Submit your project to hire experts in web development, video editing, and design. Fast response, structured execution, and high-quality results."
            />
            <StructuredData data={requestPageSchema} />

            <style>{`
 @import url('${FONT_URL}');

.rq-page {
  background-color: #070707;
  min-height: 100vh;
  padding-bottom: clamp(4rem, 10vw, 7rem);
}

/* ── Labels ── */
.rq-label {
  font-family: 'DM Mono', monospace;
  font-size: 9px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #b0b0b0; /* brighter */
  display: block;
  margin-bottom: 10px;
}

.rq-error-label {
  font-family: 'DM Mono', monospace;
  font-size: 8px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #ff4d4d;
  margin-top: 5px;
  display: block;
}

/* ── Inputs ── */
.rq-input,
.rq-textarea {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255,255,255,0.25); /* stronger line */
  outline: none;
  font-family: 'DM Sans', sans-serif;
  font-size: 15px;
  color: #ffffff; /* full white */
  padding: 12px 0 14px;
  transition: border-color 0.2s ease;
  border-radius: 0;
}

/* placeholder FIX */
.rq-input::placeholder,
.rq-textarea::placeholder {
  color: #777; /* visible but not overpowering */
}

/* focus */
.rq-input:focus,
.rq-textarea:focus {
  border-bottom-color: #ff2e2e;
}

/* error */
.rq-input.error,
.rq-textarea.error {
  border-bottom-color: rgba(255,77,77,0.7);
}

/* textarea */
.rq-textarea {
  resize: none;
  min-height: 110px;
  line-height: 1.75;
}

/* ── Buttons ── */
.rq-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'DM Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #ffffff;
  background: #ff2e2e; /* slightly brighter red */
  border: none;
  cursor: pointer;
  padding: 17px 36px;
  clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
  transition: all 0.2s ease;
}

.rq-btn:hover:not(:disabled) {
  background: #e02626;
  box-shadow: 0 0 32px rgba(255,46,46,0.35);
  transform: translateY(-2px);
}

.rq-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* ghost button */
.rq-btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'DM Mono', monospace;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #c0c0c0; /* brighter */
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.18s ease;
  margin-top: 20px;
}

.rq-btn-ghost:hover {
  color: #ffffff;
}

/* optional tag */
.rq-optional {
  font-family: 'DM Mono', monospace;
  font-size: 8px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #888; /* visible now */
  margin-left: 8px;
}

/* ── Divider ── */
.rq-divider {
  height: 1px;
  background: linear-gradient(
    to right,
    rgba(255,46,46,0.35),
    rgba(255,255,255,0.12) 50%,
    transparent
  );
  margin: clamp(2.5rem, 6vw, 4rem) 0;
}

.rq-section-divider {
  height: 1px;
  background: rgba(255,255,255,0.15);
  margin-bottom: clamp(2rem, 5vw, 3rem);
}
`}</style>

            <Navbar />
            <main className="rq-page">
                <div className="max-w-[900px] mx-auto px-5 sm:px-10 lg:px-16">

                    {/* ── Page header ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        style={{ paddingTop: "clamp(5rem, 12vw, 8rem)", paddingBottom: "clamp(3rem, 7vw, 5rem)" }}
                    >

                        {/* Eyebrow */}
                        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
                            <span style={{ display: "block", width: "24px", height: "1px", background: "#dc2626" }} />
                            <p style={{
                                fontFamily: "'DM Mono', monospace",
                                fontSize: "9px",
                                letterSpacing: "0.22em",
                                textTransform: "uppercase",
                                color: "#888888",
                            }}>
                                Request Execution
                            </p>
                        </div>

                        {/* Headline */}
                        <h1 style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                            textTransform: "uppercase",
                            letterSpacing: "-0.02em",
                            lineHeight: 0.93,
                            color: "#f0f0f0",
                            marginBottom: "28px",
                        }}>
                            Tell us what<br />
                            <span style={{ color: "#dc2626" }}>needs to be</span><br />
                            executed.
                        </h1>

                        {/* Subtext block */}
                        <div style={{ maxWidth: "460px" }}>
                            <p style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "15px",
                                lineHeight: 1.8,
                                color: "#b0b0b0",
                                marginBottom: "16px",
                            }}>
                                Not pitched. Not explored. Executed.
                            </p>
                            <p style={{
                                fontFamily: "'DM Mono', monospace",
                                fontSize: "10px",
                                letterSpacing: "0.16em",
                                textTransform: "uppercase",
                                color: "#666666",
                            }}>
                                If it's a fit, we'll respond within 24–48 hours.
                            </p>
                            <p style={{
                                fontFamily: "'DM Mono', monospace",
                                fontSize: "10px",
                                letterSpacing: "0.16em",
                                textTransform: "uppercase",
                                color: "rgba(220,38,38,0.55)",
                                marginTop: "8px",
                            }}>
                                We don't take every project.
                            </p>
                        </div>

                    </motion.div>

                    <div className="rq-divider" />

                    {/* ── Form / Success ── */}
                    <AnimatePresence mode="wait">
                        {submitted ? (

                            /* ── SUCCESS STATE ── */
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                style={{ paddingBottom: "clamp(4rem, 10vw, 7rem)" }}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
                                    <span style={{
                                        width: "6px", height: "6px",
                                        borderRadius: "50%",
                                        background: "#dc2626",
                                        flexShrink: 0,
                                    }} />
                                    <p style={{
                                        fontFamily: "'DM Mono', monospace",
                                        fontSize: "9px",
                                        letterSpacing: "0.22em",
                                        textTransform: "uppercase",
                                        color: "rgba(220,38,38,0.7)",
                                    }}>
                                        Request Received
                                    </p>
                                </div>

                                <h2 style={{
                                    fontFamily: "'Barlow Condensed', sans-serif",
                                    fontWeight: 800,
                                    fontSize: "clamp(2rem, 5vw, 3.2rem)",
                                    textTransform: "uppercase",
                                    letterSpacing: "-0.01em",
                                    lineHeight: 0.95,
                                    color: "#f5f5f5",
                                    marginBottom: "24px",
                                }}>
                                    If it's a fit,<br />we'll reach out<br />
                                    <span style={{ color: "#dc2626" }}>within 48 hours.</span>
                                </h2>

                                <p style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "14px",
                                    lineHeight: 1.8,
                                    color: "#888888",
                                    marginBottom: "8px",
                                }}>
                                    We'll respond via email.
                                </p>

                                <p style={{
                                    fontFamily: "'DM Mono', monospace",
                                    fontSize: "10px",
                                    letterSpacing: "0.14em",
                                    textTransform: "uppercase",
                                    color: "#666666",
                                }}>
                                    No spam. No auto-replies. A real response.
                                </p>

                                <button className="rq-btn-ghost" onClick={reset}>
                                    {"←"} Submit another request
                                </button>
                            </motion.div>

                        ) : (

                            /* ── FORM ── */
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                onSubmit={handleSubmit}
                                noValidate
                            >

                                {/* Row group: Name + Email */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                    className="grid grid-cols-1 sm:grid-cols-2"
                                    style={{ gap: "clamp(2rem, 5vw, 4rem)", marginBottom: "clamp(2rem, 5vw, 3.5rem)" }}
                                >
                                    {/* Name */}
                                    <div>
                                        <label className="rq-label" htmlFor="name">
                                            Full Name
                                        </label>
                                        <input
                                            ref={firstInputRef}
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="name"
                                            placeholder="Your name"
                                            value={form.name}
                                            onChange={handleChange}
                                            className={`rq-input${errors.name ? " error" : ""}`}
                                        />
                                        {errors.name && <span className="rq-error-label">{errors.name}</span>}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="rq-label" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            placeholder="you@company.com"
                                            value={form.email}
                                            onChange={handleChange}
                                            className={`rq-input${errors.email ? " error" : ""}`}
                                        />
                                        {errors.email && <span className="rq-error-label">{errors.email}</span>}
                                    </div>
                                </motion.div>

                                {/* Row group: Phone + Project Type */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                    className="grid grid-cols-1 sm:grid-cols-2"
                                    style={{ gap: "clamp(2rem, 5vw, 4rem)", marginBottom: "clamp(2rem, 5vw, 3.5rem)" }}
                                >
                                    {/* Phone */}
                                    <div>
                                        <label className="rq-label" htmlFor="phone">
                                            Phone <span className="rq-optional">Optional</span>
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            autoComplete="tel"
                                            placeholder="+91 00000 00000"
                                            value={form.phone}
                                            onChange={handleChange}
                                            className="rq-input"
                                        />
                                    </div>

                                    {/* Project Type */}
                                    <div>
                                        <label className="rq-label" htmlFor="projectType">
                                            Project Type
                                        </label>
                                        <CustomSelect
                                            name="projectType"
                                            value={form.projectType}
                                            onChange={handleChange}
                                            placeholder="Select type"
                                            error={errors.projectType}
                                            options={[
                                                { label: "Website & Funnels", value: "website_funnel" },
                                                { label: "Content & Social Media", value: "content_social" },
                                                { label: "Automation & Tools", value: "automation_tools" },
                                                { label: "Custom Project", value: "custom" },
                                            ]}
                                        />
                                        {errors.projectType && <span className="rq-error-label">{errors.projectType}</span>}
                                    </div>
                                </motion.div>

                                {/* Description */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                                    style={{ marginBottom: "clamp(2rem, 5vw, 3.5rem)" }}
                                >
                                    <label className="rq-label" htmlFor="description">
                                        What needs to be executed
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        placeholder="Describe the scope, problem, or goal — be direct."
                                        value={form.description}
                                        onChange={handleChange}
                                        className={`rq-textarea${errors.description ? " error" : ""}`}
                                        rows={5}
                                    />
                                    {errors.description && <span className="rq-error-label">{errors.description}</span>}
                                </motion.div>

                                {/* Row group: Timeline + Budget */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                    className="grid grid-cols-1 sm:grid-cols-2"
                                    style={{ gap: "clamp(2rem, 5vw, 4rem)", marginBottom: "clamp(2.5rem, 6vw, 4.5rem)" }}
                                >
                                    {/* Timeline */}
                                    <div>
                                        <label className="rq-label" htmlFor="timeline">
                                            Timeline
                                        </label>
                                        <CustomSelect
                                            name="timeline"
                                            value={form.timeline}
                                            onChange={handleChange}
                                            placeholder="Select timeline"
                                            error={errors.timeline}
                                            options={[
                                                { label: "ASAP", value: "asap" },
                                                { label: "2–4 weeks", value: "2-4weeks" },
                                                { label: "1–2 months", value: "1-2months" },
                                                { label: "Flexible", value: "flexible" },
                                            ]}
                                        />
                                        {errors.timeline && <span className="rq-error-label">{errors.timeline}</span>}
                                    </div>

                                    {/* Budget */}
                                    <div>
                                        <label className="rq-label" htmlFor="budget">
                                            Budget <span className="rq-optional">Optional</span>
                                        </label>
                                        <CustomSelect
                                            name="budget"
                                            value={form.budget}
                                            onChange={handleChange}
                                            placeholder="Select range"
                                            options={[
                                                { label: "< ₹50,000", value: "under50k" },
                                                { label: "₹50,000 – ₹1,00,000", value: "50k-1L" },
                                                { label: "₹1,00,000+", value: "1L+" },
                                                { label: "Let's discuss", value: "discuss" },
                                            ]}
                                        />
                                    </div>
                                </motion.div>

                                {/* Divider */}
                                <div className="rq-section-divider" />

                                {/* Submit row */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "20px",
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                                        <button
                                            type="submit"
                                            className="rq-btn"
                                            disabled={loading}
                                        >
                                            {loading ? "Sending..." : "Request Execution"}
                                            {!loading && (
                                                <span style={{ display: "inline-block" }}>{"→"}</span>
                                            )}
                                        </button>

                                        <p style={{
                                            fontFamily: "'DM Mono', monospace",
                                            fontSize: "9px",
                                            letterSpacing: "0.16em",
                                            textTransform: "uppercase",
                                            color: "#666666",
                                        }}>
                                            Response within 24–48h
                                        </p>
                                    </div>

                                    <p style={{
                                        fontFamily: "'DM Mono', monospace",
                                        fontSize: "9px",
                                        letterSpacing: "0.14em",
                                        textTransform: "uppercase",
                                        color: "#666666",
                                    }}>
                                        We don't share your information. Ever.
                                    </p>
                                </motion.div>

                            </motion.form>

                        )}
                    </AnimatePresence>
                </div>
            </main>
            <Footer />
        </>
    );
}