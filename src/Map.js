import React, { useEffect } from "react";
import OSM from "ol/source/OSM";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import TileImage from "ol/source/TileImage";
import { fromLonLat } from "ol/proj";

//import components
import { pointersLayer, stateBordersLayer, TestLineLayer } from "./map-components/layers";
import { draw, drag, modify } from "./map-components/interactions";
import OverlayElement, { createOverlay } from "./map-components/overlay";
import sampleGeoJSON from "./assets/sampleGeo.json"
import {Fill, Stroke, Style} from 'ol/style';
import {Vector as VectorSource} from 'ol/source';
import {Vector as VectorLayer} from 'ol/layer';
import GeoJSON from 'ol/format/GeoJSON';

const styles = {
  height: "70vh",
  width: "100%"
};

let map;

export const MAP_SRID_ID = '3857';
export const DATA_SRID_ID = '4326';
export const transformOptions = {
  dataProjection: `EPSG:${DATA_SRID_ID}`,
  featureProjection: `EPSG:${MAP_SRID_ID}`,
};



const DemoMap = () => {
  useEffect(() => {
    const reactEl = document.getElementById("overlay")
    const MyOverlay = createOverlay(reactEl)

    map = new Map({
      target: "ol-map",
      layers: [
        //https://openlayers.org/en/latest/apidoc/module-ol_layer_Tile-TileLayer.html
        new TileLayer({
          maxResolution: 14,
          source: new OSM()
        }),
        //switch maps based on resolution
        // Google Maps: https://gis.stackexchange.com/questions/231629/openlayers-v4-0-1-support-google-maps-javascript-api
        new TileLayer({
          minResolution: 13,
          source: new TileImage({
            url: "http://mt1.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}"
          })
        }),
        // test LineString 
        TestLineLayer,
        //add state borders
        stateBordersLayer,
        //custom markers
        pointersLayer,
      ],
      view: new View({
        center: fromLonLat([14.41854, 50.073658]),
        zoom: 18
      })
    });
    map.addOverlay(MyOverlay)
    
    map.on("click", e=>MyOverlay.setPosition(e.coordinate))
    
  }, []);



  return (
    <>
    <div id="ol-map" style={styles}>
      <button
        onClick={() => {
          map.removeInteraction(modify);
          map.addInteraction(draw);
        }}
      >
        Draw
      </button>
      <button
        onClick={() => {
          map.removeInteraction(draw);
          map.addInteraction(modify);
        }}
      >
        Drag
      </button>
    </div>
    <OverlayElement/>
    </>
  );
};

export default DemoMap;
