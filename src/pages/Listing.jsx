import React, { useState, useEffect } from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Categories from "../components/Categories";
import PageNumber from "../components/PageNumber";
import Pagination from "../components/Pagination";

const Listing = () => {
  const [allCategories, setAllCategories] = useState([]);
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPerPage] = useState(6);

  const getAllCategory = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const resData = await res.json();
      setAllCategories(resData);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const [apiData, setApiData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const resData = await response.json();
      setApiData(resData);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataByCategory = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const resData = await response.json();

      setApiData(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();

    console.log(category);

    if (category) {
      getDataByCategory();
    } else {
      getData();
    }
  }, [category]);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = apiData.slice(firstPostIndex, lastPostIndex);
  console.log(currentPost);

  return (
    <>
      <div>
        <Discount />
        <Header />
        <div className="bg-neutral-100 w-full p-4 h-16">
          <div className="flex items-center mx-auto max-w-[1116px]">
            <p className="text-[#5C5F6A] font-medium text-sm">Ecommerce</p>
            <img src="images/Chevron.png" alt="img" />
            <p className="text-[#0E1422] font-medium text-sm">Search</p>
          </div>
        </div>
        <div className="bg-neutral-100">
          <div className="flex justify-items-center mx-auto max-w-[1116px]">
            <Categories />

            <div className="List mt-8 ml-8">
              <h6 className="font-medium text-sm">Applied Filters:</h6>
              <div className="flex items-center mt-3 gap-3">
                <button className="w-[111px] h-[36px] font-medium text-xs text-[#0E1422] rounded-[100px] border text-center flex items-center justify-between px-3">
                  Perfume
                  <img
                    src="/images/close.svg"
                    alt="remove"
                    className="w-[20px] h-[20px]  inline-flex items-center justify-center ml-2 text-[#5C5F6A]"
                  />
                </button>
                <button className="w-[111px] h-[36px] font-medium text-xs text-[#0E1422]  rounded-[100px] border text-center  flex items-center justify-between px-3">
                  Size: M
                  <img
                    src="/images/close.svg"
                    alt="remove"
                    className="w-[20px] h-[20px]  inline-flex items-center justify-center ml-2 text-[#5C5F6A]"
                  />
                </button>
              </div>

              <div className="flex justify-between items-center mt-6">
                <p className="text-[#5C5F6A] font-medium text-xs">
                  Showing 1-9 of 36 results.
                </p>
                <p className="mr-9 text-[#5C5F6A] font-medium text-xs">
                  Sort by
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                {currentPost.map((product, index) => (
                  <Link key={index} to={`/product/${product.id}`}>
                    <div key={index}>
                      <div className="w-60 h-80 bg-neutral-200 rounded flex items-center">
                        <img
                          src={product.image}
                          className="w-40 h-40 mx-auto"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-sm mt-3 overflow-hidden h-[38px]">
                          {product.title}
                        </p>
                        <div className="flex items-center mt-2">
                          <button className="bg-white text-center w-20 h-7 rounded-full border text-xs font-medium mt-3 items-center">
                            {product.rating.count === 0
                              ? "Out of Stock"
                              : product.rating.count < 5
                              ? "Low Stock"
                              : "In Stock"}
                          </button>
                          <div className="mt-3 ml-2 font-normal text-sm text-center">
                            ${product.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div></div>
            </div>
          </div>
          <div className="w-full  flex items-center justify-center">
            <Pagination
              totalPosts={apiData.length}
              postPerPage={postPerPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Listing;
