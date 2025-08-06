import { useGSAP } from '@gsap/react';
import axios from 'axios';
import gsap from 'gsap';
import { useRef, useState,useEffect } from 'react';
import 'remixicon/fonts/remixicon.css';

import ConfirmRide from '../components/ConfirmRide';
import LocationSearchPanel from '../components/LocationSearchPanel';
import LookingForDriver from '../components/LookingForDriver';
import VehiclePanel from '../components/VehiclePanel';
import WaitingForDriver from '../components/WaitingForDriver';
import { SocketContext } from '../context/SocketContext';
import { useContext } from 'react';
import { UserDataContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import LiveTracking from '../components/LiveTracking';

const Home = () => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const [vehiclePanel, setVehiclePanel] = useState(false);
    const [activeField, setActiveField] = useState('');
    const [ConfirmRidePanel, setConfirmRidePanel] = useState(false);
    const [vehicleFound, setVehicleFound] = useState(false);
    const [waitingForDriver, setWaitingForDriver] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [loadingSuggestions, setLoadingSuggestions] = useState(false);
    const [fare, setFare] = useState({})
    const [vehicleType, setVehicleType] = useState(null)
    const [ ride, setRide ] = useState(null)

    const panelRef = useRef(null);
    const panelCloseRef = useRef(null);
    const vehiclePanelRef = useRef(null);
    const ConfirmRidePanelRef = useRef(null);
    const vehicleFoundRef = useRef(null);
    const waitingForDriverRef = useRef(null);

       const navigate = useNavigate()
   
    
    const submitHandler = (e) => {
       e.preventDefault();
   };
    const { socket } = useContext(SocketContext)
    const { user } = useContext(UserDataContext)

    useEffect(() => {
        socket.emit("join", { userType: "user", userId: user._id })
    }, [ user ])

     socket.on('ride-confirmed', ride => {

        setVehicleFound(false)
        setWaitingForDriver(true)
        setRide(ride)
    })
    socket.on('ride-started', ride => {
        setWaitingForDriver(false)
        navigate('/riding',{ state: { ride } }) // Updated navigate to include ride data
    })

    // Fetch suggestions from backend
    const fetchSuggestions = async (input) => {
        if (!input || input.length < 2) {
            setSuggestions([]);
            return;
        }
        setLoadingSuggestions(true);
        try {
            const res = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
                {
                    params: { input: input },
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }

                }
            );
            setSuggestions(res.data || []);
        } catch (err) {
            setSuggestions([]);
        } finally {
            setLoadingSuggestions(false);
        }
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

    const findVehicle = async () => {
        setVehiclePanel(true);
        setPanelOpen(false);

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
            params: { pickup, destination },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })


        setFare(response.data)


    }
    const createRide = async () => {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
            pickup,
            destination,
            vehicleType
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(response.data)

    }

    return (
        <div className='h-screen relative overflow-hidden'>
            {/* Logo */}
            {/* <img
                className='w-16 absolute left-5 top-5'
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                alt="Uber Logo"
            /> */}

            {/* Background */}
            <div className="h-full w-full">
                <img
                    className="h-full w-full object-cover"
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt="Background"
                />
                {/* <LiveTracking/> */}
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
                                fetchSuggestions(pickup);
                            }}
                            value={pickup}
                            onChange={(e) => {
                                setPickup(e.target.value);
                                setActiveField('pickup');
                                fetchSuggestions(e.target.value);
                            }}
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full'
                            type="text"
                            placeholder='Add a pick-up location'
                            autoComplete="off"
                        />
                        <input
                            onClick={() => {
                                setPanelOpen(true);
                                setActiveField('destination');
                                fetchSuggestions(destination);
                            }}
                            value={destination}
                            onChange={(e) => {
                                setDestination(e.target.value);
                                setActiveField('destination');
                                fetchSuggestions(e.target.value);
                            }}
                            className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
                            type="text"
                            placeholder='Enter your destination'
                            autoComplete="off"
                        />
                    </form>
                    <button
                        onClick={findVehicle}
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
                        suggestions={suggestions}
                        loading={loadingSuggestions}
                        activeField={activeField}
                        setPickup={setPickup}
                        setDestination={setDestination}
                        setSuggestions={setSuggestions}
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
                    fare={fare}
                    selectVehicle={setVehicleType}
                />
            </div>

            {ConfirmRidePanel && (
                <div
                    ref={ConfirmRidePanelRef}
                    className="fixed w-full z-10 bg-white bottom-0 px-3 py-8"
                >
                    <ConfirmRide
                        createRide={createRide}
                        pickup={pickup}
                        destination={destination}
                        fare={fare}
                        vehicleType={vehicleType}
                        setVehiclePanel={setVehiclePanel}
                        setConfirmRidePanel={setConfirmRidePanel}
                        setVehicleFound={setVehicleFound}
                    />
                </div>
            )}


            {vehicleFound && (
                <div
                    ref={vehicleFoundRef}
                    className='fixed w-full z-30 bg-white bottom-0 px-3 py-8'
                >
                    <LookingForDriver
                        createRide={createRide}
                        pickup={pickup}
                        destination={destination}
                        fare={fare}
                        vehicleType={vehicleType}
                        setVehicleFound={setVehicleFound}
                        setWaitingForDriver={setWaitingForDriver}
                    />
                </div>
            )}

            {waitingForDriver && (
                <div
                    ref={waitingForDriverRef}
                    className='fixed w-full z-40 bg-white bottom-0 px-3 py-8'
                >
                    <WaitingForDriver
                    
                    ride={ride}
                    setVehicleFound={setVehicleFound}
                    setWaitingForDriver={setWaitingForDriver} 
                    waitingForDriver={waitingForDriver}                    
                    />
                </div>
            )}
        </div>
    );
};

export default Home;
