import React from 'react';
import { useLocation } from 'react-router-dom'; // useLocation to get passed state
import Clientnavbar from '../components/ClientNevbar'; // Import the navbar
import { Link } from 'react-router-dom';
function ClientWelcome() {
  const location = useLocation();
  const email = location.state?.email || ''; // Get email from location state
  const username = email.substring(0, email.indexOf('@')); // Extract username from email

  return (
    <>
      <Clientnavbar /> {/* Navbar component */}
      
      <div style={{
        textAlign: 'center',
        
        fontFamily: 'Arial, sans-serif',
      }}>
        {/* Main welcome message */}
        <h1 style={{
          fontSize: '3rem', // Large text size similar to the screenshot
          fontWeight: 'bold',
        }}>
          Welcome, {username.charAt(0).toUpperCase() + username.slice(1)}!
        </h1>
        <p style={{
          fontSize: '1.5rem', // Slightly smaller sub-text
          marginTop: '20px', // Space between the two lines
        }}>
          Let's start with your first job post.
        </p>
        
        {/* Buttons for AI options */}
        <Link>
        <button >
          Get started using AI
        </button>
        </Link>
        
        <Link to="/post-job"> <button >
        I'll do it without AI
        </button></Link>
      </div>
    </>
  );
}

export default ClientWelcome;
