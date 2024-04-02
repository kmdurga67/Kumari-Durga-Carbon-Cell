import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const GraphPopulation = () => {      
  const chartRef = useRef(null);
  const [apiData, setApiData] = useState(null || []);

  useEffect(() => {
    const fetchData = async () => {
        const data = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
        const json = await data.json();
        const populationData = json?.data.map(item => item.Population); 
        setApiData(populationData);
    }

    fetchData();
  },[])

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat","Sun"],
    datasets: [
      {
        label: "Population Graph",
        data: apiData || [],
        lineTension: 0.1,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    height:"800px",
    width:"700px",
    marginLeft:"120px"
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Population Vs Nation',
      },
    },
  };

  return (
    <div style={styles}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default GraphPopulation;
