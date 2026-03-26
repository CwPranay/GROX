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
          font-size: clamp(1.3rem, 3vw, 1.75rem);
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.1;
          color: #242424;
        }

        .why-rejection-strike {
          position: relative;
          display: inline-block;
          color: #2e2e2e;
        }
        .why-rejection-strike::after {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 1px;
          background: rgba(220,38,38,0.3);
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
          color: #6a6a6a;
        }

        .why-resolution {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          text-transform: uppercase;
          letter-spacing: -0.01em;
          line-height: 1;
          color: #e0e0e0;
        }

        .why-resolution span {
          color: #dc2626;
        }

        .why-footnote {
          font-family: 'DM Mono', monospace;
          font-size: 9.5px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #6a6a6a;
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

          {/* ── Header row ── */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 sm:mb-24">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="block w-6 h-px" style={{ background: "#dc2626" }} />
                <p className="why-section-label">The Model</p>
              </div>
              <h2 className="why-h2">
                Why This<br />
                <span style={{ color: "#dc2626" }}>Model Works</span>
              </h2>
            </div>
          </div>

          {/* ── Main content — 2 col desktop ── */}
          <div className="grid md:grid-cols-12 gap-0 md:gap-20">

            {/* Left col — rejection statements */}
            <div className="md:col-span-5 mb-14 md:mb-0">

              <p className="why-body mb-8">
                Most agencies give you access to people.<br />
                GROX gives you access to output.
              </p>

              {/* Struck-through rejections */}
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

              <p className="why-body" style={{ color: "#282828" }}>
                None of the above.
              </p>
            </div>

            {/* Right col — the actual model */}
            <div className="md:col-span-7 flex flex-col justify-between gap-12">

              {/* Problem block */}
              <div>
                <p
                  className="why-body mb-1"
                  style={{ color: "#252525", fontSize: "10px", fontFamily: "'DM Mono', monospace", letterSpacing: "0.18em", textTransform: "uppercase" }}
                >
                  The problem with most agencies
                </p>
                <div
                  className="h-px mb-5"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                />
                <p className="why-strong-line">
                  You become the project manager.
                  You chase updates. You re-explain context.
                  You follow up until something ships.
                </p>
              </div>

              {/* Divider with label */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.04)" }} />
                <p className="why-footnote">GROX is different</p>
                <div className="w-8 h-px" style={{ background: "rgba(220,38,38,0.3)" }} />
              </div>

              {/* Resolution */}
              <div>
                <p
                  className="why-body mb-4"
                  style={{ color: "#252525", fontSize: "10px", fontFamily: "'DM Mono', monospace", letterSpacing: "0.18em", textTransform: "uppercase" }}
                >
                  How it actually works
                </p>
                <div
                  className="h-px mb-6"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                />
                <p className="why-resolution mb-4">
                  You submit.<br />
                  <span>We own it.</span>
                </p>
                <p className="why-body mt-6" style={{ maxWidth: "400px" }}>
                  Structure, speed, and accountability — built into the system.
                  Not promised. Not managed by you.
                  Just how it runs.
                </p>
              </div>

            </div>
          </div>

          {/* ── Footer ── */}
          <div
            className="flex items-center gap-4 mt-20 sm:mt-24"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "24px" }}
          >
            <span className="why-footnote">Built to remove you from the process</span>
            <div
              className="flex-1 h-px"
              style={{ background: "linear-gradient(to right, rgba(220,38,38,0.2), transparent)" }}
            />
          </div>

        </div>
      </section>
    </>
  );
}