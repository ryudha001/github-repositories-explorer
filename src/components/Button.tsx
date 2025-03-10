import React from "react";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  isLoading,
  disabled,
  onClick,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading || disabled}
      className={`mt-2 bg-blue-500 text-white p-2 w-full rounded-md flex items-center justify-center ${className} ${
        isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
      }`}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
