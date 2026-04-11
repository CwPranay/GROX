import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import StructuredData, { generateBreadcrumbSchema } from "../components/StructuredData";
import Footer from "../components/Footer";

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap";

function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeSection({ children, delay = 0 }) {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(14px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function useIsMobile() {
  const [mobile, setMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);
  return mobile;
}

const cases = [
  {
    id: "driftcoffee",
    index: "01",
    title: "DriftCoffee",
    subtitle: "Cafe Execution System",
    description:
      "Execution system for a local cafe brand — landing, ordering flow, and structured delivery.",
    problem: [
      "No structured digital experience",
      "No streamlined ordering system",
      "Weak mobile usability",
    ],
    execution: [
      "Landing page system",
      "Menu + ordering flow",
      "Mobile-first UX",
      "Visual consistency",
    ],
    outcome: [
      "Cleaner customer journey",
      "Faster ordering experience",
      "Structured brand presence",
    ],
    images: [
      { src: "/proof/driftcoffee-1.png", label: "Landing system",  desktopWidth: "100%",  desktopMarginLeft: "0"    },
      { src: "/proof/driftcoffee-2.png", label: "Ordering flow",   desktopWidth: "82%",   desktopMarginLeft: "auto" },
    ],
    link: "https://driftcoffee.vercel.app/",
    tag: "Brand + Web",
  },
  {
    id: "fitness",
    index: "02",
    title: "Fitness Brand",
    subtitle: "Conversion System",
    description:
      "Landing and conversion system designed for a local gym — focused on signups and onboarding flow.",
    problem: [
      "Low conversion landing page",
      "No clear CTA flow",
      "Poor onboarding experience",
    ],
    execution: [
      "Landing redesign",
      "CTA optimization",
      "Structured lead capture",
    ],
    outcome: [
      "Improved clarity",
      "Better signup flow",
      "Conversion-focused system",
    ],
    images: [
      { src: "/proof/gym-1.png", label: "Landing system",   desktopWidth: "100%", desktopMarginLeft: "0"    },
      { src: "/proof/gym-2.png", label: "Conversion flow",  desktopWidth: "78%",  desktopMarginLeft: "auto" },
    ],
    link: "https://gymwebsite-demo.vercel.app/",
    tag: "Web + Conversion",
  },
];

function ImageBlock({ img, isMobile, delay }) {
  const ref = useFadeIn();
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        transform: "translateY(10px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
        width: isMobile ? "100%" : img.desktopWidth,
        marginLeft: isMobile ? "0" : img.desktopMarginLeft,
      }}
    >
      <div style={{
        background: "#0f0f0f",
        border: "1px solid rgba(255,255,255,0.08)",
        overflow: "hidden",
        position: "relative",
      }}>
        {!loaded && (
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)",
              animation: "shimmer 2s infinite",
            }} />
          </div>
        )}
        <img
          src={img.src}
          alt={`${img.label} screenshot`}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={{
            width: "100%",
            display: "block",
            opacity: loaded ? 0.92 : 0,
            transform: "scale(1)",
            transition: "opacity 0.4s ease, transform 0.35s ease",
          }}
          onMouseEnter={e => {
            if (loaded) {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "scale(1.02)";
            }
          }}
          onMouseLeave={e => {
            if (loaded) {
              e.currentTarget.style.opacity = "0.92";
              e.currentTarget.style.transform = "scale(1)";
            }
          }}
        />
      </div>
      <p style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "9px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "#555",
        marginTop: "9px",
      }}>
        {img.label}
      </p>
    </div>
  );
}

function LiveLinkButton({ href }) {
  const [hovered, setHovered] = useState(false);

  return (
     < a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        fontFamily: "'DM Mono', monospace",
        fontSize: "10px",
        fontWeight: 500,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        textDecoration: "none",
        color: hovered ? "#fff" : "#e0e0e0",
        backgroundColor: hovered ? "#b91c1c" : "#dc2626",
        padding: "13px 24px",
        clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
        transition: "background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
        boxShadow: hovered
          ? "0 0 24px rgba(220,38,38,0.35), 0 0 8px rgba(220,38,38,0.2)"
          : "0 0 0 rgba(220,38,38,0)",
        whiteSpace: "nowrap",
      }}
    >
      View Live Project
      <span style={{
        display: "inline-block",
        transform: hovered ? "translateX(3px)" : "translateX(0)",
        transition: "transform 0.2s ease",
      }}>
        {"→"}
      </span>
    </a>
  );
}

