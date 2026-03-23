import { notFound } from "next/navigation";
import Link from "next/link";
import { proposals } from "@/data/proposals";
import { charts } from "@/data/charts";
import { Chart2x2 } from "@/components/chart-2x2";
import { ProposalBadge } from "@/components/proposal-badge";

export function generateStaticParams() {
  return proposals.map((p) => ({ slug: p.slug }));
}

export default async function ProposalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const proposal = proposals.find((p) => p.slug === slug);
  if (!proposal) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      {/* Accent bar */}
      <div
        className="mb-8 h-2 w-full rounded"
        style={{ backgroundColor: proposal.color }}
      />

      <p className="font-mono text-sm text-[#78716c]">
        {proposal.sponsor} &middot; {proposal.year}
      </p>

      <h1
        className="mt-2 text-4xl font-bold text-stone-900"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        {proposal.name}
      </h1>

      <div className="mt-4">
        <ProposalBadge proposal={proposal} />
      </div>

      <p className="mt-6 text-base leading-relaxed text-stone-700">
        {proposal.summary}
      </p>

      <h2
        className="mt-10 text-2xl font-semibold text-stone-900"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Key Provisions
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-stone-700">
        {proposal.keyProvisions.map((provision) => (
          <li key={provision}>{provision}</li>
        ))}
      </ul>

      <h2
        className="mt-10 text-2xl font-semibold text-stone-900"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Regulatory Philosophy
      </h2>
      <p className="mt-4 text-base leading-relaxed text-stone-700">
        {proposal.regulatoryPhilosophy}
      </p>

      <h2
        className="mt-10 text-2xl font-semibold text-stone-900"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        Position on Analytical Frameworks
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {charts.map((chart) => (
          <div key={chart.slug}>
            <p className="mb-2 text-xs font-medium text-stone-500">
              {chart.title}
            </p>
            <Chart2x2
              chart={chart}
              proposals={proposals}
              compact
              highlightedSlug={proposal.slug}
            />
          </div>
        ))}
      </div>

      <Link
        href="/proposals"
        className="mt-12 inline-block text-sm font-medium text-[#1a56db] hover:underline"
      >
        &larr; Back to all proposals
      </Link>
    </div>
  );
}
