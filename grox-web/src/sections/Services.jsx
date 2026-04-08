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
          color: #888888;
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
          color: #888888;
        }

        .svc-head-primary {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          text-transform: uppercase;
          line-height: 1;
          color: #e0e0e0;
        }

        .svc-head-secondary {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: clamp(1.3rem, 2.8vw, 1.9rem);
          text-transform: uppercase;
          color: #9a9a9a;
        }

        .svc-head-tertiary {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: clamp(1.1rem, 2.4vw, 1.6rem);
          text-transform: uppercase;
          color: #7a7a7a;
        }

        .svc-tag {
          font-family: 'DM Mono', monospace;
          font-size: 8.5px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #888888;
        }

        .svc-tag-active {
          font-family: 'DM Mono', monospace;
          font-size: 8.5px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #dc2626;
        }

        .svc-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          line-height: 1.85;
          color: #888888;
        }

        .svc-body-primary {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          line-height: 1.85;
          color: #8a8a8a;
        }

        .svc-layer-label {
          font-family: 'DM Mono', monospace;
          font-size: 8px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #666666;
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

        .svc-row {
          transition: transform 0.25s ease, opacity 0.25s ease;
          opacity: 0.85;
        }

        .svc-row:hover {
          transform: translateY(-3px);
          opacity: 1;
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
            transition={{ duration: 0.7, ease: "easeOut" }}
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
              Not a service list. Three execution layers — each one built to deliver outcomes with structure and control.
            </p>
          </motion.div>

          {/* Layout */}
          <div className="grid md:grid-cols-12">

            <div className="hidden md:flex md:col-span-1 items-center justify-center">
              <p className="svc-layer-label">Execution System</p>
            </div>

            <div className="md:col-span-11 flex flex-col">

              {/* Layer 1 */}
              <motion.div 
                ref={layer1Ref}
                initial={{ opacity: 0, y: 20 }}
                animate={layer1Visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="svc-row grid md:grid-cols-12 py-12 border-b border-white/5"
              >
                <div className="md:col-span-3">
                  <p className="svc-tag-active mb-4">Layer 01</p>
                </div>

                <div className="md:col-span-5 md:px-10">
                  <p className="svc-head-primary mb-5">
                    Design<br />Execution
                  </p>
                  <p className="svc-body-primary">
                    Visual systems, thumbnails, and brand assets executed with clarity and consistency — not scattered design tasks.
                  </p>
                </div>

                <div className="md:col-span-4 md:pl-10">
                  <p className="svc-body">
                    Brand identity. UI design. Marketing assets. Visual systems that scale.
                  </p>
                </div>
              </motion.div>

              {/* Layer 2 */}
              <motion.div 
                ref={layer2Ref}
                initial={{ opacity: 0, y: 20 }}
                animate={layer2Visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="svc-row grid md:grid-cols-12 py-10 border-b border-white/5"
              >
                <div className="md:col-span-3">
                  <p className="svc-tag mb-4">Layer 02</p>
                </div>

                <div className="md:col-span-5 md:px-10">
                  <p className="svc-head-secondary mb-4">
                    Development Execution
                  </p>
                  <p className="svc-body">
                    Websites and interfaces built as systems — structured, scalable, and engineered to perform beyond launch.
                  </p>
                </div>

                <div className="md:col-span-4 md:pl-10">
                  <p className="svc-body">
                    Web builds. Landing pages. Component systems. Interfaces that hold up.
                  </p>
                </div>
              </motion.div>

              {/* Layer 3 */}
              <motion.div 
                ref={layer3Ref}
                initial={{ opacity: 0, y: 20 }}
                animate={layer3Visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="svc-row grid md:grid-cols-12 py-10"
              >
                <div className="md:col-span-3">
                  <p className="svc-tag mb-4">Layer 03</p>
                </div>

                <div className="md:col-span-5 md:px-10 md:pl-16">
                  <p className="svc-head-tertiary mb-3">
                    Content Execution
                  </p>
                  <p className="svc-body">
                    Short-form edits and videos produced with speed, consistency, and delivery discipline — not creator chaos.
                  </p>
                </div>

                <div className="md:col-span-4 md:pl-10 flex items-end">
                  <p className="svc-body">
                    Reels. Edits. Thumbnails. Content at volume.
                  </p>
                </div>
              </motion.div>

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