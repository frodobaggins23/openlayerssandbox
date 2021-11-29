import VectorLayer from "ol/layer/Vector";

import { countriesSource, markersSource } from "./sources";
import { vectorStyleStroke, vectorStylePoint } from "./pointers";

export const pointersLayer = new VectorLayer({
  source: markersSource,
  style: vectorStylePoint
});

export const stateBordersLayer = new VectorLayer({
  source: countriesSource,
  style: vectorStyleStroke
});
