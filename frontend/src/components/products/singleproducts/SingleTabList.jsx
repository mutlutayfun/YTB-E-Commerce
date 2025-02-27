function SingleTabList() {
  return (
    <>
      <ul className="tab-list">
        <li>
          <a href="#" className="tab-button active" data-id="desc">
            Description
          </a>
        </li>
        <li>
          <a href="#" className="tab-button" data-id="info">
            Additional information
          </a>
        </li>
        <li>
          <a href="#" className="tab-button" data-id="reviews">
            Reviews
          </a>
        </li>
      </ul>
    </>
  );
}

export default SingleTabList;
