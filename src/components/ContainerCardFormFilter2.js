import { useMemo } from "react";
import GroupComponent from "./GroupComponent";
import "./ContainerCardFormFilter2.css";

const ContainerCardFormFilter2 = ({
  imageDimensions,
  imageDimensionsText,
  imageDimensionsCode,
  imageDimensionsCodeText,
  imageDimensionsOther,
  propHeight,
}) => {
  const footerStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="footer3" style={footerStyle}>
      <div className="div12" />
      <div className="footer4">
        <img className="deco-icon1" alt="" src={imageDimensions} />
        <div className="footermenu2">
          <div className="footermenu3">
            <div className="monday-group">
              <div className="nam-posuere-accumsan1">
                Nam posuere accumsan porta. Integer id tincidunt sit amet sed
                libero.
              </div>
              <div className="skyrev-theme-20211">© Skyrev Theme 2021</div>
              <div className="sitemap2">
                <div className="company3">Quick access</div>
                <div className="donec-dignissim-cura-container2">
                  <p className="donec-dignissim1">Donec dignissim</p>
                  <p className="donec-dignissim1">&nbsp;</p>
                  <p className="donec-dignissim1">Curabitur egestas</p>
                  <p className="donec-dignissim1">&nbsp;</p>
                  <p className="donec-dignissim1">Nam posuere</p>
                  <p className="donec-dignissim1">&nbsp;</p>
                  <p className="donec-dignissim1">Aenean facilisis</p>
                </div>
              </div>
              <div className="sitemap3">
                <div className="company4">Services</div>
                <div className="donec-dignissim-cura-container3">
                  <p className="donec-dignissim1">Cras convallis</p>
                  <p className="donec-dignissim1">&nbsp;</p>
                  <p className="donec-dignissim1">Vestibulum faucibus</p>
                  <p className="donec-dignissim1">&nbsp;</p>
                  <p className="donec-dignissim1">Quisque lacinia purus</p>
                  <p className="donec-dignissim1">&nbsp;</p>
                  <p className="donec-dignissim1">Aliquam nec ex</p>
                </div>
              </div>
              <GroupComponent
                standardCollection12="/standard-collection-124.svg"
                groupDivWidth="27.08%"
                groupDivHeight="14.68%"
                groupDivPosition="absolute"
                groupDivTop="2.57%"
                groupDivRight="72.92%"
                groupDivBottom="82.75%"
                groupDivLeft="0%"
                standardCollection12Width="20%"
                standardCollection12Right="81.53%"
                standardCollection12Left="-1.53%"
              />
              <div className="sitemap-copy1">
                <div className="company5">Working hours</div>
                <div className="sitemap-copy-inner">
                  <div className="monday-group">
                    <div className="monday1">{`Monday:            `}</div>
                    <div className="div13">9:00 - 18:00</div>
                    <div className="div14">9:00 - 18:00</div>
                    <div className="div15">9:00 - 18:00</div>
                    <div className="div16">9:00 - 18:00</div>
                    <div className="div17">9:00 - 18:00</div>
                    <div className="thursday1">Thursday:</div>
                    <div className="friday1">Friday:</div>
                    <div className="tuesday1">{`Tuesday:            `}</div>
                    <div className="wednesday1">Wednesday:</div>
                  </div>
                </div>
              </div>
              <img className="socmed-icon" alt="" src={imageDimensionsCode} />
            </div>
            <div className="lang-select1">
              <div className="rectangle1" />
              <img
                className="chevron-down-icon"
                alt=""
                src={imageDimensionsCodeText}
              />
              <img
                className="android-globe-icon"
                alt=""
                src={imageDimensionsOther}
              />
              <div className="group1">
                <div className="english-en1">English - En</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerCardFormFilter2;
