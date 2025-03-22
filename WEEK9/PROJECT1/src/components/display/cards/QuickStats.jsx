import PropTypes from "prop-types";

const QuickStats = ({ count, title }) => {
  return (
    <div className="p-2">
      <div className="p-5 bg-white flex flex-col justify-center items-center gap-3">
        {/* COUNT */}
        <p className="text-blue-700 font-bold text-2xl">{count}</p>

        {/* TITLE */}
        <p className="font-bold text-black">{title}</p>
      </div>
    </div>
  );
};

QuickStats.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default QuickStats;
