import { useMemo } from "react";
import PremiumGeneralHealthCheckPacka from "./PremiumGeneralHealthCheckPacka";
import ContainerCardFormFilter1 from "./ContainerCardFormFilter1";
import "./Property1Default.css";

const Property1Default = ({
  property1DefaultHeight,
  property1DefaultFlexShrink,
  containerPadding,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      height: property1DefaultHeight,
      flexShrink: property1DefaultFlexShrink,
    };
  }, [property1DefaultHeight, property1DefaultFlexShrink]);

  const containerStyle = useMemo(() => {
    return {
      padding: containerPadding,
    };
  }, [containerPadding]);

  return (
    <div className="property-1default" style={property1DefaultStyle}>
      <PremiumGeneralHealthCheckPacka />
      <ContainerCardFormFilter1 imageDimensions="/image-24@2x.png" />
    </div>
  );
};

export default Property1Default;
