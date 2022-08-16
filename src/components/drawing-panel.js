import React from 'react';
import "../styles/drawing-panel.scss"
import Row from "./row"

export default function DrawingPanel(props) {
  const {width, height, selectedColor} = props;

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
      <div id='pixels'>
        {rows}
      </div>    
    </div>
  )
}