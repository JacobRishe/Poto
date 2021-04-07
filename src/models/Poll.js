




class PollModel {
    // the "static" keyword allows us to invokd the method without an instance of the class
    static all = () => {
      return fetch(`https://localhost/4000/polls`).then(res => res.json())
    }
  
    static show = (pollId) => {
      return fetch(`https://localhost/4000/polls/${pollId}`).then(res => res.json())
    }
  
    static create = (pollData) => {
      return fetch(`https://localhost/4000/polls`, {
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
  