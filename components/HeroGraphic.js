export default function HeroGraphic() {
  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square" aria-hidden="true">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-helio-100 via-emerald-50 to-stone-100 animate-pulse-slow" />
      <svg
        viewBox="0 0 400 400"
        className="relative w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Sun core */}
        <circle cx="200" cy="180" r="48" fill="#10b981" opacity="0.9" />
        <circle cx="200" cy="180" r="64" stroke="#059669" strokeWidth="2" opacity="0.3" />
        <circle cx="200" cy="180" r="80" stroke="#059669" strokeWidth="1" opacity="0.15" />

        {/* Sun rays */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x1 = 200 + Math.cos(rad) * 72;
          const y1 = 180 + Math.sin(rad) * 72;
          const x2 = 200 + Math.cos(rad) * 100;
          const y2 = 180 + Math.sin(rad) * 100;
          return (
            <line
              key={angle}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#10b981"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.7"
            />
          );
        })}

        {/* Data wave / forecast curve */}
        <path
          d="M 60 280 Q 120 240, 180 260 T 300 230 T 360 250"
          stroke="#059669"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M 60 300 Q 140 270, 200 285 T 320 265 T 360 275"
          stroke="#34d399"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />

        {/* Solar panel line art */}
        <g transform="translate(130, 310)">
          <rect x="0" y="0" width="140" height="70" rx="4" stroke="#1a2332" strokeWidth="2" fill="white" opacity="0.9" />
          <line x1="70" y1="0" x2="70" y2="70" stroke="#1a2332" strokeWidth="1.5" opacity="0.4" />
          <line x1="0" y1="23" x2="140" y2="23" stroke="#1a2332" strokeWidth="1.5" opacity="0.4" />
          <line x1="0" y1="47" x2="140" y2="47" stroke="#1a2332" strokeWidth="1.5" opacity="0.4" />
          <line x1="35" y1="0" x2="35" y2="70" stroke="#1a2332" strokeWidth="1.5" opacity="0.4" />
          <line x1="105" y1="0" x2="105" y2="70" stroke="#1a2332" strokeWidth="1.5" opacity="0.4" />
        </g>

        {/* Data points on wave */}
        {[
          [180, 260],
          [240, 245],
          [300, 230],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill="#10b981" />
        ))}
      </svg>
    </div>
  );
}
