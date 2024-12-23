import React from 'react';

const Checkbox = ({ label, checked, onChange, id }) => {
  return (
    <div className="mb-3 form-check">
      <input 
        type="checkbox" 
        className="form-check-input" 
        id={id} 
        checked={checked} 
        onChange={onChange} 
      />
      <label className="form-check-label" htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
