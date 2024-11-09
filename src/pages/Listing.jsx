import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Listing = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [allCategories, setAllCategories] = useState([]);

  const getAllCategory = async () => {
    try {
      const res = await fetch(
        'https://fakestoreapi.com/products/categories'
      );
      const resData = await res.json();

      setAllCategories(resData)
    } catch (error) {
      console.log(error);
    }
  };
 
  const [value, setValue] = useState("");
 const navigate = useNavigate();
 

  const onClickCategory = (item) => {
    console.log (item)
    navigate(`/listing?category=${item}`);
  };

  // const items = [
  //   { id: "1", label: "Trousers" },
  //   { id: "2", label: "Shoe" },
  //   { id: "3", label: "Handbag" },
  //   { id: "4", label: "Hat" },
  //   { id: "5", label: "Thermos" },
  //   { id: "6", label: "Perfume" },
  // ];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleSizeClick = (size) => {
    document.getElementById(`size-${size}`).click();
  };

  const [apiData, setApiData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=9");
      const resData = await response.json();
      setApiData(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getAllCategory()
  }, []);

  const pageNumbers = [1, 2, "...", 23, 24];
  const [activePage, setActivePage] = useState(null);

  const handleClick = (number) => {
    setActivePage(number);
  };
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
              {allCategories.map((item) => (
                <li
               
                  key={item.id}
                  className="w-full border-b border-gray-200 dark:border-gray-600"
                >
                  <div className="flex items-center ps-3">
                    <input
                   onChange={()=>onClickCategory(item)}
                      id={item.id}
                      type="radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                   
                      htmlFor={item.id}
                      className="w-full py-3 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      {item}
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
              <button className="w-[111px] h-[36px] font-medium text-xs rounded-[100px] border text-center flex items-center justify-between px-3">
                Perfume
                <img
                  src="/images/X.png"
                  alt="remove"
                  className="w-[20px] h-[20px] bg-white inline-flex items-center justify-center ml-2"
                />
              </button>
              <button className="w-[111px] h-[36px] font-medium text-xs rounded-[100px] border text-center">
                Size: M
              </button>
            </div>

            <div className="flex justify-between items-center mt-6">
              <p>Showing 1-9 of 36 results.</p>
              <p>Sort by</p>
            </div>

            <div class="grid grid-rows-3 grid-flow-col gap-4  mt-4">
              {apiData.map((product, index) => (
                 <Link key={index} to={`/product/${product.id}`}>
                <div key={index}>
                  <div className="w-60 h-80 bg-neutral-200 rounded flex items-center">
                    <img src={product.image} className="w-40 h-40 mx-auto" />
                  </div>
                  <div>
                    <p className="font-medium text-sm mt-3">{product.title}</p>
                    <div className="flex items-center  mt-2 ">
                      <button className="bg-white text-center w-20 h-7 rounded-full border text-xs font-medium mt-3 items-center">
                        {product.rating.count === 0
                          ? "Out of Stock"
                          : product.rating.count < 5
                          ? "Low Stock"
                          : "In Stock"}
                      </button>
                      <div className="mt-3 ml-2 font-normal text-sm text-center">
                        {product.price}
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex  mx-auto max-w-[1116px]">
        <nav aria-label="Page navigation example" className="mt-[34px] ">
          <ul className="flex items-center space-x-1 h-8 text-sm justify-end">
            <li>
              <a
                href="#"
                className="flex items-center justify-center border-[#E9E9EB] px-3 h-8 leading-tight text-gray-500 bg-white hover:text-gray-700"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                  aria-hidden="true"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </a>
            </li>

            {pageNumbers.map((number) => (
              <li key={number}>
                <a
                  href="#"
                  onClick={() => handleClick(number)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${
                    activePage === number
                      ? "text-[#0E1422] bg-[#F6F6F6] z-10"
                      : "text-gray-500 bg-white hover:text-gray-700"
                  }`}
                  aria-current={activePage === number ? "page" : undefined}
                >
                  {number}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 hover:text-gray-700"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                  aria-hidden="true"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <Footer />
    </div>
  );
};

export default Listing;
