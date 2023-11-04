import React, { useEffect, useState } from "react";
import "./singleSocial.css";
import face from "../../assets/images/facebook.webp";
import insta from "../../assets/images/insta.webp";
import youtube from "../../assets/images/youtube.webp";
import twitter from "../../assets/images/twitter.webp";
import tiktok from "../../assets/images/tiktok.webp";
import snap from "../../assets/images/snap.webp";
import stats1 from "../../assets/images/stats1.webp";
import stats2 from "../../assets/images/stats2.webp";
import stats3 from "../../assets/images/stats3.webp";
import stats4 from "../../assets/images/stats4.webp";
import stats5 from "../../assets/images/stats5.webp";
import stats6 from "../../assets/images/stats6.webp";
import stats7 from "../../assets/images/stats7.webp";
import stats8 from "../../assets/images/stats8.webp";
import stats9 from "../../assets/images/stats9.webp";
import stats10 from "../../assets/images/stats10.webp";
import earth from "../../assets/images/earth.webp";
import Chart2 from "../chart2/Chart2";
import Chart3 from "../chart3/Chart3";
import Chart1 from "../chart1/Chart1";
import Bar from "../bar/bar";
import authService from "../../services/auth-services";
import { useNavigate, useParams } from "react-router-dom";

const SingleSocial = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const platformIcons = {
    facebook: face,
    twitter: twitter,
    instagram: insta,
    tiktok: tiktok,
    snapchat: snap,
    youtube: youtube,
  };
  const id = useParams();
  let standered = "facebook";
  const [influencer, setinfluencer] = useState();
