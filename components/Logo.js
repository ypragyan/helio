import Link from "next/link";
import asset from "../lib/asset";

export default function Logo({ className = "h-8 w-8" }) {
  return (
    <img
      src={asset("logo.svg")}
      alt=""
      className={className}
      aria-hidden="true"
    />
  );
}

export function LogoWithWordmark({ href = "/" }) {
  return (
    <Link href={href} className="inline-flex items-center gap-2.5 group">
      <Logo className="h-9 w-9 transition group-hover:scale-105" />
      <span className="text-xl font-semibold tracking-tight text-slate-850">Helio</span>
    </Link>
  );
}
