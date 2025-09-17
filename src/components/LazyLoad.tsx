"use client";

import { useEffect, useState, useRef } from "react";

interface LazyLoadProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  placeholder?: React.ReactNode;
}

/**
 * LazyLoad component that only renders its children when they are about to enter the viewport
 * This helps improve initial page load performance by deferring the loading of below-fold content
 */
export default function LazyLoad({
  children,
  threshold = 0.1,
  rootMargin = "200px 0px",
  placeholder = null,
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip if already visible or if IntersectionObserver is not available
    if (isVisible || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible, threshold, rootMargin]);

  return <div ref={ref}>{isVisible ? children : placeholder}</div>;
}
