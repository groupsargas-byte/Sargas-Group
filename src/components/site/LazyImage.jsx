/**
 * Image with lazy loading defaults. Use `priority` for LCP / above-the-fold images.
 */
export function LazyImage({ priority = false, loading, fetchPriority, decoding = "async", ...props }) {
  return (
    <img
      loading={loading ?? (priority ? "eager" : "lazy")}
      fetchPriority={fetchPriority ?? (priority ? "high" : undefined)}
      decoding={decoding}
      {...props}
    />
  );
}
