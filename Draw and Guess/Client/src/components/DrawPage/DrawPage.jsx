import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import '../common/Button.css';
import { Canvas } from '../Canvas/Canvas';
import io from 'socket.io-client';
import { useEffect } from 'react';
import { useState } from 'react';
import { TextField } from "@material-ui/core";



export default function DrawPage() {
  const [guesserWord, setGuesserWord] = useState("");
  const [socket,setSocket] = useState();
  const [imageCanvas, setImageCanvas] = useState("");
  const [victory, setVictory] = useState();
  const [endGame, setEndGame] = useState(0);
  const navigate = useNavigate();
  const {state}= useLocation();
  const {wordToDraw,score}=state;
  
  useEffect(()=>{
    const socket = io("http://localhost:4000");
    setSocket(socket);
    socket.on('message', message=>{
      setGuesserWord(message);
    });
    socket.on('victory', () =>{
        setVictory(1);
    });
    socket.on('end_session', end =>{
      setEndGame(end);
    });

    socket.emit('send_wordToGuess', wordToDraw);
    
    
  },[])

  useEffect(()=>{
    console.log("drawer send image:",imageCanvas);
    sendImageCanvasURL();
  },[imageCanvas])

  useEffect(()=>{
    switchAfterVictory();
  },[victory])

  useEffect(()=>{
    endGameFunc();
  },[endGame])
 
  const sendImageCanvasURL = async ()=>{
    await socket.emit('send_message', imageCanvas);
  }

  const switchAfterVictory = async ()=>{
    await socket.emit('send_score', score);
    await socket.disconnect();
    navigate("/guessPage")
  }

  const toWordChoosing=async()=>{
    await socket.disconnect();
    navigate("/generateWordPage")
  }

  const endGameFunc=async()=>{
    await socket.emit('end_game', 0)
    await socket.disconnect();
    navigate("/welcomePage")
  }

 const setImageCanvasURLFunc=(imageURL)=>{
  setImageCanvas(imageURL);
 }
  return (
    <div>
      <h4 style={roleTitle}>You are the painter now, draw the word</h4>
      <h2 style={subtitle}>Your word: <u>{wordToDraw}</u></h2>
      <TextField label="What the gusser think?" 
        value={guesserWord} 
        id="outlined-multiline-static" 
        variant="outlined"
        style={textField} />
      <Canvas setImageCanvasURL={setImageCanvasURLFunc}/>
      <button className='button' style={navigateStyle} onClick={()=> {toWordChoosing()}}>Choose another word</button>
      <div>
        <button className='button' onClick={()=>setEndGame(1)}>end</button>
      </div>
    </div>

  );
}

const subtitle={
  fontSize: '5vw',
  marginBottom:'15px',
  marginTop:'5px'
}
const navigateStyle={
  fontSize:'4vw',
  textAlign: 'center',
  lineHeight: '20%',
  width:'55%',
}
const roleTitle={
  margin: '2px'
}
const textField={
  margin:'2%'
}
