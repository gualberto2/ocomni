import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
export default function Blogitem({ blogpost, id, onEdit, onDelete }) {
  return (
    <li className="relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px] ">
      <Link className="contents" to={`/category/${blogpost.type}/${id}`}>
        <img
          className="h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
          loading="lazy"
          src={blogpost.imgUrls[0]}
        />
        <Moment
          className="absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg"
          fromNow
        >
          {blogpost.timestamp?.toDate()}
        </Moment>
        <div className="w-full p-[10px] ">
          <p className="font-semibold m-0 text-lg ">{blogpost.title}</p>
          <p className="text-[#457b9d] mt-2 font-semibold">
            ${blogpost.type ? blogpost.info : blogpost.mark}
            {listing.type == "rent" && " / month"}
          </p>
          <div className="flex items-center mt-[10px] space-x-3">
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">
                {blogpost.bedrooms > 1 ? `${listing.bedrooms} Beds` : `1 Bed`}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">
                {blogpost.bathrooms > 1
                  ? `${blogpost.bathrooms} Baths`
                  : `1 Bath`}
              </p>
            </div>
          </div>
        </div>
      </Link>
      {onDelete && (
        <FaTrash
          className="absolute bottom-2 right-2 h-[14px] cursor-pointer text-red-500"
          onClick={() => onDelete(blogpost.id)}
        />
      )}
      {onEdit && (
        <MdEdit
          className="absolute bottom-2 right-7 h-[14px] cursor-pointer text-black-500"
          onClick={() => onEdit(blogpost.id)}
        />
      )}
    </li>
  );
}
