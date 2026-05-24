/** Footer subsection heading (Reach us, Offices, etc.). */
export function FooterSectionTitle({ children, tone = "lime" }) {
  return (
    <h4
      className={`font-display text-xs font-bold uppercase tracking-[0.14em] ${
        tone === "white" ? "text-white" : "text-[var(--lime)]"
      }`}
    >
      {children}
    </h4>
  );
}
