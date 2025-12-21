const CatalogueCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 animate-pulse overflow-hidden">
      {/* Image Skeleton */}
      <div className="h-48 sm:h-56 bg-gray-200" />

      <div className="p-4 space-y-4">
        {/* Title */}
        <div className="h-4 w-2/3 bg-gray-200 rounded" />

        {/* Stats */}
        <div className="flex justify-between">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="h-4 w-20 bg-gray-200 rounded" />
        </div>

        {/* Buttons (2x2 grid) */}
        <div className="grid grid-cols-2 gap-3">
          <div className="h-10 bg-gray-200 rounded-xl" />
          <div className="h-10 bg-gray-200 rounded-xl" />
          <div className="h-10 bg-gray-200 rounded-xl" />
          <div className="h-10 bg-gray-200 rounded-xl" />
        </div>

        {/* Add Product Button */}
        <div className="h-12 bg-gray-300 rounded-xl" />
      </div>
    </div>
  );
};

export default CatalogueCardSkeleton;
