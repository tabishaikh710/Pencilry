import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import '../style/LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState(''); // Simulate role state
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulated login logic with role
    if (email === 'client@example.com') {
      setRole('client');
    } else if (email === 'illustrator@example.com') {
      setRole('illustrator');
    } else {
      alert('Invalid login');
      return;
    }

    // Redirect based on user role
    if (role === 'client') {
      navigate('/client-welcome'); // Redirect to client welcome page
    } else if (role === 'illustrator') {
      navigate('/illustrator-welcome'); // Redirect to illustrator welcome page
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label htmlFor="email" className="login-label">Username or Email</label>
      <input 
        type="text"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Username or Email"
        className="login-input"
      />
      <button type="submit" className="continue-btn">Continue</button>
    </form>
  );
};

export default LoginForm;
