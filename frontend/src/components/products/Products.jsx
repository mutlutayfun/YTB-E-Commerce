import ProductItem from "./ProductItem";

function Products() {
  return (
    <>
      <section className="products">
        <div className="container">
          <div className="section-title">
            <h2>Featured Products</h2>
            <p>Summer Collection New Morden Design</p>
          </div>
          <div className="product-wrapper product-carousel">
            <div className="glide__track">
              <ul className="product-list " id="product-list">
                <ProductItem />
              </ul>
            </div>
            <div className="glide__arrows">
              <button className="glide__arrow glide__arrow--left">
                <i className="bi bi-chevron-left" />
              </button>
              <button className="glide__arrow glide__arrow--right">
                <i className="bi bi-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
