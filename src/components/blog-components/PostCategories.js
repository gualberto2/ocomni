import { useParams } from "react-router-dom";
import {
  graphcms,
  QUERY_POST_BY_ABOUT,
  QUERY_POST_BY_INFORMATIONAL,
  QUERY_POST_BY_MARKETING,
  QUERY_POST_BY_FEATURED,
  QUERY_POST_BY_POPULARITY,
  QUERY_POST_BY_FEATOFDAWEEK,
} from "./queries";
import PostCard from "./PostCard";
import PostsNoCard from "./PostsNoCard";
import PostBigCard from "./PostBigCard";
import { useEffect, useState } from "react";
import PostRectangle from "./PostRectangle";

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
      <PostCard posts={posts} />
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
      <PostRectangle posts={posts} />
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
      <PostCard posts={posts} />
    </>
  );
}
export function PostByDaWeek() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await graphcms.request(QUERY_POST_BY_FEATOFDAWEEK, {
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
      <PostBigCard posts={posts} />
    </>
  );
}
export function PostsByPopularity() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await graphcms.request(QUERY_POST_BY_POPULARITY, {
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
      <PostsNoCard posts={posts} />
    </>
  );
}
export function PostsByFeatured() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await graphcms.request(QUERY_POST_BY_FEATURED, {
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
      <PostsNoCard posts={posts} />
    </>
  );
}
