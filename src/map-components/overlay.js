//https://openlayers.org/en/latest/examples/overlay.html

import React from "react"
import { Overlay } from "ol";

const kittenUrl="https://image.shutterstock.com/image-photo/british-shorthair-kitten-silver-color-600w-1510641710.jpg"


export const createOverlay = (el) =>  new Overlay({
    element: el,
    offset: [10, 0],
    positioning: 'bottom-left'
})

const OverlayElement = ()=> (
    <div id="overlay" style={{width:200, backgroundColor:"#fff", padding:10, border: "1px solid gray", borderRadius:20}}>
        <h3>Custom overlay</h3>
        <p>With random text or kitten</p>
        <img src={kittenUrl} style={{width:75, display:"block", margin:"0 auto"}}/>
        <button>or button</button>
        <p>or some data from the map:</p>
        <div>
            <p><b>speed: </b><span id="overlay-speed"></span> km/h</p>
            <p><b>rotation: </b><span id="overlay-rotation"></span> deg</p>
        </div>
    </div>
    )

export default OverlayElement

