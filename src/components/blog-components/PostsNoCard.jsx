import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function PostsNoCard({ posts }) {
  console.log(posts);
  return (
    <>
      {posts?.map((post) => (
        <div key={post.id} className="">
          <li className="relative flex flex-col justify-between mb-2 items-center overflow-hidden border-b border-gray-300">
            <div className="w-full  mt-1 ">
              <div className="flex items-center space-x-1">
                <Link to={`/post/${post.slug}`}>
                  <p className="font-header cursor-pointer text-lg my-1 text-gray-800 transition duration-200 hover:text-purple-600 hover:underline active:text-purple-900">
                    {post.title}
                  </p>
                </Link>
              </div>

              <div className="flex flex-row justify-between  items-center gap-4 my-2">
                <span className="text-md font-light whitespace-nowrap text-gray-500 hover:text-gray-700  transition duration-300 cursor-default  ">
                  {moment(post.createdAt).format("MM/DD/YYYY")}
                </span>

                <div className="mb-2">
                  <p className="font-light mt-2 text line-clamp-1 text-gray-500 cursor-pointer transition duration-300 hover:text-gray-700">
                    {post.author.name}, {post.author.roles}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </div>
      ))}
    </>
  );
}

//className="relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px]"
//          <span className="absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg">
//{moment(post.createdAt).format("MMM DD, YYYY")}
//</span>
