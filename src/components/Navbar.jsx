import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'; // Optional CSS for Navbar styling
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../assets/Logo.png';  // Adjust path if needed
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className='logo-nav' />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs">Jobs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/companies">Companies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/people">People</Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link to="/login" className="btn btn-outline-success ms-1">Login</Link>
            <Link to="/post-job" className="btn btn-outline-success ms-1">Post a job</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
