import React from "react";

const Textarea = (props) => {
  return (
    <textarea {...props} className="bg-white w-full p-5" rows={10}></textarea>
  );
};

export default Textarea;
