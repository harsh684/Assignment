import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox,faDolly,faIdBadge,faMessage,faPercent,faMoneyBills,faDiamond } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className='d-flex gap-3 mt-3 mb-4'>
        <h3><FontAwesomeIcon className='ms-4' icon={faDiamond} style={{color: "#ffffff",}} /></h3>
        <h3 className='text-white'>Dashboard</h3>
        </div>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link" href="#">
          <FontAwesomeIcon className='me-2' icon={faBox} style={{color: "#ffffff",}} />
            Dashboard 
          </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">
            <FontAwesomeIcon className='me-2' icon={faDolly} style={{color: "#fafafa",}} />
                Product &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                >
            </a>
        </li>
        <li className="nav-item ">
            <a className="nav-link" href="#">
            <FontAwesomeIcon className='me-2' icon={faIdBadge} style={{color: "#ffffff",}} />
                Customers &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;>
            </a>
        </li>
        <li className="nav-item ">
            <a className="nav-link" href="#">
                <FontAwesomeIcon className='me-2' icon={faMoneyBills} style={{color: "#ffffff",}} />
                Income &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;>
            </a>
        </li>
        <li className="nav-item ">
            <a className="nav-link" href="#">
                <FontAwesomeIcon className='me-2' icon={faPercent} style={{color: "#fcfcfc",}} />
                Promote &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;>
            </a>
        </li>
        <li className="nav-item ">
            <a className="nav-link" href="#">
            <FontAwesomeIcon className='me-2' icon={faMessage} style={{color: "#ffffff",}} />
                Help &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;>
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
