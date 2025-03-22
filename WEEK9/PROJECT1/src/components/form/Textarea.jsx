import PropTypes from "prop-types";

const Textarea = ({ name, rows, value, onChange, placeholder }) => {
  return (
    <div className="w-full">
      <textarea
        rows={rows}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        class="bg-blue-50 p-3 rounded-md w-full"
      >
        {value}
      </textarea>
    </div>
  );
};

Textarea.propTypes = {
  rows: PropTypes.number,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Textarea;
