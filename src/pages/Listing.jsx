import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Listing = () => {
  return (
    <div>
      <Discount />
      <Header />
      <div className="bg-neutral-100 w-full  p-4   h-16">
        <div className="flex items-center mx-auto max-w-[1116px]">
          <p>Ecommerce</p>
          <p>Search</p>
        </div>
      </div>
      <div className='"bg-neutral-100 '>
        <div className="flex  items-center mx-auto max-w-[1116px] ">
          <div className="bg-white w-[248px] h-[828px] rounded-[6px] border mt-8">
            <h6 className="ml-5 mt-6 font-medium text-sm">Categories</h6>
            <ul class="w-48 text-sm font-medium text-gray-900 border-b border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white ml-5 mt-4">
              <li class="w-full border-b border-gray-200 dark:border-gray-600">
                <div class="flex items-center ps-3">
                  <input
                    id="vue-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="vue-checkbox"
                    class="w-full py-3 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    Trousers
                  </label>
                </div>
              </li>
              <li class="w-full border-b border-gray-200 dark:border-gray-600">
                <div class="flex items-center ps-3">
                  <input
                    id="react-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="react-checkbox"
                    class="w-full py-3 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    Shoe
                  </label>
                </div>
              </li>
              <li class="w-full border-b border-gray-200 dark:border-gray-600">
                <div class="flex items-center ps-3">
                  <input
                    id="angular-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="angular-checkbox"
                    class="w-full py-3 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    Handbag
                  </label>
                </div>
              </li>
              <li class="w-full border-b border-gray-200 dark:border-gray-600">
                <div class="flex items-center ps-3">
                  <input
                    id="laravel-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="laravel-checkbox"
                    class="w-full py-3 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    Hat
                  </label>
                </div>
              </li>
              <li class="w-full border-b border-gray-200 dark:border-gray-600">
                <div class="flex items-center ps-3">
                  <input
                    id="thermos-checkbox"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="thermos-checkbox"
                    class="w-full py-3 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    Thermos
                  </label>
                </div>
              </li>
              <li class="w-full border-b border-gray-200 dark:border-gray-600">
                <div class="flex items-center ps-3">
                  <input
                    id="laravel-checkbox-2"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    for="laravel-checkbox-2"
                    class="w-full py-3 ms-2 text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    Perfume
                  </label>
                </div>
              </li>
            </ul>

            <h6 className="mt-11 ml-4 font-medium text-sm">Color</h6>
            <div class="flex flex-wrap mt-3 ml-[17.5px]">
              <div class="flex items-center me-4">
                <input
                  id="green-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  class="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div class="flex items-center me-4">
                <input
                  checked
                  id="purple-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div class="flex items-center me-4">
                <input
                  id="teal-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div class="flex items-center me-4">
                <input
                  id="yellow-radio"
                  type="radio"
                  value=""
                  name="colored-radio"
                  class="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </div>

            <h6 className="font-medium text-sm mt-14 ml-4">Size</h6>

            <div class="flex mt-3 ml-3 ">
              <div class="flex items-center me-4">
                <input id="size-s" type="checkbox" value="S" class="hidden" />
                <label
                  for="size-s"
                  class="w-10 h-10 flex items-center justify-center text-black bg-gray-100 border-gray-300 rounded cursor-pointer"
                >
                  S
                </label>
              </div>
              <div class="flex items-center me-4">
                <input id="size-s" type="checkbox" value="S" class="hidden" />
                <label
                  for="size-s"
                  class="w-10 h-10 flex items-center justify-center text-black bg-gray-100 border-gray-300 rounded cursor-pointer"
                >
                  M
                </label>
              </div>
              <div class="flex items-center me-4">
                <input id="size-s" type="checkbox" value="S" class="hidden" />
                <label
                  for="size-s"
                  class="w-10 h-10 flex items-center justify-center text-black bg-gray-100 border-gray-300 rounded cursor-pointer"
                >
                  L
                </label>
              </div>
              <div class="flex items-center me-4">
                <input id="size-s" type="checkbox" value="S" class="hidden" />
                <label
                  for="size-s"
                  class="w-10 h-10 flex items-center justify-center text-black bg-gray-100 border-gray-300 rounded cursor-pointer"
                >
                  XL
                </label>
              </div>
              <div class="flex items-center me-4">
                <input id="size-s" type="checkbox" value="2XL" class="hidden" />
                <label
                  for="size-s"
                  class="w-10 h-10 flex items-center justify-center text-black bg-gray-100 border-gray-300 rounded cursor-pointer"
                >
                  2XL
                </label>
              </div>
            </div>

            <h6 className="font-medium text-sm mt-14 ml-4">Price</h6>
            
    
    <input id="labels-range-input" type="range" value="1000"  class="w-[199px] h-[4px] ml-5 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 "/>
  <button className="bg-black">   </button>
    
</div>



          </div>
        </div>
      </div>
   
  );
};

export default Listing;
