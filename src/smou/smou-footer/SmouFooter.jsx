import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./smou-footer.css";
import homeIcon from "./../smou-footer-images/home.webp";
import peopleIcon from "./../smou-footer-images/people.webp";
import influencerIcon from "./../smou-footer-images/influencerIcon.webp";
import smouLogo from "../smou-imgs/smou-logo.webp";
import smouWod from "../smou-imgs/smou-word.webp";

const SmouFooter = () => {
  const [toggleSetting, setToggleSetting] = useState(false);
  const brand = JSON.parse(localStorage.getItem("brand"));
  const location = useLocation();

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

  return (
    <footer className="smou-footer">
      <div className="container">
        <div className="smou-footer__inner">
          <div className="smou-footer-info">
            <div className="smou-col-two">
              <h1>وصول سريع</h1>
              <ul className="smou-footer-list">
                <li>
                  <Link to="/">
                    <div>
                      <img src={homeIcon} alt="" />
                    </div>
                    <p>الرئيسية</p>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      if (location.pathname === "/") {
                        const sectionElement =
                          document.querySelector("#who-us-smou");
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
                  <Link
                    to={brand ? "/all-influencers" : "/login"}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <div>
                      <img src={influencerIcon} alt="linkedin logo" />
                    </div>
                    <p>المؤثرين</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="smou-col-one smou-footer-logo">
            <Link to="/">
              <img src={smouLogo} alt="" />
              <img src={smouWod} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SmouFooter;
