import React, { useState } from "react";
import Scoreframes from "./Scoreframes";
import Pins from "./Pins";

class Frame {
  constructor(name,ballOne,ballTwo,frameScore,frameScoreComplete,frameComplete,scoreComplete,ballOneComplete,ballTwoComplete,displayScore,) {
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
class FrameTen extends Frame {
  constructor(ballThree, ballThreeComplete) {
    super(ballThree);
    this.ballThree = ballThree; 
    this.ballThreeComplete = ballThreeComplete;   
  }
}

let currentFrame = 1;
let isRollOne = true;
const frame1 = new Frame("Frame One", "", "", 0, false, false, false, false, false, "");
const frame2 = new Frame("Frame Two", "", "", 0, false, false, false, false, false, "");
const frame3 = new Frame("Frame Three", "", "", 0, false, false, false, false, false, "");
const frame4 = new Frame("Frame Four", "", "", 0, false, false, false, false, false, "");
const frame5 = new Frame("Frame Five", "", "", 0, false, false, false, false, false, "");
const frame6 = new Frame("Frame Six", "", "", 0, false, false, false, false, false, "");
const frame7 = new Frame("Frame Seven", "", "", 0, false, false, false, false, false, "");
const frame8 = new Frame("Frame Eight", "", "", 0, false, false, false, false, false, "");
const frame9 = new Frame("Frame Nine", "", "", 0, false, false, false, false, false, "");
const frame10 = new FrameTen("Frame Ten", "", "", 0, false, false, false, false, false, "", "", false);

let arrayOfFrames = [];
const getScore= (arrOfFrames, sum) => {
  sum = 0;
  for(let i=0; i<arrOfFrames.length; i++){
    // console.log(`this is the frame ${i+1} score: ` + arrOfFrames[i].frameScore)
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
            thirdFrame();
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
          thirdFrame();
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
        thirdFrame();
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
      thirdFrame();
    }
  }
}

const thirdFrame = () => {
  //Frame 3
  if(frame3.frameComplete) {
    if(frame3.ballOne === 10) {//Strike
      if(frame4.ballOne){
        if(frame4.ballOne === 10) {//2 Strikes in a Row
          if(frame5.ballOne){
            frame3.frameScore = frame3.ballOne + frame4.ballOne + frame5.ballOne;
            if(!arrayOfFrames.includes(frame3)){
              arrayOfFrames.push(frame3)
            }
            frame3.frameScoreComplete = true;
            if (frame3.displayScore === ""){
              frame3.displayScore = getScore(arrayOfFrames);
            }
            fourthFrame();
          }
        } else if (frame4.ballTwo) {//Missed second attempt at strike
          frame3.frameScore = frame3.ballOne + frame4.ballOne + frame4.ballTwo;
          if(!arrayOfFrames.includes(frame3)){
            arrayOfFrames.push(frame3)
          }
          frame3.frameScoreComplete = true;
          if (frame3.displayScore === ""){
            frame3.displayScore = getScore(arrayOfFrames);
          } 
          fourthFrame();
        }
      }
    } else if (frame3.ballOne + frame3.ballTwo === 10) {//Made a Spare
      if (frame4.ballOne) {
        frame3.frameScore = 10 + frame4.ballOne;
        if(!arrayOfFrames.includes(frame3)){
          arrayOfFrames.push(frame3)
        }
        frame3.frameScoreComplete = true;
        if (frame3.displayScore === ""){
          frame3.displayScore = getScore(arrayOfFrames);
        }
        fourthFrame();
      }
    } else if (frame3.ballOne + frame3.ballTwo !== 10) {//Made an open
      frame3.frameScore = frame3.ballOne + frame3.ballTwo;
      if(!arrayOfFrames.includes(frame3)){
        arrayOfFrames.push(frame3)
      }
      frame3.frameScoreComplete = true;
      if (frame3.displayScore === ""){
        frame3.displayScore = getScore(arrayOfFrames);
      }
      fourthFrame();
    }
  }
}

const fourthFrame = () => {
  //Frame 4
  if(frame4.frameComplete) {
    if(frame4.ballOne === 10) {//Strike
      if(frame5.ballOne){
        if(frame5.ballOne === 10) {//2 Strikes in a Row
          if(frame6.ballOne){
            frame4.frameScore = frame4.ballOne + frame5.ballOne + frame6.ballOne;
            if(!arrayOfFrames.includes(frame4)){
              arrayOfFrames.push(frame4)
            }
            frame4.frameScoreComplete = true;
            if (frame4.displayScore === ""){
              frame4.displayScore = getScore(arrayOfFrames);
            }
            fifthFrame();
          }
        } else if (frame5.ballTwo) {//Missed second attempt at strike
          frame4.frameScore = frame4.ballOne + frame5.ballOne + frame5.ballTwo;
          if(!arrayOfFrames.includes(frame4)){
            arrayOfFrames.push(frame4)
          }
          frame4.frameScoreComplete = true;
          if (frame4.displayScore === ""){
            frame4.displayScore = getScore(arrayOfFrames);
          } 
          fifthFrame();
        }
      }
    } else if (frame4.ballOne + frame4.ballTwo === 10) {//Made a Spare
      if (frame5.ballOne) {
        frame4.frameScore = 10 + frame5.ballOne;
        if(!arrayOfFrames.includes(frame4)){
          arrayOfFrames.push(frame4)
        }
        frame4.frameScoreComplete = true;
        if (frame4.displayScore === ""){
          frame4.displayScore = getScore(arrayOfFrames);
        }
        fifthFrame();
      }
    } else if (frame4.ballOne + frame4.ballTwo !== 10) {//Made an open
      frame4.frameScore = frame4.ballOne + frame4.ballTwo;
      if(!arrayOfFrames.includes(frame4)){
        arrayOfFrames.push(frame4)
      }
      frame4.frameScoreComplete = true;
      if (frame4.displayScore === ""){
        frame4.displayScore = getScore(arrayOfFrames);
      }
      fifthFrame();
    }
  }
}
const fifthFrame = () => {
  //Frame 5
  if(frame5.frameComplete) {
    if(frame5.ballOne === 10) {//Strike
      if(frame6.ballOne){
        if(frame6.ballOne === 10) {//2 Strikes in a Row
          if(frame7.ballOne){
            frame5.frameScore = frame5.ballOne + frame6.ballOne + frame7.ballOne;
            if(!arrayOfFrames.includes(frame5)){
              arrayOfFrames.push(frame5)
            }
            frame5.frameScoreComplete = true;
            if (frame5.displayScore === ""){
              frame5.displayScore = getScore(arrayOfFrames);
            }
            sixthFrame();
          }
        } else if (frame6.ballTwo) {//Missed second attempt at strike
          frame5.frameScore = frame5.ballOne + frame6.ballOne + frame6.ballTwo;
          if(!arrayOfFrames.includes(frame5)){
            arrayOfFrames.push(frame5)
          }
          frame5.frameScoreComplete = true;
          if (frame5.displayScore === ""){
            frame5.displayScore = getScore(arrayOfFrames);
          } 
          sixthFrame();
        }
      }
    } else if (frame5.ballOne + frame5.ballTwo === 10) {//Made a Spare
      if (frame6.ballOne) {
        frame5.frameScore = 10 + frame6.ballOne;
        if(!arrayOfFrames.includes(frame5)){
          arrayOfFrames.push(frame5)
        }
        frame5.frameScoreComplete = true;
        if (frame5.displayScore === ""){
          frame5.displayScore = getScore(arrayOfFrames);
        }
        sixthFrame();
      }
    } else if (frame5.ballOne + frame5.ballTwo !== 10) {//Made an open
      frame5.frameScore = frame5.ballOne + frame5.ballTwo;
      if(!arrayOfFrames.includes(frame5)){
        arrayOfFrames.push(frame5)
      }
      frame5.frameScoreComplete = true;
      if (frame5.displayScore === ""){
        frame5.displayScore = getScore(arrayOfFrames);
      }
      sixthFrame();
    }
  }
}

const sixthFrame = () => {
  //Frame 6
  if(frame6.frameComplete) {
    if(frame6.ballOne === 10) {//Strike
      if(frame7.ballOne){
        if(frame7.ballOne === 10) {//2 Strikes in a Row
          if(frame8.ballOne){
            frame6.frameScore = frame6.ballOne + frame7.ballOne + frame8.ballOne;
            if(!arrayOfFrames.includes(frame6)){
              arrayOfFrames.push(frame6)
            }
            frame6.frameScoreComplete = true;
            if (frame6.displayScore === ""){
              frame6.displayScore = getScore(arrayOfFrames);
            }
            seventhFrame();
          }
        } else if (frame7.ballTwo) {//Missed second attempt at strike
          frame6.frameScore = frame6.ballOne + frame7.ballOne + frame7.ballTwo;
          if(!arrayOfFrames.includes(frame6)){
            arrayOfFrames.push(frame6)
          }
          frame6.frameScoreComplete = true;
          if (frame6.displayScore === ""){
            frame6.displayScore = getScore(arrayOfFrames);
          } 
          seventhFrame();
        }
      }
    } else if (frame6.ballOne + frame6.ballTwo === 10) {//Made a Spare
      if (frame7.ballOne) {
        frame6.frameScore = 10 + frame7.ballOne;
        if(!arrayOfFrames.includes(frame6)){
          arrayOfFrames.push(frame6)
        }
        frame6.frameScoreComplete = true;
        if (frame6.displayScore === ""){
          frame6.displayScore = getScore(arrayOfFrames);
        }
        seventhFrame();
      }
    } else if (frame6.ballOne + frame6.ballTwo !== 10) {//Made an open
      frame6.frameScore = frame6.ballOne + frame6.ballTwo;
      if(!arrayOfFrames.includes(frame6)){
        arrayOfFrames.push(frame6)
      }
      frame6.frameScoreComplete = true;
      if (frame6.displayScore === ""){
        frame6.displayScore = getScore(arrayOfFrames);
      }
      seventhFrame();
    }
  }
}

const seventhFrame = () => {
  //Frame 7
  if(frame7.frameComplete) {
    if(frame7.ballOne === 10) {//Strike
      if(frame8.ballOne){
        if(frame8.ballOne === 10) {//2 Strikes in a Row
          if(frame9.ballOne){
            frame7.frameScore = frame7.ballOne + frame8.ballOne + frame9.ballOne;
            if(!arrayOfFrames.includes(frame7)){
              arrayOfFrames.push(frame7)
            }
            frame7.frameScoreComplete = true;
            if (frame7.displayScore === ""){
              frame7.displayScore = getScore(arrayOfFrames);
            }
            eighthFrame();
          }
        } else if (frame8.ballTwo) {//Missed second attempt at strike
          frame7.frameScore = frame7.ballOne + frame8.ballOne + frame8.ballTwo;
          if(!arrayOfFrames.includes(frame7)){
            arrayOfFrames.push(frame7)
          }
          frame7.frameScoreComplete = true;
          if (frame7.displayScore === ""){
            frame7.displayScore = getScore(arrayOfFrames);
          } 
          eighthFrame();
        }
      }
    } else if (frame7.ballOne + frame7.ballTwo === 10) {//Made a Spare
      if (frame8.ballOne) {
        frame7.frameScore = 10 + frame8.ballOne;
        if(!arrayOfFrames.includes(frame7)){
          arrayOfFrames.push(frame7)
        }
        frame7.frameScoreComplete = true;
        if (frame7.displayScore === ""){
          frame7.displayScore = getScore(arrayOfFrames);
        }
        eighthFrame();
      }
    } else if (frame7.ballOne + frame7.ballTwo !== 10) {//Made an open
      frame7.frameScore = frame7.ballOne + frame7.ballTwo;
      if(!arrayOfFrames.includes(frame7)){
        arrayOfFrames.push(frame7)
      }
      frame7.frameScoreComplete = true;
      if (frame7.displayScore === ""){
        frame7.displayScore = getScore(arrayOfFrames);
      }
      eighthFrame();
    }
  }
}
const eighthFrame = () => {
  //Frame 8
  if(frame8.frameComplete) {
    if(frame8.ballOne === 10) {//Strike
      if(frame9.ballOne){
        if(frame9.ballOne === 10) {//2 Strikes in a Row
          if(frame10.ballOne){
            frame8.frameScore = frame8.ballOne + frame9.ballOne + frame10.ballOne;
            if(!arrayOfFrames.includes(frame8)){
              arrayOfFrames.push(frame8)
            }
            frame8.frameScoreComplete = true;
            console.log('Frame8 display score before block: ' + frame8.displayScore)
            if (frame8.displayScore === ""){
              frame8.displayScore = getScore(arrayOfFrames);
            }
            ninthFrame();
          }
        } else if (frame9.ballTwo) {//Missed second attempt at strike
          frame8.frameScore = frame8.ballOne + frame9.ballOne + frame9.ballTwo;
          if(!arrayOfFrames.includes(frame8)){
            arrayOfFrames.push(frame8)
          }
          frame8.frameScoreComplete = true;
          if (frame8.displayScore === ""){
            frame8.displayScore = getScore(arrayOfFrames);
          } 
          ninthFrame();
        }
      }
    } else if (frame8.ballOne + frame8.ballTwo === 10) {//Made a Spare
      if (frame9.ballOne) {
        frame8.frameScore = 10 + frame9.ballOne;
        if(!arrayOfFrames.includes(frame8)){
          arrayOfFrames.push(frame8)
        }
        frame8.frameScoreComplete = true;
        if (frame8.displayScore === ""){
          frame8.displayScore = getScore(arrayOfFrames);
        }
        ninthFrame();
      }
    } else if (frame8.ballOne + frame8.ballTwo !== 10) {//Made an open
      frame8.frameScore = frame8.ballOne + frame8.ballTwo;
      if(!arrayOfFrames.includes(frame8)){
        arrayOfFrames.push(frame8)
      }
      frame8.frameScoreComplete = true;
      if (frame8.displayScore === ""){
        frame8.displayScore = getScore(arrayOfFrames);
      }
      ninthFrame();
    }
  }
}

const ninthFrame = () => {
  //Frame 9
  if(frame9.frameComplete) {
    if(frame9.ballOne === 10) {//Strike
      if(frame10.ballOne){
        if(frame10.ballOne === 10) {//2 Strikes in a Row
          if(frame10.ballTwo){
            frame9.frameScore = frame9.ballOne + frame10.ballOne + frame10.ballTwo;
            if(!arrayOfFrames.includes(frame9)){
              arrayOfFrames.push(frame9)
            }
            frame9.frameScoreComplete = true;
            if (frame9.displayScore === ""){
              frame9.displayScore = getScore(arrayOfFrames);
            }
            tenthFrame();
          }
        } else if (frame10.ballTwo) {//Missed second attempt at strike
          frame9.frameScore = frame9.ballOne + frame10.ballOne + frame10.ballTwo;
          if(!arrayOfFrames.includes(frame9)){
            arrayOfFrames.push(frame9)
          }
          frame9.frameScoreComplete = true;
          if (frame9.displayScore === ""){
            frame9.displayScore = getScore(arrayOfFrames);
          } 
          tenthFrame();
        }
      }
    } else if (frame9.ballOne + frame9.ballTwo === 10) {//Made a Spare
      if (frame10.ballOne) {
        frame9.frameScore = 10 + frame10.ballOne;
        if(!arrayOfFrames.includes(frame9)){
          arrayOfFrames.push(frame9)
        }
        frame9.frameScoreComplete = true;
        if (frame9.displayScore === ""){
          frame9.displayScore = getScore(arrayOfFrames);
        }
        tenthFrame();
      }
    } else if (frame9.ballOne + frame9.ballTwo !== 10) {//Made an open
      frame9.frameScore = frame9.ballOne + frame9.ballTwo;
      if(!arrayOfFrames.includes(frame9)){
        arrayOfFrames.push(frame9)
      }
      frame9.frameScoreComplete = true;
      if (frame9.displayScore === ""){
        frame9.displayScore = getScore(arrayOfFrames);
      }
      tenthFrame();
    }
  }
}
const tenthFrame = () => {
  //Frame 10
  if(frame10.frameComplete) {
    if(frame10.ballOne === 10) {//Strike
      if(frame10.ballThreeComplete){
        frame10.frameScore = frame10.ballOne + frame10.ballTwo + frame10.ballThree;
          if(!arrayOfFrames.includes(frame10)){
            arrayOfFrames.push(frame10)
            console.log('pushed');
        } 
        frame10.frameScoreComplete = true;       
        if (frame10.frameScoreComplete){
          frame10.displayScore = getScore(arrayOfFrames);
        }
        
        // gameOver();
      }
    } else if (frame10.ballOne + frame10.ballTwo === 10) {//Made a Spare
      if (frame10.ballThree) {
        frame10.frameScore = frame10.ballOne + frame10.ballTwo + frame10.ballThree;
        if(!arrayOfFrames.includes(frame10)){
          arrayOfFrames.push(frame10)
        } 
        frame10.frameScoreComplete = true;       
        if (frame10.frameScoreComplete){
          frame10.displayScore = getScore(arrayOfFrames);
        }   
        // gameOver();
      }
    } else if (frame10.ballOne + frame10.ballTwo !== 10) {//Made an open
      frame10.frameScore = frame10.ballOne + frame10.ballTwo;
      if(!arrayOfFrames.includes(frame10)){
        arrayOfFrames.push(frame10)
      }
      frame10.frameScoreComplete = true;
      if (frame10.frameComplete){
        frame10.displayScore = getScore(arrayOfFrames);
      }
      
      // gameOver();
    }
  }
}
//Get pins knocked down, add them to ball 1&2, then increase frame count
const updateFrames = frameArray => {
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
  else if (!frame4.frameComplete && currentFrame === 4) {
    if (!frame4.ballOneComplete) {
      frame4.ballOne = frameArray.shift();
      frame4.ballOneComplete = true;
      if (frame4.ballOne === 10) {
        frame4.frameComplete = true;
        currentFrame++;
      }
    } else {
      frame4.ballTwo = frameArray.shift();
      frame4.ballTwoComplete = true;
      frame4.frameComplete = true;
      currentFrame++;
    }
  }
  else if (!frame5.frameComplete && currentFrame === 5) {
    if (!frame5.ballOneComplete) {
      frame5.ballOne = frameArray.shift();
      frame5.ballOneComplete = true;
      if (frame5.ballOne === 10) {
        frame5.frameComplete = true;
        currentFrame++;
      }
    } else {
      frame5.ballTwo = frameArray.shift();
      frame5.ballTwoComplete = true;
      frame5.frameComplete = true;
      currentFrame++;
    }
  }
  else if (!frame6.frameComplete && currentFrame === 6) {
    if (!frame6.ballOneComplete) {
      frame6.ballOne = frameArray.shift();
      frame6.ballOneComplete = true;
      if (frame6.ballOne === 10) {
        frame6.frameComplete = true;
        currentFrame++;
      }
    } else {
      frame6.ballTwo = frameArray.shift();
      frame6.ballTwoComplete = true;
      frame6.frameComplete = true;
      currentFrame++;
    }
  }
  else if (!frame7.frameComplete && currentFrame === 7) {
    if (!frame7.ballOneComplete) {
      frame7.ballOne = frameArray.shift();
      frame7.ballOneComplete = true;
      if (frame7.ballOne === 10) {
        frame7.frameComplete = true;
        currentFrame++;
      }
    } else {
      frame7.ballTwo = frameArray.shift();
      frame7.ballTwoComplete = true;
      frame7.frameComplete = true;
      currentFrame++;
    }
  }
  else if (!frame8.frameComplete && currentFrame === 8) {
    if (!frame8.ballOneComplete) {
      frame8.ballOne = frameArray.shift();
      frame8.ballOneComplete = true;
      if (frame8.ballOne === 10) {
        frame8.frameComplete = true;
        currentFrame++;
      }
    } else {
      frame8.ballTwo = frameArray.shift();
      frame8.ballTwoComplete = true;
      frame8.frameComplete = true;
      currentFrame++;
    }
  }
  else if (!frame9.frameComplete && currentFrame === 9) {
    if (!frame9.ballOneComplete) {
      frame9.ballOne = frameArray.shift();
      frame9.ballOneComplete = true;
      if (frame9.ballOne === 10) {
        frame9.frameComplete = true;
        currentFrame++;
      }
    } else {
      frame9.ballTwo = frameArray.shift();
      frame9.ballTwoComplete = true;
      frame9.frameComplete = true;
      currentFrame++;
    }
  }
  else if (!frame10.frameComplete && currentFrame === 10) {
    if (!frame10.ballOneComplete) {
      frame10.ballOne = frameArray.shift();
      frame10.ballOneComplete = true;
    } else if (!frame10.ballTwoComplete) {
      frame10.ballTwo = frameArray.shift();
      frame10.ballTwoComplete = true;
    } else if (frame10.ballOneComplete && frame10.ballTwoComplete){
        if(frame10.ballOne === 10 || frame10.ballOne + frame10.ballTwo === 10) {
          frame10.ballThree = frameArray.shift();
          frame10.ballThreeComplete = true;
          frame10.frameComplete = true;
        } else {
          frame10.frameComplete = true;
        }
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
  const [frameThreeScore, setFrameThreeScore] = useState({frame3Score:""});
  const [frameFourScore, setFrameFourScore] = useState({frame4Score:""});
  const [frameFiveScore, setFrameFiveScore] = useState({frame5Score:""});
  const [frameSixScore, setFrameSixScore] = useState({frame6Score:""});
  const [frameSevenScore, setFrameSevenScore] = useState({frame7Score:""});
  const [frameEightScore, setFrameEightScore] = useState({frame8Score:""});
  const [frameNineScore, setFrameNineScore] = useState({frame9Score:""});
  const [frameTenScore, setFrameTenScore] = useState({frame10Score:""});

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
  const [frameFour, setFrameFour] = useState({
    frame4a: "",
    frame4b: ""
  });
  const [frameFive, setFrameFive] = useState({
    frame5a: "",
    frame5b: ""
  });
  const [frameSix, setFrameSix] = useState({
    frame6a: "",
    frame6b: ""
  });
  const [frameSeven, setFrameSeven] = useState({
    frame7a: "",
    frame7b: ""
  });
  const [frameEight, setFrameEight] = useState({
    frame8a: "",
    frame8b: ""
  });
  const [frameNine, setFrameNine] = useState({
    frame9a: "",
    frame9b: ""
  });
  const [frameTen, setFrameTen] = useState({
    frame10a: "",
    frame10b: "",
    frame10c: ""
  });

  

  //Handle the click event when pins (button click) are knocked down
  let frameArray = [];
  function handlePinsKnocked(event) {
    //Get the number of pins knocked down
    let value = event.target.value;
    frameArray.push(Number(value));
    updateFrames(frameArray);
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
              frame3a: prevValue.frame3a,
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
    //Frame 4
    if (frame4.ballOneComplete) {
      setFrameFour(prevValue => {
        if (frame4.ballOneComplete && !frame4.ballTwoComplete) {
          if (frame4.ballOne === 10) {
            return {
              frame4a: prevValue.frame4a,
              frame4b: "X"
            };
          } else {
            return {
              frame4a: frame4.ballOne,
              frame4b: prevValue.frame4b
            };
          }
        } else if (frame4.ballOneComplete && frame4.frameComplete) {
          if (frame4.ballOne + frame4.ballTwo === 10) {
            return {
              frame4a: prevValue.frame4a,
              frame4b: "/"
            };
          } else {
            return {
              frame4a: prevValue.frame4a,
              frame4b: frame4.ballTwo
            };
          }
        }
      });
    }
    //Frame 5
    if (frame5.ballOneComplete) {
      setFrameFive(prevValue => {
        if (frame5.ballOneComplete && !frame5.ballTwoComplete) {
          if (frame5.ballOne === 10) {
            return {
              frame5a: prevValue.frame5a,
              frame5b: "X"
            };
          } else {
            return {
              frame5a: frame5.ballOne,
              frame5b: prevValue.frame5b
            };
          }
        } else if (frame5.ballOneComplete && frame5.frameComplete) {
          if (frame5.ballOne + frame5.ballTwo === 10) {
            return {
              frame5a: prevValue.frame5a,
              frame5b: "/"
            };
          } else {
            return {
              frame5a: prevValue.frame5a,
              frame5b: frame5.ballTwo
            };
          }
        }
      });
    }
    //Frame 6
    if (frame6.ballOneComplete) {
      setFrameSix(prevValue => {
        if (frame6.ballOneComplete && !frame6.ballTwoComplete) {
          if (frame6.ballOne === 10) {
            return {
              frame6a: prevValue.frame6a,
              frame6b: "X"
            };
          } else {
            return {
              frame6a: frame6.ballOne,
              frame6b: prevValue.frame6b
            };
          }
        } else if (frame6.ballOneComplete && frame6.frameComplete) {
          if (frame6.ballOne + frame6.ballTwo === 10) {
            return {
              frame6a: prevValue.frame6a,
              frame6b: "/"
            };
          } else {
            return {
              frame6a: prevValue.frame6a,
              frame6b: frame6.ballTwo
            };
          }
        }
      });
    }
    //Frame 7
    if (frame7.ballOneComplete) {
      setFrameSeven(prevValue => {
        if (frame7.ballOneComplete && !frame7.ballTwoComplete) {
          if (frame7.ballOne === 10) {
            return {
              frame7a: prevValue.frame7a,
              frame7b: "X"
            };
          } else {
            return {
              frame7a: frame7.ballOne,
              frame7b: prevValue.frame7b
            };
          }
        } else if (frame7.ballOneComplete && frame7.frameComplete) {
          if (frame7.ballOne + frame7.ballTwo === 10) {
            return {
              frame7a: prevValue.frame7a,
              frame7b: "/"
            };
          } else {
            return {
              frame7a: prevValue.frame7a,
              frame7b: frame7.ballTwo
            };
          }
        }
      });
    }
    //Frame 8
    if (frame8.ballOneComplete) {
      setFrameEight(prevValue => {
        if (frame8.ballOneComplete && !frame8.ballTwoComplete) {
          if (frame8.ballOne === 10) {
            return {
              frame8a: prevValue.frame8a,
              frame8b: "X"
            };
          } else {
            return {
              frame8a: frame8.ballOne,
              frame8b: prevValue.frame8b
            };
          }
        } else if (frame8.ballOneComplete && frame8.frameComplete) {
          if (frame8.ballOne + frame8.ballTwo === 10) {
            return {
              frame8a: prevValue.frame8a,
              frame8b: "/"
            };
          } else {
            return {
              frame8a: prevValue.frame8a,
              frame8b: frame8.ballTwo
            };
          }
        }
      });
    }
    //Frame 9
    if (frame9.ballOneComplete) {
      setFrameNine(prevValue => {
        if (frame9.ballOneComplete && !frame9.ballTwoComplete) {
          if (frame9.ballOne === 10) {
            return {
              frame9a: prevValue.frame9a,
              frame9b: "X"
            };
          } else {
            return {
              frame9a: frame9.ballOne,
              frame9b: prevValue.frame9b
            };
          }
        } else if (frame9.ballOneComplete && frame9.frameComplete) {
          if (frame9.ballOne + frame9.ballTwo === 10) {
            return {
              frame9a: prevValue.frame9a,
              frame9b: "/"
            };
          } else {
            return {
              frame9a: prevValue.frame9a,
              frame9b: frame9.ballTwo
            };
          }
        }
      });
    }
    //Frame 10
    if (frame10.ballOneComplete) {
      setFrameTen(prevValue => {
        if (frame10.ballOneComplete && !frame10.ballTwoComplete) {
          if (frame10.ballOne === 10) {
            return {
              frame10a: "X",
              frame10b: prevValue.frame10b,
              frame10c: prevValue.frame10c
            };
          } else {
            return {
              frame10a: frame10.ballOne,
              frame10b: prevValue.frame10b,
              frame10c: prevValue.frame10c
            };
          }
        } else if (frame10.ballOneComplete && frame10.ballTwoComplete) {
          if (frame10.ballThreeComplete){
            if(frame10.ballThree === 10){
              return {
                frame10a: prevValue.frame10a,
                frame10b: prevValue.frame10b,
                frame10c: "X"
            }
            } else if (frame10.ballTwo + frame10.ballThree === 10 && frame10.ballOne + frame10.ballTwo !== 10){
              return {
                frame10a: prevValue.frame10a,
                frame10b: prevValue.frame10b,
                frame10c: "/"
            }

            } else {
            return {
                frame10a: prevValue.frame10a,
                frame10b: prevValue.frame10b,
                frame10c: frame10.ballThree
            }
          }
          } else if (frame10.ballOne + frame10.ballTwo === 10) {
            return {
              frame10a: prevValue.frame10a,
              frame10b: "/",
              frame10c: prevValue.frame10c
            };
          } else if (frame10.ballTwo === 10) {
            return {
              frame10a: prevValue.frame10a,
              frame10b: "X",
              frame10c: prevValue.frame10c
            }

          } else if(frame10.ballOne + frame10.ballTwo !== 10){
            return {
              frame10a: prevValue.frame10a,
              frame10b: frame10.ballTwo,
              frame10c: prevValue.frame10c
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
  if(frame3.frameScoreComplete) {
    setFrameThreeScore(() => {
      return {frame3Score:frame3.displayScore}     
    })    
  }
  if(frame4.frameScoreComplete) {
    setFrameFourScore(() => {
      return {frame4Score:frame4.displayScore}     
    })    
  }
  if(frame5.frameScoreComplete) {
    setFrameFiveScore(() => {
      return {frame5Score:frame5.displayScore}     
    })    
  }
  if(frame6.frameScoreComplete) {
    setFrameSixScore(() => {
      return {frame6Score:frame6.displayScore}     
    })    
  }
  if(frame7.frameScoreComplete) {
    setFrameSevenScore(() => {
      return {frame7Score:frame7.displayScore}     
    })    
  }
  if(frame8.frameScoreComplete) {
    setFrameEightScore(() => {
      return {frame8Score:frame8.displayScore}     
    })    
  }
  if(frame9.frameScoreComplete) {
    setFrameNineScore(() => {
      return {frame9Score:frame9.displayScore}     
    })    
  }

  if(frame10.frameScoreComplete) {
    setFrameTenScore(() => {
      return {frame10Score:frame10.displayScore}     
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
        frame3Score={frameThreeScore.frame3Score}
        frame4a={frameFour.frame4a}
        frame4b={frameFour.frame4b}
        frame4Score={frameFourScore.frame4Score}
        frame5a={frameFive.frame5a}
        frame5b={frameFive.frame5b}
        frame5Score={frameFiveScore.frame5Score}
        frame6a={frameSix.frame6a}
        frame6b={frameSix.frame6b}
        frame6Score={frameSixScore.frame6Score}
        frame7a={frameSeven.frame7a}
        frame7b={frameSeven.frame7b}
        frame7Score={frameSevenScore.frame7Score}
        frame8a={frameEight.frame8a}
        frame8b={frameEight.frame8b}
        frame8Score={frameEightScore.frame8Score}
        frame9a={frameNine.frame9a}
        frame9b={frameNine.frame9b}
        frame9Score={frameNineScore.frame9Score}
        frame10a={frameTen.frame10a}
        frame10b={frameTen.frame10b}
        frame10c={frameTen.frame10c}
        frame10Score={frameTenScore.frame10Score}
      />
    </div>
  );
}

export default GameControl;
