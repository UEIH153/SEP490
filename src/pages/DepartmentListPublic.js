import NavbarStyle2NavbarLight from "../components/NavbarStyle2NavbarLight";
import DepartmentFilter1 from "../components/DepartmentFilter1";
import ContainerCardFormFilter2 from "../components/ContainerCardFormFilter2";
import "./DepartmentListPublic.css";

const DepartmentListPublic = () => {
  return (
    <div className="department-listpublic">
      <NavbarStyle2NavbarLight
        standardCollection12="/standard-collection-126.svg"
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
      <img className="image-23-icon1" alt="" src="/image-23@2x.png" />
      <DepartmentFilter1 />
      <ContainerCardFormFilter2
        imageDimensions="/deco3.svg"
        imageDimensionsText="/standard-collection-127.svg"
        imageDimensionsCode="/socmed2.svg"
        imageDimensionsCodeText="/chevrondown.svg"
        imageDimensionsOther="/androidglobe.svg"
        propHeight="354px"
      />
    </div>
  );
};

export default DepartmentListPublic;
