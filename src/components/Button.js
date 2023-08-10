import React from "react";

const ButtonInline = ({ children, ...props }) => {
  return (
    <Button className="inline-button" {...props}>
      {children}
    </Button>
  );
};

const Button = ({ type = "button", onClick, className, children }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export { Button, ButtonInline };
