import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="container collapse navbar-collapse" id="navbarSupportedContent">
        <a className="navbar-brand" href="#">Ventura Netzwerk</a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">Gallery</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/productview">Product View</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/crudproduct">Products Management</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cruduser">Users Management</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <div className="row">
            <div className="col">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </div>
            <div className="col">
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </div>          
          </div>
        </form>
      </div>
    </nav>
  )
}

export default Navbar