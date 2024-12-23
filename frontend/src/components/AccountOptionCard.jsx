import React from 'react';
import '../style/AccountOptionCard.css';

const AccountOptionCard = ({ title, icon, role, selectedRole, onSelect }) => {
  const isSelected = selectedRole === role;

  return (
    <div
      className={`account-option-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(role)}
    >
      <div className="icon-and-title">
        <span className={`icon ${icon}`} /> {/* Placeholder for the icon */}
        <span>{title}</span>
      </div>
      <input type="radio" checked={isSelected} readOnly />
    </div>
  );
};

export default AccountOptionCard;
