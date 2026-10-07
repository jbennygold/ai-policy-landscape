import { monthLabel } from "@/data/trends";

export interface StripRow {
  key: string;
  label: string;
  hint?: string;
}

export interface StripPoint {
  slug: string;
  label: string;
  rowKey: string;
  /** Position on the continuous month scale from monthValue(). */
  t: number;
  color: string;
  /** Hollow markers distinguish position papers from legal text. */
  hollow?: boolean;
}

export interface StripMarker {
  t: number;
  label: string;
}

interface DateStripProps {
  rows: StripRow[];
  points: StripPoint[];
  /** Inclusive start and exclusive end, as month indices. */
  domain: [number, number];
  markers?: StripMarker[];
  ariaLabel: string;
}

const LABEL_W = 170;
const PLOT_W = 680;
const RIGHT = 20;
const TOP = 36;
const ROW_H = 46;
const AXIS_H = 34;
const R = 6;
/** Points closer than this, in months, are stacked rather than overlapped. */
const COLLISION = 0.45;

export function DateStrip({
  rows,
  points,
  domain,
  markers = [],
  ariaLabel,
}: DateStripProps) {
  const [t0, t1] = domain;
  const width = LABEL_W + PLOT_W + RIGHT;
  const x = (t: number) => LABEL_W + ((t - t0) / (t1 - t0)) * PLOT_W;

  // Group near-simultaneous points within each row so they can be stacked
  // rather than drawn on top of one another.
  const clustered = rows.map((row) => {
    const inRow = points
      .filter((p) => p.rowKey === row.key)
      .sort((a, b) => a.t - b.t);
    const clusters: StripPoint[][] = [];
    for (const p of inRow) {
      const last = clusters[clusters.length - 1];
      if (last && p.t - last[last.length - 1].t <= COLLISION) last.push(p);
      else clusters.push([p]);
    }
    return clusters;
  });

  // Rows grow to fit their largest stack.
  const STEP = R * 2 + 2;
  const rowHeights = clustered.map((clusters) =>
    Math.max(ROW_H, Math.max(0, ...clusters.map((c) => c.length)) * STEP + 14)
  );
  const rowTops = rowHeights.map(
    (_, i) => TOP + rowHeights.slice(0, i).reduce((a, b) => a + b, 0)
  );
  const plotBottom = TOP + rowHeights.reduce((a, b) => a + b, 0);
  const height = plotBottom + AXIS_H;
  const rowY = (i: number) => rowTops[i] + rowHeights[i] / 2;

  const placed = clustered.flatMap((clusters, i) =>
    clusters.flatMap((cluster) =>
      cluster.map((p, j) => ({
        ...p,
        cx: x(p.t),
        cy: rowY(i) + (j - (cluster.length - 1) / 2) * STEP,
      }))
    )
  );

  const months: number[] = [];
  for (let m = Math.ceil(t0); m < t1; m++) months.push(m);

  return (
    <div className="-mx-6 overflow-x-auto px-6 lg:mx-0 lg:px-0">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full min-w-[46rem]"
        role="img"
        aria-label={ariaLabel}
      >
        {rows.map((row, i) => (
          <g key={row.key}>
            <line
              x1={LABEL_W}
              x2={LABEL_W + PLOT_W}
              y1={rowY(i)}
              y2={rowY(i)}
              stroke="#e7e5e4"
            />
            <text
              x={LABEL_W - 12}
              y={rowY(i)}
              textAnchor="end"
              dominantBaseline="middle"
              className="fill-stone-700 text-[12px]"
            >
              {row.hint ? <title>{row.hint}</title> : null}
              {row.label}
            </text>
          </g>
        ))}

        {months.map((m) => {
          const { month, year } = monthLabel(m);
          const showYear = month === "Jan" || m === months[0];
          return (
            <g key={m}>
              <line
                x1={x(m)}
                x2={x(m)}
                y1={TOP - 6}
                y2={plotBottom}
                stroke="#f5f5f4"
              />
              <text
                x={x(m + 0.5)}
                y={plotBottom + 16}
                textAnchor="middle"
                className="fill-stone-500 text-[10px]"
              >
                {month}
              </text>
              {showYear && (
                <text
                  x={x(m + 0.5)}
                  y={plotBottom + 29}
                  textAnchor="middle"
                  className="fill-stone-400 text-[10px]"
                >
                  {year}
                </text>
              )}
            </g>
          );
        })}

        {markers.map((mk) => (
          <g key={mk.label}>
            <line
              x1={x(mk.t)}
              x2={x(mk.t)}
              y1={TOP - 14}
              y2={plotBottom}
              stroke="#78716c"
              strokeDasharray="3 3"
            />
            <text
              x={x(mk.t) - 4}
              y={TOP - 18}
              textAnchor="end"
              className="fill-stone-500 text-[10px]"
            >
              {mk.label}
            </text>
          </g>
        ))}

        {placed.map((p) => (
          <a key={`${p.rowKey}-${p.slug}`} href={`/proposals/${p.slug}`}>
            <circle
              cx={p.cx}
              cy={p.cy}
              r={R}
              fill={p.hollow ? "#ffffff" : p.color}
              stroke={p.color}
              strokeWidth={2}
              className="cursor-pointer transition-opacity hover:opacity-70"
            >
              <title>{p.label}</title>
            </circle>
          </a>
        ))}
      </svg>
    </div>
  );
}
