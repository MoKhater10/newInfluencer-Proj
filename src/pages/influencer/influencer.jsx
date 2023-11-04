import React, { useEffect, useState } from "react";
import "./influencer.css";
import Stats from "../../components/stats/Stats";
import SingleSocial from "../../components/single-social/SingleSocial";
import StayInContact from "../../components/stay-in-contact/StayInContact";
import NavBar from "../../components/NabBar/NavBar";
import Footer from "../../components/footer/Footer";
import authService from "../../services/auth-services";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingButton from "../../components/loading-button/LoadingButton";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSolidTrashAlt } from "react-icons/bi";
import smouInfluencerBg from "../../smou/smou-imgs/smou-influencer-bg.webp";
import SmouNavbar from "../../smou/smou-components/smou-navbar/SmouNavbar";
import SmouFooter from "../../smou/smou-footer/SmouFooter";
import azzrkUser from "../../assets/images/azzrk-user.webp";
import mardodUser from "../../assets/images/mardod-user.webp";
import atharUser from "../../assets/images/athar-user.webp";
import darbUser from "../../assets/images/darb-user.webp";
import warqaUser from "../../assets/images/warqa-user.webp";
import smoueUser from "../../assets/images/smoue-user.webp";

const Influencer = () => {
  const id = useParams();
  const [influencer, setinfluencer] = useState("");

const getInfluencerInfo = async () => {
  try {
    const response = await authService.influencerInformation(id["influencer_id"]);
    setinfluencer(response);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      // Handle 401 Unauthorized error
      localStorage.removeItem("brand");
      navigate("/login");
    }
  }
};

  useEffect(() => {
    getInfluencerInfo();
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
        getInfluencerInfo();
      },
      (error) => {
        setLoadingLogin(false);
        if (error.response && error.response.status === 401) {
          // Handle 401 Unauthorized error
          localStorage.removeItem("brand");
          navigate("/login");
        } else if (
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
            title: "لقد وصلت للحد الأقصى من عدد المؤثرين",
            showConfirmButton: false,
            timer: 1500,
          });
          setConfirmAdd(false);
        }
      }
    );
  } catch (err) {
  }
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
        getInfluencerInfo();
      },
      (error) => {
        setLoadingLogin(false);
        if (error.response && error.response.status === 401) {
          // Handle 401 Unauthorized error
          localStorage.removeItem("brand");
          navigate("/login");
        }
      }
    );
  } catch (err) {
    // Handle other errors if needed
    console.error("Error deleting influencer:", err);
    // Optionally, set an error state or display an error message to the user
    // setErrorState(true);
    // setErrorMsg("Failed to delete influencer. Please try again later.");
  }
};


  const [toogleOverlay, setToogleOverlay] = useState(false);
  const [addedId, setAddedId] = useState("");
  const [influencerInfo, setInfluencerInfo] = useState();
  const brand = JSON.parse(localStorage.getItem("brand"));
  const navigate = useNavigate();

  const handleAction = () => {
    if (brand) {
      setToogleOverlay(true);
      setConfirmAddFunc(influencer.influencer.id);
      authService
        .influencerInformation(influencer.influencer.id)
        .then((response) => {
          setInfluencerInfo(response);
        });
    } else {
      navigate("/login");
    }
  };

  const calculateTotalFollowers = () => {
    let totalFollowers = 0;
    for (const platform of influencer.influencer.social_media) {
      totalFollowers += platform.followers || 0;
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

  return (
    <div
      className="influencer"
      style={
        labelSmoue
          ? {
              backgroundImage: `url(${smouInfluencerBg})`,
              backgroundSize: "cover",
            }
          : {}
      }
    >
      {labelSmoue ? <SmouNavbar /> : <NavBar />}
      <div className="person d-flex justify-content-center align-items-center flex-column p-5">
        <div className="image">
          <img
            src={
              influencer.influencer?.photo
                ? influencer.influencer.photo
                : defaultPhoto
            }
            alt=""
            className="influencer-profile"
          />
        </div>
        <div className="text text-center">
          <h1
            style={
              labelSmoue
                ? {
                    color: `var(--btnColor)`,
                  }
                : {}
            }
          >
            {influencer && influencer.influencer.name}
          </h1>
          <p
            style={
              labelSmoue
                ? {
                    color: `var(--btnColor)`,
                  }
                : {}
            }
          >
            مؤثر
          </p>
        </div>
        <div
          className={
            btnDarb
              ? "into  d-flex gap-3 flex-wrap darb"
              : "into d-flex gap-3 flex-wrap websites"
          }
        >
          {influencer &&
            influencer.influencer.categories.map((item, i) => {
              return (
                <div
                  className=""
                  key={i}
                  style={
                    labelSmoue
                      ? {
                          background: "var(--cardColor)",
                        }
                      : {}
                  }
                >
                  {item}
                </div>
              );
            })}
        </div>
        <div className="btn-add-div">
          <button
            style={
              labelSmoue
                ? {
                    background: "var(--cardColor)",
                  }
                : {}
            }
            className={
              btnDarb
                ? "btn btn-add-influencer darb-btn-add-influencer"
                : "websites-btn-add-influencer btn btn-add-influencer"
            }
            onClick={handleAction}
          >
            {influencer.accepted ? (
              <div className="icons-div">
                <BiSolidTrashAlt className="icon-del" />
                <span className="icon-del">حذف</span>
              </div>
            ) : (
              <div className="icons-div">
                <AiOutlinePlus className="icon-del" />
                <span className="icon-del">اضافة</span>
              </div>
            )}
          </button>
        </div>
        {toogleOverlay && (
          <div className="add-overlay">
            <div className="add-popup popup-add">
              <h2>هل انت متأكد</h2>
              <h5>من {influencer.accepted ? "حذف" : "اضافة"}</h5>
              <div className="add-influencer-info">
                <div className="influencer-info-img">
                  <img
                    src={
                      influencer.influencer?.photo
                        ? influencer.influencer.photo
                        : defaultPhoto
                    }
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
                    influencer.accepted
                      ? deleteInfluencers(addedId)
                      : addInfluencers(addedId);
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
                          background: `linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)`,
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
      </div>
      <div className="m-sm-0 m-3 infl-container">
        <Stats />
      </div>
      <SingleSocial />
      <StayInContact />
      {labelSmoue ? <SmouFooter /> : <Footer />}
    </div>
  );
};

export default Influencer;
