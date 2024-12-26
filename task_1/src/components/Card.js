import React from 'react'
import '../styles/card.css'

function Card({image, title, workout}) {
  return (
        <div className='card'>
            <img src={image} alt={title} />
            <div className='card-btns'>
                {workout.map((part, subIndex) => (
                    <button  key={subIndex}>{part}</button>
                ))}
            </div>
            <p>{title}</p>
        </div>
    
  )
}

export default Card