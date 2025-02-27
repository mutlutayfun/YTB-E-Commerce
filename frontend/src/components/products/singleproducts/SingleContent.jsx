import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

function SingleContent() {
  return (
    <>
      <div className="single-content">
        <main className="site-main">
            <ProductGallery />
            <ProductInfo />
        </main>
      </div>
    </>
  );
}

export default SingleContent;
