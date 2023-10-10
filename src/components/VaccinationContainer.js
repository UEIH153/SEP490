import { useMemo } from "react";
import "./VaccinationContainer.css";

const VaccinationContainer = ({
  imageDimensions,
  serviceDescription,
  healthPackageDescription,
  propHeight,
  propHeight1,
  propWidth,
  propHeight2,
  propWidth1,
  propHeight3,
  propAlignSelf,
  propWidth2,
  propHeight4,
  propWidth3,
  propHeight5,
  propFlexShrink,
  propAlignSelf1,
  propFlex,
  propWidth4,
}) => {
  const dchVStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv7Style = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const rectangleIconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight2,
    };
  }, [propWidth, propHeight2]);

  const frameDiv8Style = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight3,
      alignSelf: propAlignSelf,
    };
  }, [propWidth1, propHeight3, propAlignSelf]);

  const titleStyle = useMemo(() => {
    return {
      width: propWidth2,
      height: propHeight4,
    };
  }, [propWidth2, propHeight4]);

  const frameDiv9Style = useMemo(() => {
    return {
      width: propWidth3,
      height: propHeight5,
      flexShrink: propFlexShrink,
      alignSelf: propAlignSelf1,
      flex: propFlex,
    };
  }, [propWidth3, propHeight5, propFlexShrink, propAlignSelf1, propFlex]);

  const content2Style = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  return (
    <div className="dch-v3" style={dchVStyle}>
      <div className="rectangle-parent4" style={frameDiv7Style}>
        <img
          className="frame-child6"
          alt=""
          src={imageDimensions}
          style={rectangleIconStyle}
        />
        <div className="frame-parent13">
          <div className="title-wrapper4" style={frameDiv8Style}>
            <div className="title10" style={titleStyle}>
              <b className="title11">{serviceDescription}</b>
            </div>
          </div>
          <div className="content-wrapper2" style={frameDiv9Style}>
            <div className="content10" style={content2Style}>
              {healthPackageDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccinationContainer;
