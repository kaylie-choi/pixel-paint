import React, {useState} from 'react';
import "../styles/editor.scss";
import { CirclePicker } from 'react-color';
import DrawingPanel from "./drawing-panel";


export default function Editor() {
  // state properties
  const [panelWidth, setPanelWidth] = useState(16) //setting 16x16 as default values for width / heights
  const [panelHeight, setPanelHeight] = useState(16)
  const [hideOptions, setHideOptions] = useState(false) //hiding / showing panel dimension options
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true) //hiding / showing drawing panel area
  const [buttonText, setButtonText] = useState("start drawing") //control button text (start drawing/reset)
  const [selectedColor, setColor] = useState("#f44336") // setting default value for the color picker

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
      {/* !!!! TODO: choose a different color selector https://casesandberg.github.io/react-color/ */}
      {hideOptions && (
        <CirclePicker color={selectedColor} onChangeComplete={changeColor}/>
      )}

      <DrawingPanel
        width = {setPanelWidth}
        height = {setPanelHeight}
        selectedColor = {selectedColor}
      />

    </div>
  )
}