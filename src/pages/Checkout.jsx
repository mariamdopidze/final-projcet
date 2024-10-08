import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Checkout = () => {
  return (
    <div>
      <Discount />
      <Header />

      <div className=" h-[160px] bg-[#F6F6F6] ">
        <div className="  mx-auto max-w-[1116px]">
          <h3 className="text-2xl font-bold pt-12">Checkout</h3>
          <div className="flex flex-row items-center gap-2.5">
            <p className="text-sm  font-medium">Ecommerce</p>
            <img src="images/Chevron.png" alt="img" />
            <p className="text-sm  font-medium">Checkout</p>
          </div>
        </div>
      </div>

      <div className="  mx-auto max-w-[1116px]">
        <div className="flex flex-row">
          <form className="max-w-[534px] ">
            <div className="mb-[20px]">
              <h3 className="text-[#0E1422] text-[14px] font-[600] mt-[72px]">
                Shipping Address
              </h3>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div class="md:col-span-2">
                <label
                  for="address"
                  class="block mt-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[534px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  for="city"
                  class="block mt-[15px] text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[259px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  for="state"
                  class="block  text-sm font-medium mt-[15px] text-gray-900 dark:text-white"
                >
                  State
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[259px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  for="code"
                  class="block mb-2 text-sm font-medium mt-[15px] text-gray-900 dark:text-white"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="company"
                  class="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[259px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  for="country"
                  class="block mb-2 text-sm   mt-[15px] font-medium text-gray-900 dark:text-white"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[259px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm mt-[51px] font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="website"
                  class="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[259px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  for="full name"
                  class="block mb-2 mt-[51px] text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="visitors"
                  class="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[259px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </form>

          <hr className="w-[1px] h-[490px] bg-[#E6E7E8] mt-[56px] ml-[119px]" />
          <div className="w-[504px] h-[430px] flex flex-col justify-evenly p-[20px] ">
            <h3 className="text-[#0E1422] text-[16px] font-[600] mt-[72px]">
              Your Order
            </h3>
            <div className="flex flex-row items-center justify-between mt-[64px]">
              <div className="flex flex-row gap-[10px]">
                <div className="w-[40px] h-[40px] rounded-full bg-[#F6F6F6]">
                  <img src="images/proditem1.png" className="m-auto" />
                </div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#F6F6F6]">
                  <img src="images/proditem2.png" className="m-auto" />
                </div>
                <div className="w-[40px] h-[40px] rounded-full bg-[#F6F6F6]">
                  <img src="images/proditem3.png" className="m-auto" />
                </div>
              </div>
              <button className="border-2 border-[#B6B7BC] rounded-[4px] text-[#5C5F6A] text-[14px] px-[24px] py-[12px]">
                Edit cart
              </button>
            </div>
            <div className="flex flex-row justify-between mt-[64px]">
              <div className="flex flex-col text-[#5C5F6A] text-[14px] gap-[15px]">
                <p>Subtotal</p>
                <p>Shipping</p>
                <p>Tax</p>
              </div>
              <div className="flex flex-col text-[14px] gap-[15px]">
                <p>$75.00</p>
                <p>FREE</p>
                <p>$3.00</p>
              </div>
            </div>
            <hr className="w-full bg-[#E6E7E8] h-[1px] mx-auto mt-[24px]" />
            <div className="flex flex-row justify-between mt-[24px]">
              <p>Total</p>
              <p>$78.00</p>
            </div>

            <button className="w-full bg-[#0E1422] px-[24px] py-[12px] mt-[24px] text-white rounded-[4px]">
              Place Order
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
