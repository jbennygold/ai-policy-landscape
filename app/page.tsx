import Link from "next/link";
import { proposals } from "@/data/proposals";
import { dimensions } from "@/data/dimensions";
import { charts } from "@/data/charts";
import { ProposalCard } from "@/components/proposal-card";
import { SectionHeading } from "@/components/section-heading";

export default function Home() {
  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 mt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="text-5xl font-bold tracking-tight text-stone-900"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Mapping the AI Regulation Landscape
          </h1>
          <p className="mt-4 text-xl text-[#78716c]">
            A Comparative Analysis of Major U.S. Proposals (2024–2026)
          </p>
        </div>
        <div className="mx-auto max-w-3xl mt-10 space-y-5 text-stone-700 leading-relaxed">
          <p>
            The United States is in the middle of a defining policy moment for
            artificial intelligence. Between early 2024 and early 2026, a
            remarkable number of AI governance proposals have emerged from the
            White House, the U.S. Senate, the U.S. House, and state
            legislatures. Each reflects a different theory about what the core
            problem is, who should solve it, and how urgently it needs solving.
          </p>
          <p>
            This analysis maps the current landscape of major AI regulation
            proposals across three analytical dimensions: governance structure
            (who regulates and how), scope and application (what gets regulated
            and when), and political positioning (the underlying theory of the
            problem). It examines eight proposals in detail, identifies the axes
            of agreement and disagreement, and places them on comparative
            frameworks to reveal the emerging contours of the debate.
          </p>
          <p>
            The proposals range from the White House&apos;s light-touch,
            innovation-first framework to Senator Sanders&apos; calls for a
            national data center moratorium and a robot tax. In between sit
            comprehensive federal legislation, industry-funded redistribution
            mechanisms, worker-centered governance principles, and state-level
            transparency and compliance regimes. Together they define the
            boundaries of what is politically imaginable in U.S. AI policy
            today.
          </p>
        </div>
      </section>

      {/* Proposals grid */}
      <section className="mx-auto max-w-5xl px-6 mt-24">
        <SectionHeading
          title="The Proposals"
          subtitle="Eight major proposals spanning federal, state, and industry perspectives"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {proposals.map((proposal) => (
            <ProposalCard key={proposal.slug} proposal={proposal} />
          ))}
        </div>
      </section>

      {/* Dimensions preview */}
      <section className="mx-auto max-w-5xl px-6 mt-24">
        <SectionHeading
          title="Axes of Agreement and Disagreement"
          subtitle="Three dimensions for comparing what the proposals prioritize and where they diverge"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dimensions.map((dim) => (
            <Link
              key={dim.slug}
              href={`/dimensions/${dim.slug}`}
              className="block rounded-lg border border-[#e7e5e4] bg-white p-5 transition-shadow hover:shadow-md"
            >
              <h3
                className="text-lg font-semibold text-stone-900"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {dim.title}
              </h3>
              <p className="mt-1 text-sm text-[#78716c]">{dim.subtitle}</p>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 italic">
                {dim.keyQuestions[0]}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Charts preview */}
      <section className="mx-auto max-w-5xl px-6 mt-24">
        <SectionHeading
          title="Analytical Frameworks"
          subtitle="Interactive 2x2 charts plotting each proposal along key policy axes"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {charts.map((chart) => (
            <Link
              key={chart.slug}
              href={`/explorer?chart=${chart.slug}`}
              className="block rounded-lg border border-[#e7e5e4] bg-white p-5 transition-shadow hover:shadow-md"
            >
              <h3
                className="text-lg font-semibold text-stone-900"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {chart.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                <span className="text-[#78716c]">X-axis:</span>{" "}
                {chart.xLow} → {chart.xHigh}
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                <span className="text-[#78716c]">Y-axis:</span>{" "}
                {chart.yLow} → {chart.yHigh}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/explorer"
            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
          >
            Explore the full interactive charts →
          </Link>
        </div>
      </section>

      {/* Consensus and disagreement */}
      <section className="mx-auto max-w-5xl px-6 mt-24">
        <SectionHeading
          title="Where Proposals Converge and Diverge"
          subtitle="Key themes emerging across the political spectrum"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg border border-[#e7e5e4] bg-white p-6">
            <h3
              className="text-lg font-semibold text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Areas of Broad Agreement
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-stone-600">
              <li className="flex gap-2">
                <span className="text-[#78716c] shrink-0">•</span>
                <span>
                  Every proposal treats the most powerful AI systems as
                  requiring some form of distinct governance. The $500M revenue
                  threshold used by California and New York is emerging as a de
                  facto standard.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#78716c] shrink-0">•</span>
                <span>
                  Child safety is the area of greatest bipartisan alignment and
                  the most likely candidate for near-term legislation. The White
                  House, Blackburn, California, and OpenAI all prioritize it.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#78716c] shrink-0">•</span>
                <span>
                  Even the lightest-touch proposals endorse some form of
                  transparency. The debate is over whether transparency alone is
                  sufficient or must be paired with pre-deployment testing or
                  liability.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#78716c] shrink-0">•</span>
                <span>
                  All proposals acknowledge AI-driven workforce disruption. The
                  disagreement is over mechanism: reporting versus
                  redistribution versus structural intervention.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#78716c] shrink-0">•</span>
                <span>
                  Copyright and digital replicas need addressing. The White
                  House and Blackburn bill converge on the need for a federal
                  framework on AI-generated replicas and content provenance.
                  Copyright training data remains unresolved.
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-[#e7e5e4] bg-white p-6">
            <h3
              className="text-lg font-semibold text-stone-900 mb-4"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Areas of Sharp Disagreement
            </h3>
            <ul className="space-y-3 text-sm leading-relaxed text-stone-600">
              <li className="flex gap-2">
                <span className="text-[#78716c] shrink-0">•</span>
                <span>
                  Federal preemption of state AI laws is the deepest divide.
                  The White House and Blackburn want broad preemption. OpenAI
                  wants preemption contingent on a meaningful federal framework.
                  States are asserting authority while signaling willingness to
                  defer.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#78716c] shrink-0">•</span>
                <span>
                  Pre-deployment versus post-deployment intervention.
                  OpenAI&apos;s prevention-first model (federal testing before
                  deployment) is endorsed by no other major proposal in its
                  strong form. Most rely on post-deployment accountability.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#78716c] shrink-0">•</span>
                <span>
                  The economic structure of AI. Sanders&apos; moratorium and
                  breakup proposals have no analogs elsewhere. Kelly&apos;s
                  industry-funded Horizon Fund is a moderate redistribution
                  mechanism. The White House and Blackburn contain no
                  redistribution provisions.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#78716c] shrink-0">•</span>
                <span>
                  The role of liability. The Blackburn bill creates extensive
                  liability frameworks including developer, deployer, and
                  federal cause of action pathways. The White House prefers
                  existing law. The appropriate role of litigation in AI
                  governance remains unresolved.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
