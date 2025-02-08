import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { supabase } from "../lib/supabase";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart({ title }) {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (title === "Max Retracement") {
      fetchMaxRetracementData();
    }
  }, [title]);

  const getBarColor = (value) => {
    const numValue = parseFloat(value);
    if (numValue >= -1 && numValue <= 0) {
      return '#7C3AED'; // Darker purple for middle range
    } else {
      return '#8B5CF6'; // Brighter purple for outer ranges
    }
  };

  const fetchMaxRetracementData = async () => {
    try {
      const { data, error } = await supabase
        .from('max_retracement_close')
        .select('bins, counts')
        .order('id');

      if (error) {
        console.error('Error:', error);
        return;
      }

      if (data) {
        setChartData({
          labels: data.map(item => item.bins.toFixed(2)),
          datasets: [{
            label: 'Count',
            data: data.map(item => item.counts),
            backgroundColor: data.map(item => getBarColor(item.bins)),
            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
            barPercentage: 0.98,
            categoryPercentage: 0.98,
            hoverBackgroundColor: '#9333EA',
          }]
        });
      }
    } catch (error) {
      console.error('Exception:', error);
    }
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(139, 92, 246, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: '#94A3B8',
          font: { size: 11 },
          padding: 5,
        },
        border: { display: false },
      },
      x: {
        grid: { display: false },
        ticks: {
          color: '#94A3B8',
          font: { size: 11 },
          maxRotation: 0,
          minRotation: 0,
          autoSkip: true,
          maxTicksLimit: 15,
        },
        border: { display: false },
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(88, 28, 135, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 8,
        titleFont: { size: 12 },
        bodyFont: { size: 12 },
        displayColors: false,
        callbacks: {
          title: (tooltipItems) => `Value: ${tooltipItems[0].label}`,
          label: (context) => `Count: ${context.parsed.y}`,
        }
      },
      title: {
        display: true,
        text: title,
        color: '#fff',
        font: {
          size: 14,
          weight: 'normal',
        },
        padding: { bottom: 10 },
      }
    },
    layout: {
      padding: {
        left: 5,
        right: 5,
        top: 10,
        bottom: 10
      }
    }
  };

  return (
    <div className="chart">
      {chartData ? (
        <Bar data={chartData} options={options} />
      ) : (
        <div className="loading">Loading chart data...</div>
      )}
    </div>
  );
}

export default Chart;
