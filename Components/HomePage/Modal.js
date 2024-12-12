import { modalContent } from "@/utils/data";
import { FiX } from "react-icons/fi";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="bg-white rounded-lg w-[90vw] lg:h-[70vh] max-h-max max-w-4xl p-6 shadow-lg overflow-y-auto">
        {/* Header Section */}
        <div className="relative flex justify-center flex-col items-center">
          <img
            src={content.image}
            alt={content.title}
            className="lg:w-[40vw] max-w-full h-80 object-cover"
          />
          <div className="bg-black text-center p-5 w-[40vw]">
          <h3 className="text-2xl font-bold text-white z-10 my-3">{content.title}
         
          </h3>
          <p className="text-xl font-bold text-white">{content.description}</p>
          </div>
         
         
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full"
          >
            <FiX className="text-xl" />
          </button>
        </div>
        <div className="p-6">
          {/* <h3 className="text-2xl font-bold">{content.title}</h3> */}
          <p className="text-sm text-gray-600 mb-4">{content.subtitle}</p>

          {/* Sections */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            {modalContent.sections.map((section, index) => (
              <div key={index} className="flex items-start space-x-4">
                {/* Icon */}
                <img
                  src={section.icon}
                  alt={section.title}
                  className="w-12 h-12"
                />
                {/* Content */}
                <div>
                  <h4 className="font-semibold text-lg">{section.title}</h4>
                  <p className="text-gray-600 text-sm">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
