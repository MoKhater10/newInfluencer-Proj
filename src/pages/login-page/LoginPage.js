import React, { Fragment } from "react";
import "./login-page.css";
import { Outlet } from "react-router";
import azzrkLogo from "../../assets/images/azzrak-logo.webp";
import mardodLogo from "../../assets/images/mardod-logo.webp";
import atharLogo from "../../assets/images/athar-logo.webp";
import darbLogo from "../../assets/images/darb-logo.webp";
import warqaLogo from "../../assets/images/warqa-logo.webp";
import azzrkLoginBack from "../../assets/images/azzrk-login-back.webp";
import mardodLoginBack from "../../assets/images/mardod-login-back.webp";
import darbLoginBack from "../../assets/images/darb-login-back.webp";
import waraqaLoginBack from "../../assets/images/warqa-login-back.webp";
import atharLoginBack from "../../assets/images/athar-login-back.webp";
import { useNavigate } from "react-router-dom";

var subdomain = window.location.origin;
const DOMAINS = {
  AZZRK: "https://influencer.azzrk.com",
  ATHAR: "https://influencer.atherr.com",
  MARDOD: "https://influencer.marrdoud.com",
  WARAQA: "https://influencer.warrqa.com",
  DARB: "https://influencer.darbplatform.com",
  SMOUE: "https://influencer.sumoue.com",
};

var loginBackground;
var backPosition;
var backSize;
var backColor;
var backgroundImage1;
var backgroundImage2;
var divHeight;
var logo;

switch (subdomain) {
  case DOMAINS.AZZRK:
    loginBackground = azzrkLoginBack;
    backPosition = "center";
    backSize = "auto";
    backColor = "#022444";
    backgroundImage1 =
      "linear-gradient(to right, rgba(118, 197, 245, .5) , rgba(188, 230, 255, 1))";
    backgroundImage2 =
      "linear-gradient(to left, rgba(118, 197, 245, .5) , rgba(153, 216, 255, 1))";
    divHeight = "96vh";
    logo = azzrkLogo;
    break;

  case DOMAINS.MARDOD:
    loginBackground = mardodLoginBack;
    backPosition = "auto";
    backSize = "auto";
    backColor = "#16EDB1";
    backgroundImage1 = "";
    backgroundImage2 = "";
    divHeight = "100vh";
    logo = mardodLogo;
    break;

  case DOMAINS.SMOUE:
    backgroundImage1 = "";
    backgroundImage2 = "";
    break;

  case DOMAINS.DARB:
    loginBackground = darbLoginBack;
    backSize = "cover";
    backPosition = "center";
    backColor = "#25c7e2";
    backgroundImage1 = "";
    backgroundImage2 = "";
    divHeight = "100vh";
    logo = darbLogo;

    break;

  case DOMAINS.WARAQA:
    loginBackground = waraqaLoginBack;
    backPosition = "left";
    backSize = "auto";
    backColor = "#FF6A00";
    backgroundImage1 = "";
    backgroundImage2 = "";
    divHeight = "100vh";
    logo = warqaLogo;
    break;

  case DOMAINS.ATHAR:
    loginBackground = atharLoginBack;
    backColor = "#343062";
    backgroundImage1 = "";
    backgroundImage2 = "";
    divHeight = "100vh";
    logo = atharLogo;
    break;

  default:
    loginBackground = azzrkLoginBack;
    backPosition = "center";
    backSize = "auto";
    backColor = "#022444";
    backgroundImage1 =
      "linear-gradient(to right, rgba(118, 197, 245, .5) , rgba(188, 230, 255, 1))";
    backgroundImage2 =
      "linear-gradient(to left, rgba(118, 197, 245, .5) , rgba(153, 216, 255, 1))";
    divHeight = "96vh";
    logo = azzrkLogo;
}

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div
        className="login-page"
        style={{
          backgroundImage: `url(${loginBackground})`,
          backgroundPosition: backPosition,
          backgroundSize: backSize,
          backgroundColor: backColor,
        }}
      >
        <div className="outlet-parent">
          <div className="outlet" style={{ backgroundImage: backgroundImage1 }}>
            <div
              className="outlet-subparent"
              style={{ backgroundImage: backgroundImage2 }}
            >
              <div className="outlet-child" style={{ height: divHeight }}>
                <div className="login-page-logo">
                  <img
                    src={logo}
                    alt=""
                    width=""
                    height=""
                    className="login-azzrak-logo"
                  />
                </div>
                <div className="outlet-outlet">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="login-poster"
          onClick={() => {
            navigate("/");
          }}
        ></div>
      </div>
    </Fragment>
  );
};

export default LoginPage;
