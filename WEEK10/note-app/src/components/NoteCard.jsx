import React from "react";

const NoteCard = ({ color, content }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full p-3 rounded-md text-white shadow-lg border-4 border-black"
    >
      {/* CONTENT */}
      {content}
    </div>
  );
};

export default NoteCard;
