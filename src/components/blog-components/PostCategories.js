import { Link, useNavigate, useParams } from "react-router-dom";
import {
  graphcms,
  QUERY_POST_BY_ABOUT,
  QUERY_POST_BY_INFORMATIONAL,
  QUERY_POST_BY_MARKETING,
  QUERY_POST_BY_FEATURED,
  QUERY_POST_BY_POPULARITY,
  QUERY_POST_BY_FEATOFDAWEEK,
  QUERY_POST_BY_SALES,
} from "./queries";
import PostCard from "./PostCard";
import PostsNoCard from "./PostsNoCard";
import PostBigCard from "./PostBigCard";
import PostRectangle from "./PostRectangle";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AiOutlineCalendar } from "react-icons/ai";
import moment from "moment";
// import Post from "../Post";

export function PostsByAbout() {
  const { slug } = useParams();
  const navigate = useNavigate();
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
      {posts?.map((post) => (
        <div key={post.id} className="mb-6 sm:mb-0">
          <article className="flex flex-col">
            <div className="">
              <img
                src={post.featuredImage.url}
                alt=""
                className="h-[150px] cursor-pointer w-full object-cover hover:scale-105 transition-scale duration-200 ease-in "
              />
            </div>

            <div>
              <Link to={`/article/${post.slug}`}>
                <h1 className="font-header leading-6 line-clamp-2 font-header cursor-pointer mb-2 text-lg my-1 text-gray-900 transition duration-200 hover:text-purple-600 hover:underline active:text-purple-900">
                  {post.title}
                </h1>
              </Link>
              <p className="line-clamp-2 font- font-primarybody text-slate-900 cursor-default">
                {post.excerpt}
              </p>
            </div>
            <div className="mt-2 mb-4">
              <p className="font-extralight text-sm text-gray-500 cursor-pointer transition duration-300 hover:text-gray-700">
                {post.author.name}
              </p>
              <p className="font-extralight text-sm text-gray-500 cursor-pointer transition duration-300 hover:text-gray-700">
                {moment(post.createdAt).format("MM/DD/YYYY")}
              </p>
            </div>
          </article>
        </div>
      ))}
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
      {posts?.map((post) => (
        <div key={post.id} className="flex flex-row mt-2 gap-2 items-center">
          <img
            src={post.featuredImage.url}
            alt=""
            loading="lazy"
            className="h-[104px] w-[100px] object-cover hover:scale-105 transition-scale duration-200 ease-in "
          />

          <li className="relative flex flex-col justify-between mb-2 items-center overflow-hidden ">
            <div className="w-full  mt-1 ">
              <div className="sm:flex-col items-center">
                <Link to={`/article/${post.slug}`}>
                  <p className="font-header cursor-pointer text-md my-1 text-gray-800 transition duration-200 hover:text-purple-600 line-clamp-1 px-2 hover:underline active:text-purple-900">
                    {post.title}
                  </p>
                </Link>

                <p className="px-2 text-sm font-primarybody line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex flex-row justify-between  items-center gap-4 px-2 border-b border-gray-300">
                <span className="text-sm  font-primarybody font-light whitespace-nowrap text-gray-500 hover:text-gray-700  transition duration-300 cursor-default  ">
                  {moment(post.createdAt).format("MM/DD/YYYY")}
                </span>

                <div className="mb-2">
                  <p className="font-md font-primarybody mt-2 text line-clamp-1 text-sm text-gray-500 cursor-pointer transition duration-300 hover:text-gray-700">
                    {post.author.name}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </div>
      ))}
    </>
  );
}
export function PostsBySales() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await graphcms.request(QUERY_POST_BY_SALES, {
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
      {posts?.map((post) => (
        <div key={post.id} className="flex flex-row mt-2 gap-2 items-center">
          <img
            src={post.featuredImage.url}
            alt=""
            loading="lazy"
            className="h-[104px] w-[100px] object-cover hover:scale-105 transition-scale duration-200 ease-in "
          />

          <li className="relative flex flex-col justify-between mb-2 items-center overflow-hidden ">
            <div className="w-full  mt-1 ">
              <div className="sm:flex-col items-center">
                <Link to={`/article/${post.slug}`}>
                  <p className="font-header cursor-pointer text-md my-1 text-gray-800 transition duration-200 hover:text-purple-600 line-clamp-1 px-2 hover:underline active:text-purple-900">
                    {post.title}
                  </p>
                </Link>

                <p className="px-2 text-sm font-primarybody line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex flex-row justify-between  items-center gap-4 px-2 border-b border-gray-300">
                <span className="text-sm  font-primarybody font-light whitespace-nowrap text-gray-500 hover:text-gray-700  transition duration-300 cursor-default  ">
                  {moment(post.createdAt).format("MM/DD/YYYY")}
                </span>

                <div className="mb-2">
                  <p className="font-md font-primarybody mt-2 text line-clamp-1 text-sm text-gray-500 cursor-pointer transition duration-300 hover:text-gray-700">
                    {post.author.name}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </div>
      ))}
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
      {posts?.map((post) => (
        <div key={post.id} className="mb-6 sm:mb-0">
          <article className="flex flex-col">
            <div className="">
              <Link to={`/article/${post.slug}`}>
                <img
                  src={post.featuredImage.url}
                  alt=""
                  className="h-[150px] cursor-pointer w-full object-cover hover:scale-105 transition-scale duration-200 ease-in "
                />
              </Link>
            </div>
            <div>
              <Link to={`/article/${post.slug}`}>
                <h1 className="font-header leading-6 line-clamp-2 font-header cursor-pointer mb-2 text-lg my-1 text-gray-900 transition duration-200 hover:text-purple-600 hover:underline active:text-purple-900">
                  {post.title}
                </h1>
              </Link>
              <p className="line-clamp-2 font- font-primarybody text-slate-900 cursor-default">
                {post.excerpt}
              </p>
            </div>
            <div className="mt-2 mb-4">
              <p className="font-extralight text-sm text-gray-500 cursor-pointer transition duration-300 hover:text-gray-700">
                {post.author.name}
              </p>
              <p className="font-extralight text-sm text-gray-500 cursor-pointer transition duration-300 hover:text-gray-700">
                {moment(post.createdAt).format("MM/DD/YYYY")}
              </p>
            </div>
          </article>
        </div>
      ))}
    </>
  );
}
export function PostByDaWeek() {
  const navigate = useNavigate();

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
      {posts?.map((post) => (
        <div key={post.id} className="">
          <li className="relative bg-purple-100 flex flex-col justify-between h-full  items-center overflow-hidden mt-3 duration-150">
            <img
              onClick={() => navigate("/")}
              src={post.featuredImage.url}
              alt=""
              loading="lazy"
              className="h-[150px] md:h-[400px] cursor-pointer w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
            />

            <div className="w-full py-4 px-12 mt-1">
              <div className="flex items-center space-x-1">
                <Link to={`/article/${post.slug}`}>
                  <p className="font-header text-gray-900 text-center text-xl mb-2 tracking-wide text-black hover:underline cursor-pointer  hover:text-purple-600 hover:underline active:text-purple-900 transition duration-200">
                    {post.title}
                  </p>
                </Link>
              </div>
              <p className="font-extralight m-0 text-md text-gray-900 leading-7 line-clamp-4 mb-4">
                {post.excerpt}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div>
                  <div class="flex items-center space-x-3 mb-3">
                    <img
                      class="w-8 h-8 rounded-full "
                      src={post.author.photo.url}
                      alt="Jese Leos avatar"
                    />
                    <span class="font-medium text-gray-700 transition duration-200 hover:text-gray-800  active:text-gray-900 cursor-pointer">
                      {post.author.name}
                    </span>
                  </div>
                  <p className="flex flex-row items-center ">
                    <AiOutlineCalendar className="mr-1" />
                    <span className="font-light">
                      {moment(post.createdAt).format("MMM DD, YYYY")}
                    </span>
                  </p>
                </div>

                <div class="flex justify-between items-center">
                  <Link to={`/article/${post.slug}`}>
                    <a
                      href="#"
                      class="inline-flex items-center mt-4 font-medium  cursor-pointer hover:underline hover:text-purple-600 hover:underline active:text-purple-900 transition duration-200"
                    >
                      Read more
                      <svg
                        class="ml-2 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        </div>
      ))}
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
      {posts?.map((post) => (
        <div key={post.id} className="">
          <li className="relative flex flex-col justify-between mb-2 items-center overflow-hidden border-b border-gray-300">
            <div className="w-full  mt-1 ">
              <div className="flex items-center space-x-1">
                <Link to={`/article/${post.slug}`}>
                  <p className="font-header cursor-pointer text-lg my-1 text-gray-900 transition duration-200 hover:text-purple-600 hover:underline active:text-purple-900">
                    {post.title}
                  </p>
                </Link>
              </div>

              <div className="flex flex-row justify-between  items-center gap-4 my-2">
                <span className="text-md font-light whitespace-nowrap text-gray-500 hover:text-gray-700  transition duration-300 cursor-default  ">
                  {moment(post.createdAt).format("MM/DD/YYYY")}
                </span>

                <div className="mb-2">
                  <p className="font-light mt-2 text line-clamp-1 text-gray-500 cursor-pointer transition duration-300 hover:text-gray-700">
                    {post.author.name}, {post.author.roles}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </div>
      ))}
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
      {posts?.map((post) => (
        <div key={post.id} className="">
          <li className="relative flex flex-col justify-between mb-2 items-center overflow-hidden border-b border-gray-300">
            <div className="w-full  mt-1 ">
              <div className="flex items-center space-x-1">
                <Link to={`/article/${post.slug}`}>
                  <p className="font-header cursor-pointer text-lg my-1 text-gray-900 transition duration-200 hover:text-purple-600 hover:underline active:text-purple-900">
                    {post.title}
                  </p>
                </Link>
              </div>

              <div className="flex flex-row justify-between  items-center gap-4 my-2">
                <span className="text-md font-light whitespace-nowrap text-gray-500 hover:text-gray-700  transition duration-300 cursor-default  ">
                  {moment(post.createdAt).format("MM/DD/YYYY")}
                </span>

                <div className="mb-2">
                  <p className="font-light mt-2 text line-clamp-1 text-gray-500 cursor-pointer transition duration-300 hover:text-gray-700">
                    {post.author.name}, {post.author.roles}
                  </p>
                </div>
              </div>
            </div>
          </li>
        </div>
      ))}
    </>
  );
}
