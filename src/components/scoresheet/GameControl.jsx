import React, {useState} from 'react';
import Scoreframes from "./Scoreframes";
import Pins from "./Pins";

class Frame {
    constructor(name, ballOne, ballTwo, frameScore, totalScore, frameComplete, scoreComplete, ballOneComplete){
        this.name = name;
        this.ballOne = ballOne;
        this.ballTwo = ballTwo;
        this.frameScore = frameScore;
        this.totalScore = totalScore;
        this.frameComplete = frameComplete;
        this.scoreComplete = scoreComplete;
        this.ballOneComplete = ballOneComplete
    }
};


const frame1 = new Frame('Frame One', '', '', 0, 0, false, false, false);

function rackPins(value) {
    let pinsLeft = 10 - value;
    switch(pinsLeft) {
        case 9:
            console.log('1 pin hit');
            break;
        case 8: 
            console.log('2 pins hit');
    }
}

const pushPinsToFrame = (frameArray) => {
    //Is frame 1 complete?
    //Yes - go to frame 2
    //No - figure out first ball or second ball... tally scores... complete the frame
    if (!frame1.frameComplete) {
        if (!frame1.ballOneComplete) {
            //do something for ball 1
            frame1.ballOne = frameArray.shift();
            rackPins(frame1.ballOne)
            frame1.ballOneComplete = true;
        } else {
            //do something for ball 2
            frame1.ballTwo = frameArray.shift();
            frame1.frameComplete = true;
        }
    }
}


function GameControl() {
    const [frameOne, setFrameOne] = useState({
        frame1a: '',
        frame1b: '',
       
    });

    
    let frameArray = [];
    function handlePinsKnocked(event) {
        let value = event.target.value;
        frameArray.push(Number(value));
        pushPinsToFrame(frameArray);
        console.log(frameArray)  
        console.log(frame1); 
        setFrameOne(prevValue => {
            if (frame1.ballOneComplete && !frame1.frameComplete) {
                return {
                    frame1a: frame1.ballOne,
                    frame1b: prevValue.frame1b
                }
            } else if (frame1.ballOneComplete && frame1.frameComplete) {
                return {
                    frame1a: prevValue.frame1a,
                    frame1b: frame1.ballTwo
                }
            }
        })   
      }




    return <div>
        <Pins pinsKnocked={handlePinsKnocked}/>
        <Scoreframes frame1a={frameOne.frame1a} frame1b={frameOne.frame1b}/>
        </div>
}

export default GameControl;