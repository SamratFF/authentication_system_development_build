import 'tw-elements';

import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import AlertContext from '../context/alert/AlertContext';

const Login = () => {

     const context = useContext(AlertContext);
     const { setErrorUserLogin, setErrorPasswordLogin, setSuccessLogin, setErrorInternalServer } = context;

     const [credentials, setCredentials] = useState({ username: "", password: "" });
     const [spinnerDisplay, setSpinnerDisplay] = useState("none");

     const handleRegisterSubmit = async (e) => {
          e.preventDefault();

          const host = 'https://authentication-system-backend.herokuapp.com'
          const url = `${host}/auth-api/login`;

          setSpinnerDisplay("block");

          const fetchDataLoginResponse = await fetch(url, {
               method: "POST",
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify({ username: credentials.username, password: credentials.password })
          });

          const jsonData = await fetchDataLoginResponse.json();

          setSpinnerDisplay("none");

          // successLogin Alert
          if (jsonData.successLogin) {
               setSuccessLogin(true);
               window.scrollTo(0, 0);

               setTimeout(() => {
                    setSuccessLogin(false);
                    window.location = "/";
               }, 5000);
          } else {
               setSuccessLogin(false);
          }

          // errorUserLogin Alert
          if (jsonData.errorUserLogin) {
               setErrorUserLogin(true);
               window.scrollTo(0, 0);

               setTimeout(() => {
                    setErrorUserLogin(false);
               }, 7000);
          } else {
               setErrorUserLogin(false);
          }

          // errorPasswordLogin Alert
          if (jsonData.errorPasswordLogin) {
               setErrorPasswordLogin(true);
               window.scrollTo(0, 0);

               setTimeout(() => {
                    setErrorPasswordLogin(false);
               }, 5000);
          } else {
               setErrorPasswordLogin(false);
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

          setCredentials({ username: "", password: "" });
     }

     const handleValueChange = (e) => {
          setCredentials({ ...credentials, [e.target.name]: e.target.value })
     }

     const spinnerDisplayStyle = {
          display: spinnerDisplay
     }


     return (
          <div className="flex items-center justify-center sm:px-6 lg:px-8 min-h-[75vh]">
               <div className="max-w-lg w-full space-y-8">
                    <h1 className="text-center text-4xl font-black">Login to AuthenticationSystem</h1>
                    <div>
                         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleRegisterSubmit}>
                         <input type="hidden" name="remember" value="true" />
                         <div className="rounded-md shadow-sm -space-y-px">
                              <div>
                                   <label htmlFor="username" className="sr-only">Username</label>
                                   <input id="username" name="username" onChange={handleValueChange} value={credentials.username} type="text" autoComplete="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Enter your Username" />
                              </div>
                              <div>
                                   <label htmlFor="password" className="sr-only">Password</label>
                                   <input id="password" name="password" onChange={handleValueChange} value={credentials.password} type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm" placeholder="Password" />
                              </div>
                         </div>

                         <div className="flex items-center justify-between">
                              <div className="text-sm w-full">
                                   <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500 relative float-right"> Don't have an Account? </Link>
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
                                   Login
                              </button>
                         </div>
                    </form>
               </div>
          </div>
     )
}

export default Login