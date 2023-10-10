import { useMemo } from "react";
import "./ContainerCardFormFilter1.css";

const ContainerCardFormFilter1 = ({
  imageDimensions,
  propPadding,
  propBackgroundColor,
  propTextAlign,
  propTextAlign1,
}) => {
  const container1Style = useMemo(() => {
    return {
      padding: propPadding,
      backgroundColor: propBackgroundColor,
    };
  }, [propPadding, propBackgroundColor]);

  const contentStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const content1Style = useMemo(() => {
    return {
      textAlign: propTextAlign1,
    };
  }, [propTextAlign1]);

  return (
    <div className="container8" style={container1Style}>
      <div className="main-content8">
        <b className="h2-section-title-1-sec-7">You may be interested</b>
        <div className="dch-v">
          <div className="rectangle-parent1">
            <img className="frame-child3" alt="" src="/rectangle-2471@2x.png" />
            <div className="title-wrapper1">
              <div className="title6">
                <div className="content4">
                  <b className="content5" style={contentStyle}>
                    Advanced general health examination package
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dch-v">
          <div className="rectangle-parent1">
            <img className="frame-child3" alt="" src="/rectangle-248@2x.png" />
            <div className="title-wrapper1">
              <div className="title6">
                <div className="title8">
                  <div className="content6">
                    <b
                      className="content5"
                      style={content1Style}
                    >{`General health check-up package Standard Female < 40 years old`}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dch-v">
          <div className="rectangle-parent1">
            <img className="frame-child3" alt="" src="/rectangle-2481@2x.png" />
            <div className="title-wrapper1">
              <div className="title6">
                <div className="content4">
                  <b className="content5">Vaccination</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="image-24-icon2" alt="" src={imageDimensions} />
      </div>
    </div>
  );
};

export default ContainerCardFormFilter1;
