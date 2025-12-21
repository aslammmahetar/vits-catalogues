"use client";
import { cmnCard } from "@/common/commoncss";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import ProductForm from "./ProductForm";
import ProductPreview from "./ProductPreview";
import { useAuthStore } from "@/store/useAuthStore";
import { ProductsServices } from "@/lib/services/ProductsServices";
import { enProductsReqType } from "@/lib/utils";
import { useAPI } from "@/lib/useApi";
import CreateCatalogue from "../CreateCatalogue/CreateCatalogue";
import CommonDivider from "@/Components/Common/CommonDivider";
import CataloguesSections from "../CreateCatalogue/CataloguesSections";

const ProductPage = () => {
  const user = useAuthStore((store) => store.user);
  const { loading, error, request } = useAPI();
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: 0,
    category: "",
    stock_quantity: 0,
    description: "",
  });
  const [images, setImages] = useState([]);
  const handleAddProduct = async () => {
    try {
      const formData = new FormData();
      formData.append(
        "data",
        JSON.stringify({ ...productDetails, ownerid: user?.id })
      );
      images.forEach((file) => formData.append("images", file.file));

      const add = await request(() =>
        ProductsServices(enProductsReqType.addProduct, "", formData)
      );
      if (add.status === "fail" || add.message === "Network Error") {
        toast.error(add.message);
        return;
      }
      toast.success(add.message);
    } catch (err) {
      console.log(err);
      const msg =
        err?.response?.data?.message || err?.message || "Something went wrong";
      toast.error(msg);
    }
  };
  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    if (!files.length) return;

    setImages((prev) => {
      const newImages = files.map((file, index) => ({
        file,
        preview: URL.createObjectURL(file),
        alt: `Product image ${prev.length + index + 1}`,
        isMain: prev.length === 0 && index === 0,
      }));

      const updated = [...prev, ...newImages];

      return updated.map((img, i) => ({
        ...img,
        isMain: i === 0,
      }));
    });

    e.target.value = "";
  };

  const handleInputChange = (e) => {
    setProductDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <CreateCatalogue />
      <CataloguesSections />
      {/* <div
        className={`${cmnCard} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 p-4`}
      >
        <ProductForm
          productDetails={productDetails}
          handleInputChange={handleInputChange}
          handleFileSelect={handleFileSelect}
          handleAddProduct={handleAddProduct}
          loading={loading}
        />
        <ProductPreview images={images} productDetails={productDetails} />
        <CommonDivider />
      </div> */}
    </>
  );
};

export default ProductPage;
