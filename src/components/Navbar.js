import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
     return (
          <header className="text-gray-600 body-font sm:w-11/12 md:w-auto lg:w-auto">
               <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
                    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                         </svg>
                         <span className="ml-3 text-xl">AuthenticationSystem</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                         {/* <Link className="mr-5 hover:text-gray-900" to="/">Home</Link>
                         <Link className="mr-5 hover:text-gray-900" to="/">Services</Link>
                         <Link className="mr-5 hover:text-gray-900" to="/">Products</Link>
                         <Link className="mr-5 hover:text-gray-900" to="/">About</Link>
                         <Link className="mr-5 hover:text-gray-900" to="/">Contact</Link> */}
                         <div className="md:ml-auto flex flex-wrap items-center text-base justify-center mx-5">
                              <Link to="/login" className="p-1 mx-2 border-1 hover:text-opacity-100 hover:ease-in ease-in hover:duration-300 text-opacity-95 border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline">Login</Link>
                              <Link to="/register" className="p-1 mx-2 border-1 hover:text-opacity-100 hover:ease-in ease-in hover:duration-300 text-opacity-95 border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-600 focus:outline-none focus:shadow-outline">Register</Link>
                         </div>
                    </nav>
               </div>
          </header>
     )
}

export default Navbar;