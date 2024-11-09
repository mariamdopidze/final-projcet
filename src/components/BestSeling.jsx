import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BestSeling = () => {
  const [apiData, setApiData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=4");
      const resData = await response.json();
      setApiData(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-full mt-20">
        <button className="font-medium text-xs w-24 h-8 border rounded-full ">
          shop now
        </button>
        <button className="font-bold text-base mt-2 w-24 h-8 border rounded-full">
          Best Selling
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-[1116px] mx-auto mt-20">
        {apiData.map((product, index) => (
          <Link key={index} to={`/product/${product.id}`}>
            <div className="text-center">
              <div className="w-[237px] h-[312px] bg-[#F6F6F6] rounded overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-lg duration-300 mx-auto flex items-center justify-center">
                <img
                  src={product.image}
                  className="w-40 h-40 object-contain"
                  alt={product.title}
                />
              </div>
              <div className="mt-3">
                <p className="font-medium text-sm">{product.title}</p>
                <div className="mt-2">
                  <button className="bg-white w-20 h-7 rounded-full border text-xs font-medium">
                    {product.rating.count === 0 ? "Out of Stock" : "In Stock"}
                  </button>
                  <div className="mt-3 ml-2 font-normal text-sm inline-block">
                    {product.price}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestSeling;
