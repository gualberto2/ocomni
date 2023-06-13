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
              <div>
                <a
                  href="#"
                  rel="author"
                  class="text-xl font-bold text-gray-900 cursor-pointer"
                >
                  {post.author.name}
                </a>
                <p class="text-base font-light text-gray-500 ">
                  {post.author.roles}
                </p>
                <p class="text-base font-light text-gray-500">
                  {moment(post.createdAt).format("MM/DD/YYYY")}
                </p>
              </div>
            </div>
          </address>
        </header>
      </div>

      {/* post */}
      <h1 className="font-header text-3xl ">{post.title}</h1>
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      />
    </article>
  );
};

export default Post;
