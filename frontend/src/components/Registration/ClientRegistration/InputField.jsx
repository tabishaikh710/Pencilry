// components/InputField.jsx
import React from 'react';
import '../../../style/clientReistration/InputField.css';

const InputField = ({ type, name, placeholder, value, onChange, required }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default InputField;
