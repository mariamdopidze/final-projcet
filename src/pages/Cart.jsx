import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";

const Cart = () => {
  return (
    <div>
      <Discount />
      <Header />

      <div className="py-16 w-full h-[160px] bg-neutral-100 ">
        <div className="  mx-auto max-w-[1116px]">
          <h3 className="text-2xl font-bold">Cart</h3>
          <p className="text-sm  font-medium">Ecommerce</p>
        </div>
      </div>

      <div className="w-full bg-slate-400">
        <div className=" mx-auto max-w-[1116px]">
          <h6 className="text-base font-semibold  pt-20"> Your Cart</h6>
          <div className="w-[628px] h-[1px] bg-neutral-100 mt-5"></div>
          <button>
            <div className="w-[80px] h-[80px] rounded-[4px] flex justify-center bg-neutral-100 mt-12">
              <img src="/images/Product.png" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
