import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Process() {
    const [headerRef, headerVisible] = useScrollAnimation();
    const [flowDesktopRef, flowDesktopVisible] = useScrollAnimation();
    const [flowMobileRef, flowMobileVisible] = useScrollAnimation();

    const steps = [
        {
            index: "01",
            label: "Intake",
            heading: "One entry point.",
            body: "Work enters through a single structured request. No scattered messages. No missing context. No back-and-forth before anything starts.",
            weight: "light",
        },
        {
            index: "02",
            label: "Execution",
            heading: "We run it internally.",
            body: "Tasks are handled by the right execution layer. You don't coordinate. You don't manage people. You don't follow up.",
            weight: "heavy",
        },
        {
            index: "03",
            label: "Delivery",
            heading: "Output. Accountable.",
            body: "Delivered through GROX — consistent in quality, timing, and ownership. Every time.",
            weight: "light",
        },
    ];

    return (
        <>
            <style>{`
        .process-step-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #666666;
        }

        .process-step-index {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.14em;
         color: #888888;
        }

        .process-step-heading-light {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: clamp(1.5rem, 3vw, 2rem);
          letter-spacing: -0.01em;
          line-height: 1;
          color: #bcbcbc;
          text-transform: uppercase;
        }

        .process-step-heading-heavy {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          letter-spacing: -0.02em;
          line-height: 0.95;
          color: #e8e8e8;
          text-transform: uppercase;
        }

        .process-step-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          line-height: 1.8;
         color: #888888; 
        }

        .process-step-body-heavy {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          line-height: 1.8;
          color: #b0b0b0;
        }

        .process-connector {
          width: 1px;
          background: linear-gradient(to bottom, rgba(220,38,38,0.25), rgba(255,255,255,0.04));
          flex-shrink: 0;
        }

        .process-connector-h {
          height: 1px;
          background: linear-gradient(to right, rgba(255,255,255,0.04), rgba(220,38,38,0.2), rgba(255,255,255,0.04));
          flex-shrink: 0;
        }

        .process-red-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #dc2626;
          opacity: 0.7;
          flex-shrink: 0;
        }

        .process-section-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #888888;
        }
          .process-step {
       transition: opacity 0.25s ease, transform 0.25s ease;
        }

     .process-step:hover {
      opacity: 1;
      transform: translateY(-2px);
      }

        .process-h2 {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 0.95;
          color: #e0e0e0;
          font-size: clamp(2.4rem, 6vw, 4rem);
        }

        .process-subtext {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          line-height: 1.8;
          color: #888888; 
          max-width: 280px
        }

        .process-footer-text {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #888888;
        }
      `}</style>

            <section
                id="process"
                className="relative overflow-hidden"
                style={{
                    borderTop: "1px solid rgba(255,255,255,0.04)",
                    paddingTop: "clamp(4rem, 10vw, 7rem)",
                    paddingBottom: "clamp(4rem, 10vw, 7rem)",
                }}
            >
                <div className="max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-20">

                    {/* ── Section header ── */}
                    <motion.div 
                        ref={headerRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={headerVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8 mb-16 sm:mb-20"
                    >
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="block w-6 h-px" style={{ background: "#dc2626" }} />
                                <p className="process-section-label">The System</p>
                            </div>
                            <h2 className="process-h2">
                                How Execution
                                <br />
                                <span style={{ color: "#dc2626" }}>Actually Runs</span>
                            </h2>
                        </div>
                        <p className="process-subtext">
                            Not a process you manage.
                            A flow that runs without friction —
                            from intake to delivery.
                        </p>
                    </motion.div>

                    {/* ── Desktop flow — staggered asymmetric ── */}
                    <motion.div 
                        ref={flowDesktopRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={flowDesktopVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="hidden md:block"
                    >
                        <div className="relative">

                            {/* Horizontal thread line */}
                            <div
                                className="absolute"
                                style={{
                                    top: "14px",
                                    opacity: 0.7,
                                    left: "0",
                                    right: "0",
                                    height: "1px",
                                    background: "linear-gradient(to right, rgba(255,255,255,0.03) 0%, rgba(220,38,38,0.15) 35%, rgba(220,38,38,0.3) 50%, rgba(220,38,38,0.15) 65%, rgba(255,255,255,0.03) 100%)",
                                }}
                            />

                            <div className="grid grid-cols-[1fr_1.6fr_1fr] gap-0">

                                {/* Step 01 — Intake */}
                                <div className="process-step" style={{ paddingRight: "48px", paddingTop: "0" }}>
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="process-red-dot" style={{ opacity: 0.35 }} />
                                        <p className="process-step-index">01 — Intake</p>
                                    </div>
                                    <p className="process-step-heading-light mb-4">
                                        One entry<br />point.
                                    </p>
                                    <p className="process-step-body">
                                        Work enters through a single structured request. No scattered messages. No missing context.
                                    </p>
                                </div>

                                {/* Step 02 — Execution (dominant) */}
                                <div className="process-step "
                                    style={{
                                        padding: "28px 40px",

                                        borderLeft: "1px solid rgba(220,38,38,0.12)",
                                        borderRight: "1px solid rgba(220,38,38,0.12)",
                                        marginTop: "-20px",
                                        background: "linear-gradient(to bottom, rgba(220,38,38,0.05), transparent)",
                                    }}
                                >
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="process-red-dot" />
                                        <p className="process-step-index" style={{ color: "#dc2626", opacity: 0.6 }}>02 — Execution</p>
                                    </div>
                                    <p className="process-step-heading-heavy mb-5">
                                        We run it<br />internally.
                                    </p>
                                    <p className="process-step-body-heavy">
                                        Tasks are handled by the right execution layer. You don't coordinate. You don't manage people. You don't follow up.
                                    </p>
                                </div>

                                {/* Step 03 — Delivery */}
                                <div className="process-step" style={{ paddingLeft: "48px", paddingTop: "0" }}>
                                    <div className="flex items-center gap-3 mb-8">
                                        <div className="process-red-dot" style={{ opacity: 0.35 }} />
                                        <p className="process-step-index">03 — Delivery</p>
                                    </div>
                                    <p className="process-step-heading-light mb-4">
                                        Output.<br />Accountable.
                                    </p>
                                    <p className="process-step-body">
                                        Delivered through GROX — consistent in quality, timing, and ownership. Every time.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </motion.div>

                    {/* ── Mobile flow — vertical stagger ── */}
                    <motion.div 
                        ref={flowMobileRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={flowMobileVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="md:hidden flex flex-col"
                    >
                        {steps.map((step, i) => (
                            <div key={step.index}>
                                <div
                                    style={{
                                        paddingLeft: step.weight === "heavy" ? "16px" : "0",
                                        borderLeft: step.weight === "heavy" ? "1px solid rgba(220,38,38,0.2)" : "none",
                                        paddingTop: i === 0 ? 0 : "36px",
                                        paddingBottom: "36px",
                                    }}
                                >
                                    <div className="flex items-center gap-3 mb-5">
                                        <div
                                            className="process-red-dot"
                                            style={{ opacity: step.weight === "heavy" ? 0.7 : 0.3 }}
                                        />
                                        <p className="process-step-index">
                                            {step.index} — {step.label}
                                        </p>
                                    </div>

                                    {step.weight === "heavy" ? (
                                        <>
                                            <p className="process-step-heading-heavy mb-4">{step.heading}</p>
                                            <p className="process-step-body-heavy">{step.body}</p>
                                        </>
                                    ) : (
                                        <>
                                            <p className="process-step-heading-light mb-4">{step.heading}</p>
                                            <p className="process-step-body">{step.body}</p>
                                        </>
                                    )}
                                </div>

                                {i < steps.length - 1 && (
                                    <div
                                        style={{
                                            height: "1px",
                                            background: "rgba(255,255,255,0.04)",
                                        }}
                                    />
                                )}
                            </div>
                        ))}
                    </motion.div>

                    {/* ── Footer line ── */}
                    <div
                        className="flex items-center gap-4 mt-20 sm:mt-24"
                        style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "24px" }}
                    >
                        <span className="process-footer-text">This is why GROX scales without chaos</span>
                        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(220,38,38,0.2), transparent)" }} />
                    </div>

                </div>
            </section>
        </>
    );
}