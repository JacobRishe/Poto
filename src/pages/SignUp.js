import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <div>
            <h2>Sign Up</h2>
            {/* <form onSubmit={this.handleSubmit}> */}
            <form>
                <div className="username-input">
                    <label htmlFor="title">Username</label>
                    <input 
                    type="text" 
                    name="title" /> 
                    {/* // onChange={this.handleChange}
                    // value={this.state.title} /> */}
                </div>
                <div className="password-input">
                    <label htmlFor="publisher">Password</label>
                    <input 
                    type="text" 
                    name="publisher" />
                    {/* // onChange={this.handleChange}
                    // value={this.state.publisher} /> */}
                </div>
                <div className="form-input">
                    <label htmlFor="coverArtUrl">Email</label>
                    <input 
                    type="text" 
                    name="coverArtUrl" />
                    {/* // onChange={this.handleChange}
                    // value={this.state.coverArtUrl} /> */}
                </div>
            </form>
            <div>
                <Link to="/Home">
                    <button className="signuppage-btn">SIGN UP</button>
                </Link>
            </div>
      </div>
    )
}