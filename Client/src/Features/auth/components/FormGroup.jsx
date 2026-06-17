import React from 'react';

const FormGroup = ({ label, placeholder, value, onChange, type, ...rest }) => {
  // Safe input type checking
  const inputType = type || (label.toLowerCase().includes("password") ? "password" : "text");
  
  // Safe HTML ID without spaces
  const inputId = label.toLowerCase().replace(/[^a-z0-9]/g, "-");

  return (
     <div className="form-group">
        <label htmlFor={inputId} className="form-group__label">{label}</label>
        <input 
            value={value}
            onChange={onChange}
            type={inputType} 
            name={inputId} 
            id={inputId} 
            placeholder={placeholder}
            className="form-group__input"
            required
            {...rest}
        />
     </div>
  );
};

export default FormGroup;
