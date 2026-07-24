const icons = {
  sensor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
    </svg>
  ),
  ai: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6">
      <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinejoin="round" />
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5" strokeLinejoin="round" />
    </svg>
  ),
  app: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12" y2="18.01" strokeLinecap="round" strokeWidth="2.5" />
    </svg>
  ),
  route: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  forecast: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6">
      <path d="M3 17c0-3.3 2.7-6 6-6 .8 0 1.5.2 2.2.5C12.1 9.2 13.5 8 15.2 8 17.8 8 20 10.2 20 12.8" strokeLinecap="round" />
      <path d="M7 20h10" strokeLinecap="round" />
    </svg>
  ),
  plug: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6">
      <path d="M9 2v6M15 2v6M8 8h8v6a4 4 0 01-8 0V8z" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="18" x2="12" y2="22" strokeLinecap="round" />
    </svg>
  ),
  alert: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6">
      <path d="M12 9v4M12 17h.01" strokeLinecap="round" />
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" strokeLinejoin="round" />
    </svg>
  ),
  learn: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-6 h-6">
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
      <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default icons;

export function IconBadge({ name, className = "" }) {
  return (
    <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-helio-50 text-helio-600 ${className}`}>
      {icons[name]}
    </div>
  );
}
