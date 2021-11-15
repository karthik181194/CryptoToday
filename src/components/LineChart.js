import React from 'react';
import { Line } from 'react-chartjs-2';


const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#3b82f6',
        borderColor: '#3b82f6',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="border-solid border rounded shadow  p-3 border-gray-200 mt-5 mr-3 bg-white">
      <div className="chart-header flex justify-between">
        <p className="chart-title text-sm">{coinName} Price Chart </p>
        <div className="price-container flex">
          <p className="price-change text-sm mr-3">Change: {coinHistory?.data?.change}%</p>
          <p className="current-price text-sm">Current Price: $ {currentPrice}</p>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;