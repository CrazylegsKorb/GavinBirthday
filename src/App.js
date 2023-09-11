import Confetti from 'react-dom-confetti';
import { useState } from 'react';
import BirthdayCake from './images/Birthday-Cake.png';
import ConfettiBackground from './images/Confetti-Back.png';

const config = {
  angle: 90,
  spread: "60",
  startVelocity: "50",
  elementCount: "75",
  dragFriction: "0.20",
  duration: "400",
  stagger: "4",
  width: "9px",
  height: "9px",
  perspective: "1000px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

function App(){
    //Confetti effect on state change from true -> false of 'active' prop
    //Needed two seperate confetti jsx for every click, confetti position is relative.
    const [confetti1, setConfetti1] = useState(false);
    const [confetti2, setConfetti2] = useState(true);

    const handleClick = () => {
        setConfetti1(!confetti1);
        setConfetti2(!confetti2);
    }

    const birthdate = new Date('September 11, 2010');

    const currAge = (birthdate) => { 
        var diff_ms = Date.now() - birthdate.getTime();
        var age_dt = new Date(diff_ms); 
      
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    const ordinal = (i) => {
        var j = i % 10,
            k = i % 100;
        if (j === 1 && k !== 11) {
            return i + "st";
        }
        if (j === 2 && k !== 12) {
            return i + "nd";
        }
        if (j === 3 && k !== 13) {
            return i + "rd";
        }
        return i + "th";
    }

    return (
        <div style={{backgroundImage: `url(${ConfettiBackground})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{backgroundColor:'white', borderRadius:'20px',border: '2px solid black', padding:'10px'}}>Happy {ordinal(currAge(birthdate))} Birthday Gavin!</h1>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img style={{width: '20%', height:'auto'}} alt={'Birthday Cake'} src={BirthdayCake}/>   
            </div>
            <div style={{paddingTop:'10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Confetti active={ confetti2 } config={ config }/>
                <button onClick={handleClick}>Click me!</button>
                <Confetti active={ confetti1 } config={ config }/>
                
            </div>
            
        </div>
    );    
}

export default App;