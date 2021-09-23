const SubHeader = () => {
  return (
    <div id="top-bar">
      <div id="top-bar-inner" class="container-fluid container-width-94">
        <div class="top-bar-inner-wrap ">
          <div class="top-bar-left">
            <ul class="language style2">
              <li class="active">
                <a href="#">ENG</a>
              </li>
            </ul>
          </div>
          <div class="top-bar-content">
            <span class="content">
              FREE SHIPPING FREE RETURNS ON ALL ORDERS
            </span>
          </div>
          <div class="top-bar-nav">
            <div class="inner">
              <span class="money">
                USD <i class="fa fa-usd"></i>
              </span>
              <span class="account">
                <a href="#">
                  My Account <i class="fa fa-user"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
