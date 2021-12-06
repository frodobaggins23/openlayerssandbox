import Feature  from "ol/Feature";
import GeoJSON from "ol/format/GeoJSON";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import { Style, Stroke, Fill } from "ol/style";

//for rendering/drawing vectors over map
export const countriesSource = new VectorSource({
  format: new GeoJSON(),
  url: "countries.json"
});

export const markersSource = new VectorSource({});

const feature1 = new Feature({
  id:1,
  geometry:new Point([1605161.2713963704, 6459100.635511901 ]),
  name:"Point 1"
})

const feature2 = new Feature({
  id:2,
  geometry:new Point([1605362.5157599025, 6459171.698061635 ]),
  name:"Point 2"
})



markersSource.addFeatures([feature1, feature2])