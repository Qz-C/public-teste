const ReviewForm = () => {
  return (
    <div class="comment-respond review-respond" id="respond">
      <div class="comment-reply-title margin-bottom-14">
        <h5>Write a review</h5>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <form
        novalidate=""
        class="comment-form review-form"
        id="commentform"
        method="post"
        action="#"
      >
        <p class="flat-star style-2">
          <label>Rating*:</label>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </p>
        <p class="comment-form-comment">
          <label>Review*</label>
          <textarea class="" tabindex="4" name="comment" required>
            {" "}
          </textarea>
        </p>
        <p class="comment-name">
          <label>Name*</label>
          <input
            type="text"
            aria-required="true"
            size="30"
            value=""
            name="name"
            id="name"
          />
        </p>
        <p class="comment-email">
          <label>Email*</label>
          <input type="email" size="30" value="" name="email" id="email" />
        </p>
        <p class="comment-form-notify clearfix">
          <input type="checkbox" name="check-notify" id="check-notify" />{" "}
          <label for="check-notify">Notify me of new posts by email</label>
        </p>
        <p class="form-submit">
          <button class="comment-submit">Submit</button>
        </p>
      </form>
    </div>
  );
};

export default ReviewForm;
