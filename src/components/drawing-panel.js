import React, {useRef} from 'react';
import "../styles/drawing-panel.scss";
import Row from "./row";
import { exportComponentAsPNG, exportComponentAsPDF, exportComponentAsJPEG } from 'react-component-export-image';

export default function DrawingPanel(props) {
  const {width, height, selectedColor} = props;

  //set up some refs for exportComponentAsPNG to work
  // refs used to reference elements inside react app
  // useRef hook required for inside function component
  // referencing pixels div that contains the collection of rows
  const panelRef = useRef(); 

  // initialize empty array
  let rows = [];
  
  for (let i = 0; i < height; i++){
    // adding row items to rows array
    rows.push(
      // key prop bc we are iterating 
      // pass in width prop per row
      <Row key={i} width={width} selectedColor={selectedColor}/>
    )
  }

  return (
    <div id='drawingPanel'>
      <div id='pixels' ref={panelRef}>
        {rows}
      </div>
      
      <div className='export-buttons'>
        <button 
          onClick={() => exportComponentAsPNG(panelRef)}
          className='export-button'>
            export as png
        </button> 
        <button 
          onClick={() => exportComponentAsJPEG(panelRef)}
          className='export-button'>
            export as jpef
        </button> <button 
          onClick={() => exportComponentAsPDF(panelRef)}
          className='export-button'>
            export as pdf
        </button> 
      </div>
    </div>
  )
}