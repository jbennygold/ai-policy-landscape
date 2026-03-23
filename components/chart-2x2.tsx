"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Proposal, Chart2x2 as Chart2x2Type, ChartSlug, ProposalSlug } from "@/lib/types";
import { ChartTooltip } from "./chart-tooltip";

const PAD = 60;
const W = 600;
const H = 500;
const INNER_W = W - PAD * 2;
const INNER_H = H - PAD * 2;

function toSvgX(val: number) {
  return PAD + (val / 100) * INNER_W;
}

function toSvgY(val: number) {
  return PAD + ((100 - val) / 100) * INNER_H;
}

interface Chart2x2Props {
  chart: Chart2x2Type;
  proposals: Proposal[];
  highlightedSlug?: ProposalSlug;
  compact?: boolean;
}

export function Chart2x2({
  chart,
  proposals,
  highlightedSlug,
  compact = false,
}: Chart2x2Props) {
  const router = useRouter();
  const [hovered, setHovered] = useState<{
    proposal: Proposal;
    x: number;
    y: number;
  } | null>(null);

  const handleDotHover = useCallback(
    (proposal: Proposal | null, clientX: number, clientY: number, svgEl: SVGSVGElement | null) => {
      if (!proposal || !svgEl) {
        setHovered(null);
        return;
      }
      const rect = svgEl.getBoundingClientRect();
      setHovered({
        proposal,
        x: clientX - rect.left,
        y: clientY - rect.top,
      });
    },
    []
  );

  const midX = PAD + INNER_W / 2;
  const midY = PAD + INNER_H / 2;
  const dotR = compact ? 5 : 7;
  const fontSize = compact ? 8 : 10;

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        style={{ maxWidth: compact ? 300 : 600 }}
      >
        {/* Quadrant background */}
        <rect x={PAD} y={PAD} width={INNER_W} height={INNER_H} fill="#fafaf9" rx={4} />

        {/* Center cross */}
        <line x1={midX} y1={PAD} x2={midX} y2={PAD + INNER_H} stroke="#d6d3d1" strokeDasharray="4 4" />
        <line x1={PAD} y1={midY} x2={PAD + INNER_W} y2={midY} stroke="#d6d3d1" strokeDasharray="4 4" />

        {/* Border */}
        <rect x={PAD} y={PAD} width={INNER_W} height={INNER_H} fill="none" stroke="#d6d3d1" rx={4} />

        {!compact && (
          <>
            {/* X axis labels */}
            <text x={PAD + 4} y={H - 8} className="fill-stone-400 text-[10px]">
              {chart.xLow}
            </text>
            <text x={PAD + INNER_W - 4} y={H - 8} textAnchor="end" className="fill-stone-400 text-[10px]">
              {chart.xHigh}
            </text>

            {/* Y axis labels */}
            <text
              x={8}
              y={PAD + INNER_H - 10}
              textAnchor="middle"
              transform={`rotate(-90, 8, ${PAD + INNER_H - 10})`}
              className="fill-stone-400 text-[10px]"
            >
              {chart.yLow}
            </text>
            <text
              x={8}
              y={PAD + 10}
              textAnchor="middle"
              transform={`rotate(-90, 8, ${PAD + 10})`}
              className="fill-stone-400 text-[10px]"
            >
              {chart.yHigh}
            </text>

            {/* Axis titles */}
            <text x={midX} y={H - 22} textAnchor="middle" className="fill-stone-500 text-[11px] font-medium">
              {chart.xAxisLabel}
            </text>
            <text
              x={22}
              y={midY}
              textAnchor="middle"
              transform={`rotate(-90, 22, ${midY})`}
              className="fill-stone-500 text-[11px] font-medium"
            >
              {chart.yAxisLabel}
            </text>
          </>
        )}

        {/* Proposal dots */}
        {proposals.map((p) => {
          const pos = p.chartPositions[chart.slug as ChartSlug];
          if (!pos) return null;
          const cx = toSvgX(pos.x);
          const cy = toSvgY(pos.y);
          const isDimmed = highlightedSlug && p.slug !== highlightedSlug;
          const isHighlighted = highlightedSlug && p.slug === highlightedSlug;

          return (
            <g
              key={p.slug}
              className="cursor-pointer"
              onMouseEnter={(e) =>
                handleDotHover(p, e.clientX, e.clientY, e.currentTarget.closest("svg"))
              }
              onMouseLeave={() => handleDotHover(null, 0, 0, null)}
              onClick={() => router.push(`/proposals/${p.slug}`)}
            >
              <circle
                cx={cx}
                cy={cy}
                r={isHighlighted ? dotR + 3 : dotR}
                fill={p.color}
                opacity={isDimmed ? 0.25 : 0.85}
                className="transition-all duration-150"
              />
              {!compact && (
                <text
                  x={cx}
                  y={cy - dotR - 4}
                  textAnchor="middle"
                  className="fill-stone-700 font-medium"
                  style={{ fontFamily: "var(--font-mono)", fontSize }}
                  opacity={isDimmed ? 0.3 : 1}
                >
                  {p.shortName}
                </text>
              )}
            </g>
          );
        })}
      </svg>

      {hovered && !compact && (
        <ChartTooltip
          proposal={hovered.proposal}
          x={hovered.x}
          y={hovered.y}
        />
      )}
    </div>
  );
}
