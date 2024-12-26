import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import MainComponent from './components/MainComponent'
import CardsSection from './components/CardsSection'
import ExerciseTable from './components/ExerciseTable'
import PieChartsSection from './components/PieChartSection'
import Form from './components/Form'
import Footer from './components/Footer'

function App() {
  
  return (
    <div className='App'>
      <Navbar />
      <MainComponent />
      <CardsSection />
      <ExerciseTable />
      <PieChartsSection />
      <Form />
      <Footer />
    </div>
  )
}

export default App