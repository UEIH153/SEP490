import { useMemo } from "react";
import "./PremiumGeneralHealthCheckPacka.css";

const PremiumGeneralHealthCheckPacka = ({ mainContentPadding }) => {
  const containerStyle = useMemo(() => {
    return {
      padding: mainContentPadding,
    };
  }, [mainContentPadding]);

  return (
    <div className="container7" style={containerStyle}>
      <div className="main-content6">
        <b className="h2-section-title-1-sec-6">
          Premium general health check package
        </b>
      </div>
      <div className="container-inner">
        <img className="rectangle-icon" alt="" src="/rectangle-247@2x.png" />
      </div>
      <div className="main-content7">
        <div className="h2-section-title-1-sec-container">
          <p className="the-premium-comprehensive">
            The Premium Comprehensive Health Checkup Package offers a
            comprehensive examination and screening for various cancer
            conditions such as stomach and colon cancer by experienced doctors
            and specialists at Vinmec, aiming to develop a healthcare plan
            accordingly.
          </p>
          <ul className="general-information-about-the">
            <li className="general-information-about">
              General Information about the Premium Comprehensive Health Checkup
              Package Package Prices:
            </li>
          </ul>
          <ul className="general-information-about-the">
            <li className="general-information-about">Level I Hospitals:</li>
            <li className="general-information-about">
              Hospital abc: 26,000,000 VND
            </li>
            <li className="general-information-about">Level II Hospitals:</li>
            <li className="general-information-about">
              Hospital dcf: 22,000,000 VND
            </li>
            <li className="general-information-about">
              BNG Branch: 18,000,000 VND
            </li>
            <li className="general-information-about">
              HNM Branch: 17,000,000 VND
            </li>
            <li className="general-information-about">{`KLS Branch: 16,000,000 VND Duration: 1 day Eligibility: For customers aged >40 years, meeting basic health check requirements (according to Circular 14 of the Ministry of Health) Promotional Benefits and Gifts: After the General Health Checkup, customers will receive a free voucher for one specialized medical examination appointment within 30 days from the date of the General Health Checkup (non-transferable). Usage Period: According to Vinmec's working hours: From 8:00 AM to 5:00 PM from Monday to Friday and Saturday morning (from 8:00 AM to 12:00 PM). Please contact the Vinmec hotline for detailed information. Note: In special cases where the customer is pregnant or suspects pregnancy, X-ray services are not applicable when using this package.`}</li>
          </ul>
          <ul className="general-information-about-the">
            <li className="general-information-about">
              Detailed Information about the Premium Comprehensive Health
              Checkup Package 2021 The Premium Comprehensive Health Checkup
              Package offers a comprehensive solution for thorough examinations
              and screenings for certain cancer conditions such as stomach and
              colon cancer by highly skilled doctors and experts at Vinmec. This
              helps in creating a health care plan.
            </li>
          </ul>
          <p className="the-premium-comprehensive">
            The package includes various health checkup services for customers,
            starting from clinical and subclinical examinations to detect risk
            factors for diseases, allowing for adjustments and lifestyle changes
            to improve health and prevent illnesses. Customers can be identified
            with health conditions related to lifestyle habits, such as
            cardiovascular diseases, metabolic disorders (high cholesterol,
            diabetes, high uric acid), liver and gallbladder diseases, lung
            conditions, thyroid problems, osteoporosis, various vitamins,
            electrolyte balance, iron metabolism, and assessment of viral
            infections such as hepatitis A, B, and C.
          </p>
          <p className="the-premium-comprehensive">
            The package also includes specific blood tests for cancer markers to
            screen for liver cancer and prostate cancer in men. Female customers
            will undergo gynecological examinations by specialists and
            screenings for cervical cancer, breast cancer, and ovarian cancer.
          </p>
          <p className="the-premium-comprehensive">
            Customers will receive specialized gastrointestinal examinations,
            including endoscopy of the stomach and colon, to diagnose stomach
            and colon diseases and to screen for early detection of cancer in
            these areas.
          </p>
          <p className="this-health-checkup">
            This health checkup package does not cover health classification as
            per the Ministry of Health's regulations, medical assessments,
            disability certificate issuance, occupational health examinations,
            and work permit medical examinations.
          </p>
        </div>
      </div>
      <div className="row3" />
    </div>
  );
};

export default PremiumGeneralHealthCheckPacka;
