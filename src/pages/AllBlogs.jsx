import React from "react";
import useQueryPosts from "../hooks/useQueryPosts";
import Pagination from "../components/blog-components/Pagination";
import { QUERY_ALL_POSTS } from "../components/blog-components/queries";
import {
  ContextProvider,
  useMyContext,
} from "../components/blog-components/store";
import Loading from "../components/blog-components/Loading";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const AllBlogs = () => {
  const { posts, error } = useQueryPosts({ query: QUERY_ALL_POSTS, limit: 3 });
  const { loading, totalPage } = useMyContext();
  const navigate = useNavigate();

  return (
    <>
      {loading && <Loading />}
      <div>
        <div className="grid grid-cols-1 grid-rows-9 md:grid-cols-2 lg:grid-cols-3 grid-flow-row align-center mx-auto gap-6 my-16 px-8 md:px-0 sm:max-w-3xl lg:max-w-full lg:px-8">
          {posts?.map((post) => (
            <div key={post.id}>
              <div className="bg-stone-200 flex flex-col mt-2 gap-2 items-center ">
                <img
                  onClick={() => navigate(`/article/${post.slug}`)}
                  src={post.featuredImage.url}
                  alt=""
                  loading="lazy"
                  className="h-[300px] w-full cursor-pointer  object-cover hover:scale-105 transition-scale duration-200 ease-in"
                />
                <div className="px-6 pt-2 pb-8">
                  <h3
                    className="font-header text-gray-900 text-xl mb-2 tracking-wide md:h-16  cursor-pointer md:line-clamp-2 hover:text-purple-600 hover:underline active:text-purple-900 transition duration-200"
                    onClick={() => navigate(`/article/${post.slug}`)}
                  >
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 font-primarybody text-md">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-row justify-between mt-4">
                    <p>{moment(post.createdAt).format("MM/DD/YYYY")}</p>
                    <p>{post.author.name}</p>
                  </div>
                </div>
              </div>
            </div>
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
