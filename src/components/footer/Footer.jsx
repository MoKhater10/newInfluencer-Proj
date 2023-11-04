import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./footer.css";
import homeIcon from "./../../assets/images/footer-images/home.png";
import peopleIcon from "./../../assets/images/footer-images/people.png";
import influencerIcon from "./../../assets/images/footer-images/influencerIcon.png";
import azzrkFooterBack from "../../assets/images/azzrk-footer-back.webp";
import mardodFooterBack from "../../assets/images/mardod-footer-back.webp";
import darbFooterBack from "../../assets/images/darb-footer-back.webp";
import warqaFooterBack from "../../assets/images/warqa-footer-back.webp";
import atharFooterBack from "../../assets/images/athar-footer-back.webp";
import azzrkLogo from "../../assets/images/logoedited.webp";
import mardodLogo from "../../assets/images/mardod-logo-footer.webp";
import atharLogo from "../../assets/images/athar-logo-footer.webp";
import darbLogo from "../../assets/images/darb-logo-footer.webp";
import warqaLogo from "../../assets/images/warqa-logo-footer.webp";

const Footer = () => {
  const [toggleSetting, setToggleSetting] = useState(false);
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

  var subdomain = window.location.origin;
  const DOMAINS = {
    AZZRK: "https://influencer.azzrk.com",
    ATHAR: "https://influencer.atherr.com",
    MARDOD: "https://influencer.marrdoud.com",
    WARAQA: "https://influencer.warrqa.com",
    DARB: "https://influencer.darbplatform.com",
    SMOUE: "https://influencer.sumoue.com",
  };

  var footerBackground;
  var logo;

  switch (subdomain) {
    case DOMAINS.AZZRK:
      footerBackground = azzrkFooterBack;
      logo = azzrkLogo;
      break;

    case DOMAINS.MARDOD:
      footerBackground = mardodFooterBack;
      logo = mardodLogo;
      break;

    case DOMAINS.DARB:
      footerBackground = darbFooterBack;
      logo = darbLogo;
      break;

    case DOMAINS.WARAQA:
      footerBackground = warqaFooterBack;
      logo = warqaLogo;
      break;

    case DOMAINS.ATHAR:
      footerBackground = atharFooterBack;
      logo = atharLogo;
      break;

    default:
      footerBackground = azzrkFooterBack;
      logo = azzrkLogo;
  }

  return (
    <footer
      className="footer"
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <div className="container">
        <div className="footer__inner">
          <div className="col-one footer-logo">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="footer-info">
            <div className="col-two">
              <h1>وصول سريع</h1>
              <ul className="footer-list">
                <li>
                  <NavLink
                    to="/"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <div>
                      <img src={homeIcon} alt="" />
                    </div>
                    <p>الرئيسية</p>
                  </NavLink>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      if (location.pathname === "/") {
                        const sectionElement =
                          document.querySelector("#who-us");
                        if (sectionElement) {
                          sectionElement.scrollIntoView({ behavior: "smooth" });
                        }
                      } else {
                        scrollToPercent(42);
                      }
                    }}
                  >
                    <div>
                      <img src={peopleIcon} alt="" />
                    </div>
                    <p>من نحن</p>
                  </Link>
                </li>
                <li>
                  <NavLink
                    to={brand ? "/all-influencers" : "login"}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <div>
                      <img src={influencerIcon} alt="linkedin logo" />
                    </div>
                    <p>المؤثرين</p>
                  </NavLink>
                </li>
                {/*<li>
                  <Link to="/">
                    <div>
                      <img src={messageIcon} alt="linkedin logo" />
                    </div>
                    <p>تواصل معنا</p>
                  </Link>
                </li>*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
