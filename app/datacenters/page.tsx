import Link from "next/link";
import { proposals } from "@/data/proposals";
import { dataCenterIssues, postureMeta } from "@/data/datacenters";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Data Centers | AI Policy Landscape",
  description:
    "Where AI policy becomes physical: how the major proposals treat data center siting, power, water, emissions, subsidies, and local authority.",
};

const engaged = proposals
  .filter((p) => p.dataCenter)
  .sort(
    (a, b) =>
      postureMeta[a.dataCenter!.posture].order -
      postureMeta[b.dataCenter!.posture].order
  );

const silent = proposals.filter((p) => !p.dataCenter);

export default function DataCentersPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-stone-900">
          Data Centers
        </h1>
        <p className="mt-2 text-lg text-[#78716c]">
          Where AI policy stops being about models and becomes about land,
          water, and power
        </p>

        <div className="mt-8 space-y-4 leading-relaxed text-stone-700">
          <p>
            Most of the AI debate is conducted at a level of abstraction that
            never touches ground — capability thresholds, evaluation regimes,
            preemption doctrine. Data centers are where it lands. More than
            4,400 registered facilities now operate across the United States,
            with at least one in every state, and the fights they generate are
            about the oldest questions in American governance: who decides what
            gets built, who pays for the infrastructure it requires, and who
            absorbs what it emits.
          </p>
          <p>
            This is also the arena where the industry-layer analysis is most
            visible. Hyperscalers carry nearly all of the physical exposure.
            Frontier labs carry it indirectly, through the lease commitments
            that underwrite construction — and those commitments transfer, as
            the disclosure of a competitor renting frontier-scale capacity from
            a rival&apos;s fleet made plain. The app layer, which consumes the
            capacity all of this exists to supply, carries none of it, which is
            why app-layer companies are absent from these fights entirely.
          </p>
          <p>
            The proposals that engage sort along a single spectrum: whether a
            community may refuse a facility, or may only negotiate its terms.
            Everything below the halt-and-consent end accepts the buildout as
            given and argues about conditions.
          </p>
        </div>
      </div>

      {/* Posture spectrum */}
      <div className="mt-14">
        <SectionHeading
          title="The Spectrum"
          subtitle={`${engaged.length} of ${proposals.length} proposals say anything specific about data centers`}
        />
        <div className="space-y-3">
          {engaged.map((p) => {
            const dc = p.dataCenter!;
            const meta = postureMeta[dc.posture];
            return (
              <div
                key={p.slug}
                className="rounded-lg border border-[#e7e5e4] bg-white p-5"
                style={{ borderLeftColor: meta.color, borderLeftWidth: 4 }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <Link
                    href={`/proposals/${p.slug}`}
                    className="font-serif text-lg font-semibold text-stone-900 hover:underline"
                  >
                    {p.name}
                  </Link>
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                    style={{
                      backgroundColor: meta.color + "18",
                      color: meta.color,
                    }}
                  >
                    {meta.label}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">
                  {dc.summary}
                </p>
                <p className="mt-2 text-sm text-stone-500">
                  <span className="font-medium text-stone-700">
                    Who decides:
                  </span>{" "}
                  {dc.decisionMaker}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Coverage matrix */}
      <div className="mt-14">
        <SectionHeading
          title="Issue Coverage"
          subtitle="Which contested questions each proposal actually reaches"
        />
        <div className="-mx-6 overflow-x-auto px-6 lg:mx-0 lg:px-0">
          <table className="w-full min-w-[46rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-stone-300">
                <th className="px-3 py-2.5 text-left font-semibold text-stone-900">
                  Proposal
                </th>
                {dataCenterIssues.map((issue) => (
                  <th
                    key={issue.slug}
                    className="px-3 py-2.5 text-center font-semibold text-stone-900"
                    title={issue.description}
                  >
                    {issue.short}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {engaged.map((p) => (
                <tr
                  key={p.slug}
                  className="border-b border-stone-200 hover:bg-stone-50"
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
                  {dataCenterIssues.map((issue) => {
                    const hit = p.dataCenter!.addresses.includes(issue.slug);
                    return (
                      <td
                        key={issue.slug}
                        className="px-3 py-2.5 text-center align-middle"
                      >
                        {hit ? (
                          <span
                            className="inline-block h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: p.color }}
                            aria-label="Addressed"
                          />
                        ) : (
                          <span
                            className="text-stone-300"
                            aria-label="Not addressed"
                          >
                            &mdash;
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Issue definitions */}
      <div className="mt-14">
        <SectionHeading
          title="The Contested Questions"
          subtitle="What is actually being fought over, issue by issue"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {dataCenterIssues.map((issue) => (
            <div
              key={issue.slug}
              className="rounded-lg border border-[#e7e5e4] bg-white p-5"
            >
              <h3
                className="text-base font-semibold text-stone-900"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {issue.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {issue.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Silence */}
      <div className="mt-14 max-w-3xl">
        <SectionHeading
          title="The Silence"
          subtitle={`${silent.length} proposals say nothing specific about data centers`}
        />
        <p className="leading-relaxed text-stone-700">
          The omission is structured, not random. Proposals built around model
          capability — the frontier safety frameworks, the state transparency
          laws, the evaluation regimes — treat AI as software and have no
          vocabulary for land use. Proposals built around workers and taxation
          reach the buildout only through the tax code, if at all. The result is
          that the most locally contentious consequence of AI development is
          absent from most of the documents that claim to govern it.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {silent.map((p) => (
            <Link
              key={p.slug}
              href={`/proposals/${p.slug}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-500 transition-colors hover:bg-stone-200 hover:text-stone-900"
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: p.color, opacity: 0.4 }}
              />
              {p.shortName}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <Link
          href="/dimensions/industry-layers"
          className="text-sm font-medium text-[#1a56db] hover:underline"
        >
          See which industry layer bears these costs &rarr;
        </Link>
      </div>
    </div>
  );
}
