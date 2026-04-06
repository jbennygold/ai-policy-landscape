import type { Chart2x2 } from "@/lib/types";

export const charts: Chart2x2[] = [
  {
    slug: "enforcement-scope",
    title: "Enforcement Mechanism vs. Regulatory Scope",
    xAxisLabel: "Regulatory Scope",
    yAxisLabel: "Enforcement Mechanism",
    xLow: "Narrow Scope (AI-specific)",
    xHigh: "Broad Scope (Economy-wide)",
    yLow: "Voluntary / Industry-led",
    yHigh: "Mandatory / Government-enforced",
    readingNote:
      "The upper-right quadrant (mandatory + broad) is where the most interventionist proposals cluster -- the Blackburn bill ends up here despite its deregulatory branding, alongside Sanders, Khanna, and New York's proposed AI Act. The lower-left (voluntary + narrow) is where the White House and OpenAI/Lehane sit, though OpenAI's push for mandatory federal testing pulls it toward the upper quadrant. OpenAI's Industrial Policy document lands near the center -- its scope is economy-wide (tax reform, Public Wealth Fund, adaptive safety nets) but its enforcement mechanisms are a mix of mandatory auditing for frontier models and incentive-based approaches for the broader economy. Sanders lands in the upper-right because his proposals -- moratoriums, antitrust breakups, robot taxes -- are government-enforced and economy-wide in scope, even though they use structural tools rather than traditional regulatory compliance.",
  },
  {
    slug: "prevention-authority",
    title: "Prevention vs. Liability & Regulatory Authority",
    xAxisLabel: "Regulatory Authority",
    yAxisLabel: "Intervention Timing",
    xLow: "State-led Authority",
    xHigh: "Federal-led Authority",
    yLow: "Liability / Post-hoc",
    yHigh: "Prevention / Pre-deployment",
    readingNote:
      "The upper-right quadrant (prevention + federal) is where OpenAI's positions cluster -- both the earlier Lehane position (mandatory classified testing) and the Industrial Policy document (pre- and post-deployment CBRN auditing via CAISI). The Industrial Policy document is slightly lower because it frames auditing as targeted to 'a small number of companies and the most advanced models' rather than a blanket requirement. The lower-right (liability + federal) is where the White House and parts of Blackburn sit, preferring federal authority but relying on after-the-fact enforcement. State proposals cluster on the left, with the vetoed SB 1047 being the most ambitious state-level prevention attempt. The signed state laws (SB 53, RAISE Act) are lower-left: state-led but relying on transparency and liability rather than pre-deployment gates.",
  },
  {
    slug: "innovation-worker",
    title: "Innovation Priority vs. Worker Protection",
    xAxisLabel: "Worker / Distributional Priority",
    yAxisLabel: "Innovation Priority",
    xLow: "Low Worker Priority",
    xHigh: "High Worker Priority",
    yLow: "Low Innovation Priority",
    yHigh: "High Innovation Priority",
    readingNote:
      "The upper-right quadrant (high innovation + high worker priority) is Kelly's distinctive territory -- he explicitly frames AI as an economic opportunity that requires redistribution mechanisms, not restriction. OpenAI's Industrial Policy document moves into this quadrant as well, pairing enthusiasm for superintelligence with a Public Wealth Fund, 32-hour workweek pilots, and portable benefits -- though critics note that its worker provisions are aspirational rather than legislative. The lower-right (low innovation priority + high worker priority) is Sanders and Khanna, where innovation concerns are subordinated to worker and equity concerns. The upper-left (high innovation + low distributional focus) is the White House and OpenAI/Lehane, where competitiveness is the dominant frame. The lower-left captures proposals focused on compliance and risk mitigation without strong positions on either innovation acceleration or worker redistribution.",
  },
  {
    slug: "preemption-obligations",
    title: "Pre-deployment Obligations vs. Federal Preemption",
    xAxisLabel: "Strength of New Obligations",
    yAxisLabel: "Federal Preemption Stance",
    xLow: "Weak Obligations",
    xHigh: "Strong Obligations",
    yLow: "Weak Preemption",
    yHigh: "Strong Preemption",
    readingNote:
      "The most revealing quadrant is the upper-right, where the Blackburn bill sits alone -- it combines aggressive federal preemption with aggressive new federal obligations, creating a paradox where the federal government both displaces state regulation and creates substantial new regulatory burdens. The upper-left (strong preemption + weak obligations) is the White House's preferred position but may be politically unsustainable. OpenAI's Industrial Policy document occupies the center -- it proposes substantial new obligations (auditing, tax reform, Public Wealth Fund) but notably sidesteps the preemption debate entirely, a conspicuous silence given how central preemption is to their earlier Lehane position. The lower-right (weak preemption + strong obligations) is where state laws and progressive proposals cluster, creating the patchwork that preemption advocates cite as their rationale.",
  },
];
