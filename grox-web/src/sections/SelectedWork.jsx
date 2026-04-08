import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function SelectedWork() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();

  const projects = [
    {
      index: "01",
      title: "DriftCoffee",
      description:
        "Execution system for a local cafe brand — landing, ordering flow, and structured delivery.",
      tag: "Brand + Web",
      href: "/work",
      status: "live",
    },
    {
      index: "02",
      title: "Fitness Brand",
      description:
        "Landing and conversion system designed for a local gym — focused on signups and onboarding flow.",
      tag: "Web + Conversion",
      href: "/work",
      status: "live",
    },
    {
      index: "03",
      title: "Execution System",
      description: "Upcoming execution system — currently in development.",
      tag: "In Development",
      href: null,
      status: "upcoming",
    },
  ];

  return (
    <>
      <style>{`
        .work-section-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #888888;
        }

        .work-h2 {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 0.95;
          color: #e0e0e0;
          font-size: clamp(2.4rem, 6vw, 4rem);
        }

        .work-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          line-height: 1.8;
          color: #888888;
          max-width: 280px;
        }

        .project-row {
          display: grid;
          grid-template-columns: 40px 1fr auto;
          align-items: center;
          gap: 0 24px;
          padding: 22px 0;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        @media (min-width: 640px) {
          .project-row {
            grid-template-columns: 48px 1fr auto;
            gap: 0 32px;
            padding: 26px 0;
          }
        }

        .project-row:hover .proj-index {
          color: #dc2626;
        }

        .project-row:hover .proj-title {
          color: #ffffff;
          transform: translateX(4px);
        }

        .project-row:hover .proj-arrow {
          opacity: 1;
          transform: translateX(4px);
        }

        .project-row:hover .proj-desc {
          color: #9a9a9a;
        }

        .proj-index {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.16em;
          color: #888888;
        }

        .proj-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: clamp(1.3rem, 3.5vw, 1.8rem);
          text-transform: uppercase;
          color: #cfcfcf;
          transition: all 0.2s ease;
          margin-bottom: 6px;
        }

        .proj-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          line-height: 1.6;
          color: #888888;
          max-width: 460px;
          transition: color 0.2s ease;
        }

        .proj-tag {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #888888;
        }

        .proj-tag-upcoming {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #dc2626;
          opacity: 0.6;
        }

        .proj-arrow {
          color: #dc2626;
          opacity: 0;
          margin-left: 8px;
          transition: all 0.2s ease;
        }

        .work-cta {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #888888;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          position: relative;
        }

        .work-cta::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background: #dc2626;
          transition: width 0.3s ease;
        }

        .work-cta:hover {
          color: #cfcfcf;
        }

        .work-cta:hover::after {
          width: 100%;
        }

        .cta-arrow {
          color: #dc2626;
          transition: transform 0.2s ease;
        }

        .work-cta:hover .cta-arrow {
          transform: translateX(4px);
        }

        .work-footnote {
          font-family: 'DM Mono', monospace;
          font-size: 9.5px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #888888;
        }
      `}</style>

      <section
        id="work"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          paddingTop: "clamp(4rem, 10vw, 7rem)",
          paddingBottom: "clamp(4rem, 10vw, 7rem)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-20">

          {/* Header */}
          <motion.div 
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 sm:mb-20"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-6 h-px" style={{ background: "#dc2626" }} />
                <p className="work-section-label">Execution Output</p>
              </div>
              <h2 className="work-h2">
                Proof of<br />
                <span style={{ color: "#dc2626" }}>Execution</span>
              </h2>
            </div>
            <p className="work-sub">
              Work that shipped. Systems that run.
              No concepts — only delivered output.
            </p>
          </motion.div>

          {/* Projects */}
          <motion.div
            ref={projectsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={projectsVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {projects.map((project, i) => {
              const Tag = project.href ? "a" : "div";
              const tagProps = project.href ? { href: project.href } : {};

              return (
                <div key={project.index}>
                  <Tag
                    {...tagProps}
                    className="project-row"
                    style={{
                      opacity: project.status === "upcoming" ? 0.5 : 1,
                      pointerEvents: project.href ? "auto" : "none",
                    }}
                  >
                    <span className="proj-index">{project.index}</span>

                    <div>
                      <p className="proj-title">
                        {project.title}
                        {project.href && <span className="proj-arrow">→</span>}
                      </p>
                      <p className="proj-desc">{project.description}</p>
                    </div>

                    <span
                      className={
                        project.status === "upcoming"
                          ? "proj-tag-upcoming"
                          : "proj-tag"
                      }
                    >
                      {project.tag}
                    </span>
                  </Tag>

                  {i < projects.length - 1 && (
                    <div
                      style={{
                        height: "1px",
                        background: "rgba(255,255,255,0.05)",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </motion.div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-12 sm:mt-14 pt-6 border-t border-white/5">
            <a href="/work" className="work-cta">
              View all work
              <span className="cta-arrow">→</span>
            </a>

            <div className="flex items-center gap-2">
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#dc2626",
                  opacity: 0.6,
                }}
              />
              <p className="work-footnote">
                {projects.filter(p => p.status === "live").length} systems live
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}