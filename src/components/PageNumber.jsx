// import React, { useState } from "react";

// const PageNumber = () => {
//   const pageNumbers = [1, 2, "...", 23, 24];
//   const [activePage, setActivePage] = useState(null);

//   const handleClick = (number) => {
//     setActivePage(number);
//   };
//   return (
//     <div>
//       <nav
//         aria-label="Page navigation example"
//         className="mt-[64px] w-[344px] ml-[250px] h-[44px] border-[#3636bf]"
//       >
//         <ul className="flex items-center space-x-1 h-8 text-sm justify-center">
//           <li>
//             <a
//               href="#"
//               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white hover:text-gray-700"
//             >
//               <span className="sr-only">Previous</span>
//               <svg
//                 className="w-2.5 h-2.5"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 6 10"
//                 aria-hidden="true"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M5 1 1 5l4 4"
//                 />
//               </svg>
//             </a>
//           </li>

//           {pageNumbers.map((number) => (
//             <li key={number}>
//               <a
//                 href="#"
//                 onClick={() => handleClick(number)}
//                 className={`flex items-center justify-center px-3 h-8 leading-tight ${
//                   activePage === number
//                     ? "text-[#0E1422] bg-[#F6F6F6] z-10"
//                     : "text-gray-500 bg-white hover:text-gray-700"
//                 }`}
//                 aria-current={activePage === number ? "page" : undefined}
//               >
//                 {number}
//               </a>
//             </li>
//           ))}

//           <li>
//             <a
//               href="#"
//               className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 hover:text-gray-700"
//             >
//               <span className="sr-only">Next</span>
//               <svg
//                 className="w-2.5 h-2.5"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 6 10"
//                 aria-hidden="true"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m1 9 4-4-4-4"
//                 />
//               </svg>
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default PageNumber;
