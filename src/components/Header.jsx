import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header id="header" class="header header-container clearfix">
      <div class="container clearfix" id="site-header-inner">
        <div id="logo" class="logo float-left">
          <a href="/" title="logo">
            <img
              src={Logo}
              alt="image"
              width="250"
              height="200"
              data-retina={Logo}
              data-width="250"
              data-height="200"
            />
          </a>
        </div>
        <div class="mobile-button">
          <span></span>
        </div>
        <ul class="menu-extra">
          <li class="box-search">
            <a class="icon_search header-search-icon" href="#"></a>
            <form
              role="search"
              method="get"
              class="header-search-form"
              action="#"
            >
              <input
                type="text"
                value=""
                name="s"
                class="header-search-field"
                placeholder="Search..."
              />
              <button type="submit" class="header-search-submit" title="Search">
                Search
              </button>
            </form>
          </li>
          <li class="box-login">
            <a class="icon_login" href="/login"></a>
          </li>
          <li class="box-cart nav-top-cart-wrapper">
            <a class="icon_cart nav-cart-trigger active" href="/cart">
              <span>1</span>
            </a>
            <div class="nav-shop-cart">
              <div class="widget_shopping_cart_content">
                <div class="woocommerce-min-cart-wrap">
                  <ul class="woocommerce-mini-cart cart_list product_list_widget ">
                    <li class="woocommerce-mini-cart-item mini_cart_item">
                      <span>No Items in Shopping Cart</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="nav-wrap">
          <nav id="mainnav" class="mainnav">
            <ul class="menu">
              <li class="active">
                <a href="index.html">HOME</a>
                <ul class="submenu">
                  <li>
                    <a href="index.html">Homepage Style 1</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="shop-3col.html">SHOP</a>
                <ul class="submenu">
                  <li>
                    <a href="shop-3col.html">Shop Layouts</a>
                    <ul class="submenu">
                      <li>
                        <a href="shop-3col.html">Three Columns</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop-detail-des.html">Shop Details</a>
                    <ul class="submenu">
                      <li>
                        <a href="shop-detail-des.html">Details Description</a>
                      </li>
                      <li>
                        <a href="shop-detail-exter.html">Details External</a>
                      </li>
                      <li>
                        <a href="shop-detail-option.html">Details Options</a>
                      </li>
                      <li>
                        <a href="shop-detail-fix.html">Details Fix</a>
                      </li>
                      <li>
                        <a href="shop-detail-zoom.html">Details Zoom</a>
                      </li>
                      <li>
                        <a href="shop-detail-group.html">Details Grouped</a>
                      </li>
                      <li>
                        <a href="shop-detail-video.html">Details Video</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blog-list.html">BLOG</a>
                <ul class="submenu">
                  <li>
                    <a href="blog-list.html">Blog List Full</a>
                  </li>
                  <li>
                    <a href="blog-list-1.html">Blog list Slide 1</a>
                  </li>
                  <li>
                    <a href="blog-list-2.html">Blog list Slide 2</a>
                  </li>
                  <li>
                    <a href="blog-grid.html">Blog Gird Full</a>
                  </li>
                  <li>
                    <a href="blog-grid-1.html">Blog Gird Slide</a>
                  </li>
                  <li>
                    <a href="blog-detail.html">Blog Details</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
