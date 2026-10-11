import Link from "next/link";
import { proposals } from "@/data/proposals";
import {
  assertTrendData,
  events,
  formatIntroduced,
  groupByPeriod,
  instrumentMeta,
  monthValue,
  oversightMeta,
  parseIntroduced,
  preemptionMeta,
  sortByDate,
  themeMeta,
} from "@/data/trends";
import type { OversightLevel, Proposal, Theme } from "@/lib/types";
import { SectionHeading } from "@/components/section-heading";
import { DateStrip } from "@/components/trends/date-strip";
import { ShareTable } from "@/components/trends/share-table";

export const metadata = {
  title: "Trends | AI Policy Landscape",
  description:
    "Direction of travel: how the AI proposals on this map have changed over time — in what they address, how much oversight they seek, and whether they carry legal text.",
};

assertTrendData(proposals);

const sorted = sortByDate(proposals);
const groups = groupByPeriod(proposals);
const periods = groups.map((g) => ({ label: g.period, total: g.items.length }));
const domain: [number, number] = [
  Math.floor(monthValue(sorted[0].introduced)),
  Math.floor(monthValue(sorted[sorted.length - 1].introduced)) + 1,
];

const hasText = (p: Proposal) => instrumentMeta[p.instrument].hasText;
const isSafety = (p: Proposal) => p.themes.includes("frontier-safety");
const pct = (n: number, d: number) => (d ? Math.round((n / d) * 100) : 0);

function themeTrend(theme: Theme) {
  return groups
    .map(
      (g) =>
        `${g.period} ${pct(
          g.items.filter((p) => p.themes.includes(theme)).length,
          g.items.length
        )}%`
    )
    .join(", ");
}

const ladderLevels: OversightLevel[] = [
  "intervention",
  "verification",
  "disclosure",
  "liability",
];

// Findings are generated from the data so they stay true as entries are added.
const findings: string[] = [];

const interventions = sorted.filter((p) => p.oversight === "intervention");
if (interventions.length) {
  const firstT = monthValue(interventions[0].introduced);
  const before = sorted.filter(
    (p) => isSafety(p) && monthValue(p.introduced) < firstT
  );
  const since = sorted.filter(
    (p) => isSafety(p) && monthValue(p.introduced) >= firstT
  );
  findings.push(
    `None of the ${before.length} frontier-safety proposals before ${formatIntroduced(
      interventions[0].introduced
    )} gave anyone outside the developer the power to stop a frontier model. Of the ${
      since.length
    } since, ${interventions.length} do.`
  );
}

findings.push(
  ...groups
    .map((g) => {
      const safety = g.items.filter(isSafety);
      if (!safety.length) return null;
      const counts = ladderLevels.map((level) => ({
        level,
        n: safety.filter((p) => p.oversight === level).length,
      }));
      const max = Math.max(...counts.map((c) => c.n));
      const leaders = counts
        .filter((c) => c.n === max)
        .map((c) => oversightMeta[c.level].label.toLowerCase());
      return leaders.length === 1
        ? `${g.period}: the most common oversight rung among frontier-safety proposals was ${leaders[0]} (${max} of ${safety.length}).`
        : `${g.period}: frontier-safety proposals split evenly between ${leaders.join(
            " and "
          )} (${max} each of ${safety.length}).`;
    })
    .filter((s): s is string => s !== null)
);

findings.push(
  `Share of each period's proposals addressing frontier safety: ${themeTrend(
    "frontier-safety"
  )}. Workers and the economy: ${themeTrend("economic")}.`
);

findings.push(
  `Share carrying legal text — bills, drafts, state laws, or executive orders — rather than position papers: ${groups
    .map(
      (g) =>
        `${g.period} ${pct(g.items.filter(hasText).length, g.items.length)}%`
    )
    .join(", ")}.`
);

findings.push(
  `Proposals seeking federal preemption of state AI law versus opposing it, by period: ${groups
    .map(
      (g) =>
        `${g.period} ${g.items.filter((p) => p.preemption === "seeks").length} to ${
          g.items.filter((p) => p.preemption === "opposes").length
        }`
    )
    .join(", ")}.`
);

