import React from "react";

const Input = (props) => {
  return (
    <input
      {...props}
      type="text"
      placeholder="Name/Model"
      className="bg-red-900 w-full text-white rounded-full px-3 text-xs py-2 outline-none"
    />
  );
};

export default Input;
