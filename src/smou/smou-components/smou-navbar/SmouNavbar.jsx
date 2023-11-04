import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./smou-navbar.css";
import { getApiUrl } from "../../../helpers";
import axios from "axios";
import authHeader from "../../../services/auth-header";
import { BiLogOut } from "react-icons/bi";
import warringIcon from "../../../assets/images/warning-icon.webp";
import smouLogo from "../../smou-imgs/logo.webp";
import azzrkUser from "../../../assets/images/azzrk-user.webp";

const SmouNavbar = () => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [smouNavBg, setSmouNavBg] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const [toggleSetting, setToggleSetting] = useState(false);
  const [dropDownToogle, setDropDownToogle] = useState(false);
  const [confirmAdd, setConfirmAdd] = useState(false);
  const navigate = useNavigate();

  function changeSmouNavBg() {
    window.scrollY >= 100 ? setSmouNavBg(true) : setSmouNavBg(false);
  }
  window.addEventListener("scroll", changeSmouNavBg);

  function handleShowNavbar() {
    setShowNavBar(!showNavBar);
  }

  const scrollToPercent = (percent) => {
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    const scrollToPixel =
      (percent / 100) * (document.documentElement.scrollHeight - windowHeight);

    window.scrollTo({ top: scrollToPixel, behavior: "smooth" });
  };

  const brand = JSON.parse(localStorage.getItem("brand"));

  useEffect(() => {
    setToggleSetting(brand ? true : false);
  }, [brand]);
  const logoutFunc = () => {
    localStorage.removeItem("brand");
    navigate("/login");
  };

  const userInfoUrl = getApiUrl("api/brands/me/profile/");
  const [userInfo, setUserInfo] = useState("");
const getUserData = () => {
  axios.get(userInfoUrl, { headers: authHeader() })
    .then((response) => {
      setUserInfo(response.data);
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        // Handle 401 Unauthorized error
        localStorage.removeItem("brand");
        navigate("/login");
      }
    });
};


  useEffect(() => {
    if (brand) {
      getUserData();
    }
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setNavBackground(true);
    }
  }, []);

  var subdomain = window.location.origin;
  const DOMAINS = {
    AZZRK: "https://influencer.azzrk.com",
    ATHAR: "https://influencer.atherr.com",
    MARDOD: "https://influencer.marrdoud.com",
    WARAQA: "https://influencer.warrqa.com",
    DARB: "https://influencer.darbplatform.com",
    SMOUE: "https://influencer.sumoue.com",
  };

  var user;
  var btnDarb;
  var labelSmoue;
  switch (subdomain) {
    case DOMAINS.SMOUE:
      user = azzrkUser;
      labelSmoue = true;
      break;

    default:
      user = azzrkUser;
      labelSmoue = false;
  }

  return (
    <nav
      className={`smou-navbar ${smouNavBg ? "sticky" : "sticky"} 
    `}
    >
      <div className="container">
        <div
          className="smou-logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={smouLogo} alt="" />
        </div>

        <div className="smou-menu-icon" onClick={handleShowNavbar}>
          {showNavBar ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <div className={`smou-nan-links-parent  ${showNavBar && "active"}`}>
          <ul className="smou-nav-links">
            <li className="smou-nav-link">
              <NavLink
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                الرئيسية
              </NavLink>
            </li>
            <li className="smou-nav-link" onClick={() => scrollToPercent(50)}>
              <Link to="/">من نحن</Link>
            </li>
            <li className="smou-nav-link">
              <NavLink
                to={brand ? "/all-influencers" : "login"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                المؤثرين
              </NavLink>
            </li>

            {toggleSetting ? (
              <li className="setting-li">
                <NavLink
                  to="/profile-setting/profile-info"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  إعدادت الحساب
                </NavLink>
              </li>
            ) : (
              ""
            )}
          </ul>
          {toggleSetting ? (
            <div
              className="profile-user"
              onClick={() => setDropDownToogle(!dropDownToogle)}
            >
              {dropDownToogle && (
                <div className="drop-setting">
                  <NavLink to="/profile-setting/profile-info">
                    <div className="user-info">
                      <img src={user} alt="" className="profile-img-drop" />
                    </div>
                    <h6>{userInfo.name}</h6>
                  </NavLink>
                  <hr className="container" />
                  <div
                    onClick={() => setConfirmAdd(true)}
                    className="logout-div"
                  >
                    <BiLogOut className="logout" />
                    <span>تسجيل الخروج</span>
                  </div>
                </div>
              )}
              {confirmAdd && (
                <div className="overlay">
                  <div className="popup popup-logout">
                    <div className="warning-icon">
                      <img src={warringIcon} alt="icon" />
                    </div>

                    <h2>هل انت متأكد</h2>
                    <h5>من تسجيل الخروج</h5>

                    <div className="actions-btn">
                      <button
                        style={{
                          background: `linear-gradient(to right, rgb(219, 55, 55), rgb(0, 39, 98))`,
                          color: "white",
                          borderRadius: "10px",
                          border: "none",
                        }}
                        className="btn btn-yes"
                        onClick={() => {
                          logoutFunc();
                        }}
                      >
                        نعم
                      </button>
                      <button
                        style={{
                          borderRadius: "10px",
                          border: "1px solid #022444",
                        }}
                        className="btn btn-no"
                        onClick={() => setConfirmAdd(false)}
                      >
                        لا
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <img src={user} alt="" className="profile-img" />
            </div>
          ) : (
            <button
              className="btn smoue-btn-contact-us"
              onClick={() => navigate("/login")}
              style={
                btnDarb
                  ? {
                      background: `linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)`,
                      color: "black",
                    }
                  : {}
              }
            >
              تسجيل الدخول
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
export default SmouNavbar;
