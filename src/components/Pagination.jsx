import React from "react";

const Pagination = ({totalPosts, postPerPage, setCurrentPage}) => {
  let pages = [];
  for (let index = 1; index <= Math.ceil(totalPosts / postPerPage); index++) {
    pages.push(index);
  }

  return <div className="flex flex-row gap-8 items-center mt-10">

{pages.map((page, index) => {
        return (
          <button
            className="border-2 border-black rounded-md text-black text-center w-8 h-8  hover:bg-black  hover:text-white transition duration-300 ease-in-out"
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
    );
    })}

  </div>;
};

export default Pagination;



