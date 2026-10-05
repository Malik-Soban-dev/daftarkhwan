import { useEffect, useRef, useState } from "react";

/**
 * Reports when an element first enters the viewport, so entrances can play once.
 *
 * Built so content can never be left invisible:
 *  1. anything already on (or just below) the first screen is revealed on the next
 *     frame — the transition still runs, but nothing waits on the observer;
 *  2. everything else is revealed by IntersectionObserver as it scrolls in;
 *  3. a hard deadline reveals anything still hidden after 3s, whatever the cause
 *     (unsupported observer, zero-size target, hidden tab, throttling, bugs).
 */
export function useInView<T extends HTMLElement>(threshold = 0.1, rootMargin = "0px 0px -5% 0px") {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let settled = false;
    const reveal = () => {
      if (settled) return;
      settled = true;
      setInView(true);
    };

    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const vh = window.innerHeight || 800;
    let top = 0;
    try {
      top = el.getBoundingClientRect().top;
    } catch {
      reveal();
      return;
    }

    // Already visible on load: reveal on the next frame so the entrance still plays.
    if (top < vh * 1.1) {
      const frame = requestAnimationFrame(reveal);
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);

    // Deadline: nothing may stay hidden, whatever the observer does.
    const deadline = window.setTimeout(() => {
      reveal();
      observer.disconnect();
    }, 3000);

    return () => {
      observer.disconnect();
      window.clearTimeout(deadline);
    };
  }, [threshold, rootMargin]);

  return { ref, inView };
}

/** Reveal a photo on the first frame where its visible rectangle has area.
 * Unlike the text reveal helper, this deliberately has no early root margin or
 * timeout: the image curtain must never start before the user reaches the image. */
export function useEnteredViewport<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let settled = false;
    let frame = 0;
    let observer: IntersectionObserver | null = null;

    const reveal = () => {
      if (settled) return;
      settled = true;
      setEntered(true);
      observer?.disconnect();
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      window.visualViewport?.removeEventListener("scroll", scheduleCheck);
      window.visualViewport?.removeEventListener("resize", scheduleCheck);
    };

    const check = () => {
      frame = 0;
      if (settled) return;
      const rect = el.getBoundingClientRect();
      const width = window.visualViewport?.width ?? window.innerWidth;
      const height = window.visualViewport?.height ?? window.innerHeight;
      const intersects = rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.right > 0 && rect.top < height && rect.left < width;
      if (intersects) reveal();
    };

    function scheduleCheck() {
      if (frame || settled) return;
      frame = requestAnimationFrame(check);
    }

    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (
            entries.some(
              (entry) =>
                entry.isIntersecting &&
                entry.intersectionRect.width > 0 &&
                entry.intersectionRect.height > 0,
            )
          ) {
            reveal();
          }
        },
        { threshold: 0, rootMargin: "0px" },
      );
      observer.observe(el);
    }

    // Also check directly and listen to scroll as a fallback for embedded
    // browsers whose IntersectionObserver does not report reliably.
    window.addEventListener("scroll", scheduleCheck, { passive: true });
    window.addEventListener("resize", scheduleCheck, { passive: true });
    window.visualViewport?.addEventListener("scroll", scheduleCheck, { passive: true });
    window.visualViewport?.addEventListener("resize", scheduleCheck, { passive: true });
    check();

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      window.visualViewport?.removeEventListener("scroll", scheduleCheck);
      window.visualViewport?.removeEventListener("resize", scheduleCheck);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return { ref, entered };
}

/** Window scroll offset, throttled through rAF — used by the chrome. */
export function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setY(window.scrollY);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
  return y;
}

/** 0 → 1 document progress for the top hairline indicator. */
export function useProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return p;
}
