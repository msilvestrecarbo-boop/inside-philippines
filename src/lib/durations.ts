import type { L } from "@/i18n/config";
import type { Journey, JourneyDay, TierId } from "@/content/types";

/**
 * Trip lengths every journey can be booked in (MARC, 2026-10-24). Each journey's
 * written itinerary is the reference length; other lengths are derived from it:
 * longer trips add days to the stays, shorter ones trim stays and, below that,
 * end the route early with a generic last day back to Manila.
 */
export const DURATIONS = [6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21] as const;

export const durationLabels = {
  choose: { en: "Choose your trip length", fr: "Choisissez la durée de votre voyage", es: "Elige la duración de tu viaje", ru: "Выберите длительность поездки", ar: "اختر مدة رحلتك" } as L,
  note: {
    en: "The day-by-day plan and prices update for the length you choose. Every plan can still be adjusted with our team.",
    fr: "Le programme jour par jour et les prix s'adaptent à la durée choisie. Chaque programme reste modifiable avec notre équipe.",
    es: "El programa día a día y los precios se adaptan a la duración elegida. Cada programa se puede ajustar con nuestro equipo.",
    ru: "Программа по дням и цены меняются в зависимости от выбранной длительности. Любую программу можно доработать с нашей командой.",
    ar: "يتغيّر البرنامج اليومي والأسعار بحسب المدة التي تختارها، ويمكن دائماً تعديل أي برنامج مع فريقنا.",
  } as L,
  route: { en: "Route", fr: "Itinéraire", es: "Ruta", ru: "Маршрут", ar: "المسار" } as L,
  design: { en: "Design this trip", fr: "Créer ce voyage", es: "Diseñar este viaje", ru: "Спланировать эту поездку", ar: "صمّم هذه الرحلة" } as L,
};

const departure: JourneyDay = {
  days: "",
  place: "manila",
  title: {
    en: "Back to Manila and flight home",
    fr: "Retour à Manille et vol retour",
    es: "Regreso a Manila y vuelo de vuelta",
    ru: "Возвращение в Манилу и вылет домой",
    ar: "العودة إلى مانيلا ورحلة العودة",
  },
  body: {
    en: "A domestic flight back to Manila (or Cebu) connects with your international flight. We leave a comfortable margin between the two, because flights between the islands are sometimes delayed.",
    fr: "Un vol intérieur vous ramène à Manille (ou Cebu) pour votre vol international. Nous laissons une marge confortable entre les deux, car les vols entre les îles ont parfois du retard.",
    es: "Un vuelo nacional te lleva de vuelta a Manila (o Cebú) para enlazar con tu vuelo internacional. Dejamos un margen cómodo entre ambos, porque los vuelos entre islas a veces se retrasan.",
    ru: "Внутренний рейс доставит вас обратно в Манилу (или Себу) к международному рейсу. Мы оставляем удобный запас времени, потому что рейсы между островами иногда задерживаются.",
    ar: "رحلة داخلية تعيدك إلى مانيلا (أو سيبو) لتلحق برحلتك الدولية. نترك هامشاً مريحاً بين الرحلتين لأن الرحلات بين الجزر تتأخر أحياناً.",
  },
};

const span = (d: string) => {
  const [a, b] = d.split(/[–-]/).map(Number);
  return b ? b - a + 1 : 1;
};

/** Spread `total` days over blocks: change the longest stays first, never below one day. */
function fit(lengths: number[], total: number) {
  const out = [...lengths];
  let diff = total - out.reduce((a, b) => a + b, 0);
  const stays = out.map((l, i) => i).filter((i) => lengths[i] > 1);
  const pool = stays.length ? stays : out.map((_, i) => i);
  while (diff > 0) {
    // add to the stay that has grown least relative to its written length
    const i = pool.reduce((best, k) => (out[k] / lengths[k] < out[best] / lengths[best] ? k : best), pool[0]);
    out[i]++;
    diff--;
  }
  // trim the longest stays first, keeping two days per stay for as long as possible
  for (const floor of [2, 1]) {
    while (diff < 0) {
      const i = out.reduce((best, l, k) => (l > out[best] ? k : best), 0);
      if (out[i] <= floor) break;
      out[i]--;
      diff++;
    }
  }
  return out;
}

export type Variant = { block: number; days: string }[];

/**
 * Day-by-day plan for `n` days as indexes into `[...journey.itinerary, departure]`.
 * Index `itinerary.length` is the generic departure day.
 */
export function variantFor(j: Journey, n: number): Variant {
  const it = j.itinerary;
  const len = it.map((d) => span(d.days));
  const first = 0;
  const last = it.length - 1;
  const mid = it.map((_, i) => i).slice(1, -1);
  const need = (ids: number[]) => ids.reduce((a, i) => a + (len[i] > 1 ? 2 : 1), 0);
  const firstLen = n < j.days ? 1 : len[first];
  let end = last;
  let endLen = len[last];
  let room = n - firstLen - endLen;
  if (room < need(mid) && new Set(mid.map((i) => it[i].place)).size > 1) {
    // too short for every stop: end the route early, then a generic day back to Manila
    end = it.length;
    endLen = 1;
    room = n - firstLen - 1;
    while (need(mid) > room && new Set(mid.map((i) => it[i].place)).size > 1) {
      const place = it[mid[mid.length - 1]].place;
      while (it[mid[mid.length - 1]].place === place) mid.pop();
    }
  }
  const midLen = fit(mid.map((i) => len[i]), room);
  const blocks = [first, ...mid, end];
  const lengths = [firstLen + room - midLen.reduce((a, b) => a + b, 0), ...midLen, endLen];
  let day = 1;
  return blocks.map((block, k) => {
    const l = lengths[k];
    const days = l > 1 ? `${day}–${day + l - 1}` : `${day}`;
    day += l;
    return { block, days };
  });
}

export const departureDay = departure;

/** Indicative price for `n` days: a fixed share for flights and transfers, the rest per day. Rounded to €50. */
export function priceFor(base: number, baseDays: number, n: number) {
  return Math.round((base * (0.3 + (0.7 * n) / baseDays)) / 50) * 50;
}

export function pricesFor(j: Journey, n: number): Partial<Record<TierId, number>> {
  return Object.fromEntries(
    Object.entries(j.fromPriceEUR)
      .filter(([, v]) => v)
      .map(([k, v]) => [k, priceFor(v!, j.days, n)]),
  );
}
