import moment from "moment";
import React from "react";

const Post = ({ post }) => {
  console.log(post);
  return (
    <article className="mx-auto my-14 max-w-2xl px-8">
      {/* Author Component */}
      <div>
        <header class="mb-4 lg:mb-6 not-format">
          <address class="flex items-center mb-6 not-italic">
            <div class="inline-flex items-center mr-3 text-sm text-gray-900">
              <img
                class="mr-4 w-16 h-16 rounded-full"
                src={post.author.photo.url}
                alt={`Photograph of author ${post.author.name}`}
              />
              <div className="font-primarybody">
                <a
                  href="#"
                  rel="author"
                  class="text-xl font-bold text-gray-900 cursor-pointer"
                >
                  {post.author.name}
                </a>
                <p class="md:text-base font-primarybody text-gray-500 text-xl ">
                  {post.author.roles}
                </p>
                <p class="md:text-base  font-primarybody text-gray-500 text-xl">
                  {moment(post.createdAt).format("MM/DD/YYYY")}
                </p>
              </div>
            </div>
          </address>
        </header>
      </div>

      {/* post */}
      <h1 className="font-header text-5xl md:text-3xl leading-snug md:leading-none">
        {post.title}
      </h1>
      <br />
      <p className="font-primarybody text-2xl leading-relaxed selection:bg-purple-500 selection:text-white">
        {post.excerpt}
      </p>
      <img src={post.featuredImage.url} className="my-6 w-[90%] mx-auto" />
      <div
        class="content"
        className="font-primarybody text-2xl leading-relaxed selection:bg-purple-500 selection:text-white"
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      />

      <div>{/* <Comments /> */}</div>
    </article>
  );
};

export default Post;
