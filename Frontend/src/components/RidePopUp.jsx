import React from "react";

const RidePopUp = (props) => {

  return (
    <div>
      <h5
        className="p-1 text-center w-[94%] absolute top-0"
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">New Ride For You!!</h3>

      <div className="flex items-center justify-between p-2 bg-yellow-300">
        <div className="flex items-center gap-3">
          <img
            className="h-20 w-20 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
            alt=""
          />
          <h2 className="text-xl font-medium">{props.ride?.user.fullname.firstname+" "+props.ride?.user.fullname.lastname}</h2>
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
               {props.ride?.pickup}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
               {props.ride?.destination}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">&#8377;{props.ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="flex mt-5 w-full items-center justify-between">
              <button onClick={() => {
         props.setRidePopupPanel(false)
        }} 
         className='mt-2  bg-red-400 text-gray-700 font-semibold px-10 p-3 rounded-lg'>Ignore</button>
        
        <button onClick={() => {
            props.setConfirmRidePopupPanel(true)
            props. confirmRide()
          }}
          className=" mt-5 bg-green-400 text-white font-semibold px-10 p-3 rounded-lg">
          Accept
        </button>

       
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
