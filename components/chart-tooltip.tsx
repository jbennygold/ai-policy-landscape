import type { Proposal } from "@/lib/types";

interface ChartTooltipProps {
  proposal: Proposal;
  x: number;
  y: number;
}

export function ChartTooltip({ proposal, x, y }: ChartTooltipProps) {
  return (
    <div
      className="pointer-events-none absolute z-50 w-64 rounded-lg border border-[#e7e5e4] bg-white p-3 shadow-lg"
      style={{ left: x + 16, top: y - 8 }}
    >
      <div className="flex items-center gap-2">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{ backgroundColor: proposal.color }}
        />
        <span className="text-sm font-semibold">{proposal.shortName}</span>
      </div>
      <p className="mt-1.5 text-xs leading-relaxed text-stone-600">
        {proposal.summary}
      </p>
      <p className="mt-1.5 text-xs font-medium text-[#78716c]">
        {proposal.primaryFrame}
      </p>
    </div>
  );
}
