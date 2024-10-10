import React from "react";

const Loginpage = () => {
  return (
    <div>
      <div className="w-[384px] h-[453px] border rounded-lg border-[#E9E9EB] mx-auto">
        <div className="flex gap-[12px] mt-[40px] justify-center">
          <img src="/images/logo2.png" alt="" />
          <span className="font-extrabold text-xl">Admin</span>
        </div>

        <div className="flex flex-col items-center">

        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium mt-[72px] text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="Email"
            class="bg-gray-50 border border-[#E6E7E8]  rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[320px] h-[45px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label
            for="password"
            class="block mb-2 text-sm mt-[15px] font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            class="bg-gray-50 border border-[#E6E7E8] rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[320px] h-[45px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button className="w-[318px] h-[44px] bg-[#0E1422] text-white rounded mt-[40px]">
          Login
        </button>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
