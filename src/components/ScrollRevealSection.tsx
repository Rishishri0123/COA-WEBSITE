import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  animation?: 'dynamic' | 'fade-up' | 'fade-down' | 'fade-scale' | 'fade-in';
  durationClass?: string;
  delayClass?: string;
  threshold?: number;
  rootMargin?: string;
  resetOnExit?: boolean;
}

/**
 * ScrollRevealSection:
 * Wraps content sections with scroll-triggered fade-in and directional slide animations
 * using Tailwind classes. Reacts dynamically whether the user is scrolling down or up.
 */
export const ScrollRevealSection: React.FC<ScrollRevealSectionProps> = ({
  children,
  className = '',
  id,
  animation = 'dynamic',
  durationClass = 'duration-700',
  delayClass = '',
  threshold = 0.05,
  rootMargin = '0px 0px -40px 0px',
  resetOnExit = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDir, setScrollDir] = useState<'down' | 'up'>('down');
  const lastScrollY = useRef(0);

  // Track scroll direction so animations adapt whether scrolling down or up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;
      if (Math.abs(diff) > 6) {
        setScrollDir(diff > 0 ? 'down' : 'up');
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to trigger animations on entering & leaving viewport
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    // Check reduced motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    // If section is already within current viewport on initial mount, reveal immediately
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else if (resetOnExit) {
            // When fully out of view, reset so scrolling back re-animates smoothly
            if (entry.intersectionRatio === 0) {
              setIsVisible(false);
            }
          }
        });
      },
      {
        threshold: [0, threshold, 0.1],
        rootMargin,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, resetOnExit]);

  // Generate dynamic motion Tailwind classes based on visibility and scroll direction
  const getTransformClasses = () => {
    if (isVisible) {
      return 'opacity-100 translate-y-0 scale-100 filter-none';
    }

    switch (animation) {
      case 'fade-up':
        return 'opacity-0 translate-y-8 sm:translate-y-10 scale-[0.985]';
      case 'fade-down':
        return 'opacity-0 -translate-y-6 sm:-translate-y-8 scale-[0.985]';
      case 'fade-scale':
        return 'opacity-0 scale-95';
      case 'fade-in':
        return 'opacity-0';
      case 'dynamic':
      default:
        // When scrolling down: rise from bottom. When scrolling up: glide from top!
        return scrollDir === 'up'
          ? 'opacity-0 -translate-y-6 sm:-translate-y-8 scale-[0.985]'
          : 'opacity-0 translate-y-8 sm:translate-y-10 scale-[0.985]';
    }
  };

  return (
    <div
      ref={containerRef}
      id={id}
      className={`w-full transition-all ease-out transform-gpu will-change-[transform,opacity] ${durationClass} ${delayClass} ${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
};
