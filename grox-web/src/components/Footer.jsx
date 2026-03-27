export default function Footer() {
  return (
    <>
      <style>{`
        .footer-tagline {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(2rem, 5vw, 3.2rem);
          text-transform: uppercase;
          letter-spacing: -0.015em;
          line-height: 0.9;
          color: #cfcfcf;
        }

        .footer-tagline span {
          color: #dc2626;
          opacity: 1;
          text-shadow: 0 0 14px rgba(220,38,38,0.25);
        }

        .footer-copy {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #6a6a6a;
          transition: color 0.18s ease;
        }

        .footer-copy:hover {
          color: #9a9a9a;
        }

        .footer-label {
          font-family: 'DM Mono', monospace;
          font-size: 8.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #7a7a7a;
        }

        .footer-brand img {
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .footer-brand img:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
      `}</style>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>

        {/* ── Statement strip ── */}
        <div
          className="max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-20"
          style={{
            paddingTop: "clamp(3.5rem, 7vw, 5.5rem)",
            paddingBottom: "clamp(2.5rem, 4vw, 3.5rem)",
          }}
        >
          {/* Top */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-10 mb-16 sm:mb-18">
            
            {/* Left — closing statement */}
            <p className="footer-tagline">
              Built to<br />
              <span>Execute.</span>
            </p>

            {/* Right — brand */}
            <div className="footer-brand flex flex-col items-start sm:items-end gap-3">
              <img
                src="./grox.png"
                alt="GROX"
                width="56"
                style={{ opacity: 0.65 }}
              />
              <p className="footer-label">Execution Company</p>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: "1.5px",
              background:
                "linear-gradient(to right, rgba(220,38,38,0.35), rgba(255,255,255,0.06) 40%, transparent)",
              marginBottom: "22px",
            }}
          />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

            <p className="footer-copy">
              © {new Date().getFullYear()} GROX. All rights reserved.
            </p>

            <div className="flex items-center gap-2">
              <span
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "#dc2626",
                  opacity: 0.7,
                  flexShrink: 0,
                }}
              />
              <p className="footer-label">
                No chaos. No delays. No noise.
              </p>
            </div>

          </div>
        </div>

      </footer>
    </>
  );
}