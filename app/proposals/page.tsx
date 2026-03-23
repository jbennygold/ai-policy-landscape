import { proposals } from "@/data/proposals";
import { ProposalCard } from "@/components/proposal-card";
import { SectionHeading } from "@/components/section-heading";

export default function ProposalsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <SectionHeading
        title="All Proposals"
        subtitle="Eight major approaches to governing AI in the United States"
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {proposals.map((p) => (
          <ProposalCard key={p.slug} proposal={p} />
        ))}
      </div>
    </div>
  );
}