const influencerInfo = () => {
  authService.influencerInformation(id["influencer_id"])
    .then((response) => {
      setinfluencer(response);
      setLoading(false);
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
    if (influencer && influencer.influencer.social_media.length > 0) {
      setchoosen(influencer.influencer.social_media[0].platform);
    }
  }, [influencer]);
  useEffect(() => {
    influencerInfo();
  }, []);
  const [choosen, setchoosen] = useState(standered);

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
    <div className="singleSocial pt-5">
      <div className="icons ">
        <div className="container">
          <div className="row d-flex justify-content-evenly">
            {influencer &&
              influencer.influencer.social_media.map((item, i) => {
                return (
                  <div className="col-lg-2 col-4 mb-3" key={i}>
                    <div
                      className={
                        item.platform === choosen
                          ? `image  ${
                              btnDarb
                                ? `darbActiveIcon darb-image`
                                : `activeIcon websites-image`
                            }`
                          : "image "
                      }
                      onClick={() => setchoosen(item.platform)}
                    >
                      <img src={platformIcons[item.platform]} alt="" />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {influencer &&
        influencer.influencer.social_media
          .filter((item) => item.platform === choosen)
          ?.map((item, i) => {
            // const countrieskeys=Object.keys(item.followers_countries)
            let data = [];
            let segment = [];
            let education = [];
            let age = [];
            function generateRandomColor() {
              const getRandomColor = () => {
                const r = Math.floor(Math.random() * 255);
                const g = Math.floor(Math.random() * 255);
                const b = Math.floor(Math.random() * 255);

                const rHex = r.toString(16).padStart(2, "0");
                const gHex = g.toString(16).padStart(2, "0");
                const bHex = b.toString(16).padStart(2, "0");

                return `#${rHex}${gHex}${bHex}`;
              };

              const isLightColor = (color) => {
                const r = parseInt(color.substring(1, 3), 16);
                const g = parseInt(color.substring(3, 5), 16);
                const b = parseInt(color.substring(5, 7), 16);

                const brightness = (r * 299 + g * 587 + b * 114) / 1000;

                return brightness >= 150;
              };

              let color = getRandomColor();
              while (isLightColor(color)) {
                color = getRandomColor();
              }

              return color;
            }
            item.followers_age !== null &&
              Object.keys(item.followers_age).forEach((key) => {
                age.push({
                  country: key,
                  key: +item?.followers_age[key].slice(0, -1),
                  ageColor: generateRandomColor(),
                  color: generateRandomColor(),
                });
              });
            item.followers_languages !== null &&
              Object.keys(item.followers_languages).forEach((key) => {
                data.push({
                  id: key,
                  label: key,
                  value: +item?.followers_languages[key].slice(0, -1),
                  color: generateRandomColor(),
                });
              });
            item.followers_education !== null &&
              Object.keys(item.followers_education).forEach((key) => {
                education.push({
                  country: key,
                  key: +item?.followers_education[key].slice(0, -1),
                  ageColor: generateRandomColor(),
                  color: generateRandomColor(),
                });
              });
            item.followers_segmentation !== null &&
              Object.keys(item.followers_segmentation).forEach((key) => {
                segment.push({
                  id: key,
                  label: key,
                  value: +item?.followers_segmentation[key].slice(0, -1),
                  color: generateRandomColor(),
                });
              });
            let interests =
              item.followers_interests !== null &&
              Object.keys(item.followers_interests);
            return (
              <div className="allStats m-sm-0 m-3 infl-container" key={i}>
                <div className="container">
                  <div className="row gap-4 top mb-4">
                    <div
                      className={
                        btnDarb
                          ? "col d-flex gap-5 info darb-info"
                          : "col d-flex gap-5 info websites-info"
                      }
                    >
                      <div className="image">
                        <img src={stats1} alt="" />
                      </div>
                      <div className="text">
                        <p>{item.engagement_rate}</p>
                        <span>معدل المشاركة</span>
                      </div>
                    </div>
                    <div
                      className={
                        btnDarb
                          ? "col d-flex gap-5 info darb-info"
                          : "col d-flex gap-5 info websites-info"
                      }
                    >
                      <div className="image">
                        <img src={stats2} alt="" />
                      </div>
                      <div className="text">
                        <p>{item.followers}</p>
                        <span>عدد المتابعين</span>
                      </div>
                    </div>
                    <div
                      className={
                        btnDarb
                          ? "col d-flex gap-5 info darb-info"
                          : "col d-flex gap-5 info websites-info"
                      }
                    >
                      <div className="image">
                        <img src={stats3} alt="" />
                      </div>
                      <div className="text">
                        <p>{item.comments_to_likes_ratio}</p>
                        <span>نسبة التعليقات الي الاعجبات</span>
                      </div>
                    </div>
                  </div>
                  <div className="row gap-4 mb-4 middle-1">
                    <div
                      className={
                        btnDarb
                          ? "col darb-followers followers d-flex flex-column justify-content-between"
                          : "col websites-followers followers d-flex flex-column justify-content-between"
                      }
                    >
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="text">
                          <p>المتابعين الاكثر سننا</p>
                          {/* <h2>[{maxAge(item.followers_age)}]</h2> */}
                        </div>
                        <div className="image">
                          <img src={stats4} alt="" />
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-end">
                        <div className="d-flex align-items-center">
                          {item.followers_age && (
                            <Chart2 data={age} width="180px" height="120px" />
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        btnDarb
                          ? "col darb-followers followers d-flex flex-column justify-content-between"
                          : "col websites-followers followers d-flex flex-column justify-content-between"
                      }
                    >
                      <div className="d-flex justify-content-between align-items-center ">
                        <div className="text">
                          <p>المتابعين الاكثر نوعا</p>
                          <h2>
                            {item?.followers_gender?.ذكور >
                            item?.followers_gender?.اناث
                              ? "ذكور"
                              : "اناث"}
                          </h2>
                        </div>
                        <div className="image">
                          <img src={stats5} />
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <Chart3
                          y1={parseInt(
                            item?.followers_gender?.اناث?.slice(0, -1)
                          )}
                          y2={parseInt(
                            item?.followers_gender?.ذكور?.slice(0, -1)
                          )}
                        />
                        <Chart3
                          y1={parseInt(
                            item?.followers_gender?.ذكور?.slice(0, -1)
                          )}
                          y2={parseInt(
                            item?.followers_gender?.اناث?.slice(0, -1)
                          )}
                        />
                      </div>
                    </div>
                    <div
                      className={
                        btnDarb
                          ? "col darb-followers followers"
                          : "col websites-followers followers"
                      }
                    >
                      <div>
                        <p>الدول الاعلي</p>
                        <h2>{item?.highest_country}</h2>
                      </div>
                      <div className="image">
                        <img src={earth} alt="" />
                      </div>
                    </div>
                    <div
                      className={
                        btnDarb
                          ? "col darb-followers followers"
                          : "col websites-followers followers"
                      }
                    >
                      <p>جودة المتابعين</p>
                      <h2>{item?.followers_quality}</h2>
                    </div>
                  </div>
                  <div className="row middle-2 gap-4 mb-4">
                    <div
                      className={
                        btnDarb
                          ? "col-lg col-12 darb-location location d-flex flex-column gap-4 p-3 p-md-4"
                          : "col-lg col-12 websites-location location d-flex flex-column gap-4 p-3 p-md-4"
                      }
                    >
                      <div className="head d-flex justify-content-between align-items-center">
                        <p>البلاد</p>
                        <div className="image">
                          <img src={stats7} alt="" />
                        </div>
                      </div>
                      {item.followers_countries &&
                        Object.entries(item?.followers_countries).map(
                          (country, i) => (
                            <Bar
                              color={generateRandomColor()}
                              width={country[1]}
                              text={country[0]}
                              key={i}
                            />
                          )
                        )}
                    </div>
                    <div
                      className={
                        btnDarb
                          ? "col-lg col-12 darb-location location d-flex flex-column justify-content-between p-3 p-md-4"
                          : "col-lg col-12 websites-location location d-flex flex-column justify-content-between p-3 p-md-4"
                      }
                    >
                      <div className="one d-flex justify-content-between gap-3">
                        <p>اللغات</p>
                        <div className="image">
                          <img src={stats6} alt="" />
                        </div>
                      </div>
                      <div className="two d-flex flex-sm-row flex-column justify-content-between align-items-center gap-5">
                        <div className="legends gap-3 d-flex flex-row flex-wrap flex-sm-column justify-content-center">
                          {data &&
                            data.map((item) => (
                              <div
                                className="legend d-flex align-items-center gap-3"
                                key={item.id}
                              >
                                <div
                                  className="circle"
                                  style={{ backgroundColor: item.color }}
                                ></div>
                                <div className="text">
                                  <h2>{item.value}%</h2>
                                  <span>{item.id}</span>
                                </div>
                              </div>
                            ))}
                        </div>
                        <div className="chart1">
                          <Chart1
                            data={data}
                            text={`${data.length} لغات`}
                            innerRadius={0.6}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row gap-4 mb-4 bottom">
                    <div className="col double gap-4">
                      {item.followers_segmentation && (
                        <div
                          className={
                            btnDarb
                              ? "row darb-location location mb-4 px-3 px-md-5 "
                              : "row websites-location location mb-4 px-3 px-md-5 "
                          }
                        >
                          <div>
                            <div className="one d-flex justify-content-between align-items-start gap-3">
                              <p>تصنيف المتابعين</p>
                              <div className="image">
                                <img src={stats9} alt="" />
                              </div>
                            </div>
                            <div className="two d-flex flex-sm-row flex-column justify-content-between align-items-center gap-2">
                              <div className="legends gap-3 d-flex flex-row flex-wrap flex-sm-column justify-content-center">
                                {item?.followers_segmentation &&
                                  Object.entries(
                                    item?.followers_segmentation
                                  ).map((segment, i) => {
                                    return (
                                      <div
                                        className="legend d-flex align-items-center gap-3"
                                        key={i}
                                      >
                                        <div
                                          className="circle"
                                          style={{ backgroundColor: "#135DD7" }}
                                        ></div>
                                        <div className="text">
                                          <h2>{segment[1]}</h2>
                                          <span>{segment[0]}</span>
                                        </div>
                                      </div>
                                    );
                                  })}
                              </div>
                              <div className="">
                                <Chart1
                                  data={segment}
                                  text={`${segment.length} تصنيفات`}
                                  innerRadius={0.6}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="row location ">
                        <div
                          className={
                            btnDarb
                              ? "col darb-location location d-flex flex-column justify-content-between gap-3"
                              : "col websites-location location d-flex flex-column justify-content-between gap-3"
                          }
                        >
                          <div className="one d-flex justify-content-between align-items-center gap-5 px-3">
                            <p>تعليم المتابعين</p>
                            <div className="image">
                              <img src={stats10} alt="" />
                            </div>
                          </div>
                          <div className="two d-flex flex-column flex-sm-row justify-content-between align-items-center gap-5 px-3">
                            <div className="legends d-flex flex-row flex-wrap justify-content-center flex-sm-column gap-5">
                              {education &&
                                education.map((item) => (
                                  <div
                                    className="legend d-flex align-items-center gap-3"
                                    key={item.id}
                                  >
                                    <div
                                      className="circle"
                                      style={{ backgroundColor: item.color }}
                                    ></div>
                                    <div className="text">
                                      <h2>{item.country}</h2>
                                      <span>{item.value}</span>
                                    </div>
                                  </div>
                                ))}
                            </div>

                            <div
                              className="chart"
                              style={{ height: "270px", width: "270px" }}
                            >
                              {item.followers_age && (
                                <Chart2
                                  data={education}
                                  width="300px"
                                  height="250px"
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        btnDarb
                          ? "col darb-location location d-flex flex-column gap-4 p-5 p-sm-3"
                          : "col websites-location location d-flex flex-column gap-4 p-5 p-sm-3"
                      }
                    >
                      <div className="head d-flex justify-content-between align-items-center">
                        <p>الاهتمامات</p>
                        <div className="image">
                          <img src={stats8} alt="" />
                        </div>
                      </div>
                      <div className="bars d-flex flex-column justify-content-evenly">
                        {interests &&
                          interests.map((interests, i) => {
                            return (
                              <Bar
                                color={generateRandomColor()}
                                width={Object.values(
                                  item.followers_interests[interests]
                                ).join("")}
                                text={interests}
                                key={i}
                              />
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default SingleSocial;
