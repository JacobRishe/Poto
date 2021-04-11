import React, { useState } from 'react';
import PollModel from '../models/Poll';

function CreatePoll(props) {
  console.log(props)
  const [question, setQuestion] = useState("");
  const [author, setAuthor] = useState("606e3e5cb31f375c7dbeb0c2");
  const [response, setResponse] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    PollModel.create({ 
      question, 
      author, 
      })
      .then(data => {
        console.log(data)
        props.history.push('/home')
      })
  }

  return (
    <div className="createPoll">
      <h2 className="newpoll">New Poll</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
        <input 
            className="placeholdertext"
            type="text" 
            placeholder="TYPE YOUR QUESTION"
            name="question" 
            onChange={(e) => setQuestion(e.target.value)}
            value={question} />
        </div>
        <div>
          <input 
            type="hidden" 
            name="author" 
            onChange={(e) => setAuthor(e.target.value)}
            value={author} />
        </div>
        <div>
          <input 
            type="hidden" 
            name="resonse" 
            onChange={(e) => setResponse(e.target.value)}
            value={response} />
        </div>
        <button onClick={ handleSubmit } className="createpoll-btn" type="submit"><span className="create">CREATE</span> POLL</button>
      </form>
    </div>
  );
}

export default CreatePoll;