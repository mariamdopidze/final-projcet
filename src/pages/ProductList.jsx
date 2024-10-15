import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const ProductList = () => {
  const [quantity, setQuantity] = useState(1);

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
  ];

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
                    src="/images/t-shirt-4.png"
                    className="mx-auto pt-20 w-[288px] h-[404px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/t-shirt-4.png"
                    className="mx-auto pt-20 w-[288px] h-[404px]"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="flex flex-col items-start mr-30 w-[438px] h-[562px] ">
              <div className="flex items-center">
                <h3 className="font-bold text-2xl ">
                  Raw Black T-Shirt Lineup
                </h3>
                <img
                  src="/images/Vector.png"
                  className="w-[16px] h-[18px] mt-3 ml-[119px]"
                />
              </div>
              <div className="flex space-x-3 mt-3">
                <button className="w-[167px] h-[28px] border rounded-[100px] bg-neutral-100 font-medium text-xs flex items-center px-4">
                  <img src="/images/star.png" className="w-[16px] h-[15px]" />
                  <span className="ml-[8px]">4.2 — 54 Reviews</span>
                </button>
                <button className="w-[89px] h-[28px] rounded-[100px] border text-xs font-medium px-4 ">
                  IN STOCK
                </button>
              </div>
              <h4 className="font-semibold text-lg mt-[24px] text-[#0E1422]">
                $75.00
              </h4>

              <div className="flex flex-col ">
                <div className="flex flex-col items-start">
                  <h3 className="text-sm text-[#5C5F6A] mt-[32px]font-medium mb-4">Available Colors</h3>
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
                  <div class="flex items-center me-4">
                    <input
                      id="size-s"
                      type="checkbox"
                      value="S"
                      class="hidden"
                    />
                    <label
                      for="size-s"
                      class="w-10 h-10 flex items-center justify-center text-black bg-gray-100 border-gray-300 rounded cursor-pointer"
                    >
                      S
                    </label>
                  </div>
                  <div class="flex items-center me-4">
                    <input
                      id="size-s"
                      type="checkbox"
                      value="S"
                      class="hidden"
                    />
                    <label
                      for="size-s"
                      class="w-10 h-10 flex items-center justify-center text-black bg-gray-100 border-gray-300 rounded cursor-pointer"
                    >
                      M
                    </label>
                  </div>
                  <div class="flex items-center me-4">
                    <input
                      id="size-s"
                      type="checkbox"
                      value="S"
                      class="hidden"
                    />
                    <label
                      for="size-s"
                      class="w-10 h-10 flex items-center justify-center text-black bg-gray-100 border-gray-300 rounded cursor-pointer"
                    >
                      L
                    </label>
                  </div>
                  <div class="flex items-center me-4">
                    <input
                      id="size-s"
                      type="checkbox"
                      value="S"
                      class="hidden"
                    />
                    <label
                      for="size-s"
                      class="w-10 h-10 flex items-center justify-center text-black bg-gray-100 border-gray-300 rounded cursor-pointer"
                    >
                      XL
                    </label>
                  </div>
                  <div class="flex items-center me-4">
                    <input
                      id="size-s"
                      type="checkbox"
                      value="2XL"
                      class="hidden"
                    />
                    <label
                      for="size-s"
                      class="w-10 h-10 flex items-center justify-center text-black bg-gray-100 border-gray-300 rounded cursor-pointer"
                    >
                      XXL
                    </label>
                  </div>
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

                <div className="flex space-x-4 mt-10">
                  <button className="w-[284px] h-[44px] rounded-[4px] bg-black text-white font-medium text-sm">
                    Add to cart
                  </button>

                  <button className="w-[43px] h-[43px] rounded-[4px] border-2 border-neutral-100 flex items-center justify-center">
                    <img src="images/Heart.png" className="w-[17px] h-[14px]" />
                  </button>
                </div>

                <p className="font-medium taxt-xs mt-3">
                  — Free shipping on orders $100+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="flex mx-auto max-w-[1116px]">
          <div className="flex flex-col space-y-4 mt-60">
            <button className="w-[241px] h-[41px] rounded-[8px] bg-neutral-100 text-sm font-medium">
              Details
            </button>
            <button className="w-[241px] h-[41px] rounded-[8px] bg-neutral-100 text-sm font-medium">
              Reviews
            </button>
          </div>

          <div className="flex flex-col ml-8 mt-44">
            <h4 className="w-[45px] h-[19px] font-semibold text-base">
              Detail
            </h4>
            <p className="font-normal text-sm mt-6 max-w-[727px] ">
              Elevate your everyday style with our Men's Black T-Shirts, the
              ultimate wardrobe essential for modern men. Crafted with
              meticulous attention to detail and designed for comfort, these
              versatile black tees are a must-have addition to your collection.
              The classic black color never goes out of style. Whether you're
              dressing up for a special occasion or keeping it casual, these
              black t-shirts are the perfect choice, effortlessly complementing
              any outfit.
            </p>

            <ul className="mt-14 font-normal text-sm space-y-2">
              <li>Premium Quality</li>
              <li>Versatile Wardrobe Staple</li>
              <li>Available in Various Sizes</li>
              <li>Tailored Fit</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div className="flex mx-auto max-w-[1116px]">
          <div>
            <div class="grid grid-rows-1 grid-flow-col gap-4 max-w-[1116px] mx-auto mt-20">
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

export default ProductList;
