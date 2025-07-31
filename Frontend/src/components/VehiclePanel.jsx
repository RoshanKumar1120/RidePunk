import React from 'react';

const VehiclePanel = (props) => {
  return (
    <div className="pt-5">
      <h5
        className="p-3 text-center w-[94%] absolute top-0"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className="text-2xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5 text-center">Choose a Vehicle</h3>

      {/* Car */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('car');
        }}
        className="flex rounded-xl mb-4 border-2 border-gray-300 active:border-green-500 p-3 w-full items-center justify-between cursor-pointer"
      >
        <img className="h-20" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="Car" />
        <div className="w-1/2 px-2">
          <h4 className="font-medium text-base">
            Car <span><i className="ri-user-3-fill"></i> 4</span>
          </h4>
          <h5 className="font-medium text-sm">10 mins away</h5>
          <p className="font-medium text-xs text-gray-600">Affordable, compact rides</p>
        </div>
        <h2 className="text-lg font-semibold">&#8377;{props.fare.car}</h2>
      </div>

      {/* Auto */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('auto');
        }}
        className="flex rounded-xl mb-4 border-2 border-gray-300 active:border-green-500 p-3 w-full items-center justify-between cursor-pointer bg-gray-50"
      >
        <img className="h-20 ml-2" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="Auto" />
        <div className="w-1/2 px-2">
          <h4 className="font-medium text-base">
            Auto <span><i className="ri-user-3-fill"></i> 3</span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-xs text-gray-600">Affordable auto rides</p>
        </div>
        <h2 className="text-lg font-semibold">&#8377;{props.fare.auto}</h2>
      </div>

      {/* Moto */}
      <div
        onClick={() => {
          props.setConfirmRidePanel(true);
          props.selectVehicle('moto');
        }}
        className="flex rounded-xl mb-4 border-2 border-gray-300 active:border-green-500 p-3 w-full items-center justify-between cursor-pointer"
      >
        <img className="h-20" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648177797/assets/fc/ddecaa-2eee-48fe-87f0-614aa7cee7d3/original/Uber_Moto_312x208_pixels_Mobile.png" alt="Moto" />
        <div className="w-1/2 px-2">
          <h4 className="font-medium text-base">
            Moto <span><i className="ri-user-3-fill"></i> 1</span>
          </h4>
          <h5 className="font-medium text-sm">5 mins away</h5>
          <p className="font-medium text-xs text-gray-600">Affordable motorcycle rides</p>
        </div>
        <h2 className="text-lg font-semibold">&#8377;{props.fare.moto}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
