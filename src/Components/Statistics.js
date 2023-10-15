import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import StatisticsData from './StatisticsData'
import './Statistics.css'

function Statistics() {
  return (
    <div className='container-fluid d-flex flex-column flex-md-row mx-md-4 gap-4 gap-md-2 my-4 ps-md-4 pe-md-5 my-md-4'>
        <div className='col-md-8 bg-white py-4 px-md-4 py-md-3 shadow rounded-3'>
            <div className='d-flex align-items-center justify-content-center justify-content-md-between'>
                <h5 className='fw-bold text-center text-md-start'>Overview</h5>
                <div class="dropdown mx-md-3 ps-md-1 d-none d-md-block">
                        <button
                        class="btn d-none d-md-block d-flex text-black-50 dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                            Quarterly
                        </button>
                </div>
                {/*  */}
            </div>
            <p className='text-black-50 text-center text-md-start'>Monthly Earning</p>
            <div className='d-flex gap-4 justify-content-center w-100'>
                {StatisticsData.map((item,index)=>
                    <div key={index} className={item.contClass}>
                        <div className={item.barClass}></div>
                        <p className={item.pClass}>{item.ptext}</p>
                    </div>
                )}
            </div>
        </div>
        <div className=' container-fluid py-3 text-center px-md-4 mx-md-4 shadow rounded-3'>
            
                <h5 className='fw-bold text-center text-md-start'>Customers</h5>
                <p className='text-black-50 text-center text-md-start'>Customers that buy products</p>
                <img className='customers-img' src='https://cdn.vectorstock.com/i/preview-1x/32/38/taxation-type-percentage-circle-infographic-vector-44983238.jpg'/>
        </div>
    </div>
  )
}

export default Statistics
