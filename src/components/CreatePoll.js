import React, { Component} from 'react';
import PollModel from '../models/Poll'


class NewPoll extends Component {
    state = {
      question: '',
      response: '',
      author: false  
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
  
      PollModel.create(this.state)
        .then(data => {
          this.props.history.push('/polls')
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
        <div>

          <h2>New Poll</h2>

          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              <label htmlFor="question">Type your question</label>
              <input 
                type="text" 
                name="question" 
                onChange={this.handleChange}
                value={this.state.question} />
            </div>
  
            <input type="submit" value="Create Poll" />
          </form>
        </div>
      );
    }
  }
  
  export default NewPoll;