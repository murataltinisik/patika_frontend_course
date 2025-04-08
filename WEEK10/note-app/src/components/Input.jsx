import React from "react";

const Input = (props) => {
  return (
    <input
      type="text"
      {...props}
      className="rounded-full border w-full border-gray-100 bg-white outline-none p-3 px-4"
    />
  );
};

export default Input;
