import { proposals } from "@/data/proposals";
import { comparisonRows } from "@/data/comparison-table";

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-lg border border-stone-200 bg-white">
      <table className="min-w-[900px] w-full text-sm">
        <thead>
          <tr className="border-b border-stone-200 bg-stone-50">
            <th className="sticky left-0 z-10 bg-stone-50 px-4 py-3 text-left text-xs font-semibold text-stone-500 uppercase tracking-wide min-w-[160px]">
              Dimension
            </th>
            {proposals.map((p) => (
              <th
                key={p.slug}
                className="px-3 py-3 text-left text-xs font-semibold text-stone-700 min-w-[120px]"
              >
                <span className="flex items-center gap-1.5">
                  <span
                    className="inline-block h-2 w-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: p.color }}
                  />
                  {p.shortName}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, i) => (
            <tr
              key={row.dimension}
              className={
                i % 2 === 0
                  ? "bg-white"
                  : "bg-stone-50/50"
              }
            >
              <td className="sticky left-0 z-10 px-4 py-2.5 font-medium text-stone-900 text-xs border-r border-stone-100"
                style={{ backgroundColor: i % 2 === 0 ? "white" : "rgb(250 250 249 / 0.5)" }}
              >
                {row.dimension}
              </td>
              {proposals.map((p) => (
                <td
                  key={p.slug}
                  className="px-3 py-2.5 text-xs text-stone-600"
                >
                  {row.values[p.slug]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
