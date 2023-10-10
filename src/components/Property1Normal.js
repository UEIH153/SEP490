import { useMemo } from "react";
import "./Property1Normal.css";

const Property1Normal = ({ vector4, property1NormalPosition }) => {
  const property1NormalStyle = useMemo(() => {
    return {
      position: property1NormalPosition,
    };
  }, [property1NormalPosition]);

  return (
    <div className="property-1normal" style={property1NormalStyle}>
      <img className="property-1normal-child" alt="" src={vector4} />
      <div className="property-1normal-item" />
    </div>
  );
};

export default Property1Normal;
