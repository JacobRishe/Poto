import React from 'react'
import { Link } from 'react-router-dom'

export default function LogIn() {
    return (
        <div>
            <h2>LogIn</h2>
            {/* <form onSubmit={this.handleSubmit}> */}
            <form>
                <div className="form-input">
                    <label htmlFor="title">Username</label>
                    <input 
                    type="text" 
                    name="title" /> 
                    {/* // onChange={this.handleChange}
                    // value={this.state.title} /> */}
                </div>
                <div className="form-input">
                    <label htmlFor="publisher">Password</label>
                    <input 
                    type="text" 
                    name="publisher" />
                    {/* // onChange={this.handleChange}
                    // value={this.state.publisher} /> */}
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