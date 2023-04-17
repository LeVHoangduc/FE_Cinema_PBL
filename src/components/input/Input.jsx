import React from "react";

const Input = ({
  type,
  errorMessage,
  placeholder,
  className,
  name,
  register,
  rules,
  autoComplete,
  label,
}) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type={type}
        className="input_form"
        placeholder={placeholder}
        name={name}
        {...register(name, rules)}
        autoComplete={autoComplete}
      />
      <div className="errorMessage">{errorMessage}</div>
      {/* <div className="errorMessage">Error</div> */}
    </div>
  );
};

export default Input;
