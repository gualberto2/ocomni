import React, { useState, useEffect } from "react";
import Posts from "./Posts";
import { graphcms, QUERY_POSTS } from "../../GraphQL/queries";
import { useParams, Link } from "react-router-dom";
import { PostsByAbout } from "./PostCategories";

export default function BlogHome() {
  const [posts, setPosts] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    graphcms.request(QUERY_POSTS).then((res) => setPosts(res.posts));
  }, []);

  return (
    <>
      <div className="">
        <p>Recent Posts</p>
        <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          <Posts posts={posts} />
        </ul>
        <div>
          <p>Popular</p>
        </div>
      </div>
      <div>
        <div>
          <p>Learn About Ocomni</p>
          <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            <Link to="/posts/about">
              <PostsByAbout />
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
