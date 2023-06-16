import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { graphcms } from "../components/blog-components/queries";

const useQueryPosts = ({ query, limit = 6 }) => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    graphcms
      .request(query, { slug, limit })
      .then((res) => {
        const count = res?.countConnection?.aggregate?.count || 0;
        console.log(res);
        setPosts(res.posts);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setPosts([]);
      });
  }, [query, slug, limit]);

  return { posts, error };
};

export default useQueryPosts;
