import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Services() {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [layer1Ref, layer1Visible] = useScrollAnimation();
  const [layer2Ref, layer2Visible] = useScrollAnimation();
  const [layer3Ref, layer3Visible] = useScrollAnimation();

  return (
    <>
      <style>{`
        .svc-section-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #888;
        }

        .svc-h2 {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 0.95;
          color: #e0e0e0;
          font-size: clamp(2.4rem, 6vw, 4rem);
        }

        .svc-anchor-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          line-height: 1.85;
          color: #888;
        }

        .svc-head {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 3.5vw, 2.2rem);
          text-transform: uppercase;
          line-height: 1;
          color: #e0e0e0;
          transition: transform 0.25s ease;
        }

        .svc-tag {
          font-family: 'DM Mono', monospace;
          font-size: 8.5px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #888;
          transition: color 0.25s ease;
        }

        .svc-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          line-height: 1.85;
          color: #888;
        }

        .svc-layer-label {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #666;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }

        .svc-footnote {
          font-family: 'DM Mono', monospace;
          font-size: 9.5px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #8a8a8a;
        }

        /* 🔥 PREMIUM ROW */
        .svc-row {
          position: relative;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          opacity: 0.85;
          border-left: 1px solid rgba(255,255,255,0.05);
          padding-left: 20px;
        }

        .svc-row::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 2px;
          background: transparent;
          transition: background 0.3s ease;
        }

        .svc-row:hover {
          transform: translateY(-4px) scale(1.01);
          opacity: 1;
        }

        .svc-row:hover::before {
          background: #dc2626;
          box-shadow: 0 0 12px rgba(220,38,38,0.6);
        }

        .svc-row:hover .svc-tag {
          color: #dc2626;
        }

        .svc-row:hover .svc-head {
          transform: translateX(4px);
        }
      `}</style>

      <section
        id="services"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
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
            transition={{ duration: 0.7 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 sm:mb-20"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-6 h-px" style={{ background: "#dc2626" }} />
                <p className="svc-section-label">Execution Layers</p>
              </div>
              <h2 className="svc-h2">
                What We<br />
                <span style={{ color: "#dc2626" }}>Execute</span>
              </h2>
            </div>
            <p className="svc-anchor-body" style={{ maxWidth: "280px" }}>
              Not a service list. Three execution layers — built for outcomes.
            </p>
          </motion.div>

          {/* Layout */}
          <div className="grid md:grid-cols-12">

            <div className="hidden md:flex md:col-span-1 items-center justify-center">
              <p className="svc-layer-label">Execution System</p>
            </div>

            <div className="md:col-span-11 flex flex-col">

              {[
                {
                  ref: layer1Ref,
                  visible: layer1Visible,
                  title: "Design Execution",
                  desc: "Visual systems and brand assets executed with clarity.",
                  points: "Brand identity. UI design. Marketing assets."
                },
                {
                  ref: layer2Ref,
                  visible: layer2Visible,
                  title: "Development Execution",
                  desc: "Web systems built structured and scalable.",
                  points: "Web builds. Landing pages. Interfaces."
                },
                {
                  ref: layer3Ref,
                  visible: layer3Visible,
                  title: "Content Execution",
                  desc: "Content produced with speed and consistency.",
                  points: "Reels. Edits. Thumbnails."
                }
              ].map((layer, i) => (
                <motion.div
                  key={i}
                  ref={layer.ref}
                  initial={{ opacity: 0, y: 20 }}
                  animate={layer.visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className={`svc-row grid md:grid-cols-12 py-10 ${i !== 2 ? "border-b border-white/5" : ""}`}
                >
                  <div className="md:col-span-3">
                    <p className="svc-tag mb-4">Layer 0{i + 1}</p>
                  </div>

                  <div className="md:col-span-5 md:px-10">
                    <p className="svc-head mb-4">{layer.title}</p>
                    <p className="svc-body">{layer.desc}</p>
                  </div>

                  <div className="md:col-span-4 md:pl-10 flex items-end">
                    <p className="svc-body">{layer.points}</p>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center gap-4 mt-16 sm:mt-20 pt-6 border-t border-white/5">
            <span className="svc-footnote">
              Three layers. One system. Zero chaos.
            </span>
            <div
              className="flex-1 h-px"
              style={{
                background: "linear-gradient(to right, rgba(220,38,38,0.35), transparent)"
              }}
            />
          </div>

        </div>
      </section>
    </>
  );
}