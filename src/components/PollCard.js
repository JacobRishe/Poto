import React from 'react';
// import './PollCard.scss'

const PollCard = (props) => {
  return (
    <div className="pollcard">
      <h3>{ props.question }</h3>
      <p>By: { props.author }</p>
      <hr />
    </div>
  );
}

export default PollCard;