import CampaingSingle from "../components/layout/campaing/CampaingSingle";
import SingleContent from "../components/products/singleproducts/SingleContent";
import SingleTabs from "../components/products/singleproducts/SingleTabs";
import SingleTopbar from "../components/products/singleproducts/SingleTopbar";

function SingleProductPage() {
  return (
    <>
      <section className="single-product">
        <div className="container">
          <div className="single-product-wrapper">
            <SingleTopbar />
            <SingleContent />
            <SingleTabs />
          </div>
        </div>
      </section>
      <CampaingSingle />
    </>
  );
}

export default SingleProductPage;
