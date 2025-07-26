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
    const [ConfirmRidePanel, setConfirmRidePanel] = useState(false);
    const [vehicleFound, setVehicleFound] = useState(false);
    const [waitingForDriver, setWaitingForDriver] = useState(false);

    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const vehiclePanelRef = useRef(null);
    const ConfirmRidePanelRef = useRef(null);
    const vehicleFoundRef = useRef(null);
    const waitingForDriverRef = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
    };

    // Animate location search panel
    useGSAP(() => {
        gsap.to(panelRef.current, {
            height: panelOpen ? '70%' : '0%',
            padding: panelOpen ? 24 : 0
        });
        gsap.to(panelCloseRef.current, {
            opacity: panelOpen ? 1 : 0
        });
    }, [panelOpen]);

    // Animate vehicle panel
    useGSAP(() => {
        gsap.to(vehiclePanelRef.current, {
            transform: vehiclePanel ? 'translateY(0)' : 'translateY(100%)'
        });
    }, [vehiclePanel]);

    // Animate confirm ride panel
    useGSAP(() => {
        gsap.to(ConfirmRidePanelRef.current, {
            transform: ConfirmRidePanel ? 'translateY(0)' : 'translateY(100%)'
        });
    }, [ConfirmRidePanel]);

    // Animate looking for driver
    useGSAP(() => {
        gsap.to(vehicleFoundRef.current, {
            transform: vehicleFound ? 'translateY(0)' : 'translateY(100%)'
        });
    }, [vehicleFound]);

    // Animate waiting for driver
    useGSAP(() => {
        gsap.to(waitingForDriverRef.current, {
            transform: waitingForDriver ? 'translateY(0)' : 'translateY(100%)'
        });
    }, [waitingForDriver]);

    return (
        <div className='h-screen relative overflow-hidden'>
            {/* Logo */}
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

            {/* Form and top panel */}
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
                        onClick={() => setVehiclePanel(true)}
                        className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'
                    >
                        Find Trip
                    </button>
                </div>

                {/* Location Search Panel */}
                <div ref={panelRef} className='bg-white h-0'>
                    <LocationSearchPanel
                        setPanelOpen={setPanelOpen}
                        setVehiclePanel={setVehiclePanel}
                    />
                </div>
            </div>

            {/* Bottom Panels */}
            <div
                ref={vehiclePanelRef}
                className='fixed w-full z-10 bg-white bottom-0 px-3 py-8'
            >
                <VehiclePanel
                    setConfirmRidePanel={setConfirmRidePanel}
                    setVehiclePanel={setVehiclePanel}
                />
            </div>

            <div
                ref={ConfirmRidePanelRef}
                className='fixed w-full z-10 bg-white bottom-0 px-3 py-8'
            >
                <ConfirmRide
                    setConfirmRidePanel={setConfirmRidePanel}
                    setVehicleFound={setVehicleFound}
                />
            </div>

            <div
                ref={vehicleFoundRef}
                className='fixed w-full z-20 bottom-0 bg-white px-3 py-8'
            >
                <LookingForDriver
                    setVehicleFound={setVehicleFound}
                    setWaitingForDriver={setWaitingForDriver}
                />
            </div>

            <div
                ref={waitingForDriverRef}
                className='fixed w-full z-30 bottom-0 bg-white px-3 py-8'
            >
                <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
            </div>
        </div>
    );
};

export default Home;
