import Draw from "ol/interaction/Draw";
import Translate from "ol/interaction/Translate";
import Modify from "ol/interaction/Modify";

import { markersSource } from "./sources";
import { getVectorStylePoint } from "./styles";
import { pointersLayer } from "./layers";

export const draw = new Draw({
  type: "Point",
  source: markersSource,
  style: getVectorStylePoint
});

draw.on("drawend", (e) => {
  console.log("DRAW", e.feature.getGeometry().getCoordinates());
});

export const drag = new Translate({
  layers: [pointersLayer]
});

drag.on("translateend", (e) => {
  console.log("DRAG", e.coordinate);
});

export const modify = new Modify({
  source: markersSource
});
