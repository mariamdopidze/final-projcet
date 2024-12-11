import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const Order = () => {
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
              <Link
                to className="block my-2 w-full hover:bg-gray-300 rounded-lg transition-all duration-300 text-start px-3"
              >
                <img
                  src={`/images/${item.icon}`}
                  className="inline py-3"
                  alt="img"
                />
                <span className="ml-2">{item.title}</span>
              </Link>
            ))}
          </div>



          <div className="w-[1px] h-[504px] bg-[#E6E7E8] mt-[60px] ml-[36px]"></div>
          <div className="flex flex-col mt-[64px] ml-[48px]">
            <h3 className="font-semibold text-base">Orders</h3>

            <div className="h-[80px] w-[617px] mt-[56px] flex items-center justify-between">
              <div className="flex">
                <div className="w-[80px] h-[80px] rounded-[4px] flex justify-center items-center  bg-[#F6F6F6]">
                  <img src="/images/Product.png" alt="Product Image" />
                </div>

                <div className="ml-4 max-w-[168px]">
                  <h4 className="mb-2 mt-2 font-medium text-sm">
                    Raw Black T-Shirt Lineup
                  </h4>

                  <p className="font-medium text-xs mb-2">
                    Ordered on: 27 July 2023
                  </p>
                  <p className="font-medium text-xs">$70.00</p>
                </div>
              </div>

              <div className="flex gap-[10px]  items-center">
                <p className="font-medium text-sm">Processing</p>

                <button className="font-medium text-sm border rounded w-[114px] h-[44px]">
                  View item
                </button>
              </div>
            </div>
            <hr className="h-[1px] w-[617px] bg-[#E9E9EB] mt-[32px]" />
            <div className="h-[80px] w-[617px] mt-[56px] flex items-center justify-between">
              <div className="flex">
                <div className="w-[80px] h-[80px] rounded-[4px] flex justify-center items-center  bg-[#F6F6F6]">
                  <img src="/images/Product.png" alt="Product Image" />
                </div>

                <div className="ml-4 max-w-[168px]">
                  <h4 className="mb-2 mt-2 font-medium text-sm">
                    Raw Black T-Shirt Lineup
                  </h4>

                  <p className="font-medium text-xs mb-2">
                    Ordered on: 9 march 2023
                  </p>
                  <p className="font-medium text-xs">$27.00</p>
                </div>
              </div>

              <div className="flex gap-[10px]  items-center">
                <p className="font-medium text-sm">Completed</p>

                <button className="font-medium text-sm border rounded w-[114px] h-[44px]">
                  View item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Order;
