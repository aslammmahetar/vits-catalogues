"use client";
import { PackageX } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const NoCatalogue = () => {
  const handleClick = () => {
    const container = document.getElementById("admin-scroll-container");
    container?.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <PackageX className="w-16 h-16 text-gray-400 mb-4" />
      <h3 className="text-lg font-semibold text-gray-700">
        No Catalogue available
      </h3>
      <div className="w-full sm:w-auto mt-5">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          disabled={false}
          onClick={handleClick}
          className="w-full cursor-pointer sm:w-auto relative inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold text-green-700 bg-white border-2 border-green-500 rounded-xl shadow-md overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-green-100/40 to-green-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          Create You First Catalogue Now 🎉
        </motion.button>
      </div>
    </div>
  );
};

export default NoCatalogue;
