import { useState } from "react";
import asset from "../lib/asset";

export default function FoundersPhoto({ className = "" }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-helio-100 to-helio-50 ${className}`}>
        <svg viewBox="0 0 64 64" className="w-12 h-12 text-helio-400 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="8" y="12" width="48" height="40" rx="4" />
          <circle cx="24" cy="28" r="6" />
          <path d="M8 44l14-12 10 8 12-10 12 14" strokeLinejoin="round" />
        </svg>
        <p className="text-sm text-slate-500 leading-relaxed">
          UConn CCEI Get Seeded Pitch Night — January 2026
        </p>
      </div>
    );
  }

  return (
    <img
      src={asset("founders.jpg")}
      alt="Helio founders at UConn CCEI Get Seeded Pitch Night, January 2026"
      className={`w-full h-full object-cover ${className}`}
      onError={() => setHasError(true)}
    />
  );
}
