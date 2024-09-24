import React from "react";

const Main = () => {
  return (
    <div>
      <div className="bg-gray-100  py-36">
        <div className="flex items-center mx-auto max-w-[1116px]">
          <div className="lg:w-1/2">
            <h2 className="text-2xl h-6 tracking-tight font-semibold text-black mb-6">
              Fresh Arrivals Online
            </h2>
            <p className="text-lg leading-8 text-gray-800 h-8 mb-10">
              Discover Our Newest Collection Today.
            </p>
            <button className="bg-black text-white rounded px-4 py-2 flex items-center h-[44px] top-[260px] left-[182px] p-[12px_24px] gap-[6px]">
              View Collection
              <img src="/images/arrow.png" className="ml-2 mt-1" alt="arrow" />
            </button>
          </div>

          <div className="lg:w-1/2 relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              src="/images/Hero Image.png"
              alt="Product"
              className="absolute w-64 h-80 rounded-lg shadow-lg"
            />
            <div className="w-80 h-80 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="bg-white ">
        <div className="  items-center  mx-auto max-w-[1116px]">
          <div className="grid grid-rows-1 grid-flow-col gap-4 w-auto">
            <div className="w-80 h-56">
              <img src="/images/Icon 1.png" alt="img" />
              <h1>Free Shipping</h1>
              <p>
                Upgrade your style today and get FREE shipping on all orders!
                Don't miss out.
              </p>
            </div>

            <div className="w-80 h-56">
              <img src="/images/Icon 2.png" alt="img" />
              <h6>Satisfaction Guarantee</h6>
              <p>
                Shop confidently with our Satisfaction Guarantee: Love it or get
                a refund.
              </p>
            </div>

            <div className="w-80 h-56">
              <img src="/images/Icon 3.png" alt="img" />
              <h6>Secure Payment</h6>
              <p>
                Your security is our priority. Your payments are secure with us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-full">
        <p>shop now</p>
        <h4>Best Selling</h4>
      </div>

      <div>
        <div class="grid grid-rows-1 grid-flow-col gap-4 max-w-[1116px] mx-auto">
          <div>
            <div className="w-60 h-80 bg-gray-200 rounded">
              <img src="/images/t-shirt-1.png" />
            </div>
            <div>
              <p>Classic Monochrome Tees</p>
              <button className="bg-blue-100">IN STOCK</button>
              <div>$35.00</div>
            </div>
          </div>
          <div>
            <div className="w-60 h-80 bg-gray-200 rounded">
              <img src="/images/t-shirt-2.png" />
            </div>
            <div>
              <p>Classic Monochrome Tees</p>
              <button className="bg-blue-100">IN STOCK</button>
              <div>$35.00</div>
            </div>
          </div>

          <div>
            <div className="w-60 h-80 bg-gray-200 rounded">
              <img src="/images/t-shirt-3.png" />
            </div>
            <p>Classic Monochrome Tees</p>
            <button className="bg-blue-100">IN STOCK</button>
            <div>$35.00</div>
          </div>

          <div>
            <div className="w-60 h-80 bg-gray-200 rounded">
              <img src="/images/t-shirt-4.png" />
            </div>
            <p>Classic Monochrome Tees</p>
            <button className="bg-blue-100">IN STOCK</button>
            <div>$35.00</div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="mx-auto max-w-[1116px]">
          <div className="flex justify-between items-center">
            <div>
              <h2>Browse Our Fashion Paradise!</h2>
              <p>
                Step into a world of style and explore our diverse collection of
                clothing categories.
              </p>
              <button>Start Browsing</button>
            </div>

            <img
              src="/images/category_image.png"
              className="w-[200px]"
              alt="image"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-full">
        <p>shop now</p>
        <h4>Best Selling</h4>
      </div>

      <div>
        <div class="grid grid-rows-1 grid-flow-col gap-4 max-w-[1116px] mx-auto">
          <div>
            <div className="w-60 h-80 bg-gray-200 rounded">
              <img src="/images/t-shirt-1.png" />
            </div>
            <div>
              <p>Classic Monochrome Tees</p>
              <button className="bg-blue-100">IN STOCK</button>
              <div>$35.00</div>
            </div>
          </div>
          <div>
            <div className="w-60 h-80 bg-gray-200 rounded">
              <img src="/images/t-shirt-2.png" />
            </div>
            <div>
              <p>Classic Monochrome Tees</p>
              <button className="bg-blue-100">IN STOCK</button>
              <div>$35.00</div>
            </div>
          </div>

          <div>
            <div className="w-60 h-80 bg-gray-200 rounded">
              <img src="/images/t-shirt-3.png" />
            </div>
            <p>Classic Monochrome Tees</p>
            <button className="bg-blue-100">IN STOCK</button>
            <div>$35.00</div>
          </div>

          <div>
            <div className="w-60 h-80 bg-gray-200 rounded">
              <img src="/images/t-shirt-4.png" />
            </div>
            <p>Classic Monochrome Tees</p>
            <button className="bg-blue-100">IN STOCK</button>
            <div>$35.00</div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 ">
        <div className="mx-auto max-w-[1116px] h-50">
          <h3>Join Our Newsletter</h3>
          <p>We love to surprise our subscribers with occasional gifts.</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
