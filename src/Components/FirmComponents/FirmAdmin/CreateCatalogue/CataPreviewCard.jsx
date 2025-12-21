import CommonHeading from "@/Components/Common/FirmAdmin/CommonHeading";
import { ImageMinusIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

const CataPreviewCard = ({ image, cataloagueName }) => {
  useEffect(() => {
    console.log(image);
  }, [image]);
  return (
    <div className="px-4 md:px-10 lg:px-36">
      <CommonHeading
        headingText="Catalogue Preview"
        classNames="text-center mb-8"
      />

      <div className="group max-w-sm mx-auto rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
        {/* Image Section */}
        <div className="relative h-48 sm:h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
          {image && image.length > 0 ? (
            <>
              <Image
                src={image[0].preview}
                alt="Catalogue"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-400">
              <ImageMinusIcon className="w-10 h-10 mb-2" />
              <span className="text-sm">No image uploaded</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="px-4 py-5 text-center">
          <p className="text-lg font-semibold text-gray-800 tracking-wide">
            {cataloagueName || "Catalogue Name"}
          </p>
          <p className="text-xs text-gray-500 mt-1">Tap to preview catalogue</p>
        </div>
      </div>
    </div>
  );
};

export default CataPreviewCard;
