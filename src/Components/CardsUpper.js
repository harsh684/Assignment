import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons'

function CardsUpper() {
  return (
    <div>
      <div className=' d-flex flex-column flex-md-row align-items-center gap-2 gap-md-4 justify-content-center px-2 px-md-5'>
        <div className='card-cust d-flex shadow py-2 py-md-4 rounded-4'>
            <img className='card-img m-0' src='https://img.freepik.com/free-vector/green-background-money-bag-with-coins_23-2147630023.jpg'/>
            <div className='col-md-6 my-auto m-0 p-0 text-start'>
                <p className='card-text p-0 my-1 text-black-50'>Earning</p>
                <h5 className='card-amount p-0 mb-1'>$198k</h5>
                <p className='card-text fw-semibold'><span className='text-success fw-bold'><FontAwesomeIcon icon={faArrowUp} style={{color: "#00b30c",}} />137.8%</span> this month</p>
            </div>
        </div>
        <div className='card-cust d-none d-md-flex shadow py-2 py-md-4 rounded-4'>
            <img className='card-img m-0' src='https://img.freepik.com/free-vector/green-background-money-bag-with-coins_23-2147630023.jpg'/>
            <div className='col-md-6 my-auto m-0 p-0 text-start'>
                <p className='card-text p-0 my-1 text-black-50'>Orders</p>
                <h5 className='card-amount p-0 mb-1'>$2.4k</h5>
                <p className='card-text fw-semibold'><span className='text-danger fw-bold'><FontAwesomeIcon icon={faArrowDown} style={{color: "red",}} />2%</span> this month</p>
            </div>
        </div>
        <div className='card-cust d-none d-md-flex shadow py-2 py-md-4 rounded-4'>
            <img className='card-img m-0' src='https://img.freepik.com/free-vector/green-background-money-bag-with-coins_23-2147630023.jpg'/>
            <div className='col-md-6 my-auto m-0 p-0 text-start'>
                <p className='card-text p-0 my-1 text-black-50'>Balance</p>
                <h5 className='card-amount p-0 mb-1'>$2.4k</h5>
                <p className='card-text fw-semibold'><span className='text-danger fw-bold'><FontAwesomeIcon icon={faArrowDown} style={{color: "red",}} />2%</span> this month</p>
            </div>
        </div>
        <div className='card-cust d-none d-md-flex shadow py-2 py-md-4 rounded-4'>
            <img className='card-img m-0' src='https://img.freepik.com/free-vector/green-background-money-bag-with-coins_23-2147630023.jpg'/>
            <div className='col-md-6 my-auto text-start'>
                <p className='card-text my-1 text-black-50'>Total Sales</p>
                <h5 className='card-amount p-0 mb-1'>89k</h5>
                <p className='card-text fw-semibold'><span className='text-success fw-bold'><FontAwesomeIcon icon={faArrowUp} style={{color: "#00b30c",}} />11%</span> this month</p>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default CardsUpper
