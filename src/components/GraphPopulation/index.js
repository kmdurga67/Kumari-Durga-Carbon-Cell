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
          throw new Error('Error while fetching data');
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
        font: {
          size: 40
      }
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Nation',
          font: {
            size: 30
        }
        },
      },
      y: {
        title: {
          display: true,
          text: 'Population',
          font: {
            size: 30
        }
        },
      },
    },
  };  

  const chartStyle = {
    height: "500px",
    width: "950px",
    margin: "0 auto", 
    backgroundColor:"black",
  };

  return (
    <div style={chartStyle} className="graph">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default GraphPopulation;
