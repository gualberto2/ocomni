import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { db } from "../firebase";

export default function Blogs() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const docRef = doc(db, "blogs", params.blog);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setBlog(docSnap.data());
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchBlog();
  }, []);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div
        className="relative w-full overflow-hidden h-[300px]"
        style={{
          background: `url(${blog.imgUrls[0]}) center no-repeat`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="py-5 px-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold border-b-2 border-purple-300">
            {blog.title}
          </h1>
          <div className="flex flex-row justify-between ">
            <span className="flex flex-row space-x-2">
              <p>By </p>
              <p> {blog.author}</p>
            </span>
            <p>{blog.date}</p>
          </div>
          <p className=" ">{blog.hook}</p>
        </div>
        <div className="mb-3">
          <p className="">{blog.subheading1}</p>
          <p className="text-sm">{blog.body1}</p>
        </div>
        <div className="mb-3">
          <p className="">{blog.subheading2}</p>
          <p className="text-sm">{blog.body2}</p>
        </div>
        <div>
          <p className="">{blog.subheading3}</p>
          <p className="text-sm">{blog.body3}</p>
        </div>
      </div>
    </div>
  );
}
