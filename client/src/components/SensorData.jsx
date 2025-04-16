import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";

function SensorData({ label, dataKey, avgKey, chartColor, unit }) {
  const [sensorStatus, setSensorStatus] = useState("Loading...");
  const [lastValue, setLastValue] = useState("N/A");
  const [lastUpdateTime, setLastUpdateTime] = useState("Loading...");

  const ctx = useRef(null);
  const chartRef = useRef(null);
  const previousStatus = useRef(sensorStatus);

  // Initialize or reset the chart
  const initChart = () => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx.current, {
      type: "line",
      data: {
        labels: [],
        datasets: [
          {
            label: `${label} (${unit})`,
            data: [],
            borderColor: chartColor,
            backgroundColor: chartColor.replace("1)", "0.2)"),
            fill: true,
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: { title: { display: true, text: "Time" } },
          y: { title: { display: true, text: `${label} (${unit})` } },
        },
      },
    });
  };

  // Fetch sensor data
  const fetchSensorData = async () => {
    try {
      const response = await fetch(
        "https://rk-server.up.railway.app/api/data",
        {
          method: "GET",
          headers: {
            serv: "aosrhglakjhfglkjahrsoutyapow448097539208475908274dilfhgjalsh24jthwkljhlkjhw45th3lkj5h34lkj5h32lk4jhlkjhqlwekjrhtlkjwh35M", // Replace with actual API key
          },
        }
      );
      const data = await response.json();
      console.log(data);
      const currentStatus = data[0]?.Sensor || "Offline";
      setSensorStatus(currentStatus);

      // Reset chart if the sensor changes status from Offline to Online
      if (currentStatus === "Online" && previousStatus.current === "Offline") {
        initChart(); // Reset chart
      }
      previousStatus.current = currentStatus;

      if (currentStatus === "Online") {
        const value = data[0]?.[dataKey];
        const lastUpdate = data[0]?.LastUpdate;
        setLastUpdateTime(
          `${lastUpdate?.Time || "N/A"} ${lastUpdate?.Date || "N/A"}`
        );
        setLastValue(value || "N/A");
        updateChart(value);
      } else {
        handleOfflineStatus(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setSensorStatus("Error fetching data");
      setLastUpdateTime("N/A");
    }
  };

  // Update the chart with live data
  const updateChart = (value) => {
    const currentTime = new Date().toLocaleTimeString();
    if (value !== undefined && chartRef.current) {
      chartRef.current.data.labels.push(currentTime);
      chartRef.current.data.datasets[0].data.push(value);

      if (chartRef.current.data.labels.length > 10) {
        chartRef.current.data.labels.shift();
        chartRef.current.data.datasets[0].data.shift();
      }

      chartRef.current.update();
    }
  };

  // Handle offline status by loading historical data
  const handleOfflineStatus = (data) => {
    const lastUpdate = data[0]?.LastUpdate;
    const avgData =
      data[0]?.[avgKey]?.split(",").map((item) => {
        const [value, time] = item.split(":");
        return { value: parseFloat(value), time };
      }) || [];

    setLastUpdateTime(
      `${lastUpdate?.Date || "N/A"} ${lastUpdate?.Time || "N/A"}`
    );
    setLastValue(avgData.length ? avgData[avgData.length - 1].value : "N/A");

    // Update chart with historical data
    if (chartRef.current) {
      chartRef.current.data.labels = avgData.map((item) => item.time);
      chartRef.current.data.datasets[0].data = avgData.map(
        (item) => item.value
      );
      chartRef.current.update();
    }
  };

  useEffect(() => {
    initChart();
    const interval = setInterval(fetchSensorData, 2000); // Fetch data every 2 seconds

    return () => {
      clearInterval(interval);
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="App temp">
      <div className="row cont">
      <div className="text col-md-4">
        <h1>{label} Sensor Data</h1>
        <div>
          <strong>Sensor Status:</strong> {sensorStatus}
        </div>
        <div>
          <strong>Last Update Time:</strong> {lastUpdateTime}
        </div>
        <div>
          <strong>Last {label}:</strong> {lastValue} {unit}
        </div>
      </div>
        <div className="col-md-8">
          <canvas ref={ctx}></canvas> 
        </div>
      </div> 
    </div> 
  );
}

export default SensorData;
