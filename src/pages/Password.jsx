import React from "react";
import Header from "../components/Header";
import Discount from "../components/Discount";
import Footer from "../components/Footer";

const Password = () => {
  return (
    <div>
      <Discount />
      <Header />
      <div className="h-[160px] bg-[#F6F6F6] py-[40px]">
        <div className="  mx-auto max-w-[1116px] ">
          <h3 className="font-bold text-2xl">Forgot Password</h3>
          <div className="flex flex-row items-center mt-[8px] gap-2.5">
            <p className="text-sm  font-medium">Ecommerce</p>
            <img src="images/Chevron.png" alt="img" />
            <p className="text-sm  font-medium">Forgot Password</p>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto  flex flex-col justify-center items-center   ">
        <div className="max-w-[1116px] mt-[144px]">
          <p className="font-normal text-sm max-w-[320px] ">
            Please enter the email address associated with your account. We'll
            promptly send you a link to reset your password.
          </p>
          <div class="mt-[24px]">
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium  dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="default-input"
              class="border border-[#E6E7E8]  w-[320px] h-[45px]  text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <a href="reset">
          <button className="bg-black w-[318px] h-[44px] mt-[24px] rounded text-white text-center font-medium text-sm">
          Send reset link
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Password;
