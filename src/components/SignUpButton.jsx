import React from 'react';
import '../style/SignUpButton.css';

const SignUpButton = ({ isDisabled, onClick }) => {
  return (
    <button className="signup-button" disabled={isDisabled} onClick={onClick}>
      Create Account
    </button>
  );
};

export default SignUpButton;
