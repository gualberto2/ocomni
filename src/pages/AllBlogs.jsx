import React, { useEffect, useState } from "react";
import useQueryPosts from "../hooks/useQueryPosts";
import { PostsAll } from "../components/blog-components/PostCategories";
import Pagination from "../components/blog-components/Pagination";
import { QUERY_ALL_POSTS } from "../components/blog-components/queries";

const AllBlogs = () => {
  const { posts, error } = useQueryPosts({ query: QUERY_ALL_POSTS, limit: 7 });
  return (
    <>
      <div>
        <div>
          <div>
            {posts?.map((post) => (
              <div>{post.title}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBlogs;
