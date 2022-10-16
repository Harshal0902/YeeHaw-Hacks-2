import React, { useState } from 'react'
import LoginImg from "../assets/login.svg"
import { account } from '../services/appwriteConfig'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const loginUser = async (e) => {
        e.preventDefault()
        try {
            await account.createEmailSession(user.email, user.password)
            navigate("/home")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="relative">

            <div className="z-10 mt-16 bg-tertiary md:h-96 md:w-96 md:mt-16 md:ml-44 rounded-3xl"></div>

            <div className="z-20 p-4 m-8 origin-bottom-right transform border-4 border-[#520606] lg:mx-56 md:mx-8 lg:-mt-80 rounded-2xl bg-[#FFCD52]">
                <div className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                    <div className="w-11/12 p-8 rounded-lg lg:-ml-4 sm:ml-16">
                        <img width="600px" height="400px" src={LoginImg} alt="img" />
                    </div>

                    <div className="md:flex md:flex-col md:justify-center lg:pr-16">

                        <h2 className="mb-4 text-[2.79rem] self-center font-bold tracking-wider text-white">
                            Conquer the West
                        </h2>

                        <div className="relative mt-4 outline-transparent outline">
                            <input type="email" name="email" placeholder=" " className="block w-full pb-2 pl-3 text-lg text-gray-200 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none" required onChange={(e) => {
                                setUser({
                                    ...user,
                                    email: e.target.value
                                })
                            }} />
                            <label className="absolute top-0 p-2 text-lg text-gray-200 duration-300 md:text-lg -z-1 origin-0">Email</label>
                        </div>

                        <div className="relative mt-8 outline-transparent outline">
                            <input type="password" name="password" placeholder=" " className="block w-full pb-2 pl-3 text-lg text-gray-200 placeholder-gray-400 bg-transparent border-b-2 border-gray-400 appearance-none rounded-xl focus:border-green-400 focus:outline-none" required onChange={(e) => {
                                setUser({
                                    ...user,
                                    password: e.target.value
                                })
                            }} />
                            <label className="absolute top-0 p-2 text-lg text-gray-200 duration-300 md:text-lg -z-1 origin-0">Password</label>
                        </div>

                        <div className="grid place-items-center w-full">
                            <button type="button" className="h-12 w-full px-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn my-6 bg-red-50 bg-gradient-to-r from-yellow-500 to-orange-500 hover:shadow-lg" onClick={loginUser}>Sign In</button>
                        </div>

                        <div className='flex justify-end text-white'>
                            Don't have an account? <a href="/signup" className="text-blue-500">Register</a>
                        </div>

                    </div>
                </div>
            </div>

            <div className="z-10 float-right w-40 h-40 mr-48 -mt-40 bg-tertiary rounded-3xl md:block hidden"></div>

        </div>
    )
}

export default Login
