import NavbarStyle2NavbarLight from "../components/NavbarStyle2NavbarLight";
import DoctorCard1 from "../components/DoctorCard1";
import ContainerCardFormFilter2 from "../components/ContainerCardFormFilter2";
import "./DoctorListPublic.css";

const DoctorListPublic = () => {
  return (
    <div className="doctorlistpublic">
      <NavbarStyle2NavbarLight
        standardCollection12="/standard-collection-123.svg"
        btnText="Login"
        icnArrowRightIcnXs="/icn-arrowright-icnxs1.svg"
        frameDivBackgroundColor="unset"
        homeColor="#817697"
        homeFontWeight="500"
        frameDivBackgroundColor1="unset"
        servicesFontWeight="500"
        servicesColor="#817697"
        frameDivBackgroundColor2="rgba(144, 131, 213, 0.88)"
        doctorsFontWeight="bold"
        doctorsColor="#fff"
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
      <img className="image-24-icon1" alt="" src="/image-241@2x.png" />
      <div className="content-wrapper1">
        <DoctorCard1 />
      </div>
      <ContainerCardFormFilter2
        imageDimensions="/deco1.svg"
        imageDimensionsText="/standard-collection-124.svg"
        imageDimensionsCode="/socmed.svg"
        imageDimensionsCodeText="/chevrondown.svg"
        imageDimensionsOther="/androidglobe.svg"
        propHeight="346px"
      />
    </div>
  );
};

export default DoctorListPublic;
