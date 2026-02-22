export default function Services() {
  return (
    <section id="services" className="py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold">
          What We Execute
        </h2>

        <div className="mt-20 grid md:grid-cols-3 gap-16">
          <div>
            <h3 className="text-xl font-medium">Design</h3>
            <p className="mt-4 text-[var(--grox-gray)]">
              Posters, thumbnails, branding, and visual systems built for impact.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Development</h3>
            <p className="mt-4 text-[var(--grox-gray)]">
              Websites and interfaces engineered for performance and scale.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Content</h3>
            <p className="mt-4 text-[var(--grox-gray)]">
              Video edits and reels optimized for attention and delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}