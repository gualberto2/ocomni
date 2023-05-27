import React from "react";
import Categories from "../components/Categories";
import BlogCard from "../components/BlogCard";
import FeaturedBlogs from "../components/FeaturedBlogs";
import BlogWidget from "../components/BlogWidget";

const Blog = () => {
  return (
    <div>
      <Categories />
      <div>
        <div>
          {/* {posts.map((post, index) => (
            <BlogCard key={index} post={post.node} />
          ))} */}
          <BlogCard />
        </div>
        <div>
          <FeaturedBlogs />
          <BlogWidget />
        </div>
      </div>
    </div>
  );
};

export default Blog;
