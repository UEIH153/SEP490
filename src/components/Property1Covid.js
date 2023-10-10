import { useMemo } from "react";
import "./Property1Covid.css";

const Property1Covid = ({
  category,
  covid19,
  property1CovidAlignSelf,
  categoryIconWidth,
  covid19Width,
}) => {
  const property1CovidStyle = useMemo(() => {
    return {
      alignSelf: property1CovidAlignSelf,
    };
  }, [property1CovidAlignSelf]);

  const categoryIconStyle = useMemo(() => {
    return {
      width: categoryIconWidth,
    };
  }, [categoryIconWidth]);

  const covid19Style = useMemo(() => {
    return {
      width: covid19Width,
    };
  }, [covid19Width]);

  return (
    <div className="property-1covid" style={property1CovidStyle}>
      <img
        className="category-icon"
        alt=""
        src={category}
        style={categoryIconStyle}
      />
      <div className="covid-19" style={covid19Style}>
        {covid19}
      </div>
    </div>
  );
};

export default Property1Covid;
