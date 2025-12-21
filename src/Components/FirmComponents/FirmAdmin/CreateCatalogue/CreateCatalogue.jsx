import React, { useState } from "react";
import CommonDivider from "@/Components/Common/CommonDivider";
import CreateCatForm from "./CreateCatForm";
import CataPreviewCard from "./CataPreviewCard";
import { useCatalogueStore } from "@/store/useCatalogueStore";
import { useAuthStore } from "@/store/useAuthStore";
import { cmnCard } from "@/common/commoncss";
import CommonHeading from "@/Components/Common/FirmAdmin/CommonHeading";
import { toast } from "react-hot-toast";

const CreateCatalogue = () => {
  const loading = useCatalogueStore((store) => store.loading.createCatalogue);
  const createCatalogue = useCatalogueStore((store) => store.createCatalogue);
  const user = useAuthStore((store) => store.user);
  const [image, setImage] = useState([]);
  const [catalogue_name, setCatalogue_name] = useState("");

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

  const handleCreate = async () => {
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({ catalogue_name, owner_id: user?.id })
    );
    image.forEach((file) => formData.append("images", file.file));
    console.log(formData.get("data"), formData.get("images"));
    // return;
    const res = await createCatalogue(formData);

    if (res.status === "fail") {
      toast.error(res.message);
    } else {
      toast.success(res.message);
    }
  };
  const handleChange = (e) => {
    setCatalogue_name(e.target.value);
  };
  return (
    <div className={`${cmnCard} p-5 sm:p-6`}>
      <CommonHeading headingText={`Create New Catalogue`} />
      <CommonDivider />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CreateCatForm
          handleSingleFileSelect={handleSingleFileSelect}
          catalogue_name={catalogue_name}
          handleChange={handleChange}
          handleCreate={handleCreate}
          loading={loading}
        />
        <CataPreviewCard image={image} cataloagueName={catalogue_name} />
      </div>
      <CommonDivider />
    </div>
  );
};

export default CreateCatalogue;
