import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import { marker1, marker2, lineStringGeometry, linePoints } from "./features";


export const LineStringSource = new VectorSource({
  features: [lineStringGeometry],
});

export const LinePointSource = new VectorSource({
  features: linePoints,
});

//for rendering/drawing vectors over map
export const countriesSource = new VectorSource({
  format: new GeoJSON(),
  url: "countries.json"
});

export const markersSource = new VectorSource({
  features:[marker1, marker2]
});
