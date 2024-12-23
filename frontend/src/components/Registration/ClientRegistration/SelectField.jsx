// components/SelectField.jsx
import React from 'react';
import '../../../style/clientReistration/SelectField.css';

const SelectField = ({ name, value, options, onChange, required }) => {
  return (
    <select name={name} value={value} onChange={onChange} required={required}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
