import React, { useState } from 'react'
import { Link } from "react-router-dom";

const ConfirmRidePopUp=(props)=>{
const [ otp, setOtp ] = useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
    }

    return(
           <div>
      <h5
        className="p-1 text-center w-[94%] absolute top-0"
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Confirm This Ride To Start!!</h3>

      <div className="flex items-center justify-between p-2 bg-yellow-300">
        <div className="flex items-center gap-3">
          <img
            className="h-20 w-20 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
            alt=""
          />
          <h2 className="text-xl font-medium">Harsh Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                New Bridge Kurukshetra
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                New Bridge Kurukshetra
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">$193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>

        

       <div className="mt-6 w-full">
  <form onSubmit={()=>{
    submitHandler(e);
  }}>
    <input value={otp} onChange={(e)=>setOtp(e.target.value)} type="text" className='bg-[#eee] px-8 py-4 text-lg font-mono rounded-lg w-full mt-3' placeholder="Enter your OTP"/>
           <Link to='/captain-riding' className="w-full mt-5 flex justify-center bg-green-400  text-lg  text-white font-semibold p-2 rounded-lg">
          Confirm
        </Link>

         <button onClick={() => {
         props.setConfirmRidePopupPanel(false)
          props.setRidePopupPanel(false)

      }} className='mt-2 w-full bg-red-500 text-white text-lg font-semibold p-2 px-10 rounded-lg'>Cancel</button>
  </form>
       </div>
      </div>
    </div>
    )
}

export default ConfirmRidePopUp