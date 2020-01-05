import React from "react";

//style={props.state}
function Pins(props){
    return <div className="container pins">
    <div className="row">
      <div className="col-lg-12 pinsBtn">
        <button onClick={props.pinsKnocked} style={{display: props.zeroPinDown ? 'none' : 'inline'}}className="button" id="Zero" value={0}>0</button>
        <button onClick={props.pinsKnocked} style={{display: props.OnePinDown ? 'none' : 'inline'}}className="button" id="One" value={1}>1</button>
        <button onClick={props.pinsKnocked} style={{display: props.twoPinDown ? 'none' : 'inline'}}className="button" id="Two" value={2}>2</button>
        <button onClick={props.pinsKnocked} style={{display: props.threePinDown ? 'none' : 'inline'}}className="button" id="Three" value={3}>3</button>
        <button onClick={props.pinsKnocked} style={{display: props.fourPinDown ? 'none' : 'inline'}}className="button" id="Four" value={4}>4</button>
        <button onClick={props.pinsKnocked} style={{display: props.fivePinDown ? 'none' : 'inline'}}className="button" id="Five" value={5}>5</button>
        <button onClick={props.pinsKnocked} style={{display: props.sixPinDown ? 'none' : 'inline'}}className="button" id="Six" value={6}>6</button>
        <button onClick={props.pinsKnocked} style={{display: props.sevenPinDown ? 'none' : 'inline'}}className="button" id="Seven" value={7}>7</button>
        <button onClick={props.pinsKnocked} style={{display: props.eightPinDown ? 'none' : 'inline'}}className="button" id="Eight" value={8}>8</button>
        <button onClick={props.pinsKnocked} style={{display: props.ninePinDown ? 'none' : 'inline'}}className="button" id="Nine" value={9}>9</button>
        <button onClick={props.pinsKnocked} style={{display: props.tenPinDown ? 'none' : 'inline'}}className="button" id="Ten" value={10}>10</button>
      </div>
    </div>
  </div>
}

export default Pins;