import React from "react";
import { Link } from "react-router-dom";

export default function Blogitem({ blog, id }) {
  return (
    <li>
      <Link to={`/category/${blog.type}/${id}`}>
        <img src={blog.imgUrls[0]} alt="" />
      </Link>
    </li>
  );
}
