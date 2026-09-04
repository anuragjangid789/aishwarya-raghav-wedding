import { useState, useEffect } from "react";

/**
 * Custom hook to detect when a section is scrolled into view,
 * accurately handling both nested desktop iPhone container and mobile window scroll.
 */
export function useSectionInView(elementRef, threshold = 0.3) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Detect if nested inside .inner-phone-scroll (desktop) or window (mobile)
    const isDesktopMockup = window.innerWidth > 600;
    const scrollParent = isDesktopMockup ? element.closest(".inner-phone-scroll") : null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: scrollParent,
        threshold,
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [elementRef, threshold]);

  return isInView;
}
