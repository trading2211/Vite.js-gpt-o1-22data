import React, { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../contexts/AuthContext";
import StatisticsCard from "./StatisticsCard";
import Chart from "./Chart";
import "./DashboardContent.css";

const DashboardContent = () => {
  const [stats, setStats] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchStats();
    }
  }, [user]);

  const fetchStats = async () => {
    try {
      const { data, error } = await supabase
        .from('dr_breakout_stats')
        .select('true_days_percentage')
        .eq('id', 1)
        .single();

      if (error) {
        console.error('Error:', error);
        return;
      }

      if (data) {
        setStats(data);
      }
    } catch (error) {
      console.error('Exception:', error);
    }
  };

  return (
    <div className="dashboard-content">
      <div className="statistics">
        <StatisticsCard title="News Day" value="44" />
        <StatisticsCard title="Trend Confidence" value="1.7" />
        <StatisticsCard title="Best Timing" value="0.5" />
        <StatisticsCard title="Worst Timing" value="77%" />
        <StatisticsCard 
          title="True Confirmation" 
          value={stats ? `${Number(stats.true_days_percentage).toFixed(2)}%` : "Loading..."}
        />
      </div>
      
      <div className="charts-grid">
        <div className="chart-container">
          <Chart title="Max Retracement" />
        </div>
        <div className="chart-container">
          <Chart title="Second Chart" />
        </div>
        <div className="chart-container">
          <Chart title="Third Chart" />
        </div>
        <div className="chart-container">
          <Chart title="Fourth Chart" />
        </div>
      </div>

      <div className="additional-charts">
        {/* Additional charts that will be scrollable */}
        <div className="chart-container">
          <Chart title="Additional Chart 1" />
        </div>
        <div className="chart-container">
          <Chart title="Additional Chart 2" />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
