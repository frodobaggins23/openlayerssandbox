import { Style, Fill, Icon, Stroke } from "ol/style";
import arrow from "../assets/arrow.svg";

export const getVectorStylePoint = (feature, resolution)=>{
  const name = feature.get("name")
  const scale = resolution > 3 ? 0.5: 1
  const rotation = name === "Point 1" ? 0.785398163 : 1.57079633
  return new Style({
    image: new Icon({
      src: arrow,
      scale,
      rotation
    })
  });
}

export const vectorStyleStroke = new Style({
  stroke: new Stroke({
    color: "red"
  })
});

export const getLineStringStyle =(_,resolution) => {
  return  new Style({
    stroke: new Stroke({
      color: 'green',
      width: resolution > 1.5 ? 3: 12,
    }),
  });
}