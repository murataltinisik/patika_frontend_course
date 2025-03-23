import PropTypes from "prop-types";

// Assets (ICONS)
import { XMarkIcon } from "@heroicons/react/16/solid";

const Modal = ({ isOpen, setIsOpen, children }) => {
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } fixed top-0 left-0 w-full h-full bg-[#00000090] justify-center items-center`}
    >
      <div className="w-[600px] relative bg-white shadow-sm rounded-md text-black p-10 flex flex-col justify-center items-center gap-7">
        <div className="absolute top-3 right-3">
          <button>
            <XMarkIcon className="w-4" onClick={() => setIsOpen(false)} />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
