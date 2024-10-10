import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Account = () => {
  const menu = [
    {
      icon: "Cart.png",
      title: "Order",
    },
    {
      icon: "Heart.png",
      title: "Wishlist",
    },
    {
      icon: "Vector (2).png",
      title: "Address",
    },
    {
      icon: "Key.png",
      title: "Password",
    },
    {
      icon: "User (1).png",
      title: "Account Detail",
    },
    {
      icon: "Logout.png",
      title: "Logout",
    },
  ];
  return (
    <div>
      <Discount />
      <Header />
      <div className="h-[160px] bg-[#F6F6F6] py-[40px]">
        <div className="  mx-auto max-w-[1116px] ">
          <h3 className="font-bold text-2xl">My Account</h3>
          <div className="flex flex-row items-center mt-[8px] gap-2.5">
            <p className="text-sm  font-medium">Ecommerce</p>
            <img src="images/Chevron.png" alt="img" />
            <p className="text-sm  font-medium">My Account</p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-[1116px] mx-auto  flex  justify-start">
          <div className="w-[212px] mt-[120px]">
            {menu.map((item, key) => (
              <button className="block my-2 w-full hover:bg-gray-300 rounded-lg transition-all duration-300 text-start px-3">
                <img
                  src={`/images/${item.icon}`}
                  className="inline py-3"
                  alt="img"
                />
                <span className="ml-2">{item.title}</span>
              </button>
            ))}
          </div>

          <hr className="w-[1px] h-[504px] bg-[#E6E7E8] mt-[60px] ml-[36px]" />

          <div className="mt-[64px] ml-[48px] font-semibold text-base">
            <span className="font-semibold text-base">Shipping Address</span>
            <div className="w-[48px] h-[48px] rounded-full bg-[#F0F1FF] mt-[40px] flex items-center justify-center">
              <span className="text-center font-normal text-sm text-[#4078FF]">AN</span>
            </div>

            <form>
              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-sm  mt-[32px] font-medium text-gray-900 dark:text-white"
                >
                  Full name
                </label>
                <input
                  type="text"
                  id="Full name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[259px] h-[44px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  for="Email"
                  class="block mb-2  mt-[16px] text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label>
                <input
                  type="email"
                  id="Email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[259px] h-[44px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type=""
                class="text-white bg-[#0E1422] mt-[64px]  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[144px] h-[44px]  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
