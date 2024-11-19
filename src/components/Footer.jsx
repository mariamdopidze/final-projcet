import React, { useState } from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "SUPPORT",
      links: [
        { text: "Dashboard", href: "/dashboard" },
        { text: "Terms of Use", href: "#" },
        { text: "Privacy Policy", href: "#" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { text: "About Us", href: "#" },
        { text: "Contact", href: "#" },
        { text: "Add prodact", href: "/addproduct" },
      ],
    },
    {
      title: "SHOP",
      links: [
        { text: "Checkout", href: "/checkout" },
        { text: "Contact", href: "#" },
        { text: "Cart", href: "#" },
      ],
    },
  ];

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setMessage("Thank you for subscribing!");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <footer className="bg-white mt-20">
      <div className="bg-neutral-100 py-20 h-60 mt-48">
        <div className="mx-auto max-w-[1116px]">
          <div className="flex justify-between justify-items-center h-52">
            <div>
              <h3 className="font-bold text-base">Join Our Newsletter</h3>
              <p className="font-normal text-sm mt-6">
                We love to surprise our subscribers with occasional gifts.
              </p>
              {message && (
                <p className="mt-4 text-sm text-red-500">{message}</p>
              )}
            </div>

            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={handleEmailChange}
                className="p-2 border rounded-md outline-none w-80 h-11 font-medium text-sm"
              />
              <button
                onClick={handleSubscribe}
                className="w-28 h-11 bg-black text-white rounded font-medium text-sm"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1116px] mx-auto  mt-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          <div className="flex flex-col">
            <div className="dark:text-white">
              <div className="flex items-center gap-4">
                <img src="/images/Logomark_2.png" alt="img" />
                <h3 className="font-extrabold text-xl">Ecommerce</h3>
              </div>
              <p className="font-normal text-sm mt-3 text-[#5C5F6A]">
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

          {footerLinks.map((section, index) => (
            <div key={index} className="flex flex-col ml-20">
              <h2 className="font-medium text-sm text-[#878A92]">{section.title}</h2>
              {section.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.href}
                  className="font-medium text-sm pt-4 hover:underline text-[#5C5F6A]"
                >
                  {link.text}
                </a>
              ))}
            </div>
          ))}

          <div className="ml-4">
            <h2 className=" font-medium text-sm text-[#878A92]">ACCEPTED PAYMENTS</h2>
            <div className="flex items-center w-8 h-8 gap-10 mt-10">
              <img src="/images/Mastercard.png" alt="Mastercard logo" />
              <img src="/images/Amex.png" alt="Amex logo" />
              <img src="/images/Visa.png" alt="Visa logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <span className="text-sm font-normal text-[#5C5F6A]">
          © 2023 DevCut. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
