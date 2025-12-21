"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const GlobalLoader = ({ show = false, loadingText = "Please wait..." }) => {
  // if (!show) return null;
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
  }, [show]);
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Loader Card */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-4 rounded-2xl bg-white px-8 py-6 shadow-xl"
      >
        {/* Spinner */}
        <div className="h-10 w-10 rounded-full border-4 border-green-200 border-t-green-600 animate-spin" />
        {/* Text */}
        <p className="text-sm font-medium text-gray-700">{loadingText}</p>
      </motion.div>
    </div>
  );
};

export default GlobalLoader;
