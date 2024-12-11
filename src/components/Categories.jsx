import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const { category } = useParams();
  const [allCategories, setAllCategories] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getAllCategory = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const resData = await res.json();
      setAllCategories(resData);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const navigate = useNavigate();

  const onClickCategory = (category) => {
    setSelectedCategory(category);
    navigate(`/listing/${category}`);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleSizeClick = (size) => {
    document.getElementById(`size-${size}`).click();
  };

  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <div>
      <div className="bg-white w-[248px] h-[828px] rounded-[6px] border mt-8">
        <h6 className="ml-5 mt-6 font-medium text-sm">Categories</h6>

        <ul className="w-48 text-sm font-medium text-gray-900 border-b border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ml-5 mt-4">
          {isLoading ? (
            <li className="py-4 text-center text-gray-500 dark:text-gray-400">
              Loading...
            </li>
          ) : (
            allCategories.map((category) => (
              <li
                key={category.id}
                className="w-full border-b border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center ps-3">
                  <input
                    type="radio"
                    name="category"
                    id={category.id}
                    onChange={() => onClickCategory(category)}
                    checked={selectedCategory === category}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor={category.id}
                    className="w-full py-3 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    {category}
                  </label>
                </div>
              </li>
            ))
          )}
        </ul>

        <div className="flex flex-col items-start">
          <h3 className="text-sm font-medium mb-4 mt-14 ml-4">Color</h3>
          <div className="flex gap-[10px] ml-4">
            <div
              onClick={() => handleColorClick("purple")}
              className={`w-[32px] h-[32px] rounded-full cursor-pointer ${
                selectedColor === "purple" ? "ring-2 ring-black" : ""
              }`}
              style={{ backgroundColor: "#A3BEF8" }}
            ></div>

            <div
              onClick={() => handleColorClick("yellow")}
              className={`w-[32px] h-[32px] rounded-full cursor-pointer ${
                selectedColor === "yellow" ? "ring-2 ring-black" : ""
              }`}
              style={{ backgroundColor: "#FFD58A" }}
            ></div>

            <div
              onClick={() => handleColorClick("green")}
              className={`w-[32px] h-[32px] rounded-full cursor-pointer ${
                selectedColor === "green" ? "ring-2 ring-black" : ""
              }`}
              style={{ backgroundColor: "#83B18B" }}
            ></div>

            <div
              onClick={() => handleColorClick("blue")}
              className={`w-[32px] h-[32px] rounded-full cursor-pointer ${
                selectedColor === "blue" ? "ring-2 ring-black" : ""
              }`}
              style={{ backgroundColor: "#4078FF" }}
            ></div>
          </div>
        </div>

        <h6 className="font-medium text-sm mt-14 ml-4">Size</h6>

        <div className="grid grid-cols-4 gap-2 mx-3">
          {sizes.map((size) => (
            <div
              key={size}
              className={`flex items-center justify-center ${
                size === "XXL" ? "col-span-1 mt-4" : ""
              }`}
            >
              <input
                id={`size-${size}`}
                type="checkbox"
                value={size}
                className="hidden"
              />
              <label
                onClick={() => handleSizeClick(size)}
                className="w-10 h-10 flex items-center justify-center text-black bg-gray-100 border-gray-300 rounded cursor-pointer"
              >
                {size}
              </label>
            </div>
          ))}
        </div>

        <h6 className="font-medium text-sm mt-14 ml-4">Price</h6>

        <input
          id="labels-range-input"
          type="range"
          value="1000"
          className="w-[199px] h-[4px] ml-5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
        <button className="bg-black"> </button>
      </div>
    </div>
  );
};

export default Categories;
