import React from "react";
import Header from "../components/Header";
import Discount from "../components/Discount";
import Footer from "../components/Footer";

const Resetpassword = () => {
  return (
    <div>
      <Discount />
      <Header />

      <div className="h-[160px] bg-[#F6F6F6] py-[40px]">
        <div className="  mx-auto max-w-[1116px] ">
          <h3 className="font-bold text-2xl">Reset Password</h3>
          <div className="flex flex-row items-center mt-[8px] gap-2.5">
            <p className="text-sm  font-medium">Ecommerce</p>
            <img src="images/Chevron.png" alt="img" />
            <p className="text-sm  font-medium">Reset Password</p>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto  flex flex-col justify-center items-center   ">
        <div className="max-w-[1116px] mt-[128px]">
        <div class="mt-[15px]">
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium  dark:text-white"
            >
             New password
            </label>
            <input
              type="password"
              id="default-input"
              class="border border-[#E6E7E8]  w-[320px] h-[45px]  text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div class="mt-[16px]">
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium  dark:text-white"
            >
             Confirm password
            </label>
            <input
              type="password"
              id="default-input"
              class="border border-[#E6E7E8]  w-[320px] h-[45px]  text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <button className="bg-black w-[318px] h-[44px] mt-[40px] rounded text-white text-center font-medium text-sm">
          Reset password
          </button>



        </div>
      </div>
    </div>
  );
};

export default Resetpassword;
