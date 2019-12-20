import React, { useState } from 'react';
import Scoreframes from "./Scoreframes";
import Pins from "./Pins";

class Frame {
    constructor(name, ballOne, ballTwo, frameScore, totalScore, frameComplete, scoreComplete,){
        this.name = name;
        this.ballOne = ballOne;
        this.ballTwo = ballTwo;
        this.frameScore = frameScore;
        this.totalScore = totalScore;
        this.frameComplete = frameComplete;
        this.scoreComplete = scoreComplete
    }
};


const frame1 = new Frame('Frame One', '', '', 0, 0, false, false);

const pushPinsToFrame = (frameArray) => {
    frame1.ballOne = frameArray[0];
    frame1.ballTwo = frameArray[1];
   
}


function GameControl() {
    const [frames, setFrames] = useState({
        frame1a: '',
        frame1b: '',
        frame2a: '',
        frame2b: ''
    });

    
    let frameArray = [];
    function handlePinsKnocked(event) {
        let value = event.target.value;
        frameArray.push(Number(value));
        console.log(frameArray);

        //Call function to insert the clicks to frame class
        pushPinsToFrame(frameArray);      
    
      }




    return <div>
        <Pins pinsKnocked={handlePinsKnocked}/>
        <Scoreframes frame1a={frames.frame1a} frame1b={frames.frame1b}/>
        </div>
}

export default GameControl;