// components/Button.jsx
import React from 'react';
import '../../../style/clientReistration/Button.css';

const Button = ({ label, className, onClick, disabled }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
