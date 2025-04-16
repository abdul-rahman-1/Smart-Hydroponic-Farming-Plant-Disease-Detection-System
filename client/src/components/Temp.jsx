
import React from 'react';
import SensorData from "./SensorData";

function Temp() {
  return (
    <SensorData
      label="Temperature"
      dataKey="Temperature"
      avgKey="Avg_Temp"
      chartColor="rgba(255, 99, 132, 1)"
      unit="°C"
    />
  );
}

export default Temp;
