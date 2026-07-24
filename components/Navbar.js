import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { LogoWithWordmark } from "./Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <LogoWithWordmark />

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={
                "px-4 py-2 rounded-full text-sm font-medium transition-colors " +
                (router.pathname === href
                  ? "text-helio-700 bg-helio-50"
                  : "text-slate-600 hover:text-slate-850 hover:bg-stone-100")
              }
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary ml-3">
            Get in Touch
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-slate-850 hover:bg-stone-100"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-stone-200 bg-white px-6 py-4 space-y-1">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={
                "block px-4 py-3 rounded-xl text-sm font-medium " +
                (router.pathname === href
                  ? "text-helio-700 bg-helio-50"
                  : "text-slate-600 hover:bg-stone-100")
              }
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary w-full mt-2"
          >
            Get in Touch
          </Link>
        </nav>
      )}
    </header>
  );
}
