import React from 'react';
import PieChart from './PieChart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../styles/piechart.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartsSection = () => {
  const chartData1 = {
    labels: ['Cardio', 'Flexibility', 'Strength'],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const chartData2 = {
    labels: ['Beginner', 'Intermediate', 'Advanced'],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const chartData3 = {
    labels: ['Upper Body', 'Lower Body', 'Core'],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const chartData4 = {
    labels: ['15 minutes', '30 minutes', '45 minutes'],
    datasets: [
      {
        data: [25, 50, 25],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <section className="pie-charts-section" id='statistics'>
        <h2>Here are graphical representation above exercises</h2>
            <div className="pie-charts-container">
                <PieChart data={chartData1} title="Exercise Types"/>
                <PieChart data={chartData2} title="Difficulty Levels" />
                <PieChart data={chartData3} title="Muscle Groups" />
                <PieChart data={chartData4} title="Workout Duration" />
            </div>
    </section>
  );
};

export default PieChartsSection;
