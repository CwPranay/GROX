import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import StructuredData, { generateBreadcrumbSchema } from "../components/StructuredData";
import Footer from "../components/Footer";

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap";

const features = [
  {
    title: "Conversion-Focused Design",
    description: "Landing pages built to convert visitors into members. Clear CTAs, streamlined signup flows, and mobile-first UX."
  },
  {
    title: "Membership Systems",
    description: "Integrated booking, class schedules, and member portals. Everything your gym needs to operate smoothly."
  },
  {
    title: "Fast & Responsive",
    description: "Optimized for speed and performance. Works flawlessly on all devices — desktop, tablet, and mobile."
  },
  {
    title: "SEO Optimized",
    description: "Built with local SEO in mind. Get found by potential members searching for gyms in your area."
  }
];

const process = [
  { step: "01", title: "Discovery", desc: "We understand your gym's goals, target audience, and unique selling points." },
  { step: "02", title: "Design", desc: "Create conversion-focused designs that reflect your brand and drive signups." },
  { step: "03", title: "Development", desc: "Build a fast, responsive website with integrated booking and membership features." },
  { step: "04", title: "Launch", desc: "Deploy your website and provide training on managing content and memberships." }
];

export default function GymWebsiteDevelopment() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://grox.com" },
    { name: "Gym Website Development India", url: "https://grox.com/gym-website-development-india" }
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Gym Website Development",
    "provider": {
      "@type": "Organization",
      "name": "GROX"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "description": "Professional gym website development services in India. Conversion-focused websites with membership systems, booking integration, and mobile-first design.",
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
        title="Gym Website Development India | Fitness Website Design — GROX"
        description="Professional gym website development in India. Conversion-focused fitness websites with membership systems, booking integration, and mobile-first design. Built to drive signups."
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
                  Gym Website Development India
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
                Gym Websites<br />
                Built to<br />
                <span style={{ color: "#dc2626" }}>Convert</span>
              </h1>

              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#b0b0b0",
                maxWidth: "520px",
                marginBottom: "16px",
              }}>
                Professional gym website development in India. Conversion-focused fitness websites with membership systems, booking integration, and mobile-first design.
              </p>

              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#666666",
                marginBottom: "40px",
              }}>
                Built to drive signups and grow your gym
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

          {/* Features Section */}
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
                What You Get
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
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
                      {feature.title}
                    </h3>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13.5px",
                      lineHeight: 1.75,
                      color: "#888888",
                    }}>
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Process Section */}
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
                How It Works
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {process.map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                    style={{
                      borderTop: "1px solid rgba(220,38,38,0.3)",
                      paddingTop: "20px",
                    }}
                  >
                    <p style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#dc2626",
                      marginBottom: "12px",
                    }}>
                      {item.step}
                    </p>
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

          {/* CTA Section */}
          <section style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "clamp(4rem, 8vw, 6rem)",
            paddingBottom: "clamp(4rem, 8vw, 6rem)",
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
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
                Ready to Grow<br />
                <span style={{ color: "#dc2626" }}>Your Gym?</span>
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
                Get a conversion-focused gym website that drives signups and grows your business.
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

        </div>
      </main>
      <Footer />
    </>
  );
}
