import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {graphPopulationAPI} from "../../utils/apis"
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const GraphPopulation = () => {      
  const chartRef = useRef(null);
  const [apiData, setApiData] = useState([]);
  const [nation, setNation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(graphPopulationAPI);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        const populationData = json?.data?.map(item => item.Population) || []; 
        const nationData = json?.data?.map(item => item.Nation) || [];
        setNation(nationData);
        setApiData(populationData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: nation,
    datasets: [
      {
        label: "Population Graph",
        data: apiData,
        lineTension: 0.1,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
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
    scales: {
      x: {
        title: {
          display: true,
          text: 'Nation',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Population',
        },
      },
    },
  };  

  const chartStyle = {
    height: "400px",
    width: "700px",
    margin: "0 auto", 
  };

  return (
    <div style={chartStyle}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default GraphPopulation;
