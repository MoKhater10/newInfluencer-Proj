import React from "react";
import "./chart1.css";
import { ResponsivePie } from "@nivo/pie";

const Chart1 = ({ data, innerRadius, text }) => {
  return (
    <div className="chart1">
      {data && (
        <ResponsivePie
          data={data}
          colors={{
            datum: "data.color",
          }}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          innerRadius={innerRadius}
          padAngle={2}
          cornerRadius={10}
          activeOuterRadiusOffset={8}
          borderWidth={0}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#33333"
          arcLinkLabelsThickness={2}
          enableArcLabels={false}
          enableArcLinkLabels={false}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          defs={[
            {
              id: "dots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 5,
              stagger: true,
            },
            {
              id: "lines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "ruby",
              },
              id: "dots",
            },
            {
              match: {
                id: "c",
              },
              id: "dots",
            },
            {
              match: {
                id: "go",
              },
              id: "dots",
            },
            {
              match: {
                id: "python",
              },
              id: "dots",
            },
            {
              match: {
                id: "scala",
              },
              id: "lines",
            },
            {
              match: {
                id: "lisp",
              },
              id: "lines",
            },
            {
              match: {
                id: "elixir",
              },
              id: "lines",
            },
            {
              match: {
                id: "javascript",
              },
              id: "lines",
            },
          ]}
        />
      )}
      <div className="metric">{text}</div>
    </div>
  );
};

export default Chart1;
