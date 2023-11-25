import React from "react";

import classes from "./button.module.css";

const Button = ({ children, onClick, type, disabled }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={`${classes.btn} ${classes[type]}`}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
