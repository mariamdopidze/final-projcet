import React from "react";
import { useState } from "react";

const Reviews = () => {
  const menu = [
    {
      icon: "Dashboard.svg",
      title: "Dashboard",
    },
    {
      icon: "Vector1.svg",
      title: "Products",
    },
    {
      icon: "Vector3.svg",
      title: "Orders",
    },
    {
      icon: "Vector4.svg",
      title: "Customers",
    },
    {
      icon: "Vector5.svg",
      title: "Reviews",
    },
    {
      icon: "Vector6.svg",
      title: "Settings",
    },
  ];

  const products = [
    {
      span: "EH",
      name: "Esther Howard",
      reviews:
        "Completed the task and added the required documentation, can someone please ....",
      action: "Vector9.svg",
    },

    {
      span: "WW",
      name: "Wade Warren",
      reviews:
        "Ask CDCR San Quintin State Prison 2008. We installed Purex dispensers.",
      action: "Vector9.svg",
    },
    {
      span: "BS",
      name: "Brooklyn Simmons",
      reviews:
        "Twenty 30-second applications within half an hour is well in excess.",
      action: "Vector9.svg",
    },
    {
      span: "RF",
      name: "Robert Fox",
      reviews:
        "An interesting implication of the 2007 study concerns the use of hand sanitizers.",
      action: "Vector9.svg",
    },
    {
      span: "DR",
      name: "Dianne Russell",
      reviews:
        "I found a 2007 study on effects of hand sanitizers on blood alcohol level in adults. ",
      action: "Vector9.svg",
    },
    {
      span: "RE",
      name: "Ralph Edwards",
      reviews:
        "The principal alcohol in Purell hand sanitizer (to take the most talked-about brand) ",
      action: "Vector9.svg",
    },
    {
      span: "TW",
      name: "Theresa Webb",
      reviews:
        "Alcohol based exposures through inadvertently consuming hand sanitize",
      action: "Vector9.svg",
    },
    {
      span: "AM",
      name: "Arlene McCoy",
      reviews:
        "I'm grateful for the supportive work environment during personal challenges.",
      action: "Vector9.svg",
    },
  ];

  const pageNumbers = [1, 2, "...", 23, 24];

  const [activePage, setActivePage] = useState(null);

  const handleClick = (number) => {
    setActivePage(number);
  };
  return (
    <div>
      <div className="flex">
        <div className="border w-[260px] h-[1126px] border-[#E9E9EB]">
          <div className="flex gap-[12px] items-center justify-center mt-[16px]">
            <img
              src="/images/logo2.png"
              alt="img"
              className="w-[16px] h-[30px]"
            />
            <h1 className="text-lg font-bold">Admin</h1>
          </div>

          <div className="flex flex-col justify-start mt-8">
            {menu.map((item, key) => (
              <a
                href=""
                key={key}
                className="my-4 w-full hover:bg-[#F6F6F6] rounded-lg transition-all duration-300 text-start px-3 flex items-center pl-[47px]"
              >
                <img
                  src={`/images/${item.icon}`}
                  className="w-[16px] h-[16px]"
                  alt="img"
                />
                <span className="ml-2 font-medium text-sm text-[#5C5F6A]">
                  {item.title}
                </span>
              </a>
            ))}
            <hr className="w-[260px] border-[#E9E9EB] h-[1px] mt-[46px]" />
            <button className=" my-4 w-full hover:bg-[#F6F6F6] rounded-lg transition-all duration-300 text-start px-3 flex items-center pl-[47px] h-[41px] mt-[32px]">
              <img
                src="/images/Add.svg"
                alt="img"
                className="w-[24px] h-[24px]"
              />
              <span className="ml-2 font-medium text-sm text-[#5C5F6A]">
                Extras
              </span>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <header className="max-w-[1060px] mx-auto  border-[#E9E9EB] mt-[16px] ml-[48px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-[#5C5F6A]">
                  Admin
                </span>
                <img src="images/Chevron.png" alt="img" />
                <p className="text-sm font-medium">Dashboard</p>
              </div>

              <div>
                <img src="images/Vector7.svg" alt="img" />
              </div>
            </div>
          </header>

          <div className="w-[1060px] h-[922px]  mt-[64px] rounded border ml-[48px] border-[#E9E9EB]">
            <div className="flex justify-between items-center mt-[24px] w-[980px]  ">
              <h3 className="font-medium text-lg ml-[48px] ">Reviews</h3>
              <div className="flex items-center gap-4  ">
                <div class="relative w-[242px] h-[40px]">
                  <input
                    type="text"
                    placeholder="Search reviews"
                    class="w-full h-full pl-10  font-medium text-sm rounded border border-gray-500 focus:outline-none"
                  />
                  <img
                    src="/images/SearchIcon.png"
                    alt="Search"
                    class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  />
                </div>
              </div>
            </div>

            <table className="table-auto w-full mt-[24px] ">
              <thead>
                <tr className="h-[44px] text-[#5C5F6A] font-medium text-sm border  border-[#E6E7E8] ">
                  <th className="pl-[48px] text-left">
                    <img
                      src="/images/Vector10.svg"
                      className="w-[24px] h-[24px] bg-[#F6F6F6] rounded-full"
                      alt=""
                    />
                  </th>

                  <th className=" text-left">Name</th>
                  <th className=" text-left">Reviews</th>
                  <th className="pr-[50px] text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr
                    key={item.id}
                    className="mt-[32px] h-[80px] border-[#F6F6F6] border-b font-medium text-sm  text-[#5C5F6A]"
                  >
                    <td className="pl-[40px]">
                      <div className="bg-[#F6F6F6] w-[48px] h-[48px] rounded  text-[#4078FF] my-[16px] flex items-center justify-center">
                        {item.span}
                      </div>
                    </td>

                    <td className="font-medium text-sm text-[#5C5F6A]">{item.name}</td>
                    <td className="font-medium text-sm text-[#5C5F6A]">{item.reviews}</td>

                    <td className="pl-[20px]">
                      <img
                        src={`/images/${item.action}`}
                        className="inline py-3"
                        alt="img"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav
              aria-label="Page navigation example"
              className="mt-[34px] mr-[58px]"
            >
              <ul className="flex items-center space-x-1 h-8 text-sm justify-end">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:text-gray-700"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-2.5 h-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                      aria-hidden="true"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                  </a>
                </li>

                {pageNumbers.map((number) => (
                  <li key={number}>
                    <a
                      href="#"
                      onClick={() => handleClick(number)}
                      className={`flex items-center justify-center px-3 h-8 leading-tight ${
                        activePage === number
                          ? "text-[#0E1422] bg-[#F6F6F6] z-10"
                          : "text-gray-500 bg-white hover:text-gray-700"
                      }`}
                      aria-current={activePage === number ? "page" : undefined}
                    >
                      {number}
                    </a>
                  </li>
                ))}

                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 hover:text-gray-700"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-2.5 h-2.5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                      aria-hidden="true"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
