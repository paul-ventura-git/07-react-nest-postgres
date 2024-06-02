import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../assets/styles/Login.module.css'
import image from '../assets/img/bootstrap-logo.svg'

import { useLoginContext } from '../LoginContext';

function Login() {

  const { handleUserLogin } = useLoginContext();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let my_key = process.env.REACT_APP_ACCESS_TOKEN;
 
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer "+my_key);
    
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    
    fetch("http://localhost:3000/user", requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .then((data) => {
      const exists = data.some((elem)=>{
        if(inputs.username===elem.email && inputs.password===elem.password){
          alert("Logged in successfully!");
          navigate("/home");
          handleUserLogin(elem);       
          return true   
        }        
      })
      if (exists===false) { 
        alert("Wrong username or password")
      }
      return false
    })
    .catch((error) => console.error(error));
    
  }

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