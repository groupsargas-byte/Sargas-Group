/** Scroll window to top (used on route change and nav clicks). */
export function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}
