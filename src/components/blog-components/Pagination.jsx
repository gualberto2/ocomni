import React, { useEffect, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const Pagination = ({ totalPage }) => {
  const { search } = useLocation();
  const [pageNumbers, setPageNumbers] = useState([]);
  const page = Number(new URLSearchParams(search).get("page")) || 1;

  useEffect(() => {
    if (totalPage <= 1) return;
    if (totalPage < 5) {
      const newArr = [...Array(totalPage)].map((_, i) => i + 1);
      return setPageNumbers(newArr);
    }
    //totalPage >= 5
    let newArr = [];

    for (let index = 1; index <= 5; index++) {
      if (page <= 2) {
        newArr.push(index);
      }
      if (page > 2 && page < totalPage - 2) {
        newArr.push(page + index - 3);
      }
      if (page >= totalPage - 2) {
        newArr.push(index - 5 + totalPage);
      }
    }
    console.log(newArr);
  }, [totalPage, page]);

  console.log(page);
  return (
    <div className="flex flex-row justify-center items-center">
      <Link
        className="flex flex-row cursor-pointer mr-3 items-center font-primarybody hover:text-gray-500 transition duration-200 ease-in-out"
        to={`?page=${page - 1 <= 1 ? 1 : page - 1}`}
      >
        <AiFillCaretLeft />
        Prev
      </Link>
      <ul className="flex flex-row cursor-pointer items-center gap-1">
        {pageNumbers?.map((num) => (
          <Link to={`?page=${num}`} key={num}>
            <li
              className={
                page === num
                  ? "bg-purple-600 text-white px-2 font-primarybody"
                  : "bg-none text-black hover:bg-slate-700 font-primarybody transition duration-200 ease-in-out px-2 hover:text-white"
              }
            >
              {num}
            </li>
          </Link>
        ))}
      </ul>

      <Link
        className="flex flex-row  items-center  ml-4 "
        to={`?page=${page + 1 >= totalPage ? totalPage : page + 1}`}
      >
        <p className="cursor-pointer hover:text-gray-500 transition duration-200 ease-in-out font-primarybody">
          Next
        </p>
        <AiFillCaretRight />
      </Link>
    </div>
  );
};

export default Pagination;
