import { useMemo } from "react";
import "./Property1Default2.css";

const Property1Default2 = ({
  property1DefaultWidth,
  frameDivFlex,
  frameDivJustifyContent,
  frameDivGap,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      width: property1DefaultWidth,
    };
  }, [property1DefaultWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      flex: frameDivFlex,
      justifyContent: frameDivJustifyContent,
      gap: frameDivGap,
    };
  }, [frameDivFlex, frameDivJustifyContent, frameDivGap]);

  return (
    <div className="property-1default2" style={property1Default1Style}>
      <div className="frame-div" style={frameDivStyle}>
        <div className="arrows-chevron-down-2-24px-wrapper">
          <img
            className="arrows-chevron-down-2-24px"
            alt=""
            src="/arrows--chevron-down-2--24px.svg"
          />
        </div>
        <div className="wrapper">
          <div className="div">{`<`}</div>
        </div>
        <div className="frame-parent1">
          <div className="frame">
            <div className="div1">1</div>
          </div>
          <div className="arrows-chevron-down-2-24px-container">
            <div className="div">2</div>
          </div>
          <div className="arrows-chevron-down-2-24px-container">
            <div className="div">3</div>
          </div>
          <div className="arrows-chevron-down-2-24px-container">
            <div className="div">...</div>
          </div>
          <div className="arrows-chevron-down-2-24px-container">
            <div className="div">10</div>
          </div>
        </div>
        <div className="arrows-chevron-down-2-24px-container">
          <img
            className="arrows-chevron-down-2-24px"
            alt=""
            src="/arrows--chevron-down-2--24px1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Property1Default2;
