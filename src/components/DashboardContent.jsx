import React from "react";
import StatisticsCard from "./StatisticsCard";
import Chart from "./Chart";
import "./DashboardContent.css";

const DashboardContent = () => {
  return (
    <div className="dashboard-content">
      <div className="statistics">
        <StatisticsCard title="Dataset" value="44" />
        <StatisticsCard title="Med. Max Ext." value="1.7" />
        <StatisticsCard title="Median Conf. Candle" value="0.5" />
        <StatisticsCard title="Ret. above -0.5" value="77%" />
        <StatisticsCard title="True Confirmation" value="100%" />
      </div>
      <div className="charts">
        <Chart title="Retracement" />
        <Chart title="Max Retracement" />
        <Chart title="Retracement Time - 15 min" />
        <Chart title="Max Extension" />
        <Chart title="Price Model" />
      </div>
    </div>
  );
};

export default DashboardContent;