function CaseStudy({ project, isLast }) {
  const isMobile = useIsMobile();

  return (
    <article style={{
      borderTop: "1px solid rgba(255,255,255,0.07)",
      paddingTop: "clamp(3.5rem, 8vw, 6rem)",
      paddingBottom: isLast ? 0 : "clamp(3.5rem, 8vw, 6rem)",
    }}>

      {/* Case header */}
      <FadeSection>
        <div className="grid md:grid-cols-12 gap-6 md:gap-0 mb-12 sm:mb-16">
          <div className="hidden md:block md:col-span-1">
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.16em",
              color: "#555",
              paddingTop: "6px",
            }}>
              {project.index}
            </p>
          </div>

          <div className="md:col-span-7 md:pr-16">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <span style={{
                width: "5px", height: "5px",
                borderRadius: "50%",
                background: "#dc2626",
                opacity: 0.7,
                flexShrink: 0,
              }} />
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(220,38,38,0.8)",
              }}>
                {project.index} — {project.tag}
              </p>
            </div>

            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.4rem)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 0.95,
              color: "#f0f0f0",
              marginBottom: "10px",
            }}>
              {project.title}
            </h2>

            <p style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              textTransform: "uppercase",
              letterSpacing: "0.01em",
              lineHeight: 1,
              color: "#666",
              marginBottom: "20px",
            }}>
              {project.subtitle}
            </p>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14.5px",
              lineHeight: 1.85,
              color: "#909090",
              maxWidth: "420px",
            }}>
              {project.description}
            </p>
          </div>
        </div>
      </FadeSection>

      {/* Problem / Execution / Outcome */}
      <FadeSection delay={60}>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 mb-12 sm:mb-16"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          {[
            { label: "Problem",   items: project.problem,   accent: false },
            { label: "Execution", items: project.execution, accent: true  },
            { label: "Outcome",   items: project.outcome,   accent: false },
          ].map((col, i) => (
            <div
              key={col.label}
              style={{
                padding: isMobile
                  ? "22px 0"
                  : `clamp(1.5rem, 3vw, 2.5rem) ${i === 0
                      ? `clamp(1.2rem, 2.5vw, 2.5rem) clamp(1.2rem, 2.5vw, 2.5rem) 0`
                      : "clamp(1.2rem, 2.5vw, 2.5rem)"}`,
                borderLeft: !isMobile && i > 0
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "none",
                borderTop: isMobile && i > 0
                  ? "1px solid rgba(255,255,255,0.06)"
                  : "none",
              }}
            >
              <p style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: col.accent ? "rgba(220,38,38,0.8)" : "#555",
                marginBottom: "16px",
              }}>
                {col.label}
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "11px" }}>
                {col.items.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <span style={{
                      width: "4px", height: "4px",
                      borderRadius: "50%",
                      background: col.accent ? "#dc2626" : "#555",
                      opacity: col.accent ? 0.8 : 0.5,
                      flexShrink: 0,
                      marginTop: "7px",
                    }} />
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13.5px",
                      lineHeight: 1.75,
                      color: col.accent ? "#c0c0c0" : "#909090",
                    }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* Visual proof label */}
      <FadeSection delay={100}>
        <p style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "9px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#555",
          marginBottom: isMobile ? "16px" : "22px",
        }}>
          Visual Proof
        </p>
      </FadeSection>

      {/* Images */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: isMobile ? "10px" : "clamp(0.75rem, 2vw, 1.25rem)",
      }}>
        {project.images.map((img, i) => (
          <ImageBlock
            key={img.src}
            img={img}
            isMobile={isMobile}
            delay={120 + i * 60}
          />
        ))}
      </div>

      {/* Live link row */}
      <FadeSection delay={220}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "24px",
            marginTop: isMobile ? "28px" : "40px",
          }}
        >
          <LiveLinkButton href={project.link} />

          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "9px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#444",
          }}>
            {project.tag}
          </p>
        </div>
      </FadeSection>
    </article>
  );
}

export default function WorkPage() {
  // Breadcrumb schema for Work page
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://grox.tech" },
    { name: "Work", url: "https://grox.tech/work" }
  ]);

  // Portfolio schema
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "GROX Work Portfolio",
    "description": "View GROX execution systems. Real projects, real outcomes. Design, development, and conversion systems built to deliver results.",
    "url": "https://grox.tech/work",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": cases.map((project, index) => ({
        "@type": "CreativeWork",
        "position": index + 1,
        "name": project.title,
        "description": project.description,
        "url": project.link,
        "creator": {
          "@type": "Organization",
          "name": "GROX"
        },
        "keywords": project.tag
      }))
    }
  };

  const workPageSchema = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, portfolioSchema]
  };

  return (
    <>
      <SEO 
        title="Work — GROX | Execution Systems That Ship"
        description="View GROX execution systems. Real projects, real outcomes. Design, development, and conversion systems built to deliver results."
      />
      <StructuredData data={workPageSchema} />
      <style>{`
        @import url('${FONT_URL}');
        .work-page {
          background-color: #070707;
          min-height: 100vh;
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

      <Navbar />
      <main className="work-page">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-20">

          {/* Page header */}
          <div style={{
            paddingTop: "clamp(6rem, 14vw, 10rem)",
            paddingBottom: "clamp(3.5rem, 8vw, 6rem)",
          }}>
            <FadeSection>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
                <span style={{ display: "block", width: "24px", height: "1px", background: "#dc2626" }} />
                <p style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#555",
                }}>
                  Execution Output
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
                <h1 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  lineHeight: 0.92,
                  color: "#f0f0f0",
                  fontSize: "clamp(3.2rem, 10vw, 7rem)",
                }}>
                  Work That<br />
                  <span style={{ color: "#dc2626" }}>Ships</span>
                </h1>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14.5px",
                  lineHeight: 1.8,
                  color: "#909090",
                  maxWidth: "300px",
                }}>
                  Systems built to deliver output —<br />not just look good.
                </p>
              </div>
            </FadeSection>
          </div>

          {/* Case studies */}
          {cases.map((project, i) => (
            <CaseStudy
              key={project.id}
              project={project}
              isLast={i === cases.length - 1}
            />
          ))}

          {/* Closing */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            paddingTop: "clamp(2.5rem, 6vw, 4.5rem)",
            paddingBottom: "clamp(3rem, 7vw, 5rem)",
            marginTop: "clamp(3.5rem, 8vw, 6rem)",
          }}>
            <FadeSection>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <p style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  lineHeight: 1,
                  color: "#666",
                }}>
                  Built for execution.{" "}
                  <span style={{ color: "#dc2626", opacity: 0.7 }}>
                    Expanded over time.
                  </span>
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{
                    width: "4px", height: "4px",
                    borderRadius: "50%",
                    background: "#dc2626",
                    opacity: 0.6,
                    flexShrink: 0,
                  }} />
                  <p style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "9px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#555",
                  }}>
                    More systems coming soon
                  </p>
                </div>
              </div>
            </FadeSection>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}