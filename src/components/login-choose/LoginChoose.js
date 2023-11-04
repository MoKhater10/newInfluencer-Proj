import React, { Fragment } from "react";
import "./login-choose.css";
import { Link } from "react-router-dom";

const LoginChoose = () => {
  var subdomain = window.location.origin;
  const DOMAINS = {
    AZZRK: "https://influencer.azzrk.com",
    ATHAR: "https://influencer.atherr.com",
    MARDOD: "https://influencer.marrdoud.com",
    WARAQA: "https://influencer.warrqa.com",
    DARB: "https://influencer.darbplatform.com",
    SMOUE: "https://influencer.sumoue.com",
  };

  var btnDarb;
  var labelSmoue;
  switch (subdomain) {
    case DOMAINS.AZZRK:
      btnDarb = false;
      labelSmoue = false;
      break;

    case DOMAINS.MARDOD:
      btnDarb = false;
      labelSmoue = false;
      break;

    case DOMAINS.SMOUE:
      btnDarb = false;
      labelSmoue = true;
      break;

    case DOMAINS.DARB:
      btnDarb = true;
      labelSmoue = false;
      break;

    case DOMAINS.WARAQA:
      btnDarb = false;
      labelSmoue = false;
      break;

    case DOMAINS.ATHAR:
      btnDarb = false;
      labelSmoue = false;
      break;

    default:
      btnDarb = false;
      labelSmoue = false;
      break;
  }

  return (
    <Fragment>
      <div className="login-choose-comp">
        <div className="login-choose-title">
          <h3
            style={
              labelSmoue
                ? {
                    color: "white",
                  }
                : {}
            }
          >
            سجل بإسم
          </h3>
          <h6
            style={
              labelSmoue
                ? {
                    color: "white",
                  }
                : {}
            }
          >
            اختر ما اذا كنت تريد التسجيل كعلانة تجارية أو اذا كنت مؤثرا تريد ان
            تكون جزء من نجاحنا
          </h6>
        </div>
        <div className="login-choice">
          <Link to="/create-account/influencer">
            <div
              className="influencer"
              style={
                btnDarb
                  ? {
                      background: `linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)`,
                      color: "black",
                      border: "none",
                    }
                  : labelSmoue
                  ? {
                      background: `linear-gradient(135deg, rgb(162, 32, 32,.9) 0%, rgb(152, 31, 33,.9) 12%, rgb(148, 30, 36,.9) 23%, rgb(139, 29, 37,.9) 32%, rgb(130, 28, 39,.9) 39%, rgb(125, 28, 41,.9) 45%, rgb(115, 28, 42,.9) 49%, rgb(105, 27, 45,.9) 52%, rgb(92, 25, 45,.9) 56%, rgb(82, 25, 48,.9) 60%, rgb(67, 24, 49,.9) 68%, rgb(46, 22, 49,.9) 81%, rgb(3, 23, 53,.9) 100%)`,
                      color: "white",
                      border: "none",
                    }
                  : {}
              }
              onMouseEnter={() => {
                if (btnDarb) {
                  document.querySelector(".influencer").style.background =
                    "white";
                  document.querySelector(".influencer").style.color = "black";
                  document.querySelector(".influencer").style.border =
                    "1px solid black";
                }
                if (labelSmoue) {
                  document.querySelector(".influencer").style.background =
                    "rgba(255,255,255,.6)";
                  document.querySelector(".influencer").style.color = "black";
                }
              }}
              onMouseLeave={() => {
                if (btnDarb) {
                  document.querySelector(
                    ".influencer"
                  ).style.background = `linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)`;
                  document.querySelector(".influencer").style.color = "white";
                  document.querySelector(".influencer").style.border = "none";
                }
                if (labelSmoue) {
                  document.querySelector(".influencer").style.background =
                    "linear-gradient(135deg, rgb(162, 32, 32,.9) 0%, rgb(152, 31, 33,.9) 12%, rgb(148, 30, 36,.9) 23%, rgb(139, 29, 37,.9) 32%, rgb(130, 28, 39,.9) 39%, rgb(125, 28, 41,.9) 45%, rgb(115, 28, 42,.9) 49%, rgb(105, 27, 45,.9) 52%, rgb(92, 25, 45,.9) 56%, rgb(82, 25, 48,.9) 60%, rgb(67, 24, 49,.9) 68%, rgb(46, 22, 49,.9) 81%, rgb(3, 23, 53,.9) 100%)";
                  document.querySelector(".influencer").style.color = "white";
                }
              }}
            >
              مؤثر
            </div>
          </Link>
          <Link to="/create-account/brand">
            <div
              className="trade-mark"
              style={
                btnDarb
                  ? {
                      background: `linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)`,
                      color: "black",
                      border: "none",
                    }
                  : labelSmoue
                  ? {
                      background: `linear-gradient(135deg, rgb(162, 32, 32,.9) 0%, rgb(152, 31, 33,.9) 12%, rgb(148, 30, 36,.9) 23%, rgb(139, 29, 37,.9) 32%, rgb(130, 28, 39,.9) 39%, rgb(125, 28, 41,.9) 45%, rgb(115, 28, 42,.9) 49%, rgb(105, 27, 45,.9) 52%, rgb(92, 25, 45,.9) 56%, rgb(82, 25, 48,.9) 60%, rgb(67, 24, 49,.9) 68%, rgb(46, 22, 49,.9) 81%, rgb(3, 23, 53,.9) 100%)`,
                      color: "white",
                      border: "none",
                    }
                  : {}
              }
              onMouseEnter={() => {
                if (btnDarb) {
                  document.querySelector(".trade-mark").style.background =
                    "white";
                  document.querySelector(".trade-mark").style.color = "black";
                  document.querySelector(".trade-mark").style.border =
                    "1px solid black";
                }
                if (labelSmoue) {
                  document.querySelector(".trade-mark").style.background =
                    "rgba(255,255,255,.6)";
                  document.querySelector(".trade-mark").style.color = "black";
                }
              }}
              onMouseLeave={() => {
                if (btnDarb) {
                  document.querySelector(
                    ".trade-mark"
                  ).style.background = `linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)`;
                  document.querySelector(".trade-mark").style.color = "white";
                  document.querySelector(".trade-mark").style.border = "none";
                }
                if (labelSmoue) {
                  document.querySelector(".trade-mark").style.background =
                    "linear-gradient(135deg, rgb(162, 32, 32,.9) 0%, rgb(152, 31, 33,.9) 12%, rgb(148, 30, 36,.9) 23%, rgb(139, 29, 37,.9) 32%, rgb(130, 28, 39,.9) 39%, rgb(125, 28, 41,.9) 45%, rgb(115, 28, 42,.9) 49%, rgb(105, 27, 45,.9) 52%, rgb(92, 25, 45,.9) 56%, rgb(82, 25, 48,.9) 60%, rgb(67, 24, 49,.9) 68%, rgb(46, 22, 49,.9) 81%, rgb(3, 23, 53,.9) 100%)";
                  document.querySelector(".trade-mark").style.color = "white";
                }
              }}
            >
              علامة تجارية
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginChoose;
