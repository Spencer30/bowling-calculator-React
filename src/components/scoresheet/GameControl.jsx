import React, { useState } from "react";
import Scoreframes from "./Scoreframes";
import Pins from "./Pins";

class Frame {
  constructor(
    name,
    ballOne,
    ballTwo,
    frameScore,
    frameScoreComplete, 
    frameComplete,
    scoreComplete,
    ballOneComplete,
    ballTwoComplete,
    displayScore,
  ) {
    this.name = name;
    this.ballOne = ballOne;
    this.ballTwo = ballTwo;
    this.frameScore = frameScore;
    this.frameScoreComplete = frameScoreComplete;
    this.frameComplete = frameComplete;
    this.scoreComplete = scoreComplete;
    this.ballOneComplete = ballOneComplete;
    this.ballTwoComplete = ballTwoComplete;
    this.displayScore = displayScore;
    
  }
}
let currentFrame = 1;
let isRollOne = true;
const frame1 = new Frame("Frame One", "", "", 0, false, false, false, false, false, "");
const frame2 = new Frame("Frame Two", "", "", 0, false, false, false, false, false, "");
const frame3 = new Frame("Frame Three", "", "", 0, false, false, false, false, false, "");
const frame4 = new Frame("Frame Four", "", "", 0, false, false, false, false, false, "");

let arrayOfFrames = [];
const getScore= (arrOfFrames, sum) => {
  sum = 0;
  for(let i=0; i<arrOfFrames.length; i++){
    console.log(`this is the frame ${i+1} score: ` + arrOfFrames[i].frameScore)
      sum += arrOfFrames[i].frameScore;
  }
  console.log(`this is the sum: ${sum} and this is the arr length: ${arrayOfFrames.length}`)
  return sum;
}

const firstFrame = () => {
  //Frame 1
  if(frame1.frameComplete) {
    if(frame1.ballOne === 10) {//Strike
      if(frame2.ballOne){
        if(frame2.ballOne === 10) {//2 Strikes in a Row
          if(frame3.ballOne){
            frame1.frameScore = frame1.ballOne + frame2.ballOne + frame3.ballOne;
            if(!arrayOfFrames.includes(frame1)){
              arrayOfFrames.push(frame1)
            }
            frame1.frameScoreComplete = true;
            if (frame1.displayScore === ""){
              frame1.displayScore = getScore(arrayOfFrames);;
            }
            secondFrame();
          }
        } else if (frame2.ballTwo) {//Missed second attempt at strike
          frame1.frameScore = frame1.ballOne + frame2.ballOne + frame2.ballTwo;
          if(!arrayOfFrames.includes(frame1)){
            arrayOfFrames.push(frame1)
          }
          frame1.frameScoreComplete = true;
          if (frame1.displayScore === ""){
            frame1.displayScore = getScore(arrayOfFrames);;
          } 
          secondFrame();
        }
      }
    } else if (frame1.ballOne + frame1.ballTwo === 10) {//Made a Spare
      if (frame2.ballOne) {
        frame1.frameScore = 10 + frame2.ballOne;
        if(!arrayOfFrames.includes(frame1)){
          arrayOfFrames.push(frame1)
        }
        frame1.frameScoreComplete = true;
        if (frame1.displayScore === ""){
          frame1.displayScore = getScore(arrayOfFrames);
        }
        secondFrame();
      }
    } else if (frame1.ballOne + frame1.ballTwo !== 10) {
      frame1.frameScore = frame1.ballOne + frame1.ballTwo;//Made an open
      if(!arrayOfFrames.includes(frame1)){
        arrayOfFrames.push(frame1)
      }
      frame1.frameScoreComplete = true;
      if (frame1.displayScore === ""){
        frame1.displayScore = getScore(arrayOfFrames);
      }
      secondFrame();
    }
  }
}

