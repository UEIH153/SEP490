import { useMemo } from "react";
import "./SizeLargeStateDefaultCho.css";

const SizeLargeStateDefaultCho = ({
  text,
  down,
  sizeLargeStateDefaultChoHeight,
  sizeLargeStateDefaultChoPosition,
  textFontFamily,
}) => {
  const sizeLargeStateDefaultChoStyle = useMemo(() => {
    return {
      height: sizeLargeStateDefaultChoHeight,
      position: sizeLargeStateDefaultChoPosition,
    };
  }, [sizeLargeStateDefaultChoHeight, sizeLargeStateDefaultChoPosition]);

  const textStyle = useMemo(() => {
    return {
      fontFamily: textFontFamily,
    };
  }, [textFontFamily]);

  return (
    <div
      className="sizelarge-statedefault-cho"
      style={sizeLargeStateDefaultChoStyle}
    >
      <div className="base" />
      <div className="text1" style={textStyle}>
        {text}
      </div>
      <img className="down-icon" alt="" src={down} />
    </div>
  );
};

export default SizeLargeStateDefaultCho;
