export default function Hero() {
  return (
    <section className="min-h-[70vh] sm:min-h-[calc(100vh-80px)] pt-32 sm:pt-48 items-center">
      <div className="mx-auto max-w-[900px] px-4 sm:px-6">

        {/* Brand anchor */}
        <p className="text-xs sm:text-sm uppercase tracking-widest text-[var(--grox-gray)] mb-4 sm:mb-6">
          Creative Execution Company
        </p>

        {/* Headline */}
        <h1 className="text-[2.75rem] leading-[1.1] sm:text-6xl md:text-7xl font-bold sm:leading-[1.05]">
          Built to<br className="sm:hidden" /> Execute
        </h1>

        {/* Copy + CTA block */}
        <div className="mt-8 sm:mt-12 max-w-xl">
          <p className="text-base sm:text-lg leading-[1.7] sm:leading-relaxed text-[var(--grox-gray)]">
            We execute design, development, and content.
            <br />
            No chaos. No delays. No freelancer noise.
          </p>

          <button
            className="mt-8 sm:mt-10 px-10 sm:px-12 py-3 sm:py-4 text-sm font-medium tracking-wider transition hover:opacity-90"
            style={{ backgroundColor: "var(--grox-red)" }}
          >
            Request Execution
          </button>
        </div>

      </div>
    </section>
  );
}