import React, {useState} from 'react';
import "../styles/editor.scss";
import { SketchPicker } from 'react-color';
import DrawingPanel from "./drawing-panel";
import FingerHeart from "../assets/heart.png";
import Minimize from "../assets/minimize.png";
import Maximize from "../assets/maximize.png";
import Close from "../assets/close.png"


export default function Editor() {
  // state properties
  //setting 24x24 as default values for width / heights
  const [panelWidth, setPanelWidth] = useState(24) 
  const [panelHeight, setPanelHeight] = useState(24)
  //show / hide right drawing panel
  const [showDrawingPanel, setShowDrawingPanel] = useState(false) 
  //control button text (start drawing/reset)
  const [buttonText, setButtonText] = useState("start drawing") 
  // setting default value for the color picker little circles
  const [selectedColor, setColor] = useState("#fcb4b3") 

  function initDrawingPanel() {
    setShowDrawingPanel(!showDrawingPanel);

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
      <span className='editor-bar'>
        <img src={FingerHeart} alt='finger heart pixel art'></img>
        <h1>untitled - pixel paint</h1>
        
        <img src={Close} 
          className='bar-img close' 
          alt='close pixel art'
          onClick={initDrawingPanel}>
        </img>
        <img src={Maximize} className='bar-img' alt='maximze pixel art'></img>
        <img src={Minimize} className='bar-img' alt='minimize pixel art'></img>


      </span>

      <span className='editor-task-bar'>
        <h2>
          <span className='task-bar-hotkey'>e</span>nter&nbsp;
          <span className='task-bar-hotkey'>p</span>anel&nbsp;
          <span className='task-bar-hotkey'>d</span>imensions
        </h2>
      </span>
      
      <div className='body-panel'>

        <div className='left-panel'>
          <div className='input-section'>
            <div className="input-option">
              <label className='option-label'>width &nbsp;</label>
              <input 
                type="number" 
                defaultValue={panelWidth} 
                onChange={(e) => {setPanelWidth(e.target.value)}}
              />
            </div>
            
            <div className="input-option">
              <label className='option-label'>height&nbsp;</label>
              <input 
                type="number" 
                defaultValue={panelHeight} 
                onChange={(e) => {setPanelHeight(e.target.value)}}
              />
            </div>

            <button className="input-button"
              onClick={initDrawingPanel}>
              {buttonText}
            </button>
          </div>
          
          <SketchPicker 
            color={selectedColor} 
            onChangeComplete={changeColor}
            disableAlpha={true}
            presetColors={[
              '#CB7B7D', 
              '#D4939A', 
              '#F1B1B2', 
              '#FED9D7', 
              '#fbf8f2', 
              '#f8e6e4', 
              '#fbd0c9', 
              '#f9c8ca', 
              '#fcb4b3', 
              '#e99b9e', 
              '#d4878d', 
              '#f19e84', 
              '#e38574', 
              '#ef7a6a', 
              // second row
              '#feffe8',
              '#f0dcaf', 
              '#deac5e',
              '#f08737', 
              '#c76c2d',
              '#904c21', 
              '#4c6352',
              '#608156', 
              '#c7c34f',
              '#f9c2dd', 
              '#f099ba',
              '#af4b6c',
              '#844219', 
              '#432c33'
            ]}
          />
        </div> {/* left-panel */}

        {showDrawingPanel && (
          <div className='right-panel'> 
            <DrawingPanel
              width = {panelWidth}
              height = {panelHeight}
              selectedColor = {selectedColor}
            />
          </div>
        )}

      </div> {/* body-panel */}

    </div> /* editor */
  )
}