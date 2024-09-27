import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white mt-20">
      
      <div className="max-w-[1116px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          <div className="flex flex-col">
            <div className="dark:text-white">
              <div className="flex items-center gap-4">
                <img src="/images/Logomark_2.png" alt="img" />
                <h3 className="font-extrabold text-xl">Ecommerce</h3>
              </div>
              <p className="font-normal text-sm mt-3">
                DevCut is a YouTube channel for practical project-based
                learning.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <img src="/images/Github.png" alt="Github logo" />
                <img src="/images/Instagram.png" alt="Instagram logo" />
                <img src="/images/Youtube.png" alt="YouTube logo" />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-24 ">
            <h2 className=" font-medium text-sm  ">SUPPORT</h2>
            <a href="#" className=" font-medium text-sm pt-4">FAQ</a>
            <a href="#" className=" font-medium text-sm pt-4">Terms of Use</a>
            <a href="#" className=" font-medium text-sm pt-4">Privacy Policy</a>
          </div>
          <div className="flex flex-col ml-20">
            <h2  className=" font-medium text-sm ">COMPANY</h2>
            <a href="#" className=" font-medium text-sm pt-4">About Us</a>
            <a href="#" className=" font-medium text-sm pt-4">Contact</a>
            <a href="#" className=" font-medium text-sm pt-4">Careers</a>
          </div>
          <div className="flex flex-col ml-20">
            <h2  className=" font-medium text-sm  ">SHOP</h2>
            <a href="#" className=" font-medium text-sm pt-4">Checkout</a>
            <a href="#" className=" font-medium text-sm pt-4">Contact</a>
            <a href="#" className=" font-medium text-sm pt-4">Cart</a>
          </div>
          <div className="ml-4">
            <h2 className=" font-medium text-sm">ACCEPTED PAYMENTS</h2>
            <div className="flex items-center w-8 h-8 gap-10 mt-10">
              <img src="/images/Mastercard.png" alt="Mastercard logo" />
              <img src="/images/Amex.png" alt="Amex logo" />
              <img src="/images/Visa.png" alt="Visa logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
