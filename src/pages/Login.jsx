import React from 'react'
import '../styles/login.css'
import image from '../img/bootstrap-logo.svg'

function Login() {
  return (
    <div className="container text-center py-5">
      <main className="form-signin w-100 m-auto">
        <form>
          <img className="mb-4" src={image} alt="" width="72" height="57"/>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          
          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <br></br>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
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