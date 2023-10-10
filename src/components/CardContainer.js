import { useMemo } from "react";
import "./CardContainer.css";

const CardContainer = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsId,
  imageDimensionsKey,
  propTop,
  propBottom,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  return (
    <div className="frame-parent9" style={groupDiv1Style}>
      <div className="mask-group-parent23">
        <img className="mask-group-icon27" alt="" src={imageDimensions} />
        <div className="silva-admp-parent22">
          <b className="silva-admp24">Silva A.D.M.P</b>
          <div className="mbbsmdidccm24">MBBS,MD,IDCCM</div>
        </div>
      </div>
      <div className="mask-group-parent24">
        <img className="mask-group-icon27" alt="" src={imageDimensionsText} />
        <div className="silva-admp-parent22">
          <b className="silva-admp24">Silva A.D.M.P</b>
          <div className="mbbsmdidccm24">MBBS,MD,IDCCM</div>
        </div>
      </div>
      <div className="mask-group-parent25">
        <img className="mask-group-icon27" alt="" src={imageDimensionsId} />
        <div className="silva-admp-parent22">
          <b className="silva-admp24">Silva A.D.M.P</b>
          <div className="mbbsmdidccm24">MBBS,MD,IDCCM</div>
        </div>
      </div>
      <div className="mask-group-parent26">
        <img className="mask-group-icon27" alt="" src={imageDimensionsKey} />
        <div className="silva-admp-parent22">
          <b className="silva-admp24">Silva A.D.M.P</b>
          <div className="mbbsmdidccm24">MBBS,MD,IDCCM</div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
