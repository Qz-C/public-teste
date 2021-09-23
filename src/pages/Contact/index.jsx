import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import "../../styles/animate.css";
import "../../styles/bootstrap.css";
import "../../styles/style.css";

const Contact = () => {
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

        <section class="flat-row flat-iconbox">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title-section">
                  <h2 class="title">Get In Touch</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="iconbox text-center">
                  <div class="box-header nomargin">
                    <div class="icon">
                      <i class="fa fa-map-marker"></i>
                    </div>
                  </div>
                  <div class="box-content">
                    <p>203, Envato Labs, Behind Alis Steet</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="divider h0"></div>
                <div class="iconbox text-center">
                  <div class="box-header">
                    <div class="icon">
                      <i class="fa fa-phone"></i>
                    </div>
                  </div>
                  <div class="box-content">
                    <p>+12 345 678 910 / +23 122 345 678</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="divider h0"></div>
                <div class="iconbox text-center">
                  <div class="box-header">
                    <div class="icon">
                      <i class="fa fa-envelope"></i>
                    </div>
                  </div>
                  <div class="box-content">
                    <p>Infor.deercreative@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="divider h43"></div>
            <div class="row">
              <div class="col-md-12">
                <div class="flat-map"></div>
              </div>
            </div>
          </div>
        </section>

        <section class="flat-row flat-contact">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="title-section margin_bottom_17">
                  <h2 class="title">Send Us Email</h2>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="wrap-contact">
                <form
                  novalidate=""
                  class="contact-form"
                  id="contactform"
                  method="post"
                  action="#"
                >
                  <div class="form-text-wrap clearfix">
                    <div class="contact-name clearfix">
                      <label>Name</label>
                      <input
                        type="text"
                        aria-required="true"
                        size="30"
                        value=""
                        name="author"
                        id="author"
                      />
                    </div>
                    <div class="contact-email">
                      <label>Email</label>
                      <input
                        type="email"
                        size="30"
                        value=""
                        name="email"
                        id="email"
                      />
                    </div>
                    <div class="contact-subject">
                      <label>Subject</label>
                      <input
                        type="text"
                        aria-required="true"
                        size="30"
                        value=""
                        name="subject"
                        id="subject"
                      />
                    </div>
                  </div>

                  <div class="contact-message clearfix margin-top-40">
                    <label>Message</label>
                    <textarea
                      class=""
                      tabindex="4"
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <div class="form-submit margin-top-32 ">
                    <button class="contact-submit">SEND</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </body>
  );
};

export default Contact;
