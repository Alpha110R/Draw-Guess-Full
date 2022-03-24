import React from 'react';
import Logos from './Logos'

export default function Header() {
  return <div>
    <h1 style={title}>Draw & Guess</h1>
          <div style={logosStyle}>
            <Logos logoName={"DrawLogo"}/>
            <Logos logoName={"GuessLogo"}/>
          </div>
  </div>;
}

const logosStyle={
  display: 'flex',
  justifyContent: 'space-around',
  marginLeft: '20%',
  marginRight: '20%',
  paddingBottom:'1%'

}
const title={
  fontSize: '6vw',
  marginBottom:'0px'
}