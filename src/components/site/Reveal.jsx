import { Children, useEffect, useRef, useState } from "react";

const directionClass = {
  up: "reveal-from-up",
  down: "reveal-from-down",
  left: "reveal-from-left",
  right: "reveal-from-right",
  none: "reveal-from-fade",
};

/**
 * Fade/slide in when scrolled into view. Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  direction = "up",
  threshold = 0.12,
  rootMargin = "0px 0px -6% 0px",
  immediate = false,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) return;

    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate, threshold, rootMargin]);

  return (
    <Tag
      ref={ref}
      className={[
        "reveal",
        directionClass[direction] ?? directionClass.up,
        visible && "reveal-visible",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

/** Stagger Reveal wrappers for each child. */
export function RevealStagger({ children, className = "", stagger = 90, direction = "up" }) {
  return (
    <div className={className}>
      {Children.map(children, (child, index) =>
        child != null ? (
          <Reveal key={index} delay={index * stagger} direction={direction}>
            {child}
          </Reveal>
        ) : null,
      )}
    </div>
  );
}
