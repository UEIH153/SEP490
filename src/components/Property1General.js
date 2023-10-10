import { useMemo } from "react";
import "./Property1General.css";

const Property1General = ({
  property1GeneralProperty1,
  property1GeneralIconWidth,
  property1GeneralIconHeight,
  property1GeneralIconPosition,
}) => {
  const property1GeneralIconStyle = useMemo(() => {
    return {
      width: property1GeneralIconWidth,
      height: property1GeneralIconHeight,
      position: property1GeneralIconPosition,
    };
  }, [
    property1GeneralIconWidth,
    property1GeneralIconHeight,
    property1GeneralIconPosition,
  ]);

  return (
    <img
      className="property-1general-icon"
      alt=""
      src={property1GeneralProperty1}
      style={property1GeneralIconStyle}
    />
  );
};

export default Property1General;
