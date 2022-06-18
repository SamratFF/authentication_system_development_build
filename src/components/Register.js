import 'tw-elements';

import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import AlertContext from '../context/alert/AlertContext';

const Register = () => {

     const context = useContext(AlertContext);
     const { setSuccessRegister, setErrorName, setErrorUsernameSpace, setErrorUsernameLength, setErrorPasswordLength, setErrorAlreadyExists, setErrorInternalServer } = context

     const [credentials, setCredentials] = useState({ name: "", username: "", email: "", password: "", cpassword: "" });
     const [spinnerDisplay, setSpinnerDisplay] = useState("none");

     const handleRegisterSubmit = async (e) => {
          e.preventDefault();

          if (credentials.cpassword !== credentials.password) {
               setSuccessRegister(false);
          }
          else {

               const url = 'http://127.0.0.1:8000/auth-api/register';

               setSpinnerDisplay("block");

               const fetchDataRegisterResponse = await fetch(url, {
                    method: "POST",
                    headers: {
                         'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name: credentials.name, username: credentials.username, email: credentials.email, password: credentials.password })
               });

               const jsonData = await fetchDataRegisterResponse.json();

               setSpinnerDisplay("none");

               // For showing alerts

               // Success Alert
               if (jsonData.success) {
                    setSuccessRegister(true);
                    window.scrollTo(0, 0);

                    setTimeout(() => {
                         setSuccessRegister(false);
                         window.location = "/login";
                    }, 5000);
               } else {
                    setSuccessRegister(false);
               }

               // errorName Alert
               if (jsonData.errorName) {
                    setErrorName(true);
                    window.scrollTo(0, 0);

                    setTimeout(() => {
                         setErrorName(false);
                    }, 5000);
               } else {
                    setErrorName(false);
               }

               // errorUsernameSpace Alert
               if (jsonData.errorUsernameSpace) {
                    setErrorUsernameSpace(true);
                    window.scrollTo(0, 0);

                    setTimeout(() => {
                         setErrorUsernameSpace(false);
                    }, 5000);
               }

               // errorUsernameLength Alert
               if (jsonData.errorUsernameLength) {
                    setErrorUsernameLength(true)
                    window.scrollTo(0, 0);

                    setTimeout(() => {
                         setErrorUsernameLength(false);
                    }, 5000);

               }

               // errorPasswordLength Alert
               if (jsonData.errorPasswordLength) {
                    setErrorPasswordLength(true)
                    window.scrollTo(0, 0);

                    setTimeout(() => {
                         setErrorPasswordLength(false);
                    }, 5000);

               }

               // errorAlreadyExists Alert
               if (jsonData.errorAlreadyExists) {
                    setErrorAlreadyExists(true)
                    window.scrollTo(0, 0);

                    setTimeout(() => {
                         setErrorAlreadyExists(false);
                    }, 7000);

               }

               // Internal Server Alert
               if (jsonData.errorInternalServer) {
                    setErrorInternalServer(true);
                    window.scrollTo(0, 0);

                    setTimeout(() => {
                         setErrorInternalServer(false);
                    }, 8000);
               } else {
                    setErrorInternalServer(false);
               }

               setCredentials({ name: "", username: "", email: "", password: "", cpassword: "" });
          }

     }

     const handleValueChange = (e) => {
          setCredentials({ ...credentials, [e.target.name]: e.target.value })
     }

     const spinnerDisplayStyle = {
          display: spinnerDisplay
     }




     return (

          <div className="flex items-center justify-center sm:max-w-[300px] sm:w-10/12 sm:px-6 py-12 xl:max-w-lg lg:max-w-lg mx-auto lg:px-8 min-h-[60vh]">
               <div className="max-w-lg w-full space-y-8">
                    <h1 className="text-center text-4xl font-black">Register to AuthenticationSystem</h1>
                    <div>
                         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up to make your account</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleRegisterSubmit}>
                         <input type="hidden" name="remember" value="true" />
                         <div className="rounded-md shadow-sm space-y-3">
                              <div>
                                   <label htmlFor="name" className="sr-only">Name</label>
                                   <input id="name" name="name" type="text" autoComplete="text" onChange={handleValueChange} value={credentials.name} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Name" />
                              </div>
                              <div>
                                   <label htmlFor="username" className="sr-only">Username</label>
                                   <input id="username" name="username" onChange={handleValueChange} value={credentials.username} type="text" autoComplete="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Username" />
                              </div>
                              <div>
                                   <label htmlFor="email-address" className="sr-only">Email address</label>
                                   <input id="email-address" name="email" onChange={handleValueChange} value={credentials.email} type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                              </div>
                              <div>
                                   <label htmlFor="password" className="sr-only">Password</label>
                                   <input id="password" name="password" onChange={handleValueChange} value={credentials.password} type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password" />
                              </div>
                              <div>
                                   <label htmlFor="cpassword" className="sr-only">Confirm Password</label>
                                   <input id="cpassword" name="cpassword" onChange={handleValueChange} value={credentials.cpassword} type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
                              </div>
                         </div>

                         <div className="flex items-center justify-between">
                              <div className="text-sm w-full">
                                   <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 relative float-right"> Already have an Account? </Link>
                              </div>
                         </div>

                         <div>
                              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                   <span className="absolute right-2 inset-y-0 flex items-center pl-3">
                                        <svg className="h-5 w-5 text-blue-500 group-hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                             <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                        </svg>
                                   </span>
                                   <span className="absolute left-2 inset-y-0 flex items-center pl-3 top-2" style={spinnerDisplayStyle}>
                                        <div className="flex justify-center items-center">
                                             <div className="spinner-border animate-spin inline-block w-5 h-5 border-4 rounded-full" role="status">
                                                  <span className="visually-hidden">Loading...</span>
                                             </div>
                                        </div>
                                   </span>
                                   Register
                              </button>
                         </div>
                    </form>
               </div>
          </div>
     )
}

export default Register