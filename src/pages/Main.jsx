import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = () => {
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

  const newProducts = [
    {
      img: "/images/first.png",
      title: "Elegant Ebony Sweatshirts",
      stock: "IN STOCK",
      price: "$ 60.00",
    },
    {
      img: "/images/second.png",
      title: "Sleek and Cozy Black",
      stock: "STOCK OUT",
      price: "$ 120.00",
    },
    {
      img: "/images/thirst.png",
      title: "Raw Black Tees",
      stock: "IN STOCK",
      price: "$ 85.00",
    },
    {
      img: "/images/four.png",
      title: "MOCKUP Black",
      stock: "IN STOCK",
      price: "$ 85.00",
    },
  ];

  return (
    <div>
       <Discount />
       <Header />
      <div className="bg-neutral-100  py-18">
        <div className="flex items-center mx-auto max-w-[1116px]">
          <div className="lg:w-1/2">
            <h2 className="text-2xl text-black mb-6 font-semibold">
              Fresh Arrivals Online
            </h2>
            <p className="text-lg text-gray-800 mb-10 font-normal mt-3">
              Discover Our Newest Collection Today.
            </p>
            <button className="bg-black text-white rounded px-4 py-2 flex items-center h-[44px] top-[260px] left-[182px] p-[12px_24px] gap-[6px] mt-12">
              View Collection
              <img src="/images/arrow.png" className="ml-2 mt-1" alt="arrow" />
            </button>
          </div>

          <div className="lg:w-1/2 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src="/images/Hero Image.png"
              alt="Product"
              className="absolute w-64 h-80 rounded-lg shadow-lg"
            />
            <div className="w-80 h-80 bg-neutral-200 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="items-center mx-auto max-w-[1116px]">
          <div className="grid grid-rows-1 grid-flow-col gap-4 w-auto ">
            <div>
              <img src="/images/Icon 1.png" alt="img" className="" />
              <h4 className="text-base font-semibold mt-2">Free Shipping</h4>
              <p className="mt-3 max-w-[270px]">
                Upgrade your style today and get FREE shipping on all orders!
                Don't miss out.
              </p>
            </div>

            <div>
              <img src="/images/Icon 2.png" alt="img" className="" />
              <h4 className="text-base font-semibold mt-2">
                Satisfaction Guarantee
              </h4>
              <p className="mt-3 max-w-[270px]">
                Shop confidently with our Satisfaction Guarantee: Love it or get
                a refund.
              </p>
            </div>

            <div className="">
              <img src="/images/Icon 3.png" alt="img" className="" />
              <h4 className="text-base font-semibold mt-2">Secure Payment</h4>
              <p className="mt-3 max-w-[270px]">
                Your security is our priority. Your payments are secure with us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-full mt-20">
        <p className="font-medium text-xs ">shop now</p>
        <h4 className="font-bold text-base mt-2">Best Selling</h4>
      </div>



      <div>
        <div class="grid grid-rows-1 grid-flow-col gap-4 max-w-[1116px] mx-auto mt-20">
          {products.map((product, index) => (
            <div key={index}>
              <div className="w-60 h-80 bg-neutral-100 rounded">
                <img src={product.img} />
              </div>
              <div>
                <p className="font-medium text-sm mt-3">
                  {product.title}
                </p>
                <div className="flex items-center  mt-2 ">
                <button className="bg-white text-center w-20 h-7 rounded-full border text-xs font-medium mt-3 items-center">
                 {product.stock}
                </button>
                <div className="mt-3 ml-2 font-normal text-sm text-center">{product.price}</div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <div className="bg-neutral-100 mt-40 h-80">
        <div className="mx-auto max-w-[1116px]">
          <div className="flex justify-between items-center">
            <div>
              <h2 className=" font-bold text-2xl mt-14">
                Browse Our Fashion Paradise!
              </h2>
              <p className="font-normal text-sm mt-6">
                Step into a world of style and explore our diverse collection of
                clothing categories.
              </p>
              <button className=" flex items-center pl-6 w-44 h-11 bg-black text-white rounded mt-8">
                Start Browsing
                <img
                  src="/images/arrow.png"
                  className="ml-2 mt-1"
                  alt="arrow"
                />
              </button>
            </div>

            <img
              src="/images/category_image.png"
              className="w-[200px] ml-96"
              alt="image"
            />
          </div>
        </div>
      </div>

      <div className="flex  items-center justify-center gap-6 mt-40">
        <button className="w-24 h-8 border rounded-full font-medium  text-sm">
          Featured
        </button>
        <button className="text-sm font-normal w-24 h-8 border rounded-full">Best Selling</button>
      </div>
      
<div>
        <div class="grid grid-rows-1 grid-flow-col gap-4 max-w-[1116px] mx-auto mt-14">
          {newProducts.map((product, index) => (
            <div key={index}>
              <div className="w-60 h-80 bg-neutral-100 rounded">
                <img src={product.img} />
              </div>
              <div>
                <p className="font-medium text-sm mt-3">
                  {product.title}
                </p>
                <div className="flex items-center">
                <button className="bg-white w-20 h-7 rounded-full border text-xs font-medium mt-3 text-center">
                 {product.stock}
                </button>
                <div className="mt-3 ml-2  font-normal text-sm">{product.price}</div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      
      
      <Footer/>
    </div>
  );
};

export default Main;
