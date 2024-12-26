import React from 'react'
import { sidebarData } from '../utils/sidebarData'
import '../styles/navbar.css'

function Sidebar({closeSidebar}) {

  return (
    <div className='sidebar'>
      <ul>
        {sidebarData.map((menuItem, index) => (
          <li key={index} onClick={closeSidebar}>
            <a href={`#${menuItem.link}`}>
              <span>{menuItem.icon}</span>
              {menuItem.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar