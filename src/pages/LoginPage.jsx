import React from 'react';
import LoginForm from '../components/LoginForm';
import ContinueWithGoogleButton from '../components/ContinueWithGoogleButton';
import ContinueWithAppleButton from '../components/ContinueWithAppleButton';
import SignUpLink from '../components/SignUpLink';
import '../style/LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-page">   
    
      <div className="login-container">
        <h1>Log in to Pencilry</h1>
        <LoginForm />
        <div className="or-divider">or</div>
        <ContinueWithGoogleButton />
        <ContinueWithAppleButton />
        <SignUpLink />
      </div>
    </div>
  );
};

export default LoginPage;
