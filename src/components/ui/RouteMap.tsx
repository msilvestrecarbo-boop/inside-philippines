/**
 * Lightweight route map: stops are projected from real coordinates onto a
 * stylised frame of the archipelago. No map tiles, no JS, ~2 kB.
 * Phase 2: swap for an interactive Mapbox GL / MapLibre map (see docs/04-technical-architecture.md).
 */
type Stop = { name: string; coords: [number, number] };

const BOUNDS = { latMin: 5, latMax: 21, lngMin: 116.5, lngMax: 127 };
const W = 400;
const H = 600;

function project([lat, lng]: [number, number]) {
  const x = ((lng - BOUNDS.lngMin) / (BOUNDS.lngMax - BOUNDS.lngMin)) * W;
  const y = ((BOUNDS.latMax - lat) / (BOUNDS.latMax - BOUNDS.latMin)) * H;
  return { x, y };
}

const REGIONS: { name: string; at: [number, number] }[] = [
  { name: "LUZON", at: [16.6, 121.6] },
  { name: "PALAWAN", at: [9.2, 117.4] },
  { name: "VISAYAS", at: [11.2, 124.6] },
  { name: "MINDANAO", at: [7.4, 124.8] },
];

export function RouteMap({ stops, label }: { stops: Stop[]; label: string }) {
  const pts = stops.map((s) => ({ ...s, ...project(s.coords) }));
  const d = pts.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  return (
    <figure className="relative" dir="ltr">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label} className="h-auto w-full overflow-visible">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeOpacity="0.07" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill="url(#grid)" />
        {REGIONS.map((r) => {
          const p = project(r.at);
          return (
            <text key={r.name} x={p.x} y={p.y} textAnchor="middle" fontSize="11" letterSpacing="4" fill="currentColor" opacity="0.28">
              {r.name}
            </text>
          );
        })}
        <path d={d} fill="none" stroke="var(--color-clay)" strokeWidth="1.6" strokeDasharray="5 6" strokeLinecap="round" />
        {pts.map((p, i) => (
          <g key={`${p.name}-${i}`}>
            <circle cx={p.x} cy={p.y} r="9" fill="var(--color-sand)" stroke="var(--color-ink)" strokeWidth="1" />
            <text x={p.x} y={p.y + 3.5} textAnchor="middle" fontSize="9" fontWeight="600" fill="currentColor">
              {i + 1}
            </text>
            <text x={p.x > W * 0.62 ? p.x - 15 : p.x + 15} y={p.y + 4} textAnchor={p.x > W * 0.62 ? "end" : "start"} fontSize="13" fill="currentColor" style={{ fontFamily: "var(--font-display)" }}>
              {p.name}
            </text>
          </g>
        ))}
      </svg>
    </figure>
  );
}
