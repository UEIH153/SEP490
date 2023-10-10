import { useMemo } from "react";
import GroupComponent from "./GroupComponent";
import Property1Variant6 from "./Property1Variant6";
import "./NavbarStyle2NavbarLight.css";

const NavbarStyle2NavbarLight = ({
  standardCollection12,
  btnText,
  icnArrowRightIcnXs,
  frameDivBackgroundColor,
  homeColor,
  homeFontWeight,
  frameDivBackgroundColor1,
  servicesFontWeight,
  servicesColor,
  frameDivBackgroundColor2,
  doctorsFontWeight,
  doctorsColor,
  frameDivTextDecoration,
  navbarNavWidth,
  navbarNavDisplay,
  navbarNavFlexDirection,
  navbarNavAlignItems,
  navbarNavJustifyContent,
  navbarNavGap,
  navbarNavCursor,
  navbarNavBorder,
  navbarNavPadding,
  navbarNavBackgroundColor,
  btnTextFontSize,
  btnTextLetterSpacing,
  btnTextLineHeight,
  btnTextDisplay,
  btnTextFontFamily,
  btnTextBackground,
  btnTextWebkitBackgroundClip,
  btnTextWebkitTextFillColor,
  btnTextTextAlign,
  btnTextCursor,
  btnTextFontWeight,
  navItemSecHeight,
  navItemSecOverflow,
  navItemSecCursor,
  onBtnTextClick,
  onNavItemSecClick,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
    };
  }, [frameDivBackgroundColor]);

  const homeStyle = useMemo(() => {
    return {
      color: homeColor,
      fontWeight: homeFontWeight,
    };
  }, [homeColor, homeFontWeight]);

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
      fontWeight: doctorsFontWeight,
      color: doctorsColor,
    };
  }, [doctorsFontWeight, doctorsColor]);

  const frameDiv4Style = useMemo(() => {
    return {
      textDecoration: frameDivTextDecoration,
    };
  }, [frameDivTextDecoration]);

  const navbarNavStyle = useMemo(() => {
    return {
      width: navbarNavWidth,
      display: navbarNavDisplay,
      flexDirection: navbarNavFlexDirection,
      alignItems: navbarNavAlignItems,
      justifyContent: navbarNavJustifyContent,
      gap: navbarNavGap,
      cursor: navbarNavCursor,
      border: navbarNavBorder,
      padding: navbarNavPadding,
      backgroundColor: navbarNavBackgroundColor,
    };
  }, [
    navbarNavWidth,
    navbarNavDisplay,
    navbarNavFlexDirection,
    navbarNavAlignItems,
    navbarNavJustifyContent,
    navbarNavGap,
    navbarNavCursor,
    navbarNavBorder,
    navbarNavPadding,
    navbarNavBackgroundColor,
  ]);

  const btnTextStyle = useMemo(() => {
    return {
      fontSize: btnTextFontSize,
      letterSpacing: btnTextLetterSpacing,
      lineHeight: btnTextLineHeight,
      display: btnTextDisplay,
      fontFamily: btnTextFontFamily,
      background: btnTextBackground,
      webkitBackgroundClip: btnTextWebkitBackgroundClip,
      webkitTextFillColor: btnTextWebkitTextFillColor,
      textAlign: btnTextTextAlign,
      cursor: btnTextCursor,
      fontWeight: btnTextFontWeight,
    };
  }, [
    btnTextFontSize,
    btnTextLetterSpacing,
    btnTextLineHeight,
    btnTextDisplay,
    btnTextFontFamily,
    btnTextBackground,
    btnTextWebkitBackgroundClip,
    btnTextWebkitTextFillColor,
    btnTextTextAlign,
    btnTextCursor,
    btnTextFontWeight,
  ]);

  const navItemSecStyle = useMemo(() => {
    return {
      height: navItemSecHeight,
      overflow: navItemSecOverflow,
      cursor: navItemSecCursor,
    };
  }, [navItemSecHeight, navItemSecOverflow, navItemSecCursor]);

  return (
    <div className="navbar-style-2-navbar-light">
      <GroupComponent
        standardCollection12="/standard-collection-12.svg"
        groupDivWidth="236px"
        groupDivHeight="40px"
        groupDivPosition="relative"
        groupDivTop="unset"
        groupDivRight="unset"
        groupDivBottom="unset"
        groupDivLeft="unset"
        standardCollection12Width="20.34%"
        standardCollection12Right="81.36%"
        standardCollection12Left="-1.69%"
      />
      <Property1Variant6
        frameDivBackgroundColor="rgba(144, 131, 213, 0.88)"
        homeFontWeight="bold"
        homeColor="#fff"
        frameDivBackgroundColor1="unset"
        servicesFontWeight="500"
        servicesColor="#817697"
        frameDivBackgroundColor2="unset"
        doctorsColor="#817697"
        doctorsFontWeight="500"
        frameDivTextDecoration="unset"
      />
      <div className="navbar-nav" style={navbarNavStyle}>
        <b
          className="btn-text"
          style={btnTextStyle}
          onClick={onBtnTextClick}
        >{`Sign up `}</b>
        <div
          className="nav-item-sec-"
          style={navItemSecStyle}
          onClick={onNavItemSecClick}
        >
          <div className="buttonbtnprimary-color">
            <b className="btn-text1">{btnText}</b>
            <img
              className="icn-arrow-right-icn-xs"
              alt=""
              src={icnArrowRightIcnXs}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarStyle2NavbarLight;
