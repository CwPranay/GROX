export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid md:grid-cols-12 gap-12 sm:gap-12">

        {/* Left anchor */}
        <div className="md:col-span-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            What We Execute
          </h2>

          <p className="mt-6 max-w-sm text-[var(--grox-gray)] leading-[1.7] sm:leading-relaxed space-y-2">
            GROX is built as an execution system.
            <br />
            Not a service list.
            <br />
            Not a freelancer network.
            <br />
            <br />
            Every pillar exists to deliver outcomes —
            <br />
            with control and consistency.
          </p>
        </div>

        {/* Right execution blocks */}
       <div className="md:col-span-8 space-y-14 sm:space-y-20 mt-8 sm:mt-4">

          {/* Design */}
          <div className="max-w-xl pb-4 sm:pb-8">
            <h3 className="text-lg sm:text-xl font-medium">
              Design Execution
            </h3>
            <p className="mt-3 sm:mt-4 text-[var(--grox-gray)] leading-[1.7] sm:leading-relaxed">
              Visual systems, thumbnails, and brand assets executed with clarity
              and consistency — not scattered design tasks.
            </p>
          </div>

          {/* Development */}
          <div className="max-w-xl pb-4 sm:pb-8">
            <h3 className="text-lg sm:text-xl font-medium">
              Development Execution
            </h3>
            <p className="mt-3 sm:mt-4 text-[var(--grox-gray)] leading-[1.7] sm:leading-relaxed">
              Websites and interfaces built as systems — structured, scalable,
              and engineered to perform beyond launch.
            </p>
          </div>

          {/* Content */}
          <div className="max-w-xl pb-4 sm:pb-8">
            <h3 className="text-lg sm:text-xl font-medium">
              Content Execution
            </h3>
            <p className="mt-3 sm:mt-4 text-[var(--grox-gray)] leading-[1.7] sm:leading-relaxed">
              Short-form edits and videos produced with speed, consistency, and
              delivery discipline — not creator chaos.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}