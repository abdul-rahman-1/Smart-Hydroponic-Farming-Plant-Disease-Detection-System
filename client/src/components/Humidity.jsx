
import React from 'react';
import SensorData from "./SensorData";

function Humidity() {
  return (
    <SensorData
      label="Humidity"
      dataKey="Humidity"
      avgKey="Avg_Humid"
      chartColor="rgba(153, 102, 255, 1)"
      unit="%"
    />
  );
}

export default Humidity;
