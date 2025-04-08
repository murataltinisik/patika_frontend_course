const Radio = ({ color, ...props }) => {
  return (
    <label className="cursor-pointer inline-block">
      {/* RADIO */}
      <input
        {...props}
        type="radio"
        value={color}
        className="sr-only peer hidden"
      />

      {/* CHECKED */}
      <div
        style={{ backgroundColor: color }}
        className="rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-sm [&>*]:peer-checked:inline"
      >
        <span className="text-white hidden absolute">&#10003;</span>
      </div>
    </label>
  );
};

export default Radio;
