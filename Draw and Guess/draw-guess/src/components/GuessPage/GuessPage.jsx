import { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import '../common/Button.css';
import io from 'socket.io-client';
import { TextField } from "@material-ui/core";
import {useNavigate} from 'react-router-dom';


export default function GuessPage() {//wordToGuess gets from the drawer(the second player)
  const [guess, setGuess] = useState('');
  const [socket,setSocket] = useState();
  const [wordToGuess, setWordToGuess] = useState('');
  const [imageCanvas, setImageCanvas] = useState("");
  const [wordToCheck, setWordToCheck]=useState('');
  const [endGame, setEndGame] = useState(0);
  const navigate = useNavigate();
  const guessInputRef = useRef(null);
  
  useEffect(()=>{
    const socket = io("http://localhost:4000");
    setSocket(socket);

    socket.on("message", message => {
      setImageCanvas(message);
    });
    
    socket.on('wordToGuess', wordToGuess=>{
      setWordToGuess(wordToGuess);
      console.log(wordToGuess);
    });

    socket.on('end_session', end =>{
      setEndGame(end);
    });
    
  },[]);
  
  useEffect(()=>{
    sendGuess();
  },[guess])

  useEffect(()=>{
    sendvictory();
  },[wordToCheck])

  useEffect(()=>{
    endGameFunc();
  },[endGame])

  const checkGuess=()=>{
    if(guess === wordToGuess)
        setWordToCheck(wordToGuess);
  }

  const sendGuess = async ()=>{
    await socket.emit("send_message", guess);
  }

  const sendvictory = async ()=>{
    await socket.emit("send_victory", 1);
    await socket.disconnect();
    navigate("/generateWordPage");
  }

  const endGameFunc=async()=>{
    await socket.emit('end_game', 0)
    await socket.disconnect();
    navigate("/welcomePage")
  }

  return (
    <div>
      <h4 style={roleTitle}>You are the guesser, guess the word!</h4>
      <img src={imageCanvas} alt="new"></img>
      <div>
        <TextField ref={guessInputRef} label="Guess the image" 
        value={guess} id="outlined-multiline-static" 
        variant="outlined" style={textField} onChange={e => setGuess(e.target.value)}/>
        <div>
          <button className="button" style={submitButton} onClick={checkGuess}>Submit</button>
        </div>
        <div>
          <button className='button' onClick={()=>setEndGame(1)}>end</button>
        </div>
      </div>
    </div>
  );
}

const submitButton={
  width:'40%',
  lineHeight:'25%'
}
const textField={
  margin:'2%'
}
const roleTitle={
  margin: '10px'
}
