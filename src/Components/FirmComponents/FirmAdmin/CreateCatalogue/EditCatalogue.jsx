import CommonImageInput from "@/Components/Common/CommonImageInput";
import React, { useState } from "react";
import { ImageMinusIcon, Save } from "lucide-react";
import Image from "next/image";
import { cmnRegInput, cmnlabel } from "@/common/commoncss";
import PositivetButton from "@/Components/Common/Buttons/PositivetButton";
import NegativeButton from "@/Components/Common/Buttons/NegativeButton";

const EditCatalogue = () => {
  const [image, setImage] = useState([]);
  const handleSingleFileSelect = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    if (!files.length) return;

    setImage((prev) => {
      const newImage = files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        alt: `Catalogue image`,
      }));

      prev = newImage;
      console.log(prev);
      return prev;
    });

    e.target.value = "";
  };
  return (
    <div>
      <CommonImageInput
        id={"edit_catalogue"}
        onChange={handleSingleFileSelect}
        allow_multiple={false}
      />
      <div className="mt-5 group max-w-sm mx-auto rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
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
      </div>
      <div className="flex flex-col flex-1 space-y-2 mx-auto w-sm mt-2">
        <label className={cmnlabel}>Catalogue Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Catalogue Name"
          // value={productDetails.name}
          // onChange={(e) => handleInputChange(e)}
          className={cmnRegInput}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
        <NegativeButton text="Cancel" />
        <PositivetButton
          className={"text-center flex items-center gap-1"}
          icon={<Save />}
          text={`Save Changes`}
          //   text={loading ? "Creating..." : "Create Catalogue"}
          //   onClick={handleCreate}
          //   disabled={loading}
        />
      </div>
    </div>
  );
};

export default EditCatalogue;
