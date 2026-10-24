import { PH_LAND } from "./philippinesLand";

/**
 * Route map: real island outlines (static SVG, no tiles, no JS), zoomed to
 * the stops of the journey, with a small locator of the whole country.
 * Phase 2: swap for an interactive Mapbox GL / MapLibre map (see docs/04-technical-architecture.md).
 */
type Stop = { name: string; coords: [number, number] };

const K = Math.cos((12 * Math.PI) / 180);
const COUNTRY = { x: 60, y: 0, w: 1010, h: 1660 };
const ASPECT = 4 / 5; // width / height of the frame

function project([lat, lng]: [number, number]) {
  return { x: (lng - 116) * 100 * K, y: (21 - lat) * 100 };
}

const REGIONS: { name: string; at: [number, number] }[] = [
  { name: "LUZON", at: [16.2, 121.25] },
  { name: "PALAWAN", at: [9.0, 117.35] },
  { name: "VISAYAS", at: [11.15, 123.35] },
  { name: "MINDANAO", at: [7.6, 125.0] },
];

/** Frame around the stops: padded, a sensible minimum size, fixed aspect. */
function frame(pts: { x: number; y: number }[]) {
  const xs = pts.map((p) => p.x);
  const ys = pts.map((p) => p.y);
  let x0 = Math.min(...xs) - 110;
  let x1 = Math.max(...xs) + 190; // room for labels on the right
  let y0 = Math.min(...ys) - 110;
  let y1 = Math.max(...ys) + 110;
  let w = Math.max(x1 - x0, 420);
  let h = Math.max(y1 - y0, 420);
  if (w / h > ASPECT) h = w / ASPECT;
  else w = h * ASPECT;
  const cx = (x0 + x1) / 2;
  const cy = (y0 + y1) / 2;
  x0 = cx - w / 2;
  y0 = cy - h / 2;
  return { x: x0, y: y0, w, h };
}

