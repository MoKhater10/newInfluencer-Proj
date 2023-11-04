import React, { Fragment, useState, useEffect } from "react";
import "./all-influencers.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NabBar/NavBar";
import Card from "../../components/card/Card";
import { GiSettingsKnobs } from "react-icons/gi";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import Footer from "../../components/footer/Footer";
import StayInContact from "../../components/stay-in-contact/StayInContact";
import authService from "../../services/auth-services";
import { getApiUrl } from "../../helpers";
import LoadingSpinner from "../../components/loading-spinner/LoadingSpinner";
import smoueBg from "../../smou/smou-imgs/smoue-all-influencer-bg.webp";
import SmouNavbar from "../../smou/smou-components/smou-navbar/SmouNavbar";
import SmouFooter from "../../smou/smou-footer/SmouFooter.jsx";

const AllInfluencers = () => {
  const [filterToggle, setFilterToogle] = useState(false);
  const [allInfluencers, setAllInfluencers] = useState();
  const [response, setResponse] = useState();
  const [filterName, setFilterName] = useState("الكل");
  const [all, setAll] = useState(false);
  const [choosen, setChoosen] = useState(true);
  const [notChoosen, setNoChoosen] = useState(true);
  const [allInfluencersUrl, setAllInfluencersUrl] = useState(
    getApiUrl("api/brands/me/influencers/")
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getTopInfluencers = () => {
  setLoading(true);
  authService.allInfluencers(allInfluencersUrl)
    .then((response) => {
      setAllInfluencers(response.results);
      setResponse(response);
      setLoading(false);
    })
    .catch((error) => {
      if (error.response && error.response.status === 401) {
        // Handle 401 Unauthorized error
        localStorage.removeItem("brand");
        navigate("/login");
      }
      setLoading(false); // Ensure loading state is set to false even in case of error
    });
};


  const handleFilterClick = (newUrl) => {
    setLoading(true);
    setAllInfluencersUrl(newUrl);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    getTopInfluencers();
  }, [allInfluencersUrl]);

  const numbersLoop = () => {
    if (response.num_pages) {
      for (let i = 0; i <= response.num_pages - 1; i++) {}
    }
  };
  useEffect(() => {
    if (response) {
      numbersLoop();
    }
  }, [response]);
  const [activePage, setActivePage] = useState(0);
  const [activeArrow, setActiveArrow] = useState("");

  const handlePagination = (index) => {
    setHoveredIndex(-1);
    if (allInfluencersUrl) {
      const urlParts = allInfluencersUrl.split("?");
      const baseUrl = urlParts[0];
      const queryParams = urlParts[1];
      const newPage = index + 1;
      const newUrl = `${baseUrl}?${queryParams}&page=${newPage}`;
      setAllInfluencersUrl(newUrl);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActivePage(index);
    } else {
      setAllInfluencersUrl(getApiUrl(`${allInfluencersUrl}?page=${index + 1}`));
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActivePage(index);
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
      btnDarb = false;
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

  const [divHovered, setDivHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  return (
    <Fragment>
      {labelSmoue ? <SmouNavbar /> : <NavBar />}
      <div
        style={
          labelSmoue
            ? {
                backgroundImage: `url(${smoueBg})`,
                backgroundSize: "cover",
              }
            : {}
        }
      >
        <div className="all-influencers container">
          <div className="all-influencers-header">
            <div className="all-influencers-title">
              <h1
                style={
                  labelSmoue
                    ? {
                        color: "white",
                      }
                    : {}
                }
              >
                المؤثرين
              </h1>
            </div>
            <div
              className={"all-influencers-filter"}
              onClick={() => setFilterToogle(!filterToggle)}
              onMouseEnter={() => {
                if (labelSmoue) {
                  setDivHovered(true);
                }
              }}
              onMouseLeave={() => {
                setDivHovered(false);
              }}
              style={{
                background: labelSmoue
                  ? "var(--cardColor)"
                  : divHovered && labelSmoue
                  ? `linear-gradient(135deg, rgba(162, 32, 32, .9) 0%, rgba(152, 31, 33, .9) 12%, rgba(148, 30, 36, .9) 23%, rgba(139, 29, 37, .9) 32%, rgba(130, 28, 39, .9) 39%, rgba(125, 28, 41, .9) 45%, rgba(115, 28, 42, .9) 49%, rgba(105, 27, 45, .9) 52%, rgba(92, 25, 45, .9) 56%, rgba(82, 25, 48, .9) 60%, rgba(67, 24, 49, .9) 68%, rgba(46, 22, 49, .9) 81%, rgba(3, 23, 53, .9) 100%)`
                  : "var(--primaryColor)",
                color: "white",
              }}
            >
              <div
                className={
                  filterToggle
                    ? "filter-drop-down filter-show"
                    : "filter-drop-down filter-hide"
                }
              >
                <ul>
                  <div
                    onClick={() => {
                      if (all) {
                        handleFilterClick(
                          getApiUrl("api/brands/me/influencers/ ")
                        );
                        setFilterName("الكل");
                      }
                      setAll(false);
                      setChoosen(true);
                      setNoChoosen(true);
                    }}
                  >
                    <li>الكل</li>
                  </div>
                  <div
                    onClick={() => {
                      if (all === false) {
                        setAll(true);
                      }
                      if (notChoosen === false) {
                        setNoChoosen(true);
                      }
                      if (choosen) {
                        handleFilterClick(
                          getApiUrl("api/brands/me/influencers/?accepted=true")
                        );
                        setFilterName("المؤثرين المختارون");
                        setChoosen(false);
                      }
                    }}
                  >
                    <li>المؤثرين المختارون</li>
                  </div>
                  <div
                    onClick={() => {
                      if (all === false) {
                        setAll(true);
                      }
                      if (choosen === false) {
                        setChoosen(true);
                      }
                      if (notChoosen) {
                        handleFilterClick(
                          getApiUrl("api/brands/me/influencers/?accepted=false")
                        );
                        setFilterName("المؤثرين الغير مختارون");
                        setNoChoosen(false);
                      }
                    }}
                  >
                    <li>المؤثرين الغير مختارون</li>
                  </div>
                </ul>
              </div>
              <GiSettingsKnobs />
              <span>{filterName}</span>
              <span>{filterToggle ? <SlArrowUp /> : <SlArrowDown />}</span>
            </div>
          </div>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="card-con container">
              {allInfluencers &&
                allInfluencers.map((topInfluencer, index) => (
                  <div className="" key={index}>
                    <Card
                      topInfluencers={allInfluencers[index]}
                      getTopInfluencers={getTopInfluencers}
                      allInfluencersUrl={allInfluencersUrl}
                      className="influencer-card"
                    />
                  </div>
                ))}
            </div>
          )}
          {response?.num_pages > 1 && (
            <div className="all-influencers-pagination container">
              <div
                className={`pagination-arrow-right ${
                  activeArrow === "right" ? "active" : ""
                }`}
                onClick={() => {
                  if (response.previous) {
                    setAllInfluencersUrl(response.previous);
                    setActiveArrow("right");
                    setActivePage(activePage - 1);
                  }
                }}
                style={
                  labelSmoue
                    ? {
                        borderRadius: "7px",
                        color: "#E0E0E0",
                        background:
                          "linear-gradient(135deg, rgb(162, 32, 32,.9) 0%, rgb(152, 31, 33,.9) 12%, rgb(148, 30, 36,.9) 23%, rgb(139, 29, 37,.9) 32%, rgb(130, 28, 39,.9) 39%, rgb(125, 28, 41,.9) 45%, rgb(115, 28, 42,.9) 49%, rgb(105, 27, 45,.9) 52%, rgb(92, 25, 45,.9) 56%, rgb(82, 25, 48,.9) 60%, rgb(67, 24, 49,.9) 68%, rgb(46, 22, 49,.9) 81%, rgb(3, 23, 53,.9) 100%)",
                      }
                    : {}
                }
              >
                <SlArrowRight />
              </div>
              <div
                className={
                  btnDarb
                    ? "pagination-numbers darb"
                    : "pagination-numbers websites"
                }
                style={
                  labelSmoue
                    ? {
                        borderRadius: "10px",
                        backgroundColor: "rgba(255,255,255,.43)",
                      }
                    : {}
                }
              >
                {response && response.num_pages
                  ? Array.from({ length: response.num_pages }, (_, index) => (
                      <span
                        key={index}
                        onClick={() => handlePagination(index)}
                        className={index === activePage ? "active" : ""}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(-1)}
                        style={{
                          color:
                            index === activePage
                              ? "white"
                              : index === activePage && "black",
                          background:
                            index === hoveredIndex && labelSmoue
                              ? "linear-gradient(135deg, rgb(162, 32, 32,.9) 0%, rgb(152, 31, 33,.9) 12%, rgb(148, 30, 36,.9) 23%, rgb(139, 29, 37,.9) 32%, rgb(130, 28, 39,.9) 39%, rgb(125, 28, 41,.9) 45%, rgb(115, 28, 42,.9) 49%, rgb(105, 27, 45,.9) 52%, rgb(92, 25, 45,.9) 56%, rgb(82, 25, 48,.9) 60%, rgb(67, 24, 49,.9) 68%, rgb(46, 22, 49,.9) 81%, rgb(3, 23, 53,.9) 100%)"
                              : index === hoveredIndex && btnDarb
                              ? "linear-gradient(225.15deg, #0C2241 -5.43%, #0CD7CD 100%)"
                              : index === activePage
                              ? "var(--activePagenation)"
                              : "",
                          borderRadius: labelSmoue ? "7px" : "",
                          transition: "background 0.3s ease-in-out",
                        }}
                      >
                        {index + 1}
                      </span>
                    ))
                  : null}
              </div>
              <div
                className={`pagination-arrow-left ${
                  activeArrow === "left" ? "active" : ""
                }`}
                onClick={() => {
                  if (response.next) {
                    setAllInfluencersUrl(response.next);
                    setActiveArrow("left");
                    setActivePage(activePage + 1);
                  }
                }}
                style={
                  labelSmoue
                    ? {
                        backgroundColor: "rgba(255,255,255,43%)",
                        borderRadius: "10px",
                        color: "white",
                      }
                    : {}
                }
              >
                <SlArrowLeft />
              </div>
            </div>
          )}
        </div>
      </div>

      <StayInContact />
      {labelSmoue ? <SmouFooter /> : <Footer />}
    </Fragment>
  );
};

export default AllInfluencers;
