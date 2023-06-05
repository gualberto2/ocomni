import React from "react";
import { Link } from "react-router-dom";

export default function Posts({ posts }) {
  console.log(posts);
  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id}>
          <div>
            <Link to={`/post/${post.slug}`}>
              <img src={post.featuredImage.url} alt="" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
