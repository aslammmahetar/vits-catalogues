import NegativeButton from "@/Components/Common/Buttons/NegativeButton";
import NeutralButton from "@/Components/Common/Buttons/NeutralButton";
import PositivetButton from "@/Components/Common/Buttons/PositivetButton";
import React, { useState } from "react";
import { cmnRegInput, cmnlabel } from "@/common/commoncss";
import CommonImageInput from "@/Components/Common/CommonImageInput";
import CommonHeading from "@/Components/Common/FirmAdmin/CommonHeading";
import CommonDivider from "@/Components/Common/CommonDivider";

const ProductForm = ({
  productDetails,
  handleInputChange,
  handleFileSelect,
  handleAddProduct,
  loading,
}) => {
  const [catalogue_name, setCatalogue_name] = useState("");
  return (
    <div>
      <CommonHeading
        headingText={`Add Products In ${catalogue_name || "Catalogue"}`}
      />
      <CommonDivider />
      <div
        className={`border-2 border-gray-300 border-dashed rounded-xl text-center mb-6 transition-all duration-300 p-5`}
      >
        <CommonImageInput
          id={"product_images"}
          allow_multiple={true}
          onChange={handleFileSelect}
        />
      </div>
      <div>
        <div className="flex gap-4 flex-wrap mb-3">
          <div className="flex flex-col flex-1 space-y-2">
            <label className={cmnlabel}>Product Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Product name"
              value={productDetails.name}
              onChange={(e) => handleInputChange(e)}
              className={cmnRegInput}
            />
          </div>
          <div className="flex flex-col flex-1 space-y-2">
            <label className={cmnlabel}>Product Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter Product Price"
              value={productDetails.price}
              onChange={(e) => handleInputChange(e)}
              className={cmnRegInput}
            />
          </div>
        </div>
        <div className="flex gap-4 flex-wrap mb-3">
          <div className="flex flex-col flex-1 space-y-2">
            <label className={cmnlabel}>Product Category</label>
            <input
              type="text"
              name="category"
              placeholder="Enter Product Category"
              value={productDetails.category}
              onChange={(e) => handleInputChange(e)}
              className={cmnRegInput}
            />
          </div>
          <div className="flex flex-col flex-1 space-y-2">
            <label className={cmnlabel}>Available Stock (optional)</label>
            <input
              type="number"
              name="stock_quantity"
              placeholder="Enter availalble stock"
              value={productDetails.stock_quantity}
              onChange={(e) => handleInputChange(e)}
              className={cmnRegInput}
            />
          </div>
        </div>
        <div className="flex gap-4 flex-wrap mb-3">
          <div className="flex flex-col flex-1 space-y-2">
            <label className={cmnlabel}>Description (optional)</label>
            <textarea
              type="text"
              name="description"
              rows={3}
              placeholder="Enter description about product..."
              value={productDetails.description}
              onChange={(e) => handleInputChange(e)}
              className={cmnRegInput}
            />
          </div>
        </div>
        <div className="flex gap-2 w-full justify-center mt-7">
          <NegativeButton text={"Cancel"} />
          <NeutralButton text={"Reset"} />
          <PositivetButton
            text={loading ? "Uploading..." : "Upload"}
            onClick={handleAddProduct}
            disabled={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
