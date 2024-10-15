import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-[#0E1422] w-[749px] h-[200px] mx-auto">
        <img
          src="/images/Star2.png"
          alt="img"
          className=" pl-[72px] pt-[72px]"
        />
        <img src="/images/Avatar2.png" className="ml-[481px] " />
        <div className="ml-[72px] ">
          <h3 className="font-extrabold text-2xl  text-[#0E1422] ">
            DevCut's Ecommerce
          </h3>
          <p className="text-[#202533] font-medium text-sm w-[418px] h-[75px] mt-[24px]">
            Hey there 👋 I'm Ali Norouzi! Software developer since 2019,
            Passionate about crafting user experiences and transforming ideas
            into polished products.
          </p>
          <div className="flex flex-col mt-[24px] font-normal text-sm text-[#202533]">
            <a href="anorouzi.work@gmail.com">
              {" "}
              For inquiries: For inquiries: anorouzi.work@gmail.com
            </a>
            <a href="anorouzi.Live Website" className="mt-[16px]">
              {" "}
              Live Website: ecommerce.anorouzi.com
            </a>
            <a
              href="anorouzi.ecommerce-admin.anorouzi.com"
              className="mt-[16px]"
            >
              {" "}
              Live Admin: ecommerce-admin.anorouzi.com
            </a>
          </div>
          <img src="/images/bmc.png" className="mt-[32px]" />
        </div>
        <div className="h-screen flex items-center justify-center">
          <div className="w-[749px] h-[104px] bg-[#E2E8F0] mx-auto flex items-center justify-center space-x-4">
            <a href="https://anorouzi.com" className="flex items-center">
              <img src="/images/globe.png" alt="Globe icon" className="mr-1" />
              <span>anorouzi.com</span>
            </a>
            <a href="https://anorouzii.com" className="flex items-center">
              <img
                src="/images/linkedin (1) 1.png"
                alt="LinkedIn icon"
                className="mr-1"
              />
              <span>anorouzii</span>
            </a>
            <a href="https://anorouzi.com" className="flex items-center">
              <img src="/images/figma.png" alt="Figma icon" className="mr-1" />
              <span>anorouzi</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
