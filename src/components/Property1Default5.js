import { useMemo } from "react";
import "./Property1Default5.css";

const Property1Default5 = ({ vector4, property1DefaultPosition }) => {
  const property1Default3Style = useMemo(() => {
    return {
      position: property1DefaultPosition,
    };
  }, [property1DefaultPosition]);

  return (
    <div className="property-1default5" style={property1Default3Style}>
      <div className="property-1default-child" />
      <img className="property-1default-item" alt="" src={vector4} />
    </div>
  );
};

export default Property1Default5;
