import React, { useState } from "react";
import Scoreframes from "./Scoreframes";
import Pins from "./Pins";

class Frame {
  constructor(
    name,
    ballOne,
    ballTwo,
    frameScore,
    totalScore,
    frameComplete,
    scoreComplete,
    ballOneComplete,
    ballTwoComplete
  ) {
    this.name = name;
    this.ballOne = ballOne;
    this.ballTwo = ballTwo;
    this.frameScore = frameScore;
    this.totalScore = totalScore;
    this.frameComplete = frameComplete;
    this.scoreComplete = scoreComplete;
    this.ballOneComplete = ballOneComplete;
    this.ballTwoComplete = ballTwoComplete;
  }
}
let currentFrame = 1;
const frame1 = new Frame("Frame One", "", "", 0, 0, false, false, false, false);
const frame2 = new Frame("Frame Two", "", "", 0, 0, false, false, false, false);


function rackPins(value) {
    let pinsLeft = 10 - value;
    if (pinsLeft === 1) {
      console.log('daMN')
    }
}

const pushPinsToFrame = frameArray => {
    if (!frame1.frameComplete && currentFrame ===1) {
      if (!frame1.ballOneComplete) {
        frame1.ballOne = frameArray.shift();
        rackPins(frame1.ballOne)
        frame1.ballOneComplete = true;
        if (frame1.ballOne === 10) {
          frame1.frameComplete = true;
          currentFrame++
        }
      } else {
        frame1.ballTwo = frameArray.shift();
        frame1.ballTwoComplete = true;
        frame1.frameComplete = true; 
        currentFrame++  
        
      }
    
  } else if (!frame2.frameComplete && currentFrame === 2) {
      if (!frame2.ballOneComplete) {
        frame2.ballOne = frameArray.shift();
        // rackPins(frame1.ballOne)
        frame2.ballOneComplete = true;
        if (frame2.ballOne === 10) {
          frame2.frameComplete = true;
          currentFrame++
        }
      } else {
        frame2.ballTwo = frameArray.shift();
        frame2.ballTwoComplete = true;
        frame2.frameComplete = true;
        currentFrame++
      }
    }
};

function GameControl() {
  //useState for Pins. Should rerack after ball one unless it's a strike.
  // const [pinsUp, setPinsUp] = useState({

  // })

  const [frameOne, setFrameOne] = useState({
    frame1a: "",
    frame1b: "",
  });
  const [frameTwo, setFrameTwo] = useState({
    frame2a: "",
    frame2b: ""
  });

  let frameArray = [];
  function handlePinsKnocked(event) {
    let value = event.target.value;
    frameArray.push(Number(value));
    pushPinsToFrame(frameArray);
    setFrameOne(prevValue => {
      if (frame1.ballOneComplete && !frame1.ballTwoComplete) {
        if (frame1.ballOne === 10) {
          return {
            frame1a: prevValue.frame1a,
            frame1b: "X"
          };
        } else {
          return {
            frame1a: frame1.ballOne,
            frame1b: prevValue.frame1b
          };
        }
      } else if (frame1.ballOneComplete && frame1.frameComplete) {
        if (frame1.ballOne + frame1.ballTwo === 10) {
          return {
            frame1a: prevValue.frame1a,
            frame1b: "/"
          };
        } else {
          return {
            frame1a: prevValue.frame1a,
            frame1b: frame1.ballTwo
          };
        }
      }
    });
    if (frame2.ballOneComplete) {
      setFrameTwo(prevValue => {
        if (frame2.ballOneComplete && !frame2.ballTwoComplete) {
          if (frame2.ballOne === 10) {
            return {
              frame2a: prevValue.frame2a,
              frame2b: "X"
            };
          } else {
            return {
              frame2a: frame2.ballOne,
              frame2b: prevValue.frame2b
            };
          }
        } else if (frame2.ballOneComplete && frame2.frameComplete) {
          if (frame2.ballOne + frame2.ballTwo === 10) {
            return {
              frame2a: prevValue.frame2a,
              frame2b: "/"
            };
          } else {
            return {
              frame2a: prevValue.frame2a,
              frame2b: frame2.ballTwo
            };
          }
        }
      });
    }
    console.log(frame1)
    console.log(frame2);
  }

  return (
    <div>
      <Pins pinsKnocked={handlePinsKnocked} />
      <Scoreframes
        frame1a={frameOne.frame1a}
        frame1b={frameOne.frame1b}
        frame2a={frameTwo.frame2a}
        frame2b={frameTwo.frame2b}
      />
    </div>
  );
}

export default GameControl;
