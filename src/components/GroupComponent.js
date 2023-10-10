import { useMemo } from "react";
import "./GroupComponent.css";

const GroupComponent = ({
  standardCollection12,
  groupDivWidth,
  groupDivHeight,
  groupDivPosition,
  groupDivTop,
  groupDivRight,
  groupDivBottom,
  groupDivLeft,
  standardCollection12Width,
  standardCollection12Right,
  standardCollection12Left,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      width: groupDivWidth,
      height: groupDivHeight,
      position: groupDivPosition,
      top: groupDivTop,
      right: groupDivRight,
      bottom: groupDivBottom,
      left: groupDivLeft,
    };
  }, [
    groupDivWidth,
    groupDivHeight,
    groupDivPosition,
    groupDivTop,
    groupDivRight,
    groupDivBottom,
    groupDivLeft,
  ]);

  const standardCollection12Style = useMemo(() => {
    return {
      width: standardCollection12Width,
      right: standardCollection12Right,
      left: standardCollection12Left,
    };
  }, [
    standardCollection12Width,
    standardCollection12Right,
    standardCollection12Left,
  ]);

  return (
    <div className="sep490-hospital-parent" style={groupDivStyle}>
      <div className="sep490-hospital">SEP490 Hospital</div>
      <img
        className="standard-collection-12"
        alt=""
        src={standardCollection12}
        style={standardCollection12Style}
      />
    </div>
  );
};

export default GroupComponent;
