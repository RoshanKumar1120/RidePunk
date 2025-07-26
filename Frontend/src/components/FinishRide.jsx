import React from "react";
import { Link } from "react-router-dom";

const FinishRide=(props)=>{
    return(
                <div>
      <h5
        className="p-1 text-center w-[94%] absolute top-0"
        onClick={() => {
          props.setFinishRidePanel(false);
        }}
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Finish This Ride To Start!!</h3>

      <div className="flex items-center justify-between p-4 border-2 border-yellow-400">
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
            <Link to='/captain-home' className="w-full mt-5 flex justify-center bg-green-400 text-white font-semibold p-2 rounded-lg">
            Finish Ride
            </Link>      
       <p className="mt-10 text-medium text-center w-full flex justify-center">
        Click on finish ride if you have completed the payment by customer!</p>

       </div>
      </div>
    </div>
    )
}

export default FinishRide