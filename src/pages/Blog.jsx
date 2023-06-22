import React, { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";
import {
  PostsByPopularity,
  PostsByFeatured,
  PostByDaWeek,
  PostsByMarketing,
  PostsBySales,
  CategorySec,
} from "../components/blog-components/PostCategories";
import PostCard from "../components/blog-components/PostCard";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    document.body.classList.add("page-animation");

    return () => {
      document.body.classList.remove("page-animation");
    };
  }, []);

  return (
    <>
      <div className="mx-auto my-14 max-w-6xl px-8 ">
        <h1 className="mb-6 text-4xl font-bold text-gray-800">Blog</h1>
        <div className="whitespace-">
          <CategorySec />
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6  lg:gap-2 lg:grid-cols-8">
            <div className="lg:col-start-1 lg:col-end-6 lg:mr-8">
              <PostByDaWeek />
            </div>
            <div className="lg:col-start-6 lg:col-end-9 row-span-0  ">
              <div className="lg:sticky sm:relative">
                <p className="mt-4 text-lg text-left font-medium border-b-2 border-purple-300 ">
                  Popular Posts
                  <span className="absolute right-3 text-sm mt-1 text-gray-400 transition duration-150 hover:text-purple-600 active:text-purple-900">
                    <Link to="/all-recent-blogs ">See All</Link>
                  </span>
                </p>
                <PostsByPopularity />
              </div>
              <div className="lg:sticky sm:relative mb-3">
                <h2 className="mt-4 text-lg text-left font-semibold border-b-2 border-purple-300 ">
                  Featured Posts
                  <span className="absolute right-3 text-sm mt-1 text-gray-400 transition duration-150 hover:text-purple-600 active:text-purple-900">
                    <Link to="/all-recent-blogs ">See All</Link>
                  </span>
                </h2>
                <PostsByFeatured />
              </div>
            </div>
          </div>
        </div>
        <div className="my-8">
          <div className="flex justify-center items-center">
            <div
              className="border-t border-purple-300 w-full"
              style={{ height: "1px" }}
            ></div>
            <Link
              to="/all-blogs"
              className="font-primarybody whitespace-nowrap uppercase text-center text-lg px-4 hover:text-gray-400 text-gray-900 transition duration-150 ease-in"
            >
              View all posts here
            </Link>
            <div
              className="border-t border-purple-300 w-full"
              style={{ height: "1px" }}
            ></div>
          </div>
        </div>

        <ul className="sm:grid sm:grid-cols-2  lg:grid-cols-4 my-12 gap-6">
          <PostCard posts={posts} className="w-[200px]" />
        </ul>
      </div>
      <div className="bg-gray-200 text-black">
        <div className="mx-auto sm:px-12 px-4 py-8 my-14 max-w-6xl ">
          <div className="mb-12">
            <div className="flex flex-row items-center">
              <h2 className="font-header text-2xl mr-2">Marketing</h2>
              <h2 className="border-b-2 border-blue-400 flex-grow mt-3"></h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <PostsByMarketing />
            </div>
            <div className="my-6">
              <div className="flex justify-center items-center">
                <div
                  className="border-t border-blue-400 w-full"
                  style={{ height: "1px" }}
                ></div>
                <Link
                  to="/all-blogs"
                  className="font-primarybody whitespace-nowrap uppercase text-center text-sm px-4 hover:text-gray-400 text-gray-900 transition duration-150 ease-in"
                >
                  View more marketing posts here
                </Link>
                <div
                  className="border-t border-blue-300 w-full"
                  style={{ height: "1px" }}
                ></div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center">
              <h2 className="font-header text-2xl mr-2">Sales</h2>
              <h2 className="border-b-2 border-green-400 flex-grow mt-3"></h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <PostsBySales />
            </div>
            <div className="my-6">
              <div className="flex justify-center items-center">
                <div
                  className="border-t border-green-400 w-full"
                  style={{ height: "1px" }}
                ></div>
                <Link
                  to="/all-blogs"
                  className="font-primarybody whitespace-nowrap uppercase text-center text-sm px-4 hover:text-gray-400 text-gray-900 transition duration-150 ease-in"
                >
                  View more sales posts here
                </Link>
                <div
                  className="border-t border-green-400 w-full"
                  style={{ height: "1px" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6 mx-auto my-16 max-w-6xl px-8">
        <h2 className="text-center font-header text-2xl">
          Explore More Topics
        </h2>
        <p className="font-primarybody text-lg text-center">
          Ready to learn something new? We got you with great resources!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="flex flex-col shadow-md">
          <div className="flex items-center flex-row bg-gray-300 px-12 py-9">
            <p className="text-xl font-header text-teal-700">
              Instagram Marketing
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-teal-700"
            >
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
