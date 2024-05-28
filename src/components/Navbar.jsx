import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary mb-5" data-bs-theme="dark">
      <div class="container">
        <a class="navbar-brand" href="#">Ventura Netzwerk</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/home">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Management
              </a>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/cruduser">Users</Link></li>
                <li><Link class="dropdown-item" to="/crudproduct">Products</Link></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

  )
}

export default Navbar