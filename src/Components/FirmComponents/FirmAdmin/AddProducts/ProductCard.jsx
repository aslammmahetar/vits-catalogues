import {
  Eye,
  Heart,
  ImageMinusIcon,
  MapPin,
  MessageCircleDashedIcon,
  Phone,
  ShoppingBag,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import Image from "next/image";
import ProductImageCarousel from "@/Components/ProductComponents/ProductSwiper";

const ProductCard = ({ images, productDetails }) => {
  const ImagesRendering = () => {
    if (images && images.length === 1) {
      console.log(images);
      return (
        <Image
          src={images[0].preview}
          alt="Product"
          fill
          className="w-full object-contain hover:scale-105 transition-transform duration-300"
        />
      );
    } else if (images && images.length > 1) {
      console.log(images);
      return <ProductImageCarousel images={images} />;
    } else {
      console.log(images);
      return (
        <div className="bg-gray-300 flex justify-center items-center w-full h-full">
          <p className="text-gray-800 text-center">
            <ImageMinusIcon className="text-gray-500 ml-5" /> No Image
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
          <Heart className="text-gray-400 hover:text-red-500 transition" />
        </button>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex justify-between items-center">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 line-clamp-1 hover:text-blue-700 transition">
            {productDetails.name || "Product Name"}
          </h3>
          <span className="text-xl sm:text-2xl font-bold text-blue-700">
            ₹ {productDetails.price || 0}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-1">
          {productDetails.description || "Product description"}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-lg">
            <ShoppingBag className="text-blue-600 w-4 h-4" />
            <span className="text-xs font-medium text-gray-700">
              {productDetails.stock || 0} Items available
            </span>
          </div>
          <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
            <Eye className="text-green-600 w-4 h-4" />
            <span className="text-xs font-medium text-gray-700">0 views</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link
              href="https://wa.me/7405327432"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-3 rounded-xl font-medium shadow-sm hover:shadow-md"
            >
              <MessageCircleDashedIcon className="w-4 h-4" />
              WhatsApp
            </Link>

            <Link
              href="tel:7405327432"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-3 rounded-xl font-medium shadow-sm hover:shadow-md"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </Link>
            <Link
              href="tel:7405327432"
              className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white text-sm px-4 py-3 rounded-xl font-medium shadow-sm hover:shadow-md"
            >
              <Eye className="w-4 h-4" />
              View Details
            </Link>
          </div>

          {/* <button className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white text-sm px-4 py-3 rounded-xl font-medium shadow-sm hover:shadow-md">
            <Eye className="w-4 h-4" />
            View Details
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
