import Link from "next/link";
import type { Proposal } from "@/lib/types";

export function ProposalCard({ proposal }: { proposal: Proposal }) {
  return (
    <Link
      href={`/proposals/${proposal.slug}`}
      className="block rounded-lg border border-[#e7e5e4] bg-white p-5 transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs text-[#78716c]">
            {proposal.sponsor} · {proposal.year}
          </p>
          <h3
            className="mt-1 text-lg font-semibold text-stone-900"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {proposal.name}
          </h3>
        </div>
        <span
          className="mt-1 h-3 w-3 shrink-0 rounded-full"
          style={{ backgroundColor: proposal.color }}
        />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-stone-600">
        {proposal.summary}
      </p>
      <p className="mt-3 text-xs font-medium text-[#78716c]">
        Primary frame: {proposal.primaryFrame}
      </p>
    </Link>
  );
}
