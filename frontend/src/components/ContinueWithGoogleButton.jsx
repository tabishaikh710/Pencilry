import React from 'react';
import '../style/ContinueWithGoogleButton.css';

const ContinueWithGoogleButton = () => {
  return (
    <button className="google-btn">
      <img src="google-logo.png" alt="Google" className="google-icon" />
      Continue with Google
    </button>
  );
};

export default ContinueWithGoogleButton;
