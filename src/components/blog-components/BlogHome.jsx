import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import {
  graphcms,
  QUERY_FEATURED_IMAGE,
  QUERY_POSTS,
} from "../../GraphQL/queries";
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
      <div className="">
        <div className="w-full">
          <FeaturedImageOfTheWeek images={images} />
        </div>
        <p>Recent Posts</p>
        <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <Posts posts={posts} />
        </ul>
        <div>
          <p>Popular</p>
          <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            <Posts posts={posts} />
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
        </div> */
}
