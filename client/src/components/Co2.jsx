import React from 'react';
import SensorData from "./SensorData";

function CO2() {
  return (
    <SensorData
      label="CO2 Levels"
      dataKey="CO2"
      avgKey="Avg_CO2"
      chartColor="rgba(75, 192, 192, 1)"
      unit="ppm"
    />
  );
}

export default CO2;
