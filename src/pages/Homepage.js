import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import NavbarStyle2NavbarLight from "../components/NavbarStyle2NavbarLight";
import Property1Default7 from "../components/Property1Default7";
import TopServicesCard from "../components/TopServicesCard";
import DepartmentFilter from "../components/DepartmentFilter";
import DoctorCard from "../components/DoctorCard";
import SectionCard from "../components/SectionCard";
import FooterContainer from "../components/FooterContainer";
import "./Homepage.css";

const Homepage = () => {
  const onBtnTextClick = useCallback(() => {
    // Please sync "Register" to the project
  }, []);

  const onNavItemSecClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <div className="homepage">
      <NavbarStyle2NavbarLight
        standardCollection12="/standard-collection-12.svg"
        frameDivBackgroundColor="rgba(144, 131, 213, 0.88)"
        homeColor="#fff"
        homeFontWeight="bold"
        frameDivBackgroundColor1="unset"
        servicesFontWeight="500"
        servicesColor="#817697"
        frameDivBackgroundColor2="unset"
        doctorsFontWeight="500"
        doctorsColor="#817697"
        frameDivTextDecoration="none"
        navbarNavWidth="unset"
        navbarNavDisplay="unset"
        navbarNavFlexDirection="unset"
        navbarNavAlignItems="unset"
        navbarNavJustifyContent="unset"
        navbarNavGap="unset"
        navbarNavCursor="pointer"
        navbarNavBorder="none"
        navbarNavPadding="0"
        navbarNavBackgroundColor="transparent"
        btnTextFontSize="unset"
        btnTextLetterSpacing="unset"
        btnTextLineHeight="unset"
        btnTextDisplay="unset"
        btnTextFontFamily="unset"
        btnTextBackground="unset"
        btnTextWebkitBackgroundClip="unset"
        btnTextWebkitTextFillColor="unset"
        btnTextTextAlign="unset"
        btnTextCursor="pointer"
        btnTextFontWeight="unset"
        navItemSecHeight="unset"
        navItemSecOverflow="unset"
        navItemSecCursor="pointer"
        onBtnTextClick={onBtnTextClick}
        onNavItemSecClick={onNavItemSecClick}
      />
      <Property1Default7 group9950="/group-9950.svg" />
      <div className="stats-1">
        <div className="container">
          <div className="row">
            <div className="col-md-3-sec-">
              <b className="metrics2">10</b>
              <b className="metrics-title2">Years of establishment</b>
            </div>
            <div className="col-md-3-sec-1">
              <b className="metrics2">15K</b>
              <b className="metrics-title2">Happy patients</b>
            </div>
            <div className="col-md-3-sec-2">
              <b className="metrics2">100</b>
              <b className="metrics-title2">Experts</b>
            </div>
          </div>
        </div>
      </div>
      <TopServicesCard />
      <DepartmentFilter />
      <DoctorCard />
      <div className="contact-cta">
        <div className="text">
          <div className="ready-to-get">Ready to get started ?</div>
          <b className="pellentesque-ac-bibe">
            Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
          </b>
        </div>
        <div className="flatprimary">
          <b className="create-appointment-n">Make an Appointment Now!</b>
        </div>
      </div>
      <SectionCard />
      <FooterContainer />
    </div>
  );
};

export default Homepage;
