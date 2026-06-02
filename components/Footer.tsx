import { FOOTER } from "@/constants/content";

export function Footer() {
  return (
    <footer className="bg-bg-deep border-t border-white/07 pt-16 pb-10">
      <div className="max-w-content mx-auto px-5 md:px-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-bold text-sm tracking-[0.06em] text-text-primary mb-3">
              {FOOTER.logo}
            </p>
            <p className="text-xs text-text-muted leading-relaxed max-w-[200px]">
              {FOOTER.tagline}
            </p>
            <div className="flex gap-3 mt-6">
              {FOOTER.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="mono-tag text-text-muted hover:text-accent transition-colors duration-150"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER.columns.map((col) => (
            <div key={col.title}>
              <p className="mono-tag text-text-muted mb-4">{col.title}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-text-secondary hover:text-text-primary transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-white/05 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs text-text-muted">{FOOTER.copyright}</p>
          <p className="text-[10px] text-text-muted max-w-md text-right leading-relaxed">
            {FOOTER.legal}
          </p>
        </div>
      </div>
    </footer>
  );
}
