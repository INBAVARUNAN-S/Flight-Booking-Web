import React, { useState } from 'react'
import FlightSearchCard from './FlightSearchCard'
import FlightDetailCard from './FlightDetailCard'
import FlightDetailSlider from './FlightDetailSlider'
import axios from 'axios'

const Main = () => { 

  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [singleData, setSingleData] = useState(); 

  const getApiData = async (from, to, date) => {
    try{
      const response = await axios(`http://localhost:3000/api/flights?from=${from}&to=${to}&date=${date}`);
  
      if (response.data && response.data.length > 0) {
        setFlights(response.data); 
        setSingleData(response.data[0]); 
        setLoading(false);
      } else {
        setLoading(true)
      }

    }catch(err){
      console.log(err);
    }finally{
      setLoading(false);
    }
  }

  return (
    <div className='row'> 
      <div className='col-md-8 col-lg-8 col-xl-8 col-sm-12'>

        <FlightSearchCard getData={getApiData} /> 

        {
          loading 
        }

        
        <div className='my-3'>
          {
            loading ? <h1>Loading...</h1> : <>

              <div className='d-flex align-items-center justify-content-between gap-3'>

                <div>
                  <p className='mb-1'>From</p>
                  <h4 className='mb-1'>{singleData.departure.city}</h4>
                  <p className='mb-1'>{singleData.departure.airport}</p>
                </div>
                <hr className='flex-fill' style={{ borderStyle: 'dashed' }} /> 
                <div className='text-end'>
                  <p className='mb-1'>To</p>
                  <h4 className='mb-1'>{singleData.arrival.city}</h4> 
                  <p className='mb-1'>{singleData.arrival.airport}</p>
                </div>

              </div>
            </>
          }
        </div>

        {

              loading ? <h1>Loading...</h1> : <>
                <FlightDetailSlider>
                  {
                    flights.map((flight,id) => {
                      return(
                        <FlightDetailCard flight={flight} key={id}/>     
                      ) 
                    })
                  }
                </FlightDetailSlider>
              </>
        }

        <div>

          {/* <FlightDetailSlider /> */}
        </div>
      </div>

    </div>
  )
}

export default Main