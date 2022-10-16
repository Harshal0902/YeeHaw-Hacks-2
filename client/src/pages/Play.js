import React from 'react'
import { HiX } from "react-icons/hi";
import io from 'socket.io-client';
import { Link, useNavigate } from 'react-router-dom';

const Play = ({ username, }) => {

    const navigate = useNavigate();

    const [showNavbar, setShowNavbar] = React.useState(false);
    const [room, setRoom] = React.useState('');
    const socket = io.connect('http://localhost:4000');

    const joinRoom = () => {
        if (room !== '' && username !== '') {
            socket.emit('join_room', { username, room });
        }
        navigate('/room', { replace: true });
    };


    return (
        <div>
            <div className='grid place-items-center py-6'>
                <h1 className='text-5xl font-bold text-white'>Play Quest</h1>
                <div className='h-1 w-56 bg-secondary my-2'></div>
            </div>

            <div className="flex flex-wrap flex-col-2 justify-around w-full px-16">

                <div className="m-8">
                    <div className="w-[18rem] h-[18rem] cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg" onClick={() => setShowNavbar(true)}>
                        <div className="grid place-content-center text-4xl text-center items-center align-middle h-full font-semibold text-white">Create/Join Room</div>
                    </div>
                </div>
                {showNavbar ? (
                    <div>
                        <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none items-center justify-center w-screen">
                            <div className="relative my-6 mx-auto w-screen">
                                <div className="ml-[25rem] border-0   shadow-lg relative flex flex-col w-128 bg-yellow-300 outline-none focus:outline-none ">
                                    <div className="flex items-start justify-between p-5 border-solid rounded-t">
                                        <div>
                                            <div className="text-2xl tracking-wide cursor-pointer font-[900]">
                                                Join Room
                                            </div>
                                        </div>

                                        <button
                                            className="absolute right-6"
                                            onClick={() => setShowNavbar(false)}
                                            aria-hidden="false"
                                            aria-label="button"
                                        >
                                            <HiX
                                                className="h-7 w-7 text-white"
                                                aria-hidden="false"
                                            />
                                        </button>
                                    </div>

                                    <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4">

                                        <div className="py-2">
                                            <input
                                                className="w-96 p-2 active:border-none checked:border-none rounded-md text-xl"
                                                placeholder="Enter room id"
                                            />
                                        </div>

                                        <button className="bg-[#e17059] text-white py-2 px-8 rounded-md ml-2" onClick={joinRoom}>
                                            Join Room
                                        </button>

                                        <div className="grid justify-center">
                                            <div className="inline-flex w-64 h-1 bg-orange-400 rounded-full"></div>
                                        </div>

                                        <div className="py-2">
                                            <input
                                                className="w-96 p-2 active:border-none checked:border-none rounded-md text-xl"
                                                placeholder="Name of the room"
                                            />
                                        </div>

                                        <button className="bg-[#e17059] text-white py-2 px-8 rounded-md ml-2" onClick={joinRoom}>
                                            Create Room
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
                    </div>
                ) : null}

                <div className="m-8">
                    <Link to="/play_game">
                        <div className="w-[18rem] h-[18rem] cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-secondary rounded-lg">
                            <div className="grid place-content-center text-4xl text-center items-center align-middle h-full font-semibold text-white">Play Solo</div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Play;
