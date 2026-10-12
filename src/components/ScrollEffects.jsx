import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/* ------------------------------------------------------------------
   Tweak these to change the feel of the reveal animation
------------------------------------------------------------------- */
const DURATION = 900; // ms, how slowly each block fades in
const DISTANCE = 40; // px, how far it slides up
const STAGGER = 120; // ms, delay between cards in the same row/grid
const EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

export default function ScrollEffects() {
  const { pathname, hash } = useLocation();

  /* 1) Always start at the top when the page changes
        (skipped when the URL has a #anchor so anchor links still work) */
  useLayoutEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  /* 2) Gradual reveal of every section's content while scrolling */
  useLayoutEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // collect the blocks to animate: each section's top-level content blocks,
    // and for grids, each card inside the grid (so cards come in one by one)
    const targets = new Map(); // element -> delay (ms)

    document.querySelectorAll("section").forEach((section) => {
      section.querySelectorAll(":scope > div:not(.absolute)").forEach((box) => {
        Array.from(box.children).forEach((block, i) => {
          if (block.classList.contains("absolute")) return;

          if (block.classList.contains("grid")) {
            Array.from(block.children).forEach((card, j) =>
              targets.set(card, (j % 4) * STAGGER)
            );
          } else {
            targets.set(block, Math.min(i, 3) * 80);
          }
        });
      });
    });

    const els = [...targets.keys()].filter((el) => el.offsetHeight > 0);

    // hide before the first paint so there is no flash
    els.forEach((el) => (el.style.opacity = "0"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          observer.unobserve(el);

          const anim = el.animate(
            [
              { opacity: 0, transform: `translateY(${DISTANCE}px)` },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: DURATION, delay: targets.get(el), easing: EASING, fill: "both" }
          );

          anim.onfinish = () => {
            el.style.opacity = "";
            anim.cancel(); // remove leftover transform so hover/sticky styles work
          };
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    els.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      els.forEach((el) => (el.style.opacity = ""));
    };
  }, [pathname]);

  return null;
}