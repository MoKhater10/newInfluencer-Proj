import { useEffect, useState } from "react";
import Card from "../../../components/card/Card";
import { getApiUrl } from "../../../helpers";
import AboutSmou from "../../smou-components/about-smou/AboutSmou";
import SmouHero from "../../smou-components/smou-hero/SmouHero";
import SmouFooter from "../../smou-footer/SmouFooter";

import "./smou-home.css";
import { useNavigate } from "react-router";
import authService from "../../../services/auth-services";
import Title from "../../../components/title/Title";

const SmouHome = () => {
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
        localStorage.removeItem("brand");
        navigate("/login");
      } 
    });
};

  useEffect(() => {
    getTopInfluencers();
  }, [topInfluencersUrl]);
  return (
    <div className="smou-homepage">
      <SmouHero />
      <main>
        <AboutSmou />
        <Title color="white" text="ماذا نقدم ؟" />
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
          <div className="btn-smoue-parent-more container ">
            <button
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
      </main>
      <SmouFooter />
    </div>
  );
};
export default SmouHome;
