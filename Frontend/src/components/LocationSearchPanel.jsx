import React from 'react'

const LocationSearchPanel=(Props)=>{
    console.log(Props)
    const location=[
        " H-11 Vivekanda Bhawan, B-Block ,NIT Kurukshetra,Haryana,133619",
        " Girivar Bhawan, C-Block ,NIT Raipur,Cg,135289",
        " Malhotra Sweets palace Near Bhopal , B-Block ,Twin bridge ,120025",
        " H-05  Ekalavya Bhawan, D-Block ,NIT Kurukshetra,Haryana,133619",
    ]

    return(
        <div>
            {/* this is a just a sample data */}

            {
                location.map(function(elem,idx){
                return  <div key={idx} onClick={()=>{
                    Props.setVehiclePanel(true)
                    Props.setPanelOpen(false)
                }} className='flex gap-4 border-2 border-black active:border-green-500 p-3 rounded-xl items-center my-2 justify-start'>
                <h2 className='bg-[#eee] h-9 w-12 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill "></i></h2>
                <h4 className='font-medium'>{elem}</h4>
            </div>
                })
            }          
           
        </div>
    )
}

export default LocationSearchPanel