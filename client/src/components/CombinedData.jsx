import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto";

function CombinedData() {
  const [tempStatus, setTempStatus] = useState("Loading...");
  const [humidityStatus, setHumidityStatus] = useState("Loading...");
  const [co2Status, setCo2Status] = useState("Loading...");
  const [flowRateStatus, setFlowRateStatus] = useState("Loading...");
  const [lastTemp, setLastTemp] = useState("N/A");
  const [lastHumidity, setLastHumidity] = useState("N/A");
  const [lastCO2, setLastCO2] = useState("N/A");
  const [lastFlowRate, setLastFlowRate] = useState("N/A");
  const [lastUpdateTime, setLastUpdateTime] = useState("Loading...");

  const tempCtx = useRef(null);
  const humidityCtx = useRef(null);
  const co2Ctx = useRef(null);
  const flowRateCtx = useRef(null);
  const temperatureChartRef = useRef(null);
  const humidityChartRef = useRef(null);
  const co2ChartRef = useRef(null);
  const flowRateChartRef = useRef(null);
  const previousStatus = useRef({ tempStatus, humidityStatus, co2Status, flowRateStatus });

  useEffect(() => {
    // Initialize charts for Temperature, Humidity, CO2, and Flow Rate
    const initChart = (chartRef, ctx, label, borderColor, backgroundColor) => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      chartRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: label,
              data: [],
              borderColor: borderColor,
              backgroundColor: backgroundColor,
              fill: true,
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: { title: { display: true, text: "Time" } },
            y: { title: { display: true, text: `${label}` } },
          },
        },
      });
    };

    initChart(temperatureChartRef, tempCtx.current, "Temperature (°C)", "rgba(255, 99, 132, 1)", "rgba(255, 99, 132, 0.2)");
    initChart(humidityChartRef, humidityCtx.current, "Humidity (%)", "rgba(153, 102, 255, 1)", "rgba(153, 102, 255, 0.2)");
    initChart(co2ChartRef, co2Ctx.current, "CO2 (ppm)", "rgba(75, 192, 192, 1)", "rgba(75, 192, 192, 0.2)");
    initChart(flowRateChartRef, flowRateCtx.current, "Flow Rate (L/min)", "rgba(54, 162, 235, 1)", "rgba(54, 162, 235, 0.2)");

    const fetchSensorData = async () => {
      try {
        const response = await fetch('https://rk-server.railway.app/api/data', {
          method: 'GET',
          headers: {
            'serv': 'aosrhglakjhfglkjahrsoutyapow448097539208475908274dilfhgjalsh24jthwkljhlkjhw45th3lkj5h34lkj5h32lk4jhlkjhqlwekjrhtlkjwh35M'
          }
        });
        const data = await response.json();

        const tempStatus = data[0]?.Sensor || "Offline";
        const humidityStatus = data[1]?.Sensor || "Offline";
        const co2Status = data[2]?.Sensor || "Offline";
        const flowRateStatus = data[3]?.Sensor || "Offline";
        
        setTempStatus(tempStatus);
        setHumidityStatus(humidityStatus);
        setCo2Status(co2Status);
        setFlowRateStatus(flowRateStatus);

        // Reset charts if the sensor status changes from Offline to Online
        if (
          tempStatus === "Online" &&
          previousStatus.current.tempStatus === "Offline"
        ) {
          initChart(temperatureChartRef, tempCtx.current, "Temperature (°C)", "rgba(255, 99, 132, 1)", "rgba(255, 99, 132, 0.2)");
        }

        if (
          humidityStatus === "Online" &&
          previousStatus.current.humidityStatus === "Offline"
        ) {
          initChart(humidityChartRef, humidityCtx.current, "Humidity (%)", "rgba(153, 102, 255, 1)", "rgba(153, 102, 255, 0.2)");
        }

        if (
          co2Status === "Online" &&
          previousStatus.current.co2Status === "Offline"
        ) {
          initChart(co2ChartRef, co2Ctx.current, "CO2 (ppm)", "rgba(75, 192, 192, 1)", "rgba(75, 192, 192, 0.2)");
        }

        if (
          flowRateStatus === "Online" &&
          previousStatus.current.flowRateStatus === "Offline"
        ) {
          initChart(flowRateChartRef, flowRateCtx.current, "Flow Rate (L/min)", "rgba(54, 162, 235, 1)", "rgba(54, 162, 235, 0.2)");
        }

        previousStatus.current = { tempStatus, humidityStatus, co2Status, flowRateStatus };

        if (tempStatus === "Online") {
          const temperature = data[0]?.Temperature;
          setLastTemp(temperature || "N/A");
          updateChart(temperatureChartRef, tempCtx, temperature);
        }

        if (humidityStatus === "Online") {
          const humidity = data[1]?.Humidity;
          setLastHumidity(humidity || "N/A");
          updateChart(humidityChartRef, humidityCtx, humidity);
        }

        if (co2Status === "Online") {
          const co2 = data[2]?.CO2;
          setLastCO2(co2 || "N/A");
          updateChart(co2ChartRef, co2Ctx, co2);
        }

        if (flowRateStatus === "Online") {
          const flowRate = data[3]?.FlowRate;
          setLastFlowRate(flowRate || "N/A");
          updateChart(flowRateChartRef, flowRateCtx, flowRate);
        }

        const lastUpdate = data[0]?.LastUpdate;
        setLastUpdateTime(`${lastUpdate?.Time || "N/A"} ${lastUpdate?.Date || "N/A"}`);

      } catch (error) {
        console.error("Error fetching data:", error);
        setTempStatus("Error fetching data");
        setHumidityStatus("Error fetching data");
        setCo2Status("Error fetching data");
        setFlowRateStatus("Error fetching data");
        setLastUpdateTime("N/A");
      }
    };

    const updateChart = (chartRef, ctx, data) => {
      const currentTime = new Date().toLocaleTimeString();

      if (data !== undefined) {
        chartRef.current.data.labels.push(currentTime);
        chartRef.current.data.datasets[0].data.push(data);

        if (chartRef.current.data.labels.length > 10) {
          chartRef.current.data.labels.shift();
          chartRef.current.data.datasets[0].data.shift();
        }

        chartRef.current.update();
      }
    };

    const interval = setInterval(fetchSensorData, 2000);

    return () => {
      clearInterval(interval);
      temperatureChartRef.current?.destroy();
      humidityChartRef.current?.destroy();
      co2ChartRef.current?.destroy();
      flowRateChartRef.current?.destroy();
    };
  }, []);

  return (
    <div className="humidity">
      <h1>Combined Sensor Data</h1>
      <div>
        <strong>Temperature Sensor Status:</strong> {tempStatus} <br />
        <strong>Humidity Sensor Status:</strong> {humidityStatus} <br />
        <strong>CO2 Sensor Status:</strong> {co2Status} <br />
        <strong>Flow Rate Sensor Status:</strong> {flowRateStatus}
      </div>
      <div>
        <strong>Last Update Time:</strong> {lastUpdateTime}
      </div>
      <div>
        <strong>Last Temperature:</strong> {lastTemp} °C <br />
        <strong>Last Humidity:</strong> {lastHumidity} % <br />
        <strong>Last CO2 Level:</strong> {lastCO2} ppm <br />
        <strong>Last Flow Rate:</strong> {lastFlowRate} L/min
      </div>
      <div className="row">
        <div className="col-md-3">
          <canvas ref={tempCtx}></canvas>
        </div>
        <div className="col-md-3">
          <canvas ref={humidityCtx}></canvas>
        </div>
        <div className="col-md-3">
          <canvas ref={co2Ctx}></canvas>
        </div>
        <div className="col-md-3">
          <canvas ref={flowRateCtx}></canvas>
        </div>
      </div>
    </div>
  );
}

export default CombinedData;
