import { gaps } from "@/data/gaps";
import { SectionHeading } from "@/components/section-heading";

export default function GapsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <SectionHeading
        title="What's Missing"
        subtitle="Notable gaps across the current landscape of proposals"
      />

      <p className="mb-8 text-base leading-relaxed text-stone-600">
        Despite the breadth of the current proposals, several important topics
        remain underaddressed or absent from the legislative conversation
        entirely.
      </p>

      <div className="space-y-4">
        {gaps.map((gap) => (
          <div
            key={gap.title}
            className="rounded-lg border border-stone-200 bg-white p-5"
          >
            <h3
              className="text-lg font-semibold text-stone-900"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {gap.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">
              {gap.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
