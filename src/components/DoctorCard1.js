import SizeLargeStateDefaultCho from "./SizeLargeStateDefaultCho";
import CardForm from "./CardForm";
import Property1Default2 from "./Property1Default2";
import ContainerCardFormFilter1 from "./ContainerCardFormFilter1";
import "./DoctorCard1.css";

const DoctorCard1 = () => {
  return (
    <div className="content12">
      <div className="container10">
        <div className="main-content9">
          <b className="h2-section-title-1-sec-13">Doctor</b>
          <div className="paragraph-sec-9">
            Experience high quality medical services that meet international
            standards at SEP490 Hospital
          </div>
          <div className="main-content-child1" />
          <div className="frame-parent14">
            <div className="right-icon-parent">
              <div className="right-icon">
                <div className="base1" />
                <img className="search-icon" alt="" src="/search.svg" />
                <div className="text4">Name</div>
              </div>
              <SizeLargeStateDefaultCho
                text="-- Department"
                down="/down1.svg"
                sizeLargeStateDefaultChoHeight="28px"
                sizeLargeStateDefaultChoPosition="relative"
                textFontFamily="Inter"
              />
              <SizeLargeStateDefaultCho
                text="-- Level"
                down="/down1.svg"
                sizeLargeStateDefaultChoHeight="28px"
                sizeLargeStateDefaultChoPosition="relative"
                textFontFamily="Inter"
              />
            </div>
            <div className="create-button">
              <div className="apply">Apply</div>
            </div>
          </div>
        </div>
        <CardForm
          imageDimensions="/image-92@2x.png"
          doctorInfo="Dr. Ivan Good"
          carDimensions="/-icon-hat-graduation.svg"
          doctorTitle="PhD,"
          departmentName=" "
        />
        <CardForm
          imageDimensions="/image-93@2x.png"
          doctorInfo="Dr. Arturo Sellers"
          carDimensions="/-icon-hat-graduation.svg"
          doctorTitle="Level II specialist, Meritorious Doctor"
          departmentName="General Surgery Department,"
        />
        <CardForm
          imageDimensions="/image-94@2x.png"
          doctorInfo="Dr. Elly Rose"
          carDimensions="/-icon-hat-graduation.svg"
          doctorTitle="Level I specialist,"
          departmentName="General Surgery Department,"
        />
        <CardForm
          imageDimensions="/image-95@2x.png"
          doctorInfo="Dr. Nathan Bridge"
          carDimensions="/-icon-hat-graduation1.svg"
          doctorTitle="Level I specialist,"
          departmentName="Preventive Medicine Department,"
        />
        <CardForm
          imageDimensions="/image-96@2x.png"
          doctorInfo="Dr. Lisa Cruso"
          carDimensions="/-icon-hat-graduation1.svg"
          doctorTitle="Level II specialist, Meritorious Doctor,"
          departmentName="Department of Obstetrics and gynaecology,"
        />
        <div className="row5">
          <Property1Default2
            property1DefaultWidth="826px"
            frameDivFlex="unset"
            frameDivJustifyContent="flex-start"
            frameDivGap="8px"
          />
        </div>
      </div>
      <ContainerCardFormFilter1
        imageDimensions="/image-242@2x.png"
        propPadding="var(--padding-117xl) var(--padding-0) var(--padding-xl)"
        propBackgroundColor="#fff"
        propTextAlign="justify"
        propTextAlign1="justify"
      />
    </div>
  );
};

export default DoctorCard1;
