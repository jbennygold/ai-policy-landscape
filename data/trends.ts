import type {
  Instrument,
  OversightLevel,
  PreemptionStance,
  Proposal,
  Theme,
} from "@/lib/types";

export const instrumentMeta: Record<
  Instrument,
  { label: string; hasText: boolean; order: number }
> = {
  bill: { label: "Introduced bill", hasText: true, order: 0 },
  "draft-bill": { label: "Draft bill", hasText: true, order: 1 },
  "state-law": { label: "State law", hasText: true, order: 2 },
  "executive-order": {
    label: "Executive order or directive",
    hasText: true,
    order: 3,
  },
  resolution: { label: "Resolution", hasText: false, order: 4 },
  framework: { label: "Framework or platform", hasText: false, order: 5 },
  industry: { label: "Industry document", hasText: false, order: 6 },
};

export const themeMeta: Record<Theme, { label: string; color: string }> = {
  "frontier-safety": { label: "Frontier safety", color: "#4338ca" },
  economic: { label: "Workers and the economy", color: "#059669" },
  "child-safety": { label: "Child safety", color: "#be185d" },
  infrastructure: { label: "Data centers and energy", color: "#b45309" },
  rights: { label: "Consumers and civil rights", color: "#0891b2" },
};

export const oversightMeta: Record<
  OversightLevel,
  { label: string; description: string; rank: number }
> = {
  intervention: {
    label: "Intervention",
    description:
      "Someone other than the developer can stop, suspend, or block a frontier model — an emergency order, a court injunction, a kill switch, or a release gate.",
    rank: 4,
  },
  verification: {
    label: "Verification",
    description:
      "Someone other than the developer checks its claims or tests its models — government evaluation, licensed verifiers, or independent auditors.",
    rank: 3,
  },
  disclosure: {
    label: "Disclosure",
    description:
      "Developers describe their own risk management and report incidents, and no one checks.",
    rank: 2,
  },
  liability: {
    label: "Liability only",
    description:
      "No one checks or stops a model in advance; developers or operators answer in court for harm their systems cause.",
    rank: 1,
  },
  none: {
    label: "None",
    description: "No oversight mechanism for frontier models.",
    rank: 0,
  },
};

export const preemptionMeta: Record<
  PreemptionStance,
  { label: string; color: string; order: number }
> = {
  seeks: { label: "Seeks preemption", color: "#dc2626", order: 0 },
  silent: { label: "Silent", color: "#a8a29e", order: 1 },
  opposes: { label: "Opposes preemption", color: "#2563eb", order: 2 },
  "not-applicable": { label: "State measure", color: "#78716c", order: 3 },
};

/**
 * Dated events that the proposals themselves cite as reasons to act. Shown as
 * reference lines, not as causes.
 */
export const events: { date: string; label: string }[] = [
  {
    date: "2026-07",
    label: "AI agents in internal testing breach Hugging Face",
  },
];

const DATE_RE = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/;

export interface ParsedDate {
  year: number;
  month: number;
  day?: number;
}

export function parseIntroduced(value: string): ParsedDate {
  const m = DATE_RE.exec(value);
  if (!m) throw new Error(`Invalid introduced date: ${value}`);
  return {
    year: Number(m[1]),
    month: Number(m[2]),
    day: m[3] ? Number(m[3]) : undefined,
  };
}

function daysInMonth(year: number, month: number) {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

/**
 * Position on a continuous month scale. Month-precision dates sit mid-month.
 */
export function monthValue(value: string): number {
  const { year, month, day } = parseIntroduced(value);
  const within =
    day === undefined ? 0.5 : (day - 0.5) / daysInMonth(year, month);
  return year * 12 + (month - 1) + within;
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export function formatIntroduced(value: string): string {
  const { year, month, day } = parseIntroduced(value);
  return day === undefined
    ? `${MONTHS[month - 1]} ${year}`
    : `${MONTHS[month - 1]} ${day}, ${year}`;
}

export function monthLabel(index: number): { month: string; year: number } {
  return { month: MONTHS[index % 12], year: Math.floor(index / 12) };
}

/** Half-year periods are the finest grain the corpus can support. */
export function periodOf(value: string): string {
  const { year, month } = parseIntroduced(value);
  return `${year} H${month <= 6 ? 1 : 2}`;
}

export function sortByDate(list: Proposal[]): Proposal[] {
  return [...list].sort(
    (a, b) => monthValue(a.introduced) - monthValue(b.introduced)
  );
}

export function groupByPeriod(
  list: Proposal[]
): { period: string; items: Proposal[] }[] {
  const groups = new Map<string, Proposal[]>();
  for (const p of sortByDate(list)) {
    const key = periodOf(p.introduced);
    groups.set(key, [...(groups.get(key) ?? []), p]);
  }
  return [...groups].map(([period, items]) => ({ period, items }));
}

/**
 * The trends page is only as good as these tags, so check them at build time.
 * A violation fails the build rather than rendering a misleading chart.
 */
export function assertTrendData(list: Proposal[], today = new Date()): void {
  const todayValue =
    today.getUTCFullYear() * 12 + today.getUTCMonth() + 1;
  for (const p of list) {
    const { year, month, day } = parseIntroduced(p.introduced);
    if (month < 1 || month > 12)
      throw new Error(`${p.slug}: month out of range in ${p.introduced}`);
    if (day !== undefined && (day < 1 || day > daysInMonth(year, month)))
      throw new Error(`${p.slug}: day out of range in ${p.introduced}`);
    if (monthValue(p.introduced) > todayValue)
      throw new Error(`${p.slug}: introduced date ${p.introduced} is in the future`);
    if (p.themes.length === 0)
      throw new Error(`${p.slug}: needs at least one theme`);
    if (new Set(p.themes).size !== p.themes.length)
      throw new Error(`${p.slug}: duplicate themes`);
    const safety = p.themes.includes("frontier-safety");
    if (safety && p.oversight === "none")
      throw new Error(`${p.slug}: frontier-safety proposals need an oversight level`);
    if (!safety && p.oversight !== "none")
      throw new Error(`${p.slug}: an oversight level implies the frontier-safety theme`);
  }
}
