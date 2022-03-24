import React from 'react';
import LoadingSupra from '../../assets/videos/LoadingSupra.mp4';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function WaitingPage() { 
  const [role, setRole] = useState("");
  const [turn, setTurn] = useState("");
  const [socket,setSocket] = useState();
  const navigate = useNavigate();
  
  useEffect(() =>{
    const socket = io("http://localhost:4000");
    setSocket(socket);
    
    socket.on("myRole", myRole => {
      setRole(myRole);
    });

    socket.on('turn', turn=>{
      setTurn(turn);
    })
  },[])

  useEffect(()=>{
    if(turn==='player1'){
      socket.disconnect();
      if(role ==="player1")
        navigate("/generateWordPage");
      else
        navigate("/guessPage");
    }
  },[turn]);
  return (
    <div>
        <h1>Waiting for a partner....</h1>
    <video style={video}
           autoPlay
           loop
           muted>
          <source src={LoadingSupra} type="video/mp4"/>
      </video>
    </div>
    
  );
}
const video={
    width: "70%"
}
