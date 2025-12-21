import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import CommonHeading from "./FirmAdmin/CommonHeading";
import { X } from "lucide-react";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

const CommonDialogue = ({ children, isOpen, onClose, headingText }) => {
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-md"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
            >
              <div className="px-4 pt-5 pb-4 sm:p-6">
                <div className="flex justify-between">
                  <CommonHeading headingText={headingText} />
                  <button
                    className="p-2 rounded-full shadow-md hover:shadow-lg transition hover:bg-red-600"
                    onClick={onClose}
                  >
                    <X className="text-red-400 transition hover:text-white" />
                  </button>
                </div>
                {children}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommonDialogue;
