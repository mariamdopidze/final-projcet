import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const Tabdetail = () => {
    const reviews = [
        {
          id: 1,
          initials: "Ed",
          name: "Emily Davis",
          ratingImage: "/images/fiveStar.png",
          date: "1 Week ago",
          reviewText:
            "This company always goes above and beyond to satisfy their customers.",
        },
        {
          id: 2,
          initials: "Ed",
          name: "Emily Davis",
          ratingImage: "/images/fiveStar.png",
          date: "1 Week ago",
          reviewText:
            "This company always goes above and beyond to satisfy their customers.",
        },
        {
          id: 3,
          initials: "Ed",
          name: "Emily Davis",
          ratingImage: "/images/fiveStar.png",
          date: "1 Week ago",
          reviewText:
            "This company always goes above and beyond to satisfy their customers.",
        },
      ];
  return (
    <div>
          <div className="bg-white">
        <div className="flex mx-auto max-w-[1116px]">
          <TabGroup className="flex">
            <TabList className="flex flex-col space-y-4 mt-60">
              <Tab className="w-[241px] h-[41px] rounded-[8px] text-sm font-medium transition-colors duration-300 bg-[#F6F6F6]">
                Details
              </Tab>
              <Tab className="w-[241px] h-[41px] rounded-[8px] text-sm font-medium transition-colors duration-300  bg-[#F6F6F6]">
                Reviews
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <div className="flex flex-col ml-8 mt-44">
                  <h4 className="w-[45px] h-[19px] font-semibold text-base">
                    Detail
                  </h4>
                  <p className="font-normal text-sm mt-6 max-w-[727px] ">
                    Elevate your everyday style with our Men's Black T-Shirts,
                    the ultimate wardrobe essential for modern men. Crafted with
                    meticulous attention to detail and designed for comfort,
                    these versatile black tees are a must-have addition to your
                    collection. The classic black color never goes out of style.
                    Whether you're dressing up for a special occasion or keeping
                    it casual, these black t-shirts are the perfect choice,
                    effortlessly complementing any outfit.
                  </p>

                  <ul className="mt-14 font-normal text-sm space-y-2">
                    <li>Premium Quality</li>
                    <li>Versatile Wardrobe Staple</li>
                    <li>Available in Various Sizes</li>
                    <li>Tailored Fit</li>
                  </ul>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="flex flex-col ml-8 mt-[176px]">
                  <div className="border-b border-[#E9E9EB] flex items-center justify-between p-2 ">
                    <div>
                      <div className="w-[45px] h-[19px] font-semibold text-base">
                        Reviews
                      </div>
                      <div className="flex items-center space-x-2 mt-[16px]">
                        <h4>4.2</h4>
                        <span>— 54 Reviews</span>
                      </div>
                      <button className="w-[144px] h-[44px] border rounded border-[#0E1422] mt-[40px]">
                        Write a review
                      </button>
                    </div>
                    <span className="text-gray-500 mt-[156px]">Sort by</span>
                  </div>

                  <div>
                    {reviews.map((review) => (
                      <div key={review.id} className="mb-4">
                        <div className="flex items-center mt-2">
                          <div className="w-[48px] h-[48px] rounded-full bg-[#F0F1FF] flex items-center justify-center">
                            {review.initials}
                          </div>
                          <div className="flex items-center justify-between w-full ml-2">
                            <h3>{review.name}</h3>
                            <img
                              src={review.ratingImage}
                              alt="Rating"
                              className="w-[96px] h-[16px]"
                            />
                          </div>
                        </div>
                        <span className="text-gray-500">{review.date}</span>
                        <p className="mt-1">{review.reviewText}</p>
                      </div>
                    ))}
                  </div>
                  <button className="w-[175px] h-[44px] mx-auto rounded border border-[#B6B7BC] mt-[64px]">
                    Load more reviews
                  </button>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
      
    </div>
  )
}

export default Tabdetail
