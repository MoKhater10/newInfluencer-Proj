import React, { Fragment, useState, useEffect } from "react";
import "./login-form.css";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth-services.js";
import LoadingButton from "../loading-button/LoadingButton";

var subdomain = window.location.origin;
const DOMAINS = {
  AZZRK: "https://influencer.azzrk.com",
  ATHAR: "https://influencer.atherr.com",
  MARDOD: "https://influencer.marrdoud.com",
  WARAQA: "https://influencer.warrqa.com",
  DARB: "https://influencer.darbplatform.com",
  SMOUE: "https://influencer.sumoue.com",
};

var createColor;
var btnDarb;
var labelSmoue;
switch (subdomain) {
  case DOMAINS.AZZRK:
    createColor = "#022444";
    btnDarb = false;
    labelSmoue = false;
    break;

  case DOMAINS.MARDOD:
    createColor = "#16EDB1";
    btnDarb = false;
    labelSmoue = false;
    break;

  case DOMAINS.SMOUE:
    createColor = "white";
    btnDarb = false;
    labelSmoue = true;
    break;

  case DOMAINS.DARB:
    createColor = "#0C2241";
    btnDarb = true;
    labelSmoue = false;
    break;

  case DOMAINS.WARAQA:
    createColor = "#FF6A00";
    btnDarb = false;
    labelSmoue = false;
    break;

  case DOMAINS.ATHAR:
    createColor = "#D2A030";
    btnDarb = false;
    labelSmoue = false;
    break;

  default:
    createColor = "#022444";
    btnDarb = false;
    labelSmoue = false;
    break;
}

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userToogelhint, setUserToogelhint] = useState(false);
  const [checkUser, setcheckUser] = useState("");
  const [focusUser, setfocusUser] = useState(false);
  const [passToogelhint, setpassToogelhint] = useState(false);
  const [checkpass, setcheckpass] = useState("");
  const [focuspass, setfocuspass] = useState(false);
  const [toogelaccount, settoggelaccount] = useState(false);
  const [toogelPass, settoggelPass] = useState(false);
  const [toogelActive, settoggelActive] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const navigate = useNavigate();

  const handelpass = () => {
    setpassToogelhint(false);
    setfocuspass(true);
  };

  useEffect(() => {
    if (username) {
      setUserToogelhint(false);
    }
  }, [username]);
  useEffect(() => {
    setcheckpass(password.length >= 1 ? true : false);
  }, [password]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username) {
      setUserToogelhint(true);
    }
    if (!password) {
      setpassToogelhint(true);
      setfocuspass(false);
    }
    if (username && password) {
      try {
        setLoadingLogin(true);
        await authService.brandLogin(username, password).then(
          () => {
            navigate(`/`);
          },
          (error) => {
            setLoadingLogin(false);
            if (
              error.response.data.detail === "User account does not exist." ||
              error.response.data.code === "no_user_account"
            ) {
              settoggelaccount(true);
            }
            if (error.response.data.detail === "Incorrect password.") {
              settoggelPass(true);
            }
            if (error.response.data.code === "no_active_account") {
              settoggelActive(true);
            }
          }
        );
      } catch (err) {
      }
    }
  };
  return (
    <Fragment>
      <div className="login-form-comp">
        <div className="login-form-title">
          <h3
            style={
              labelSmoue
                ? {
                    display: "none",
                  }
                : {}
            }
          >
            مرحبا بك من جديد
          </h3>
          <h6
            style={
              labelSmoue
                ? {
                    display: "none",
                  }
                : {}
            }
          >
            احصل علي مؤثر ليساعدك في التسويق لعلامتك التجاريه من خلال موقعنا
          </h6>
        </div>
        <div className="login-form">
          {toogelaccount && (
            <div className="alert alert-danger hintMsg" role="alert">
              اسم المستخدم غير موجود
            </div>
          )}
          {toogelPass && (
            <div className="alert alert-danger hintMsg" role="alert">
              كلمة المرور غير صحيحة
            </div>
          )}
          {toogelActive && (
            <div className="alert alert-danger hintMsg" role="alert">
              لم يتم تنشيط الحساب بعد, جارى التنشيط
            </div>
          )}
          <form onSubmit={handleLogin}>
            <div className="form-sec">
              <label
                style={
                  labelSmoue
                    ? {
                        color: "white",
                      }
                    : {}
                }
              >
                اسم المستخدم
              </label>
              <input
                style={
                  labelSmoue
                    ? {
                        opacity: ".6",
                        borderRadius: "12px",
                        padding: "1rem",
                      }
                    : {}
                }
                type="text"
                placeholder="قم بإدخال اسم المستخدم الخاص بك"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {focusUser && !checkUser && (
                <span className=" spanhint">مطلوب</span>
              )}
              {userToogelhint && <span className=" spanhint">مطلوب</span>}
            </div>
            <div className="form-sec">
              <label
                style={
                  labelSmoue
                    ? {
                        color: "white",
                      }
                    : {}
                }
              >
                كلمة المرور
              </label>
              <input
                style={
                  labelSmoue
                    ? {
                        opacity: ".6",
                        borderRadius: "12px",
                        padding: "1rem",
                      }
                    : {}
                }
                type="password"
                placeholder="قم بإدخال كلمة المرور"
                value={password}
                onFocus={handelpass}
                onChange={(e) => setPassword(e.target.value)}
              />
              {focuspass && !checkpass && (
                <span className=" spanhint">مطلوب</span>
              )}
              {passToogelhint && <span className=" spanhint">مطلوب</span>}
            </div>

            <button
              type="submit"
              style={
                btnDarb
                  ? {
                      background: `linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)`,
                      color: "white",
                      border: "none",
                    }
                  : labelSmoue
                  ? {
                      background: `linear-gradient(to right,#DB3737, transparent 65%), linear-gradient(to left, #002762, transparent 215%)`,
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      padding: ".8rem",
                    }
                  : {}
              }
            >
              {loadingLogin ? <LoadingButton /> : "تسجيل الدخول"}
            </button>
          </form>
          <div className="have-no-account">
            <span
              className="no-account"
              style={
                labelSmoue
                  ? {
                      color: "#EDEDED",
                    }
                  : {}
              }
            >
              {" "}
              ليس لديك حساب ؟
            </span>
            <Link to="/login/create-account">
              <span className="create-account" style={{ color: createColor }}>
                {" "}
                انشاء حساب
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
