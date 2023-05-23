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
    <main className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      <div
        className="relative w-full overflow-hidden h-[300px] "
        style={{
          background: `url(${blog.imgUrls[0]}) center no-repeat`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <div className="">
          <div className="flex items-center my-6 not-italic">
            <img
              className="mr-4 w-16 h-16 rounded-full"
              src="https://media.licdn.com/dms/image/C5603AQEpaLYDPronZQ/profile-displayphoto-shrink_800_800/0/1631567146974?e=2147483647&v=beta&t=3J55DW5o9QFqnUsw_UKS_aWJUKg_SVQAx1Ebdu1h2BQ"
              alt="Jese Leos"
            />
            <div>
              <p
                href="#"
                rel="author"
                className="text-xl font-bold text-gray-900"
              >
                {blog.author}
              </p>
              <p className="text-base font-light text-gray-500 dark:text-gray-400">
                Graphic Designer, educator & CEO Flowbite
              </p>
              <p className="text-base font-light text-gray-500 dark:text-gray-400">
                <time pubdate datetime="2022-02-08" title="February 8th, 2022">
                  Feb. 8, 2022
                </time>
              </p>
            </div>

            <article className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"></article>
          </div>
          <div>
            <p className="text-2xl font-bold mb-2">{blog.title}</p>
            <p className="mb-3 font-medium ">{blog.body1}</p>
            <p className="mb-3 font-medium ">{blog.body2}</p>
            <p className="mb-3 font-medium ">{blog.body3}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
