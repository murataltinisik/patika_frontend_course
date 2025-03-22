import PropTypes from "prop-types";

const Button = ({ type, onClick, text }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-700 text-white p-2 rounded-md hover:bg-blue-800 active:bg-blue-700 shadow-sm"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Button;
