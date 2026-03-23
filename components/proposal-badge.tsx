import type { Proposal } from "@/lib/types";

export function ProposalBadge({ proposal }: { proposal: Proposal }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium"
      style={{
        backgroundColor: proposal.color + "15",
        color: proposal.color,
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: proposal.color }}
      />
      {proposal.shortName}
    </span>
  );
}
