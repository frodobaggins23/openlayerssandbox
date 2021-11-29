import { Style, Icon, Stroke } from "ol/style";
import icon from "../assets/weather_pin.svg";

export const vectorStylePoint = new Style({
  image: new Icon({
    src: icon,
    size: [32, 32]
  })
});

export const vectorStyleStroke = new Style({
  stroke: new Stroke({
    color: "red"
  })
});
