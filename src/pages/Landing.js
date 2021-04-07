import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
    return (
        <>
            <div className="this">
                <p>THIS</p>
            </div>
            <div className="that">
                <p>THAT</p>
            </div>
            <div className="that">
                <p>?</p>
            </div>
            <div>
                <Link to="/LogIn">
                    <button className="login-btn">LOGIN</button>
                </Link>
                <Link to="/SignUp">
                    <button className="signup-btn">SIGN UP</button>
                </Link>
            </div>
        </>
    )
}