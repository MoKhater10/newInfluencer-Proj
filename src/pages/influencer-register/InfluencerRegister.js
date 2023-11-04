import React, { Fragment, useState } from "react";
import "./influencer-register.css";
import ProfileInfoRegister from "../../components/profileInfo-register/ProfileInfoRegister";
import ContactInfoRegister from "../../components/contactInfo-register/ContactInfoRegister";
import SocialMediaRegister from "../../components/socialMedia-register/SocialMediaRegister";
import { ImCheckmark } from "react-icons/im";
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

const InfluencerRegister = () => {
  const [toogleBtnProfile, setToogleBtnProfile] = useState(true);
  const [toogleBtnContact, setToogleBtnContact] = useState(false);
  const [toogleBtnSocial, setToogleBtnSocial] = useState(false);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [nationality, setNationality] = useState("");
  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [occupation, setOccupation] = useState("");
  const [marital_status, setMarital_status] = useState("أعزب");
  const [specialization, setSpecialization] = useState("");
  const [speaks, setSpeaks] = useState(true);
  const [face_appears, setFace_appears] = useState(true);
  const [wears_headscarf, setWears_headscarf] = useState(true);
  const [accountPublic, setAccountPublic] = useState(true);
  const [categories, setCategories] = useState([]);
  const [photo, setPhoto] = useState("");
  const [mobile, setMobile] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [youtube_url, setYoutube_url] = useState("");
  const [snapchat_url, setSnapchat_url] = useState("");
  const [tiktok_url, setTiktok_url] = useState("");
  const [instagram_username, setInstagram_username] = useState("");
  const [instagram_reaction_rate, setInstagram_reaction_rate] = useState("");
  const [youtube_followers, setYoutube_followers] = useState("");
  const [snapchat_followers, setSnapchat_followers] = useState("");
  const [tiktok_followers, setTiktok_followers] = useState("");
  const [instagram_followers, setInstagram_followers] = useState("");
  const [youtube_numbers, setYoutube_numbers] = useState(1000);
  const [snapchat_numbers, setSnapchat_numbers] = useState(1000);
  const [tiktok_numbers, setTiktok_numbers] = useState(1000);
  const [instagram_numbers, setInstagram_numbers] = useState(1000);
  const [titleClass1, setTitleClass1] = useState(false);
  const [titleClass2, setTitleClass2] = useState(false);
  const [circleClass1, setCircleClass1] = useState(false);
  const [circleClass2, setCircleClass2] = useState(false);
  const [borderCircle1, setBorderCircle1] = useState(true);
  const [borderCircle2, setBorderCircle2] = useState(false);
  const [borderCircle3, setBorderCircle3] = useState(false);

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
  var labelSmoue;
  var backPosition;
  switch (subdomain) {
    case DOMAINS.AZZRK:
      registerBackground = azzrkRegisterBack;
      logo = azzrkLogo;
      backColor = "#022444";
      backgroundImage1 =
        "linear-gradient(to right, rgba(118, 197, 245, .5) , rgba(188, 230, 255, 1))";
      backgroundImage2 =
        "linear-gradient(to left, rgba(118, 197, 245, .5) , rgba(153, 216, 255, 1))";
      labelSmoue = false;
      backPosition = "";
      break;

    case DOMAINS.MARDOD:
      registerBackground = mardodRegisterBack;
      logo = mardodLogo;
      backColor = "#16EDB1";
      backgroundImage1 = "linear-gradient(to bottom, white, #ffffff)";
      backgroundImage2 = "linear-gradient(to bottom, white, #ffffff)";
      labelSmoue = false;
      backPosition = "";
      break;

    case DOMAINS.SMOUE:
      registerBackground = smouRegisterBack;
      labelSmoue = true;
      backPosition = "center";
      break;

    case DOMAINS.DARB:
      registerBackground = darbRegisterBack;
      logo = darbLogo;
      backColor = "#25c7e2";
      backgroundImage1 = "linear-gradient(to bottom, white, #ffffff)";
      backgroundImage2 = "linear-gradient(to bottom, white, #ffffff)";
      labelSmoue = false;
      backPosition = "";
      break;

    case DOMAINS.WARAQA:
      registerBackground = waraqaRegisterBack;
      logo = warqaLogo;
      backColor = "#FF6A00";
      backgroundImage1 = "linear-gradient(to bottom, white, #ffffff)";
      backgroundImage2 = "linear-gradient(to bottom, white, #ffffff)";
      labelSmoue = false;
      backPosition = "";
      break;

    case DOMAINS.ATHAR:
      registerBackground = atharRegisterBack;
      logo = atharLogo;
      backColor = "#343062";
      backgroundImage1 = "linear-gradient(to bottom, white, #ffffff)";
      backgroundImage2 = "linear-gradient(to bottom, white, #ffffff)";
      labelSmoue = false;
      backPosition = "";
      break;

    default:
      registerBackground = azzrkRegisterBack;
      logo = azzrkLogo;
      backColor = "#022444";
      backgroundImage1 =
        "linear-gradient(to right, rgba(118, 197, 245, .5) , rgba(188, 230, 255, 1))";
      backgroundImage2 =
        "linear-gradient(to left, rgba(118, 197, 245, .5) , rgba(153, 216, 255, 1))";
      labelSmoue = false;
      backPosition = "";
  }

  return (
    <Fragment>
      <div
        className="inf-register-parent"
        style={
          labelSmoue
            ? {
                
                backgroundImage: `url(${registerBackground})`,
                backgroundPosition: backPosition,
              }
            : {
                backgroundImage: `url(${registerBackground})`,
              }
        }
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
          className="sdd"
          style={
            labelSmoue
              ? { display: "none" }
              : { backgroundImage: backgroundImage2 }
          }
        ></div>
        <div
          className=" inf-register "
          style={
            labelSmoue
              ? {
                  background: `linear-gradient(to top, rgb(219, 55, 55,.6), transparent 111%), linear-gradient(rgb(0, 39, 98), transparent 47%)`,
                  color: "white",
                  border: "none",
                }
              : {}
          }
        >
          <div className="influencer-register ">
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
                تسجيل كمؤثر
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
                مرحبا بك لتكون شريكا في نجاحنا وجزء من موقعنا{" "}
              </h6>
            </div>
            <div className="circles">
              <div className="lines">
                <div
                  className={
                    borderCircle1 ? "border-circle" : "no-border-circle"
                  }
                >
                  {" "}
                  {borderCircle1 ? (
                    <span className="circle"></span>
                  ) : (
                    <span>
                      <ImCheckmark className="right-icon" />
                    </span>
                  )}
                </div>
                <div>
                  <span></span>
                </div>
                <div
                  className={
                    borderCircle2 ? "border-circle" : "no-border-circle"
                  }
                >
                  {borderCircle1 ? (
                    <span className="no-border-circle"></span>
                  ) : borderCircle2 ? (
                    <span className="circle"></span>
                  ) : (
                    <span>
                      <ImCheckmark className="right-icon" />
                    </span>
                  )}
                </div>
                <div>
                  <span></span>
                </div>
                <div
                  className={
                    borderCircle3 ? "border-circle" : "no-border-circle"
                  }
                >
                  {borderCircle3 ? (
                    <span className="circle"></span>
                  ) : (
                    <span className="" noCircle>
                      {" "}
                    </span>
                  )}
                </div>
              </div>
              <div className="titles">
                <span className={labelSmoue ? "smoueTitle" : "title"}>
                  معلومات شخصية
                </span>
                <span
                  className={
                    titleClass1 && labelSmoue
                      ? "smoueTitle"
                      : titleClass1
                      ? "title"
                      : "select"
                  }
                >
                  معلومات للتواصل
                </span>
                <span
                  className={
                    titleClass2 && labelSmoue
                      ? "smoueTitle"
                      : titleClass2
                      ? "title"
                      : "select"
                  }
                >
                  وسائل تواصل اجتماعى
                </span>
              </div>
            </div>
            <div>
              {toogleBtnProfile && (
                <ProfileInfoRegister
                  setToogleBtnProfile={setToogleBtnProfile}
                  setToogleBtnContact={setToogleBtnContact}
                  name={name}
                  setName={setName}
                  country={country}
                  setCountry={setCountry}
                  governorate={governorate}
                  setGovernorate={setGovernorate}
                  nationality={nationality}
                  setNationality={setNationality}
                  bio={bio}
                  setBio={setBio}
                  address={address}
                  setAddress={setAddress}
                  occupation={occupation}
                  setOccupation={setOccupation}
                  marital_status={marital_status}
                  setMarital_status={setMarital_status}
                  specialization={specialization}
                  setSpecialization={setSpecialization}
                  speaks={speaks}
                  setSpeaks={setSpeaks}
                  face_appears={face_appears}
                  setFace_appears={setFace_appears}
                  wears_headscarf={wears_headscarf}
                  setWears_headscarf={setWears_headscarf}
                  accountPublic={accountPublic}
                  setAccountPublic={setAccountPublic}
                  categories={categories}
                  setCategories={setCategories}
                  photo={photo}
                  setPhoto={setPhoto}
                  titleClass1={titleClass1}
                  setTitleClass1={setTitleClass1}
                  titleClass2={titleClass2}
                  setTitleClass2={setTitleClass2}
                  circleClass1={circleClass1}
                  setCircleClass1={setCircleClass1}
                  circleClass2={circleClass2}
                  setCircleClass2={setCircleClass2}
                  borderCircle1={borderCircle1}
                  setBorderCircle1={setBorderCircle1}
                  borderCircle2={borderCircle2}
                  setBorderCircle2={setBorderCircle2}
                />
              )}

              {toogleBtnContact && (
                <ContactInfoRegister
                  setToogleBtnProfile={setToogleBtnProfile}
                  setToogleBtnContact={setToogleBtnContact}
                  setToogleBtnSocial={setToogleBtnSocial}
                  mobile={mobile}
                  setMobile={setMobile}
                  whatsapp={whatsapp}
                  setWhatsapp={setWhatsapp}
                  email={email}
                  setEmail={setEmail}
                  titleClass1={titleClass1}
                  setTitleClass1={setTitleClass1}
                  titleClass2={titleClass2}
                  setTitleClass2={setTitleClass2}
                  circleClass1={circleClass1}
                  setCircleClass1={setCircleClass1}
                  circleClass2={circleClass2}
                  setCircleClass2={setCircleClass2}
                  borderCircle1={borderCircle1}
                  setBorderCircle1={setBorderCircle1}
                  borderCircle2={borderCircle2}
                  setBorderCircle2={setBorderCircle2}
                  borderCircle3={borderCircle3}
                  setBorderCircle3={setBorderCircle3}
                />
              )}

              {toogleBtnSocial && (
                <SocialMediaRegister
                  setToogleBtnContact={setToogleBtnContact}
                  setToogleBtnSocial={setToogleBtnSocial}
                  name={name}
                  country={country}
                  governorate={governorate}
                  nationality={nationality}
                  bio={bio}
                  address={address}
                  occupation={occupation}
                  marital_status={marital_status}
                  specialization={specialization}
                  speaks={speaks}
                  face_appears={face_appears}
                  wears_headscarf={wears_headscarf}
                  accountPublic={accountPublic}
                  categories={categories}
                  photo={photo}
                  mobile={mobile}
                  whatsapp={whatsapp}
                  email={email}
                  youtube_url={youtube_url}
                  setYoutube_url={setYoutube_url}
                  snapchat_url={snapchat_url}
                  setSnapchat_url={setSnapchat_url}
                  tiktok_url={tiktok_url}
                  setTiktok_url={setTiktok_url}
                  instagram_username={instagram_username}
                  setInstagram_username={setInstagram_username}
                  instagram_reaction_rate={instagram_reaction_rate}
                  setInstagram_reaction_rate={setInstagram_reaction_rate}
                  youtube_followers={youtube_followers}
                  setYoutube_followers={setYoutube_followers}
                  snapchat_followers={snapchat_followers}
                  setSnapchat_followers={setSnapchat_followers}
                  tiktok_followers={tiktok_followers}
                  setTiktok_followers={setTiktok_followers}
                  instagram_followers={instagram_followers}
                  setInstagram_followers={setInstagram_followers}
                  youtube_numbers={youtube_numbers}
                  setYoutube_numbers={setYoutube_numbers}
                  snapchat_numbers={snapchat_numbers}
                  setSnapchat_numbers={setSnapchat_numbers}
                  tiktok_numbers={tiktok_numbers}
                  setTiktok_numbers={setTiktok_numbers}
                  instagram_numbers={instagram_numbers}
                  setInstagram_numbers={setInstagram_numbers}
                  titleClass1={titleClass1}
                  setTitleClass1={setTitleClass1}
                  titleClass2={titleClass2}
                  setTitleClass2={setTitleClass2}
                  circleClass1={circleClass1}
                  setCircleClass1={setCircleClass1}
                  circleClass2={circleClass2}
                  setCircleClass2={setCircleClass2}
                  borderCircle2={borderCircle2}
                  setBorderCircle2={setBorderCircle2}
                  borderCircle3={borderCircle3}
                  setBorderCircle3={setBorderCircle3}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InfluencerRegister;
