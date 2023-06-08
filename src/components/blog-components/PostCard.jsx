import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";

export default function PostCard({ posts, author, categories }) {
  console.log(posts);
  return (
    <>
      {posts?.map((post) => (
        <div key={post.id} className="">
          <article className="">
            <div className="w-full">
              <img
                src={post.featuredImage.url}
                alt=""
                className="h-[150px] w-[150px] object-cover hover:scale-105 transition-scale duration-200 ease-in"
              />
            </div>
            <div>
              <h1 className="font-header">{post.title}</h1>
            </div>
          </article>
        </div>
      ))}
    </>
  );
}

//className="relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150 m-[10px]"
