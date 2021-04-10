import React, { useState, useEffect } from 'react'
import PollModel from "../models/Poll"
import PollCard from "../components/PollCard"

export default function Home() {

    const [poll, setPoll] = useState()

    useEffect(() => {
        PollModel.all().then(data => {
            const polls = data.Polls.map((currentpoll, index) => {
                return  <PollCard  author={currentpoll.author}  question={currentpoll.question} />
            })
            setPoll(polls)
            console.log(data)
        })
    }, [])

    return (
        <div className="polls">
            { poll }
        </div>
    )
}
