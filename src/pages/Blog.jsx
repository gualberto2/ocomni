import BlogHeader from "../components/BlogHeader";
import BlogHome from "../components/blog-components/BlogHome";

export default function Blog() {
  return (
    <div>
      {/* <BlogHeader /> */}
      <div className="max-w-6xl mx-auto px-3">
        <BlogHome />
      </div>
    </div>
  );
}
