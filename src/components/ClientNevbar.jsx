import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import '../style/ClientNevbar.css'; // Add your custom CSS
import logo from '../assets/logo.png'; // Import logo

const ClientNevbar = () => {
  return (
    <div className="navbar Clientnavbar">
      <div className="logo">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className='logo-nav' />
        </Link>
      </div>
      <ul className="nav-links clientNav-link">
        <li>
          <Link className="nav-link" to="/jobs">Jobs</Link>
        </li>
        <li>
          <Link className="nav-link" to="/talent">Talent</Link>
        </li>
        <li>
          <Link className="nav-link" to="/reports">Reports</Link>
        </li>
        <li>
          <Link className="nav-link" to="/messages">Messages</Link>
        </li>
      </ul>
      <SearchBar />
      <div className="user-icons">
        <button className="icon-btn" aria-label="Favorites">
          ❤️
        </button>
        <button className="icon-btn" aria-label="Notifications">
          🔔
        </button>
        <button className="icon-btn" aria-label="Profile">
          👤
        </button>
      </div>
    </div>
  );
};

export default ClientNevbar;
