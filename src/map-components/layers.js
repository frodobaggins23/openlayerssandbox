import VectorLayer from "ol/layer/Vector";

import { countriesSource, markersSource } from "./sources";
import { vectorStyleStroke, getVectorStylePoint, getLineStringStyle } from "./styles";
import { LineStringSource } from "./sources";

export const pointersLayer = new VectorLayer({
  source: markersSource,
  style: getVectorStylePoint
});

export const stateBordersLayer = new VectorLayer({
  source: countriesSource,
  style: vectorStyleStroke
});

export const TestLineLayer = new VectorLayer({
  source: LineStringSource,
  style: getLineStringStyle
});