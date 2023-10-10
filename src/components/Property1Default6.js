import Property1Default5 from "./Property1Default5";
import ServiceCard from "./ServiceCard";
import ServiceCardForm from "./ServiceCardForm";
import Property1Normal from "./Property1Normal";
import Property1P1 from "./Property1P1";
import "./Property1Default6.css";

const Property1Default6 = ({
  vector4,
  maskGroup,
  maskGroup1,
  maskGroup2,
  vector41,
}) => {
  return (
    <div className="property-1default6">
      <Property1Default5
        vector4="/vector-43.svg"
        property1DefaultPosition="relative"
      />
      <ServiceCard maskGroup="/mask-group28@2x.png" />
      <ServiceCardForm imageDimensions="/mask-group29@2x.png" />
      <div className="service-card1">
        <img className="mask-group-icon25" alt="" src={maskGroup2} />
        <b className="regular-health-check-up">Regular Health Check-up</b>
      </div>
      <Property1Normal
        vector4="/vector-42.svg"
        property1NormalPosition="relative"
      />
      <Property1P1
        showEllipseDiv
        ellipseDivVisible
        property1P1Position="unset"
        property1P1Top="unset"
        property1P1Left="unset"
      />
    </div>
  );
};

export default Property1Default6;
