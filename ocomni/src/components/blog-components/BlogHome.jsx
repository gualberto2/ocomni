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
        <Posts posts={posts} />
        <div>
          <p>Popular</p>
        </div>
      </div>
      <div>
        <p>Learn About Ocomni</p>
        <Link to="/posts/about">
          <PostsByAbout />
        </Link>
      </div>
    </>
  );
}
