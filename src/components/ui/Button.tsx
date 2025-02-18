import React from "react";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled, children }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-6 py-4 bg-btn-bg text-primary  w-80"
    >
      {children}
    </button>
  );
};

export default Button;
