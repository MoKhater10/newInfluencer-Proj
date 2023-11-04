import SmouNavbar from "../smou-navbar/SmouNavbar";
import { FiArrowDownLeft } from "react-icons/fi";
import "./smou-hero.css";

const SmouHero = () => {
  const scrollToPercent = (percent) => {
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    const scrollToPixel =
      (percent / 100) * (document.documentElement.scrollHeight - windowHeight);

    window.scrollTo({ top: scrollToPixel, behavior: "smooth" });
  };

  return (
    <header className="smou-hero">
      <SmouNavbar />
      <div className="smou-hero-content">
        <div className="container">
          <h1 className="smou-main-title">
            <span>مرحبًا بك</span> في عالمك الجديد حيثُ المشاهير
          </h1>
          <button
            className="smou-btn smou-hero-btn"
            onClick={() => scrollToPercent(50)}
          >
            <span>تعرف علي سمو</span>
            <span className="icon">
              <FiArrowDownLeft />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
export default SmouHero;
