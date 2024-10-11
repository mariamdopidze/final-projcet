import React from "react";

const Dashboard = () => {
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

  return (
    <div>
      <div className="flex">
        <div className="border w-[260px] h-[925px] border-[#E9E9EB] p-8">
          <div className="flex gap-[12px]">
            <img
              src="/images/logo2.png"
              alt="img"
              className="mb-2 w-[16px] h-[30px]"
            />
            <h1 className="text-lg font-bold">Admin</h1>
          </div>

          <div className="flex flex-col justify-start mt-8">
            {menu.map((item, key) => (
              <button
                key={key}
                className="block my-4 w-full hover:bg-[#F6F6F6] rounded-lg transition-all duration-300 text-start px-3"
              >
                <img
                  src={`/images/${item.icon}`}
                  className="inline py-3"
                  alt="img"
                />
                <span className="ml-2">{item.title}</span>
              </button>
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

        <div className="flex-1">
          <header className="max-w-[1180px] mx-auto  border-[#E9E9EB] p-8">
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

          <div className="p-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
