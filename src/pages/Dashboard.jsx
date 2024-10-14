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

  const box = [
    {
      title: "Total Sales",
      text: "THIS MONTH",
      price: "$ 4,235",
      img: "Vector8.png",
    },
    {
      title: "Customers",
      text: "THIS MONTH",
      price: "$ 4,235",
      img: "Chart.png",
    },

    {
      title: "Orders",
      text: "Monthly GOALS : 1,000",
      price: "$ 4,235",
      img: "Progress.png",
    },
  ];

  const table = [
    {
      text: "Mens Black T-Shirts",
      data: "20 Mar, 2023",
      price: "$75.00",
      status: "Processing",
    },

    {
      text: "Essential Neutrals",
      data: "19 Mar, 2023",
      price: "$22.00",
      status: "Processing",
    },

    {
      text: "Sleek and Cozy Black",
      data: "7 Feb, 2023",
      price: "$57.00",
      status: "Completed",
    },
    {
      text: "MOCKUP Black",
      data: "29 Jan, 2023",
      price: "$30.00",
      status: "Completed",
    },
    {
      text: "Monochromatic Wardrobe",
      data: "E27 Jan, 2023",
      price: "$22.00",
      status: "Completed",
    },
  ];

  return (
    <div>
      <div className="flex ">
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
              <a href =""
                key={key}
                className="block my-4 w-full hover:bg-[#F6F6F6] rounded-lg transition-all duration-300 text-start px-3"
              >
                <img
                  src={`/images/${item.icon}`}
                  className="inline py-2"
                  alt="img"
                />
                <span className="ml-2 font-medium text-sm text-[#5C5F6A]">{item.title}</span>
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

          <div class="grid grid-cols-3 gap-[38px] mt-[56px]  ml-[48px] max-w-[1060px]  mx-auto">
            {box.map((item, key) => (
              <div
                key={key}
                className="block my-4 w-[328px] h-[187px] bg-[#F6F6F6] rounded-lg transition-all duration-300 text-start px-3"
              >
                {" "}
                <h3 className="ml-[24px] mt-[24px] font-semibold text-base">{item.title}</h3>
                <div className="flex justify-between items-center ml-[24px] mt-[6px]">
                  <span className="font-medium text-xs">{item.text}</span>

                  <span className="font-bold text-2xl">{item.price}</span>
                </div>
                <img
                  src={`/images/${item.img}`}
                  className="mt-[44px] ml-[24px]"
                  alt="img"
                />
              </div>
            ))}
          </div>
          <div className="flex  max-w-[1060px] mx-auto ml-[48px] gap-[38px] mt-[40px]">
            <div className="w-[328px] h-[475px] border rounded-[8px] border-[#E9E9EB] ">
              <h3 className="font-semibold text-base ml-[32px] mt-[32px]">Best Selling</h3>
              <span className="font-medium text-xs ml-[32px] mt-[6px]">THIS MONTH</span>
              <hr className="w-[328px] h-[1px] bg-[#E9E9EB] mt-[24px] " />
              <div className="mt-[32px] ml-[32px]">
              <span className="font-bold text-24xl ">$2,400</span>
              <span className="font-medium text-sm"> - Total Sales</span>
              </div>
              <button className="mt-[24px] w-[270px] h-[28px] ml-[32px] rounded-full border  border-[#E6E7E8] font-medium text-xs">Classic Monochrome Tees — $940 Sales</button>
              <button className="mt-[24px] w-[267px] h-[28px]  ml-[32px] rounded-full border border-[#E6E7E8] font-medium text-xs">Monochromatic Wardrobe — $790 Sales</button>
              <button className="mt-[24px] w-[221px] h-[28px]  ml-[32px] rounded-full border border-[#E6E7E8] font-medium text-xs">Essential Neutrals — $740 Sales</button>
            
              <img src="/images/doughnut.png" alt="" className="ml-[32px] mt-[32px]" />
            </div>
            <div className="w-[695px] h-[475px] border rounded-[8px] border-[#E9E9EB] ">
              <div className="flex items-center ml-[40px] mt-[36.5px] gap-2">
              <h3 className="font-semibold text-base">Recent Orders</h3>
              <button className="w-[78px] h-[28px] bg-[#F6F6F6] rounded-full font-medium text-xs">View All</button>
              </div>
              <table className="table-fixed w-full mt-[20px] border-collapse">
  <thead>
    <tr className="h-[45px] text-left font-medium text-sm text-[#5C5F6A] border-b border-[#E9E9EB]">
      <th className="px-4 py-2">Item</th>
      <th className="px-4 py-2">Date</th>
      <th className="px-4 py-2">Total</th>
      <th className="px-4 py-2">Status</th>
    </tr>
  </thead>
  <tbody>
    {table.map((item) => (
      <tr key={item.id} className="h-[57px] hover:bg-[#F9F9F9] border-b border-[#E9E9EB] mt-[24px] text-sm text-[#5C5F6A]">
        <td className="px-4 py-2">{item.text}</td>
        <td className="px-4 py-2">{item.data}</td>
        <td className="px-4 py-2">{item.price}</td>
        <td className="px-4 py-2">{item.status}</td>
      </tr>
    ))}
  </tbody>
</table>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
