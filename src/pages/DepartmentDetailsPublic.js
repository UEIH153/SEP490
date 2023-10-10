import NavbarStyle2NavbarLight from "../components/NavbarStyle2NavbarLight";
import GeneralIntroductionContainer from "../components/GeneralIntroductionContainer";
import ContainerCardFormFilter2 from "../components/ContainerCardFormFilter2";
import "./DepartmentDetailsPublic.css";

const DepartmentDetailsPublic = () => {
  return (
    <div className="department-detailspublic">
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
      <img className="image-23-icon" alt="" src="/image-23@2x.png" />
      <div className="container3">
        <div className="category-container">
          <div className="category5">
            <div className="h2-section-title-1-sec-parent">
              <b className="h2-section-title-1-sec-3">
                OBSTETRICS AND GYNECOLOGY
              </b>
              <div className="group-child" />
            </div>
            <div className="paragraph-sec-1">
              The Obstetrics Department is considered one of the most spearhead
              at SEP490 Hospital. With sincere care, compassion, and
              responsibility, the medical team at SEP490 is always ready to
              accompany and serve as a solid foundation, so that parents can
              rest assured to receive precious moments in the most perfect way.
            </div>
          </div>
        </div>
        <GeneralIntroductionContainer />
      </div>
      <ContainerCardFormFilter2
        imageDimensions="/deco1.svg"
        imageDimensionsText="/standard-collection-124.svg"
        imageDimensionsCode="/socmed.svg"
        imageDimensionsCodeText="/chevrondown.svg"
        imageDimensionsOther="/androidglobe.svg"
        propHeight="354px"
      />
    </div>
  );
};

export default DepartmentDetailsPublic;
