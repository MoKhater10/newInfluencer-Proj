import React from "react";
import { BeatLoader } from "react-spinners";
import "./loading-spinners.css";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const LoadingSpinner = () => {
  return (
    <div className="preloadContainer">
      <div className="preload">
        <BeatLoader
          height="80"
          width="80"
          radius="9"
          color="var(--primaryColor)"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;
