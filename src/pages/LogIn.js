import React from 'react'
import { Link } from 'react-router-dom'

export default function LogIn() {
    return (
        <div className="loginpage-container">
            <h2 className="login-title">LogIn</h2>
            <form className="login-form">
                <div className="form-inputs">
                    <input 
                    className="login-input"
                    placeholder="USERNAME"
                    type="text" 
                    name="username" /> 
                </div>
                <div className="form-inputs">
                    <input 
                    className="login-input"
                    placeholder="PASSWORD"
                    type="text" 
                    name="password" />
                </div>
            </form>
            <div>
            <Link to="/Home">
                <button className="loginpage-btn">LOGIN</button>
            </Link>
            </div>
      </div>
    )
}