import React from "react";
import "./chart3.css";
import { ResponsiveRadialBar } from "@nivo/radial-bar";

const Chart3 = ({ y1, y2 }) => {
  const data = [
    {
      id: "Supermarket",
      data: [
        {
          x: "Vegetables",
          y: y1,
          color: "transparent",
        },
        {
          x: "Fruits",
          y: y2,
          color: "#022444",
        },
      ],
    },
  ];
  return (
    <div className="chart3">
      <ResponsiveRadialBar
        data={data}
        startAngle={-360}
        endAngle={360}
        padding={0.25}
        colors={{
          datum: "data.color",
        }}
        cornerRadius={45}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        enableRadialGrid={false}
        enableCircularGrid={false}
        radialAxisStart={null}
        circularAxisOuter={null}
        labelsSkipAngle={2}
        motionConfig="wobbly"
        legends={[]}
      />
    </div>
  );
};

export default Chart3;
