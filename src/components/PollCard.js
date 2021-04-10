import React, { useState } from 'react';
import PollModel from '../models/Poll';


const PollCard = (props) => {

  const [count, setCount] = useState(0)

  function noCount() {
    PollModel.no().then(data => {
      console.log(data)
  })
}

  function yesCount() {
    PollModel.yes().then(data => {
      console.log(data)
  })
}

  return (
    <div className="pollcard">
      <h3>{ props.question }</h3>
      <p>{ props.author }</p>
      <button onClick={ yesCount }>Yes</button>
      <span>{ count }</span>
      <button onClick={ noCount }>No</button>
      <hr />
    </div>
  );
}

export default PollCard;