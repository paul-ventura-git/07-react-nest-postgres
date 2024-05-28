import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../styles/login.css'
import image from '../img/bootstrap-logo.svg'

function Login() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(inputs.username==="pventura@amazon.com" && inputs.password==="123"){
      alert("Logged in successfully!");
      navigate("/");
    } else {
      alert("Wrong username or password");
    }
    
  }
  console.log(inputs);
  return (
    
      <div className="container text-center py-5">
        <main className="form-signin w-100 m-auto">
          <form onSubmit={handleSubmit}>
            <img className="mb-4" src={image} alt="" width="72" height="57"/>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            
            <div className="form-floating">
              <input 
                name="username"
                type="email" 
                className="form-control" 
                id="floatingInput" 
                placeholder="name@example.com" 
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Username or Email address</label>
            </div>
            <br></br>
            <div className="form-floating">
              <input 
                name="password"
                type="password" 
                className="form-control" 
                id="floatingPassword" 
                placeholder="Password"
                onChange={handleChange}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <br></br>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
          </form>
        </main>
      </div>
    
  )
}

export default Login