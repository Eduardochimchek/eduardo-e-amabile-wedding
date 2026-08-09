"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

type UseInViewOptions = {
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean;
};

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

/**
 * Lightweight viewport observer. Prefer one observer per section group,
 * not per leaf node.
 */
export function useInView<T extends HTMLElement>({
  threshold = 0.18,
  rootMargin = "0px 0px -8% 0px",
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [observed, setObserved] = useState(false);
  const reduced = usePrefersReducedMotion();
  const inView = reduced || observed;

  useEffect(() => {
    const node = ref.current;
    if (!node || reduced) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setObserved(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setObserved(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, reduced, rootMargin, threshold]);

  return { ref, inView, reduced };
}
