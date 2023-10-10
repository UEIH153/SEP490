import GroupComponent from "./GroupComponent";
import "./FooterContainer.css";

const FooterContainer = () => {
  return (
    <div className="footer">
      <div className="div6" />
      <div className="footer1">
        <img className="deco-icon" alt="" src="/deco.svg" />
        <div className="footermenu">
          <div className="footermenu1">
            <div className="footer2">
              <div className="nam-posuere-accumsan">
                Nam posuere accumsan porta. Integer id tincidunt sit amet sed
                libero.
              </div>
              <div className="skyrev-theme-2021">© Skyrev Theme 2021</div>
              <div className="sitemap">
                <div className="company">Quick access</div>
                <div className="donec-dignissim-cura-container">
                  <p className="donec-dignissim">Donec dignissim</p>
                  <p className="donec-dignissim">&nbsp;</p>
                  <p className="donec-dignissim">Curabitur egestas</p>
                  <p className="donec-dignissim">&nbsp;</p>
                  <p className="donec-dignissim">Nam posuere</p>
                  <p className="donec-dignissim">&nbsp;</p>
                  <p className="donec-dignissim">Aenean facilisis</p>
                </div>
              </div>
              <div className="sitemap1">
                <div className="company1">Services</div>
                <div className="donec-dignissim-cura-container1">
                  <p className="donec-dignissim">Cras convallis</p>
                  <p className="donec-dignissim">&nbsp;</p>
                  <p className="donec-dignissim">Vestibulum faucibus</p>
                  <p className="donec-dignissim">&nbsp;</p>
                  <p className="donec-dignissim">Quisque lacinia purus</p>
                  <p className="donec-dignissim">&nbsp;</p>
                  <p className="donec-dignissim">Aliquam nec ex</p>
                </div>
              </div>
              <GroupComponent
                standardCollection12="/standard-collection-121.svg"
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
              <div className="sitemap-copy">
                <div className="company2">Working hours</div>
                <div className="monday-parent">
                  <div className="monday">{`Monday:            `}</div>
                  <div className="div7">9:00 - 18:00</div>
                  <div className="div8">9:00 - 18:00</div>
                  <div className="div9">9:00 - 18:00</div>
                  <div className="div10">9:00 - 18:00</div>
                  <div className="div11">9:00 - 18:00</div>
                  <div className="thursday">Thursday:</div>
                  <div className="friday">Friday:</div>
                  <div className="tuesday">{`Tuesday:            `}</div>
                  <div className="wednesday">Wednesday:</div>
                </div>
              </div>
              <img className="footer-child" alt="" src="/group-237644.svg" />
            </div>
            <div className="lang-select">
              <img className="frame-icon" alt="" src="/frame.svg" />
              <div className="frame1">
                <div className="group">
                  <div className="english-en">English - En</div>
                </div>
                <img className="shape-icon" alt="" src="/shape.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
