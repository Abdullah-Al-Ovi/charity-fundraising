import React from "react";

const CategoryWiseDonation = ({ donation }) => {
  const { title, image, description, status } = donation;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 mt-2">
          {description && description?.length > 80
            ? `${description.substring(0, 80)}...`
            : description}
        </p>

        <p
          className={`mt-3 px-4 py-1 inline-block text-sm font-semibold rounded-full ${
            status === "running"
              ? "bg-green-200 text-green-800"
              : status === "closed"
              ? "bg-red-200 text-red-800"
              : "bg-yellow-200 text-yellow-800"
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default CategoryWiseDonation;
