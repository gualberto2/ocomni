import { useState } from "react";
import { useEffect } from "react";
import Spinner from "../components/Spinner";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import BlogItem from "../components/BlogItem";
import { toast } from "react-toastify";

export default function Blog() {
  const [blogs, setBlogs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastFetchedBlog, setLastFetchedBlog] = useState(null);
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const blogRef = collection(db, "blogs");
        const q = query(
          blogRef,
          where("mark", "==", false),
          orderBy("timestamp", "desc"),
          limit(4)
        );
        const querySnap = await getDocs(q);
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchedBlog(lastVisible);
        const blogs = [];
        querySnap.forEach((doc) => {
          return blogs.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setBlogs(blogs);
        setLoading(false);
      } catch (error) {
        toast.error("Could not fetch blog");
        console.log(error);
      }
    }

    fetchBlogs();
  }, []);

  async function onFetchMoreBlogs() {
    try {
      const blogRef = collection(db, "blogs");
      const q = query(
        blogRef,
        where("offer", "==", true),
        orderBy("timestamp", "desc"),
        startAfter(lastFetchedBlog),
        limit(4)
      );
      const querySnap = await getDocs(q);
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchedBlog(lastVisible);
      const blogs = [];
      querySnap.forEach((doc) => {
        return blogs.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      setBlogs((prevState) => [...prevState, ...blogs]);
      setLoading(false);
    } catch (error) {
      toast.error("Could not fetch blog");
      console.log(error);
    }
  }

  if (loading) {
    <Spinner />;
  }

  return (
    <div className="max-w-6xl mx-auto px-3">
      {!loading && blogs.length > 0 && (
        <>
          <h1 className="text-3xl text-center mt-6 font-bold mb-6">Blogs</h1>
          <ul>
            {blogs.map((blog) => (
              <BlogItem key={blog.id} id={blog.id} blog={blog.data} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
