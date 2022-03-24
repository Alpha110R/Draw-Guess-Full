import React from 'react';
import DrawLogo from '../../assets/images/DrawLogo.png';
import GuessLogo from '../../assets/images/GuessLogo.png';
import CopyrightLogo from '../../assets/images/CopyrightLogo.png';
import PressStartLogo from '../../assets/images/PressStartLogo.png';
const Logos =({logoName})=>{
    switch(logoName){
        case "DrawLogo":
            return<img src={DrawLogo} style = {titleLogosStyle} alt=""/>;
        case "GuessLogo":
            return <img src={GuessLogo} style = {titleLogosStyle} alt=""/>;
        case "CopyrightLogo":
            return <img src={CopyrightLogo} style = {copyrightLogosStyle} alt=""/>;
        case "PressStartLogo":
            return <img src={PressStartLogo} style = {PressStartLogoStyle} alt=""/>;
    }
    
}
export default Logos;

const titleLogosStyle={
    width: '10%',
}
const copyrightLogosStyle={
    width:'20px',
    textAlign: 'bottom'
}
const PressStartLogoStyle={
    width:'60%',
    marginBottom: '-10px'
}