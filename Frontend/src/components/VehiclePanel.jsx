import React from 'react'

const VehiclePanel=(props)=>{
    return(
        <div>
            <h5 className='p-3 text-center w-[94%] absolute  top-0' onClick={()=>{
                   props.setVehiclePanel(false)
                }}><i className=" text-2xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
                
                <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>

                <div onClick={()=>{
                    props.setConfirmRidePanel(true)
                }} className='flex rounded-xl mb-2 active:border-green-500 border-3 p-3 w-full items-center justify-between'>
                    <img className='h-17' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                    <div className='w-1/2'>
                        <h4 className='font-medium text-base'>Car <span><i className="ri-user-3-fill"></i>4</span></h4>
                        <h5 className='font-medium text-sm'>10 mins away</h5>
                        <p className='font-medium text-xs text-gray-600'>Affordable, compact Rides</p>
                    </div>
                    <h2 className='text-lg font-semibold'>$395.30</h2>
                </div>

                <div onClick={()=>{
                    props.setConfirmRidePanel(true)
                }} className='flex rounded-xl mb-2 bg-gray-100 active:border-green-500 border-3 p-3 w-full items-center justify-between'>
                    <img className='h-17 ml-2' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                    <div className='w-1/2'>
                        <h4 className='font-medium text-base'>Auto <span><i className="ri-user-3-fill"></i>3</span></h4>
                        <h5 className='font-medium text-sm'>2 mins away</h5>
                        <p className='font-medium text-xs text-gray-600'>Affordable, compact Rides</p>
                    </div>
                    <h2 className='text-lg font-semibold'>$136.45</h2>
                </div>

                <div onClick={()=>{
                    props.setConfirmRidePanel(true)
                }} className='flex rounded-xl mb-2 active:border-green-500 border-3 p-3 w-full items-center justify-between'>
                    <img className='h-17' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="" />
                    <div className='w-1/2'>
                        <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                        <h5 className='font-medium text-sm'>5 mins away</h5>
                        <p className='font-medium text-xs text-gray-600'>Affordable, motorcycle Rides</p>
                    </div>
                    <h2 className='text-lg font-semibold'>$82.30</h2>
                </div>
        </div>
    )
}

export default VehiclePanel