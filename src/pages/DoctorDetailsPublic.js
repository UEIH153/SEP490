import NavbarStyle2NavbarLight from "../components/NavbarStyle2NavbarLight";
import ProfileList from "../components/ProfileList";
import ContainerCardFormFilter2 from "../components/ContainerCardFormFilter2";
import "./DoctorDetailsPublic.css";

const DoctorDetailsPublic = () => {
  return (
    <div className="doctordetailspublic">
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
      <img className="image-24-icon" alt="" src="/image-241@2x.png" />
      <div className="content3">
        <div className="container1">
          <div className="category-wrapper">
            <div className="category4">
              <div className="frame-parent8">
                <div className="image-9-parent">
                  <img className="image-9-icon" alt="" src="/image-9@2x.png" />
                  <div className="buttonoutlinedprimary-large">
                    <div className="flatprimary1">
                      <div className="rectangle" />
                      <b className="create-appointment-n1">
                        Make an Appointment Now!
                      </b>
                    </div>
                  </div>
                </div>
                <div className="main-content-parent">
                  <div className="main-content">
                    <b className="h2-section-title-1-sec-">Dr. Ivan Good</b>
                    <div className="main-content-child" />
                    <ProfileList
                      body="Department"
                      body1="General Surgery Department,"
                      showBody
                      profileListHeight="67px"
                      bodyLetterSpacing="unset"
                    />
                    <ProfileList
                      body="Education"
                      showBody
                      profileListHeight="unset"
                      bodyLetterSpacing="unset"
                    />
                    <ProfileList
                      body="Specialized activities"
                      showBody
                      profileListHeight="unset"
                      bodyLetterSpacing="unset"
                    />
                  </div>
                  <div className="main-content1">
                    <b className="h2-section-title-1-sec-">Achievement</b>
                    <div className="main-content-child" />
                    <ProfileList
                      body="Department"
                      showBody={false}
                      profileListHeight="unset"
                      bodyLetterSpacing="0.2px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContainerCardFormFilter2
        imageDimensions="/deco1.svg"
        imageDimensionsText="/standard-collection-124.svg"
        imageDimensionsCode="/socmed.svg"
        imageDimensionsCodeText="/chevrondown.svg"
        imageDimensionsOther="/androidglobe.svg"
      />
    </div>
  );
};

export default DoctorDetailsPublic;
