"use client";

import { useState, useEffect, useRef } from "react";

interface IntersectionOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useActiveSection(
  sectionIds: string[],
  options: IntersectionOptions = {}
): string {
  const { threshold = 0.3, rootMargin = "-80px 0px -60% 0px" } = options;
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || "");
  const observersRef = useRef<IntersectionObserver[]>([]);

  useEffect(() => {
    // Clean up previous observers
    observersRef.current.forEach((observer) => observer.disconnect());
    observersRef.current = [];

    const visibleSections = new Map<string, number>();

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        
        if (entry.isIntersecting) {
          visibleSections.set(sectionId, entry.intersectionRatio);
        } else {
          visibleSections.delete(sectionId);
        }
      });

      // Find the section with the highest intersection ratio
      if (visibleSections.size > 0) {
        let maxRatio = 0;
        let mostVisibleSection = "";

        visibleSections.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleSection = id;
          }
        });

        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection);
        }
      }
    };

    // Create a separate observer for each section for more precise control
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(handleIntersection, {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin,
        });

        observer.observe(element);
        observersRef.current.push(observer);
      }
    });

    // Fallback: check scroll position on load
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const element = document.getElementById(sectionIds[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    // Initial check
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observersRef.current.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, threshold, rootMargin]);

  return activeSection;
}

// Hook for tracking a single element's visibility
export function useInView(
  elementId: string,
  options: IntersectionOptions = {}
): boolean {
  const { threshold = 0.2, rootMargin = "0px" } = options;
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [elementId, threshold, rootMargin]);

  return isInView;
}

export default useActiveSection;
