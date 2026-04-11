import { useEffect, useState } from 'react';

// Base Skeleton component with shimmer
export function Skeleton({ width = '100%', height = '20px', className = '', style = {} }) {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        width,
        height,
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderRadius: '2px',
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
      aria-busy="true"
      role="status"
    >
      <div className="skeleton-shimmer" />
    </div>
  );
}

// Text line skeleton
export function SkeletonText({ lines = 1, width = '100%', gap = '12px' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap, width }}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          width={i === lines - 1 && lines > 1 ? '80%' : '100%'}
          height="16px"
        />
      ))}
    </div>
  );
}

// Heading skeleton
export function SkeletonHeading({ size = 'large' }) {
  const heights = {
    small: '24px',
    medium: '40px',
    large: '60px',
    xlarge: '80px'
  };

  return <Skeleton height={heights[size]} width="70%" />;
}

// Button skeleton
export function SkeletonButton({ width = '180px' }) {
  return <Skeleton height="50px" width={width} />;
}

// Card skeleton
export function SkeletonCard() {
  return (
    <div style={{ padding: '24px', borderLeft: '1px solid rgba(220,38,38,0.2)' }}>
      <Skeleton height="28px" width="60%" style={{ marginBottom: '12px' }} />
      <SkeletonText lines={3} />
    </div>
  );
}

// Image skeleton
export function SkeletonImage({ aspectRatio = '16/9', width = '100%' }) {
  return (
    <Skeleton
      width={width}
      height="auto"
      style={{ aspectRatio, borderRadius: '0' }}
    />
  );
}

// Delayed skeleton wrapper (prevents flicker)
export function DelayedSkeleton({ children, delay = 250 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!show) return null;

  return <div className="skeleton-fade-in">{children}</div>;
}

// Content wrapper with fade transition
export function SkeletonWrapper({ loading, skeleton, children, delay = 250 }) {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setShowSkeleton(true), delay);
      return () => clearTimeout(timer);
    } else {
      setShowSkeleton(false);
    }
  }, [loading, delay]);

  if (loading && showSkeleton) {
    return <div className="skeleton-fade-in">{skeleton}</div>;
  }

  if (loading && !showSkeleton) {
    return null;
  }

  return <div className="content-fade-in">{children}</div>;
}

// Global skeleton styles
export const SkeletonStyles = () => (
  <style>{`
    @keyframes shimmer {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(100%);
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .skeleton {
      animation: fadeIn 0.3s ease-out;
    }

    .skeleton-shimmer {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.04) 50%,
        transparent 100%
      );
      animation: shimmer 2s infinite;
    }

    .skeleton-fade-in {
      animation: fadeIn 0.3s ease-out;
    }

    .content-fade-in {
      animation: fadeIn 0.4s ease-out;
    }
  `}</style>
);
