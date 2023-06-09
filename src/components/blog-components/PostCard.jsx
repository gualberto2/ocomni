import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";

export default function PostCard({ posts, author, categories }) {
  console.log(posts);
  return (
    <>
      {posts?.map((post) => (
        <div key={post.id} className="mb-6 sm:mb-0">
          <article className="flex flex-col">
            <div className="">
              <img
                src={post.featuredImage.url}
                alt=""
                className="h-[150px] cursor-pointer w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
              />
            </div>
            <div>
              <h1 className="font-header line-clamp-2">{post.title}</h1>
              <p className="line-clamp-2 font- font-primarybody text-slate-900">
                {post.excerpt}
              </p>
            </div>
            <div className="mt-2 mb-4">
              <p className="font-extralight text-sm mb-1  text-gray-700">
                {post.author.name}
              </p>
              <p className="font-extralight text-sm text-gray-700">
                {moment(post.createdAt).format("MM/DD/YYYY")}
              </p>
            </div>
          </article>
        </div>
      ))}
    </>
  );
}

//className="relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px]"
