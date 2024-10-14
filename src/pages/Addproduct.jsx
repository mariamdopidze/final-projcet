import React from "react";

const Addproduct = () => {
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

  const inputs = [
    { label: "Title" },
    { label: "Price" },
    { label: "Category" },
    { label: "SKU" },
    { label: "Add Members" },
  ];

  const rinput = [
    { label: "Stock status" },
    { label: "Available quantity" },
    { label: "Images", placeholder: "Type here..." },
  ];
  const images = [
    {
      image: "proditem2.png",
    },
    {
      image: "proditem2.png",
    },

    {
      image: "proditem2.png",
    },
  ];
  const colors = ["#A3BEF8", "#FFD58A", "#83B18B", "#4078FF"];

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const handleSizeClick = (size) => {
    document.getElementById(`size-${size}`).click();
  };
  return (
    <div>
      <div className="flex">
        <div className="border w-[260px] h-[925px] border-[#E9E9EB] p-8">
          <div className="flex gap-[12px] ">
            <img
              src="/images/logo2.png"
              alt="img"
              className="mb-2 w-[16px] h-[30px]"
            />
            <h1 className="text-lg font-bold">Admin</h1>
          </div>

          <div className="flex flex-col justify-start mt-8">
            {menu.map((item, key) => (
              <a
                href=""
                key={key}
                className="block my-4 w-full hover:bg-[#F6F6F6] rounded-lg transition-all duration-300 text-start px-3"
              >
                <img
                  src={`/images/${item.icon}`}
                  className="inline py-2"
                  alt="img"
                />
                <span className="ml-2 font-medium text-sm text-[#5C5F6A]">
                  {item.title}
                </span>
              </a>
            ))}
            <hr className="w-[260px] border-[#E9E9EB] h-[1px] mt-[46px]" />
            <button className="w-[212px] h-[41px] mt-[32px] rounded-[8px] flex items-center justify-center space-x-2">
              <img
                src="/images/Add.svg"
                alt="img"
                className="w-[24px] h-[24px]"
              />
              <span>Extras</span>
            </button>
          </div>
        </div>

        <div className="flex-1 ">
          <header className="max-w-[1060px] mx-auto  border-[#E9E9EB] mt-[32px] ml-[48px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Admin</span>
                <img src="images/Chevron.png" alt="img" />
                <p className="text-sm font-medium">Dashboard</p>
              </div>

              <div>
                <img src="images/Vector7.svg" alt="img" />
              </div>
            </div>
          </header>

          <div className="w-[1060px] h-[885px]  mt-[64px] rounded border ml-[48px] pl-[48px]  border-[#E9E9EB]">
            <h3 className="font-medium text-xl mt-[32px] ">Add Product</h3>
            <hr className="bg-[#E9E9EB] mt-[32px]" />

            <div className="flex mt-[64px] gap-[74px]">
              <div>
                {inputs.map((input, index) => (
                  <div key={index} className="w-[320px] h-[45px] mb-10">
                    <label className="block mb-2 text-sm text-slate-600">
                      {input.label}
                    </label>
                    <input className="w-full h-[45px] bg-transparent text-slate-700 text-sm border border-[#E6E7E8] rounded-[6px] px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                  </div>
                ))}

                <div className="w-[320px]">
                  <div className="relative">
                    <label className="block mb-2 text-sm font-medium text-slate-600">
                      Message
                    </label>
                    <textarea className="resize-none rounded-[6px] w-[320px] h-[128px] border border-[#E6E7E8] bg-transparent px-3 py-2.5 text-sm font-normal text-slate-700 focus:border-2 focus:border-slate-400  hover:border-slate-300 transition-shadow"></textarea>
                  </div>
                </div>

                <button className="bg-black text-white px-4 py-2 mt-[51px] rounded-[4px] w-[138px] h-[44px]">
                Save Product
                </button>
              </div>

              <div>
                {rinput.map((input, index) => (
                  <div key={index} className="w-[320px] h-[45px] mb-10">
                    <label className="block mb-2 text-sm text-slate-600">
                      {input.label}
                    </label>
                    <input className="w-full h-[45px] bg-transparent text-slate-700 text-sm border border-[#E6E7E8] rounded-[6px] px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                  </div>
                ))}

                <div className="flex justify-start items-center   gap-[36px]">
                  {images.map((item, key) => (
                    <a key={key} href="#" className="inline-block mt-[24px]">
                      <div className="bg-[#F6F6F6]  rounded-[4px] w-[56px] h-[56px] flex items-start justify-center">
                        <img
                          src={`/images/${item.image}`}
                          className="w-full h-full  object-cover"
                          alt="img"
                        />
                      </div>
                    </a>
                  ))}
                </div>

                <div className="flex flex-col items-start">
                  <label className="text-sm font-medium  mt-[17px]">
                    Colors
                  </label>{" "}
                 
                  <div className="flex space-x-4 mt-[9px]">
                    {colors.map((color, index) => (
                      <label key={index} className="inline-flex items-center">
                        <input
                          type="radio"
                          name="color"
                          className="appearance-none rounded-full h-[24px] w-[24px] border border-gray-300 checked:border-transparent transition-colors"
                          style={{ backgroundColor: color }}
                        />
                      </label>
                    ))}
                  </div>
                </div>
<div className="flex flex-col items-start">
<label className="text-sm font-medium  mt-[24px]">
                    Size
                  </label>{" "}
                <div className="flex  gap-4 mt-[9px]  ">
                  {sizes.map((size) => (
                    <div key={size} className="flex items-center">
                      <input
                        id={`size-${size}`}
                        type="checkbox"
                        value={size}
                        className="hidden"
                      />
                      <label
                        onClick={() => handleSizeClick(size)}
                        className="w-[40px] h-[40px] flex items-center justify-center text-black bg-[#E6E7E8] border-gray-300 rounded cursor-pointer"
                      >
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
