
import React, { useState } from 'react';
import PollModel from '../models/Poll';


const PollCard = (props) => {

  const [percent, setPercent] = useState(0)
  const [yes, setYes] = useState(0)
  const [count, setCount] = useState(0)
  const [clicked, setClicked] = useState(false)

  function noCount() {
    PollModel.no(props.questionid).then(data => {
      setClicked(true)
      let temp = data.no
      temp += data.yes
      setCount(temp)
      setYes(data.yes)
      let answer = ((data.no / temp) * 100).toFixed(0)
      setPercent(String(answer) + "%" + " " + "SAY NO")
  })
}

  function yesCount() {
    PollModel.yes(props.questionid).then(data => {
      setClicked(true)
      let temp = data.yes
      temp += data.no
      setCount(temp)
      setYes(data.yes)
      let answer = ((data.yes / temp) * 100).toFixed(0)
      setPercent(String(answer) + "%" + " "+ "SAY YES")
  })
}

  return (
    <div className="pollcard">
      <div className="author-container">
        <p className="author">{ props.author }</p>
      </div>
      <h3 className="question">{ props.question }</h3>
      {!clicked ?  
      <div className="yesno-btns">
        <button className="yes-btn" onClick={ yesCount }>Yes</button>
        <button className="no-btn"onClick={ noCount }>No</button>
        <hr />
      </div>: 
        <div className="percentage-container">
          <p className="percentage">{ percent }</p>
        </div>
      }
    </div>
  );
}

export default PollCard;