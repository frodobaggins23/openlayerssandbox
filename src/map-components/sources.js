import GeoJSON from "ol/format/GeoJSON";
import VectorSource from "ol/source/Vector";
import { Style, Stroke, Fill } from "ol/style";

//for rendering/drawing vectors over map
export const countriesSource = new VectorSource({
  format: new GeoJSON(),
  url: "countries.json"
});

export const markersSource = new VectorSource({
  format: new GeoJSON(),
  url: "markers.json"
});
