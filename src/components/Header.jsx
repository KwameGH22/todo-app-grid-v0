import React from 'react';
import { FaMoon } from "react-icons/fa";


const Header = () => {
  return (
    <div>
       <div className='header'>
          <h3 className='header-text'>TODO</h3>
          <FaMoon style={{color: 'white'}}/>
        </div>
        
    </div>
  )
}

export default Header
