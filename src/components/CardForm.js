import "./CardForm.css";

const CardForm = ({
  imageDimensions,
  doctorInfo,
  carDimensions,
  doctorTitle,
  departmentName,
}) => {
  return (
    <div className="category-wrapper4">
      <div className="category11">
        <div className="image-9-container">
          <img className="image-9-icon2" alt="" src={imageDimensions} />
          <div className="cardtitle-parent">
            <div className="cardtitle">
              <b className="h2-section-title-1-sec-12">{doctorInfo}</b>
            </div>
            <div className="div18">
              <div className="blue" />
              <div className="gray" />
              <div className="icon-hat-graduation-parent">
                <img
                  className="icon-hat-graduation"
                  alt=""
                  src={carDimensions}
                />
                <div className="phd">{doctorTitle}</div>
              </div>
              <img className="fill-ftriup-icon" alt="" src="/fill-ftriup.svg" />
            </div>
            <div className="div18">
              <div className="blue" />
              <div className="gray" />
              <div className="icon-hat-graduation-parent">
                <img
                  className="icon-people-team"
                  alt=""
                  src="/-icon-people-team.svg"
                />
                <div className="phd">{departmentName}</div>
              </div>
              <img className="fill-ftriup-icon" alt="" src="/fill-ftriup.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForm;
