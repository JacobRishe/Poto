const url = `http://localhost:4000/api`




class PollModel {
  // the "static" keyword allows us to invoke the method without an instance of the class
  static all = () => {
    return fetch(`${url}/polls`).then(res => res.json())
  }

  static show = (pollId) => {
    return fetch(`${url}/polls/${pollId}`).then(res => res.json())
  }

  static yes = (pollId) => {
    return fetch(`${url}/polls/${pollId}/voteyes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json())
  
  }

  static no = (pollId) => {
    return fetch(`${url}/polls/${pollId}/voteno`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json())
  }


  static create = (pollData) => {
    console.log(pollData)
    return fetch(`${url}/polls`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(pollData)
    })
      .then(res => res.json())
  }
}

export default PollModel