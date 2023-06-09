import React, { useState, useEffect } from "react";
import { graphcms, QUERY_FEATURED_IMAGE, QUERY_POSTS } from "./queries";
import { useParams, Link } from "react-router-dom";
import {
  PostsByPopularity,
  PostsByFeatured,
  PostByDaWeek,
  PostsByMarketing,
} from "./PostCategories";
import PostCard from "./PostCard";
import PostRectangle from "./PostRectangle";

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
      <div className="bg-slate-200 text-black">
        <div className="mx-auto px-12 my-14 max-w-6xl ">
          <div>
            <div className="flex flex-row items-center">
              <h2 className="font-header text-2xl mr-2">Marketing</h2>
              <h2 className="border-b-2 border-purple-400 flex-grow mt-3"></h2>
              <p className="cursor-pointer sm:ml-2 text-lg font-primarybody">
                See more marketing posts
              </p>
            </div>
            <div className="">
              <PostsByMarketing />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <h2 className="font-header text-2xl mr-2">Sales</h2>
            <h2 className="border-b-2 border-cyan-300 flex-grow mt-3"></h2>
            <p className="cursor-pointer hidden sm:block sm:ml-2 text-lg font-primarybody">
              See more marketing posts
            </p>
          </div>
          <div></div>
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
}
