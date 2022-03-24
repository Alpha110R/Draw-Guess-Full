import React from 'react';
import '../common/Button.css';
import {useNavigate } from 'react-router-dom';
import Logos from '../common/Logos';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function WelcomePage() {
  const [highestScore, setHighestScore] = useState();
  const [socket, setSocket] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
    const socket = io("http://localhost:4000");
    setSocket(socket);
    socket.on('highestScore', highestScore=>{
        setHighestScore(highestScore);
        socket.disconnect();
    });
  },[])

  const navigateToWaitingPage=()=>{
    navigate("/waitingPage")
  }

  return (
    <div>
        <Logos logoName={"PressStartLogo"} style={logoStyle}/>
        <h4 style={highestScoreStyle}>HighestScore: {highestScore}</h4>
         <div>
           <button className="button" onClick={navigateToWaitingPage}>Let's play!</button>
          </div>
    </div>
    );
}
const logoStyle ={
  width: '80px'
}
const highestScoreStyle={
  marginTop:'0px',
  marginBottom: '2px'
}