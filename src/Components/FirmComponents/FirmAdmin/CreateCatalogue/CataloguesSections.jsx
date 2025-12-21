"use client";
import CommonHeading from "@/Components/Common/FirmAdmin/CommonHeading";
import { cmnCard } from "@/common/commoncss";
import React, { useEffect, useState } from "react";
import NoCatalogue from "./NoCatalogue";
import CatalogueCard from "./CatalogueCard";
import { useCatalogueStore } from "@/store/useCatalogueStore";
import { useAuthStore } from "@/store/useAuthStore";
import CatalogueCardSkeleton from "@/Components/Skeleton/CatalogueCardSkeleton";
import { toast } from "react-hot-toast";
import CommonDialogue from "@/Components/Common/CommonDialogue";
import EditCatalogue from "./EditCatalogue";

const CataloguesSections = () => {
  const user = useAuthStore((store) => store.user);
  const owner_id = user?.id;
  const [catalogues, setCatalogues] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const getCatalogues = useCatalogueStore((store) => store.getCatalogues);
  const loading = useCatalogueStore((store) => store.loading.getCatalogues);

  useEffect(() => {
    if (!owner_id) return;

    let cancelled = false;

    (async () => {
      const cats = await getCatalogues(`owner_id=${owner_id}`);
      if (cancelled) return;

      if (cats.status === "fail") {
        toast.error(cats.message || "Error Occured!");
      } else {
        toast.success(cats.message);
        setCatalogues(cats.catalogues);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [owner_id]);

  const handleIsEditing = (bool) => {
    setIsEditing(bool);
  };
  return (
    <div className={`${cmnCard} p-5 sm:p-6`}>
      <CommonHeading headingText="Existing Catalogues" />
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, index) => (
            <CatalogueCardSkeleton key={index} />
          ))}
        </div>
      ) : catalogues?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {catalogues?.map((catalogue) => (
            <CatalogueCard
              key={catalogue.catalogue_id}
              catalogeDetails={catalogue}
              handleIsEditing={handleIsEditing}
            />
          ))}
        </div>
      ) : (
        <NoCatalogue />
      )}
      {isEditing && (
        <CommonDialogue
          isOpen={isEditing}
          onClose={() => handleIsEditing(false)}
          headingText={"Edit Catalogue Details"}
        >
          <EditCatalogue />
        </CommonDialogue>
      )}
    </div>
  );
};

export default CataloguesSections;
