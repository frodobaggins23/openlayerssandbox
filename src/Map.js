import React, { useEffect } from "react";
import OSM from "ol/source/OSM";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import TileImage from "ol/source/TileImage";
import { fromLonLat } from "ol/proj";

//import components
import { pointersLayer, stateBordersLayer } from "./map-components/layers";
import { draw, drag, modify } from "./map-components/interactions";

const styles = {
  height: "70vh",
  width: "100%"
};

let map;

const DemoMap = () => {
  useEffect(() => {
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
        //add state borders
        stateBordersLayer,
        //custom markers
        pointersLayer
      ],
      view: new View({
        center: fromLonLat([14.41854, 50.073658]),
        zoom: 18
      })
    });

    //drawing points

    map.addInteraction(draw);

    //dragging pointers

    map.addInteraction(modify);
  }, []);

  return (
    <div id="ol-map" style={styles}>
      This is map
      <button
        onClick={() => {
          map.removeInteraction(draw);
        }}
      >
        Drag
      </button>
    </div>
  );
};

export default DemoMap;
