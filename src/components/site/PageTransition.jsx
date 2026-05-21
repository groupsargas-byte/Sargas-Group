import { useLocation } from "react-router-dom";

/** Subtle fade when navigating between routes. */
export function PageTransition({ children }) {
  const { pathname } = useLocation();

  return (
    <div key={pathname} className="page-enter flex min-h-0 flex-1 flex-col">
      {children}
    </div>
  );
}
