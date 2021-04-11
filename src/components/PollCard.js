
import React, { useState } from 'react';
import PollModel from '../models/Poll';


const PollCard = (props) => {

  const [percent, setPercent] = useState(0)
  const [yes, setYes] = useState(0)
  const [count, setCount] = useState(0)
  const [clicked, setClicked] = useState(false)

  function noCount() {
    console.log(props.question)
    PollModel.no(props.questionid).then(data => {
      console.log(data)
      setClicked(true)
      let temp = data.no
      temp += data.yes
      setCount(temp)
      setYes(data.yes)
      let answer = ((data.yes / temp) * 100).toFixed(0)
      setPercent(String(answer) + "%")
  })
}

  function yesCount() {
    PollModel.yes(props.questionid).then(data => {
      console.log(data)
      setClicked(true)
      let temp = data.yes
      temp += data.no
      setCount(temp)
      setYes(data.yes)
      let answer = ((data.yes / temp) * 100).toFixed(0)
      setPercent(String(answer) + "%")
  })
}

  return (
    <div className="pollcard">
      <h3>{ props.question }</h3>
      <p>{ props.author }</p>
      {!clicked ?  <>
        <button className="yes-btn" onClick={ yesCount }>Yes</button>
        <button className="no-btn"onClick={ noCount }>No</button>
        <hr />
        </>: 
        <p>{ percent }</p>
      }
    </div>
  );
}

export default PollCard;