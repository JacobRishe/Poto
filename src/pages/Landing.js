import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
    
    return (
        <div className="landing-container">
            <div className="this">
                <p>THIS</p>
            </div>
            <div className="that">
                <p>THAT</p>
            </div>
            <div className="question">
                <p>?</p>
            </div>
            <div className="landing-btns">
                <Link to="/LogIn">
                    <button className="login-btn">LOGIN</button>
                </Link>
                <Link to="/SignUp">
                    <button className="signup-btn">SIGN UP</button>
                </Link>
            </div>
            <div className="about-app">
                <p>
                    A place for indecisive people where you vote or cast your opinion on other users polls. 
                </p>
            </div>
        </div>
    )
}