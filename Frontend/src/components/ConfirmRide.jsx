// Updated VehiclePanel.js (minor class fix and role consistency)
// ConfirmRide.js now uses `setConfirmRidePanel(false)` *before* setting `setVehicleFound(true)`
// Home.jsx: conditional rendering of <LookingForDriver /> based on `vehicleFound`

// --- Updated ConfirmRide.js ---
import React from 'react';

const ConfirmRide = (props) => {
    return (
        <div>
            <h5
                className='p-1 text-center w-[94%] absolute top-0'
                onClick={() => {
                    props.setConfirmRidePanel(false);
                }}
            >
                <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
            </h5>

            <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>

            <div className='flex flex-col gap-2 justify-between items-center'>
                <img
                    className='h-40 mx-auto'
                    src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
                    alt=""
                />

                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.pickup}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1 text-gray-600'>{props.destination}</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>&#8377;{props.fare[props.vehicleType]}</h3>
                            <p className='text-sm -mt-1 text-gray-600'>Cash</p>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => {
                        props.setConfirmRidePanel(false);
                        setTimeout(() => {
                            props.setVehicleFound(true);
                        }, 300); // slight delay to allow animation
                        props.createRide();
                    }}
                    className='w-full mt-5 bg-green-400 text-white font-semibold p-2 rounded-lg'
                >
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default ConfirmRide;
