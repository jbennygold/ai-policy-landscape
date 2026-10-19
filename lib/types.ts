export type ProposalSlug =
  | "wh-framework"
  | "wh-ai-eo"
  | "wh-si-accord"
  | "blackburn"
  | "openai-lehane"
  | "openai-industrial"
  | "openai-blueprint"
  | "anthropic-aaif"
  | "anthropic-draft"
  | "cht-roadmap"
  | "warner"
  | "warner-s5576"
  | "cantwell"
  | "thune-klobuchar"
  | "bores-dividend"
  | "kelly"
  | "sanders"
  | "khanna"
  | "khanna-dc-rights"
  | "casar-ai-tax"
  | "gallego"
  | "ca-sb53"
  | "ca-newsom-eo"
  | "il-sb315"
  | "ny-raise"
  | "pa-shapiro-eo"
  | "tx-abbott-audit"
  | "gaaia"
  | "frontier-act"
  | "lieu-kill-switch"
  | "hawley-murphy"
  | "trahan-claim"
  | "jayapal-charter";

export interface Proposal {
  slug: ProposalSlug;
  name: string;
  shortName: string;
  sponsor: string;
  year: string;
  /**
   * When the proposal entered the debate — introduced, signed, released, or
   * first reported — as YYYY-MM-DD, or YYYY-MM where only the month is known.
   * Required so that the trends page can place every proposal in time.
   */
  introduced: string;
  instrument: Instrument;
  themes: Theme[];
  /** The strongest oversight mechanism the proposal contemplates for frontier models. */
  oversight: OversightLevel;
  preemption: PreemptionStance;
  color: string;
  primaryFrame: string;
  summary: string;
  keyProvisions: string[];
  regulatoryPhilosophy: string;
  strengths: string[];
  weaknesses: string[];
  chartPositions: Record<ChartSlug, { x: number; y: number }>;
  /**
   * Which industry layer actually bears the cost of the proposal. Required so
   * that a new proposal cannot be added to the map without answering the
   * incidence question.
   */
  layers: LayerAnalysis;
  /**
   * Present only where a proposal says something specific about data center
   * siting, power, water, or subsidies. Most proposals say nothing, and the
   * silence is itself part of the analysis.
   */
  dataCenter?: DataCenterPosition;
  /** Optional side-by-side contrast with another proposal, rendered as a callout. */
  contrast?: {
    slug: ProposalSlug;
    title: string;
    body: string;
  };
}

/** The form a proposal takes, which determines whether it carries legal text. */
export type Instrument =
  | "bill"
  | "draft-bill"
  | "state-law"
  | "executive-order"
  | "resolution"
  | "framework"
  | "industry";

/** What a proposal is about. A proposal can address several. */
export type Theme =
  | "frontier-safety"
  | "economic"
  | "child-safety"
  | "infrastructure"
  | "rights";

/**
 * A ladder of oversight over frontier models, from nothing, to developers
 * answering for harm after the fact, to developers describing their own risk,
 * to someone else checking it, to someone able to stop a model.
 */
export type OversightLevel =
  | "none"
  | "liability"
  | "disclosure"
  | "verification"
  | "intervention";

/** Stance on federal preemption of state AI law. State measures are not-applicable unless they take a position. */
export type PreemptionStance = "seeks" | "opposes" | "silent" | "not-applicable";

/**
 * The AI industry is not one industry. Policy incidence is only legible once a
 * company is placed by where its revenue comes from rather than by what it says
 * it is building.
 */
export type LayerSlug = "frontier" | "apps" | "hyperscalers" | "chips";

/**
 * How heavily a proposal falls on a given layer. "unspecified" is a real and
 * common answer: several proposals name a payer without ever defining a base.
 */
export type IncidenceLevel =
  | "primary"
  | "secondary"
  | "indirect"
  | "none"
  | "unspecified";

export interface LayerAnalysis {
  incidence: Record<LayerSlug, IncidenceLevel>;
  /** What the proposal actually assesses or regulates. Blank bases are findings, not omissions. */
  base: string;
  /** Why the burden lands where it does. */
  note: string;
}

/**
 * The contested questions in data center politics. A proposal's coverage across
 * these is usually narrower than its rhetoric suggests.
 */
export type DataCenterIssue =
  | "siting"
  | "electricity"
  | "water"
  | "air-noise"
  | "tax"
  | "jobs"
  | "preemption";

/** Where a proposal sits on the who-decides spectrum, from permissive to prohibitive. */
export type DataCenterPosture =
  | "moratorium"
  | "local-veto"
  | "conditional"
  | "disclosure"
  | "ratepayer-only";

export interface DataCenterPosition {
  posture: DataCenterPosture;
  /** Which contested issues the proposal actually reaches. */
  addresses: DataCenterIssue[];
  /** Who decides whether a given data center gets built. */
  decisionMaker: string;
  summary: string;
}

export interface Layer {
  slug: LayerSlug;
  name: string;
  /** What the layer sells — the thing that determines its policy interests. */
  sells: string;
  description: string;
  /** What winning looks like for this layer. */
  winCondition: string;
  examples: string[];
  color: string;
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

/**
 * A line said about a proposal on a podcast, transcribed verbatim and linked
 * to the moment it was said. Quotes are reactions, not endorsements of the
 * site's analysis, and each one names who said it.
 */
export interface PodcastQuote {
  quote: string;
  speaker: string;
  speakerDescription: string;
  stance: "supportive" | "critical" | "analytical";
  podcast: string;
  episode: string;
  /** YYYY-MM-DD the episode was published. */
  date: string;
  /** Timestamped link to the moment on Particle Radar. */
  url: string;
}
