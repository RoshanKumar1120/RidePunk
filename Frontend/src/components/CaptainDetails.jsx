import React, { useContext } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';


const CaptainDetails=()=>{
  const {captain} = useContext(CaptainDataContext)
    if (!captain) {
    return <div>Loading...</div>; // or some placeholder
  }
    return(
        <div>
             <div className="h-2/5 p-4 flex flex-col justify-between pb-6">
          {/* Profile and Earnings */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <img
                className="h-20 w-20 rounded-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAp3Z1hXfTVTKtbw3vE75-rtfr1ZCFcPSw4A&s"
                alt="Driver"
              />
              <h4 className="text-lg font-medium capitalize">{captain.fullname.firstname+" "+captain.fullname.lastname}</h4>
            </div>
            <div className="text-right">
              <h4 className="text-xl font-semibold">$205.30</h4>
              <p className="text-medium text-green-600">Earned</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex p-3 bg-gray-100 rounded-xl mt-8 justify-center gap-20 items-start mb-6">
            <div className='text-center'>
              <i className="text-3xl mb-2 font-thin ri-timer-line"></i>
              <h5 className="text-lg font-medium">10.2</h5>
              <p className="text-sm text-gray-600">Hours</p>
            </div>
            <div className='text-center'>
              <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
              <h5 className="text-lg font-medium">52 km</h5>
              <p className="text-sm text-gray-600">Distance</p>
            </div>
            <div className='text-center'>
              <i className="text-3xl  mb-2 font-thin ri-booklet-line"></i>
              <h5 className="text-lg font-medium">23</h5>
              <p className="text-sm text-gray-600">Trips</p>
            </div>
          </div>
        </div>
        </div>
    )
}

export default CaptainDetails