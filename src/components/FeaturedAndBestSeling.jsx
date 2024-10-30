import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const FeaturedAndBestSeling = () => {
  const [apiData, setApiData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const resData = await response.json();
      setApiData(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const onChangeTab = (type) => {
    navigate(`?tab=${type}`)
  }

  useEffect(() => {
    console.log(apiData[Math.floor(Math.random()*apiData.length)]);

   


    
  }, [search]);

  return (
    <div>
      <div className="flex items-center justify-center gap-6 mt-40">
        <button className="w-24 h-8 border rounded-full font-medium text-sm" onClick={()=>onChangeTab('featured')}>
          Featured
        </button>
        <button className="text-sm font-normal w-24 h-8 border rounded-full" onClick={()=>onChangeTab('best_seling')}>
          Best Selling
        </button>
      </div>

      <div>
        <div className="grid grid-rows-1 grid-flow-col gap-4 max-w-[1116px] mx-auto mt-14">
          {apiData.slice(0, 4).map((product, index) => (
            <div key={index}>
             <div className="w-[237px] h-[312px] bg-[#F6F6F6] rounded overflow-hidden relative transition-transform transform hover:scale-105 hover:shadow-lg duration-300 mx-auto flex items-center justify-center">
              <img
                src={product.image}
                className="w-40 h-40 object-contain"
                alt={product.title}
              />
            </div>
              <div>
                <p className="font-medium text-sm mt-3">{product.title}</p>
                <div className="flex items-center">
                  <button className="bg-white w-20 h-7 rounded-full border text-xs font-medium mt-3 text-center">
                    {product.rating.count === 0 ? "Out of Stock" : "In Stock"}
                  </button>
                  <div className="mt-3 ml-2 font-normal text-sm">
                    {product.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedAndBestSeling;
