import { useEffect, useRef, useState } from "react";

/**
 * Reveals an element when it scrolls into view. Fail-safe: if
 * IntersectionObserver is unavailable, the element is shown immediately,
 * so content can never get stuck hidden.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px", ...options },
    );

    observer.observe(el);
    return () => observer.disconnect();
    // Observer is set up once; re-subscribing on options identity changes is unwanted.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}

export default useInView;
