import PropTypes from "prop-types";

const Input = ({ name, type, value, onChange, placeholder }) => {
  return (
    <div className="w-full">
      <input
        type={type}
        value={value}
        name={name || ""}
        onChange={onChange}
        placeholder={placeholder || ""}
        class="bg-blue-50 p-3 rounded-md w-full"
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Input;
