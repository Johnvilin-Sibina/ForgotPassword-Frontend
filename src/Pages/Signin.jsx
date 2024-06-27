import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signin = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const[msg,setMsg] = useState('')
  const navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const payload = {email,password}
    await axios.post('http://localhost:5000/api/login-user',payload)
    .then((res)=>setMsg(res.data.message)).catch((error)=>{
      console.log(error);
      setMsg(error.data.message)      
    })
    setTimeout(()=>{
      navigate('/landing')
    },1000)
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend className="text-center">Sign In</legend>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter Your Email"
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
                SignIn
              </button>
            </fieldset>
          </form>
          <div className="mt-2">
            <Link to="/forgotpw">Forgot Password?</Link>
            <br />
            <span className="mt-2">Do not have an account? </span>
            <Link to="/signup">SignUp</Link>
          </div>
          <h1>{msg}</h1>
        </div>
      </div>
    </div>
  );
};

export default Signin;
