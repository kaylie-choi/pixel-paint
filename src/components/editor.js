import React, {useState} from 'react';
import "../styles/editor.scss";
import { CirclePicker } from 'react-color';
import DrawingPanel from "./drawing-panel";


export default function Editor() {
  // state properties
  //setting 16x16 as default values for width / heights
  const [panelWidth, setPanelWidth] = useState(16) 
  const [panelHeight, setPanelHeight] = useState(16)
  //hiding / showing panel dimension options
  const [hideOptions, setHideOptions] = useState(false) 
  //hiding / showing drawing panel area
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true) 
  //control button text (start drawing/reset)
  const [buttonText, setButtonText] = useState("start drawing") 
  // setting default value for the color picker little circles
  const [selectedColor, setColor] = useState("#f44336") 

  function initDrawingPanel() {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === "start drawing" 
    ? setButtonText("reset") 
    : setButtonText("start drawing");
  }

  // setting color within color picker
  function changeColor(color) {
    setColor(color.hex)
  }

  return (
    <div id='editor'>
    <h1>Pixel Editor</h1>
      {/* if hideDrawingPanel is true, show h2 / options */}
      {/* hideDrawingPanel becomes false when initDrawingPanel is triggered */}
      {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
      
      {hideDrawingPanel && (
        <div id="options">
          <div className="option">
            <input 
              type="number" 
              className="panelInput" 
              defaultValue={panelWidth} 
              onChange={(e) => {setPanelWidth(e.target.value)}}
            />
            <span>&nbsp;Width</span>
          </div>
          
          <div className="option">
            <input 
              type="number" 
              className="panelInput" 
              defaultValue={panelHeight} 
              onChange={(e) => {
                setPanelHeight(e.target.value)
              }}
            />
            <span>&nbsp;Height</span>
          </div>
        </div>
      )}

      <button 
        onClick={initDrawingPanel}
        className="button">
        {buttonText}
      </button>

      {/* color picker only appears when options are hidden */}
      {/* !!!! TODO: choose a different color selector and palette https://casesandberg.github.io/react-color/ */}
      {hideOptions && (
        <CirclePicker color={selectedColor} onChangeComplete={changeColor}/>
      )}

      {hideOptions && (
        <DrawingPanel
          width = {panelWidth}
          height = {panelHeight}
          selectedColor = {selectedColor}
        />
      )}

    </div>
  )
}