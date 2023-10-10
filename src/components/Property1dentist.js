import { useMemo } from "react";
import "./Property1dentist.css";

const Property1dentist = ({ iconDentist, property1dentistAlignSelf }) => {
  const property1dentistStyle = useMemo(() => {
    return {
      alignSelf: property1dentistAlignSelf,
    };
  }, [property1dentistAlignSelf]);

  return (
    <div className="property-1dentist" style={property1dentistStyle}>
      <div className="category3">
        <div className="category-child1" />
        <img className="icon-dentist" alt="" src={iconDentist} />
      </div>
      <div className="dentistry">Dentistry</div>
    </div>
  );
};

export default Property1dentist;
