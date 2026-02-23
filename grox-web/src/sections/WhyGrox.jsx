export default function WhyGrox() {
  return (
    <section id="why" className="py-20 sm:py-32 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid md:grid-cols-12 gap-10 sm:gap-12">

        {/* Left: Positioning */}
        <div className="md:col-span-4">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Why This
            <br className="hidden sm:inline" /> Model Works
          </h2>
        </div>

        <div className="md:col-span-8 max-w-3xl space-y-8 sm:space-y-10">

          <p className="text-[var(--grox-gray)] leading-[1.7] sm:leading-relaxed">
            GROX is built as an execution system.
            <br />
            Not a freelancer network.
            <br />
            Not a chat-heavy agency.
          </p>

          <p className="text-[var(--grox-gray)] leading-[1.7] sm:leading-relaxed">
            You don't manage people.
            <br />
            You don't chase timelines.
            <br />
            You don't follow up endlessly.
          </p>

          <p className="text-[var(--grox-gray)] leading-[1.7] sm:leading-relaxed mt-8 sm:mt-14">
            You submit work.
            <br />
            We take ownership — with structure, speed, and accountability.
          </p>

        </div>
      </div>
    </section>
  );
}
