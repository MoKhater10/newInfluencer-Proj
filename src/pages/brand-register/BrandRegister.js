import React, { Fragment, useEffect, useState, useMemo } from "react";
import "./brand-register.css";
import PhoneInput from "react-phone-number-input";
import Select from "react-select";
import countryList from "react-select-country-list";
import authService from "../../services/auth-services";
import validator from "validator";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import LoadingButton from "../../components/loading-button/LoadingButton";
import { NavLink } from "react-router-dom";
import azzrkLogo from "../../assets/images/azzrak-logo.webp";
import mardodLogo from "../../assets/images/mardod-logo.webp";
import atharLogo from "../../assets/images/athar-logo.webp";
import darbLogo from "../../assets/images/darb-logo.webp";
import warqaLogo from "../../assets/images/warqa-logo.webp";
import azzrkRegisterBack from "../../assets/images/azzrk-register-back.webp";
import mardodRegisterBack from "../../assets/images/mardod-register-back.webp";
import darbRegisterBack from "../../assets/images/darb-login-back.webp";
import atharRegisterBack from "../../assets/images/athar-login-back.webp";
import waraqaRegisterBack from "../../assets/images/waraqa-register-back.webp";
import smouRegisterBack from "../../assets/images/smou-register-back.webp";

const BrandRegister = () => {
  const [mobile, setMobile] = useState();
  const [country, setCountry] = useState("");
  const [username, setUsername] = useState("");
  const [brand_name, setBrand_name] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [userToogelHint, setuserToogelhint] = useState(false);
  const [focusUser, setfocusUser] = useState(false);
  const [brandToogelHint, setBrandToogelhint] = useState(false);
  const [focusBrand, setFocusBrand] = useState(false);
  const [mobileToogelHint, setMobileToogelhint] = useState(false);
  const [focusMobile, setFocusMobile] = useState(false);
  const [countryToogelHint, setCountryToogelhint] = useState(false);
  const [focusCountry, setFocusCountry] = useState(false);
  const [emailToogelHint, setEmailToogelhint] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [passToggelhint, setpassToggelhint] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [checklengthPassword, setchecklengthPass] = useState("");
  const [checkuppercase, setcheckUppercase] = useState("");
  const [checkLowercase, setcheckLowercase] = useState("");
  const [checkDigit, setcheckDigit] = useState("");
  const [checkSpecialChar, setcheckSpecialChar] = useState("");
  const [savedPassoword, setsavedPassword] = useState(false);
  const [toogelaccount, settoggelaccount] = useState(false);
  const [isFocusedConfirm, setIsFocusedConfirm] = useState(false);
  const options = useMemo(() => countryList().getData(), []);
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(true);
  const [loadingLogin, setLoadingLogin] = useState(false);

  useEffect(() => {}, [username, password, brand_name, country, mobile, email]);

  const isValidPassword = (password) => {
    const options = {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: false,
    };
    return validator.isStrongPassword(password, options);
  };

  useEffect(() => {
    setchecklengthPass(password.length >= 8 ? true : false);
    setcheckUppercase(/[A-Z]+/.test(password));
    setcheckLowercase(/[a-z]+/.test(password));
    setcheckDigit(/[0-9]+/.test(password));
    setcheckSpecialChar(/[^A-Za-z0-9]+/.test(password));
  }, [password]);

  useEffect(() => {
    if (password === confirmPassword) {
      setIsFocusedConfirm(false);
    } else {
      setIsFocusedConfirm(true);
    }
  }, [confirmPassword]);

  function handleInputChange(event) {
    const inputEmail = event.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail));
  }

  function handleBlur() {
    setIsValid(validateEmail(email));
  }

  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  //focus username
  const handeluserFocus = () => {
    setfocusUser(true);
    setuserToogelhint(false);
  };
  //focus brand-name
  const handelBrandFocus = () => {
    setFocusBrand(true);
    setBrandToogelhint(false);
  };
  //focus mobile
  const handelMobileFocus = () => {
    setFocusMobile(true);
    setMobileToogelhint(false);
    const icon = document.querySelector(".PhoneInputInput");
    icon.classList.add("className", "toogle-dir");
  };
  //focus country
  const handelCountryFocus = () => {
    setFocusCountry(true);
    setCountryToogelhint(false);
  };
  //focus email
  const handelEmailFocus = () => {
    setFocusEmail(true);
    setEmailToogelhint(false);
  };
  //focus pass
  const handlePassFocus = () => {
    setIsFocused(true);
    setpassToggelhint(false);
    setsavedPassword(false);
  };
  //focus confirm password
  const handleFocusConfirm = () => {
    setIsFocusedConfirm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //usename
    if (!username) {
      setuserToogelhint(true);
      setfocusUser(false);
    }
    //brand_name
    if (!brand_name) {
      setBrandToogelhint(true);
      setFocusBrand(false);
    }
    //mobile
    if (!mobile) {
      setMobileToogelhint(true);
      setFocusMobile(false);
    }
    //country
    if (!country) {
      setCountryToogelhint(true);
      setFocusCountry(false);
    }
    //email
    if (!email) {
      setEmailToogelhint(true);
      setFocusEmail(false);
    }
    //password
    if (!password) {
      setpassToggelhint(true);
      setIsFocused(false);
    }
    if (password.length > 0 && !validator.isStrongPassword(password)) {
      setsavedPassword(true);
    }
    if (
      isValidPassword(password) &&
      password === confirmPassword &&
      username &&
      brand_name &&
      country &&
      mobile &&
      email
    )
      try {
        setLoadingLogin(true);
        await authService
          .brandSignup(username, password, brand_name, country, mobile, email)
          .then(
            (response) => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: `تم التسجيل بنجاح`,
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/login");
              settoggelaccount(false);
            },
            (error) => {
              setLoadingLogin(false);
              if (
                error.response.data.username[0] ===
                "A user with that username already exists."
              ) {
                settoggelaccount(true);
              }
            }
          );
      } catch (err) {
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

  var registerBackground;
  var backColor;
  var backgroundImage1;
  var backgroundImage2;
  var logo;
  var btnDarb;
  var labelSmoue;
  var backPosition;
  switch (subdomain) {
    case DOMAINS.AZZRK:
      registerBackground = azzrkRegisterBack;
      backColor = "#022444";
      backgroundImage1 =
        "linear-gradient(to right, rgba(118, 197, 245, .5) , rgba(188, 230, 255, 1))";
      backgroundImage2 =
        "linear-gradient(to left, rgba(118, 197, 245, .5) , rgba(153, 216, 255, 1))";
      logo = azzrkLogo;
      btnDarb = false;
      labelSmoue = false;
      backPosition = "";
      break;

    case DOMAINS.MARDOD:
      registerBackground = mardodRegisterBack;
      backColor = "#16EDB1";
      backgroundImage1 = "linear-gradient(to bottom, white, #ffffff)";
      backgroundImage2 = "linear-gradient(to bottom, white, #ffffff)";
      logo = mardodLogo;
      btnDarb = false;
      labelSmoue = false;
      backPosition = "";
      break;

    case DOMAINS.SMOUE:
      registerBackground = smouRegisterBack;
      btnDarb = false;
      labelSmoue = true;
      backPosition = "center";
      backgroundImage1 =
        "linear-gradient(to right,#DB3737, transparent 65%), linear-gradient(to left, #002762, transparent 215%)";
      backgroundImage2 =
        "linear-gradient(to right,#DB3737, transparent 65%), linear-gradient(to left, #002762, transparent 215%)";
      break;

    case DOMAINS.DARB:
      registerBackground = darbRegisterBack;
      backColor = "#25c7e2";
      backgroundImage1 = "linear-gradient(to bottom, white, #ffffff)";
      backgroundImage2 = "linear-gradient(to bottom, white, #ffffff)";
      logo = darbLogo;
      btnDarb = true;
      labelSmoue = false;
      backPosition = "";
      break;

    case DOMAINS.WARAQA:
      registerBackground = waraqaRegisterBack;
      backColor = "#FF6A00";
      backgroundImage1 = "linear-gradient(to bottom, white, #ffffff)";
      backgroundImage2 = "linear-gradient(to bottom, white, #ffffff)";
      logo = warqaLogo;
      btnDarb = false;
      labelSmoue = false;
      backPosition = "";
      break;

    case DOMAINS.ATHAR:
      registerBackground = atharRegisterBack;
      backColor = "#343062";
      backgroundImage1 = "linear-gradient(to bottom, white, #ffffff)";
      backgroundImage2 = "linear-gradient(to bottom, white, #ffffff)";
      logo = atharLogo;
      btnDarb = false;
      labelSmoue = false;
      backPosition = "";
      break;

    default:
      registerBackground = azzrkRegisterBack;
      backColor = "#022444";
      backgroundImage1 =
        "linear-gradient(to right, rgba(118, 197, 245, .5) , rgba(188, 230, 255, 1))";
      backgroundImage2 =
        "linear-gradient(to left, rgba(118, 197, 245, .5) , rgba(153, 216, 255, 1))";
      logo = azzrkLogo;
      btnDarb = false;
      labelSmoue = false;
      backPosition = "";
  }

  const selectStyles = {
    control: (provided) => ({
      ...provided,
      opacity: labelSmoue ? ".5" : "",
    }),
    placeholder: (provided) => ({
      ...provided,
      opacity: labelSmoue ? ".8" : "", // Change placeholder color based on labelSmoue
    }),
    option: (provided) => ({
      ...provided,
      opacity: labelSmoue ? ".8" : "",
    }),
    // Add more style overrides as needed
  };

  return (
    <Fragment>
      <div
        className={
          labelSmoue
            ? " smoue-brand-register-parent brand-register-parent"
            : "brand-register-parent"
        }
        style={{
          backgroundImage: `url(${registerBackground})`,
          backgroundPosition: backPosition,
        }}
      >
        <div
          className="sss"
          style={
            labelSmoue
              ? { display: "none" }
              : { backgroundImage: backgroundImage1 }
          }
        ></div>
        <div
          className="sdd "
          style={
            labelSmoue
              ? { display: "none" }
              : { backgroundImage: backgroundImage2 }
          }
        ></div>
        <div
          className="trade-mark-register "
          style={
            labelSmoue
              ? {
                  background: `linear-gradient(to top, rgb(219, 55, 55), transparent 53%), linear-gradient(to bottom, rgb(0, 39, 98), transparent 178%)`,
                  color: "white",
                  border: "none",
                }
              : {}
          }
        >
          <div className="brand-register-logo">
            <img src={logo} width="" height="" className="logo" />
          </div>
          <div className="register-title">
            <h3
              style={
                labelSmoue
                  ? {
                      color: "white",
                    }
                  : {}
              }
            >
              تسجيل كعلامة تجارية
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
              مرحبا بك في رحلة نجاحنا، احصل علي مؤثر ليساعدك في التسويق لعلامتك
              التجاريه من خلال موقعنا
            </h6>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              {toogelaccount && (
                <div className="alert alert-danger hintMsg" role="alert">
                  هذا الحساب موجود بالفعل
                </div>
              )}
              <div className="trade-mark-form">
                <div className="form-right">
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
                              opacity: ".5",
                            }
                          : {}
                      }
                      type="text"
                      placeholder="قم بإدخال اسم المستخدم"
                      value={username}
                      onFocus={handeluserFocus}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      className="input"
                    />
                    {userToogelHint && <span className=" spanhint">مطلوب</span>}
                    {focusUser && !username && (
                      <span className=" spanhint">مطلوب</span>
                    )}
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
                      رقم الهاتف
                    </label>
                    <PhoneInput
                      style={
                        labelSmoue
                          ? {
                              opacity: ".5",
                            }
                          : {}
                      }
                      international
                      placeholder="قم بإدخال رقم الهاتف"
                      value={mobile}
                      onFocus={handelMobileFocus}
                      onChange={setMobile}
                      className="form-phone-input"
                    />
                    {mobileToogelHint && (
                      <span className=" spanhint">مطلوب</span>
                    )}
                    {focusMobile && !mobile && (
                      <span className=" spanhint">مطلوب</span>
                    )}
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
                              opacity: ".5",
                            }
                          : {}
                      }
                      type="password"
                      placeholder="ادخل كلمة المرور"
                      value={password}
                      onFocus={handlePassFocus}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="input"
                    />
                    <div className="password-hints">
                      {passToggelhint && (
                        <span className=" spanhint">مطلوب</span>
                      )}
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
                      {savedPassoword && (
                        <span className=" spanhint">غير صحيح</span>
                      )}
                    </div>
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
                      البريد الإلكترونى
                    </label>
                    <input
                      style={
                        labelSmoue
                          ? {
                              opacity: ".5",
                            }
                          : {}
                      }
                      type="email"
                      placeholder="ادخل البريد الإلكترونى للعلامة التجارية"
                      value={email}
                      onFocus={handelEmailFocus}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      className="input"
                    />
                    {focusEmail && !isValid && (
                      <span className=" spanhint">
                        يجب أن يكون بريد إلكترونى
                      </span>
                    )}
                    {emailToogelHint && (
                      <span className=" spanhint">مطلوب</span>
                    )}
                  </div>
                </div>
                <div className="form-left">
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
                      اسم العلامة التجارية
                    </label>
                    <input
                      style={
                        labelSmoue
                          ? {
                              opacity: ".5",
                            }
                          : {}
                      }
                      type="text"
                      placeholder="ادخل اسم العلامة التجارية"
                      value={brand_name}
                      onFocus={handelBrandFocus}
                      onChange={(e) => {
                        setBrand_name(e.target.value);
                      }}
                      className="input"
                    />
                    {brandToogelHint && (
                      <span className=" spanhint">مطلوب</span>
                    )}
                    {focusBrand && !brand_name && (
                      <span className=" spanhint">مطلوب</span>
                    )}
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
                      الدولة
                    </label>
                    <Select
                      options={options}
                      defaultValue={country}
                      onFocus={handelCountryFocus}
                      onChange={(value) => setCountry(value.label)}
                      placeholder="الدولة"
                      styles={selectStyles}
                    />
                    {countryToogelHint && (
                      <span className=" spanhint">مطلوب</span>
                    )}
                    {focusCountry && !country && (
                      <span className=" spanhint">مطلوب</span>
                    )}
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
                      تأكيد كلمة المرور
                    </label>
                    <input
                      style={
                        labelSmoue
                          ? {
                              opacity: ".5",
                            }
                          : {}
                      }
                      type="password"
                      placeholder="أعد كتابة كلمة المرور"
                      value={confirmPassword}
                      onFocus={handleFocusConfirm}
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                      className="input"
                    />
                    {isFocusedConfirm && confirmPassword && (
                      <span className=" spanhint">كلمة المرور غير متطابقة</span>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="button-register"
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
                        }
                      : {}
                  }
                >
                  {loadingLogin ? <LoadingButton /> : "تسجيل "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BrandRegister;
