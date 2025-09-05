import React from 'react'
import FlightSearchCard from './FlightSearchCard'
import FlightDetailCard from './FlightDetailCard'
import FlightDetailSlider from './FlightDetailSlider'
import axios from 'axios'

const Main = () => {

  const getApiData = async (from,to,date) => {
    const response = await axios(`http://localhost:3000/api/flights?from=${from}&to=${to}&date=${date}`);
    console.log(response.data);         
  }



  return (
    <div className='row'>
      <div className='col-md-8 col-lg-8 col-xl-8 col-sm-12'>

        <FlightSearchCard getData={getApiData} />
        <div className='my-3'>
          <div className='d-flex align-items-center justify-content-between gap-3'>
            <div>
              <p className='mb-1'>From</p>
              <h4 className='mb-1'>Coimbatore</h4>
              <p className='mb-1'>CCA</p>
            </div>
            <hr className='flex-fill' style={{ borderStyle: 'dashed' }} />
            <div className='text-end'>
              <p className='mb-1'>To</p>
              <h4 className='mb-1'>NYC</h4>
              <p className='mb-1'>NYC Airport</p>
            </div>
          </div>
        </div>


        <div>

          <FlightDetailSlider />
        </div> 
      </div>

    </div>
  )
}

export default Main