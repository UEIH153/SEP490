import { useMemo } from "react";
import "./ContainerCardFormFilter.css";

const ContainerCardFormFilter = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsTimestamp,
  imageDimensionsId,
  imageDimensionsUrl,
  imageDimensionsText2,
  imageDimensionsKey,
  imageDimensionsTextId,
  imageDimensionsTextId2,
  imageDimensionsKey2,
  imageDimensionsTextId3,
  imageDimensionsKey3,
  propLeft,
}) => {
  const frameDiv6Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="group-wrapper2" style={frameDiv6Style}>
      <div className="frame-wrapper8">
        <div className="group-parent3">
          <div className="frame-wrapper9">
            <div className="frame-parent10">
              <div className="mask-group-parent27">
                <img
                  className="mask-group-icon31"
                  alt=""
                  src={imageDimensions}
                />
                <div className="silva-admp-parent26">
                  <b className="silva-admp28">Silva A.D.M.P</b>
                  <div className="mbbsmdidccm28">MBBS,MD,IDCCM</div>
                </div>
              </div>
              <div className="mask-group-parent27">
                <img
                  className="mask-group-icon31"
                  alt=""
                  src={imageDimensionsText}
                />
                <div className="silva-admp-parent26">
                  <b className="silva-admp28">Silva A.D.M.P</b>
                  <div className="mbbsmdidccm28">MBBS,MD,IDCCM</div>
                </div>
              </div>
              <div className="mask-group-parent27">
                <img
                  className="mask-group-icon31"
                  alt=""
                  src={imageDimensionsTimestamp}
                />
                <div className="silva-admp-parent26">
                  <b className="silva-admp28">Silva A.D.M.P</b>
                  <div className="mbbsmdidccm28">MBBS,MD,IDCCM</div>
                </div>
              </div>
              <div className="mask-group-parent27">
                <img
                  className="mask-group-icon31"
                  alt=""
                  src={imageDimensionsId}
                />
                <div className="silva-admp-parent26">
                  <b className="silva-admp28">Silva A.D.M.P</b>
                  <div className="mbbsmdidccm28">MBBS,MD,IDCCM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper9">
            <div className="frame-parent10">
              <div className="mask-group-parent27">
                <img
                  className="mask-group-icon31"
                  alt=""
                  src={imageDimensionsUrl}
                />
                <div className="silva-admp-parent26">
                  <b className="silva-admp28">Silva A.D.M.P</b>
                  <div className="mbbsmdidccm28">MBBS,MD,IDCCM</div>
                </div>
              </div>
              <div className="mask-group-parent27">
                <img
                  className="mask-group-icon31"
                  alt=""
                  src={imageDimensionsText2}
                />
                <div className="silva-admp-parent26">
                  <b className="silva-admp28">Silva A.D.M.P</b>
                  <div className="mbbsmdidccm28">MBBS,MD,IDCCM</div>
                </div>
              </div>
              <div className="mask-group-parent27">
                <img
                  className="mask-group-icon31"
                  alt=""
                  src={imageDimensionsKey}
                />
                <div className="silva-admp-parent26">
                  <b className="silva-admp28">Silva A.D.M.P</b>
                  <div className="mbbsmdidccm28">MBBS,MD,IDCCM</div>
                </div>
              </div>
              <div className="mask-group-parent27">
                <img
                  className="mask-group-icon31"
                  alt=""
                  src={imageDimensionsTextId}
                />
                <div className="silva-admp-parent26">
                  <b className="silva-admp28">Silva A.D.M.P</b>
                  <div className="mbbsmdidccm28">MBBS,MD,IDCCM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper9">
            <div className="frame-parent10">
              <div className="mask-group-parent27">
                <img
                  className="mask-group-icon31"
                  alt=""
                  src={imageDimensionsTextId2}
                />
                <div className="silva-admp-parent26">
                  <b className="silva-admp28">Silva A.D.M.P</b>
                  <div className="mbbsmdidccm28">MBBS,MD,IDCCM</div>
                </div>
              </div>
              <div className="mask-group-parent27">
                <img
                  className="mask-group-icon31"
                  alt=""
                  src={imageDimensionsKey2}
                />
                <div className="silva-admp-parent26">
                  <b className="silva-admp28">Silva A.D.M.P</b>
                  <div className="mbbsmdidccm28">MBBS,MD,IDCCM</div>
                </div>
              </div>
              <div className="mask-group-parent27">
                <img
                  className="mask-group-icon31"
                  alt=""
                  src={imageDimensionsTextId3}
                />
                <div className="silva-admp-parent26">
                  <b className="silva-admp28">Silva A.D.M.P</b>
                  <div className="mbbsmdidccm28">MBBS,MD,IDCCM</div>
                </div>
              </div>
              <div className="mask-group-parent27">
                <img
                  className="mask-group-icon31"
                  alt=""
                  src={imageDimensionsKey3}
                />
                <div className="silva-admp-parent26">
                  <b className="silva-admp28">Silva A.D.M.P</b>
                  <div className="mbbsmdidccm28">MBBS,MD,IDCCM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCardFormFilter;
