import PropTypes from "prop-types";

const TrainerCard = ({ imgSrc }) => {
  return (
    <div class="relative inline-block p-2">
      {/* SHAPES */}
      <div class="absolute w-[40%] top-0 left-1/2 -translate-x-1/2 h-2 bg-blue-900"></div>
      <div class="absolute w-[40%] bottom-0 left-1/2 -translate-x-1/2 h-2 bg-blue-900"></div>
      <div class="absolute h-[40%] left-0 top-1/2 -translate-y-1/2 w-2 bg-blue-900"></div>
      <div class="absolute h-[40%] right-0 top-1/2 -translate-y-1/2 w-2 bg-blue-900"></div>

      {/* IMG */}
      <img
        src={imgSrc}
        width={450}
        class="rounded-md h-auto object-cover border-[3px] border-yellow-400"
      />
    </div>
  );
};

TrainerCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default TrainerCard;
