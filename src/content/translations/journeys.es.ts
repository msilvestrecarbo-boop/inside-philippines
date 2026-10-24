import type { JourneyTranslation } from "./types";
import p1 from "./journeys.es.part1";
import p2 from "./journeys.es.part2";
import p3 from "./journeys.es.part3";
import p4 from "./journeys.es.part4";
import p5 from "./journeys.es.part5";

const t: Record<string, JourneyTranslation> = { ...p1, ...p2, ...p3, ...p4, ...p5 };

export default t;
