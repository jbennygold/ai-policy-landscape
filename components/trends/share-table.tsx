export interface ShareRow {
  key: string;
  label: string;
  color: string;
  /** Count per period, aligned with the periods prop. */
  counts: number[];
}

interface ShareTableProps {
  periods: { label: string; total: number }[];
  rows: ShareRow[];
}

/**
 * Shares rather than counts: the corpus is curated, so the number of entries
 * in a period says more about curation than about the field, while the mix
 * within a period is the signal.
 */
export function ShareTable({ periods, rows }: ShareTableProps) {
  return (
    <div className="-mx-6 overflow-x-auto px-6 lg:mx-0 lg:px-0">
      <table className="w-full min-w-[40rem] border-collapse text-sm">
        <thead>
          <tr className="border-b border-stone-300">
            <th className="px-3 py-2.5 text-left font-semibold text-stone-900" />
            {periods.map((p) => (
              <th
                key={p.label}
                className="px-3 py-2.5 text-left font-semibold text-stone-900"
              >
                {p.label}
                <span className="ml-1.5 font-normal text-stone-500">
                  n={p.total}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key} className="border-b border-stone-200">
              <td className="whitespace-nowrap px-3 py-3 font-medium text-stone-800">
                {row.label}
              </td>
              {row.counts.map((n, i) => {
                const total = periods[i].total;
                const share = total ? n / total : 0;
                return (
                  <td key={periods[i].label} className="px-3 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-28 rounded-full bg-stone-100">
                        <div
                          className="h-2.5 rounded-full"
                          style={{
                            width: `${share * 100}%`,
                            backgroundColor: row.color,
                          }}
                        />
                      </div>
                      <span className="tabular-nums text-stone-600">
                        {Math.round(share * 100)}%
                        <span className="ml-1 text-stone-400">
                          ({n}/{total})
                        </span>
                      </span>
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
