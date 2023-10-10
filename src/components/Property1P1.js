import { useMemo } from "react";
import "./Property1P1.css";

const Property1P1 = ({
  showEllipseDiv,
  ellipseDivVisible,
  property1P1Position,
  property1P1Top,
  property1P1Left,
}) => {
  const property1P1Style = useMemo(() => {
    return {
      position: property1P1Position,
      top: property1P1Top,
      left: property1P1Left,
    };
  }, [property1P1Position, property1P1Top, property1P1Left]);

  return (
    <div className="property-1p1" style={property1P1Style}>
      <div className="property-1p1-child" />
      <div className="property-1p1-item" />
      <div className="property-1p1-item" />
      {showEllipseDiv && <div className="property-1p1-item" />}
      {ellipseDivVisible && <div className="property-1p1-item" />}
    </div>
  );
};

export default Property1P1;
