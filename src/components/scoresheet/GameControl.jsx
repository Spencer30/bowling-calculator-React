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
let isRollOne = true;
const frame1 = new Frame("Frame One", "", "", 0, 0, false, false, false, false);
const frame2 = new Frame("Frame Two", "", "", 0, 0, false, false, false, false);

// function rackPins(value) {
//     let pinsLeft = 10 - value;
//     if (pinsLeft === 9) {
//       setPinTen(true);

//     }
// }

const pushPinsToFrame = frameArray => {
  if (!frame1.frameComplete && currentFrame === 1) {
    if (!frame1.ballOneComplete) {
      frame1.ballOne = frameArray.shift();
      // rackPins(frame1.ballOne)
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
      // rackPins(frame1.ballOne)
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
  }
};

function GameControl() {
  //useState for Pins. Should rerack after ball one unless it's a strike.
  const [pinTen, setPinTen] = useState(false);
  const [pinNine, setPinNine] = useState(false);
  const [pinEight, setPinEight] = useState(false);
  const [pinSeven, setPinSeven] = useState(false);
  const [pinSix, setPinSix] = useState(false);
  const [pinFive, setPinFive] = useState(false);
  const [pinFour, setPinFour] = useState(false);
  const [pinThree, setPinThree] = useState(false);
  const [pinTwo, setPinTwo] = useState(false);
  // const [pinOne, setPinOne] = useState(false);

  const [frameOne, setFrameOne] = useState({
    frame1a: "",
    frame1b: ""
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

    //Udate the frame markings
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
    console.log(frame1);
    console.log(frame2);
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
        frame2a={frameTwo.frame2a}
        frame2b={frameTwo.frame2b}
      />
    </div>
  );
}

export default GameControl;