const point = (p: Proposal, rowKey: string) => ({
  slug: p.slug,
  label: `${p.shortName} — ${formatIntroduced(p.introduced)}`,
  rowKey,
  t: monthValue(p.introduced),
  color: p.color,
  hollow: !hasText(p),
});

const instrumentRows = (
  Object.keys(instrumentMeta) as (keyof typeof instrumentMeta)[]
)
  .filter((k) => proposals.some((p) => p.instrument === k))
  .map((k) => ({ key: k, label: instrumentMeta[k].label }));

const markers = events.map((e) => ({ t: monthValue(e.date), label: e.label }));

const monthOnly = sorted.filter(
  (p) => parseIntroduced(p.introduced).day === undefined
);

function Legend() {
  return (
    <p className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-stone-500">
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-block h-3 w-3 rounded-full border-2 border-stone-600 bg-stone-600" />
        Legal text (bill, draft, state law, executive order)
      </span>
      <span className="inline-flex items-center gap-1.5">
        <span className="inline-block h-3 w-3 rounded-full border-2 border-stone-600 bg-white" />
        Position paper (framework, platform, industry document, resolution)
      </span>
      <span>Hover a dot for its name; click to open it.</span>
    </p>
  );
}

export default function TrendsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="max-w-3xl">
        <h1 className="font-serif text-4xl font-bold text-stone-900">
          Direction of Travel
        </h1>
        <p className="mt-2 text-lg text-[#78716c]">
          How the proposals on this map have changed over time
        </p>

        <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-relaxed text-stone-700">
          <p className="font-semibold text-stone-900">
            What this page can and cannot say
          </p>
          <p className="mt-2">
            The {proposals.length} proposals here are a curated set, not a
            census of AI legislation. How many land in a given month mostly
            reflects what was added to the map, so this page does not answer
            whether the volume of AI policy is rising. It answers a narrower
            question that curation distorts less: among the proposals that
            matter enough to be on the map, how is the mix changing — in what
            they address, how much oversight they seek, and whether they come
            with legal text. Periods are half-years because the set is too
            small for anything finer, and a single entry can move a share by
            ten points or more.
          </p>
        </div>
      </div>

      <div className="mt-14 max-w-3xl">
        <SectionHeading title="What the dates show" />
        <ul className="space-y-3 leading-relaxed text-stone-700">
          {findings.map((f) => (
            <li key={f} className="flex gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14">
        <SectionHeading
          title="Timeline"
          subtitle={`Every proposal by the date it entered the debate, ${formatIntroduced(
            sorted[0].introduced
          )} to ${formatIntroduced(sorted[sorted.length - 1].introduced)}`}
        />
        <DateStrip
          rows={instrumentRows}
          points={proposals.map((p) => point(p, p.instrument))}
          domain={domain}
          markers={markers}
          ariaLabel="Timeline of proposals by instrument type"
        />
        <Legend />
      </div>

      <div className="mt-14">
        <SectionHeading
          title="What proposals address"
          subtitle="Share of each period's proposals touching each theme; a proposal can address several"
        />
        <ShareTable
          periods={periods}
          rows={(Object.keys(themeMeta) as Theme[]).map((theme) => ({
            key: theme,
            label: themeMeta[theme].label,
            color: themeMeta[theme].color,
            counts: groups.map(
              (g) => g.items.filter((p) => p.themes.includes(theme)).length
            ),
          }))}
        />
      </div>

      <div className="mt-14">
        <SectionHeading
          title="The oversight ladder"
          subtitle="The strongest oversight each frontier-safety proposal contemplates, from developers answering for harm after the fact to someone able to stop a model"
        />
        <DateStrip
          rows={ladderLevels.map((level) => ({
            key: level,
            label: oversightMeta[level].label,
            hint: oversightMeta[level].description,
          }))}
          points={proposals
            .filter((p) => p.oversight !== "none")
            .map((p) => point(p, p.oversight))}
          domain={domain}
          markers={markers}
          ariaLabel="Frontier-safety proposals by date and oversight level"
        />
        <Legend />
        <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {ladderLevels.map((level) => (
            <div key={level}>
              <dt className="font-semibold text-stone-900">
                {oversightMeta[level].label}
              </dt>
              <dd className="mt-1 leading-relaxed text-stone-600">
                {oversightMeta[level].description}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-stone-600">
          The dashed line marks an incident that later proposals cite as a
          reason to act. Proximity in time shows sequence, not cause: the
          bills that follow it were drafted over months.
        </p>
      </div>

      <div className="mt-14">
        <SectionHeading
          title="Preemption over time"
          subtitle="Each proposal's stance on federal preemption of state AI law"
        />
        <DateStrip
          rows={(Object.keys(preemptionMeta) as (keyof typeof preemptionMeta)[])
            .sort((a, b) => preemptionMeta[a].order - preemptionMeta[b].order)
            .map((k) => ({ key: k, label: preemptionMeta[k].label }))}
          points={proposals.map((p) => point(p, p.preemption))}
          domain={domain}
          ariaLabel="Proposals by date and preemption stance"
        />
        <Legend />
      </div>

      <div className="mt-14">
        <SectionHeading
          title="From position papers to legal text"
          subtitle="Share of each period's proposals that come with operative language"
        />
        <ShareTable
          periods={periods}
          rows={[
            {
              key: "text",
              label: "Legal text",
              color: "#44403c",
              counts: groups.map((g) => g.items.filter(hasText).length),
            },
            {
              key: "position",
              label: "Position paper",
              color: "#a8a29e",
              counts: groups.map(
                (g) => g.items.filter((p) => !hasText(p)).length
              ),
            },
          ]}
        />
      </div>

      <div className="mt-14">
        <SectionHeading title="Chronology" />
        <div className="-mx-6 overflow-x-auto px-6 lg:mx-0 lg:px-0">
          <table className="w-full min-w-[40rem] border-collapse text-sm">
            <thead>
              <tr className="border-b border-stone-300 text-left">
                <th className="px-3 py-2.5 font-semibold text-stone-900">Date</th>
                <th className="px-3 py-2.5 font-semibold text-stone-900">Proposal</th>
                <th className="px-3 py-2.5 font-semibold text-stone-900">Form</th>
                <th className="px-3 py-2.5 font-semibold text-stone-900">Oversight</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((p) => (
                <tr key={p.slug} className="border-b border-stone-200 hover:bg-stone-50">
                  <td className="whitespace-nowrap px-3 py-2.5 tabular-nums text-stone-600">
                    {formatIntroduced(p.introduced)}
                  </td>
                  <td className="px-3 py-2.5">
                    <Link
                      href={`/proposals/${p.slug}`}
                      className="font-medium text-stone-900 hover:underline"
                    >
                      {p.shortName}
                    </Link>
                  </td>
                  <td className="px-3 py-2.5 text-stone-600">
                    {instrumentMeta[p.instrument].label}
                  </td>
                  <td className="px-3 py-2.5 text-stone-600">
                    {p.oversight === "none" ? "—" : oversightMeta[p.oversight].label}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-14 max-w-3xl text-sm leading-relaxed text-stone-600">
        <h2 className="font-serif text-xl font-semibold text-stone-900">
          Method
        </h2>
        <p className="mt-3">
          Each proposal is dated to when it entered the debate: introduction
          for bills, signing for laws and executive orders, release for drafts,
          frameworks, and industry documents, and first press report for
          unpublished drafts. Themes, oversight level, and preemption stance
          are editorial tags assigned from each proposal&apos;s own text, and
          the oversight level records the strongest mechanism a proposal
          contemplates, whether or not it is binding — which is why the legend
          separates legal text from position papers.
        </p>
        {monthOnly.length > 0 && (
          <p className="mt-3">
            Dated to the month only, and placed mid-month:{" "}
            {monthOnly.map((p, i) => (
              <span key={p.slug}>
                {i > 0 && ", "}
                <Link href={`/proposals/${p.slug}`} className="underline">
                  {p.shortName}
                </Link>
              </span>
            ))}
            .
          </p>
        )}
      </div>
    </div>
  );
}
