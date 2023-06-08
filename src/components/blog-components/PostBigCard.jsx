import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";

export default function PostBigCard({ posts }) {
  console.log(posts);

  return (
    <>
      {posts?.map((post) => (
        <div key={post.id} className="">
          <li className="relative bg-purple-100 flex flex-col justify-between h-full  items-center overflow-hidden mt-3 duration-150">
            <img
              src={post.featuredImage.url}
              alt=""
              loading="lazy"
              className="h-[400px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
            />

            <div className="w-full py-4 px-12 mt-1 ">
              <div className="flex items-center space-x-1">
                <p className="font-header  text-center text-xl mb-2 tracking-wide text-black hover:underline cursor-pointer  ">
                  {post.title}
                </p>
              </div>
              <p className="font-extralight m-0 text-md text-gray-900 leading-7 line-clamp-4 mb-4">
                {post.excerpt}
              </p>
              <div className="flex flex-row items-center justify-between">
                <div>
                  <div class="flex items-center space-x-3 mb-3">
                    <img
                      class="w-8 h-8 rounded-full"
                      src={post.author.photo.url}
                      alt="Jese Leos avatar"
                    />
                    <span class="font-medium ">{post.author.name}</span>
                  </div>
                  <p className="flex flex-row items-center ">
                    <AiOutlineCalendar className="mr-1" />
                    <span className="font-light">
                      {moment(post.createdAt).format("MMM DD, YYYY")}
                    </span>
                  </p>
                </div>

                <div class="flex justify-between items-center">
                  <a
                    href="#"
                    class="inline-flex items-center font-medium  hover:underline"
                  >
                    Read more
                    <svg
                      class="ml-2 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
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

{
  /* <Link className="cursor-default" to={`/post/${post.slug}`}>
</Link> */
}
