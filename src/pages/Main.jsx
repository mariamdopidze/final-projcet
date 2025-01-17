import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BestSeling from "../components/BestSeling";
import FeaturedAndBestSeling from "../components/FeaturedAndBestSeling";

const Main = () => {
  return (
    <div>
      <Discount />
      <Header />

      <div className="bg-neutral-100 py-18">
        <div className="flex items-center mx-auto max-w-[1116px]">
          <div className="lg:w-1/2">
            <h2 className="text-2xl text-black mb-6 font-semibold">
              Fresh Arrivals Online
            </h2>
            <p className="text-lg text-gray-800 mb-10 font-normal mt-3">
              Discover Our Newest Collection Today.
            </p>
            <a href="/listing">
              <button className="bg-black text-white rounded px-4 py-2 flex items-center h-[44px] top-[260px] left-[182px] p-[12px_24px] gap-[6px] mt-12">
                View Collection
                <img
                  src="/images/arrow.png"
                  className="ml-2 mt-1"
                  alt="arrow"
                />
              </button>
            </a>
          </div>

          <div className="lg:w-1/2 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src="/images/Hero2.png"
              alt="Product"
              className="absolute w-64 h-80 rounded-lg"
            />
            <div className="w-80 h-80 bg-neutral-200 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="items-center mx-auto max-w-[1116px]">
          <div className="grid grid-rows-1 grid-flow-col gap-4 w-auto">
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

      <BestSeling />

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
              <a href="/listing">
                <button className="flex items-center pl-6 w-44 h-11 bg-black text-white rounded mt-8">
                  Start Browsing
                  <img
                    src="/images/arrow.png"
                    className="ml-2 mt-1"
                    alt="arrow"
                  />
                </button>
              </a>
            </div>

            <img
              src="/images/category_image.png"
              className="w-[200px] ml-96"
              alt="image"
            />
          </div>
        </div>
      </div>

      <FeaturedAndBestSeling />

      <Footer />
    </div>
  );
};

export default Main;
