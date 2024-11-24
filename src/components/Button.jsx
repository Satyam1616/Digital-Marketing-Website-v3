import React from "react";
import styles from "./Button.module.css";

function Button({ text, onClick, type = "button", className = "", disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
