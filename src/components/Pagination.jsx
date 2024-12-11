import React from "react";

const Pagination = ({totalPosts, postPerPage, setCurrentPage}) => {
  let pages = [];
  for (let index = 1; index <= Math.ceil(totalPosts / postPerPage); index++) {
    pages.push(index);
  }

  return <div>

{pages.map((page, index) => {
        return (
          <button
            className="border-2 border-black rounded-md text-black text-center w-6 h-6"
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



