import PropTypes from "prop-types";

const Button = ({ title, ...props }) => {
  return (
    <button
      {...props}
      className="shadow-[0_2px_3px_#134D70] bg-[#134D70] cursor-pointer text-black p-1.5 px-5 rounded-full"
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
};

export default Button;
