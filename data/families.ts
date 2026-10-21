import type { ProposalSlug } from "@/lib/types";

export interface FamilyColumn {
  key: string;
  label: string;
  hint: string;
}

export interface FamilyMember {
  slug: ProposalSlug;
  /** Cell text keyed by column key. */
  cells: Record<string, string>;
}

export interface Family {
  slug: string;
  title: string;
  subtitle: string;
  intro: string[];
  columns: FamilyColumn[];
  /** In chronological order, so the table reads as the design's evolution. */
  members: FamilyMember[];
  /** Proposals that borrow part of the design, with what they share and where they part. */
  related: { slug: ProposalSlug; note: string }[];
  observations: string[];
}

export const frontierFamily: Family = {
  slug: "frontier",
  title: "The Frontier Framework Family",
  subtitle:
    "Eight proposals built on one design, and how they differ on who checks, who can stop a model, and what states keep",
  intro: [
    "The most common design for frontier-model regulation began as a California transparency law and now runs through two state laws that adopted it, a House discussion draft, an introduced House bill, an unpublished Senate draft, and two industry proposals. Every member shares the same skeleton: covered developers write and follow a safety framework, publish a report when they release a new model, and report critical safety incidents on a short clock. Catastrophic risk is typically defined by a casualty-or-damage threshold: more than 50 deaths or $1 billion from a single incident in SB 53, the FRONTIER Act, and Anthropic's text.",
    "What changes from one version to the next is what is built on top of that skeleton. Read in order, the table shows three additions: someone outside the developer checking its claims, someone able to stop a model in an emergency, and, in the federal versions, preemption of exactly the state laws the design began as.",
  ],
  columns: [
    {
      key: "form",
      label: "Form",
      hint: "What kind of instrument it is and where it stands; the date under each name is when it entered the debate",
    },
    {
      key: "coverage",
      label: "Coverage",
      hint: "Which developers and models the obligations reach",
    },
    {
      key: "checks",
      label: "Who checks",
      hint: "Whether anyone outside the developer verifies its frameworks, reports, or models",
    },
    {
      key: "incidents",
      label: "Incident clock",
      hint: "Deadline for reporting a critical safety incident, and for one posing imminent risk to life",
    },
    {
      key: "stop",
      label: "Who can stop a model",
      hint: "Whether anyone outside the developer can suspend or block a frontier model, and on what showing",
    },
    {
      key: "preemption",
      label: "Preemption",
      hint: "What the proposal does to state law on the same subjects",
    },
  ],
  members: [
    {
      slug: "ca-sb53",
      cells: {
        form: "State law, in force",
        coverage: "Large frontier developers above $500M in revenue",
        checks: "No one — developers describe their own risk management",
        incidents: "15 days; 24 hours if imminent harm",
        stop: "No one",
        preemption: "State law",
      },
    },
    {
      slug: "ny-raise",
      cells: {
        form: "State law, in force",
        coverage: "Frontier developers above $500M in revenue",
        checks: "No one — published safety and security protocols",
        incidents: "72 hours",
        stop: "No one",
        preemption: "State law",
      },
    },
    {
      slug: "openai-blueprint",
      cells: {
        form: "Industry blueprint (no text)",
        coverage: "Large frontier developers (thresholds not specified)",
        checks:
          "Annual third-party audits, plus a mandatory CAISI evaluation before release that is advisory only",
        incidents: "Required; clock not specified",
        stop: "No one — CAISI evaluates and recommends but cannot block, and a developer may ship if CAISI misses its deadline",
        preemption:
          "Seeks it: codify SB 53, RAISE, and SB 315 federally, then preempt state frontier-safety laws; states keep youth protection and energy",
      },
    },
    {
      slug: "gaaia",
      cells: {
        form: "House discussion draft; its frontier title became the FRONTIER Act",
        coverage: "Large frontier developers above $500M in revenue",
        checks: "Independent Verification Organizations, licensed by CAISI, audit developer frameworks",
        incidents: "15 days; 24 hours if imminent",
        stop: "No one",
        preemption:
          "Narrow: state laws targeting model development only, sunsetting after three years",
      },
    },
    {
      slug: "il-sb315",
      cells: {
        form: "State law, effective Jan 1, 2027",
        coverage: "Above 10^26 operations and $500M in revenue",
        checks: "Annual independent compliance audit from 2028; quarterly internal-use risk summaries to the state",
        incidents: "72 hours; 24 hours to law enforcement if lives are at risk",
        stop: "No one",
        preemption:
          "State law; accepts a federal regime with equivalent incident reporting and audits as satisfying it",
      },
    },
    {
      slug: "frontier-act",
      cells: {
        form: "Introduced House bill (H.R. 9925)",
        coverage:
          "All developers above 10^26 operations; heavier tiers at $50M revenue + $1B AI spending, and at $5B + $10B",
        checks:
          "Annual compliance audit; for the largest tier, a federally licensed verifier judging every six months whether mitigation is adequate",
        incidents: "72 hours; 24 hours to law enforcement if imminent",
        stop: "The Commerce Secretary, by emergency order on a finding of imminent catastrophic risk (45-day provisional, 90-day renewable final), reviewable in D.C. District Court",
        preemption:
          "Permanent, limited to frontier risk transparency, third-party auditing and verification, and incident reporting",
      },
    },
    {
      slug: "thune-klobuchar",
      cells: {
        form: "Unpublished Senate draft; stalled",
        coverage: "Frontier developers (thresholds not reported)",
        checks: "Developers test their own models and present results to Commerce",
        incidents: "Prompt notice of significant capability advances (incident clock not reported)",
        stop: "A federal court, on Commerce's application, for a developer that fails its risk-management obligations",
        preemption: "State catastrophic-risk laws; scope contested",
      },
    },
    {
      slug: "anthropic-draft",
      cells: {
        form: "Bill text drafted by Anthropic; no sponsor",
        coverage:
          "All developers above 10^25 operations; large developers above $500M in AI revenue or $1B in AI spending",
        checks:
          "A registered independent evaluator every 180 days, with published reports; findings are advisory",
        incidents: "15 days; 24 hours if imminent",
        stop: "The D.C. District Court, on application by the head of Commerce, for 45 days at a time, if Commerce proves imminent risk through one of four named pathways and that nothing less restrictive would work, with the court weighing the harm an order would cause",
        preemption:
          "Disclosure, third-party evaluation, and incident reporting, for every AI developer; void if the federal requirements fall. Anthropic says it will narrow this to leave states evaluator standards and labs' shutdown capability",
      },
    },
  ],
  related: [
    {
      slug: "anthropic-aaif",
      note: "The June framework Anthropic's draft bill translates. Same information layer, but it covers only developers that pass both the compute and money tests, offers an agency power to bar further deployments for procedural failures, and makes preemption conditional on a federal regime that meets or exceeds its strongest measures, a bar the bill does not clear.",
    },
    {
      slug: "cantwell",
      note: "Same components — federal standards, independent audits, incident reporting — but the audit is a gate: no release until it confirms the standards are met. Opposes the preemption the federal members carry.",
    },
    {
      slug: "ari-blueprint",
      note: "Keeps the skeleton but makes the government the checker: regulator-set adequacy standards that can only rise, government examination from the outset with private verifiers phased in only once a market exists, and a 72-hour emergency halt. Treats federal law as a floor, not a ceiling, and sunsets after nine years.",
    },
    {
      slug: "ca-newsom-eo",
      note: "California building the verification layer onto SB 53 itself: certified verifiers embedded in labs, independent verification of SB 53 filings, and a verified kill switch.",
    },
    {
      slug: "lieu-kill-switch",
      note: "Only the emergency brake, without the framework-and-report skeleton, and placed on whoever operates the model rather than whoever trained it.",
    },
    {
      slug: "warner-s5576",
      note: "A different route to verification: instead of third-party evaluators, a federal board gets the model and its weights 45 days before release and sets binding standards — but cannot block a release.",
    },
  ],
  observations: [
    "The skeleton has held. Every member requires a framework, release reports, and incident reporting, and the disagreements are about what sits on top of it.",
    "Verification moved from absent to standard. The 2025 state laws relied on developers' own descriptions; every member from mid-2026 has someone outside the developer reviewing its claims, though the reviewers range from the developer's own testers reporting to Commerce to licensed verifiers with a substantive adequacy standard.",
    "The emergency brake arrived in mid-2026 and is placed differently in each version: with a cabinet secretary in the FRONTIER Act, and with a federal judge in the Senate draft and Anthropic's text. Anthropic's version puts the burden of proof on the government, requires the least restrictive measure, and directs the court to weigh the harm an order would cause but not the harm of declining to act.",
    "Broader coverage does not mean a stricter bill. The industry-drafted Anthropic bill reaches further down (10^25 operations, a single revenue-or-spending test) than the FRONTIER Act (10^26, revenue-and-spending tiers), but the developers it adds owe only disclosure and incident reports, and its evaluators have less authority over anyone.",
    "Federal preemption is aimed at the states where the design began. Each federal member displaces state transparency, auditing, and incident-reporting rules — the subjects of SB 53, RAISE, and SB 315 — while preserving child safety, deployment rules, and general state law. They differ on duration (three-year sunset in GAAIA, permanent in FRONTIER) and on reach (Anthropic's covers every AI developer, not just covered ones).",
  ],
};
