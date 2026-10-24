import type { JourneyTranslation } from "./types";
import p1 from "./journeys.fr.part1";
import p2 from "./journeys.fr.part2";
import p3 from "./journeys.fr.part3";
import p4 from "./journeys.fr.part4";
import p5 from "./journeys.fr.part5";

const t: Record<string, JourneyTranslation> = { ...p1, ...p2, ...p3, ...p4, ...p5 };

export default t;
