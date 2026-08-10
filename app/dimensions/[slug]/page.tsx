import { notFound } from "next/navigation";
import Link from "next/link";
import { dimensions } from "@/data/dimensions";
import { proposals } from "@/data/proposals";
import { ProposalBadge } from "@/components/proposal-badge";
import { SectionHeading } from "@/components/section-heading";
import { LayerMatrix } from "@/components/layer-matrix";
import { LayerDefinitions } from "@/components/layer-incidence";

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
  const isLayers = dimension.slug === "industry-layers";

  return (
    <div
      className={`${isLayers ? "max-w-5xl" : "max-w-3xl"} mx-auto px-6 py-12`}
    >
      <div className={isLayers ? "max-w-3xl" : undefined}>
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
      </div>

      {isLayers && (
        <>
          <div className="mt-14">
            <SectionHeading
              title="The Four Layers"
              subtitle="Place a company by where the revenue comes from, not by what it says it is building"
            />
            <LayerDefinitions />
          </div>

          <div className="mt-14">
            <SectionHeading
              title="Incidence Matrix"
              subtitle="Which layer bears the cost of each proposal, and the base it is assessed on"
            />
            <LayerMatrix />
            <p className="mt-4 text-sm leading-relaxed text-stone-500">
              <span className="font-medium text-stone-700">Primary</span> is the
              layer an instrument is actually assessed on;{" "}
              <span className="font-medium text-stone-700">secondary</span> a
              real but non-target burden;{" "}
              <span className="font-medium text-stone-700">indirect</span> a
              cost reached only by pass-through. A{" "}
              <span className="font-medium text-stone-700">?</span> means the
              proposal names a payer without defining a base, so its incidence
              cannot be determined from the text.
            </p>
          </div>
        </>
      )}

      <div className={`mt-12 ${isLayers ? "max-w-3xl" : ""}`}>
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
