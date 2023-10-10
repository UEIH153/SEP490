import NavbarStyle2NavbarLight from "../components/NavbarStyle2NavbarLight";
import Property1Default from "../components/Property1Default";
import AppointmentFormContainer from "../components/AppointmentFormContainer";
import ContainerCardFormFilter2 from "../components/ContainerCardFormFilter2";
import "./ServiceDetailsPublic.css";

const ServiceDetailsPublic = () => {
  return (
    <div className="service-detailspublic">
      <NavbarStyle2NavbarLight
        standardCollection12="/standard-collection-123.svg"
        btnText="Login"
        icnArrowRightIcnXs="/icn-arrowright-icnxs1.svg"
        frameDivBackgroundColor="unset"
        homeColor="#817697"
        homeFontWeight="500"
        frameDivBackgroundColor1="rgba(144, 131, 213, 0.88)"
        servicesFontWeight="bold"
        servicesColor="#fff"
        frameDivBackgroundColor2="unset"
        doctorsFontWeight="500"
        doctorsColor="#817697"
        frameDivTextDecoration="unset"
        navbarNavWidth="207px"
        navbarNavDisplay="flex"
        navbarNavFlexDirection="row"
        navbarNavAlignItems="center"
        navbarNavJustifyContent="flex-start"
        navbarNavGap="20px"
        navbarNavCursor="unset"
        navbarNavBorder="unset"
        navbarNavPadding="unset"
        navbarNavBackgroundColor="unset"
        btnTextFontSize="14px"
        btnTextLetterSpacing="0.2px"
        btnTextLineHeight="22px"
        btnTextDisplay="inline-block"
        btnTextFontFamily="Montserrat"
        btnTextBackground="linear-gradient(35.77deg, #9083d5, #807593)"
        btnTextWebkitBackgroundClip="unset"
        btnTextWebkitTextFillColor="unset"
        btnTextTextAlign="center"
        btnTextCursor="unset"
        btnTextFontWeight="unset"
        navItemSecHeight="52px"
        navItemSecOverflow="hidden"
        navItemSecCursor="unset"
      />
      <Property1Default
        property1DefaultHeight="1638px"
        property1DefaultFlexShrink="0"
        containerPadding="var(--padding-31xl) var(--padding-3xs) var(--padding-xl) var(--padding-xl)"
      />
      <AppointmentFormContainer />
      <ContainerCardFormFilter2
        imageDimensions="/deco2.svg"
        imageDimensionsText="/standard-collection-125.svg"
        imageDimensionsCode="/socmed1.svg"
        imageDimensionsCodeText="/chevrondown1.svg"
        imageDimensionsOther="/androidglobe1.svg"
        propHeight="344px"
      />
    </div>
  );
};

export default ServiceDetailsPublic;
