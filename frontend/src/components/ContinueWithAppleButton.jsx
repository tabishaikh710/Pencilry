import React from 'react';
import '../style/ContinueWithAppleButton.css';

const ContinueWithAppleButton = () => {
  return (
    <button className="apple-btn">
      <img src="apple-logo.png" alt="Apple" className="apple-icon" />
      Continue with Apple
    </button>
  );
};

export default ContinueWithAppleButton;
