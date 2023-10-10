import "./SectionCard.css";

const SectionCard = () => {
  return (
    <div className="homepage-inner">
      <div className="image-22-parent">
        <img className="image-22-icon" alt="" src="/image-22@2x.png" />
        <div className="about-us-parent">
          <b className="about-us3">About us</b>
          <b className="who-we-are">Who We Are</b>
          <div className="lorem-media-is-container">
            <p className="lorem-media-is">
              Lorem Media is a full-service social media agency. We offer
              businesses innovative solutions that deliver the right type of
              audience to you in the most effective strategies possible. We
              strive to develop a community around your business, polishing your
              branding, and improving your public relations.
            </p>
            <p className="lorem-media-is">
              Social Media is now one of the most powerful marketing tools with
              the ability to communicate with a target audience in real time.
            </p>
            <p className="lorem-media-is"></p>
            <p className="lorem-media-is">It's 2019: time to sink or swim.</p>
            <p className="lorem-media-is"></p>
            <p className="lorem-media-is">
              We are your Social Media Marketing Agency.
            </p>
          </div>
          <div className="btnseemore">
            <b className="see-more">See More</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
