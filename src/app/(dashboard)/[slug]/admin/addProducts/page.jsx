"use client";
import ProductPage from "@/Components/FirmComponents/FirmAdmin/AddProducts/ProductPage";
import { cmnAdminBg } from "@/common/commoncss";
import Image from "next/image";
import React, { useState } from "react";

const AddProduct = () => {
  const [products, setProducts] = useState([]);
  return (
    <main className={`${cmnAdminBg} p-0 md:p-0 space-y-3`}>
      <ProductPage />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded-xl shadow">
            <Image
              src={p.image}
              alt={p.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2">{p.name}</h2>
            <p className="text-gray-700">₹{p.price}</p>
            <p className="text-sm text-gray-500">{p.category}</p>
            <button
              onClick={() => deleteProduct(p.id)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AddProduct;
