import { useMemo } from "react";
import "./ProfileList.css";

const ProfileList = ({
  body,
  body1,
  showBody,
  profileListHeight,
  bodyLetterSpacing,
}) => {
  const profileListStyle = useMemo(() => {
    return {
      height: profileListHeight,
    };
  }, [profileListHeight]);

  const bodyStyle = useMemo(() => {
    return {
      letterSpacing: bodyLetterSpacing,
    };
  }, [bodyLetterSpacing]);

  return (
    <div className="profile-list" style={profileListStyle}>
      <div className="body-parent">
        {showBody && <b className="body">{body}</b>}
        <div className="body1" style={bodyStyle}>
          {body1}
        </div>
      </div>
    </div>
  );
};

export default ProfileList;
