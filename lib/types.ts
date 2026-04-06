export type ProposalSlug =
  | "wh-framework"
  | "blackburn"
  | "openai-lehane"
  | "openai-industrial"
  | "kelly"
  | "sanders"
  | "khanna"
  | "ca-sb53"
  | "ny-raise";

export interface Proposal {
  slug: ProposalSlug;
  name: string;
  shortName: string;
  sponsor: string;
  year: string;
  color: string;
  primaryFrame: string;
  summary: string;
  keyProvisions: string[];
  regulatoryPhilosophy: string;
  strengths: string[];
  weaknesses: string[];
  chartPositions: Record<ChartSlug, { x: number; y: number }>;
}

export type ChartSlug =
  | "enforcement-scope"
  | "prevention-authority"
  | "innovation-worker"
  | "preemption-obligations";

export interface Chart2x2 {
  slug: ChartSlug;
  title: string;
  xAxisLabel: string;
  yAxisLabel: string;
  xLow: string;
  xHigh: string;
  yLow: string;
  yHigh: string;
  readingNote: string;
}

export interface Dimension {
  slug: string;
  title: string;
  subtitle: string;
  content: string;
  keyQuestions: string[];
}

export interface GapTopic {
  title: string;
  description: string;
}

export interface ComparisonRow {
  dimension: string;
  values: Record<ProposalSlug, string>;
}
