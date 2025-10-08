import React, { useState } from 'react'
import FlightSearchCard from './FlightSearchCard'
import FlightDetailCard from './FlightDetailCard'
import FlightDetailSlider from './FlightDetailSlider'
import axios from 'axios'
import search_flight from './../assets/searchflights.jpeg'
import FilterSection from './FilterSection'

const Main = () => {

  const [userData, setUserData] = useState({
    from: '',
    to: '',
    date: '',
    cabin_class:'',
    airline:'',
    min_price:""
  }) 


  const [flights, setFlights] = useState([]);     
  const [loading, setLoading] = useState(true);
  const [singleData, setSingleData] = useState();
  const [loadingImg, setLoadingImg] = useState(true);

  const getApiData = async () => {
    try {
      const response = await axios(`http://localhost:3000/api/flights?from=${userData.from}&to=${userData.to}&date=${userData.date}`);

      if (response.data && response.data.length > 0) {
        setFlights(response.data);
        setSingleData(response.data[0]);
        setLoading(false);
        setLoadingImg(true);
      } else {
        setLoading(true)
        setLoadingImg(false);
      }

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setUserData({
      ...userData,
      [name]: value
    })
  }


  return (
    <div className='row'>
      <div className='col-md-8 col-lg-8 col-xl-8 col-sm-12'>

        <FlightSearchCard getData={getApiData} handleChanges={handleChange} from={userData.from} to={userData.to} date={userData.date}/>

        {
          loading ? <>
            {/* <img src={search_flight} alt="" /> */}
            <h1>Search a Flight</h1>
          </> :
            <div className='my-3'>
              {
                !loadingImg ? <h1></h1> : <>

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



        }

        {

          !loadingImg ? <h1 className='not-found'>Not Found</h1> : <>
            <FlightDetailSlider>
              {
                flights.map((flight, id) => {
                  return (
                    <FlightDetailCard flight={flight} key={id} />
                  )
                })
              }
            </FlightDetailSlider>
          </>
        }
      </div>
      <div className='col-md-4 col-lg-4 col-xl-4 col-sm-12'>
        <FilterSection />
      </div>
    </div>
  )
}

export default Main