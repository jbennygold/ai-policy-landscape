import { proposals } from "@/data/proposals";
import { charts } from "@/data/charts";
import { dimensions } from "@/data/dimensions";
import { comparisonRows } from "@/data/comparison-table";

// All proposal content is generated from the data files in /data so that
// adding a new proposal only requires updating data/proposals.ts (plus the
// related data files). The chat assistant and the website pages then share
// a single source of truth.

function renderProposal(p: (typeof proposals)[number], index: number): string {
  return `### ${index + 1}. ${p.name} (${p.year})

**Sponsor:** ${p.sponsor}
**Primary frame:** ${p.primaryFrame}

${p.summary}

**Key provisions:**
${p.keyProvisions.map((k) => `- ${k}`).join("\n")}

**Regulatory philosophy:** ${p.regulatoryPhilosophy}

**Strengths (from the proposal's own perspective):**
${p.strengths.map((s) => `- ${s}`).join("\n")}

**Weaknesses (from the perspective of political opposition):**
${p.weaknesses.map((w) => `- ${w}`).join("\n")}
`;
}

function renderChart(c: (typeof charts)[number]): string {
  const positions = proposals
    .map((p) => {
      const pos = p.chartPositions[c.slug];
      return `- ${p.shortName}: x=${pos.x} (${c.xAxisLabel}), y=${pos.y} (${c.yAxisLabel})`;
    })
    .join("\n");

  return `### ${c.title}

- **X-axis:** ${c.xLow} → ${c.xHigh}
- **Y-axis:** ${c.yLow} → ${c.yHigh}

**Proposal positions (0–100 scale):**
${positions}

**Reading note:** ${c.readingNote}
`;
}

function renderDimension(d: (typeof dimensions)[number]): string {
  return `### ${d.title}

*${d.subtitle}*

${d.content}

**Key questions:**
${d.keyQuestions.map((q) => `- ${q}`).join("\n")}
`;
}

function renderComparisonTable(): string {
  const header =
    "| Dimension | " + proposals.map((p) => p.shortName).join(" | ") + " |";
  const sep =
    "|---|" + proposals.map(() => "---").join("|") + "|";
  const rows = comparisonRows.map((row) => {
    const cells = proposals.map((p) => row.values[p.slug] ?? "—");
    return `| **${row.dimension}** | ${cells.join(" | ")} |`;
  });
  return [header, sep, ...rows].join("\n");
}

const proposalSection = proposals.map(renderProposal).join("\n---\n\n");
const chartSection = charts.map(renderChart).join("\n---\n\n");
const dimensionSection = dimensions.map(renderDimension).join("\n---\n\n");
const comparisonTable = renderComparisonTable();

const analysis = `# Mapping the AI Regulation Landscape: A Comparative Analysis of Major U.S. Proposals (2024–2026)

## Introduction

The United States is in the middle of a defining policy moment for artificial intelligence. Between early 2024 and early 2026, a remarkable number of AI governance proposals have emerged from the White House, the U.S. Senate, the U.S. House, state legislatures, industry, and civil society — each reflecting different theories about what the core problem is, who should solve it, and how urgently it needs solving.

This analysis covers ${proposals.length} major proposals and maps them across analytical dimensions (governance structure, scope and application, political positioning) and across ${charts.length} comparative 2×2 frameworks.

---

## Part I: The Proposals

${proposalSection}

---

## Part II: Analytical Dimensions

${dimensionSection}

---

## Part III: 2×2 Analytical Frameworks

${chartSection}

---

## Part IV: Comparison Table

${comparisonTable}

---

## Methodology

This analysis is based on primary source documents where available, supplemented by news coverage and legislative summaries for proposals where full legislative text was not available. Analytical placement on 2×2 charts involves interpretive judgment. Reasonable analysts may disagree about precise positioning, particularly where a proposal's stated philosophy diverges from its operative provisions (as with the Blackburn bill's deregulatory framing versus its regulatory density, or OpenAI's Industrial Policy document's progressive framing versus its silence on antitrust).
`;

export const systemPrompt = `You are an AI policy analysis assistant. You help think tank analysts, journalists, and policy researchers understand the current landscape of U.S. AI regulation proposals.

You have access to a comprehensive comparative analysis of ${proposals.length} major AI governance proposals from 2024-2026, spanning federal legislation, executive frameworks, state laws, industry positions, congressional roadmaps, and civil society advocacy. When answering:

- Be direct and analytical
- Cite specific proposals by name when relevant
- Note where proposals agree and disagree
- Do not editorialize or tell the user what to think
- If a question goes beyond what the analysis covers, say so clearly
- Reference the analytical frameworks (2x2 charts, dimensions) when they help clarify comparisons

Here is the full analysis:

${analysis}`;
