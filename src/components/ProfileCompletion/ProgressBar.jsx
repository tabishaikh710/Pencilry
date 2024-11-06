// ProgressBar.jsx
import React from 'react';
import '../../style/ProfileCompletion/ProgressBar.css';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      <p className="progress-text">{percentage}% Complete</p>
    </div>
  );
};

export default ProgressBar;
