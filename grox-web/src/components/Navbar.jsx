import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home", num: "01" },
    { href: "/work", label: "Execution", num: "02" },
    { href: "#process", label: "Process", num: "03" },
  ];

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          color: #9a9a9a;
          text-transform: uppercase;
          transition: color 0.2s ease;
        }
        .nav-link:hover { color: #fff; }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #dc2626;
          transition: width 0.25s ease;
        }
        .nav-link:hover::after { width: 100%; }

        .login-btn {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: #dc2626;
          color: white;
          padding: 10px 18px;
          transition: all 0.2s ease;
        }
        .login-btn:hover {
          background: #b91c1c;
          box-shadow: 0 0 18px rgba(220,38,38,0.4);
        }

        .burger span {
          display: block;
          height: 1px;
          background: #aaa;
          margin: 6px 0;
          transition: 0.2s;
        }

        .mobile-menu {
          position: fixed;
          inset: 0;
          background: #050505;
          z-index: 60;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 40px 24px;
          transform: translateY(100%);
          transition: transform 0.45s ease;
        }
        .mobile-menu.open {
          transform: translateY(0);
        }

        .m-link {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 800;
          text-transform: uppercase;
          color: #e5e5e5;
          line-height: 1;
          transition: 0.2s;
        }

        .m-link:hover {
          color: #dc2626;
          transform: translateX(6px);
        }
      `}</style>

      <nav className="fixed top-0 w-full z-50">
        <div
          className="transition-all duration-300"
          style={{
            background: scrolled ? "rgba(7,7,7,0.9)" : "transparent",
            backdropFilter: scrolled ? "blur(10px)" : "none",
            borderBottom: scrolled
              ? "1px solid rgba(255,255,255,0.05)"
              : "none",
          }}
        >
          <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-[70px]">
            {/* Logo */}
            <img src="./grox.png" width="70" />

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-14">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right */}
            <div className="flex items-center gap-6">
              {/* Login FIXED */}
              <a href="/login" className="login-btn hidden md:block">
                Login
              </a>

              {/* Mobile menu */}
              <button
                className="burger md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="w-6" />
                <span className="w-4" />
              </button>
            </div>
          </div>
        </div>

       {/* Mobile Panel — half screen, slides from right */}
<div
  className={`fixed top-0 right-0 h-full w-[75%] max-w-[300px] z-50 flex flex-col transform transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
  }`}
  style={{ background: "#0a0a0a", borderLeft: "1px solid rgba(255,255,255,0.04)" }}
>
  {/* Top bar */}
  <div
    className="flex items-center justify-between px-5 flex-shrink-0"
    style={{ height: "64px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
  >
    <img src="./grox.png" alt="GROX" width="54" style={{ opacity: 0.8 }} />
    <button
      onClick={() => setMobileMenuOpen(false)}
      aria-label="Close menu"
      style={{
        position: "relative",
        width: "24px", height: "24px",
        background: "none", border: "none",
        cursor: "pointer", padding: 0,
      }}
    >
      <span style={{
        position: "absolute", top: "50%", left: "50%",
        width: "16px", height: "1px", background: "#3a3a3a",
        transform: "translate(-50%, -50%) rotate(45deg)",
        transition: "background 0.18s ease",
      }} />
      <span style={{
        position: "absolute", top: "50%", left: "50%",
        width: "16px", height: "1px", background: "#3a3a3a",
        transform: "translate(-50%, -50%) rotate(-45deg)",
        transition: "background 0.18s ease",
      }} />
    </button>
  </div>

  {/* Nav links — top-anchored, minimal */}
  <div className="flex flex-col px-5 pt-8 flex-1" style={{ gap: 0 }}>
    {[
      { href: "/home", label: "Home"  },
      { href: "/work",      label: "Execution"  },
      { href: "#process",  label: "Process"   },
    ].map(({ href, label }, i, arr) => (
      <div key={href}>
        <a
          href={href}
          onClick={() => setMobileMenuOpen(false)}
          style={{
            display: "block",
            fontFamily: "'DM Mono', monospace",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#9a9a9a",
            textDecoration: "none",
            padding: "16px 0",
            transition: "color 0.18s ease, padding-left 0.2s ease",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = "#c8c8c8";
            e.currentTarget.style.paddingLeft = "6px";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = "#2e2e2e";
            e.currentTarget.style.paddingLeft = "0px";
          }}
        >
          {label}
        </a>
        {i < arr.length - 1 && (
          <div style={{ height: "1px", background: "rgba(255,255,255,0.03)" }} />
        )}
      </div>
    ))}
  </div>

  {/* Footer */}
  <div
    className="flex items-center justify-between px-5 flex-shrink-0"
    style={{
      borderTop: "1px solid rgba(255,255,255,0.04)",
      paddingTop: "18px",
      paddingBottom: "24px",
    }}
  >
    <a
      href="/login"
      onClick={() => setMobileMenuOpen(false)}
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "9.5px",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "#9a9a9a",
        textDecoration: "none",
        transition: "color 0.18s ease",
      }}
      onMouseEnter={e => { e.currentTarget.style.color = "#666"; }}
      onMouseLeave={e => { e.currentTarget.style.color = "#252525"; }}
    >
      Login
    </a>
    <div className="flex items-center gap-2">
      <span style={{
        width: "4px", height: "4px",
        borderRadius: "50%",
        background: "#dc2626",
        opacity: 0.6,
        flexShrink: 0,
      }} />
      <span style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "8px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "#9a9a9a",
      }}>
        Grox
      </span>
    </div>
  </div>
</div>

{/* Overlay */}
{mobileMenuOpen && (
  <div
    className="fixed inset-0 z-40"
    style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(3px)" }}
    onClick={() => setMobileMenuOpen(false)}
  />
)}
      </nav>
    </>
  );
}