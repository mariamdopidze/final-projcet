import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Addedcart from "../components/Addedcart";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useParams } from "react-router-dom";
import Tabdetail from "../components/Tabdetail";




const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const [apiData, setApiData] = useState([]);
  const [detailsData, setDetailsData] = useState([]);

  
  const getData = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const resData = await response.json();
      setDetailsData(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();

    window.scrollTo({
      top: 0
    })
  }, [id]);

  console.log(detailsData);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [selectedColor, setSelectedColor] = useState("");

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const getDataproduct = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=4");
      const resData = await response.json();
      setApiData(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataproduct();
  }, []);

  const handleProductClick = (product) => {
    alert(`Viewing details for: ${product.title}`);
  };

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  const handleReviewsClick = () => {
    console.log("Navigating to reviews ");
  };

  const handleStockInfo = () => {
    alert("Product is in stock. ");
  };

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);

    alert(`You clicked ${buttonName}`);
  };

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div>
      <Discount />
      <Header />
      <div className="bg-white">
        <div className="flex items-center mx-auto max-w-[1116px]">
          <p className="font-medium text-sm">Ecommerce </p>
        </div>

        <div className="bg-white rounded mx-auto max-w-[1116px] mt-4">
          <div className="flex justify-between">
            <div className="w-[534px] h-[574px] bg-neutral-100">
              <Swiper pagination={true} modules={[Pagination]}>
                <SwiperSlide>
                  <img
                    src={detailsData.image}
                    className="mx-auto pt-20 w-[288px] h-[404px]"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="flex flex-col items-start mr-30 w-[438px] h-[562px] ">
              <div className="flex items-center">
                <h3 className="font-bold text-2xl ">{detailsData.title}</h3>
                <img
                  src="/images/Vector.png"
                  className="w-[16px] h-[18px] mt-3 ml-[119px]"
                />
              </div>
              <div className="flex space-x-3 mt-3">
                <button
                  onClick={handleReviewsClick}
                  className="w-[167px] h-[28px] border rounded-[100px] bg-neutral-100 font-medium text-xs flex items-center px-4 transition duration-300 hover:bg-neutral-200"
                  aria-label="View reviews"
                >
                  <img
                    src="/images/star.png"
                    alt="Rating Star"
                    className="w-[16px] h-[15px]"
                  />
                  <span className="ml-[8px]">- Reviews</span>
                </button>

                <button
                  onClick={handleStockInfo}
                  className="w-[89px] h-[28px] rounded-[100px] border text-xs font-medium px-4 transition duration-300 hover:bg-red-100"
                  aria-label="Check stock status"
                >
                  IN STOCK
                </button>
              </div>
              <h4 className="font-semibold text-lg mt-[24px] text-[#0E1422]">
                {detailsData.price}
              </h4>

              <div className="flex flex-col ">
                <div className="flex flex-col items-start">
                  <h3 className="text-sm text-[#5C5F6A] mt-[32px]font-medium mb-4">
                    Available Colors
                  </h3>
                  <div className="flex gap-[10px]">
                    <div
                      onClick={() => handleColorClick("purple")}
                      className={`w-[32px] h-[32px] rounded-full cursor-pointer ${
                        selectedColor === "purple" ? "ring-2 ring-black" : ""
                      }`}
                      style={{ backgroundColor: "#A3BEF8" }}
                    ></div>

                    <div
                      onClick={() => handleColorClick("yellow")}
                      className={`w-[32px] h-[32px] rounded-full cursor-pointerbg-[#FFD58A] ${
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
                  </div>
                </div>

                <h6 className="mt-4 text-xs font-medium">Select Size</h6>
                <div class="flex mt-2.5">
                  {sizes.map((size, index) => (
                    <div key={index} className="flex items-center me-4">
                      <input
                        id={`size-${size}`}
                        type="checkbox"
                        value={size}
                        className="hidden"
                      />

                      <label
                        htmlFor={`size-${size}`}
                        className="w-10 h-10 flex items-center justify-center text-black bg-gray-100 border-gray-300 rounded cursor-pointer"
                      >
                        {size}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <h6 className="font-medium text-xs">Quantity</h6>
                  <div className="flex mt-2.5">
                    <div className="flex items-center border rounded-[4px] bg-neutral-100 w-[164px] h-[44px]">
                      <button
                        onClick={decrement}
                        className="w-8 h-8 text-lg text-black flex items-center justify-center"
                      >
                        -
                      </button>
                      <span className="w-full text-center">{quantity}</span>
                      <button
                        onClick={increment}
                        className="w-8 h-8 text-lg text-black flex items-center justify-center"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <Addedcart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tabdetail />

      <div>
        <div className="flex mx-auto max-w-[1116px]">
          <div>
            <h3 className="mt-[136px] font-bold text-[#0E1422] text-2xl">
              You might also like
            </h3>
            <span className="mt-[8px] font-medium text-[#878A92] text-xs">
              SIMILAR PRODUCTS
            </span>
            <div className="grid grid-rows-1 grid-flow-col gap-4 max-w-[1116px] mx-auto mt-20">
              {apiData.map((product, index) => (
                <Link key={index} to={`/product/${product.id}`}>
                  <div className="text-center">
                    <div className="w-[237px] h-[312px] bg-[#F6F6F6] rounded overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-lg duration-300 mx-auto flex items-center justify-center">
                      <img
                        src={product.image}
                        className="w-40 h-40 object-contain"
                        alt={product.title}
                      />
                    </div>
                    <div className="mt-3">
                      <p className="font-medium text-sm">{product.title}</p>
                      <div className="mt-2">
                        <button className="bg-white w-20 h-7 rounded-full border text-xs font-medium">
                          {product.rating.count === 0
                            ? "Out of Stock"
                            : "In Stock"}
                        </button>
                        <div className="mt-3 ml-2 font-normal text-sm inline-block">
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
      <Footer />
    </div>
  );
};

export default ProductDetail;
