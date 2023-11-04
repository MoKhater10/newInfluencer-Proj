import React, { useState, useEffect } from "react";
import "./whatWeOffer.css";
import Title from "../title/Title";
import Card from "../card/Card";
import { useNavigate } from "react-router-dom";
import { getApiUrl } from "../../helpers";
import authService from "../../services/auth-services";

const WhatWeOffer = () => {
  const [topInfluencers, setTopInfluencers] = useState();
  const [topInfluencersUrl, setTopInfluencersUrl] = useState(
    getApiUrl("api/influencers/top/")
  );
  const navigate = useNavigate();
  const [loginToken, setLoginToken] = useState(false);
  const brand = JSON.parse(localStorage.getItem("brand"));
  useEffect(() => {
    setLoginToken(brand ? true : false);
  }, [brand]);

const getTopInfluencers = () => {
  authService.topInfluencers(topInfluencersUrl)
    .then((response) => {
      setTopInfluencers(response);
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        // Handle 401 Unauthorized error
        localStorage.removeItem("brand");
        navigate("/login");
      }
    });
};

  useEffect(() => {
    getTopInfluencers();
  }, [topInfluencersUrl]);

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
  switch (subdomain) {
    case DOMAINS.AZZRK:
      btnDarb = false;
      break;

    case DOMAINS.MARDOD:
      btnDarb = false;
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
    <div className="whatWeOffer pb-5">
      <div className="container">
        <Title color="var(--primaryColor)" text="ماذا نقدم ؟" />
        <div className="cards">
          <div className="container card-con">
            {topInfluencers &&
              topInfluencers.map((topInfluencer, index) => (
                <div className="" key={index}>
                  <Card
                    topInfluencers={topInfluencers[index]}
                    index={index}
                    getTopInfluencers={getTopInfluencers}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="btn-parent-more">
          <button
            style={
              btnDarb
                ? {
                    background: `linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)`,
                    color: "white",
                    border: "none",
                  }
                : {}
            }
            className="btn btn-show-more"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              if (loginToken) {
                navigate("/all-influencers");
              } else {
                navigate("/login");
              }
            }}
          >
            عرض المزيد
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
