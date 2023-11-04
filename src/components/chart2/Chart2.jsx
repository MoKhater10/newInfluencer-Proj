import React from "react";
import "./chart2.css";
import { ResponsiveBar } from "@nivo/bar";

const Chart2 = ({ data, width, height }) => {
  return (
    <div className="chart2" style={{ width: width, height: height }}>
      {data && (
        <ResponsiveBar
          data={data}
          keys={["key"]}
          indexBy="country"
          colors={{ datum: "data.color" }}
          margin={{ top: 0, right: 0, bottom: 20, left: 0 }}
          padding={0.4}
          innerPadding={30}
          groupMode="grouped"
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "blue",
              rotation: -45,
              lineWidth: 0.5,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "age",
              },
              id: "lines",
            },
          ]}
          borderRadius={6}
          borderColor={{
            from: "color",
            modifiers: [["darker", "1.5"]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 0,
            tickPadding: 10,
            tickRotation: 0,
            legend: "country",
            legendPosition: "middle",
            legendOffset: 32,
          }}
          axisLeft={null}
          enableGridY={false}
          enableLabel={false}
          labelSkipWidth={11}
          labelSkipHeight={15}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          legends={[]}
          role="application"
          isFocusable={true}
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          }
        />
      )}
    </div>
  );
};

export default Chart2;
