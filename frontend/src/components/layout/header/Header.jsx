import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const Header = ({setIsSearchShow}) => {
  return (
    <>
      <header>
        <div className="header-row">
          <div className="container">
            <div className="header-wrapper">
              <div className="header-mobile">
                <i className="bi bi-list" id="btn-menu" />
              </div>
              <div className="header-left">
                <Link to="/" className="logo">
                  LOGO
                </Link>
              </div>
              <div className="header-center" id="sidebar">
                <nav className="navigation">
                  <ul className="menu-list">
                    <li className="menu-list-item">
                      <NavLink to="/" className="menu-link">
                        Ana Sayfa
                        <i className="bi bi-chevron-down" />
                      </NavLink>
                      <div className="menu-dropdown-wrapper">
                        <ul className="menu-dropdown-content">
                          <li>
                            <Link to="#">Home Clean</Link>
                          </li>
                          <li>
                            <Link to="#">Home Collection</Link>
                          </li>
                          <li>
                            <Link to="#">Home Minimal</Link>
                          </li>
                          <li>
                            <Link to="#">Home Modern</Link>
                          </li>
                          <li>
                            <Link to="#">Home Parallax</Link>
                          </li>
                          <li>
                            <Link to="#">Home Strong</Link>
                          </li>
                          <li>
                            <Link to="#">Home Style</Link>
                          </li>
                          <li>
                            <Link to="#">Home Unique</Link>
                          </li>
                          <li>
                            <Link to="#">Home RTL</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-list-item megamenu-wrapper">
                      <NavLink to="/shop" className="menu-link">
                       Mağaza
                        <i className="bi bi-chevron-down" />
                      </NavLink>
                      <div className="menu-dropdown-wrapper">
                        <div className="menu-dropdown-megamenu">
                          <div className="megamenu-links">
                            <div className="megamenu-products">
                              <h3 className="megamenu-products-title">
                                Shop Style
                              </h3>
                              <ul className="megamenu-menu-list">
                                <li>
                                  <Link to="#">Shop Standard</Link>
                                </li>
                                <li>
                                  <Link to="#">Shop Full</Link>
                                </li>
                                <li>
                                  <Link to="#">Shop Only Categories</Link>
                                </li>
                                <li>
                                  <Link to="#">Shop Image Categories</Link>
                                </li>
                                <li>
                                  <Link to="#">Shop Sub Categories</Link>
                                </li>
                                <li>
                                  <Link to="#">Shop List</Link>
                                </li>
                                <li>
                                  <Link to="#">Hover Style 1</Link>
                                </li>
                                <li>
                                  <Link to="#">Hover Style 2</Link>
                                </li>
                                <li>
                                  <Link to="#">Hover Style 3</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="megamenu-products">
                              <h3 className="megamenu-products-title">
                                Filter Layout
                              </h3>
                              <ul className="megamenu-menu-list">
                                <li>
                                  <Link to="#">Sidebar</Link>
                                </li>
                                <li>
                                  <Link to="#">Filter Side Out</Link>
                                </li>
                                <li>
                                  <Link to="#">Filter Dropdown</Link>
                                </li>
                                <li>
                                  <Link to="#">Filter Drawer</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="megamenu-products">
                              <h3 className="megamenu-products-title">
                                Shop Loader
                              </h3>
                              <ul className="megamenu-menu-list">
                                <li>
                                  <Link to="#">Shop Pagination</Link>
                                </li>
                                <li>
                                  <Link to="#">Shop Infinity</Link>
                                </li>
                                <li>
                                  <Link to="#">Shop Load More</Link>
                                </li>
                                <li>
                                  <Link to="#">Cart Modal</Link>
                                </li>
                                <li>
                                  <Link to="#">Cart Drawer</Link>
                                </li>
                                <li>
                                  <Link to="#">Cart Page</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="megamenu-single">
                            <Link to="#">
                              <img src="img/mega-menu.jpg" alt />
                            </Link>
                            <h3 className="megamenu-single-title">
                              JOIN THE LAYERING GANG
                            </h3>
                            <h4 className="megamenu-single-subtitle">
                              Suspendisse faucibus nunc et pellentesque
                            </h4>
                            <a
                              href="#"
                              className="megamenu-single-button btn btn-sm"
                            >
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="menu-list-item">
                      <NavLink to="/blog" className="menu-link">
                        Blog
                      </NavLink>
                    </li>
                    <li className="menu-list-item">
                      <NavLink to="/contact" className="menu-link">
                        İletişim
                      </NavLink>
                    </li>
                  </ul>
                </nav>
                <i className="bi-x-circle" id="close-sidebar" />
              </div>
              <div className="header-right">
                <div className="header-right-links">
                  <Link to="/account" className="header-account">
                    <i className="bi bi-person" />
                  </Link>
                  <button className="search-button" onClick={()=> setIsSearchShow(true)}>
                    <i className="bi bi-search" />
                  </button>
                  <Link to="#">
                    <i className="bi bi-heart" />
                  </Link>
                  <div className="header-cart">
                    <Link to="/cart" className="header-cart-link">
                      <i className="bi bi-bag" />
                      <span className="header-cart-count">0</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

Header.propTypes = {
    setIsSearchShow: PropTypes.bool,
    isSearchShow: PropTypes.bool
};