const secondFrame = () => {
  //Frame 2
  if(frame2.frameComplete) {
    if(frame2.ballOne === 10) {//Strike
      if(frame3.ballOne){
        if(frame3.ballOne === 10) {//2 Strikes in a Row
          if(frame4.ballOne){
            frame2.frameScore = frame2.ballOne + frame3.ballOne + frame4.ballOne;
            if(!arrayOfFrames.includes(frame2)){
              arrayOfFrames.push(frame2)
            }
            frame2.frameScoreComplete = true;
            if (frame2.displayScore === ""){
              frame2.displayScore = getScore(arrayOfFrames);
            }
          }
        } else if (frame3.ballTwo) {//Missed second attempt at strike
          frame2.frameScore = frame2.ballOne + frame3.ballOne + frame3.ballTwo;
          if(!arrayOfFrames.includes(frame2)){
            arrayOfFrames.push(frame2)
          }
          frame2.frameScoreComplete = true;
          if (frame2.displayScore === ""){
            frame2.displayScore = getScore(arrayOfFrames);
          } 
        }
      }
    } else if (frame2.ballOne + frame2.ballTwo === 10) {//Made a Spare
      if (frame3.ballOne) {
        frame2.frameScore = 10 + frame3.ballOne;
        if(!arrayOfFrames.includes(frame2)){
          arrayOfFrames.push(frame2)
        }
        frame2.frameScoreComplete = true;
        if (frame2.displayScore === ""){
          frame2.displayScore = getScore(arrayOfFrames);
        }
      }
    } else if (frame2.ballOne + frame2.ballTwo !== 10) {//Made an open
      frame2.frameScore = frame2.ballOne + frame2.ballTwo;
      if(!arrayOfFrames.includes(frame2)){
        arrayOfFrames.push(frame2)
      }
      frame2.frameScoreComplete = true;
      if (frame2.displayScore === ""){
        frame2.displayScore = getScore(arrayOfFrames);
      }
      
    }
  }
}


const updateFrameMarkings = frameArray => {
  if (!frame1.frameComplete && currentFrame === 1) {
    if (!frame1.ballOneComplete) {
      frame1.ballOne = frameArray.shift();
      frame1.ballOneComplete = true;
      if (frame1.ballOne === 10) {
        frame1.frameComplete = true;
        currentFrame++;
      }
    } else {
      frame1.ballTwo = frameArray.shift();
      frame1.ballTwoComplete = true;
      frame1.frameComplete = true;
      currentFrame++;
    }
  } else if (!frame2.frameComplete && currentFrame === 2) {
    if (!frame2.ballOneComplete) {
      frame2.ballOne = frameArray.shift();
      frame2.ballOneComplete = true;
      if (frame2.ballOne === 10) {
        frame2.frameComplete = true;
        currentFrame++;
      }
    } else {
      frame2.ballTwo = frameArray.shift();
      frame2.ballTwoComplete = true;
      frame2.frameComplete = true;
      currentFrame++;
    }
  } else if (!frame3.frameComplete && currentFrame === 3) {
    if (!frame3.ballOneComplete) {
      frame3.ballOne = frameArray.shift();
      frame3.ballOneComplete = true;
      if (frame3.ballOne === 10) {
        frame3.frameComplete = true;
        currentFrame++;
      }
    } else {
      frame3.ballTwo = frameArray.shift();
      frame3.ballTwoComplete = true;
      frame3.frameComplete = true;
      currentFrame++;
    }
  }
};

