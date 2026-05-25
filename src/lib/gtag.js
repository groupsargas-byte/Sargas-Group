export const GA_MEASUREMENT_ID = "G-2JCLSE8K6G";

/** Send a page_view on SPA route changes (gtag is loaded from index.html). */
export function trackPageView(path) {
  if (typeof window.gtag !== "function") return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
  });
}
