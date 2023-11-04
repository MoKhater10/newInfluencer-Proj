import { NavLink, Outlet } from "react-router-dom";
import NavBar from "../NabBar/NavBar";
import Footer from "../footer/Footer";
import "./profile-setting.css";
import smouInfluencerBg from "../../smou/smou-imgs/smou-influencer-bg.webp";
import SmouNavbar from "../../smou/smou-components/smou-navbar/SmouNavbar";
import SmouFooter from "../../smou/smou-footer/SmouFooter";

var subdomain = window.location.origin;
const DOMAINS = {
  AZZRK: "https://influencer.azzrk.com",
  ATHAR: "https://influencer.atherr.com",
  MARDOD: "https://influencer.marrdoud.com",
  WARAQA: "https://influencer.warrqa.com",
  DARB: "https://influencer.darbplatform.com",
  SMOUE: "https://influencer.sumoue.com",
};

var labelSmoue;
switch (subdomain) {
  case DOMAINS.SMOUE:
    labelSmoue = true;
    break;

  default:
    labelSmoue = false;
    break;
}

function ProfileSetting() {
  return (
    <div
      style={
        labelSmoue
          ? {
              backgroundImage: `url(${smouInfluencerBg})`,
              backgroundSize: "cover",
            }
          : {}
      }
    >
      <div className="profile-settin-page container">
        {labelSmoue ? <SmouNavbar />: <NavBar />}
        <h1 style={labelSmoue ? { color: "#fff" } : {}}>الحساب الشخصي</h1>
        <ul className="components-list">
          <div
            style={
              labelSmoue
                ? {
                    backgroundColor: "rgba(255,255,255,50%)",
                    borderRadius: "10px",
                  }
                : {}
            }
          >
            <li>
              <NavLink to="/profile-setting/profile-info">الملف</NavLink>
            </li>
            <li>
              <NavLink to="/profile-setting/change-password">
                كلمة المرور
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile-setting/logout">تسجيل الخروج</NavLink>
            </li>
          </div>
        </ul>
        <Outlet />
      </div>
      {labelSmoue ? <SmouFooter /> :<Footer />}
    </div>
  );
}

export default ProfileSetting;
