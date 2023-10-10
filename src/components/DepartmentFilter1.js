import Property1Covid from "./Property1Covid";
import Property1dentist from "./Property1dentist";
import Property1Variant11 from "./Property1Variant11";
import "./DepartmentFilter1.css";

const DepartmentFilter1 = () => {
  return (
    <div className="container11">
      <div className="row6" />
      <div className="category-wrapper5">
        <div className="category12">
          <div className="main-content10">
            <b className="h2-section-title-1-sec-14">Our Departments</b>
            <div className="paragraph-sec-10">
              Experience high quality medical services that meet international
              standards at SEP490 Hospital
            </div>
          </div>
          <div className="category-child3" />
          <div className="row-1-parent">
            <div className="row-11">
              <Property1Covid
                category="/category13.svg"
                covid19="General"
                property1CovidAlignSelf="stretch"
                categoryIconWidth="218px"
                covid19Width="136.15px"
              />
              <Property1dentist
                iconDentist="/icon--dentist1.svg"
                property1dentistAlignSelf="stretch"
              />
              <Property1Variant11
                image27="/image-26@2x.png"
                dermatology="Pediatrics"
                categoryMixBlendMode="normal"
                frameDivHeight="50%"
                frameDivWidth="50%"
                frameDivTop="25%"
                frameDivRight="25%"
                frameDivBottom="25%"
                frameDivLeft="25%"
                frameDivMixBlendMode="hard-light"
                image27IconWidth="50px"
                image27IconHeight="50px"
                rectangleDivBackgroundColor="#533777"
                rectangleDivWidth="50px"
                rectangleDivHeight="50px"
              />
              <Property1Covid
                category="/category14.svg"
                covid19="Other"
                property1CovidAlignSelf="stretch"
                categoryIconWidth="218px"
                covid19Width="211px"
              />
            </div>
            <div className="row-11">
              <Property1Covid
                category="/category15.svg"
                covid19="Cardiology"
                property1CovidAlignSelf="stretch"
                categoryIconWidth="218px"
                covid19Width="211px"
              />
              <Property1Covid
                category="/category16.svg"
                covid19="Lungs Specialist"
                property1CovidAlignSelf="stretch"
                categoryIconWidth="218px"
                covid19Width="211px"
              />
              <Property1Covid
                category="/category17.svg"
                covid19="Psychiatry"
                property1CovidAlignSelf="stretch"
                categoryIconWidth="218px"
                covid19Width="211px"
              />
            </div>
            <div className="row-11">
              <Property1Variant11
                image27="/image-251@2x.png"
                dermatology="Obstetrics and Gynecology"
                categoryMixBlendMode="unset"
                frameDivHeight="60%"
                frameDivWidth="60%"
                frameDivTop="20%"
                frameDivRight="20%"
                frameDivBottom="20%"
                frameDivLeft="20%"
                frameDivMixBlendMode="unset"
                image27IconWidth="60px"
                image27IconHeight="60px"
                rectangleDivBackgroundColor="2px solid #8575d2"
                rectangleDivWidth="60px"
                rectangleDivHeight="60px"
              />
              <Property1Covid
                category="/category18.svg"
                covid19="Covid-19 "
                property1CovidAlignSelf="stretch"
                categoryIconWidth="218px"
                covid19Width="211px"
              />
              <Property1Variant11
                image27="/image-271@2x.png"
                dermatology="Dermatology"
                categoryMixBlendMode="unset"
                frameDivHeight="60%"
                frameDivWidth="60%"
                frameDivTop="20%"
                frameDivRight="20%"
                frameDivBottom="20%"
                frameDivLeft="20%"
                frameDivMixBlendMode="unset"
                image27IconWidth="60px"
                image27IconHeight="60px"
                rectangleDivBackgroundColor="2px solid #8575d2"
                rectangleDivWidth="60px"
                rectangleDivHeight="60px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentFilter1;
