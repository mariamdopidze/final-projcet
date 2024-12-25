import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Dropdown = ({ isOpen, toggleDropdown }) => {
  const [categories, setCategories] = useState([]);

  const getCategoryData = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/categories`);
      const resData = await res.json();

      setCategories(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <>
      <button
        onClick={toggleDropdown}
        className="text-black hover:bg-[#E6E7E8] focus:ring-1 focus:outline-none focus:ring-gray-500 hover:text-blue-500  rounded-md font-medium text-sm px-5 py-2.5 transition duration-300 flex items-center"
        type="button"
      >
        Categories
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdown"
          className="absolute top-full mt-2 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {categories.map((item, index) => (
              <li key={index}>
                <a
                  href={`/listing/${item}`}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [value, setValue] = useState("");
  const isAuth = Cookies.get("AccessToken");

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const navigate = useNavigate();
  const handleSearchChange = (event) => setValue(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    navigate(`/listing?search=${value}`);
    setValue("");
  };

  const icons = [
    { src: "/images/basket.png", alt: "basket", link: "/cart" },
    { src: "/images/User.png", alt: "user", link: "/signup" },
  ];

  const logout = () => {
    Cookies.remove("AccessToken");
    window.location.reload();
    alert("წარმატებულია");
  };

  return (
    <header className="h-20 flex items-center justify-between max-w-[1116px] mx-auto">
      <div className="flex items-center gap-2">
        <img src="/images/Logomark.png" alt="Logo" />
        <a href="/">
          <h3 className="text-xl font-extrabold hover:text-blue-500 transition duration-300">
            Ecommerce
          </h3>
        </a>
      </div>

      <div className="sm:ml-6">
        <div className="flex items-center space-x-4 relative">
          <a
            href="/order"
            className="px-3 py-2 text-sm font-medium hover:text-blue-500 transition duration-300"
          >
            Orders
          </a>

          <Dropdown isOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />

          <a
            href="/listing"
            className="px-3 py-2 text-sm font-medium hover:text-blue-500 transition duration-300"
          >
            Listing
          </a>
          <a
            href="/cart"
            className="px-3 py-2 text-sm font-medium hover:text-blue-500 transition duration-300"
          >
            Cart
          </a>
        </div>
      </div>

      <form
        onSubmit={onSubmit}
        className="flex border-2 border-gray-500 rounded-md items-center px-2"
      >
        <img src="/images/SearchIcon.png" alt="Search icon" />
        <input
          type="text"
          placeholder="Search product"
          className="p-2 border-none outline-none font-medium text-sm"
          value={value}
          onChange={handleSearchChange}
        />
      </form>

      <div className="flex items-center gap-10 pr-6">
        {icons.map((icon, index) =>
          icon.link ? (
            <a
              href={icon.link}
              key={index}
              className="hover:opacity-80 transition duration-300"
            >
              <img src={icon.src} alt={icon.alt} />
            </a>
          ) : (
            <img
              src={icon.src}
              alt={icon.alt}
              key={index}
              className="hover:opacity-80 transition duration-300"
            />
          )
        )}
      </div>

      {isAuth ? (
        <button onClick={logout}>
          <img src="images/Logout.png" alt="image" />
        </button>
      ) : null}
    </header>
  );
};

export default Header;
