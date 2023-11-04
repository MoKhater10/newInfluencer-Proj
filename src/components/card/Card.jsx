import React, { Fragment, useState } from "react";
import "./card.css";

import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import authService from "../../services/auth-services";
import LoadingButton from "../loading-button/LoadingButton";
import somueCard from "../../smou/smou-imgs/smou-card-bg.webp";
import azzrkUser from "../../assets/images/azzrk-user.webp";
import mardodUser from "../../assets/images/mardod-user.webp";
import atharUser from "../../assets/images/athar-user.webp";
import darbUser from "../../assets/images/darb-user.webp";
import warqaUser from "../../assets/images/warqa-user.webp";
import smoueUser from "../../assets/images/smoue-user.webp";
import face1 from "./../../assets/images/facebook.webp";
import twitter1 from "./../../assets/images/twitter.webp";
import insta1 from "./../../assets/images/insta.webp";
import tiktok1 from "./../../assets/images/tiktok.webp";
import snap1 from "./../../assets/images/snap.webp";
import youtube1 from "./../../assets/images/youtube.webp";
import card__badage from "../../assets/images/card__badge.webp";

const platformIcons = {
  facebook: face1,
  twitter: twitter1,
  instagram: insta1,
  tiktok: tiktok1,
  snapchat: snap1,
  youtube: youtube1,
};

