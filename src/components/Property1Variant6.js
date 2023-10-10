import { useMemo } from "react";
import "./Property1Variant6.css";

const Property1Variant6 = ({
  frameDivBackgroundColor,
  homeFontWeight,
  homeColor,
  frameDivBackgroundColor1,
  servicesFontWeight,
  servicesColor,
  frameDivBackgroundColor2,
  doctorsColor,
  doctorsFontWeight,
  frameDivTextDecoration,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
    };
  }, [frameDivBackgroundColor]);

  const homeStyle = useMemo(() => {
    return {
      fontWeight: homeFontWeight,
      color: homeColor,
    };
  }, [homeFontWeight, homeColor]);

  const frameDiv2Style = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor1,
    };
  }, [frameDivBackgroundColor1]);

  const servicesStyle = useMemo(() => {
    return {
      fontWeight: servicesFontWeight,
      color: servicesColor,
    };
  }, [servicesFontWeight, servicesColor]);

  const frameDiv3Style = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor2,
    };
  }, [frameDivBackgroundColor2]);

  const doctorsStyle = useMemo(() => {
    return {
      color: doctorsColor,
      fontWeight: doctorsFontWeight,
    };
  }, [doctorsColor, doctorsFontWeight]);

  const frameDiv4Style = useMemo(() => {
    return {
      textDecoration: frameDivTextDecoration,
    };
  }, [frameDivTextDecoration]);

  return (
    <div className="property-1variant6">
      <div className="home-wrapper" style={frameDiv1Style}>
        <div className="home" style={homeStyle}>
          Home
        </div>
      </div>
      <div className="home-wrapper" style={frameDiv2Style}>
        <div className="home" style={servicesStyle}>
          Services
        </div>
      </div>
      <div className="home-wrapper">
        <div className="home">Departments</div>
      </div>
      <div className="doctors-wrapper" style={frameDiv3Style}>
        <b className="doctors" style={doctorsStyle}>
          Doctors
        </b>
      </div>
      <div className="home-wrapper">
        <div className="home">About us</div>
      </div>
      <div className="home-wrapper">
        <div className="home">Contact</div>
      </div>
      <div className="make-an-appointment-wrapper" style={frameDiv4Style}>
        <div className="home">Make an appointment</div>
      </div>
    </div>
  );
};

export default Property1Variant6;
