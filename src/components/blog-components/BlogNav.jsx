import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function BlogNav({ categories }) {
  const { pathname } = useLocation();

  return (
    <nav className="">
      <div className=" flex flex-col md:flex-row items-center shadow-md">
        <ul className="flex flex-row">
          <div className="flex flex-row gap-4">
            {categories?.map((category) => (
              <Link key={category.slug} to={`/posts/${category.slug}`}>
                <li className="text-black text-xl">{category.title}</li>
              </Link>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
}
