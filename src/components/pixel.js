import React, {useState} from 'react';
import "../styles/pixel.scss"

export default function Pixel(props) {
  const { selectedColor } = props;

  // initialize default bg color of pixel
  const [pixelColor, setPixelColor] = useState("#fff");
  // use old color when hovering over pixel
  const [oldColor, setOldColor] = useState(pixelColor);
  // use while switching color on hover
  const [canChangeColor, setCanChangeColor] = useState(true);


  // simulate color changing when hovering over individual pixels
  
  function applyColor() {
    // apply color fn called with onClick event, 
    // setting pixel color to selected color that we are passing into the pixel
    setPixelColor(selectedColor);
    // you cannot change the color after this (when hovering)
    // prevents hovering effects from overriding click event
    setCanChangeColor(false);
  }
  
  function changeColorOnHover() {
    // setting "old" color reserve to current color so that it knows what color to revert to when mouse leaves the area
    setOldColor(pixelColor);
    // temporarily setting pixel color to selected color
    setPixelColor(selectedColor);
  }
  
  function resetColor() {
    if (canChangeColor){
      setPixelColor(oldColor);
    }
    setCanChangeColor(true);
  }

  return (
    <div 
      className='pixel'
      onClick={applyColor}
      //following onMouse events are hover states
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}
      style={{ backgroundColor: pixelColor }}
    >
      
    </div>
  )
}