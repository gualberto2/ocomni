import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function BlogNav({ categories }) {
  const { pathname } = useLocation();

  return (
    <nav className="h-12 bg-purple-200">
      <ul className="flex flex-row justify-around items-center">
        <Link to="/blog">
          <li className="text-black text-2xl">Home</li>
        </Link>
        <div className="flex flex-row justify-between items-center gap-4">
          {categories?.map((category) => (
            <Link key={category.slug} to={`/posts/${category.slug}`}>
              <li className="text-black text-2xl">{category.title}</li>
            </Link>
          ))}
        </div>
      </ul>
    </nav>
  );
}
