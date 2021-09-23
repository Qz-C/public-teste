import { useState } from "react";
import { Rating } from "primereact/rating";
import ProductImage from "../../assets/images/gallery/img1.jpg";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ReviewForm from "../../components/ReviewForm";
import SubHeader from "../../components/SubHeader";
import "./style.scss";
import "../../styles/animate.css";
import "../../styles/bootstrap.css";
import "../../styles/style.css";
import FAQSection from "../../components/FAQSection";

const ProductDetails = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <body class="header_sticky header-style-2 topbar-style-2 topbar-width-94 topbar-divider header-absolute header-center has-menu-extra">
      <div class="boxed">
        <div id="site-header-wrap">
          <SubHeader />
          <Header />
        </div>

        <div class="page-title parallax parallax1">
          <div class="container">
            <div class="row">
              <div class="col-md-12"></div>
            </div>
          </div>
        </div>

        <section class="flat-row main-shop shop-detail">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="wrap-flexslider">
                  <div class="inner">
                    <div class="flexslider style-1 has-relative">
                      <section class="gallery">
                        <div class="gallery__item">
                          <input
                            type="radio"
                            id="img-1"
                            checked
                            name="gallery"
                            class="gallery__selector"
                          />
                          <img
                            class="gallery__img"
                            src="https://picsum.photos/id/1015/600/400.jpg"
                            alt=""
                          />
                          <div class="flat-icon style-1">
                            <a href={ProductImage} class="zoom-popup">
                              <span class="fa fa-search-plus"></span>
                            </a>
                          </div>
                          <label for="img-1" class="gallery__thumb">
                            <img
                              src="https://picsum.photos/id/1015/150/100.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        <div class="gallery__item">
                          <input
                            type="radio"
                            id="img-2"
                            name="gallery"
                            class="gallery__selector"
                          />
                          <img
                            class="gallery__img"
                            src="https://picsum.photos/id/1039/600/400.jpg"
                            alt=""
                          />
                          <label for="img-2" class="gallery__thumb">
                            <img
                              src="https://picsum.photos/id/1039/150/100.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        <div class="gallery__item">
                          <input
                            type="radio"
                            id="img-3"
                            name="gallery"
                            class="gallery__selector"
                          />
                          <img
                            class="gallery__img"
                            src="https://picsum.photos/id/1057/600/400.jpg"
                            alt=""
                          />
                          <label for="img-3" class="gallery__thumb">
                            <img
                              src="https://picsum.photos/id/1057/150/100.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                        <div class="gallery__item">
                          <input
                            type="radio"
                            id="img-4"
                            name="gallery"
                            class="gallery__selector"
                          />
                          <img
                            class="gallery__img"
                            src="https://picsum.photos/id/106/600/400.jpg"
                            alt=""
                          />
                          <label for="img-4" class="gallery__thumb">
                            <img
                              src="https://picsum.photos/id/106/150/100.jpg"
                              alt=""
                            />
                          </label>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="product-detail">
                  <div class="inner">
                    <div class="content-detail">
                      <h2 class="product-title">Best Woolen T-Shirt</h2>
                      <div class="flat-star style-1">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half-o"></i>
                        <i class="fa fa-star-half-o"></i>
                        <span>(1)</span>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.{" "}
                      </p>
                      <div class="price">
                        <del>
                          <span class="regular">$90.00</span>
                        </del>
                        <ins>
                          <span class="amount">$24.00</span>
                        </ins>
                      </div>
                      <div class="size">
                        <span>Size:</span>
                        <ul>
                          <li>
                            <a href="#">L</a>
                          </li>
                          <li>
                            <a href="#">M</a>
                          </li>
                          <li>
                            <a href="#">S</a>
                          </li>
                          <li>
                            <a href="#">XL</a>
                          </li>
                          <li>
                            <a href="#">XXL</a>
                          </li>
                          <li>
                            <a href="#">Over Size</a>
                          </li>
                        </ul>
                      </div>
                      <div class="product-color">
                        <span>Colors:</span>
                        <ul class="flat-color-list">
                          <li>
                            <a href="#" class="yellow"></a>
                          </li>
                          <li>
                            <a href="#" class="pink">
                              {" "}
                            </a>
                          </li>
                          <li>
                            <a href="#" class="red"></a>
                          </li>
                          <li>
                            <a href="#" class="black"></a>
                          </li>
                          <li>
                            <a href="#" class="blue"></a>
                          </li>
                          <li>
                            <a href="#" class="khaki"></a>
                          </li>
                        </ul>
                      </div>
                      <ul class="product-infor style-1">
                        <li>
                          <span>100% cotton</span>
                        </li>
                        <li>
                          <span>6 months warranty</span>
                        </li>
                        <li>
                          <span>High Quality</span>
                        </li>
                      </ul>
                      <div class="product-quantity">
                        <div class="quantity">
                          <input
                            type="text"
                            value="1"
                            name="quantity-number"
                            class="quantity-number"
                          />
                          <span class="inc quantity-button">+</span>
                          <span class="dec quantity-button">-</span>
                        </div>
                        <div class="add-to-cart">
                          <a href="#">ADD TO CART</a>
                        </div>
                        <div class="box-like">
                          <a href="#" class="like">
                            <i class="fa fa-heart-o"></i>
                          </a>
                        </div>
                      </div>
                      <div class="product-categories">
                        <span>Categories: </span>
                        <a href="#">Men,</a> <a href="#">Shoes</a>
                      </div>
                      <div class="product-tags">
                        <span>Tags: </span>
                        <a href="#">Dress,</a> <a href="#">Fashion,</a>{" "}
                        <a href="#">Furniture,</a> <a href="#">Lookbok</a>
                      </div>
                      <ul class="flat-socials">
                        <li>
                          <a href="#">
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-pinterest"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-google-plus"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="flat-row shop-detail-content">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="flat-tabs style-1 has-border">
                  <div class="inner">
                    <ul class="menu-tab">
                      <li class="active">Description</li>
                      <li>Additional information</li>
                      <li>Reviews</li>
                    </ul>
                    <div class="content-tab">
                      <div class="content-inner">
                        <div class="flat-grid-box col2 border-width border-width-1 has-padding clearfix">
                          <div class="grid-row image-left clearfix">
                            <div class="grid-item">
                              <div class="thumb text-center">
                                <img
                                  src="images/shop/sh-detail/detail-desc-01.jpg"
                                  alt="Image"
                                />
                              </div>
                            </div>
                            <div class="grid-item">
                              <div class="text-wrap">
                                <h6 class="title">100 % alligator</h6>
                                <p>
                                  Fashion has always been so temporary and
                                  uncertain. You can’t keep up with it. This
                                  social phenomenon is very whimsical, thus we
                                  as the consumers always try to stay in touch
                                  with all the latest fash- ion tendencies.{" "}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="grid-row image-right padding-bottom-48 clearfix">
                            <div class="grid-item">
                              <div class="text-wrap">
                                <h6 class="title">Youthful Style</h6>
                                <p>
                                  Fashion has always been so temporary and
                                  uncertain. You can’t keep up with it. This
                                  social phenomenon is very whimsical, thus we
                                  as the consumers always try to stay in touch
                                  with all the latest fash- ion tendencies.{" "}
                                </p>
                              </div>
                            </div>
                            <div class="grid-item">
                              <div class="thumb text-center">
                                <img
                                  src="images/shop/sh-detail/detail-desc-02.jpg"
                                  alt="Image"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="grid-row image-left padding-bottom-48 clearfix">
                            <div class="grid-item">
                              <div class="thumb text-center">
                                <img
                                  src="images/shop/sh-detail/detail-desc-03.jpg"
                                  alt="Image"
                                />
                              </div>
                            </div>
                            <div class="grid-item">
                              <div class="text-wrap">
                                <h6 class="title">Comfortable</h6>
                                <p>
                                  Fashion has always been so temporary and
                                  uncertain. You can’t keep up with it. This
                                  social phenomenon is very whimsical, thus we
                                  as the consumers always try to stay in touch
                                  with all the latest fash- ion tendencies.{" "}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div class="grid-row image-right clearfix">
                            <div class="grid-item">
                              <div class="text-wrap">
                                <h6 class="title">Easy To Clean</h6>
                                <p>
                                  Fashion has always been so temporary and
                                  uncertain. You can’t keep up with it. This
                                  social phenomenon is very whimsical, thus we
                                  as the consumers always try to stay in touch
                                  with all the latest fash- ion tendencies.{" "}
                                </p>
                              </div>
                            </div>
                            <div class="grid-item">
                              <div class="thumb text-center">
                                <img
                                  src="images/shop/sh-detail/detail-desc-04.jpg"
                                  alt="Image"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="content-inner">
                        <div class="inner max-width-40">
                          <table>
                            <tr>
                              <td>Weight</td>
                              <td>1.73 kg</td>
                            </tr>
                            <tr>
                              <td>Dimensions</td>
                              <td>100 x 37 x 100 cm</td>
                            </tr>
                            <tr>
                              <td>Materials</td>
                              <td>80% cotton, 20% linen</td>
                            </tr>
                            <tr>
                              <td>Size</td>
                              <td>One Size, XL, L, M, S</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                      <div class="content-inner">
                        <div class="inner max-width-83 padding-top-33">
                          <ol class="review-list">
                            <li class="review">
                              <div class="thumb">
                                <img src="images/avatar-1.png" alt="Image" />
                              </div>
                              <div class="text-wrap">
                                <div class="review-meta">
                                  <h5 class="name">Sophia Rosla</h5>
                                  <div class="flat-star style-1">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-o"></i>
                                  </div>
                                </div>
                                <div class="review-text">
                                  <p>
                                    I wanted to thank you so much for the rug we
                                    have received it really is beautiful and
                                    expertly made. I will be recommending you to
                                    all our friends.
                                  </p>
                                </div>
                              </div>
                            </li>
                            <li class="review">
                              <div class="thumb">
                                <img src="images/avatar.png" alt="Image" />
                              </div>
                              <div class="text-wrap">
                                <div class="review-meta">
                                  <h5 class="name">Jayne Haughton</h5>
                                  <div class="flat-star style-1">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star-half-o"></i>
                                  </div>
                                </div>
                                <div class="review-text">
                                  <p class="line-height-28">
                                    Customer service is very important part of
                                    the buying experience to us and we must say
                                    that we have found Utility's to be
                                    impressive - we will certainly look to buy
                                    again in future.
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ol>
                          {isLogged ? <ReviewForm /> : <></>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="flat-row shop-related">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title-section margin-bottom-55">
                  <h2 class="title">Related Products</h2>
                </div>

                <div class="product-content product-fourcolumn clearfix">
                  <ul class="product style2">
                    <li class="product-item">
                      <div class="product-thumb clearfix">
                        <a href="#">
                          <img src="images/shop/sh-4/1.jpg" alt="image" />
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
                          <img src="images/shop/sh-4/2.jpg" alt="image" />
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
                          <img src="images/shop/sh-4/3.jpg" alt="image" />
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
                          <img src="images/shop/sh-4/4.jpg" alt="image" />
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
        <FAQSection/>
        <Footer />
      </div>
    </body>
  );
};

export default ProductDetails;
