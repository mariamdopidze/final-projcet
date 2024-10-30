import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const Listing = () => {
  const items = [
    { id: "1", label: "Trousers" },
    { id: "2", label: "Shoe" },
    { id: "3", label: "Handbag" },
    { id: "4", label: "Hat" },
    { id: "5", label: "Thermos" },
    { id: "6", label: "Perfume" },
  ];

  const [selectedColor, setSelectedColor] = useState("");

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleSizeClick = (size) => {
    document.getElementById(`size-${size}`).click();
  };

  const products = [
    {
      img: "/images/t-shirt-1.png",
      title: "Classic Monochrome Tees",
      stock: "IN STOCK",
      price: "$ 35.00",
    },
    {
      img: "/images/t-shirt-2.png",
      title: "Monochromatic Wardrobe",
      stock: "STOCK OUT",
      price: "$ 27.00",
    },
    {
      img: "/images/t-shirt-3.png",
      title: "Essential Neutrals",
      stock: "IN STOCK",
      price: "$ 22.00",
    },
    {
      img: "/images/t-shirt-4.png",
      title: "UTRAANET Black",
      stock: "IN STOCK",
      price: "$ 47.00",
    },

    {
      img: "/images/t-shirt-1.png",
      title: "Classic Monochrome Tees",
      stock: "IN STOCK",
      price: "$ 35.00",
    },
    {
      img: "/images/t-shirt-2.png",
      title: "Monochromatic Wardrobe",
      stock: "STOCK OUT",
      price: "$ 27.00",
    },
    {
      img: "/images/t-shirt-3.png",
      title: "Essential Neutrals",
      stock: "IN STOCK",
      price: "$ 22.00",
    },
    {
      img: "/images/t-shirt-4.png",
      title: "UTRAANET Black",
      stock: "IN STOCK",
      price: "$ 47.00",
    },
    {
      img: "/images/t-shirt-4.png",
      title: "UTRAANET Black",
      stock: "IN STOCK",
      price: "$ 47.00",
    },
  ];

  return (
    <div>
      <Discount />
      <Header />
      <div className="bg-neutral-100 w-full  p-4   h-16">
        <div className="flex items-center mx-auto max-w-[1116px]">
          <p>Ecommerce</p>
          <p>Search</p>
        </div>
      </div>
      <div className='"bg-neutral-100 '>
        <div className="flex   justify-items-center  mx-auto max-w-[1116px] ">
          <div className="bg-white w-[248px] h-[828px] rounded-[6px] border mt-8">
            <h6 className="ml-5 mt-6 font-medium text-sm">Categories</h6>

            <ul className="w-48 text-sm font-medium text-gray-900 border-b border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ml-5 mt-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="w-full border-b border-gray-200 dark:border-gray-600"
                >
                  <div className="flex items-center ps-3">
                    <input
                      id={item.id}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor={item.id}
                      className="w-full py-3 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      {item.label}
                    </label>
                  </div>
                </li>
              ))}
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
                  className={`w-[32px] h-[32px] rounded-full cursor-pointer bg-[#FFD58A] ${
                    selectedColor === "yellow" ? "ring-2 ring-black" : ""
                  }`}
                  style={{ backgroundColor: "#FFD58A" }}
                ></div>

                <div
                  onClick={() => handleColorClick("green")}
                  className={`w-[32px] h-[32px] rounded-full cursor-pointer bg-[#83B18B] ${
                    selectedColor === "green" ? "ring-2 ring-black" : ""
                  }`}
                  style={{ backgroundColor: "#83B18B" }}
                ></div>

                <div
                  onClick={() => handleColorClick("blue")}
                  className={`w-[32px] h-[32px] rounded-full cursor-pointer bg-[#4078FF] ${
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
              class="w-[199px] h-[4px] ml-5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 "
            />
            <button className="bg-black"> </button>
          </div>

          <div className=" List mt-8 ml-8">
            <h6 className="font-medium text-sm">Applied Filters:</h6>
            <div className="flex items-center mt-3 gap-3">
              <button className="w-[111px] h-[36px] font-medium text-xs rounded-[100px] border text-center">
                Perfume
                <img
                  src="/images/X.png"
                  alt="image"
                  className="w-[20px] h-[20px] bg-white inline-flex items-center justify-center ml-2"
                />
              </button>
              <button className="w-[104px] h-[36px] font-medium text-xs rounded-[100px] border ">
                Size: M
              </button>
            </div>
            <div className="flex justify-between items-center mt-6">
              <p>Showing 1-9 of 36 results.</p>
              <p>Sort by</p>
            </div>

            <div class="grid grid-rows-3 grid-flow-col gap-4  mt-4">
              {products.map((product, index) => (
                <div key={index}>
                  <div className="w-60 h-80 bg-neutral-100 rounded">
                    <img src={product.img} />
                  </div>
                  <div>
                    <p className="font-medium text-sm mt-3">{product.title}</p>
                    <div className="flex items-center  mt-2 ">
                      <button className="bg-white text-center w-20 h-7 rounded-full border text-xs font-medium mt-3 items-center">
                        {product.stock}
                      </button>
                      <div className="mt-3 ml-2 font-normal text-sm text-center">
                        {product.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Listing;
