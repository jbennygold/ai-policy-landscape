import type { DataCenterIssue, DataCenterPosture } from "@/lib/types";

export const dataCenterIssues: {
  slug: DataCenterIssue;
  label: string;
  short: string;
  description: string;
}[] = [
  {
    slug: "siting",
    label: "Siting and land use",
    short: "Siting",
    description:
      "Where a facility may be built, how close to homes and schools, and whether a community can refuse one outright. This is the question the local fights are actually about, and the one federal proposals most consistently skip.",
  },
  {
    slug: "electricity",
    label: "Electricity and ratepayers",
    short: "Power",
    description:
      "Who pays for the generation and transmission a large load requires. The recurring concern is cost-shifting — a facility contracts for cheap power while households and small businesses absorb the system upgrades through their bills.",
  },
  {
    slug: "water",
    label: "Water consumption",
    short: "Water",
    description:
      "Cooling withdrawals and consumption, disclosure to local providers, and siting in water-stressed regions. Projections reach up to 32 billion gallons a year by 2028, against a baseline that is largely unmeasured because operators are not required to report.",
  },
  {
    slug: "air-noise",
    label: "Air quality and noise",
    short: "Air / noise",
    description:
      "Diesel backup generators, gas turbines, and cooling systems produce emissions and persistent low-frequency noise. These are the harms nearby residents report first and the ones with the clearest documented health pathway.",
  },
  {
    slug: "tax",
    label: "Taxes and subsidies",
    short: "Tax",
    description:
      "Sales and property tax abatements, federal bonus depreciation, and whether public subsidy carries conditions. The live question is whether incentives granted against job promises can be recovered when the jobs do not appear.",
  },
  {
    slug: "jobs",
    label: "Jobs and community benefit",
    short: "Jobs",
    description:
      "Construction employment is substantial and temporary; permanent operations employment is small, often under 150 workers at even the largest facilities. The gap between the two numbers drives most of the local political conflict.",
  },
  {
    slug: "preemption",
    label: "Who decides",
    short: "Who decides",
    description:
      "Whether counties and municipalities keep authority over siting or are overridden by their state. Note the inversion: in data center politics the preemption fight runs state-over-local, not federal-over-state.",
  },
];

export const postureMeta: Record<
  DataCenterPosture,
  { label: string; order: number; description: string; color: string }
> = {
  moratorium: {
    label: "Halt",
    order: 0,
    description: "Stop new construction outright, at least for now.",
    color: "#7c3aed",
  },
  "local-veto": {
    label: "Community consent",
    order: 1,
    description:
      "Build only where the affected community agrees, with a genuine right to refuse.",
    color: "#4d7c0f",
  },
  conditional: {
    label: "Conditional",
    order: 2,
    description:
      "Accept the buildout, but attach binding conditions on power, water, emissions, or subsidy.",
    color: "#0284c7",
  },
  disclosure: {
    label: "Disclosure",
    order: 3,
    description: "Require the facts be published; let the market and local politics respond.",
    color: "#d97706",
  },
  "ratepayer-only": {
    label: "Ratepayer protection only",
    order: 4,
    description:
      "Engage a single question — that households not absorb the cost — and leave the rest alone.",
    color: "#78716c",
  },
};
