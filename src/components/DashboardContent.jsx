import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import StatisticsCard from "./StatisticsCard";
import Chart from "./Chart";
import "./DashboardContent.css";

const DashboardContent = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      console.log('Fetching stats...');
      const { data, error } = await supabase
        .from('dr_breakout_stats')
        .select('*')
        .limit(1);

      if (error) {
        console.error('Error:', error);
        return;
      }

      console.log('Fetched data:', data);
      if (data && data.length > 0) {
        setStats(data[0]);
      }
    } catch (error) {
      console.error('Exception:', error);
    }
  };

  return (
    <div className="dashboard-content">
      <div className="statistics">
        <StatisticsCard title="Dataset" value="44" />
        <StatisticsCard title="Med. Max Ext." value="1.7" />
        <StatisticsCard title="Median Conf. Candle" value="0.5" />
        <StatisticsCard title="Ret. above -0.5" value="77%" />
        <StatisticsCard 
          title="True Confirmation" 
          value={stats ? `${Number(stats.true_days_percentage).toFixed(2)}%` : "Loading..."}
        />
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
