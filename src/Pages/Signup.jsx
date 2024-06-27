import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [userName,setUserName]  = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const[msg,setMsg] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const payload = {userName,email,password}
    await axios.post('http://localhost:5000/api/register-user',payload)
    .then((res)=>setMsg(res.data.message)).catch((error)=>{
      console.log(error);
      setMsg(error.data.message)      
    })
    setTimeout(()=>{
      navigate('/signin')
    },1000)
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend className="text-center">Sign Up</legend>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  id="userName"
                  className="form-control"
                  placeholder="Enter Your User Name"
                  required
                  value={userName}
                  onChange={(e)=>setUserName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Id
                </label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="Enter Your Email Address"
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter Your Password"
                  required
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                SignUp
              </button>
            </fieldset>
          </form>
          <div className="mt-2">
            <span>Already have an account? </span>
            <Link to="/signin">SignIn</Link>
          </div>
          <h1>{msg}</h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;
