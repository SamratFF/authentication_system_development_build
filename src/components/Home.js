import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
     return (
          <div className='align-middle my-52'>
               <h1 className="text-center text-3xl">Welcome to AuthenticationSystem</h1>
               <div className="items-center w-full my-4 text-center mx-auto space-x-5">
                    <Link to='/login' type="button" className="border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline">Login</Link>

                    <Link to='/register' type="button" className="border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline">Register</Link>
               </div>
          </div>
     )
}

export default Home