import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import { useState } from "react";
import Footer from "../components/Footer";


const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <Discount />
      <Header />

      <div className=" h-[160px] bg-[#F6F6F6] ">
        <div className="  mx-auto max-w-[1116px]">
          <h3 className="text-2xl font-bold pt-12">Cart</h3>
          <div className="flex flex-row items-center gap-2.5">
            <p className="text-sm  font-medium">Ecommerce</p>
            <img src="images/Chevron.png" alt="img" />
            <p className="text-sm  font-medium">Cart</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1116px] ">
        <div className="flex flex-row ">
          <div>
            <h6 className="text-base font-semibold pt-20">Your Cart</h6>

            <hr className="mt-[18px] w-[628px] bg-[#E9E9EB]" />

            <div className="h-[80px] w-[628px]  mt-12 flex items-center justify-between">
              <div className="flex">
                <div className="w-[80px] h-[80px] rounded-[4px] flex justify-center items-center  bg-[#F6F6F6]">
                  <img src="/images/Product.png" alt="Product Image" />
                </div>

                <div className="ml-4">
                  <h4 className="mb-2 font-medium text-sm">
                    Raw Black T-Shirt Lineup
                  </h4>

                  <div className="flex items-center">
                    <p className="mr-2 font-medium text-xs">Color:</p>
                    <div className="w-3 h-3 bg-[#98BE9E] rounded-full"></div>
                    <p className="font-medium text-xs"> - Size: M</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-[18px]  items-center">
                <p className="font-medium text-sm">$75.00</p>
                <div className="flex items-center border rounded-[4px] rounded-bg-[#E6E7E8] w-[107px] h-[40px] ">
                  <button
                    onClick={decrement}
                    className="w-4 h-4 text-lg text-black flex items-center justify-center ml-4"
                  >
                    -
                  </button>
                  <span className="w-full text-center">{quantity}</span>
                  <button
                    onClick={increment}
                    className="w-4 h-4 text-lg  text-black flex items-center justify-center mr-4"
                  >
                    +
                  </button>
                </div>
                <div className="bg-[#F6F6F6] w-10 h-10 rounded-[4px] flex justify-center ">
                  <img src="/images/X.png" alt="img " />
                </div>
              </div>
            </div>

            <div className="h-[80px] w-[628px]  mt-10 flex items-center justify-between">
              <div className="flex">
                <div className="w-[80px] h-[80px] rounded-[4px] flex justify-center bg-[#F6F6F6]">
                  <img src="/images/Product.png" alt="Product Image" />
                </div>

                <div className="ml-4">
                  <h4 className="mb-2 font-medium text-sm">
                    Raw Black T-Shirt Lineup
                  </h4>

                  <div className="flex items-center">
                    <p className="mr-2 font-medium text-xs">Color:</p>
                    <div className="w-3 h-3 bg-[#A8B2FF] rounded-full"></div>
                    <p className="font-medium text-xs"> - Size: M</p>
                  </div>
                </div>
              </div>

              <div className="flex  items-center gap-[18px]">
                <p className="font-medium text-sm">$22.00</p>
                <div className="flex items-center border rounded-[4px] bg-neutral-100 w-[107px] h-[40px]">
                  <button
                    onClick={decrement}
                    className="w-4 h-4 text-lg text-black flex items-center justify-center ml-4"
                  >
                    -
                  </button>
                  <span className="w-full text-center">{quantity}</span>
                  <button
                    onClick={increment}
                    className="w-4 h-4 text-lg  text-black flex items-center justify-center mr-4"
                  >
                    +
                  </button>
                </div>
                <div className="bg-[#F6F6F6] w-10 h-10 rounded-[4px] flex justify-center">
                  <img src="/images/X.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[341px] h-[430px] flex flex-col justify-evenly p-[20px] border-2 border-[#E6E7E8] mt-[56px] ml-[122px] rounded-[4px]">
            <h4 className="text-[#0E1422] text-[16px] font-[600]">
              Order Summary
            </h4>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col text-[#5C5F6A] text-[14px] gap-[15px]">
                <span>Subtotal</span>
                <span>Shipping</span>
                <span>Tax</span>
              </div>
              <div className="flex flex-col text-[14px] gap-[15px]">
                <span>$90.00</span>
                <span>FREE</span>
                <span>$3.00</span>
              </div>
            </div>
            <div className="w-full bg-[#E6E7E8] h-[1px] mx-auto"></div>
            <div className="flex flex-row justify-between">
              <span>Total</span>
              <span>$100.00</span>
            </div>
           
              
              <button className="w-full bg-[#0E1422] px-[24px] py-[12px] text-white rounded-[4px]">
                Checkout
              </button>
            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
