export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { label: "Home",              href: "/"          },
    { label: "Selected Work",     href: "/#work"     },
    { label: "Services",          href: "/#services" },
    { label: "Process",           href: "/#process"  },
    { label: "Request Execution", href: "/request"   },
  ];

  const socials = [
    {
      label: "Instagram",
      handle: "@grox.tech",
      href: "https://instagram.com/grox.tech",
    },
    {
      label: "LinkedIn",
      handle: "GROX",
      href: "https://linkedin.com/company/grox",
    },
    {
      label: "Email",
      handle: "groxindia.business@gmail.com",
      href: "mailto:groxindia.business@gmail.com",
    },
  ];

  return (
    <>
      <style>{`
        .footer-tagline {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 5vw, 3.4rem);
          text-transform: uppercase;
          letter-spacing: -0.015em;
          line-height: 0.92;
          color: #f0f0f0;
        }
        .footer-tagline span {
          color: #dc2626;
        }

        .footer-col-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 20px;
          display: block;
        }

        .footer-nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #909090;
          text-decoration: none;
          display: block;
          padding: 6px 0;
          line-height: 1;
          transition: color 0.16s ease;
        }
        .footer-nav-link:hover { color: #f0f0f0; }

        .footer-nav-link-cta {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #dc2626;
          text-decoration: none;
          display: block;
          padding: 6px 0;
          margin-top: 4px;
          transition: opacity 0.16s ease;
        }
        .footer-nav-link-cta:hover { opacity: 0.75; }

        .footer-social-label {
          font-family: 'DM Mono', monospace;
          font-size: 8.5px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #555;
          display: block;
          margin-bottom: 5px;
        }

        .footer-social-handle {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #909090;
          text-decoration: none;
          transition: color 0.16s ease;
          word-break: break-all;
          display: block;
        }
        .footer-social-handle:hover { color: #f0f0f0; }

        .footer-copy {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #555;
        }

        .footer-badge {
          font-family: 'DM Mono', monospace;
          font-size: 8.5px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #444;
        }

        .footer-brand-label {
          font-family: 'DM Mono', monospace;
          font-size: 8.5px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #444;
        }
      `}</style>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div
          className="max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-20"
          style={{
            paddingTop: "clamp(3.5rem, 8vw, 6rem)",
            paddingBottom: "clamp(2rem, 4vw, 3rem)",
          }}
        >

          {/* ── Top block ── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-14 md:mb-16">

            {/* Left — tagline + logo */}
            <div className="md:col-span-4 flex flex-col justify-between gap-10">
              <p className="footer-tagline">
                Built to<br />
                <span>Execute.</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <img
                  src="./grox.png"
                  alt="GROX"
                  width="54"
                  style={{ opacity: 0.7 }}
                />
                <p className="footer-brand-label">Execution Company</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-3 md:col-start-6">
              <span className="footer-col-label">Navigation</span>
              <nav style={{ display: "flex", flexDirection: "column" }}>
                {navLinks.map(({ label, href }) =>
                  label === "Request Execution" ? (
                    <a key={href} href={href} className="footer-nav-link-cta">
                      {label} {"→"}
                    </a>
                  ) : (
                    <a key={href} href={href} className="footer-nav-link">
                      {label}
                    </a>
                  )
                )}
              </nav>
            </div>

            {/* Contact */}
            <div className="md:col-span-3 md:col-start-10">
              <span className="footer-col-label">Contact</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                {socials.map(({ label, handle, href }) => (
                  <div key={label}>
                    <span className="footer-social-label">{label}</span>
                    < a
                      href={href}
                      target={label !== "Email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="footer-social-handle"
                    >
                      {handle}
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Divider ── */}
          <div
            style={{
              height: "1px",
              background:
                "linear-gradient(to right, rgba(220,38,38,0.3), rgba(255,255,255,0.06) 45%, transparent)",
              marginBottom: "22px",
            }}
          />

          {/* ── Bottom bar ── */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="footer-copy">
              © {year} GROX. All rights reserved.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{
                width: "4px", height: "4px",
                borderRadius: "50%",
                background: "#dc2626",
                opacity: 0.65,
                flexShrink: 0,
              }} />
              <p className="footer-badge">No chaos. No delays. No noise.</p>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}