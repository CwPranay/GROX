import { Skeleton, SkeletonHeading, SkeletonText, SkeletonButton, SkeletonCard } from './Skeleton';

// Hero section skeleton
export function HeroSkeleton() {
  return (
    <section className="hero-section hero-noise relative min-h-svh flex items-center overflow-hidden">
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-20 flex flex-col lg:flex-row items-start lg:items-center gap-0 lg:gap-0 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:py-0 lg:min-h-svh">
        <div className="flex-1 w-full lg:max-w-[560px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8 lg:mb-10">
            <Skeleton width="24px" height="1px" />
            <Skeleton width="200px" height="12px" />
          </div>

          {/* Headline */}
          <div style={{ marginBottom: 'clamp(1.25rem, 3vw, 2rem)' }}>
            <SkeletonHeading size="xlarge" />
            <Skeleton height="60px" width="50%" style={{ marginTop: '8px' }} />
          </div>

          {/* Divider */}
          <Skeleton height="1px" width="380px" style={{ marginBottom: 'clamp(1.25rem, 3vw, 2rem)' }} />

          {/* Body copy */}
          <div style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <SkeletonText lines={4} width="380px" />
          </div>

          {/* CTA block */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-7 mb-10 sm:mb-12 lg:mb-0">
            <SkeletonButton width="200px" />
            <Skeleton width="140px" height="20px" />
          </div>

          {/* Stat strip */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.045)', paddingTop: '24px', marginTop: '48px' }}>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <Skeleton height="24px" width="60px" style={{ marginBottom: '8px' }} />
                  <Skeleton height="12px" width="80px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services section skeleton
export function ServicesSkeleton() {
  return (
    <section style={{
      borderTop: '1px solid rgba(255,255,255,0.04)',
      paddingTop: 'clamp(4rem, 10vw, 7rem)',
      paddingBottom: 'clamp(4rem, 10vw, 7rem)',
    }}>
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Skeleton width="24px" height="1px" />
              <Skeleton width="150px" height="12px" />
            </div>
            <SkeletonHeading size="large" />
          </div>
          <SkeletonText lines={2} width="280px" />
        </div>

        {/* Layers */}
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-11 flex flex-col">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="grid md:grid-cols-12 py-12 border-b border-white/5"
              >
                <div className="md:col-span-3">
                  <Skeleton width="80px" height="12px" />
                </div>
                <div className="md:col-span-5 md:px-10">
                  <Skeleton height="32px" width="70%" style={{ marginBottom: '16px' }} />
                  <SkeletonText lines={2} />
                </div>
                <div className="md:col-span-4 md:pl-10">
                  <SkeletonText lines={2} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Work page skeleton
export function WorkPageSkeleton() {
  return (
    <main className="work-page">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Page header */}
        <div style={{
          paddingTop: 'clamp(6rem, 14vw, 10rem)',
          paddingBottom: 'clamp(3.5rem, 8vw, 6rem)',
        }}>
          <div className="flex items-center gap-3 mb-5">
            <Skeleton width="24px" height="1px" />
            <Skeleton width="150px" height="12px" />
          </div>
          <SkeletonHeading size="xlarge" />
          <SkeletonText lines={2} width="300px" style={{ marginTop: '24px' }} />
        </div>

        {/* Case studies */}
        {[1, 2].map((i) => (
          <article
            key={i}
            style={{
              borderTop: '1px solid rgba(255,255,255,0.07)',
              paddingTop: 'clamp(3.5rem, 8vw, 6rem)',
              paddingBottom: 'clamp(3.5rem, 8vw, 6rem)',
            }}
          >
            {/* Header */}
            <div className="grid md:grid-cols-12 gap-6 md:gap-0 mb-12 sm:mb-16">
              <div className="md:col-span-7 md:pr-16">
                <Skeleton width="100px" height="12px" style={{ marginBottom: '14px' }} />
                <SkeletonHeading size="large" />
                <Skeleton height="24px" width="60%" style={{ marginTop: '12px', marginBottom: '20px' }} />
                <SkeletonText lines={2} width="420px" />
              </div>
            </div>

            {/* Problem/Execution/Outcome */}
            <div className="grid grid-cols-1 sm:grid-cols-3 mb-12 sm:mb-16" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
              {[1, 2, 3].map((j) => (
                <div key={j} style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  <Skeleton width="100px" height="12px" style={{ marginBottom: '16px' }} />
                  <SkeletonText lines={3} />
                </div>
              ))}
            </div>

            {/* Images */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Skeleton height="400px" width="100%" />
              <Skeleton height="400px" width="82%" style={{ marginLeft: 'auto' }} />
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

// Request form skeleton
export function RequestFormSkeleton() {
  return (
    <main className="rq-page">
      <div className="max-w-[900px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Header */}
        <div style={{ paddingTop: 'clamp(5rem, 12vw, 8rem)', paddingBottom: 'clamp(3rem, 7vw, 5rem)' }}>
          <div className="flex items-center gap-3 mb-6">
            <Skeleton width="24px" height="1px" />
            <Skeleton width="150px" height="12px" />
          </div>
          <SkeletonHeading size="xlarge" />
          <SkeletonText lines={3} width="460px" style={{ marginTop: '28px' }} />
        </div>

        <Skeleton height="1px" width="100%" style={{ marginBottom: '40px' }} />

        {/* Form fields */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 5vw, 3.5rem)' }}>
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <Skeleton width="100px" height="12px" style={{ marginBottom: '10px' }} />
              <Skeleton height="48px" width="100%" />
            </div>
            <div>
              <Skeleton width="80px" height="12px" style={{ marginBottom: '10px' }} />
              <Skeleton height="48px" width="100%" />
            </div>
          </div>

          {/* Phone + Project Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <Skeleton width="120px" height="12px" style={{ marginBottom: '10px' }} />
              <Skeleton height="48px" width="100%" />
            </div>
            <div>
              <Skeleton width="100px" height="12px" style={{ marginBottom: '10px' }} />
              <Skeleton height="48px" width="100%" />
            </div>
          </div>

          {/* Description */}
          <div>
            <Skeleton width="200px" height="12px" style={{ marginBottom: '10px' }} />
            <Skeleton height="120px" width="100%" />
          </div>

          {/* Timeline + Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <Skeleton width="80px" height="12px" style={{ marginBottom: '10px' }} />
              <Skeleton height="48px" width="100%" />
            </div>
            <div>
              <Skeleton width="100px" height="12px" style={{ marginBottom: '10px' }} />
              <Skeleton height="48px" width="100%" />
            </div>
          </div>

          {/* Submit */}
          <div style={{ marginTop: '20px' }}>
            <SkeletonButton width="220px" />
          </div>
        </div>
      </div>
    </main>
  );
}

// Landing page skeleton
export function LandingPageSkeleton() {
  return (
    <main className="landing-page">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10 lg:px-20">
        {/* Hero */}
        <section style={{ paddingTop: 'clamp(6rem, 14vw, 10rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)' }}>
          <div className="flex items-center gap-3 mb-5">
            <Skeleton width="24px" height="1px" />
            <Skeleton width="200px" height="12px" />
          </div>
          <SkeletonHeading size="xlarge" />
          <SkeletonText lines={3} width="520px" style={{ marginTop: '28px', marginBottom: '40px' }} />
          <SkeletonButton width="200px" />
        </section>

        {/* Features */}
        <section style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: 'clamp(4rem, 8vw, 6rem)',
          paddingBottom: 'clamp(4rem, 8vw, 6rem)',
        }}>
          <SkeletonHeading size="large" style={{ marginBottom: '40px' }} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[1, 2, 3, 4].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </section>

        {/* Process */}
        <section style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: 'clamp(4rem, 8vw, 6rem)',
          paddingBottom: 'clamp(4rem, 8vw, 6rem)',
        }}>
          <SkeletonHeading size="large" style={{ marginBottom: '40px' }} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(220,38,38,0.3)', paddingTop: '20px' }}>
                <Skeleton width="60px" height="12px" style={{ marginBottom: '12px' }} />
                <Skeleton height="28px" width="70%" style={{ marginBottom: '10px' }} />
                <SkeletonText lines={2} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
