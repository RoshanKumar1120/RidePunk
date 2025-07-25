import React, { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const [vehiclePanel, setVehiclePanel] = useState(false);
    const [activeField, setActiveField] = useState('');
    const [ConfirmRidePanel,setConfirmRidePanel]=useState(false)
    const [vehicleFound,setVehicleFound]=useState(false)
    const [ waitingForDriver, setWaitingForDriver ] = useState(false)


    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const vehiclePanelRef = useRef(null);
    const ConfirmRidePanelRef=useRef(null);
    const vehicleFoundRef = useRef(null);
    const WaitingForDriverRef=useRef(null)

    const submitHandler = (e) => {
        e.preventDefault();
    };

    // Animate the location panel (top slide)
    useGSAP(() => {
        if (panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24,
                duration: 0.3,
                ease: 'power2.out'
            });

            gsap.to(panelCloseRef.current, {
                opacity: 1
            });
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0,
                duration: 0.3,
                ease: 'power2.inOut'
            });
            gsap.to(panelCloseRef.current, {
                opacity: 0
            });
        }
    }, [panelOpen]);

    // // Set initial off-screen position
    // useEffect(() => {
    //     gsap.set(vehiclePanelRef.current, { y: '100%' });
    // }, []);

    // Animate vehicle panel (bottom sheet)
    useGSAP(function(){
        if (vehiclePanel) {
            gsap.to(vehiclePanelRef.current, {
               transform:'translateY(0)'               
            })
        } else {
            gsap.to(vehiclePanelRef.current, {
               transform:'translate(100%)'
            })
        }
    }, [vehiclePanel]);

     useGSAP(function(){
        if (ConfirmRidePanel) {
            gsap.to(ConfirmRidePanelRef.current, {
               transform:'translateY(0)'               
            })
        } else {
            gsap.to(ConfirmRidePanelRef.current, {
               transform:'translate(100%)'
            })
        }
    }, [ConfirmRidePanel]);

     useGSAP(function(){
        if (vehicleFound) {
            gsap.to(vehicleFoundRef.current, {
               transform:'translateY(0)'               
            })
        } else {
            gsap.to(vehicleFoundRef.current, {
               transform:'translate(100%)'
            })
        }
    }, [vehicleFound]);

      useGSAP(function(){
        if (WaitingForDriver) {
            gsap.to(WaitingForDriverRef.current, {
               transform:'translateY(0)'               
            })
        } else {
            gsap.to(vehicleFoundRef.current, {
               transform:'translate(100%)'
            })
        }
    }, [WaitingForDriver]);

   

    return (
        <div className='h-screen relative overflow-hidden'>
            {/* Uber logo */}
            <img
                className='w-16 absolute left-5 top-5'
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                alt="Uber Logo"
            />

            {/* Background */}
            <div className="h-full w-full">
                <img
                    className="h-full w-full object-cover"
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt="Background"
                />
            </div>

            {/* Form & Panel */}
            <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
                <div className='h-[30%] p-6 bg-white relative'>
                    <h5
                        ref={panelCloseRef}
                        onClick={() => setPanelOpen(false)}
                        className='absolute opacity-0 right-6 top-6 text-2xl cursor-pointer'
                    >
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className='text-2xl font-semibold'>Find a trip</h4>
                    <form className='relative py-3' onSubmit={submitHandler}>
                        <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>

                        <input
                            onClick={() => {
                                setPanelOpen(true);
                                setActiveField('pickup');
                            }}
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
                            type="text"
                            placeholder='Add a pick-up location'
                        />
                        <input
                            onClick={() => {
                                setPanelOpen(true);
                                setActiveField('destination');
                            }}
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
                            type="text"
                            placeholder='Enter your destination'
                        />
                    </form>
                    <button
                        onClick={() => setVehiclePanel(true)} // Trigger open
                        className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'
                    >
                        Find Trip
                    </button>
                </div>

                {/* Search Panel */}
                <div ref={panelRef} className='bg-white h-0'>
                    <LocationSearchPanel  setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />
                </div>
            </div>

            {/* Vehicle Panel */}
            <div
                ref={vehiclePanelRef}
                className='fixed w-full z-10 bg-white bottom-0 px-3 py-8'
            >
                <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
            </div>

            <div
                ref={ConfirmRidePanelRef} className='fixed w-full z-10 bg-white bottom-0 px-3 py-8'> 
                <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
            </div>
            
            <div
                ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-8 '> 
                <LookingForDriver setVehicleFound={setVehicleFound}/>
            </div>

             <div ref={WaitingForDriverRef}
                 className='fixed w-full z-10 bottom-0 bg-white px-3 py-8 '> 
                <WaitingForDriver WaitingForDriver={WaitingForDriver} />
            </div>

        </div>
    );
};

export default Home;
