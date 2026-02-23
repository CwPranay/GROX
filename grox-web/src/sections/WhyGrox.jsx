export default function WhyGrox() {
  return (
    <section id="why" className="py-32 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-12 gap-12">

        {/* Left: Positioning */}
        <div className="md:col-span-4">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Why This
            <br />
            Works
          </h2>
        </div>

        {/* Right: Reasoning */}
        <div className="md:col-span-8 max-w-3xl space-y-10">
          
          <p className="text-[var(--grox-gray)] leading-relaxed">
            GROX is built as an execution system.
            Not a freelancer network.
            Not a chat-heavy agency.
          </p>

          <p className="text-[var(--grox-gray)] leading-relaxed">
            You don’t manage people.
            You don’t chase timelines.
            You don’t follow up endlessly.
          </p>

          <p className="text-[var(--grox-gray)] leading-relaxed">
            You submit work.
            We execute it — with structure, speed, and accountability.
          </p>

        </div>
      </div>
    </section>
  );
}