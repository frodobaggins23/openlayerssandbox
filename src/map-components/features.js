import Feature  from "ol/Feature";
import GeoJSON from "ol/format/GeoJSON";
import Point from "ol/geom/Point";
import linestringJSON from "../assets/linestring.json"
import arrowPointsJSON from "../assets/arrowPoints.json"

const MAP_SRID_ID = '3857';
const DATA_SRID_ID = '4326';

export const transformOptions = {
  dataProjection: `EPSG:${DATA_SRID_ID}`,
  featureProjection: `EPSG:${MAP_SRID_ID}`,
};

export const lineStringGeometry = new Feature({
  name:"sampleLinestring",
  geometry: new GeoJSON().readGeometry(linestringJSON,transformOptions)
})

export const linePoints = new GeoJSON().readFeatures(arrowPointsJSON,transformOptions)

export const marker1 = new Feature({
    id:1,
    geometry:new Point([1605240.694246073, 6459121.536261823 ]),
    name:"Point 1"
  })
  
export const marker2 = new Feature({
    id:2,
    geometry:new Point([1605260.4377683492, 6459176.104352161 ]),
    name:"Point 2"
  })