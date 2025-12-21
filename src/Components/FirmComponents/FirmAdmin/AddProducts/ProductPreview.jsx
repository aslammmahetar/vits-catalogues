import CommonHeading from "@/Components/Common/FirmAdmin/CommonHeading";
import React from "react";
import ProductCard from "./ProductCard";

const ProductPreview = ({ images, productDetails }) => {
  return (
    <div className="px-0 md:px-10 lg:px-20">
      <CommonHeading
        headingText={"Product Preivew"}
        classNames={"text-center"}
      />
      <ProductCard images={images} productDetails={productDetails} />
    </div>
  );
};

export default ProductPreview;
