import { useEffect, useLayoutEffect, useRef, useState } from "react";

const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const LEVEL_COLORS = ["#333333", "#14532d", "#15803d", "#16a34a", "#22c55e"];
const CURRENT_YEAR = new Date().getFullYear();
const GAP = 3; // px between squares

// every day from Jan 1 to Dec 31, filled in with the API's counts (missing days = 0)
function buildYear(year, contributions) {
  const byDate = new Map(contributions.map((d) => [d.date, d]));
  const out = [];
  const end = Date.UTC(year, 11, 31);
  for (let t = Date.UTC(year, 0, 1); t <= end; t += 86400000) {
    const date = new Date(t).toISOString().slice(0, 10);
    out.push(byDate.get(date) ?? { date, count: 0, level: 0 });
  }
  return out;
}

function toWeeks(days) {
  const weeks = [];
  let week = new Array(new Date(days[0].date).getUTCDay()).fill(null);
  for (const d of days) {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) weeks.push(week);
  return weeks;
}

// stats only look at days up to today, so future days never affect them
function getStats(days, today) {
  const past = days.filter((d) => d.date <= today);
  const total = past.reduce((s, d) => s + d.count, 0);
  const best = past.reduce((b, d) => (d.count > b.count ? d : b), past[0]);

  let longest = 0;
  let run = 0;
  for (const d of past) {
    run = d.count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
  }

  let current = 0;
  let i = past.length - 1;
  if (past[i].count === 0) i--; // today may not have commits yet
  for (; i >= 0 && past[i].count > 0; i--) current++;

  return { total, best, longest, current };
}

function formatDate(iso) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

// startYear = the year your GitHub account was created (or the earliest year you want to show)
export default function GithubActivity({ username, startYear = 2023 }) {
  const [year, setYear] = useState(CURRENT_YEAR);
  const [days, setDays] = useState([]);
  const [status, setStatus] = useState("loading"); // "loading" | "ready" | "error"
  const [hovered, setHovered] = useState(null);
  const [width, setWidth] = useState(0); // measured width of the heatmap area
  const wrapRef = useRef(null);
  const cache = useRef({});

  const years = Array.from({ length: CURRENT_YEAR - startYear + 1 }, (_, i) => CURRENT_YEAR - i);
  const today = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    let cancelled = false;
    const key = `${username}-${year}`;
    setHovered(null);

    if (cache.current[key]) {
      setDays(cache.current[key]);
      setStatus("ready");
      return;
    }

    setStatus("loading");

    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`)
      .then((r) => {
        if (!r.ok) throw new Error(r.status);
        return r.json();
      })
      .then((data) => {
        const list = buildYear(year, data.contributions ?? []);
        cache.current[key] = list;
        if (!cancelled) {
          setDays(list);
          setStatus("ready");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true; // ignore responses from a year the user has already switched away from
    };
  }, [username, year]);

  // measure the heatmap area so the squares can be sized to fit it exactly
  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    setWidth(el.clientWidth);
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, [status]);

  let body;

  if (status === "loading") {
    body = <p className="animate-pulse py-10">$ fetching {year}...</p>;
  } else if (status === "error") {
    body = <p className="py-10 text-red-500">$ error: could not load {year}. try another year or refresh</p>;
  } else {
    const weeks = toWeeks(days);
    const { total, best, longest, current } = getStats(days, today);

    // square size: the width is split evenly across the weeks, rows use the same size
    const cell = width ? (width - GAP * (weeks.length - 1)) / weeks.length : 0;

    // month labels: only when the month changes, spaced so they never overlap
    const minWeeksApart = Math.max(3, Math.ceil(30 / (cell + GAP || 1)));
    const labels = [];
    let lastMonth = -1;
    let lastIndex = -100;
    weeks.forEach((week, i) => {
      const month = new Date(week.find(Boolean).date).getUTCMonth();
      if (month !== lastMonth && i - lastIndex >= minWeeksApart) {
        labels[i] = MONTHS[month];
        lastIndex = i;
      }
      lastMonth = month;
    });

    // one grid: 8 rows per week column (month label + 7 days)
    const cells = [];
    weeks.forEach((week, w) => {
      cells.push(
        <div key={`m${w}`} className="whitespace-nowrap text-[10px] leading-4 text-green-700">
          {labels[w] ?? ""}
        </div>
      );
      for (let j = 0; j < 7; j++) {
        const d = week[j];
        if (!d) {
          cells.push(<div key={`d${w}-${j}`} />);
        } else if (d.date > today) {
          // upcoming day: faint outline, not interactive
          cells.push(
            <div
              key={`d${w}-${j}`}
              className="border"
              style={{ background: "transparent", borderColor: "#2e2e2e" }}
            />
          );
        } else {
          cells.push(
            <div
              key={`d${w}-${j}`}
              onMouseEnter={() => setHovered(d)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setHovered(d)}
              className="cursor-pointer border border-black"
              style={{ background: LEVEL_COLORS[d.level] }}
            />
          );
        }
      }
    });

    body = (
      <>
        {/* heatmap: fills the card width exactly, no scrolling */}
        <div ref={wrapRef} className="w-full">
          {cell > 0 && (
            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
                gridTemplateRows: `16px repeat(7, ${cell.toFixed(2)}px)`,
                gridAutoFlow: "column",
                gap: GAP,
              }}
            >
              {cells}
            </div>
          )}
        </div>

        {/* status line + legend */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-green-900 pt-3 text-xs">
          <p className="min-h-4">
            <span className="text-red-500">&gt; </span>
            {hovered
              ? `${hovered.count} contribution${hovered.count === 1 ? "" : "s"} on ${formatDate(hovered.date)}`
              : "hover over a square"}
            <span className="animate-pulse">_</span>
          </p>

          <div className="flex items-center gap-1 text-green-700">
            less
            {LEVEL_COLORS.map((c) => (
              <span key={c} className="h-3 w-3 border border-black" style={{ background: c }} />
            ))}
            more
          </div>
        </div>

        {/* stats */}
        <div className="mt-3 flex flex-wrap gap-x-8 gap-y-1">
          <p><span className="text-red-500">Total</span> : {total}</p>
          {year === CURRENT_YEAR && (
            <p>
              <span className="text-red-500">Current streak</span> : {current} day{current === 1 ? "" : "s"}
            </p>
          )}
          <p>
            <span className="text-red-500">Longest streak</span> : {longest} day{longest === 1 ? "" : "s"}
          </p>
          <p>
            <span className="text-red-500">Best day</span> :{" "}
            {best.count > 0 ? `${best.count} on ${formatDate(best.date)}` : "none yet"}
          </p>
        </div>
      </>
    );
  }

  return (
    <div className="border-2 border-b-4 border-l-4 border-black bg-[#1c1c1c] p-4 text-sm text-green-500">
      {/* command line header + year selector */}
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <p>
          <span className="text-red-500">{username}@github</span>
          <span className="text-green-700">:~$ </span>
          {`git log --contributions --since="${year}-01-01" --until="${year}-12-31"`}
        </p>

        <div className="flex flex-wrap items-center gap-1">
          <span className="mr-1 text-xs text-green-700">year:</span>
          {years.map((y) => (
            <button
              key={y}
              type="button"
              onClick={() => setYear(y)}
              aria-pressed={y === year}
              className={`cursor-pointer border-2 border-b-4 border-black px-2 text-xs leading-5 ${
                y === year
                  ? "bg-green-500 font-bold text-black"
                  : "bg-[#252525] text-green-600"
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {body}
    </div>
  );
}