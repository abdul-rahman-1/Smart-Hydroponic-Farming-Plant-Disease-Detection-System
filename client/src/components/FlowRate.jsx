import React from 'react';
import SensorData from "./SensorData";

function FlowRate() {
  return (
    <SensorData
      label="Flow Rate"
      dataKey="FlowRate"
      avgKey="Avg_FlowRate"
      chartColor="rgba(54, 162, 235, 1)"
      unit="L/min"
    />
  );
}

export default FlowRate;
