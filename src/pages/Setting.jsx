import React from "react";

const Setting = () => {
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
    { label: "Site Name" },
    { label: "Support Email" },
    { label: "Monthly Order Goal" },
  ];
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
    <h1 className="text-xl font-extrabold">Admin</h1>
  </div>

  <div className="flex flex-col justify-start mt-8">
    {menu.map((item, key) => (
      <a
        href=""
        key={key}
        className=" my-4 w-full hover:bg-[#F6F6F6] rounded-lg transition-all duration-300 text-start px-3 flex items-center pl-[47px]"
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
                <span className="text-sm font-medium text-[#5C5F6A]">Admin</span>
                <img src="images/Chevron.png" alt="img" />
                <p className="text-sm font-medium">Dashboard</p>
              </div>

              <div>
                <img src="images/Vector7.svg" alt="img" />
              </div>
            </div>
          </header>

          <div className="w-[1060px] h-[588px]  mt-[64px] rounded-[8px] border ml-[48px]  border-[#E9E9EB]">
            <h3 className="font-medium text-lg text-[#0E1422] ml-[48px]">Setting</h3>
            <hr className="bg-[#E9E9EB] mt-[32px]" />

            <div>
              {inputs.map((input, index) => (
                <div key={index} className="w-[320px] h-[45px] mt-[64px] ml-[48px]">
                  <label className="block mb-2 text-sm font-medium text-[#474B57]">
                    {input.label}
                  </label>
                  <input className="w-full h-[45px] bg-transparent text-slate-700 text-sm border border-[#E6E7E8] rounded-[6px] px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" />
                </div>
              ))}

              <button className="bg-black text-white px-4 py-2  font-medium text-sm ml-[48px] mt-[74px] rounded-[4px] w-[144px] h-[44px]">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
