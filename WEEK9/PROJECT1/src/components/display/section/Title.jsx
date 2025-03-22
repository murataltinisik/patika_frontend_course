import PropTypes from "prop-types";

const Title = ({ title, description, align = "justify" }) => {
  return (
    <div className="text-center w-full">
      <div>
        <h3 className="font-bold text-blue-600 text-3xl">{title}</h3>

        <div className="p-1 rounded-md bg-orange-500 mt-3 w-[100px] mx-auto"></div>
      </div>

      <p
        style={{ textAlign: align }}
        className="text-justify font-bold text-sm text-gray-600 mt-5 w-[70%] mx-auto"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
    </div>
  );
};

Title.propTypes = {
  align: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Title;
