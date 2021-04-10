
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    
    return (
        <div className="signup-container">
            <h2 className="signup-title">Sign Up</h2>
            <form className="signup-form">
            {/* <form onSubmit={this.handleSubmit}> */}
                <div className="form-inputs">
                    <input 
                    className="signup-input"
                    placeholder="USERNAME"
                    type="text" 
                    name="username" /> 
                    {/* // onChange={this.handleChange}
                    // value={this.state.title} /> */}
                </div>
                <div className="form-inputs">
                    <input 
                    className="signup-input"
                    placeholder="PASSWORD"
                    type="text" 
                    name="password" />
                    {/* // onChange={this.handleChange}
                    // value={this.state.publisher} /> */}
                </div>
                <div className="form-inputs">
                    <input 
                    className="signup-input"
                    placeholder="EMAIL"
                    type="text" 
                    name="email" />
                    {/* // onChange={this.handleChange}
                    // value={this.state.coverArtUrl} /> */}
                </div>
            </form>
            <div>
                <Link to="/Home">
                    <button className="signuppage-btn">SUBMIT</button>
                </Link>
            </div>
      </div>
    )
}





// import React from "react";
// import UserModel from "../models/User";

// const urlUsers = "http://localhost:4000/api/user";


// class SignUp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       email: "",
//       password: "",
//     };
//     this.createUser = this.createUser.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   createUser = (userData) => {
//     return fetch(`${urluser}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     })
//       .then((res) => res.json())
//       .then((userData) => userData)
//       .catch((err) =>
//         console.log("add a user to db function in poll api", err)
//       );
//   };

//   handleChange = (event) => {
//     let name = event.target.name;
//     this.setState({ [name]: event.target.value });
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     const userSignupData = {
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password,
//     };
//     this.createUser(userSignupData).then((newUserData) => {
//       console.log("newuserData", newUserData);
//       this.props.history.push("/poll", { newUserData });
//     });
//   };
  
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-input">
//             <input
//               type="text"
//               name="name"
//               placeholder="Username"
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="form-input">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="form-input">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={this.state.password}
//               onChange={this.handleChange}
//             />
//           </div>
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
// export default SignUp;
