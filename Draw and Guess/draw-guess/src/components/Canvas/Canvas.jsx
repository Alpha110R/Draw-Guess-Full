import React, { useEffect, useRef, useState } from "react";
import '../common/Button.css';
import ClearCanvasButton from "./ClearCanvasButton";

export function Canvas({setImageCanvasURL}){
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  
const prepareCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = canvas.clientWidth*1.2;
    canvas.height = canvas.clientHeight *2;
    canvas.style.width = canvas.width;
    canvas.style.height = canvas.height;
    
    const context = canvas.getContext("2d");
    context.scale(1, 1);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 4;
    contextRef.current = context;
  };
  function getMosuePositionOnCanvas(event) {
    const clientX = event.clientX || event.touches[0].clientX;
    const clientY = event.clientY || event.touches[0].clientY;
    const { offsetLeft, offsetTop } = event.target;
    const canvasX = clientX - offsetLeft;
    const canvasY = clientY - offsetTop;
  
    return { x: canvasX, y: canvasY };
  }

  const startDrawing = ({nativeEvent}) => {
    getMosuePositionOnCanvas(nativeEvent);
    const touchPos = getMosuePositionOnCanvas(nativeEvent);
    contextRef.current.beginPath();
    contextRef.current.moveTo(touchPos.x, touchPos.y);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
    setImageCanvasURL(canvasRef.current.toDataURL());
  };

  const draw = (nativeEvent) => {
    if (!isDrawing) {
      return;
    }
    getMosuePositionOnCanvas(nativeEvent);
    const touchPos = getMosuePositionOnCanvas(nativeEvent);
    contextRef.current.lineTo(touchPos.x, touchPos.y);
    contextRef.current.stroke();
  };

  useEffect(() => {
    prepareCanvas();
  }, []);
  return (
      <div><canvas
      onTouchStart={startDrawing}
      onTouchEnd={finishDrawing}
      onTouchMove={draw}
      ref={canvasRef}
    />
    <ClearCanvasButton canvasRef={canvasRef}/>
    </div>
  );
}