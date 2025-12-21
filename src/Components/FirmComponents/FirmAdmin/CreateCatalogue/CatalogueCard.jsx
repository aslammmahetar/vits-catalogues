"use client";

import CommonHeading from "@/Components/Common/FirmAdmin/CommonHeading";
import {
  Download,
  Eye,
  Share2,
  Pencil,
  PlusCircle,
  ShoppingBag,
  Heart,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const CatalogueCard = ({ catalogeDetails, handleIsEditing }) => {
  const ImagesRendering = () => {
    if (catalogeDetails && catalogeDetails.catalogue_image) {
      return (
        <Image
          src={catalogeDetails.catalogue_image}
          alt="Product"
          fill
          className="w-full object-contain hover:scale-105 transition-transform duration-300"
        />
      );
    } else {
      return (
        <div className="bg-gray-300 flex justify-center items-center w-full h-full">
          <p className="text-gray-800 text-center">
            <CommonHeading
              headingText={"Catalogue Name"}
              classNames={"text-center text-md"}
            />
          </p>
        </div>
      );
    }
  };
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200">
      <div className="relative h-48 w-full sm:h-56">
        {ImagesRendering()}
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition">
          <Share2 className="text-gray-400 hover:text-red-500 transition" />
        </button>
      </div>
      <div className="flex items-center justify-between flex-wrap pt-2 m-4">
        <p className="text-center">
          {catalogeDetails?.catalogue_name || "Catalogue Name"}
        </p>
        <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg">
          <ShoppingBag className="text-blue-600 w-4 h-4" />
          <span className="text-xs font-medium text-gray-700">
            {catalogeDetails?.product_count || 0} items added
          </span>
        </div>
        {/* <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
          <Eye className="text-green-600 w-4 h-4" />
          <span className="text-xs font-medium text-gray-700">0 views</span>
        </div> */}
      </div>

      <div className="space-y-3 p-2">
        {/* 2x2 Grid Buttons */}
        <div className="grid grid-cols-2 gap-3">
          {/* Export */}
          <button className="cursor-pointer flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm px-4 py-3 rounded-xl font-medium shadow-sm hover:shadow-md transition">
            <Download className="w-4 h-4" />
            Export
          </button>

          {/* View */}
          <button className="cursor-pointer flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-3 rounded-xl font-medium shadow-sm hover:shadow-md transition">
            <Eye className="w-4 h-4" />
            View
          </button>

          {/* Edit */}
          <button
            onClick={() => handleIsEditing(true)}
            className="cursor-pointer flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm px-4 py-3 rounded-xl font-medium shadow-sm hover:shadow-md transition"
          >
            <Pencil className="w-4 h-4" />
            Edit
          </button>

          {/* Share */}
          <button className="cursor-pointer flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-3 rounded-xl font-medium shadow-sm hover:shadow-md transition">
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>

        {/* Full Width Button */}
        <button className="cursor-pointer w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white text-sm px-4 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md transition">
          <PlusCircle className="w-5 h-5" />
          Add Products
        </button>
      </div>
    </div>
  );
};

export default CatalogueCard;
