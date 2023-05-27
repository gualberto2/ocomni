import BlogCard from "../components/BlogCard";
// import BlogWidget from "../components/BlogWidget";
import Categories from "../components/Categories";
import { getPosts } from "../services/index";

const post = [
  { title: 1, author: "Shoes", excerpt: "Running Shoes." },
  { title: 1, author: "Shoes", excerpt: "Running Shoes." },
];

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts?.map((posts, index) => (
            <BlogCard key={index} posts={posts.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            {/* <BlogWidget /> */}
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
