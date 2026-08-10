import type { Layer, IncidenceLevel } from "@/lib/types";

export const layers: Layer[] = [
  {
    slug: "frontier",
    name: "Frontier",
    sells: "Capability and lead time",
    description:
      "Trains and sells access to the most capable models. Its asset is the margin between what it can do and what everyone else can do, which is an asset that depreciates continuously and has to be re-earned every release cycle.",
    winCondition:
      "Protect the lead margin, keep capital flowing, keep model outputs from being freely copied, and accept regulation that raises the cost of entry.",
    examples: [
      "OpenAI",
      "Anthropic",
      "Google DeepMind",
      "Meta Superintelligence Labs",
      "xAI",
      "Mistral",
    ],
    color: "#b91c1c",
  },
  {
    slug: "apps",
    name: "Apps",
    sells: "Workflow and distribution",
    description:
      "Buys inference and sells the thing built on top of it. Includes the inference middlemen — the serving providers that make model-switching cheap — who have the strongest interest in commoditization of anyone, and every incumbent bolting AI onto existing software.",
    winCondition:
      "Cheap, abundant, interchangeable inference. Model commoditization is the business plan, and anything that entrenches a single lab is a threat.",
    examples: [
      "Harvey",
      "Cursor",
      "Abridge",
      "Sierra",
      "Glean",
      "Baseten and Fireworks",
    ],
    color: "#0369a1",
  },
  {
    slug: "hyperscalers",
    name: "Hyperscalers",
    sells: "Capacity",
    description:
      "Builds and rents the compute. Carries almost all of the physical exposure in AI policy — land, power, water, and local politics — and needs demand contracted far enough out to justify a build that outlasts several model generations.",
    winCondition:
      "Durable contracted demand, fast permitting, cheap power, favorable capital treatment, and enough political cover to keep building in American communities.",
    examples: [
      "Microsoft",
      "Amazon",
      "Google Cloud",
      "Oracle",
      "Meta's internal fleet",
      "CoreWeave and the neoclouds",
    ],
    color: "#b45309",
  },
  {
    slug: "chips",
    name: "Chips",
    sells: "Silicon for training and inference",
    description:
      "Supplies the hardware every other layer runs on. Indifferent to which model wins and hostile to anything that concentrates purchasing in a few hands, which makes it a free agent in fights the other three treat as existential.",
    winCondition:
      "Total token volume, as many independent buyers as possible, and the largest addressable market including export markets.",
    examples: [
      "Nvidia",
      "AMD",
      "Broadcom",
      "TSMC",
      "Google's TPU program",
    ],
    color: "#15803d",
  },
];

export const layerBySlug = Object.fromEntries(
  layers.map((l) => [l.slug, l])
) as Record<Layer["slug"], Layer>;

/**
 * Display metadata for incidence levels. `weight` drives the visual density of
 * a matrix cell; `rank` orders proposals from most to least concentrated
 * incidence when sorting.
 */
export const incidenceMeta: Record<
  IncidenceLevel,
  { label: string; short: string; weight: number; description: string }
> = {
  primary: {
    label: "Primary",
    short: "Primary",
    weight: 1,
    description: "The layer the instrument is actually assessed on.",
  },
  secondary: {
    label: "Secondary",
    short: "Secondary",
    weight: 0.62,
    description: "A real, direct burden, but not the instrument's main target.",
  },
  indirect: {
    label: "Indirect",
    short: "Indirect",
    weight: 0.3,
    description:
      "Reached only by pass-through — softer demand, higher input prices, or a cost handed down the stack.",
  },
  none: {
    label: "None",
    short: "—",
    weight: 0,
    description: "Untouched by the proposal.",
  },
  unspecified: {
    label: "Unspecified",
    short: "?",
    weight: 0,
    description:
      "The proposal names a payer without defining a base, so the incidence cannot be determined from the text.",
  },
};
