const Modal = ({ isOpen, setIsOpen, item }) => {
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={toggleModal}
        />

        {/* Modal */}
        <div className="bg-white rounded-2xl shadow-xl p-6 w-[600px] z-50 animate-fade-in-up">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-black">{item?.name}</h2>
            <button
              onClick={toggleModal}
              className="text-gray-500 hover:text-black transition"
            >
              ✕
            </button>
          </div>
          <p className="text-gray-600">
            <ul className="divide-y divide-gray-200">
              {Object.entries(item).map(([key, value]) => (
                <li key={key} className="py-2 flex justify-between gap-4">
                  <span className="text-gray-600 font-medium capitalize whitespace-nowrap">
                    {key.replace(/_/g, " ")}
                  </span>
                  <span className="text-gray-900 text-right max-w-[60%] truncate">
                    {Array.isArray(value)
                      ? value.join(", ")
                      : value?.toString()}
                  </span>
                </li>
              ))}
            </ul>
          </p>
          <div className="mt-6 text-right">
            <button
              onClick={toggleModal}
              className="px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
