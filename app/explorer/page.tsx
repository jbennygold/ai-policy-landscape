"use client";

import { useState } from "react";
import { charts } from "@/data/charts";
import { proposals } from "@/data/proposals";
import { Chart2x2 } from "@/components/chart-2x2";
import type { ChartSlug } from "@/lib/types";

export default function ExplorerPage() {
  const [activeChart, setActiveChart] = useState<ChartSlug>(charts[0].slug);
  const chart = charts.find((c) => c.slug === activeChart) ?? charts[0];

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex flex-wrap gap-2">
        {charts.map((c) => (
          <button
            key={c.slug}
            onClick={() => setActiveChart(c.slug)}
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              c.slug === activeChart
                ? "bg-[#1a56db] text-white"
                : "border border-stone-300 bg-white text-stone-700 hover:bg-stone-50"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="mt-8 w-full">
        <Chart2x2 chart={chart} proposals={proposals} />
      </div>

      <p className="mt-6 border-l-4 border-[#1a56db] pl-4 text-sm italic leading-relaxed text-stone-600">
        {chart.readingNote}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
        {proposals.map((p) => (
          <div key={p.slug} className="flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: p.color }}
            />
            <span className="text-xs text-stone-600">{p.shortName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
