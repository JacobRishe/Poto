import React, { Component} from 'react';
import PollModel from '../models/Poll'


class NewPoll extends Component {
    state = {
      question: '',
      response: '',
      author: this.props.userId 
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
  
      PollModel.create(this.state)
        .then(data => {
          // this.props.history.push('/polls')
          console.log("success!")
        })
    }
  
    handleChange = (event) => {
      if (event.target.type !== "text") {
        this.setState({ completed: !this.state.completed })
      }
  
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  
    render() {
      return (
        <div className="createPoll">
          <div>
            <h2>New Poll</h2>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              <input 
                className="placeholdertext"
                type="text" 
                placeholder="TYPE YOUR QUESTION"
                name="question" 
                onChange={this.handleChange}
                value={this.state.question} />
            </div>
            <input className="createpoll-btn" type="submit" value="Create Poll" />
          </form>
        </div>
      );
    }
  }
  
  export default NewPoll;