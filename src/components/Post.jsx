import moment from "moment";
import React from "react";
import Comments from "./blog-components/Comments";

const Post = ({ post }) => {
  console.log(post);

  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <article className="mx-auto my-14 max-w-2xl px-8">
      {/* File path Component */}

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
              <div className="font">
                <a
                  href="#"
                  rel="author"
                  class="text-xl font-semibold text-gray-900 transition duration-100 ease-in-out hover:text-gray-500 cursor-pointer"
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
      <h1 className="font-bold text-4xl leading-snug md:leading-none">
        {post.title}
      </h1>
      <br />
      <p className="font-normal text-lg leading-relaxed selection:bg-purple-500 text-gray-700 text-inherit">
        {post.excerpt}
      </p>
      <img src={post.featuredImage.url} className="my-6 w-[90%] mx-auto" />
      {/* <div
        class="content"
        className="font-normal text-lg leading-relaxed  text-gray-700"
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      /> */}
      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemindex) =>
          getContentFragment(itemindex, item.text, item)
        );

        return getContentFragment(index, children, typeObj, typeObj.type);
      })}

      {/* will work on comments later */}
      <div>{/* <Comments /> */}</div>
    </article>
  );
};

export default Post;
