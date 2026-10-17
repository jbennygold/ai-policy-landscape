import Link from "next/link";
import { proposals } from "@/data/proposals";
import { frontierFamily as family } from "@/data/families";
import { formatIntroduced } from "@/data/trends";
import { SectionHeading } from "@/components/section-heading";
import type { ProposalSlug } from "@/lib/types";

export const metadata = {
  title: "Frontier Framework Family | AI Policy Landscape",
  description:
    "Eight frontier AI proposals built on the SB 53 design, compared on coverage, who checks, incident reporting, who can stop a model, and preemption.",
};

function proposal(slug: ProposalSlug) {
  const p = proposals.find((x) => x.slug === slug);
  // A family member must be on the map; fail the build rather than render a dead link.
  if (!p) throw new Error(`Family member ${slug} is not a proposal`);
  return p;
}

const members = family.members.map((m) => ({ ...m, proposal: proposal(m.slug) }));
const related = family.related.map((r) => ({ ...r, proposal: proposal(r.slug) }));

export default function FrontierFamilyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <SectionHeading title={family.title} subtitle={family.subtitle} />

      <div className="max-w-3xl space-y-4 leading-relaxed text-stone-700">
        {family.intro.map((para) => (
          <p key={para.slice(0, 40)}>{para}</p>
        ))}
      </div>

      <div className="mt-12">
        <h2
          className="text-2xl font-semibold text-stone-900"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Side by side
        </h2>
        <p className="mt-2 text-sm text-stone-500">
          In order of when each entered the debate. Scroll sideways on a small
          screen.
        </p>
        <div className="-mx-6 mt-5 overflow-x-auto px-6 lg:mx-0 lg:px-0">
          <table className="w-full min-w-[60rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-stone-300 bg-stone-50">
                <th className="sticky left-0 z-10 w-44 bg-stone-50 px-3 py-3 text-left text-xs font-semibold uppercase tracking-wide text-stone-500">
                  Proposal
                </th>
                {family.columns.map((c) => (
                  <th
                    key={c.key}
                    title={c.hint}
                    className="px-3 py-3 text-left align-bottom text-xs font-semibold uppercase tracking-wide text-stone-500"
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {members.map((m) => (
                <tr key={m.slug} className="border-b border-stone-200 align-top">
                  <th
                    scope="row"
                    className="sticky left-0 z-10 bg-white px-3 py-3 text-left font-medium"
                  >
                    <Link
                      href={`/proposals/${m.slug}`}
                      className="flex items-start gap-2 text-stone-900 hover:underline"
                    >
                      <span
                        className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: m.proposal.color }}
                      />
                      <span>
                        {m.proposal.shortName}
                        <span className="block text-xs font-normal text-stone-500">
                          {formatIntroduced(m.proposal.introduced)}
                        </span>
                      </span>
                    </Link>
                  </th>
                  {family.columns.map((c) => (
                    <td
                      key={c.key}
                      className="px-3 py-3 leading-relaxed text-stone-700"
                    >
                      {m.cells[c.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <dl className="mt-6 grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
          {family.columns.map((c) => (
            <div key={c.key}>
              <dt className="font-semibold text-stone-900">{c.label}</dt>
              <dd className="mt-0.5 text-stone-600">{c.hint}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-14 max-w-3xl">
        <h2
          className="text-2xl font-semibold text-stone-900"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          What the comparison shows
        </h2>
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-stone-700">
          {family.observations.map((o) => (
            <li key={o.slice(0, 40)}>{o}</li>
          ))}
        </ul>
      </div>

      <div className="mt-14 max-w-3xl">
        <h2
          className="text-2xl font-semibold text-stone-900"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Related, but built differently
        </h2>
        <div className="mt-4 space-y-3">
          {related.map((r) => (
            <div
              key={r.slug}
              className="rounded-lg border border-stone-200 bg-white p-4"
            >
              <Link
                href={`/proposals/${r.slug}`}
                className="flex items-center gap-2 font-semibold text-stone-900 hover:underline"
              >
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: r.proposal.color }}
                />
                {r.proposal.shortName}
              </Link>
              <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                {r.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
