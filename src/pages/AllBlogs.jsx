import React from "react";
import useQueryPosts from "../hooks/useQueryPosts";
import Pagination from "../components/blog-components/Pagination";
import { QUERY_ALL_POSTS } from "../components/blog-components/queries";
import {
  ContextProvider,
  useMyContext,
} from "../components/blog-components/store";
import Loading from "../components/blog-components/Loading";

const AllBlogs = () => {
  const { posts, error } = useQueryPosts({ query: QUERY_ALL_POSTS, limit: 2 });
  const { loading, totalPage } = useMyContext();

  return (
    <>
      {loading && <Loading />}
      <div>
        <div>
          {posts?.map((post) => (
            <div key={post.id}>{post.title}</div>
          ))}
        </div>
      </div>
      <Pagination totalPage={totalPage} />
    </>
  );
};

const AllBlogsPage = () => (
  <ContextProvider>
    <AllBlogs />
  </ContextProvider>
);

export default AllBlogsPage;
