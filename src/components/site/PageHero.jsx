import { Link } from "react-router-dom";

export function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="bg-[var(--deep)] text-white">
      <div className="container-x py-20 lg:py-28">
        <span className="eyebrow !bg-white/10 !text-[var(--lime)]">{eyebrow}</span>
        <h1 className="mt-5 text-4xl md:text-6xl font-bold max-w-3xl leading-[1.05]">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-white/70 text-lg">{subtitle}</p>}
        <div className="mt-6 text-sm text-white/55">
          <Link to="/" className="hover:text-[var(--lime)]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{eyebrow}</span>
        </div>
      </div>
    </section>
  );
}
