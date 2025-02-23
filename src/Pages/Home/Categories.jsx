import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/api/donation/categories");
        if (response.data.success) {
          setCategories(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Categories
        </h1>
        <div className="grid grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link to={`/categories/${category}`} key={index}>
              <div className="bg-gray-100 shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-110">
                <h2 className="text-2xl text-center font-semibold text-black mb-4">
                  {capitalizeFirstLetter(category)}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
