import React from "react";

const Products = () => {
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
      images: "t-shirt-1.png",
      name: "Raw Black T-Shirt Lineup",
      sku: "47514501",

      price: "$75.00",
      stock: "In Stock",
      categories: "In Stock",

      action: "Vector9.svg",
    },

    {
      images: "t-shirt-1.png",
      name: "Classic Monochrome Tees",
      sku: "47514501",

      price: "$35.00",
      stock: "In Stock",
      categories: "T-shirt, Men",

      action: "Vector9.svg",
    },

    {
      images: "t-shirt-1.png",
      name: "Monochromatic Wardrobe",
      sku: "47514501",

      price: "$27.00",
      stock: "In Stock",
      categories: "T-shirt",

      action: "Vector9.svg",
    },
    {
      images: "t-shirt-1.png",
      name: "Essential Neutrals",
      sku: "47514501",

      price: "$22.00",
      stock: "In Stock",
      categories: "T-shirt, Raw",

      action: "Vector9.svg",
    },
    {
      images: "t-shirt-1.png",
      name: "UTRAANET Black",
      sku: "47514501",

      price: "$43.00",
      stock: "In Stock",
      categories: "T-shirt, Trend",

      action: "Vector9.svg",
    },
    {
      images: "t-shirt-1.png",
      name: "Elegant Ebony Sweatshirts",
      sku: "47514501",

      price: "$35.00",
      stock: "In Stock",
      categories: "T-shirt",

      action: "Vector9.svg",
    },
    {
      images: "t-shirt-1.png",
      name: "Monochromatic Wardrobe",
      sku: "47514501",

      price: "$57.00",
      stock: "In Stock",
      categories: "Hoodie",

      action: "Vector9.svg",
    },
    {
      images: "t-shirt-1.png",
      name: "Monochromatic Wardrobe",
      sku: "47514501",
      price: "$30.00",
      stock: "In Stock",
      categories: "T-shirt",

      action: "Vector9.svg",
    },
  ];

  const pageNumbers = [1, 2, "...", 23, 24];
  return (
    <div>
      <div className=" flex">
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
    <button className="my-4 w-full hover:bg-[#F6F6F6] rounded-lg transition-all duration-300 text-start px-3 flex items-center pl-[47px] h-[41px] mt-[32px]">
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
                <span className="text-sm font-medium text-[#5C5F6A]">Admin</span>
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
              <h3 className="font-medium text-lg ml-[48px] ">Products</h3>
              <div className="flex items-center gap-4  ">
                <button className="bg-black text-white font-medium text-sm w-[124px] h-[40px] rounded-[4px]">
                  Add product
                </button>
                <input
                  type="text"
                  placeholder="Search products"
                  class="w-[242px] h-[40px] font-medium text-sm rounded border-b-gray-500"
                />
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
                  <th className=" text-left">SKU</th>
                  <th className=" text-left">Price</th>
                  <th className=" text-left">Stock</th>
                  <th className=" text-left">Categories</th>
                  <th className="pr-[22px] text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr
                    key={item.id}
                    className="mt-[32px] h-[80px] border-[#F6F6F6] border-b font-medium text-sm  text-[#5C5F6A]"
                  >
                    <td className="pl-[40px]">
                      <div className="bg-[#F6F6F6] w-[48px] h-[48px] rounded my-[16px] ">
                        <img
                          src={`/images/${item.images}`}
                          className="inline    "
                          alt="img"
                        />
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.sku}</td>
                    <td>{item.price}</td>
                    <td>{item.stock}</td>
                    <td>{item.categories}</td>
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

            <nav aria-label="Page navigation example">
              <ul className="flex items-center -space-x-px h-8 text-sm justify-end mt-[34px] mr-[58px]">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white "
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-2.5 h-2.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
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
                      className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white  hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400  dark:hover:text-white ${
                        number === 3
                          ? "z-10 text-blue-600  bg-blue-50  hover:text-blue-700   dark:text-white"
                          : ""
                      }`}
                      aria-current={number === 3 ? "page" : undefined}
                    >
                      {number}
                    </a>
                  </li>
                ))}

                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500  hover:text-gray-700 dark:text-gray-400  dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-2.5 h-2.5 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
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

export default Products;
