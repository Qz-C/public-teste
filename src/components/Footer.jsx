import Logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="widget widget-link">
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Online Store</a>
                  </li>
                  <li>
                    <a href="blog-list.html">Blog</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="widget widget-link link-login">
                <ul>
                  <li>
                    <a href="#">Login/ Register</a>
                  </li>
                  <li>
                    <a href="#">Your Cart</a>
                  </li>
                  <li>
                    <a href="#">Wishlist items</a>
                  </li>
                  <li>
                    <a href="#">Your checkout</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="widget widget-link link-faq">
                <ul>
                  <li>
                    <a href="faqs.html">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Term of service</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3">
              <div class="widget widget-brand">
                <div class="logo logo-footer">
                  <a href="index.html">
                    <img src={Logo} alt="image" width="107" height="24" />
                  </a>
                </div>
                <ul class="flat-contact">
                  <li class="address">112 Kingdom, NA 12, New York</li>
                  <li class="phone">+12 345 678 910</li>
                  <li class="email">infor.deercreative@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <p class="copyright text-center">
                Copyright {new Date().getFullYear()} <a href="#">ORGAXXXMIC</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <a class="go-top">
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
  );
};

export default Footer;
