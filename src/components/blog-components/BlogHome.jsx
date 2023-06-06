import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import { graphcms, QUERY_FEATURED_IMAGE, QUERY_POSTS } from "./queries";
import { useParams, Link } from "react-router-dom";
import { PostsByAbout } from "./PostCategories";
import FeaturedImageOfTheWeek from "./FeaturedImageOfTheWeek";

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
      <div className="grid grid-cols-1">
        <div className="">
          <p className="mt-4 text-lg text-center font-medium border-b-2">
            Recent Posts
            <span className="absolute right-1 text-sm mt-2 text-purple-800 hover:text-purple-900">
              <Link to="/all-recent-blogs">See All</Link>
            </span>
          </p>

          <div className="">
            <ul className="flex flex-col gap-4 mx-2">
              <Posts posts={posts} />
            </ul>
          </div>
        </div>
        <div>
          <p className="mt-4 text-lg text-center font-medium border-b-2">
            Popular
            <span className="absolute right-3 text-sm mt-2">
              <Link to="/all-recent-blogs">See All</Link>
            </span>
          </p>
          <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3  ">
            {/* <Posts posts={posts} /> */}
          </ul>
        </div>
      </div>
      <div></div>
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
