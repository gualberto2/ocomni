import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";

export default function Posts({ posts, author, categories }) {
  console.log(posts);
  return (
    <>
      {posts?.map((post) => (
        <div key={post.id}>
          <li className="relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px]">
            <Link to={`/post/${post.slug}`}>
              <img
                src={post.featuredImage.url}
                alt=""
                className="h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
              />
              <span className="absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </Link>
            <div className="w-full p-[10px] mt-1 ">
              <div className="flex items-center space-x-1">
                <p className="font-bold text-lg mb-[2px] text-black truncate ">
                  {post.title}
                </p>
              </div>
              <p className="font-medium m-0 text-sm text-gray-900 truncate mb-1">
                {post.excerpt}
              </p>
              <div className="flex flex-row items-center gap-2 mb-1">
                <AiOutlineCalendar />
                <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
              </div>
              <div className="flex h-[50px] p-2">
                <img
                  src={post.author.photo.url}
                  alt=""
                  className="rounded-full "
                />
                <div className="">
                  <p className="font-light text-sm">{post.author.name}</p>
                  <p className=" truncate text-sm font-light pr-2">
                    {post.author.roles}
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
