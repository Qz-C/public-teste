import "../../styles/animate.css";
import "../../styles/bootstrap.css";
import "../../styles/style.css";
import Carrossel from "../../components/Carousel";
import { SliderData } from "../../data/SliderData";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import ProductsList from "../../components/ProductsList";
import Thumb from '../../assets/images/shop/sh-3/5.jpg';
import Logo from "../../assets/images/logo.png";
import Footer from "../../components/Footer";

const Home = () => {
  const slideLenght = SliderData.length;

  return (
    <body class="header_sticky header-style-2 topbar-style-2 topbar-width-94 topbar-divider header-absolute header-center has-menu-extra">
      <div class="boxed">
        <div id="site-header-wrap">
          <SubHeader />
          <Header />
        </div>
        <Carrossel slides={SliderData} slideLenght={slideLenght} />

        <section class="flat-row row-icon-box style-2">
          <div class="container">
            <div class="row separator dark">
              <div class="col-md-4">
                <div class="flat-icon-box icon-left style-2 clearfix">
                  <div
                    class="inner flat-content-box"
                    data-margin="0 0 0 55px"
                    data-mobilemargin="0 0 0 0"
                  >
                    <div class="icon-wrap ml-7">
                      <i class="fa fa-plane"></i>
                    </div>
                    <div class="text-wrap">
                      <h5 class="heading">
                        <a href="#">Free Shipping</a>
                      </h5>
                      <p class="desc">Free shipping on order over $300</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="flat-icon-box icon-left style-2 clearfix">
                  <div
                    class="inner flat-content-box"
                    data-margin="0 0 0 69px"
                    data-mobilemargin="0 0 0 0"
                  >
                    <div class="icon-wrap ml-7">
                      <i class="fa fa-usd"></i>
                    </div>
                    <div class="text-wrap">
                      <h5 class="heading">
                        <a href="#">Cash On Delivery</a>
                      </h5>
                      <p class="desc">The internet tend to repeat</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="flat-icon-box icon-left style-2 clearfix">
                  <div
                    class="inner flat-content-box"
                    data-margin="0 0 0 62px"
                    data-mobilemargin="0 0 0 0"
                  >
                    <div class="icon-wrap ml-7">
                      <i class="fa fa-refresh"></i>
                    </div>
                    <div class="text-wrap">
                      <h5 class="heading">
                        <a href="#">Money Safe</a>
                      </h5>
                      <p class="desc">30 day money guarantee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductsList />

        <div class="page-title parallax parallax1">
          <div class="container">
            <div class="row">
              <div class="col-md-6"></div>
              <div class="col-md-6">
                <div
                  class="flat-content-box clearfix"
                  data-margin="0 0 0 0"
                  data-mobilemargin="0 0 0 0"
                >
                  <div class="flat-countdown-wrap text-center">
                    <div class="inner">
                      <div class="divider h115 clearfix"></div>
                      <h2 class="heading font-size-40 line-height-48">
                        Deal Of The Week
                      </h2>
                      <p class="desc font-size-18 font-weight-400 line-height-48">
                        Special Discount Limited Time Only
                      </p>
                      <div class="divider h42 clearfix"></div>
                      <div class="wrap-countdown no-margin-bottom">
                        <div class="countdown style-1"></div>
                      </div>
                      <div class="divider h115 clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="flat-row shop-related">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title-section margin-bottom-55">
                  <h2 class="title">New Latest</h2>
                </div>

                <div class="product-content product-fourcolumn clearfix">
                  <ul class="product style2">
                    <li class="product-item">
                      <div class="product-thumb clearfix">
                        <a href="#">
                          <img src={Thumb} alt="image" />
                        </a>
                      </div>
                      <div class="product-info clearfix">
                        <span class="product-title">
                          Cotton White Underweaer Block Out Edition
                        </span>
                        <div class="price">
                          <ins>
                            <span class="amount">$19.00</span>
                          </ins>
                        </div>
                        <ul class="flat-color-list">
                          <li>
                            <a href="#" class="red"></a>
                          </li>
                          <li>
                            <a href="#" class="blue"></a>
                          </li>
                          <li>
                            <a href="#" class="black"></a>
                          </li>
                        </ul>
                      </div>
                      <div class="add-to-cart text-center">
                        <a href="#">ADD TO CART</a>
                      </div>
                      <a href="#" class="like">
                        <i class="fa fa-heart-o"></i>
                      </a>
                    </li>
                    <li class="product-item">
                      <div class="product-thumb clearfix">
                        <a href="#">
                          <img src={Thumb} alt="image" />
                        </a>
                        <span class="new">New</span>
                      </div>
                      <div class="product-info clearfix">
                        <span class="product-title">
                          Cotton White Underweaer Block Out Edition
                        </span>
                        <div class="price">
                          <ins>
                            <span class="amount">$10.00</span>
                          </ins>
                        </div>
                      </div>
                      <div class="add-to-cart text-center">
                        <a href="#">ADD TO CART</a>
                      </div>
                      <a href="#" class="like">
                        <i class="fa fa-heart-o"></i>
                      </a>
                    </li>
                    <li class="product-item">
                      <div class="product-thumb clearfix">
                        <a href="#" class="product-thumb">
                          <img src={Thumb} alt="image" />
                        </a>
                      </div>
                      <div class="product-info clearfix">
                        <span class="product-title">
                          Cotton White Underweaer Block Out Edition
                        </span>
                        <div class="price">
                          <ins>
                            <span class="amount">$20.00</span>
                          </ins>
                        </div>
                      </div>
                      <div class="add-to-cart text-center">
                        <a href="#">ADD TO CART</a>
                      </div>
                      <a href="#" class="like">
                        <i class="fa fa-heart-o"></i>
                      </a>
                    </li>
                    <li class="product-item">
                      <div class="product-thumb clearfix">
                        <a href="#" class="product-thumb">
                          <img src={Thumb} alt="image" />
                        </a>
                        <span class="new sale">Sale</span>
                      </div>
                      <div class="product-info clearfix">
                        <span class="product-title">
                          Cotton White Underweaer Block Out Edition
                        </span>
                        <div class="price">
                          <del>
                            <span class="regular">$90.00</span>
                          </del>
                          <ins>
                            <span class="amount">$60.00</span>
                          </ins>
                        </div>
                        <ul class="flat-color-list">
                          <li>
                            <a href="#" class="red"></a>
                          </li>
                          <li>
                            <a href="#" class="blue"></a>
                          </li>
                          <li>
                            <a href="#" class="black"></a>
                          </li>
                        </ul>
                      </div>
                      <div class="add-to-cart text-center">
                        <a href="#">ADD TO CART</a>
                      </div>
                      <a href="#" class="like">
                        <i class="fa fa-heart-o"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </body>
  );
};
export default Home;
