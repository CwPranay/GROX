export default function WhyGrox() {
  return (
    <>
      <style>{`
        .why-section-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #6a6a6a;
        }

        .why-h2 {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 0.95;
          color: #e0e0e0;
          font-size: clamp(2.4rem, 6vw, 4rem);
        }

        .why-rejection {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 1.4rem;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          line-height: 1.1;
          color: #7a7a7a;
          opacity: 0.75;
          transition: all 0.2s ease;
        }

        .why-rejection:hover {
          opacity: 1;
        }

        .why-rejection-strike {
          position: relative;
          display: inline-block;
          color: #5a5a5a;
        }

        .why-rejection-strike::after {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 1.5px;
          background: rgba(220,38,38,0.6);
          transform: translateY(-50%);
        }

        .why-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          line-height: 1.85;
          color: #6a6a6a;
        }

        .why-strong-line {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.7;
          color: #5a5a5a;
        }

        .why-resolution {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(1.8rem, 4vw, 2.6rem);
          text-transform: uppercase;
          line-height: 0.9;
          letter-spacing: -0.02em;
          color: #e0e0e0;
          transition: transform 0.2s ease;
        }

        .why-resolution:hover {
          transform: translateY(-2px);
        }

        .why-resolution span {
          color: #dc2626;
        }

        .why-footnote {
          font-family: 'DM Mono', monospace;
          font-size: 9.5px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #8a8a8a;
        }

        .why-verdict {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          letter-spacing: 0.02em;
          color: #dc2626;
          text-shadow: 0 0 12px rgba(220,38,38,0.2);
        }
      `}</style>

      <section
        id="why"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          paddingTop: "clamp(4rem, 10vw, 7rem)",
          paddingBottom: "clamp(4rem, 10vw, 7rem)",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-20">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 sm:mb-20">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="block w-6 h-px" style={{ background: "#dc2626" }} />
                <p className="why-section-label">The Model</p>
              </div>
              <h2 className="why-h2">
                Why This<br />
                <span style={{ color: "#dc2626" }}>Model Works</span>
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-0 md:gap-16">

            {/* Left */}
            <div className="md:col-span-5 mb-14 md:mb-0">

              <p className="why-body mb-8">
                Most agencies give you access to people.<br />
                GROX gives you access to output.
              </p>

              <div
                className="flex flex-col gap-3 mb-10 pl-4"
                style={{ borderLeft: "1px solid rgba(255,255,255,0.04)" }}
              >
                <p className="why-rejection">
                  <span className="why-rejection-strike">A freelancer network</span>
                </p>
                <p className="why-rejection">
                  <span className="why-rejection-strike">A chat-heavy agency</span>
                </p>
                <p className="why-rejection">
                  <span className="why-rejection-strike">A team you manage</span>
                </p>
              </div>

              <p className="why-verdict mt-3">
                None of the above.
              </p>
            </div>

            {/* Right */}
            <div className="md:col-span-7 flex flex-col justify-between gap-8">

              <div>
                <p
                  className="why-body mb-1"
                  style={{
                    color: "#5a5a5a",
                    fontSize: "10px",
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase"
                  }}
                >
                  The problem with most agencies
                </p>
                <div className="h-px mb-3"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                />
                <p className="why-strong-line">
                  You become the project manager.
                  You chase updates. You re-explain context.
                  You follow up until something ships.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1 h-px"
                  style={{
                    background: "linear-gradient(to right, transparent, rgba(220,38,38,0.4), transparent)",
                    height: "1.5px"
                  }}
                />
                <p className="why-footnote">GROX is different</p>
                <div className="w-8 h-px"
                  style={{
                    background: "linear-gradient(to right, transparent, rgba(220,38,38,0.4), transparent)",
                    height: "1.5px"
                  }}
                />
              </div>

              <div>
                <p
                  className="why-body mb-3"
                  style={{
                    color: "#5a5a5a",
                    fontSize: "10px",
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase"
                  }}
                >
                  How it actually works
                </p>
                <div className="h-px mb-6"
                  style={{
                    background: "linear-gradient(to right, transparent, rgba(220,38,38,0.25), transparent)"
                  }}
                />
                <p className="why-resolution mb-4">
                  You submit.<br />
                  <span>We own it.</span>
                </p>
                <p className="why-body mt-6" style={{ maxWidth: "380px" }}>
                  Structure, speed, and accountability — built into the system.
                  Not promised. Not managed by you.
                  Just how it runs.
                </p>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div
            className="flex items-center gap-4 mt-20 sm:mt-24"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.04)",
              paddingTop: "24px"
            }}
          >
            <span className="why-footnote">
              Built to remove you from the process
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