const Card = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAllInfluencersPage = location.pathname.includes("all-influencers");
  const { topInfluencers } = props;
  const [toogleOverlay, setToogleOverlay] = useState(false);
  const [addedId, setAddedId] = useState("");
  const [influencerInfo, setInfluencerInfo] = useState();
  const [influrncerId, setInfluencerId] = useState("");
  const brand = JSON.parse(localStorage.getItem("brand"));

  const renderSocialMediaIcons = () => {
    if (isAllInfluencersPage) {
      return topInfluencers.influencer.social_media.map((platform, index) => {
        if (platform.platform && platformIcons[platform.platform]) {
          return (
            <div className="icon" key={index}>
              <NavLink
                to={platform.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={platformIcons[platform.platform]}
                  alt={platform.platform}
                />
              </NavLink>
            </div>
          );
        }
        return null;
      });
    } else {
      return topInfluencers.social_media.map((platform, index) => {
        if (platform.platform && platformIcons[platform.platform]) {
          return (
            <div className="icon" key={index}>
              <NavLink
                to={platform.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={platformIcons[platform.platform]}
                  alt={platform.platform}
                />
              </NavLink>
            </div>
          );
        }
        return null;
      });
    }
  };

  const calculateTotalFollowers = () => {
    let totalFollowers = 0;
    if (isAllInfluencersPage) {
      for (const platform of topInfluencers.influencer.social_media) {
        totalFollowers += platform.followers || 0;
      }
    } else {
      for (const platform of topInfluencers.social_media) {
        totalFollowers += platform.followers || 0;
      }
    }

    return totalFollowers;
  };

  const formatFollowers = (followers) => {
    if (followers >= 1000000000) {
      return `${(followers / 1000000000).toFixed(0)} مليار`;
    } else if (followers >= 1000000) {
      return `${(followers / 1000000).toFixed(0)} مليون`;
    } else if (followers >= 1000) {
      return `${(followers / 1000).toFixed(0)} الاف`;
    } else {
      return followers.toString();
    }
  };

  const [loadingLogin, setLoadingLogin] = useState(false);
  const [confirmAdd, setConfirmAdd] = useState(false);

  const setConfirmAddFunc = (index) => {
    setConfirmAdd(true);
    setAddedId(index);
  };
  const addInfluencers = (addedId) => {
    try {
      setLoadingLogin(true);
      authService.addInfluencer(addedId).then(
        (response) => {
          setConfirmAdd(false);
          setLoadingLogin(false);
          setToogleOverlay(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "تم الاضافة بنجاح",
            showConfirmButton: false,
            timer: 1500,
          });
          props.getTopInfluencers();
        },
        (error) => {
          setLoadingLogin(false);
          if (
            error.response &&
            error.response.data &&
            error.response.data.non_field_errors &&
            error.response.data.non_field_errors[0] ===
              "Maximum influencers reached"
          ) {
            setToogleOverlay(false);
            Swal.fire({
              position: "center",
              icon: "error",
              title: "لقد وصلت للحد الأقصي من عدد المؤثرين",
              showConfirmButton: false,
              timer: 1500,
            });
            setConfirmAdd(false);
          }
        }
      );
    } catch (err) {}
  };

  const deleteInfluencers = (deletedId) => {
    try {
      setLoadingLogin(true);
      setConfirmAdd(false);

      authService.deleteInfluencer(deletedId).then(
        (response) => {
          setLoadingLogin(false);
          setToogleOverlay(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "تم الحذف بنجاح",
            showConfirmButton: false,
            timer: 1500,
          });
          props.getTopInfluencers();
        },

        (error) => {
          setLoadingLogin(false);
        }
      );
    } catch (err) {
    }
  };

  const handleAction = () => {
    if (brand) {
      const influencerIdForInfo = isAllInfluencersPage
        ? topInfluencers.influencer.id
        : topInfluencers.id;
      setToogleOverlay(true);
      setInfluencerId(influencerIdForInfo);
      setConfirmAddFunc(influencerIdForInfo);
      authService
        .influencerInformation(influencerIdForInfo)
        .then((response) => {
          setInfluencerInfo(response);
        });
    } else {
      navigate("/login");
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
  var defaultPhoto;
  switch (subdomain) {
    case DOMAINS.AZZRK:
      btnDarb = false;
      labelSmoue = false;
      defaultPhoto = azzrkUser;
      break;

    case DOMAINS.MARDOD:
      btnDarb = false;
      labelSmoue = false;
      defaultPhoto = mardodUser;

      break;

    case DOMAINS.SMOUE:
      btnDarb = false;
      labelSmoue = true;
      defaultPhoto = smoueUser;
      break;

    case DOMAINS.DARB:
      btnDarb = true;
      labelSmoue = false;
      defaultPhoto = darbUser;

      break;

    case DOMAINS.WARAQA:
      btnDarb = false;
      labelSmoue = false;
      defaultPhoto = warqaUser;
      break;

    case DOMAINS.ATHAR:
      btnDarb = false;
      labelSmoue = false;
      defaultPhoto = atharUser;
      break;

    default:
      btnDarb = false;
      labelSmoue = false;
      defaultPhoto = azzrkUser;
      break;
  }
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Fragment>
      <div
        className={
          labelSmoue
            ? "card p-4 cardSmoue"
            : "card container p-4 card-websites "
        }
        style={
          isHovered && btnDarb
            ? {
                background: `linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)`,
                color: "white",
              }
            : isHovered && labelSmoue
            ? {
                backgroundImage: `url(${somueCard})`,
                backgroundPosition: "center",
                transform: "scale(1.1)",
              }
            : {}
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {topInfluencers.accepted ? (
          <div className="card-padage">
            <img src={card__badage} alt="" />
          </div>
        ) : topInfluencers.is_accepted ? (
          <div className="card-padage">
            <img src={card__badage} alt="" />
          </div>
        ) : (
          ""
        )}
        <div className="  d-flex flex-column gap-4">
          <div>
            <div
              className="person d-flex gap-4 align-items-center"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                if (isAllInfluencersPage) {
                  if (brand) {
                    navigate(`/influencer/${topInfluencers.influencer.id}`);
                  } else {
                    navigate("/login");
                  }
                } else {
                  if (brand) {
                    navigate(`/influencer/${topInfluencers.id}`);
                  } else {
                    navigate("/login");
                  }
                }
              }}
            >
              <div className="image">
                <img
                  src={
                    isAllInfluencersPage && topInfluencers.influencer.photo
                      ? topInfluencers.influencer.photo
                      : topInfluencers.photo
                      ? topInfluencers.photo
                      : defaultPhoto
                  }
                  alt=""
                  className="influencer-photo"
                />
              </div>
              <div className="text">
                <h1
                  className="foll-numbs"
                  style={{ color: btnDarb ? "#03183D" : "" }}
                >
                  {isAllInfluencersPage
                    ? topInfluencers.influencer.name
                    : topInfluencers.name}
                </h1>
                <p
                  className="foll-numbs"
                  style={{ color: btnDarb ? "#03183D" : "" }}
                >
                  مؤثر
                </p>
              </div>
            </div>
          </div>
          <div className="followers d-flex align-items-center gap-3">
            <p
              style={{
                color: btnDarb
                  ? "rgb(3, 24, 61)"
                  : labelSmoue
                  ? "rgba(255,255,255,80%)"
                  : "",
              }}
            >
              عدد المتابعين:
            </p>
            <span
              style={{
                color: btnDarb
                  ? "rgb(3, 24, 61)"
                  : labelSmoue
                  ? "rgba(255,255,255,80%)"
                  : "",
              }}
            >
              {formatFollowers(calculateTotalFollowers())}
            </span>
          </div>
          <div className="icons d-flex flex-wrap align-items-center">
            {renderSocialMediaIcons()}
          </div>
          {isAllInfluencersPage && topInfluencers.influencer.categories ? (
            <div className="into">
              {topInfluencers.influencer.categories.map((item, index) => {
                const isCardHovered = hoveredIndex === index;
                return (
                  <div
                    className="item"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    title={`${item}`}
                    style={{
                      background:
                        btnDarb && isCardHovered
                          ? `white`
                          : btnDarb
                          ? "linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)"
                          : labelSmoue
                          ? "rgba(255, 255, 255, 50%)"
                          : "var(--primaryColor)",
                      color:
                        labelSmoue && isCardHovered
                          ? "white"
                          : btnDarb
                          ? "#022444"
                          : "white",
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          ) : (
            topInfluencers && (
              <div className="into">
                {topInfluencers.categories.map((item, index) => {
                  const isCardHovered = hoveredIndex === index;
                  return (
                    <div
                      className="item"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      title={`${item}`}
                      style={{
                        background:
                          btnDarb && isCardHovered
                            ? `white`
                            : btnDarb
                            ? "linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)"
                            : labelSmoue
                            ? "rgba(255, 255, 255, 50%)"
                            : "var(--primaryColor)",
                        color:
                          labelSmoue && isCardHovered
                            ? "white"
                            : btnDarb
                            ? "#022444"
                            : "white",
                      }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            )
          )}
        </div>
        <div className="btn-add-div">
          <button className="btn btn-add" onClick={() => handleAction()}>
            {isAllInfluencersPage
              ? topInfluencers.accepted
                ? "حذف"
                : "اضافة"
              : topInfluencers.is_accepted
              ? "حذف"
              : "اضافة"}
          </button>
        </div>
      </div>
      {toogleOverlay && (
        <div className="add-overlay">
          <div
            className="add-popup popup-add"
            style={
              labelSmoue
                ? {
                    backgroundColor: "rgba(255,255,255,.84)",
                  }
                : {}
            }
          >
            <h2>هل انت متأكد</h2>
            <h5>
              من{" "}
              {isAllInfluencersPage
                ? topInfluencers.accepted
                  ? "حذف"
                  : "اضافة"
                : topInfluencers.is_accepted
                ? "حذف"
                : "اضافة"}{" "}
            </h5>
            <div className="add-influencer-info">
              <div className="influencer-info-img">
                <img
                  src={influencerInfo?.influencer.photo}
                  alt="icon"
                  className="influencer-info-photo"
                />
              </div>
              <div className="add-influencer-details">
                <h4>{influencerInfo?.influencer.name}</h4>
                <h6>{formatFollowers(calculateTotalFollowers())}</h6>
              </div>
            </div>
            <div className="actions-btn">
              <button
                style={
                  btnDarb
                    ? {
                        background: `linear-gradient(218.3deg, #25C7E2 7.46%, #0CD7CD 74.03%, #F3F3F3 107.31%)`,
                        color: "black",
                        border: "none",
                        borderRadius: "10px",
                      }
                    : labelSmoue
                    ? {
                        background: `linear-gradient(to right,#DB3737, transparent 65%), linear-gradient(to left, #002762, transparent 215%)`,
                        color: "white",
                        border: "none",
                        borderRadius: "12px",
                      }
                    : {}
                }
                className="btn btn-yes"
                onClick={() => {
                  if (isAllInfluencersPage) {
                    if (topInfluencers.accepted) {
                      deleteInfluencers(addedId);
                    } else {
                      addInfluencers(addedId);
                    }
                  } else {
                    if (topInfluencers.is_accepted) {
                      deleteInfluencers(addedId);
                    } else {
                      addInfluencers(addedId);
                    }
                  }
                }}
              >
                {" "}
                {loadingLogin ? <LoadingButton /> : "نعم"}
              </button>
              <button
                style={
                  btnDarb
                    ? {
                        border: "1px solid #11D4D1",
                        background: `white`,
                        color: "black",
                        border: "1px solid #21CADE",
                        borderRadius: "10px",
                      }
                    : labelSmoue
                    ? {
                        background: "transparent",
                        color: "black",
                        border: "1px solid #8d3e3e",
                        borderImage: `linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)`,
                        borderRadius: "12px",
                        borderImageSlice: "1",
                      }
                    : {}
                }
                className="btn btn-no"
                onClick={() => setToogleOverlay(false)}
              >
                لا
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Card;