function GameControl() {
  //useState for Pins. Should rerack after roll one unless it's a strike. Then fresh pins after roll two
  const [pinTen, setPinTen] = useState(false);
  const [pinNine, setPinNine] = useState(false);
  const [pinEight, setPinEight] = useState(false);
  const [pinSeven, setPinSeven] = useState(false);
  const [pinSix, setPinSix] = useState(false);
  const [pinFive, setPinFive] = useState(false);
  const [pinFour, setPinFour] = useState(false);
  const [pinThree, setPinThree] = useState(false);
  const [pinTwo, setPinTwo] = useState(false);
  //Update the frame score
  const [frameOneScore, setFrameOneScore] = useState({frame1Score:""});
  const [frameTwoScore, setFrameTwoScore] = useState({frame2Score:""});
  // const [frameThreeScore, setFrameThreeScore] = useState({frame3Score:""});

  //Update the frame markings and numbers
  const [frameOne, setFrameOne] = useState({
    frame1a: "",
    frame1b: ""
  });
  const [frameTwo, setFrameTwo] = useState({
    frame2a: "",
    frame2b: ""
  });
  const [frameThree, setFrameThree] = useState({
    frame3a: "",
    frame3b: ""
  });

  

  //Handle the click event when pins (button click) are knocked down
  let frameArray = [];
  function handlePinsKnocked(event) {
    //Get the number of pins knocked down
    let value = event.target.value;
    frameArray.push(Number(value));
    updateFrameMarkings(frameArray);
    firstFrame();
    
    //Rack the Pins
    if (isRollOne) {
      let pinsLeft = 10 - value;
      if (pinsLeft === 9) {
        setPinTen(true);
        isRollOne=false;
      } else if (pinsLeft === 8) {
        setPinTen(true);
        setPinNine(true);
        isRollOne=false;
      } else if (pinsLeft === 7) {
        setPinTen(true);
        setPinNine(true);
        setPinEight(true);
        isRollOne=false;
      } else if (pinsLeft === 6) {
        setPinTen(true);
        setPinNine(true);
        setPinEight(true);
        setPinSeven(true);
        isRollOne=false;
      } else if (pinsLeft === 5) {
        setPinTen(true);
        setPinNine(true);
        setPinEight(true);
        setPinSeven(true);
        setPinSix(true);
        isRollOne=false;
      } else if (pinsLeft === 4) {
        setPinTen(true);
        setPinNine(true);
        setPinEight(true);
        setPinSeven(true);
        setPinSix(true);
        setPinFive(true);
        isRollOne=false;
      } else if (pinsLeft === 3) {
        setPinTen(true);
        setPinNine(true);
        setPinEight(true);
        setPinSeven(true);
        setPinSix(true);
        setPinFive(true);
        setPinFour(true);
        isRollOne=false;
      } else if (pinsLeft === 2) {
        setPinTen(true);
        setPinNine(true);
        setPinEight(true);
        setPinSeven(true);
        setPinSix(true);
        setPinFive(true);
        setPinFour(true);
        setPinThree(true);
        isRollOne=false;
      } else if (pinsLeft === 1) {
        setPinTen(true);
        setPinNine(true);
        setPinEight(true);
        setPinSeven(true);
        setPinSix(true);
        setPinFive(true);
        setPinFour(true);
        setPinThree(true);
        setPinTwo(true);
        isRollOne=false;
      }
    } else {
        setPinTen(false);
        setPinNine(false);
        setPinEight(false);
        setPinSeven(false);
        setPinSix(false);
        setPinFive(false);
        setPinFour(false);
        setPinThree(false);
        setPinTwo(false);
        isRollOne=true;
    }

    //Udate the frame markings starting with frame 1
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
    //Frame 2
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
    //Frame 3
    if (frame3.ballOneComplete) {
      setFrameThree(prevValue => {
        if (frame3.ballOneComplete && !frame3.ballTwoComplete) {
          if (frame3.ballOne === 10) {
            return {
              frame3a: prevValue.frame2a,
              frame3b: "X"
            };
          } else {
            return {
              frame3a: frame3.ballOne,
              frame3b: prevValue.frame3b
            };
          }
        } else if (frame3.ballOneComplete && frame3.frameComplete) {
          if (frame3.ballOne + frame3.ballTwo === 10) {
            return {
              frame3a: prevValue.frame3a,
              frame3b: "/"
            };
          } else {
            return {
              frame3a: prevValue.frame3a,
              frame3b: frame3.ballTwo
            };
          }
        }
      });
    }
    //** HANDLE THE STATE OF THE FRAME SCORES */
  if(frame1.frameScoreComplete) {
    setFrameOneScore(() => {
      return {frame1Score:frame1.displayScore}     
    })    
  }
  if(frame2.frameScoreComplete) {
    setFrameTwoScore(() => {
      return {frame2Score:frame2.displayScore}     
    })    
  }
  }


  return (
    <div>
      <Pins
        pinsKnocked={handlePinsKnocked}
        tenPinDown={pinTen}
        ninePinDown={pinNine}
        eightPinDown={pinEight}
        sevenPinDown={pinSeven}
        sixPinDown={pinSix}
        fivePinDown={pinFive}
        fourPinDown={pinFour}
        threePinDown={pinThree}
        twoPinDown={pinTwo}
        // onePinDown={pinOne}
      />
      <Scoreframes
        frame1a={frameOne.frame1a}
        frame1b={frameOne.frame1b}
        frame1Score={frameOneScore.frame1Score}
        frame2a={frameTwo.frame2a}
        frame2b={frameTwo.frame2b}
        frame2Score={frameTwoScore.frame2Score}
        frame3a={frameThree.frame3a}
        frame3b={frameThree.frame3b}
      />
    </div>
  );
}

export default GameControl;
