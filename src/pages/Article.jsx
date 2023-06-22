import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { useParams } from "react-router-dom";
import {
  QUERY_SELECTED_POST,
  graphcms,
} from "../components/blog-components/queries";

const Article = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  // const [category, setCategory] = useState([]);

  useEffect(() => {
    graphcms
      .request(QUERY_SELECTED_POST, { slug })
      .then((res) => setPosts(res.posts));
  }, [slug]);

  return (
    <>
      {/* {category?.map((category, post) => (
        <path className="flex flex-row">
          <p className="mr-3 text-gray-500">Blog</p>
          <p className="mr-3 text-gray-600">/</p>
          <p className="mr-3 text-gray-500">
            <p>{category.title}</p>
          </p>
          <p className="mr-3 text-gray-600">/</p>
          <p className="text-purple-800">{post.title}</p>
        </path>
      ))} */}

      {posts?.map((post) => (
        <>
          <Post post={post} />
        </>
      ))}
    </>
  );
};

export default Article;
