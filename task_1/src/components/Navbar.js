import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Sidebar from './Sidebar';
import '../styles/navbar.css'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

 const toggleSidebar = ()=> {
  setSidebar(!sidebar);
 }

 const closeSidebar = () => {
  setSidebar(false);
};

  return (
    <div className='header_wrapper'>
      <nav className='navbar'>
        <div className='nav-title'>
          <h2>FIT <span>PULSE</span></h2>
        </div>
        <div className='nav-icon'>
          {sidebar ? <FaTimes onClick={toggleSidebar}/> : <FaBars onClick={toggleSidebar} />}
          {sidebar && <Sidebar closeSidebar={closeSidebar}/>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
