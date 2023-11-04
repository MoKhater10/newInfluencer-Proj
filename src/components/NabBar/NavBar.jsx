import { useState, useEffect } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./nav-bar.css";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import warringIcon from "../../assets/images/warning-icon.webp";
import { getApiUrl } from "../../helpers";
import authHeader from "../../services/auth-header";
import axios from "axios";
import azzrkLogo from "../../assets/images/azzrak-logo.webp";
import mardodLogo from "../../assets/images/mardod-logo-footer.webp";
import atharLogo from "../../assets/images/athar-logo-footer.webp";
import darbLogo from "../../assets/images/darb-logo-footer.webp";
import warqaLogo from "../../assets/images/warqa-logo-footer.webp";
import azzrkUser from "../../assets/images/azzrk-user.webp";
import mardodUser from "../../assets/images/mardod-user.webp";
import atharUser from "../../assets/images/athar-user.webp";
import darbUser from "../../assets/images/darb-user.webp";
import warqaUser from "../../assets/images/warqa-user.webp";

function NavBar() {
  const [navBg, setNavBg] = useState();
  const [showNavBar, setShowNavBar] = useState(false);
  const [toggleSetting, setToggleSetting] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const [dropDownToogle, setDropDownToogle] = useState(false);
  const [confirmAdd, setConfirmAdd] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const brand = JSON.parse(localStorage.getItem("brand"));
  useEffect(() => {
    setToggleSetting(brand ? true : false);
  }, [brand]);

  const scrollToPercent = (percent) => {
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    const scrollToPixel =
      (percent / 100) * (document.documentElement.scrollHeight - windowHeight);

    window.scrollTo({ top: scrollToPixel, behavior: "smooth" });
  };

  function handleShowNavbar() {
    setShowNavBar(!showNavBar);
  }

  function changeNavBg() {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  }
  window.addEventListener("scroll", changeNavBg);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setNavBackground(true);
    }
  }, []);

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
        // Handle 401 error here, such as redirecting the user to the login page
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

  var subdomain = window.location.origin;
  const DOMAINS = {
    AZZRK: "https://influencer.azzrk.com",
    ATHAR: "https://influencer.atherr.com",
    MARDOD: "https://influencer.marrdoud.com",
    WARAQA: "https://influencer.warrqa.com",
    DARB: "https://influencer.darbplatform.com",
    SMOUE: "https://influencer.sumoue.com",
  };

  var logo;
  var user;
  var btnDarb;
  var logoHeight;
  switch (subdomain) {
    case DOMAINS.AZZRK:
      logo = azzrkLogo;
      user = azzrkUser;
      btnDarb = false;
      logoHeight = true;
      break;

    case DOMAINS.MARDOD:
      logo = mardodLogo;
      user = mardodUser;
      btnDarb = false;
      logoHeight = false;
      break;

    case DOMAINS.DARB:
      logo = darbLogo;
      user = darbUser;
      btnDarb = true;
      logoHeight = false;
      break;

    case DOMAINS.WARAQA:
      logo = warqaLogo;
      user = warqaUser;
      btnDarb = false;
      logoHeight = false;
      break;

    case DOMAINS.ATHAR:
      logo = atharLogo;
      user = atharUser;
      btnDarb = false;
      logoHeight = false;
      break;

    default:
      logo = azzrkLogo;
      user = azzrkUser;
      btnDarb = false;
      logoHeight = true;
  }

  return (
    <nav
      className={`main-navbar ${
        navBg ? `sticky  ${btnDarb ? `darb-color-bg` : `color-bg`}` : ""
      } ${
        navBackground
          ? "navBack"
          : `no-navBack ${btnDarb ? `darb-navBack` : ``}`
      }`}
    >
      <div className="container">
        <div
          className={
            logoHeight
              ? "nav-logo nav-logo-azzrk"
              : "nav-logo nav-logo-websites"
          }
        >
          <img
            src={logo}
            alt="Azzrk logo"
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavBar ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div className={`nav-btn-parent ${showNavBar && "active"}`}>
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                الرئيسية
              </NavLink>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  setShowNavBar(false);

                  if (location.pathname === "/") {
                    const sectionElement = document.querySelector("#who-us");
                    if (sectionElement) {
                      sectionElement.scrollIntoView({ behavior: "smooth" });
                    }
                  } else {
                    scrollToPercent(42);
                  }
                }}
              >
                من نحن
              </Link>
            </li>
            <li>
              <NavLink
                to={brand ? "/all-influencers" : "login"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                المؤثرين
              </NavLink>
            </li>
            {/*<li>
              <a
                href="#contact-us"
                alt=""
                onClick={() => {
                  setShowNavBar(false);
                }}
              >
                تواصل معنا
              </a>
              </li>*/}
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
                        style={
                          btnDarb
                            ? {
                                background: `linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)`,
                                border: "none",
                              }
                            : {}
                        }
                        className="btn btn-yes"
                        onClick={() => {
                          logoutFunc();
                        }}
                      >
                        نعم
                      </button>
                      <button
                        style={
                          btnDarb
                            ? {
                                border: "1px solid #11D4D1",
                              }
                            : {}
                        }
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
              className="btn btn-contact-us"
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
}

export default NavBar;
