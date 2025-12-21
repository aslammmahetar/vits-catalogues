import NegativeButton from "@/Components/Common/Buttons/NegativeButton";
import PositivetButton from "@/Components/Common/Buttons/PositivetButton";
import CommonImageInput from "@/Components/Common/CommonImageInput";
import { cmnRegInput, cmnlabel } from "@/common/commoncss";
import React from "react";

const CreateCatForm = ({
  handleSingleFileSelect,
  catalogue_name,
  handleChange,
  loading,
  handleCreate,
}) => {
  return (
    <div>
      <div
        className={`border-2 border-gray-300 border-dashed rounded-xl text-center mb-6 transition-all duration-300 p-5`}
      >
        <CommonImageInput
          id={"catalogue_image"}
          allow_multiple={false}
          onChange={handleSingleFileSelect}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className={`${cmnlabel} font-medium`}>Catalogue Name</label>
        <input
          type="text"
          name="catalogue_name"
          placeholder="Enter catalogue name"
          value={catalogue_name}
          onChange={(e) => handleChange(e)}
          className={`${cmnRegInput} focus:ring-2 focus:ring-blue-500`}
        />
        <span className="text-xs text-gray-500">
          This name will be visible to customers
        </span>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-end">
          <PositivetButton
            className={"text-center"}
            text={loading ? "Creating..." : "Create Catalogue"}
            onClick={handleCreate}
            disabled={loading}
          />
          <NegativeButton text="Cancel" />
        </div>
      </div>
    </div>
  );
};

export default CreateCatForm;
