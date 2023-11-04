import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";
import LoginChoose from "./components/login-choose/LoginChoose";
import "./App.css";
import LoginForm from "./components/login-form/LoginForm";
import BrandRegister from "./pages/brand-register/BrandRegister";
import InfluencerRegister from "./pages/influencer-register/InfluencerRegister";
import Home from "./pages/home/Home";
import Influencer from "./pages/influencer/influencer";
import AllInfluencers from "./pages/all-influencers/AllInfluencers";
import ProfileSetting from "./components/profile-setting/ProfileSetting";
import ProfileInfo from "./components/Profile-info/ProfileInfo";
import ChangePasswordSetting from "./components/change-password/ChangePasswordSetting";
import Logout from "./components/logout/Logout";
import { useEffect, useState } from "react";
import SmouHome from "./smou/smou-pages/smou-home/SmouHome";
import SmouLoginPage from "./smou/smou-pages/smou-login-page/SmouLoginPage";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  var subdomain = window.location.origin;

  // Define CSS variables based on the subdomain
  var cssVariables = {};

  const DOMAINS = {
    AZZRK: "https://influencer.azzrk.com",
    ATHAR: "https://influencer.atherr.com",
    MARDOD: "https://influencer.marrdoud.com",
    WARAQA: "https://influencer.warrqa.com",
    DARB: "https://influencer.darbplatform.com",
    SMOUE: "https://influencer.sumoue.com",
  };

  var smoueWebsite;
  switch (subdomain) {
    case DOMAINS.AZZRK:
      cssVariables.primaryColor = "#022444";
      cssVariables.secondaryColor = "#FFFFFF";
      cssVariables.btnColor = "#FFFFFF";
      cssVariables.dotColor = "#76C5F5";
      cssVariables.lineColor = "#FFFFFF";
      cssVariables.cardColor = "#DAF1FF";
      cssVariables.borderColor = "#77C9FF";
      smoueWebsite = false;
      cssVariables.activeCardColor = "#022444";
      cssVariables.activePagenation = "#022444";
      cssVariables.boxShadow = "0px -1px 15px 0px rgba(153, 216, 255, 0.5)";
      break;

    case DOMAINS.MARDOD:
      cssVariables.primaryColor = "#001822";
      cssVariables.secondaryColor = "#16EDB1";
      cssVariables.btnColor = "#FFFFFF";
      cssVariables.dotColor = "#16EDB1";
      cssVariables.lineColor = "#16EDB1";
      cssVariables.cardColor = "#D5FCF1";
      cssVariables.borderColor = "#16EDB1";
      cssVariables.activePagenation = "#001822";
      smoueWebsite = false;
      cssVariables.boxShadow = "0px -1px 15px 0px rgba(160, 161, 162, 0.5)";
      break;

    case DOMAINS.SMOUE:
      cssVariables.primaryColor = "#03183D";
      cssVariables.dotColor = "#AD2E34";
      cssVariables.cardColor = "rgba(255, 255, 255, 50%)";
      cssVariables.btnColor = "#fff";
      cssVariables.borderColor = "#fff";
      cssVariables.statsColor = "#fff";
      cssVariables.activeCardColor =
        "linear-gradient(#1C4BA28C,#1117678C, #DB37378C)";
      cssVariables.boxShadow =
        "0 2px 6px -1px rgba(255,255,255,.9), 0 2px 4px -2px rgba(255,255,255,.9)";
      cssVariables.colorFollowersText = "#022444CC";
      cssVariables.componentsListColor = "#fff";
      cssVariables.cardColor = "rgba(255,255,255,43%)";
      cssVariables.activePagenation =
        "linear-gradient(135deg, rgb(162, 32, 32,.9) 0%, rgb(152, 31, 33,.9) 12%, rgb(148, 30, 36,.9) 23%, rgb(139, 29, 37,.9) 32%, rgb(130, 28, 39,.9) 39%, rgb(125, 28, 41,.9) 45%, rgb(115, 28, 42,.9) 49%, rgb(105, 27, 45,.9) 52%, rgb(92, 25, 45,.9) 56%, rgb(82, 25, 48,.9) 60%, rgb(67, 24, 49,.9) 68%, rgb(46, 22, 49,.9) 81%, rgb(3, 23, 53,.9) 100%)";
      smoueWebsite = true;
      cssVariables.boxShadow = "0px -1px 15px 0px rgba(160, 161, 162, 0.5)";
      break;

    case DOMAINS.DARB:
      cssVariables.primaryColor = "#0C2241";
      cssVariables.secondaryColor = "#FFFFFF";
      cssVariables.btnColor = "#0C2241";
      cssVariables.dotColor = "#1CCEDA";
      cssVariables.lineColor = "#FFFFFF";
      cssVariables.cardColor = "#FFFFFF";
      cssVariables.borderColor = "#21CADE";
      smoueWebsite = false;
      cssVariables.activeCardColor =
        "linear-gradient(to left, #0E2E4A, #2FD8D6)";
      cssVariables.activePagenation =
        "linear-gradient(to left, rgb(33, 202, 222), transparent 90%), linear-gradient(to right, rgb(17, 212, 209), transparent 90%)";
      cssVariables.boxShadow = "0px -1px 15px 0px rgba(160, 161, 162, 0.5)";
      break;

    case DOMAINS.WARAQA:
      cssVariables.primaryColor = "#2C0E42";
      cssVariables.secondaryColor = "#FF6A00";
      cssVariables.btnColor = "#FFFFFF";
      cssVariables.dotColor = "#FF6A00";
      cssVariables.lineColor = "#FF6A00";
      cssVariables.cardColor = "#FFF4EE";
      cssVariables.borderColor = "#2C0E42";
      smoueWebsite = false;
      cssVariables.activeCardColor = "#2C0E42";
      cssVariables.activePagenation = "#2C0E42";
      cssVariables.boxShadow = "0px -1px 15px 0px rgba(160, 161, 162, 0.5)";
      break;

    case DOMAINS.ATHAR:
      cssVariables.primaryColor = "#343062";
      cssVariables.secondaryColor = "#D2A030";
      cssVariables.btnColor = "#FFFFFF";
      cssVariables.dotColor = "#D2A030";
      cssVariables.lineColor = "#D2A030";
      cssVariables.cardColor = "#F1EFFF";
      cssVariables.borderColor = "#343062";
      smoueWebsite = false;
      cssVariables.activeCardColor = "#343062";
      cssVariables.activePagenation = "#343062";
      cssVariables.boxShadow = "0px -1px 15px 0px rgba(160, 161, 162, 0.5)";
      break;

    default:
      cssVariables.primaryColor = "#022444";
      cssVariables.secondaryColor = "FFFFFF";
      cssVariables.btnColor = "#FFFFFF";
      cssVariables.dotColor = "#76C5F5";
      cssVariables.lineColor = "#FFFFFF";
      cssVariables.cardColor = "#DAF1FF";
      cssVariables.borderColor = "#77C9FF";
      smoueWebsite = false;
      cssVariables.statsColor = "#000";
      cssVariables.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.12)";
      cssVariables.statsColor = "#022444";
      cssVariables.colorFollowersText = "#02244491";
      cssVariables.componentsListColor = "#000";
      cssVariables.activePagenation = "#022444";
      cssVariables.boxShadow = "0px -1px 15px 0px rgba(160, 161, 162, 0.5)";
  }

  // Update the CSS variables
  var root = document.documentElement;

  Object.keys(cssVariables).forEach(function (key) {
    root.style.setProperty("--" + key, cssVariables[key]);
  });

  const checkUserToken = () => {
    const userToken = localStorage.getItem("brand");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      if (
        location.pathname.includes("/all-influencers") ||
        location.pathname.includes("/profile-setting")
      ) {
        navigate("/login");
      }
    } else {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    checkUserToken();
  }, [localStorage.getItem("brand")]);

  const loggedInGuard = (element) => {
    // If user is logged in, redirect to home page
    if (isLoggedIn) {
      return <Navigate to="/" replace={true} />;
    }
    // If not logged in, allow access to the provided element
    return element;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={smoueWebsite ? <SmouHome /> : <Home />} />
        <Route
          path="/login"
          element={loggedInGuard(
            smoueWebsite ? <SmouLoginPage /> : <LoginPage />
          )}
        >
          <Route path="" element={loggedInGuard(<LoginForm />)} />
          <Route path="create-account" element={loggedInGuard(<LoginChoose />)} />
        </Route>
        <Route path="/create-account/brand" element={loggedInGuard(<BrandRegister />)} />
        <Route
          path="/create-account/influencer"
          element={loggedInGuard(<InfluencerRegister />)}
        />
        <Route path="/" element={smoueWebsite ? <SmouHome /> : <Home />} />
        {isLoggedIn && (
          <Route path="/all-influencers" element={<AllInfluencers />} />
        )}
        {isLoggedIn && (
          <Route path="/influencer/:influencer_id" element={<Influencer />} />
        )}
        {isLoggedIn && (
          <Route path="/profile-setting" element={<ProfileSetting />}>
            <Route index element={<ProfileInfo />} />
            <Route
              index
              path="/profile-setting/profile-info"
              element={<ProfileInfo />}
            />
            <Route
              path="/profile-setting/change-password"
              element={<ChangePasswordSetting />}
            />
            <Route path="/profile-setting/logout" element={<Logout />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
