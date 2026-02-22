export default function WhyGrox() {
  return (
    <section id="why" className="py-32 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Why GROX
        </h2>

        <div className="mt-20 grid md:grid-cols-2 gap-16 max-w-4xl">
          <p className="text-[var(--grox-gray)]">
            GROX is not a freelancer network or a chat-heavy agency.
            We operate as a structured execution system — focused on delivery,
            clarity, and outcomes.
          </p>

          <p className="text-[var(--grox-gray)]">
            You don’t manage people, follow up endlessly, or chase timelines.
            You submit work. We execute. Simple.
          </p>
        </div>
      </div>
    </section>
  );
}