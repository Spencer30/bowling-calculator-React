import React from "react";

function Scoreframes(props) {
    return <div className="container scoreSheet">
    <div className="row">
      <div className="col-lg-12">
        <table id="myTable">
          <tbody>
            <tr>
              <th colSpan="6">1</th>
              <th colSpan="6">2</th>
              <th colSpan="6">3</th>
              <th colSpan="6">4</th>
              <th colSpan="6">5</th>
              <th colSpan="6">6</th>
              <th colSpan="6">7</th>
              <th colSpan="6">8</th>
              <th colSpan="6">9</th>
              <th className="border-right" colSpan="6">10</th>
            </tr>
            <tr>
              <td colSpan="3" id="frame1a" className="frame">{props.frame1a}</td>
              <td colSpan="3" id="frame1b" className="frame frame2">{props.frame1b}</td>
              <td colSpan="3" id="frame2a" className="frame">{props.frame2a}</td>
              <td colSpan="3" id="frame2b" className="frame frame2">{props.frame2b}</td>
              <td colSpan="3" id="frame3a" className="frame">{props.frame3a}</td>
              <td colSpan="3" id="frame3b" className="frame frame2">{props.frame3b}</td>
              <td colSpan="3" id="frame4a" className="frame">{props.frame4a}</td>
              <td colSpan="3" id="frame4b" className="frame frame2">{props.frame4b}</td>
              <td colSpan="3" id="frame5a" className="frame">{props.frame5a}</td>
              <td colSpan="3" id="frame5b" className="frame frame2">{props.frame5b}</td>
              <td colSpan="3" id="frame6a" className="frame">{props.frame6a}</td>
              <td colSpan="3" id="frame6b" className="frame frame2">{props.frame6b}</td>
              <td colSpan="3" id="frame7a" className="frame">{props.frame7a}</td>
              <td colSpan="3" id="frame7b" className="frame frame2">{props.frame7b}</td>
              <td colSpan="3" id="frame8a" className="frame">{props.frame8a}</td>
              <td colSpan="3" id="frame8b" className="frame frame2">{props.frame8b}</td>
              <td colSpan="3" id="frame9a" className="frame">{props.frame9a}</td>
              <td colSpan="3" id="frame9b" className="frame frame2">{props.frame9b}</td>
              <td colSpan="2" id="frame10a" className="frame"></td>
              <td colSpan="2" id="frame10b" className="frame frame2"></td>
              <td
                colSpan="2"
                id="frame10c"
                className="frame frame2 border-right"
              ></td>
            </tr>
            <tr>
              <td colSpan="6" id="frameOne" className="frame-score">{props.frame1Score}</td>
              <td colSpan="6" id="frameTwo" className="frame-score">{props.frame2Score}</td>
              <td colSpan="6" id="frameThree" className="frame-score">{props.frame3Score}</td>
              <td colSpan="6" id="frameFour" className="frame-score">{props.frame4Score}</td>
              <td colSpan="6" id="frameFive" className="frame-score">{props.frame5Score}</td>
              <td colSpan="6" id="frameSix" className="frame-score">{props.frame6Score}</td>
              <td colSpan="6" id="frameSeven" className="frame-score">{props.frame7Score}</td>
              <td colSpan="6" id="frameEight" className="frame-score">{props.frame8Score}</td>
              <td colSpan="6" id="frameNine" className="frame-score">{props.frame9Score}</td>
              <td
                colSpan="6"
                id="frameTen"
                className="frame-score border-right"
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    </div>
}

export default Scoreframes;