import Link from "next/link";
import { proposals } from "@/data/proposals";
import { layers, incidenceMeta } from "@/data/layers";
import type { IncidenceLevel } from "@/lib/types";

function IncidenceCell({
  level,
  color,
}: {
  level: IncidenceLevel;
  color: string;
}) {
  const meta = incidenceMeta[level];

  if (level === "none") {
    return (
      <td className="px-3 py-2.5 text-center align-middle">
        <span className="text-stone-300" aria-label="None">
          &mdash;
        </span>
      </td>
    );
  }

  if (level === "unspecified") {
    return (
      <td className="px-3 py-2.5 text-center align-middle">
        <span
          className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-dashed border-stone-400 font-mono text-xs text-stone-500"
          title={meta.description}
          aria-label="Unspecified"
        >
          ?
        </span>
      </td>
    );
  }

  return (
    <td className="px-3 py-2.5 text-center align-middle">
      <span
        className="inline-block rounded px-2 py-1 text-[11px] font-medium leading-none"
        style={{
          backgroundColor: color + (level === "primary" ? "" : "22"),
          color: level === "primary" ? "#fff" : color,
        }}
        title={meta.description}
      >
        {meta.label}
      </span>
    </td>
  );
}

export function LayerMatrix() {
  return (
    <div className="-mx-6 overflow-x-auto px-6 lg:mx-0 lg:px-0">
      <table className="w-full min-w-[52rem] border-collapse text-sm">
        <thead>
          <tr className="border-b border-stone-300">
            <th className="px-3 py-2.5 text-left font-semibold text-stone-900">
              Proposal
            </th>
            {layers.map((layer) => (
              <th
                key={layer.slug}
                className="px-3 py-2.5 text-center font-semibold"
                style={{ color: layer.color }}
              >
                {layer.name}
              </th>
            ))}
            <th className="px-3 py-2.5 text-left font-semibold text-stone-900">
              Base assessed
            </th>
          </tr>
        </thead>
        <tbody>
          {proposals.map((p) => (
            <tr
              key={p.slug}
              className="border-b border-stone-200 align-middle hover:bg-stone-50"
            >
              <th scope="row" className="px-3 py-2.5 text-left font-normal">
                <Link
                  href={`/proposals/${p.slug}`}
                  className="inline-flex items-center gap-1.5 font-medium text-stone-900 hover:underline"
                >
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: p.color }}
                  />
                  {p.shortName}
                </Link>
              </th>
              {layers.map((layer) => (
                <IncidenceCell
                  key={layer.slug}
                  level={p.layers.incidence[layer.slug]}
                  color={layer.color}
                />
              ))}
              <td className="px-3 py-2.5 text-stone-600">{p.layers.base}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
