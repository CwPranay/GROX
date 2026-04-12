import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import StructuredData, { generateBreadcrumbSchema } from "../components/StructuredData";
import Footer from "../components/Footer";

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap";

const services = [
  {
    title: "Short-Form Content",
    description: "Reels, TikToks, and YouTube Shorts edited for maximum engagement. Fast turnaround, consistent quality."
  },
  {
    title: "Long-Form Videos",
    description: "YouTube videos, podcasts, and tutorials. Professional editing with pacing, graphics, and sound design."
  },
  {
    title: "Thumbnail Design",
    description: "Eye-catching thumbnails that drive clicks. Designed to stand out in feeds and search results."
  },
  {
    title: "Content at Volume",
    description: "Consistent output for creators who publish regularly. Batch editing, templates, and streamlined workflows."
  }
];

const benefits = [
  { title: "Fast Turnaround", desc: "48-hour average delivery. Keep your content calendar on track." },
  { title: "Consistent Quality", desc: "Every video edited to the same high standard. No surprises." },
  { title: "Creator-Focused", desc: "We understand creator workflows. No corporate overhead." },
  { title: "Scalable Output", desc: "From 1 video to 20+ per month. We scale with you." }
];

export default function VideoEditingServices() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://grox.tech" },
    { name: "Video Editing Services for Creators", url: "https://grox.tech/video-editing-services-creators" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Video Editing Services",
    "provider": {
      "@type": "Organization",
      "name": "GROX"
    },
    "description": "Professional video editing services for content creators. Short-form and long-form video editing, thumbnail design, and content production at volume.",
    "audience": {
      "@type": "Audience",
      "audienceType": "Content Creators"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, serviceSchema]
  };

  return (
    <>
      <SEO
        title="Professional Video Editing Services for Creators | GROX"
        description="High-quality video editing for YouTubers, creators, and brands. Fast delivery and engaging edits that boost views."
      />
      <StructuredData data={pageSchema} />

      <style>{`
        @import url('${FONT_URL}');
        .landing-page {
          background-color: #070707;
          min-height: 100vh;
        }
      `}</style>

      <Navbar />
      <main className="landing-page">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-20">

          {/* Hero Section */}
          <section style={{ paddingTop: "clamp(6rem, 14vw, 10rem)", paddingBottom: "clamp(4rem, 8vw, 6rem)" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
                <span style={{ display: "block", width: "24px", height: "1px", background: "#dc2626" }} />
                <p style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#888888",
                }}>
                  Video Editing for Creators
                </p>
              </div>

              <h1 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(3rem, 10vw, 6.5rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                lineHeight: 0.92,
                color: "#f0f0f0",
                marginBottom: "28px",
              }}>
                Video Editing<br />
                Built for<br />
                <span style={{ color: "#dc2626" }}>Creators</span>
              </h1>

              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#b0b0b0",
                maxWidth: "520px",
                marginBottom: "16px",
              }}>
                Professional video editing services for content creators. Short-form and long-form editing, thumbnail design, and content production at volume.
              </p>

              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#666666",
                marginBottom: "40px",
              }}>
                Fast turnaround • Consistent quality • Creator-focused
              </p>

              <a
                href="/request"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  backgroundColor: "#dc2626",
                  padding: "17px 36px",
                  clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#b91c1c";
                  e.currentTarget.style.boxShadow = "0 0 28px rgba(220,38,38,0.35)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#dc2626";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Get Started
                <span>→</span>
              </a>
            </motion.div>
          </section>

          {/* Services Section */}
          <section style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "clamp(4rem, 8vw, 6rem)",
            paddingBottom: "clamp(4rem, 8vw, 6rem)",
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                lineHeight: 0.95,
                color: "#e0e0e0",
                marginBottom: "clamp(2.5rem, 5vw, 4rem)",
              }}>
                What We Edit
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                    style={{
                      borderLeft: "1px solid rgba(220,38,38,0.2)",
                      paddingLeft: "24px",
                    }}
                  >
                    <h3 style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.4rem",
                      textTransform: "uppercase",
                      color: "#cfcfcf",
                      marginBottom: "12px",
                    }}>
                      {service.title}
                    </h3>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13.5px",
                      lineHeight: 1.75,
                      color: "#888888",
                    }}>
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Benefits Section */}
          <section style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "clamp(4rem, 8vw, 6rem)",
            paddingBottom: "clamp(4rem, 8vw, 6rem)",
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                lineHeight: 0.95,
                color: "#e0e0e0",
                marginBottom: "clamp(2.5rem, 5vw, 4rem)",
              }}>
                Why Creators<br />
                <span style={{ color: "#dc2626" }}>Choose GROX</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                    style={{
                      borderTop: "1px solid rgba(220,38,38,0.3)",
                      paddingTop: "20px",
                    }}
                  >
                    <h3 style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.3rem",
                      textTransform: "uppercase",
                      color: "#cfcfcf",
                      marginBottom: "10px",
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      lineHeight: 1.7,
                      color: "#888888",
                    }}>
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* How It Works */}
          <section style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "clamp(4rem, 8vw, 6rem)",
            paddingBottom: "clamp(4rem, 8vw, 6rem)",
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                lineHeight: 0.95,
                color: "#e0e0e0",
                marginBottom: "clamp(2.5rem, 5vw, 4rem)",
              }}>
                How It Works
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { num: "01", title: "Send Footage", desc: "Upload your raw footage and provide editing notes. Simple and structured." },
                  { num: "02", title: "We Edit", desc: "Professional editing with pacing, graphics, sound design, and color grading." },
                  { num: "03", title: "You Publish", desc: "Receive your edited video within 48 hours. Ready to upload and publish." }
                ].map((step, i) => (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + i * 0.1, ease: "easeOut" }}
                  >
                    <p style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#dc2626",
                      marginBottom: "12px",
                    }}>
                      {step.num}
                    </p>
                    <h3 style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      textTransform: "uppercase",
                      color: "#cfcfcf",
                      marginBottom: "12px",
                    }}>
                      {step.title}
                    </h3>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13.5px",
                      lineHeight: 1.75,
                      color: "#888888",
                    }}>
                      {step.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* CTA Section */}
          <section style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "clamp(4rem, 8vw, 6rem)",
            paddingBottom: "clamp(4rem, 8vw, 6rem)",
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              style={{ textAlign: "center" }}
            >
              <h2 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.2rem, 6vw, 4rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.01em",
                lineHeight: 0.95,
                color: "#e0e0e0",
                marginBottom: "24px",
              }}>
                Ready to Scale<br />
                <span style={{ color: "#dc2626" }}>Your Content?</span>
              </h2>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                lineHeight: 1.8,
                color: "#888888",
                marginBottom: "40px",
                maxWidth: "480px",
                marginLeft: "auto",
                marginRight: "auto",
              }}>
                Get professional video editing that keeps your content calendar on track.
              </p>
              <a
                href="/request"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  backgroundColor: "#dc2626",
                  padding: "17px 36px",
                  clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#b91c1c";
                  e.currentTarget.style.boxShadow = "0 0 28px rgba(220,38,38,0.35)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#dc2626";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Request Quote
                <span>→</span>
              </a>
            </motion.div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
