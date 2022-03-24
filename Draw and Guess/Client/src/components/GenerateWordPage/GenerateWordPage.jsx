import React from 'react';
import '../common/Button.css';
import randomWords from 'random-words';
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const generateWords=(difficulty)=>{
  switch(difficulty){
    case "hard":
      return (randomWords({exactly: 8, wordsPerString:2})); 
    case "medium":
      return (randomWords({exactly: 8, maxLength: 7}));  
    default:
      return (randomWords({exactly: 15, maxLength: 4}));
  }
}

export default function WordChoosingPage() {
    const [words, setWords] = useState([]);
    const [wordScore, setWordScore] = useState(0);
    const navigate = useNavigate();
    
    const navigateToDrawPage=(word)=>{
      navigate("/drawPage", {state: {wordToDraw: word, score: wordScore }})
    }
    const chooseWord= (difficulty, score)=>{
      setWords(generateWords(difficulty));
      setWordScore(score);
    }

    return (
    <div>
      <h3 style={subTitleChooseWord}>Choose your word</h3>
      <div style={difficulties}>
        <button className='button' onClick={()=> chooseWord("hard", 5)}>Hard</button>
        <button className='button' onClick={()=> chooseWord("medium", 3)}>Medium</button>
        <button className='button' onClick={()=> chooseWord("easy", 1)}>Easy</button>
      </div>
      <div>
        {words.map((word) => {
          return(<div key={word}>
                    <button className='button' style={wordListStyle} onClick={()=>{navigateToDrawPage(word)}}>
                    {word}</button>
                  </div>)
        })}
      </div>
    </div>
      
  );
}

const subTitleChooseWord={
  fontSize: '4vw',
  marginBottom:'0px'
}
const difficulties={
  display:"flex",
  justifyContent: "space-around",
  width: '100%',
  flexGrow:'4',
  marginBottom:'20px',
}
const wordListStyle={
  fontSize:'4vw',
  textAlign: 'center',
  lineHeight: '20%',
  width:'45%',
  margin:'7px',
  backgroundColor: "#8b49f6",
}