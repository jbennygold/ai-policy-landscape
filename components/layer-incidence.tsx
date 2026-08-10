import Link from "next/link";
import type { Proposal } from "@/lib/types";
import { layers, incidenceMeta } from "@/data/layers";

/**
 * Compact per-proposal view of which industry layer actually bears the cost,
 * rendered on the proposal detail page.
 */
export function LayerIncidence({ proposal }: { proposal: Proposal }) {
  const ordered = [...layers].sort(
    (a, b) =>
      incidenceMeta[proposal.layers.incidence[b.slug]].weight -
      incidenceMeta[proposal.layers.incidence[a.slug]].weight
  );

  return (
    <div className="mt-10 rounded-lg border border-[#e7e5e4] bg-white p-6">
      <p className="font-mono text-xs uppercase tracking-wide text-stone-400">
        Where the burden falls
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {ordered.map((layer) => {
          const level = proposal.layers.incidence[layer.slug];
          const meta = incidenceMeta[level];
          const muted = level === "none" || level === "unspecified";

          return (
            <span
              key={layer.slug}
              title={meta.description}
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
              style={{
                backgroundColor: muted ? "#f5f5f4" : layer.color + "18",
                color: muted ? "#a8a29e" : layer.color,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: muted ? "#d6d3d1" : layer.color,
                  opacity: level === "indirect" ? 0.45 : 1,
                }}
              />
              {layer.name}
              <span className="font-normal opacity-70">{meta.label}</span>
            </span>
          );
        })}
      </div>

      <dl className="mt-5 space-y-3 text-sm">
        <div>
          <dt className="font-semibold text-stone-900">Base assessed</dt>
          <dd className="mt-0.5 text-stone-700">{proposal.layers.base}</dd>
        </div>
        <div>
          <dt className="font-semibold text-stone-900">Why it lands there</dt>
          <dd className="mt-0.5 leading-relaxed text-stone-700">
            {proposal.layers.note}
          </dd>
        </div>
      </dl>

      <Link
        href="/dimensions/industry-layers"
        className="mt-4 inline-block text-sm font-medium text-[#1a56db] hover:underline"
      >
        Compare all proposals by layer &rarr;
      </Link>
    </div>
  );
}

/** The four layers, their revenue basis, and what winning looks like for each. */
export function LayerDefinitions() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {layers.map((layer) => (
        <div
          key={layer.slug}
          className="rounded-lg border border-[#e7e5e4] bg-white p-5"
          style={{ borderTopColor: layer.color, borderTopWidth: 3 }}
        >
          <h3
            className="text-lg font-semibold text-stone-900"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {layer.name}
          </h3>
          <p className="mt-0.5 text-sm font-medium" style={{ color: layer.color }}>
            Sells {layer.sells.toLowerCase()}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            {layer.description}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-stone-700">
            <span className="font-semibold">Winning looks like:</span>{" "}
            {layer.winCondition}
          </p>
          <p className="mt-3 font-mono text-xs leading-relaxed text-stone-400">
            {layer.examples.join(" · ")}
          </p>
        </div>
      ))}
    </div>
  );
}
