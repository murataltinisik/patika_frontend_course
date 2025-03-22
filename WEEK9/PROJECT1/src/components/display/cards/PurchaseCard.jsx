import PropTypes from "prop-types";

const PurchaseCard = ({ imgSrc, title, oldPrice, newPrice }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img src={imgSrc} className="w-full h-64 object-cover" alt={title} />

      <div className="p-4 text-center">
        <h2
          className="text-md font-semibold text-gray-900"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h2>

        <div className="mt-2 text-sm text-gray-700 space-x-2">
          <span className="line-through text-gray-500">{oldPrice}$</span>
          <span className="font-semibold text-black">{newPrice}$</span>
        </div>

        <button className="mt-4 flex items-center justify-center w-full py-2 bg-white text-black font-semibold hover:text-blue-600 transition">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

PurchaseCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  oldPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  newPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};

export default PurchaseCard;
