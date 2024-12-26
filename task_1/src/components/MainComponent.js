import React from 'react'
import '../styles/mainComponent.css';
import Overlay from './Main/Overlay';
import Info from './Main/Info';

function MainComponent() {
  return (
    <div className='main-container'>
    <Overlay />
    <Info />
    <video className='main-video' autoPlay muted loop>
        <source src='/images/bgVideo.mp4' type='video/mp4' />
    </video>
    </div>
  )
}

export default MainComponent