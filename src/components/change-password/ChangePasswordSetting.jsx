import React, { Fragment, useState, useEffect } from "react";
import "./change-password.css";
import authService from "../../services/auth-services";
import validator from "validator";
import Swal from "sweetalert2";
import LoadingButton from "../loading-button/LoadingButton";
import { useNavigate } from "react-router-dom";

const ChangePasswordSetting = () => {
  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmNewPassword, setconfirmNewPassword] = useState("");
  const [passToggelhint, setpassToggelhint] = useState(false);
  const [checklengthPassword, setchecklengthPass] = useState("");
  const [checkuppercase, setcheckUppercase] = useState("");
  const [checkLowercase, setcheckLowercase] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [checkDigit, setcheckDigit] = useState("");
  const [checkSpecialChar, setcheckSpecialChar] = useState("");
  const [isFocusedConfirm, setIsFocusedConfirm] = useState(false);
  const [hintoldPass, sethintoldPass] = useState(false);
  const [checkpass, setcheckpass] = useState(false);
  const [focusoldPAss, setfocusoldPass] = useState(false);
  const [loadingSave, setLoadingSave] = useState(false);
  const [toogelaccount, settoggelaccount] = useState(false);
  const navigate = useNavigate();

  const isValidPassword = (newPassword) => {
    const options = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: false,
    };
    return validator.isStrongPassword(newPassword, options);
  };

  useEffect(() => {
    setchecklengthPass(newPassword.length >= 8 ? true : false);
    setcheckUppercase(/[A-Z]+/.test(newPassword));
    setcheckLowercase(/[a-z]+/.test(newPassword));
    setcheckDigit(/[0-9]+/.test(newPassword));
    setcheckSpecialChar(/[^A-Za-z0-9]+/.test(newPassword));
  }, [newPassword]);

  useEffect(() => {}, [oldPassword, newPassword, confirmNewPassword]);

  useEffect(() => {
    if (newPassword === confirmNewPassword) {
      setIsFocusedConfirm(false);
    } else {
      setIsFocusedConfirm(true);
    }
  }, [confirmNewPassword]);

  useEffect(() => {
    setcheckpass(oldPassword.length > 0 ? false : true);
  }, [oldPassword]);

  const handeloldPass = () => {
    sethintoldPass(false);
    setfocusoldPass(true);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setpassToggelhint(false);
  };

  const handleFocusConfirm = () => {
    setIsFocusedConfirm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //password
    if (!newPassword) {
      setpassToggelhint(true);
      setIsFocused(false);
    }
    if (!oldPassword) {
      sethintoldPass(true);
      setfocusoldPass(false);
    }
    if (
      isValidPassword(newPassword) &&
      newPassword === confirmNewPassword &&
      oldPassword.length > 1
    ) {
      try {
        setLoadingSave(true);
        await authService.userChangePassword(oldPassword, newPassword).then(
          (response) => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "تم تغيير كلمة المرور بنجاح",
              showConfirmButton: false,
              timer: 1500,
            });
            setLoadingSave(false);
            setconfirmNewPassword("");
            setnewPassword("");
            setoldPassword("");
            setfocusoldPass(false);
            setIsFocused(false);
            setpassToggelhint(false);
            settoggelaccount(false);
          },
          (error) => {
            setLoadingSave(false);
            if (
            error.response &&
            error.response.status === 401
          ) {
            // Handle 401 error here
            localStorage.removeItem("brand");
            navigate("/login");
          } 
            if (
              error.response.data.old_password[0] ===
              "Old password is not correct"
            ) {
              settoggelaccount(true);
            }
          }
        );
      } catch (err) {
      }
    }
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

  var btnDarb;
  var labelSmoue;
  switch (subdomain) {
    case DOMAINS.AZZRK:
      btnDarb = false;
      break;

    case DOMAINS.MARDOD:
      btnDarb = false;
      break;

    case DOMAINS.SMOUE:
      labelSmoue = true;
      break;

    case DOMAINS.DARB:
      btnDarb = true;
      break;

    case DOMAINS.WARAQA:
      btnDarb = false;
      break;

    case DOMAINS.ATHAR:
      btnDarb = false;
      break;

    default:
      btnDarb = false;
      break;
  }
  return (
    <Fragment>
      <div className="Change-password-setting">
        <form onSubmit={handleSubmit}>
          {toogelaccount && (
            <div className="alert alert-danger hintMsg" role="alert">
              كلمة المرور الحالية غير صحيحة
            </div>
          )}
          <div>
            <label
              htmlFor="current-password"
              style={labelSmoue ? { color: "#fff" } : {}}
            >
              كلمة السر الحاليه
            </label>
            <input
              type="password"
              name="current-password"
              id="current-password"
              placeholder="كلمة السر الحاليه"
              value={oldPassword}
              onChange={(e) => setoldPassword(e.target.value)}
              onFocus={handeloldPass}
              style={
                labelSmoue ? { backgroundColor: "rgba(255,255,255,50%)" } : {}
              }
            />
            {hintoldPass && <span className="spanhint">مطلوب</span>}
            {focusoldPAss && checkpass && (
              <span className="spanhint">مطلوب</span>
            )}
          </div>

          <div>
            <label
              htmlFor="new-password"
              style={labelSmoue ? { color: "#fff" } : {}}
            >
              كلمة السر الجديده
            </label>
            <input
              type="password"
              name="new-password"
              id="new-password"
              placeholder="كلمة السر الجديده"
              value={newPassword}
              onChange={(e) => setnewPassword(e.target.value)}
              onFocus={handleFocus}
              style={
                labelSmoue ? { backgroundColor: "rgba(255,255,255,50%)" } : {}
              }
            />
            <div className="password-hints">
              {passToggelhint && <span className=" spanhint">مطلوب</span>}
              {isFocused && !checklengthPassword && (
                <span className=" spanhint">
                  يجب ألا تقل كلمة المرور عن 8 أحرف,
                </span>
              )}
              {isFocused && !checkuppercase && (
                <span className=" spanhint">حرف كبير,</span>
              )}
              {isFocused && !checkLowercase && (
                <span className="spanhint">&nbsp;&nbsp;حرف صغير,</span>
              )}

              {isFocused && !checkDigit && (
                <span className=" spanhint">رقم,</span>
              )}
              {isFocused && !checkSpecialChar && (
                <span className=" spanhint">رمز</span>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              style={labelSmoue ? { color: "#fff" } : {}}
            >
              تأكيد كلمه السر
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="تأكيد كلمه السر"
              value={confirmNewPassword}
              onChange={(e) => setconfirmNewPassword(e.target.value)}
              onFocus={handleFocusConfirm}
              style={
                labelSmoue ? { backgroundColor: "rgba(255,255,255,50%)" } : {}
              }
            />
            {isFocusedConfirm && (
              <span className=" spanhint">كلمة المرور غير متطابقة</span>
            )}
          </div>

          <button
            className="btn"
            type="submit"
            style={
              btnDarb
                ? {
                    background: `linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)`,
                    color: "black",
                    border: "none",
                  }
                : labelSmoue
                ? {
                    background: `linear-gradient(to right, rgb(219, 55, 55), transparent 64%), linear-gradient(to left, rgb(0, 39, 98), transparent 50%)`,
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    padding: ".8rem",
                  }
                : {}
            }
          >
            {loadingSave ? <LoadingButton /> : "حفظ التغييرات "}
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default ChangePasswordSetting;
