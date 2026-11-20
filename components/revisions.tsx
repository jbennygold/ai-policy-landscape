import type { Proposal } from "@/lib/types";
import { formatIntroduced } from "@/data/trends";

export function Revisions({ proposal }: { proposal: Proposal }) {
  if (!proposal.revisions?.length) return null;
  return (
    <>
      {proposal.revisions.map((r) => (
        <section
          key={r.label}
          className="mt-10 rounded-lg border-l-4 bg-stone-50 p-6"
          style={{ borderColor: proposal.color }}
        >
          <p className="font-mono text-xs uppercase tracking-wide text-stone-400">
            Direction of travel &middot; {formatIntroduced(r.date)}
          </p>
          <h2
            className="mt-1 text-xl font-semibold text-stone-900"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {r.label}
          </h2>
          <p className="mt-2 text-xs italic text-stone-500">{r.status}</p>
          <p className="mt-3 text-sm leading-relaxed text-stone-700">
            {r.summary}
          </p>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-stone-300 text-xs uppercase tracking-wide text-stone-500">
                  <th className="py-2 pr-4 font-medium">Area</th>
                  <th className="py-2 pr-4 font-medium">As introduced</th>
                  <th className="py-2 font-medium">{r.label}</th>
                </tr>
              </thead>
              <tbody>
                {r.changes.map((c) => (
                  <tr key={c.area} className="border-b border-stone-200 align-top">
                    <td className="py-2 pr-4 font-medium text-stone-900">
                      {c.area}
                    </td>
                    <td className="py-2 pr-4 text-stone-600">{c.before}</td>
                    <td className="py-2 text-stone-800">{c.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-stone-700">
            {r.direction}
          </p>
        </section>
      ))}
    </>
  );
}
