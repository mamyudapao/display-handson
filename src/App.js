import "./App.css";

import { json } from "./temps";

import { Scatter } from "react-chartjs-2";

console.log(json);
const temperatures = json.map((dataArray) => {
  const payload = dataArray.payload;
  const jsonPayload = JSON.parse(payload);
  return jsonPayload.temperature;
});

const humidities = json.map((dataArray) => {
  const payload = dataArray.payload;
  const jsonPayload = JSON.parse(payload);
  return jsonPayload.humidity;
});

const data = [];

for (let i = 0; i < temperatures.length; i++) {
  data.push({ x: temperatures[i], y: humidities[i] });
}

console.log(data);

// データの処理
const dataset = {
  datasets: [
    {
      label: "湿度と気温の散布図",
      data: data,
      backgroundColor: "rgba(255, 99, 132, 1)",
    },
  ],
};

const App = () => {
  return (
    <div>
      <h1>データの可視化</h1>
      <Scatter data={dataset} />
    </div>
  );
};

export default App;
