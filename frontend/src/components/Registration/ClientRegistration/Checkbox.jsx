// components/Checkbox.jsx
import React from 'react';
import '../../../style/clientReistration/Checkbox.css';

const Checkbox = ({ label, name, checked, onChange, required }) => {
  return (
    <label>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        required={required}
      />
      {label}
    </label>
  );
};

export default Checkbox;
