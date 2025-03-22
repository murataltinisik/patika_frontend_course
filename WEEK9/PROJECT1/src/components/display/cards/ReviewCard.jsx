import PropTypes from "prop-types";

const ReviewCard = ({ fullname, imgSrc, comment }) => {
  return (
    <div class="p-4 bg-blue-50 rounded-md w-full md:w-[50%]">
      <div class="flex items-center gap-4 mb-4">
        <img src={imgSrc} alt="avatar" class="w-12 h-12 rounded-full" />
        <div>
          {/* USERNAME */}
          <h3 class="text-gray-900 font-semibold">{fullname}</h3>
        </div>
      </div>

      <div class="relative bg-blue-800 text-white text-sm rounded-md px-6 py-4 leading-relaxed">
        {comment}
        <div class="absolute bottom-0 left-4 w-0 h-0 border-t-[20px] border-t-blue-800 border-l-[20px] border-l-transparent"></div>
        <div class="absolute bottom-0 right-4 w-0 h-0 border-t-[20px] border-t-blue-800 border-r-[20px] border-r-transparent"></div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default ReviewCard;
