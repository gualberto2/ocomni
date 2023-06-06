import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BlogNav from "./BlogNav";
import { QUERY_SLUG_CATEGORIES, graphcms } from "./queries";

const BlogHeader = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    //-- Below you can see we are trying to access our graphql query for categories...
    //-- if you refer back to our /Graphql/queries file you will see that QUERY_SLUG_CATEGORIES...
    //-- you will see that we are trying to access any categories along with its title..
    //-- and slug (slug being its link)
    //graphcms.request(QUERY_SLUG_CATEGORIES).then((res) => console.log(res));

    //Not sure what (res) does
    graphcms
      .request(QUERY_SLUG_CATEGORIES)
      .then((res) => setCategories(res.categories));
  }, []);

  return (
    <header>
      <BlogNav className="text-black text-2xl" categories={categories} />
    </header>
  );
};

export default BlogHeader;
