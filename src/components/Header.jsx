import React from "react";

const Header = () => (
  <header className="h-20 flex items-center justify-between max-w-[1116px] mx-auto">
    <div className="flex items-center gap-2 ">
      <img src="/images/Logomark.png" alt="Logo" />
      <a href="/">
        <h3 className="text-xl  font-extrabold  size-5">
          Ecommerce
        </h3>
      </a>
    </div>

    <div className="sm:ml-6 sm:block">
      <div className="flex  items-center space-x-4">
        <a href="#" className=" px-3 py-2 text-sm font-medium  ">
          Home
        </a>
        <a href="#" className=" px-3 py-2 text-sm font-medium  ">
          Categories
        </a>
        <a href="#" className=" px-3 py-2 text-sm font-medium ">
          About
        </a>
        <a href="#" className=" px-3 py-2 text-sm font-medium  ">
          Contact
        </a>
      </div>
    </div>

    <div className="flex border-2 border-gray-500 rounded-md items-center px-2">
      <img src="/images/SearchIcon.png" alt="img" />
      <input
        type="text"
        placeholder="Search product"
        className="p-2 border-none outline-none font-medium text-sm"
      />
    </div>

    <div className="flex items-center gap-10 pr-6">
      <img src="/images/basket.png" alt="img" />
      <img src="/images/User.png" alt="img" />
    </div>
  </header>
);

export default Header;
