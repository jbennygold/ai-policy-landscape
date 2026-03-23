import { notFound } from "next/navigation";
import Link from "next/link";
import { dimensions } from "@/data/dimensions";
import { proposals } from "@/data/proposals";
import { ProposalBadge } from "@/components/proposal-badge";
import { SectionHeading } from "@/components/section-heading";

export function generateStaticParams() {
  return dimensions.map((d) => ({ slug: d.slug }));
}

export default async function DimensionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dimension = dimensions.find((d) => d.slug === slug);

  if (!dimension) {
    notFound();
  }

  const paragraphs = dimension.content.split("\n\n");

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="font-serif text-4xl font-bold text-stone-900">
        {dimension.title}
      </h1>
      <p className="mt-2 text-lg text-[#78716c]">{dimension.subtitle}</p>

      <div className="mt-8 space-y-4">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="text-stone-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-12">
        <SectionHeading title="Key Questions" />
        <ol className="list-decimal list-outside ml-5 space-y-3">
          {dimension.keyQuestions.map((question, i) => (
            <li key={i} className="text-stone-700 leading-relaxed pl-1">
              {question}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-12">
        <SectionHeading title="Proposals" subtitle="All proposals in this analysis" />
        <div className="flex flex-wrap gap-2">
          {proposals.map((proposal) => (
            <ProposalBadge key={proposal.slug} proposal={proposal} />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <Link
          href="/"
          className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors"
        >
          &larr; Back to overview
        </Link>
      </div>
    </div>
  );
}
