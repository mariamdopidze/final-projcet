import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-[1116px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          <div className="flex flex-col">
            <div className="dark:text-white">
                <div className="flex items-center gap-4">
              <img src='/images/Logomark_2.png' alt='img'/>
              <h3>ecommerce</h3>
              </div>
              <p>
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
          <div className="flex flex-col">
            <h2>SUPPORT</h2>
            <a href="#">FAQ</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="flex flex-col">
            <h2>COMPANY</h2>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>
          <div className="flex flex-col">
            <h2>SHOP</h2>
            <a href="#">Checkout</a>
            <a href="#">Contact</a>
            <a href="#">Cart</a>
          </div>
          <div>
            <h2>ACCEPTED PAYMENTS</h2>
            <div className="flex items-center gap-4 mt-8">
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
