import type { PodcastQuote } from "@/lib/types";

function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function PodcastQuotes({
  quotes,
  color,
}: {
  quotes: PodcastQuote[];
  color: string;
}) {
  if (quotes.length === 0) return null;

  return (
    <section className="mt-10">
      <h2
        className="text-2xl font-semibold text-stone-900"
        style={{ fontFamily: "var(--font-serif)" }}
      >
        On the Podcasts
      </h2>
      <p className="mt-1 text-xs text-stone-400">
        Verbatim from podcast transcripts; each links to the moment it was said
      </p>
      <div className="mt-4 space-y-4">
        {quotes.map((q) => (
          <figure
            key={q.url}
            className="rounded-lg border-l-4 bg-stone-50 px-5 py-4"
            style={{ borderColor: color }}
          >
            <blockquote
              className="text-base leading-relaxed text-stone-800"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              &ldquo;{q.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm text-stone-600">
              <span className="font-medium text-stone-900">{q.speaker}</span>
              {q.speakerDescription && <>, {q.speakerDescription}</>}
              <span className="block text-xs text-stone-500">
                <a
                  href={q.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1a56db] hover:underline"
                >
                  {q.podcast}
                </a>{" "}
                &middot; {q.episode} &middot; {formatDate(q.date)}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
