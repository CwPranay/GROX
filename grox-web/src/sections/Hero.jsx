export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] pt-48 items-center">
      <div className="mx-auto max-w-[900px] px-6">

        {/* Brand anchor */}
        <p className="text-sm uppercase tracking-widest text-[var(--grox-gray)] mb-6">
          Creative Execution Company
        </p>

        {/* Headline */}
        <h1 className="text-6xl md:text-7xl font-bold leading-[1.05]">
          Built to Execute
        </h1>

        {/* Copy + CTA block */}
        <div className="mt-12 max-w-xl">
          <p className="text-lg leading-relaxed text-[var(--grox-gray)]">
            We execute design, development, and content.
            <br />
            No chaos. No delays. No freelancer noise.
          </p>

          <button
            className="mt-10 px-12 py-4 text-sm font-medium tracking-wider transition hover:opacity-90"
            style={{ backgroundColor: "var(--grox-red)" }}
          >
            Request Execution
          </button>
        </div>

      </div>
    </section>
  );
}