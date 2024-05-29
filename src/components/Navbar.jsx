import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';

function Navbar() {

  const [user, setUser] = useState([]);

  const handleLogin = () =>
    setUser({
      id: '1',
      name: 'Robin',
      permissions: ['editor'],
      roles: ['admin'],
    });

  const handleLogout = () => setUser(null);
  console.log(user.name);
  return (

    <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary mb-5" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand" href="/">Ventura Netzwerk</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Management
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/cruduser">Users</Link></li>
                <li><Link className="dropdown-item" to="/crudproduct">Products</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>

          { (user==null || user===undefined) ? (
            <>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              <button className="btn btn-success" onClick={handleLogin} style={{marginLeft: "10px"}}>Sign In</button>
            </>            
          ) : (
            <>
              <div className='nav-item'>Welcome, {user.name}</div>
              <button className="btn btn-success" onClick={handleLogout} style={{marginLeft: "10px"}}>Sign Out</button>
            </>
            
          )}
        </div>
      </div>
    </nav>

  )
}

export default Navbar