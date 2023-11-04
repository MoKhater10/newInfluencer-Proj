import React, { Fragment, useEffect, useState, useRef } from "react";
import "./profile-info.css";
import { getApiUrl } from "../../helpers";
import authHeader from "../../services/auth-header";
import axios from "axios";
import Swal from "sweetalert2";
import authService from "../../services/auth-services";
import LoadingButton from "../loading-button/LoadingButton";
import { useNavigate } from "react-router-dom";

const ProfileInfo = () => {
  const userInfoUrl = getApiUrl("api/brands/me/profile/");
  const [userInfo, setUserInfo] = useState("");
  const refName = useRef();
  const refUserName = useRef();
  const refEmail = useRef();
  const [loadingSave, setLoadingSave] = useState(false);
  const [brandNameChanged, setBrandNameChanged] = useState(false);
  const [userNameChanged, setUserNameChanged] = useState(false);
  const [emailChanged, setEmailChanged] = useState(false);
  const [toogelaccount, settoggelaccount] = useState(false);
  const [nameTooglehint, setnameToogelhint] = useState(false);
  const [userNameTooglehint, setUserNameToogelhint] = useState(false);
  const [emailToogelHint, setEmailToogelhint] = useState(false);
  const navigate = useNavigate();

const getUserData = async () => {
  try {
    const response = await axios.get(userInfoUrl, { headers: authHeader() });
    setUserInfo(response.data);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Handle 401 error here, such as redirecting the user to the login page
      localStorage.removeItem("brand");
      navigate("/login");
    }
  }
};


  useEffect(() => {
    getUserData();
  }, []);

  const handleInputChange = () => {
    setUserInfo({
      ...userInfo,
      name: refName.current.value,
      username: refUserName.current.value,
      email: refEmail.current.value,
    });
    if (userInfo.name !== refName.current.value) {
      setBrandNameChanged(true);
    }
    if (userInfo.username !== refUserName.current.value) {
      setUserNameChanged(true);
    }
    if (userInfo.email !== refEmail.current.value) {
      setEmailChanged(true);
    }
  };

  const handleSubmit = (e) => {
    if (!refName.current.value) {
      setnameToogelhint(true);
    }
    if (!refUserName.current.value) {
      setUserNameToogelhint(true);
    }
    if (!refEmail.current.value) {
      setEmailToogelhint(true);
    }
    e.preventDefault();
    if (
      (userInfo.name || userInfo.email || userInfo.username) &&
      (brandNameChanged || userNameChanged || emailChanged)
    )
      try {
        setLoadingSave(true);
        authService
          .updateUserInfo(userInfo.name, userInfo.username, userInfo.email)
          .then(
            (response) => {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "تم حفظ التغييرات",
                showConfirmButton: false,
                timer: 1500,
              });
              setLoadingSave(false);
              settoggelaccount(false);
              setnameToogelhint(false);
              setUserNameToogelhint(false);
              setEmailToogelhint(false);
            },
            (error) => {
              setLoadingSave(false);
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
      <div className="profile-info">
        <form onSubmit={handleSubmit}>
          {toogelaccount && (
            <div className="alert alert-danger hintMsg" role="alert">
              اسم المستخدم موجود بالفعل
            </div>
          )}
          <div>
            <label htmlFor="name" style={labelSmoue ? { color: "#fff" } : {}}>
              الاسم
            </label>
            <input
              type="text"
              ref={refName}
              defaultValue={userInfo.name}
              onChange={handleInputChange}
              name="name"
              id="name"
              placeholder="الاسم"
              style={
                labelSmoue ? { backgroundColor: "rgba(255,255,255,50%)" } : {}
              }
            />
            {nameTooglehint && <span className=" spanhint">مطلوب</span>}
          </div>
          <div>
            <label htmlFor="username" style={labelSmoue && { color: "#fff" }}>
              اسم المستخدم
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="اسم المستخدم"
              ref={refUserName}
              defaultValue={userInfo.username}
              onChange={handleInputChange}
              style={
                labelSmoue ? { backgroundColor: "rgba(255,255,255,50%)" } : {}
              }
            />
            {userNameTooglehint && <span className=" spanhint">مطلوب</span>}
          </div>
          <div>
            <label htmlFor="email" style={labelSmoue ? { color: "#fff" } : {}}>
              البريد الالكتروني
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="البريد الالكتروني"
              ref={refEmail}
              defaultValue={userInfo.email}
              onChange={handleInputChange}
              style={
                labelSmoue ? { backgroundColor: "rgba(255,255,255,50%)" } : {}
              }
            />
            {emailToogelHint && <span className=" spanhint">مطلوب</span>}
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

export default ProfileInfo;
