//https://openlayers.org/en/latest/examples/overlay.html

import React from "react"
import { Overlay } from "ol";


export const createOverlay = (el) =>  new Overlay({
    element: el,
    offset: [10, 0],
    positioning: 'bottom-left'
})

const OverlayElement = ()=> <div id="overlay" style={{width:"200", height:"200", backgroundColor:"#fff", color:"red", zIndex:1000}}>This is React Overlay</div>

export default OverlayElement

