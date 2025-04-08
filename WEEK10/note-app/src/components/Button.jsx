import React from "react";

const Button = ({ title, ...props }) => {
  return (
    <button
      {...props}
      className="text-white bg-green-500 rounded-full p-3 px-10 hover:bg-green-600 active:bg-green-500"
    >
      {title}
    </button>
  );
};

export default Button;
