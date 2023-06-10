import React, { useState, useEffect } from "react";
import { graphcms, QUERY_FEATURED_IMAGE, QUERY_POSTS } from "./queries";
import { useParams, Link } from "react-router-dom";
import {
  PostsByPopularity,
  PostsByFeatured,
  PostByDaWeek,
  PostsByMarketing,
  PostsBySales,
} from "./PostCategories";
import PostCard from "./PostCard";

export default function BlogHome() {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    graphcms.request(QUERY_POSTS).then((res) => setPosts(res.posts));
  }, []);

  useEffect(() => {
    graphcms.request(QUERY_FEATURED_IMAGE).then((res) => setImages(res.images));
  }, []);
  return (
    <>
      <div className="mx-auto my-14 max-w-6xl px-8 ">
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
                <p className="mt-4 text-lg text-left font-medium border-b-2 border-purple-300 ">
                  Featured Posts
                  <span className="absolute right-3 text-sm mt-1 text-gray-400 transition duration-150 hover:text-purple-600 active:text-purple-900">
                    <Link to="/all-recent-blogs ">See All</Link>
                  </span>
                </p>
                <PostsByFeatured />
              </div>
            </div>
          </div>
        </div>
        <ul className="sm:grid sm:grid-cols-2  lg:grid-cols-4 my-12 gap-6">
          <PostCard posts={posts} className="w-[200px]" />
        </ul>
      </div>
      <div className="bg-gray-200 text-black">
        <div className="mx-auto sm:px-12 px-4 py-8 my-14 max-w-6xl ">
          <div>
            <div className="flex flex-row items-center">
              <h2 className="font-header text-2xl mr-2">Marketing</h2>
              <h2 className="border-b-2 border-blue-400 flex-grow mt-3"></h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <PostsByMarketing />
            </div>
            <div>
              <p className="text-center font-primarybody  hover:text-slate-600 mt-4 transition duration-200 cursor-pointer ">
                See more marketing articles
              </p>
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
            <div>
              <p className="text-center font-primarybody hover:text-slate-600 mt-4 transition duration-200 cursor-pointer ">
                See more sales articles
              </p>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col shadow-md">
            <img
              src="https://townsquare.media/site/812/files/2022/02/attachment-Drake-phone-meme.jpg?w=1200"
              alt=""
              className="w-auto h-[132px] sm:h-[180px] md:h-[250px] object-cover rounded-t-lg"
            />
            <div className="flex items-center flex-row bg-gray-300 px-12 py-9">
              <p className="text-xl font-header text-teal-700">
                Instagram Marketing{" "}
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
          <div className="flex flex-col shadow-md">
            <img
              src="https://townsquare.media/site/812/files/2022/02/attachment-Drake-phone-meme.jpg?w=1200"
              alt=""
              className="w-auto h-[132px] sm:h-[180px] md:h-[250px] object-cover rounded-t-lg"
            />
            <div className="flex items-center flex-row bg-gray-300 px-12 py-9">
              <p className="text-xl font-header text-teal-700">
                Instagram Marketing{" "}
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
          <div className="flex flex-col shadow-md">
            <img
              src="https://townsquare.media/site/812/files/2022/02/attachment-Drake-phone-meme.jpg?w=1200"
              alt=""
              className="w-auto h-[132px] sm:h-[180px] md:h-[250px] object-cover rounded-t-lg"
            />
            <div className="flex items-center flex-row bg-gray-300 px-12 py-9">
              <p className="text-xl font-header text-teal-700">
                Instagram Marketing{" "}
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
      </div>
    </>
  );
}

{
  /* <div>
          <p>Learn About Ocomni</p>
          <ul className="">
            <Link to="/posts/about">
              <PostsByAbout />
            </Link>
          </ul>
          sm:grid sm:grid-cols-2 lg:grid-cols-3
        </div> */
  // <h2 className="border-b-2 border-purple-400 flex-grow mt-3"></h2>
  // <p className="cursor-pointer invisible lg:visible sm:ml-2 text-lg font-primarybody">
  {
    /*  */
  }
}

// 2501 is the registers code/
