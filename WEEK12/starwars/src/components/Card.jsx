import PropTypes from "prop-types";

const Card = ({ name, model }) => {
  return (
    <div className="bg-[#111423] w-full rounded-lg overflow-hidden shadow-xl">
      {/* IMG */}
      <img
        className="w-full"
        src="https://media.sketchfab.com/models/a11b42c0f14445a78100a9f36cd8a01f/thumbnails/1612be0124974afea744b7747dc63630/448.jpeg"
      />

      <div className="p-5">
        {/* NAME */}
        <ul>
          <li className="flex justify-start items-center gap-2">
            <span className="text-gray-500 text-xs">Name:</span>
            <b>{name}</b>
          </li>

          <li className="flex justify-start items-center gap-2">
            <span className="text-gray-500 text-xs">Model:</span>
            <b>{model}</b>
          </li>
        </ul>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  model: PropTypes.string,
};

export default Card;
