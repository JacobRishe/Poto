import React, { useState } from 'react';
import PollModel from '../models/Poll';

function CreatePoll(props) {
  console.log(props)
  const [question, setQuestion] = useState("");
  const [author, setAuthor] = useState("606e3e5cb31f375c7dbeb0c2");
  const [response, setResponse] = useState("false");

  function handleSubmit(event) {
    event.preventDefault();

    PollModel.create({ 
      question, 
      author, 
      response })
      .then(data => {
        console.log(data)
        props.history.push('/home')
      })
  }

  return (
    <div className="createPoll">
      <h2>New Poll</h2>
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
        <div className="form-input">
          <input 
            type="hidden" 
            name="author" 
            onChange={(e) => setAuthor(e.target.value)}
            value={author} />
        </div>
        <div className="form-input">
          <input 
            type="hidden" 
            name="resonse" 
            onChange={(e) => setResponse(e.target.value)}
            value={response} />
        </div>
        <input onClick={ handleSubmit } className="createpoll-btn" type="submit" value="Create Poll"/>
      </form>
    </div>
  );
}

export default CreatePoll;





// import React, { Component} from 'react';
// import PollModel from '../models/Poll'


// class NewPoll extends Component {
//     state = {
//       question: '',
//       response: '',
//       author: this.props.userId 
//     }
  
//     handleSubmit = (event) => {
//       event.preventDefault();
  
//       PollModel.create(this.state)
//         .then(data => {
//           // this.props.history.push('/polls')
//           console.log("success!")
//         })
//     }
  
//     handleChange = (event) => {
//       if (event.target.type !== "text") {
//         this.setState({ completed: !this.state.completed })
//       }
  
//       this.setState({
//         [event.target.name]: event.target.value
//       })
//     }
  
  //   render() {
  //     return (
  //       <div className="createPoll">
  //         <div>
  //           <h2>New Poll</h2>
  //         </div>
  //         <form onSubmit={this.handleSubmit}>
  //           <div className="form-input">
  //             <input 
  //               className="placeholdertext"
  //               type="text" 
  //               placeholder="TYPE YOUR QUESTION"
  //               name="question" 
  //               onChange={this.handleChange}
  //               value={this.state.question} />
  //           </div>
  //           <input className="createpoll-btn" type="submit" value="Create Poll" />
  //         </form>
  //       </div>
  //     );
  //   }
  // }
  
  // export default NewPoll;