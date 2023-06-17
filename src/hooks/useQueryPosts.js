import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { graphcms } from "../components/blog-components/queries";
import { useMyContext } from "../components/blog-components/store";

const useQueryPosts = ({ query, limit = 6 }) => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const { setLoading, setTotalPage } = useMyContext();

  useEffect(() => {
    setLoading(true);
    graphcms
      .request(query, { slug, limit })
      .then((res) => {
        const count = res?.countConnection?.aggregate?.count || 0;
        setTotalPage(Math.ceil(count / limit));
        setPosts(res.posts);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setPosts([]);
      })
      .finally(() => setLoading(false));
  }, [query, slug, limit]);

  return { posts, error };
};

export default useQueryPosts;
