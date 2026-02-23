export default function Process() {
    return (
        <section id="process" className="py-20 sm:py-32 border-t border-white/10">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

                {/* Heading */}
                <div className="max-w-xl">
                    <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                        How Execution
                        <br />
                        Actually Runs
                    </h2>

                    <p className="mt-6 text-[var(--grox-gray)] leading-[1.7] sm:leading-relaxed">
                        GROX operates through a controlled execution system.
                        Not a step-by-step process you need to manage —
                        a flow that runs without friction.
                    </p>
                </div>

                {/* Horizontal execution flow */}
                <div className="mt-16 sm:mt-24 max-w-5xl grid md:grid-cols-3 gap-12 sm:gap-16">

                    <div className="pb-8 sm:pb-0 border-b md:border-b-0 border-white/5">
                        <p className="text-xs sm:text-sm uppercase tracking-widest text-[var(--grox-gray)] mb-3 sm:mb-4">
                            Intake
                        </p>
                        <p className="leading-[1.7] sm:leading-relaxed text-[var(--grox-gray)]">
                            Work enters through a single structured request.
                            No scattered messages. No missing context.
                        </p>
                    </div>

                    <div className="pb-8 sm:pb-0 border-b md:border-b-0 border-white/5">
                        <p className="text-xs sm:text-sm uppercase tracking-widest text-white mb-3 sm:mb-4">
                            Execution
                        </p>
                        <p className="leading-[1.7] sm:leading-relaxed text-[var(--grox-gray)]">
                            Tasks are handled internally by the right execution layer.
                            You don't coordinate. You don't manage people.
                        </p>
                    </div>

                    <div className="pb-8 sm:pb-0">
                        <p className="text-xs sm:text-sm uppercase tracking-widest text-[var(--grox-gray)] mb-3 sm:mb-4">
                            Delivery
                        </p>
                        <p className="leading-[1.7] sm:leading-relaxed text-[var(--grox-gray)]">
                            Output is reviewed and delivered through GROX —
                            consistent in quality, timing, and accountability.
                        </p>
                    </div>

                </div>

                <div className="mt-16 sm:mt-24 max-w-5xl">
                    <p className="text-sm text-[var(--grox-gray)]">
                        This is why GROX scales without chaos.
                    </p>
                </div>

            </div>

        </section>
    );
}
