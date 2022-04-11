import React, { useState, useEffect } from 'react'
import PollModel from "../models/Poll"
import PollCard from "../components/PollCard"

export default function Home() {

    const [poll, setPoll] = useState()

    useEffect(() => {
        PollModel.all().then(data => {
            const polls = data.Polls.map((currentpoll, index) => {
                console.log(currentpoll)
                return  <PollCard  author={ currentpoll.author.username }  question={ currentpoll.question } questionid={currentpoll._id}/>
            })
            setPoll(polls)
        })
    }, [])

    return (
        <div className="polls">
            { poll }
        </div>
    )
}
