import React from "react";
import s from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
}) => {
  return (
    <button className={s.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
