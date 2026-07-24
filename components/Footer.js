import Link from "next/link";
import asset from "../lib/asset";

const CONTACT_EMAIL = "hello@helio.energy";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-slate-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <img src={asset("logo.svg")} alt="" className="h-9 w-9 brightness-0 invert" aria-hidden="true" />
              <span className="text-xl font-display font-semibold text-white">Helio</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              AI-powered energy intelligence for residential solar.
            </p>
          </div>
          <nav className="flex flex-col gap-2">
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-slate-500 mb-1">Navigate</p>
            {footerLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-slate-300 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="space-y-2">
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-slate-500">Contact</p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-helio-400 hover:text-helio-300 transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs font-mono text-slate-500">
          <p>&copy; {year} Helio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export { CONTACT_EMAIL };