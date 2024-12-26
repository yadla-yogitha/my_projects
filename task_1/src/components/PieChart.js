import React from 'react';
import { Pie } from 'react-chartjs-2';
import '../styles/piechart.css'

const PieChart = ({ data, title }) => {
    
  return (
    <div className="pie-chart">
      <h3>{title}</h3>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
