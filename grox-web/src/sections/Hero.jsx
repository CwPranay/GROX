import { useEffect, useRef } from "react";

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500&display=swap";

function useAnimatedLines(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.innerWidth < 1024) return;

    const ctx = canvas.getContext("2d");
    let animId;
    let w, h;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const lines = Array.from({ length: 22 }, (_, i) => ({
      x: (i / 21) * 1.2 - 0.1,
      speed: 0.00014 + Math.random() * 0.0001,
      offset: Math.random() * Math.PI * 2,
      amp: 0.06 + Math.random() * 0.1,
    }));

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 1;
      lines.forEach((line, i) => {
        const x = line.x * w;
        ctx.beginPath();
        for (let y = 0; y <= h; y += 4) {
          const wave =
            Math.sin(y * 0.005 + t * line.speed * 60 + line.offset) *
            line.amp * w * 0.15;
          const px = x + wave;
          y === 0 ? ctx.moveTo(px, y) : ctx.lineTo(px, y);
        }
        const alpha = i % 5 === 0 ? 0.14 : 0.04;
        const isRed = i % 11 === 0;
        ctx.strokeStyle = isRed
          ? `rgba(220,38,38,${alpha * 1.8})`
          : `rgba(255,255,255,${alpha})`;
        ctx.lineWidth = isRed ? 1 : 0.5;
        ctx.stroke();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);
}

const stats = [
  { num: "48h", label: "Avg. turnaround" },
  { num: "100%", label: "On-time delivery" },
  { num: "No BS", label: "Guaranteed" },
];

export default function Hero() {
  const canvasRef = useRef(null);
  useAnimatedLines(canvasRef);

  return (
    <>
      <style>{`
        @import url('${FONT_URL}');

        .hero-section {
          background-color: #070707;
          background-image:
            radial-gradient(ellipse 80% 40% at 50% 0%, rgba(220,38,38,0.07) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 8% 40%, rgba(220,38,38,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 95% 20%, rgba(220,38,38,0.04) 0%, transparent 60%);
        }

        .hero-noise::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.4;
          z-index: 0;
        }

        .cta-btn {
          position: relative;
          background-color: #dc2626;
          color: #fff;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 17px 40px;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
          transition: background-color 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 0 0 rgba(220,38,38,0);
          border: none;
          cursor: pointer;
          white-space: nowrap;
          width: 100%;
          text-align: center;
        }

        @media (min-width: 640px) {
          .cta-btn {
            width: auto;
          }
        }

        .cta-btn:hover {
          background-color: #b91c1c;
          box-shadow: 0 0 28px rgba(220,38,38,0.28), 0 0 8px rgba(220,38,38,0.15);
        }

        .cta-link {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #444;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: color 0.15s ease;
          width: 100%;
        }

        @media (min-width: 640px) {
          .cta-link {
            width: auto;
            justify-content: flex-start;
          }
        }

        .cta-link:hover { color: #e5e5e5; }
        .cta-arrow { color: #dc2626; transition: transform 0.15s ease; }
        .cta-link:hover .cta-arrow { transform: translateX(3px); }

        .ghost-text {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(5rem, 11vw, 10rem);
          color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.035);
          letter-spacing: -0.02em;
          user-select: none;
          line-height: 1;
        }

        .stat-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 1.35rem;
          color: #e8e8e8;
          letter-spacing: 0.04em;
          line-height: 1;
          margin-bottom: 5px;
        }

        .stat-label {
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #3a3a3a;
        }
      `}</style>

      <section className="hero-section hero-noise relative min-h-svh flex items-center overflow-hidden">

        {/* Canvas — desktop only */}
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="absolute right-0 top-0 h-full pointer-events-none hidden lg:block"
          style={{ width: "52%" }}
        />

        {/* Vignettes */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-1/3 pointer-events-none"
          style={{ background: "linear-gradient(to right, #070707 0%, transparent 100%)" }}
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-1/2 pointer-events-none hidden lg:block"
          style={{ background: "linear-gradient(to right, #070707 0%, transparent 35%, transparent 65%, #070707 100%)" }}
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to top, #070707, transparent)" }}
        />

        {/* Main content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center gap-0 lg:gap-0 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:py-0 lg:min-h-svh">

          {/* Left — copy */}
          <div className="flex-1 w-full lg:max-w-[560px]">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6 sm:mb-8 lg:mb-10">
              <span
                aria-hidden="true"
                className="block w-6 sm:w-7 h-px flex-shrink-0"
                style={{ backgroundColor: "#dc2626" }}
              />
              <p
                className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium"
                style={{ color: "#555", fontFamily: "'DM Mono', monospace" }}
              >
                Creative Execution Company
              </p>
            </div>

            {/* Headline */}
            <h1
              className="font-black leading-[0.92] mb-5 sm:mb-7 lg:mb-8"
              style={{
                fontSize: "clamp(2.8rem, 11vw, 6.2rem)",
                fontFamily: "'Barlow Condensed', sans-serif",
                color: "#f0f0f0",
                letterSpacing: "-0.01em",
              }}
            >
              BUILT TO
              <br />
              <span style={{ color: "#dc2626" }}>EXECUTE.</span>
            </h1>

            {/* Divider */}
            <div
              aria-hidden="true"
              className="h-px mb-5 sm:mb-7 lg:mb-8"
              style={{
                background: "linear-gradient(to right, rgba(220,38,38,0.45), rgba(255,255,255,0.05) 50%, transparent)",
                maxWidth: "380px",
              }}
            />

            {/* Body copy */}
            <p
              className="text-[13px] sm:text-[15px] leading-[1.8] mb-8 sm:mb-10 lg:mb-12"
              style={{
                color: "#606060",
                fontFamily: "'DM Sans', sans-serif",
                maxWidth: "380px",
              }}
            >
              Design. Development. Content.
              <br />
              No chaos. No delays. No freelancer noise.
              <br />
              <span style={{ color: "#909090" }}>
                You hand us the brief — we ship the result.
              </span>
            </p>

            {/* CTA block */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-7 mb-10 sm:mb-12 lg:mb-0">
              <button className="cta-btn">
                Request Execution
              </button>
              <a href="/work" className="cta-link">
                See our work
                <span className="cta-arrow">{"→"}</span>
              </a>
            </div>

            {/* Stat strip — grid on mobile, row on desktop */}
            <div
              className="grid grid-cols-3 sm:flex sm:flex-row sm:gap-10 gap-0 mt-8 sm:mt-14 lg:mt-16 pt-6 sm:pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.045)" }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="flex-shrink-0 flex flex-col items-center sm:items-start text-center sm:text-left py-3 sm:py-0"
                  style={{
                    borderRight: i < stats.length - 1
                      ? "1px solid rgba(255,255,255,0.04)"
                      : "none",
                    paddingLeft: i > 0 ? undefined : undefined,
                  }}
                >
                  <p className="stat-num">{s.num}</p>
                  <p className="stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — ghost wordmark (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden lg:flex flex-1 justify-center items-center relative"
            style={{ minHeight: "400px" }}
          >
            <div
              className="absolute"
              style={{
                width: 360,
                height: 360,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(220,38,38,0.07) 0%, transparent 70%)",
                filter: "blur(50px)",
              }}
            />
            <p className="ghost-text relative">GROX</p>
          </div>

        </div>
      </section>
    </>
  );
}