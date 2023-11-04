import React, { useEffect, useState } from "react";
import "./stats.css";
import Chart1 from "../chart1/Chart1";
import authService from "../../services/auth-services";
import { useNavigate, useParams } from "react-router-dom";

const Stats = () => {
  const [influencer, setinfluencer] = useState();
  const navigate = useNavigate()
  const id = useParams();
const influencerInfo = () => {
  authService.influencerInformation(id["influencer_id"])
    .then((response) => {
      setinfluencer(response);
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        // Handle 401 Unauthorized error
        localStorage.removeItem("brand");
        navigate("/login");
      }
    });
};
  const chartNum = (e) => {
    return (
      influencer &&
      influencer.influencer.social_media.find((item) => item.platform == e)
        ?.followers
    );
  };
  let totalFollowers = 0;
  influencer &&
    influencer.influencer.social_media.forEach((item) => {
      totalFollowers += item.followers;
    });
  const data = [
    {
      id: "فيسبوك",
      label: "فيسبوك",
      value: chartNum("facebook"),
      color: "#135DD7",
    },
    {
      id: "يوتيوب",
      label: "يوتيوب",
      value: chartNum("youtube"),
      color: "#BB0909",
    },
    {
      id: "تويتر",
      label: "تويتر",
      value: chartNum("twitter"),
      color: "#02375D",
    },
    {
      id: "انستجرام",
      label: "انستجرام",
      value: chartNum("instagram"),
      color: "#EB0C3A",
    },
    {
      id: "سناب شات",
      label: "سناب شات",
      value: chartNum("snapchat"),
      color: "#FEC300",
    },
    {
      id: "تيك توك",
      label: "تيك توك",
      value: chartNum("tiktok"),
      color: "#0AD6D1",
    },
  ];
  useEffect(() => {
    influencerInfo();
  }, []);

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

  return (
    <div
      className={
        btnDarb
          ? "stats container stats-darb"
          : "stats container stats-websites"
      }
    >
      <div className="container">
        <div className="row p-sm-5 d-flex p-4 gap-3">
          <div className="percent1 col-lg-9 d-flex justify-content-start justify-content-center flex-wrap gap-5">
            {influencer &&
              influencer.influencer.social_media.map((item, i) => {
                return (
                  <div className="one" key={i}>
                    <p>
                      {((item.followers / totalFollowers) * 100).toFixed(1)}%
                    </p>
                    <div className="social align-items-center d-flex gap-3">
                      <div
                        className="circle"
                        style={
                          item.platform === "facebook"
                            ? { backgroundColor: "#135DD7" }
                            : item.platform === "tiktok"
                            ? { backgroundColor: "#0AD6D1" }
                            : item.platform === "twitter"
                            ? { backgroundColor: "#02375D" }
                            : item.platform === "instagram"
                            ? { backgroundColor: "#EB0C3A" }
                            : item.platform === "snapchat"
                            ? { backgroundColor: "#FEC300" }
                            : item.platform === "youtube"
                            ? { backgroundColor: "#BB0909" }
                            : { backgroundColor: "#BB0909" }
                        }
                      ></div>
                      <p
                        style={
                          item.platform === "facebook"
                            ? { color: "#135DD7" }
                            : item.platform === "tiktok"
                            ? { color: "#0AD6D1" }
                            : item.platform === "twitter"
                            ? { color: "#02375D" }
                            : item.platform === "instagram"
                            ? { color: "#EB0C3A" }
                            : item.platform === "snapchat"
                            ? { color: "#FEC300" }
                            : item.platform === "youtube"
                            ? { color: "#BB0909" }
                            : { color: "#BB0909" }
                        }
                      >
                        {item.platform}
                      </p>
                    </div>
                    <span>{item.followers}</span>
                  </div>
                );
              })}
          </div>
          <div className="chart col-lg-2 d-flex flex-lg-column justify-content-center gap-5">
            <Chart1
              data={data}
              text={formatFollowers(totalFollowers)}
              innerRadius={0.8}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
