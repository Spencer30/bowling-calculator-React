import React from "react";

function Pins(){
    let frameArray = [];
    function handleClick(event) {
      let value = event.target.value;
      frameArray.push(Number(value));
      console.log(frameArray);
    }

    return <div className="container pins">
    <div className="row">
      <div className="col-lg-12 pinsBtn">
        <button onClick={handleClick} className="button" id="Zero" value={0}>0</button>
        <button onClick={handleClick} className="button" id="One" value={1}>1</button>
        <button onClick={handleClick} className="button" id="Two" value={2}>2</button>
        <button onClick={handleClick} className="button" id="Three" value={3}>3</button>
        <button onClick={handleClick} className="button" id="Four" value={4}>4</button>
        <button onClick={handleClick} className="button" id="Five" value={5}>5</button>
        <button onClick={handleClick} className="button" id="Six" value={6}>6</button>
        <button onClick={handleClick} className="button" id="Seven" value={7}>7</button>
        <button onClick={handleClick} className="button" id="Eight" value={8}>8</button>
        <button onClick={handleClick} className="button" id="Nine" value={9}>9</button>
        <button onClick={handleClick} className="button" id="Ten" value={10}>10</button>
      </div>
    </div>
  </div>
}

export default Pins;