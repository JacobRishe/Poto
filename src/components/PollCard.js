import React, { useState } from 'react';
// import './PollCard.scss'

const PollCard = (props) => {

  const [count, setCount] = useState(0)

  function noCount() {
    setCount(prevCount => prevCount - 1)
}

function yesCount() {
    setCount(prevCount => prevCount + 1)
}

  return (
    <div className="pollcard">
      <h3>{ props.question }</h3>
      <p>By: { props.author }</p>
      <button onClick={ yesCount }>Yes</button>
      <span>{ count }</span>
      <button onClick={ noCount }>No</button>
      <hr />
    </div>
  );
}

export default PollCard;