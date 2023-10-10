import NavbarStyle2NavbarLight from "../components/NavbarStyle2NavbarLight";
import VaccinationContainer from "../components/VaccinationContainer";
import AppointmentFormContainer from "../components/AppointmentFormContainer";
import ContainerCardFormFilter2 from "../components/ContainerCardFormFilter2";
import "./ServiceListPublic.css";

const ServiceListPublic = () => {
  return (
    <div className="servicelistpublic">
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
      <div className="container2">
        <div className="main-content2">
          <b className="h2-section-title-1-sec-2">Our Service</b>
          <div className="paragraph-sec-">
            Experience high quality medical services that meet international
            standards at SEP490 Hospital
          </div>
          <div className="main-content-inner" />
        </div>
        <VaccinationContainer
          imageDimensions="/rectangle-2472@2x.png"
          serviceDescription="Premium general health check package"
          healthPackageDescription="The 2021 Premium general health examination package provides a comprehensive examination and screening solution for some cancer diseases such as stomach, colon... with senior doctors and experts at Vinmec, thereby providing direction in developing a health care plan."
          propHeight="444px"
          propHeight1="370px"
          propWidth="649px"
          propHeight2="374px"
          propWidth1="unset"
          propHeight3="128px"
          propAlignSelf="stretch"
          propWidth2="520px"
          propHeight4="128px"
          propWidth3="unset"
          propHeight5="unset"
          propFlexShrink="unset"
          propAlignSelf1="stretch"
          propFlex="1"
          propWidth4="520px"
        />
        <VaccinationContainer
          imageDimensions="/rectangle-2473@2x.png"
          serviceDescription="Advanced general health examination package"
          healthPackageDescription="The general health examination package is designed to be scientific and practical for early detection, timely intervention and treatment to minimize complications of serious diseases that threaten your life. "
          propHeight="301px"
          propHeight1="238px"
          propWidth="350px"
          propHeight2="238px"
          propWidth1="820px"
          propHeight3="127px"
          propAlignSelf="unset"
          propWidth2="820px"
          propHeight4="76px"
          propWidth3="820px"
          propHeight5="unset"
          propFlexShrink="unset"
          propAlignSelf1="unset"
          propFlex="1"
          propWidth4="820px"
        />
        <VaccinationContainer
          imageDimensions="/rectangle-2474@2x.png"
          serviceDescription={`General health check-up package Standard Female < 40 years old`}
          healthPackageDescription={`General health check-up package Standard for Women < 40 years old is performed by skilled, highly qualified doctors, helping to accurately assess general health status and early detect some dangerous diseases.`}
          propHeight="301px"
          propHeight1="238px"
          propWidth="350px"
          propHeight2="238px"
          propWidth1="820px"
          propHeight3="127px"
          propAlignSelf="unset"
          propWidth2="820px"
          propHeight4="76px"
          propWidth3="820px"
          propHeight5="101px"
          propFlexShrink="0"
          propAlignSelf1="unset"
          propFlex="unset"
          propWidth4="820px"
        />
        <VaccinationContainer
          imageDimensions="/rectangle-2475@2x.png"
          serviceDescription="Vaccination"
          healthPackageDescription="The general health examination package is designed to be scientific and practical for early detection, timely intervention and treatment to minimize complications of serious diseases that threaten your life. "
        />
        <div className="row1" />
      </div>
      <AppointmentFormContainer />
      <ContainerCardFormFilter2
        imageDimensions="/deco2.svg"
        imageDimensionsText="/standard-collection-125.svg"
        imageDimensionsCode="/socmed1.svg"
        imageDimensionsCodeText="/chevrondown1.svg"
        imageDimensionsOther="/androidglobe1.svg"
        propHeight="354px"
      />
    </div>
  );
};

export default ServiceListPublic;
