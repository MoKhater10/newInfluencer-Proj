import React, { Fragment, useState } from "react";
import "./contact-info-register.css";
import PhoneInput from "react-phone-number-input";

const ContactInfoRegister = (props) => {
  const [mobile, setMobile] = useState(props.mobile);
  const [whatsapp, setWhatsapp] = useState(props.whatsapp);
  const [email, setEmail] = useState(props.email);
  const [isValid, setIsValid] = useState(true);

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
  const [mobileToogelHint, setMobileToogelhint] = useState(false);
  const [focusMobile, setFocusMobile] = useState(false);
  const [whatsappToogelHint, setWhatsappToogelhint] = useState(false);
  const [focusWhatsapp, setFocusWhatsapp] = useState(false);
  const [emailToogelHint, setEmailToogelhint] = useState(false);
  const [focusEmail, setFocusEmail] = useState(false);
  const [emailTestToogelHint, setEmailTestToogelhint] = useState(false);

  //focus mobile
  const handelMobileFocus = () => {
    setFocusMobile(true);
    setMobileToogelhint(false);
    const icon = document.querySelectorAll(".PhoneInputInput");
    icon[0].classList.add("className", "toogle-dir");
  };
  //focus whatsapp
  const handelWhatsappFocus = () => {
    setFocusWhatsapp(true);
    setWhatsappToogelhint(false);
    const icon = document.querySelectorAll(".PhoneInputInput");
    icon[1].classList.add("className", "toogle-dir");
  };
  //focus email
  const handelEmailFocus = () => {
    setFocusEmail(true);
    setEmailToogelhint(false);
  };

  const handleNext = () => {
    //mobile
    if (!mobile) {
      setMobileToogelhint(true);
      setFocusMobile(false);
    }
    //whatsapp
    if (!whatsapp) {
      setWhatsappToogelhint(true);
      setFocusWhatsapp(false);
    }
    //email
    if (!email) {
      setEmailToogelhint(true);
      setFocusEmail(false);
    }

    if (mobile && whatsapp && email && !emailTestToogelHint) {
      props.setToogleBtnSocial(true);
      props.setToogleBtnContact(false);
      props.setMobile(mobile);
      props.setWhatsapp(whatsapp);
      props.setEmail(email);
      props.setTitleClass2(true);
      props.setCircleClass2(true);
      props.setBorderCircle2(false);
      props.setBorderCircle3(true);
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
      labelSmoue = false;
      break;

    case DOMAINS.MARDOD:
      btnDarb = false;
      labelSmoue = false;
      break;

    case DOMAINS.SMOUE:
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
      <div className="contact-info-register">
        <form>
          <div className="contact-info-form">
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
                        opacity: ".6",
                      }
                    : {}
                }
                className="form-phone-input"
                international
                placeholder="ادخل رقم الهاتف"
                value={mobile}
                onFocus={handelMobileFocus}
                onChange={setMobile}
              />
              {mobileToogelHint && <span className=" spanhint">مطلوب</span>}
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
                الواتساب
              </label>
              <PhoneInput
                style={
                  labelSmoue
                    ? {
                        opacity: ".6",
                      }
                    : {}
                }
                className="form-phone-input"
                international
                placeholder="ادخل رقم الواتساب "
                value={whatsapp}
                onFocus={handelWhatsappFocus}
                onChange={setWhatsapp}
              />
              {whatsappToogelHint && <span className=" spanhint">مطلوب</span>}
              {focusWhatsapp && !whatsapp && (
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
                البريد الإلكترونى
              </label>
              <input
                style={
                  labelSmoue
                    ? {
                        opacity: ".6",
                      }
                    : {}
                }
                type="email"
                placeholder="ادخل البريد الإلكترونى"
                value={email}
                onFocus={handelEmailFocus}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
              {focusEmail && !isValid && (
                <span className=" spanhint">يجب أن يكون بريد إلكترونى</span>
              )}
              {emailToogelHint && <span className=" spanhint">مطلوب</span>}
            </div>
          </div>
          <div className="register-btns">
            <div
              className="btn-next"
              onClick={handleNext}
              style={
                btnDarb
                  ? {
                      background: `linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)`,
                      color: "black",
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
              التالى
            </div>
            <div
              className="btn-back"
              onClick={() => {
                props.setToogleBtnProfile(true);
                props.setToogleBtnContact(false);
                props.setTitleClass1(false);
                props.setCircleClass1(false);
                props.setBorderCircle1(true);
                props.setBorderCircle2(false);
              }}
              style={
                btnDarb
                  ? {
                      background: `linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)`,
                      color: "black",
                      border: "none",
                    }
                  : labelSmoue
                  ? {
                      background: "transparent",
                      color: "white",
                      border: "1px solid white",
                    }
                  : {}
              }
            >
              السابق
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default ContactInfoRegister;
