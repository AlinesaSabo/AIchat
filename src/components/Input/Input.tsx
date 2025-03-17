import React from "react";
import s from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input: React.FC<InputProps> = ({ error, ...props }) => {
  return (
    <div className={s.inputContainer}>
      <input className={s.inputField} {...props} />
      {error && <p className={s.inputError}>{error}</p>}
    </div>
  );
};

export default Input;
