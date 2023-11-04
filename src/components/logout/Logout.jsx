import { useNavigate } from "react-router-dom";
import "./logout.css";
import warringIcon from "../../assets/images/warning-icon.webp";

function Logout() {
  const navigate = useNavigate();
  const logoutFunc = () => {
    localStorage.removeItem("brand");
    navigate("/login");
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
      labelSmoue = false;
      break;
  }
  return (
    <div className="overlay">
      <div
        className="popup popup-logout"
        style={labelSmoue ? { backgroundColor: "rgba(255,255,255,75%)" } : {}}
      >
        <div className="warning-icon">
          <img src={warringIcon} alt="icon" />
        </div>

        <h2>هل انت متأكد</h2>
        <h5>من تسجيل الخروج</h5>

        <div className="actions-btn">
          <button
            className="btn btn-yes"
            onClick={() => {
              logoutFunc();
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
                    background: `linear-gradient(to right, rgb(219, 55, 55), rgb(0, 39, 98))`,
                    color: "white",
                    borderRadius: "10px",
                    border: "none",
                  }
                : {}
            }
          >
            نعم
          </button>
          <button
            className="btn btn-no"
            onClick={() => navigate(-1)}
            style={
              btnDarb
                ? {
                    border: "1px solid #11D4D1",
                  }
                : labelSmoue
                ? { borderRadius: "10px" }
                : {}
            }
          >
            لا
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
