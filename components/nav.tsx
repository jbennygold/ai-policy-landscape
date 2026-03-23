import Link from "next/link";

const links = [
  { href: "/", label: "Overview" },
  { href: "/proposals", label: "Proposals" },
  { href: "/explorer", label: "Explorer" },
  { href: "/gaps", label: "What's Missing" },
];

export function Nav() {
  return (
    <nav className="border-b border-[#e7e5e4] bg-white/80 backdrop-blur-sm sticky top-0 z-40">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-3">
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-tight text-stone-900"
        >
          AI Policy Landscape
        </Link>
        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#78716c] hover:text-stone-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
