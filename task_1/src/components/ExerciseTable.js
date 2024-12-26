// ExerciseTable.js
import React from 'react';
import { tableData } from '../utils/tableData';
import '../styles/table.css'

const ExerciseTable = () => {
  return (
    <section id="warmup-exercises" className='table-section' style={{ backgroundImage: `url(/images/backgroundImg2.jpg)` }}>
      <div className='table-data'>
        <h2>Warm-Up <span>Exercises</span></h2>
        <p>Here are some basic warm up exercises for you</p>
        <div className='table-wrapper'>
        <table className="exercise-table">
          <thead>
            <tr>
              <th>Exercise Name</th>
              <th>Difficulty Level</th>
              <th>Time</th>
              <th>Sets</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((exercise, index) => (
              <tr key={index}>
                <td>{exercise.name}</td>
                <td>{exercise.difficulty}</td>
                <td>{exercise.time}</td>
                <td>{exercise.sets}</td>
                <td>{exercise.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
        
    </section>
  );
};

export default ExerciseTable;