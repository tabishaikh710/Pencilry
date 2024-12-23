import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import AccountOptionCard from '../components/AccountOptionCard';
import SignUpButton from '../components/SignUpButton';
import SignUpLink from '../components/LoginLink';
import '../style/SignUpPage.css';

const SignUpPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSelectRole = (role) => {
    setSelectedRole(role);
  };

  const handleCreateAccount = () => {
    if (selectedRole === 'client') {
      navigate('/register-client'); // Navigate to client registration
    } else if (selectedRole === 'freelancer') {
      navigate('/register-freelancer'); // Navigate to freelancer registration
    }
  };

  return (
    <div className="signup-page">
      <h2>Join as a client or freelancer</h2>
      <div className="signup-options">
        <AccountOptionCard
          title="I’m a client, hiring for a project"
          icon="client-icon"
          role="client"
          selectedRole={selectedRole}
          onSelect={handleSelectRole}
        />
        <AccountOptionCard
          title="I’m an artist/illustrator, looking for work"
          icon="freelancer-icon"
          role="freelancer"
          selectedRole={selectedRole}
          onSelect={handleSelectRole}
        />
      </div>
      <SignUpButton isDisabled={!selectedRole} onClick={handleCreateAccount} />
      <SignUpLink />
    </div>
  );
};

export default SignUpPage;
