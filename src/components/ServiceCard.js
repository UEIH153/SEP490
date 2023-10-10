import "./ServiceCard.css";

const ServiceCard = ({ maskGroup }) => {
  return (
    <div className="service-card">
      <img className="mask-group-icon24" alt="" src={maskGroup} />
      <b className="cancer-screening">Cancer Screening</b>
    </div>
  );
};

export default ServiceCard;
