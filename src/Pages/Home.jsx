import React from 'react'
import SideBar from '../Component/SideBar'
import Main from '../Component/Main'

const Home = () => {
  return (
    <div>
      {/* sidebar */}

      <div className='d-flex gap-3'>
        <SideBar /> 

        <div className="main-container">
          <Main />
        </div>

      </div>


      {/* main */}

      {/* filter */}
    </div>
  )
}

export default Home