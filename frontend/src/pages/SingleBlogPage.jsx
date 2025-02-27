import SingleBlog from "../components/blogs/SingleBlog";
import Reviews from "../components/reviews/Reviews";

function SingleBlogPage() {
  return (
    <>
      <section className="single-blog">
        <div className="container">
          <SingleBlog />
          <Reviews />
        </div>
      </section>
    </>
  );
}

export default SingleBlogPage;
