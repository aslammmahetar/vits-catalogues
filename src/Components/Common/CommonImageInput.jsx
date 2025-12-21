import { Upload } from "lucide-react";
import React from "react";

const CommonImageInput = ({ id, allow_multiple, onChange }) => {
  return (
    <div className="flex items-center justify-center mb-2 text-center">
      <label htmlFor={id} className="cursor-pointer block">
        <Upload className="mx-auto text-white text-xl w-16 h-16 bg-green-500 rounded-full p-4" />
        <input
          type="file"
          id={id}
          multiple={allow_multiple}
          accept="images/*"
          onChange={onChange}
          className="hidden"
        />
        <p className="text-gray-700 font-medium">Drag and drop photos here</p>
        <p className="text-gray-500 text-sm mt-1">or click to browse files</p>
        <p className="text-gray-400 text-xs mt-2">
          JPEG, PNG, WebP (max 10 photos, 5MB each)
        </p>
      </label>
    </div>
  );
};

export default CommonImageInput;
