import Property1General from "./Property1General";
import "./DepartmentFilter.css";

const DepartmentFilter = () => {
  return (
    <div className="container5">
      <div className="category-parent">
        <div className="category6">
          <div className="main-content4">
            <b className="h2-section-title-1-sec-5">Our Departments</b>
            <div className="paragraph-sec-3">
              Experience high quality medical services that meet international
              standards at SEP490 Hospital
            </div>
          </div>
          <div className="category-child2" />
          <div className="row-1">
            <div className="dentist">
              <Property1General
                property1GeneralProperty1="/category.svg"
                property1GeneralIconWidth="246.6px"
                property1GeneralIconHeight="230.52px"
                property1GeneralIconPosition="relative"
              />
              <div className="general2">General</div>
            </div>
            <div className="dentist">
              <img className="category-icon5" alt="" src="/category1.svg" />
              <div className="dentist1">Dentist</div>
            </div>
            <div className="dentist">
              <img className="category-icon5" alt="" src="/category2.svg" />
              <div className="dentist1">Lungs Specialist</div>
            </div>
            <div className="psychiatrist">
              <img className="category-icon5" alt="" src="/category3.svg" />
              <div className="psychiatrist1">Psychiatrist</div>
            </div>
            <div className="dentist">
              <img className="category-icon5" alt="" src="/category4.svg" />
              <div className="cardiologist">Covid-19</div>
            </div>
          </div>
          <div className="row-3">
            <div className="dentist">
              <img className="category-icon5" alt="" src="/category5.svg" />
              <div className="cardiologist">Cardiologist</div>
            </div>
            <div className="dentist">
              <img className="category-icon5" alt="" src="/category6.svg" />
              <div className="surgeon1">Surgeon</div>
            </div>
          </div>
        </div>
        <div className="main-content5">
          <div className="paragraph-sec-4">{` `}</div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentFilter;