/** Gentle arc between two stops, bowing to the left of the direction of travel. */
function arc(a: { x: number; y: number }, b: { x: number; y: number }) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const bow = 0.18;
  return `M${a.x.toFixed(1)} ${a.y.toFixed(1)}Q${(mx - dy * bow).toFixed(1)} ${(my + dx * bow).toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

export function RouteMap({ stops, label }: { stops: Stop[]; label: string }) {
  const pts = stops.map((s) => ({ ...s, ...project(s.coords) }));
  const f = frame(pts);
  const s = f.w / 400; // one CSS pixel at the usual rendered width
  const right = f.x + f.w;

  // Stops closer than a marker's width are eased apart so both numbers stay readable.
  for (let i = 1; i < pts.length; i++)
    for (let j = 0; j < i; j++) {
      const dx = pts[i].x - pts[j].x;
      const dy = pts[i].y - pts[j].y;
      const d = Math.hypot(dx, dy);
      const min = 24 * s;
      if (d < min) {
        const ux = d ? dx / d : 0.7;
        const uy = d ? dy / d : 0.7;
        pts[i].x = pts[j].x + ux * min;
        pts[i].y = pts[j].y + uy * min;
      }
    }

  // Labels to the right of each stop (left near the edge), moved down until they clear
  // every marker and every label already placed.
  type Box = { x0: number; x1: number; y0: number; y1: number };
  const hit = (a: Box, b: Box) => a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;
  const boxes: Box[] = pts.map((p) => ({ x0: p.x - 12 * s, x1: p.x + 12 * s, y0: p.y - 12 * s, y1: p.y + 12 * s }));
  const labels = pts.map((p, i) => {
    const w = p.name.length * 7.6 * s;
    const fits = (end: boolean) => (end ? p.x - 16 * s - w > f.x + 6 * s : p.x + 16 * s + w < right - 6 * s);
    const sides = [false, true].filter(fits);
    if (!sides.length) sides.push(p.x > f.x + f.w / 2);
    const boxAt = (end: boolean, y: number): Box => {
      const x = end ? p.x - 16 * s : p.x + 16 * s;
      return { x0: end ? x - w : x, x1: end ? x : x + w, y0: y - 13 * s, y1: y + 4 * s };
    };
    let pick = { end: sides[0], y: p.y + 5 * s };
    search: for (const dy of [0, -1, 1, -2, 2, 3]) {
      for (const end of sides) {
        const y = p.y + 5 * s + dy * 15 * s;
        if (!boxes.some((bx, k) => k !== i && hit(boxAt(end, y), bx))) {
          pick = { end, y };
          break search;
        }
      }
    }
    boxes.push(boxAt(pick.end, pick.y));
    return { x: pick.end ? p.x - 16 * s : p.x + 16 * s, y: pick.y, end: pick.end };
  });
  const regions = REGIONS.map((r) => ({ ...r, ...project(r.at) })).filter(
    (r) => r.x - 45 * s > f.x && r.x + 45 * s < right && r.y - 14 * s > f.y && r.y + 6 * s < f.y + f.h && !boxes.some((b) => hit({ x0: r.x - 40 * s, x1: r.x + 40 * s, y0: r.y - 12 * s, y1: r.y + 4 * s }, b)),
  );

  const inset = { w: 78 * s, h: (78 * s * COUNTRY.h) / COUNTRY.w };
  const insetX = f.x + f.w - inset.w - 10 * s;
  const insetY = f.y + 10 * s;

  return (
    <figure className="relative" dir="ltr">
      <svg viewBox={`${f.x} ${f.y} ${f.w} ${f.h}`} role="img" aria-label={label} className="h-auto w-full overflow-hidden rounded-2xl border border-line bg-shell">
        <defs>
          <path id="ph-land" d={PH_LAND} />
        </defs>
        <use href="#ph-land" fill="var(--color-sand)" stroke="var(--color-line)" strokeWidth={1.2 * s} strokeLinejoin="round" />

        {regions.map((r) => {
          return (
            <text key={r.name} x={r.x} y={r.y} textAnchor="middle" fontSize={10 * s} letterSpacing={4 * s} fill="var(--color-ink)" opacity="0.3">
              {r.name}
            </text>
          );
        })}

        {pts.slice(1).map((p, i) => (
          <path key={i} d={arc(pts[i], p)} fill="none" stroke="var(--color-clay)" strokeWidth={2.2 * s} strokeDasharray={`${7 * s} ${5 * s}`} strokeLinecap="round" />
        ))}

        {pts.map((p, i) => (
          <g key={`${p.name}-${i}`}>
            <circle cx={p.x} cy={p.y} r={11 * s} fill={i === 0 ? "var(--color-clay)" : "var(--color-ink)"} stroke="var(--color-sand)" strokeWidth={2 * s} />
            <text x={p.x} y={p.y + 3.8 * s} textAnchor="middle" fontSize={10.5 * s} fontWeight="600" fill="#fff">
              {i + 1}
            </text>
            <text
              x={labels[i].x}
              y={labels[i].y}
              textAnchor={labels[i].end ? "end" : "start"}
              fontSize={15 * s}
              fill="var(--color-ink)"
              stroke="var(--color-sand)"
              strokeWidth={4 * s}
              strokeLinejoin="round"
              paintOrder="stroke"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {p.name}
            </text>
          </g>
        ))}

        {/* Locator: the whole country, with the area shown above */}
        <g>
          <rect x={insetX} y={insetY} width={inset.w} height={inset.h} rx={6 * s} fill="var(--color-shell)" stroke="var(--color-line)" strokeWidth={1 * s} />
          <svg x={insetX} y={insetY} width={inset.w} height={inset.h} viewBox={`${COUNTRY.x} ${COUNTRY.y} ${COUNTRY.w} ${COUNTRY.h}`}>
            <use href="#ph-land" fill="var(--color-stone)" opacity="0.45" />
            <rect x={f.x} y={f.y} width={f.w} height={f.h} fill="var(--color-clay)" fillOpacity="0.12" stroke="var(--color-clay)" strokeWidth={14} />
          </svg>
        </g>
      </svg>
    </figure>
  );
}
