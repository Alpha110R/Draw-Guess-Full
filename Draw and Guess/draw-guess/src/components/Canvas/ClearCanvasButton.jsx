import React from 'react';

export default function ClearCanvasButton({canvasRef}) {
    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d")
        context.fillStyle = "white"
        context.fillRect(0, 0, canvas.width, canvas.height)
      }
  return (
    <div>
      <button className="button" style={clearButton} onClick={()=>clearCanvas()}>Clear Canvas</button>
    </div>);
}

const clearButton={
    fontSize:'4vw',
    textAlign: 'center',
    lineHeight: '20%',
    width:'45%',
}