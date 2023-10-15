import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
function Header() {
  return (

    <div className='container-fluid m-0 p-0'>
      <div className='d-flex flex-column flex-md-row justify-content-md-between justify-content-center container-fluid m-0 p-0 px-2 py-3 py-md-4 px-md-5'>
        <div className='header-name m-1 d-flex align-items-center fw-bold'><span>Hello Shahrukh</span><p className='my-auto'>👋,</p></div>
        <div className='search-bar rounded-3 shadow p-1 my-1 px-md-4 py-md-2 d-flex align-items-center'>
          <FontAwesomeIcon className='px-1' icon={faMagnifyingGlass} style={{color: "#a3a3a3",}} /><input className='border-0 w-100 bg-transparent' placeholder='Search'/>
        </div>
    </div>
    </div>
  )
}

export default Header
