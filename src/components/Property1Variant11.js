import { useMemo } from "react";
import "./Property1Variant11.css";

const Property1Variant11 = ({
  image27,
  dermatology,
  categoryMixBlendMode,
  frameDivHeight,
  frameDivWidth,
  frameDivTop,
  frameDivRight,
  frameDivBottom,
  frameDivLeft,
  frameDivMixBlendMode,
  image27IconWidth,
  image27IconHeight,
  rectangleDivBackgroundColor,
  rectangleDivWidth,
  rectangleDivHeight,
}) => {
  const categoryStyle = useMemo(() => {
    return {
      mixBlendMode: categoryMixBlendMode,
    };
  }, [categoryMixBlendMode]);

  const frameDiv5Style = useMemo(() => {
    return {
      height: frameDivHeight,
      width: frameDivWidth,
      top: frameDivTop,
      right: frameDivRight,
      bottom: frameDivBottom,
      left: frameDivLeft,
      mixBlendMode: frameDivMixBlendMode,
    };
  }, [
    frameDivHeight,
    frameDivWidth,
    frameDivTop,
    frameDivRight,
    frameDivBottom,
    frameDivLeft,
    frameDivMixBlendMode,
  ]);

  const image27IconStyle = useMemo(() => {
    return {
      width: image27IconWidth,
      height: image27IconHeight,
    };
  }, [image27IconWidth, image27IconHeight]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
      width: rectangleDivWidth,
      height: rectangleDivHeight,
    };
  }, [rectangleDivBackgroundColor, rectangleDivWidth, rectangleDivHeight]);

  return (
    <div className="property-1variant11">
      <div className="category" style={categoryStyle}>
        <div className="category-child" />
        <div className="image-27-parent" style={frameDiv5Style}>
          <img
            className="image-27-icon"
            alt=""
            src={image27}
            style={image27IconStyle}
          />
          <div className="rectangle-div" style={rectangleDivStyle} />
        </div>
      </div>
      <div className="dermatology">{dermatology}</div>
    </div>
  );
};

export default Property1Variant11;
