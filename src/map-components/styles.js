import { Style, Fill, Icon, Stroke } from "ol/style";
import arrow from "../assets/arrow.svg";
import pin from "../assets/pin.svg"

export const getVectorStylePoint = (feature, resolution)=>{
  const name = feature.get("name")
  const scale = resolution > 3 ? 0.5: 1
  return new Style({
    image: new Icon({
      src: pin,
      scale,
    })
  });
}

export const vectorStyleStroke = new Style({
  stroke: new Stroke({
    color: "red"
  })
});

export const getLineStringStyle =(feature,resolution) => {
  const type = feature.getGeometry().getType()

  if (type === "LineString") {
    return  new Style({
      stroke: new Stroke({
        color: "yellow",
        width: resolution > 1.5 ? 3: 12,
      }),
    });
  } else if (type === "Point") {
    const rotation = feature.get("rotation")
    const scale = resolution > 1.5 ? 0.4 : resolution > 0.8 ? 0.7 : 1

    if(resolution > 2.5) return null

    return new Style({
      image: new Icon({
        src: arrow,
        scale,
        rotation,
      })
    });
  }
}