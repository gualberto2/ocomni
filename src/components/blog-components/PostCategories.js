import { useParams } from "react-router-dom";
import {
  graphcms,
  QUERY_POST_BY_ABOUT,
  QUERY_POST_BY_INFORMATIONAL,
  QUERY_POST_BY_MARKETING,
} from "../../GraphQL/queries";
import Posts from "./Posts";
import { useEffect, useState } from "react";

export function PostsByAbout() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await graphcms.request(QUERY_POST_BY_ABOUT, {
          slug: slug,
        });
        console.log(res);
        setPosts(res.posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <>
      <Posts posts={posts} />
    </>
  );
}

export function PostsByMarketing() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await graphcms.request(QUERY_POST_BY_MARKETING, {
          slug: slug,
        });
        console.log(res);
        setPosts(res.posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <>
      <Posts posts={posts} />
    </>
  );
}
export function PostByInformational() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await graphcms.request(QUERY_POST_BY_INFORMATIONAL, {
          slug: slug,
        });
        console.log(res);
        setPosts(res.posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [slug]);

  return (
    <>
      <Posts posts={posts} />
    </>
  );
}
