import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLoginBtn } from '../utils/loginSlice';
import {UserName, password} from "../utils/constants"

const Login = () => {
    const [userNameUserEntered, setUserNameUserEntered] = useState([])
    console.log("Inside Login")
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch (toggleLoginBtn());
    };

    function getUserEnteredUsername (e){
        setUserNameUserEntered(e.target.value);
    }

    function handleLoginClick (e){
        console.log(e.target.value)
    }
    
    return (
        <div className="relative z-100"> 
                <div className='fixed inset-0 bg-opacity-10 backdrop-blur-xs  flex items-center justify-center'>
                    <div className='w-[600px] relative bg-gray-100 h-[300px] rounded-md shadow-lg'>
                        <div className='flex relative p-4'>
                            <h1 className="text-xl font-semibold">Login</h1>
                            <button onClick={handleClick} className='absolute right-2 top-2 text-gray-500 hover:text-gray-700'>
                                X
                            </button>
                        </div>
                        <div className="p-4">
                            <h2>User Name</h2>
                            <input onChange={getUserEnteredUsername}ß
                                className='w-full border rounded-md py-2 px-3 mb-3'
                                type="text"
                                placeholder='Enter User Name'
                                required
                            />
                            <h2>Password</h2>
                            <input
                                className='w-full border rounded-md py-2 px-3 mb-4'
                                type="password"
                                placeholder='Password'
                                required
                            />

                            <div className='flex justify-end gap-2'>
                                <button onClick={handleClick} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Cancel
                                </button>
                                <button onClick={handleLoginClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Login
                                </button >
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Login;