import React, { Component } from 'react';
import PollModel from '../models/Poll'


class NewPoll extends Component {
    state = {
      question: '',
      publisher: '',
      completed: false  
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
              <label htmlFor="title">Title</label>
              <input 
                type="text" 
                name="title" 
                onChange={this.handleChange}
                value={this.state.title} />
            </div>
            <div className="form-input">
              <label htmlFor="publisher">Publisher</label>
              <input 
                type="text" 
                name="publisher" 
                onChange={this.handleChange}
                value={this.state.publisher} />
            </div>
            <div className="form-input">
              <label htmlFor="completed">Completed</label>
              <input 
                type="checkbox" 
                id="completed" 
                checked={this.state.completed} 
                onChange={this.handleChange} />
            </div>
  
            <input type="submit" value="Save!"/>
          </form>
        </div>
      );
    }
  }
  
  export default NewPoll;