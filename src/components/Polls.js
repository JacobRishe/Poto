import React, { Component } from 'react'
import PollModel from '../models/poll'

import { Link } from 'react-router-dom'
import PollCard from '../components/PollCard'




class Polls extends Component {
  state = {
    polls: []
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    PollModel.all().then(data => {
      this.setState({ polls: data.polls })
    })
  }

  render() {
    let pollList = this.state.polls.map((poll, index) => {
      return (
        <Link to={`/polls/${ poll.id }`} key={index}>
          <PollCard  {...poll} />
        </Link>
      )
    })

    return (
      <div>
        <h1>All polls</h1>
        { this.state.polls ? pollList : 'Loading...' }
      </div>
    );
  }
}

export default Polls;