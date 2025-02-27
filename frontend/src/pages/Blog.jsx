import BlogList from "../components/blogs/BlogList";
import BlogTitle from "../components/blogs/BlogTitle";

const Blog = () => {
  return (
    <>
      <div>

        <section className="blogs blog-page">
          <div className="container">
            <BlogTitle />
            <BlogList />
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
