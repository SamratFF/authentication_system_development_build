import React, { useContext } from 'react';
import { useState } from 'react';
import AlertContext from '../context/alert/AlertContext';
import { Link } from "react-router-dom";

const Alert = () => {

     const context = useContext(AlertContext);

     const { errorInternalServer } = context;          // For Internal Server Error

     const { successRegister, errorName, errorUsernameSpace, errorUsernameLength, errorPasswordLength, errorAlreadyExists } = context;           // For Register

     const { successLogin, errorUserLogin, errorPasswordLogin } = context;            // For Login


     // For Register Alerts
     const [displayRegister, setDisplayRegister] = useState("none");
     const [displayErrorName, setDisplayErrorName] = useState("none");
     const [displayErrorUsernameSpace, setDisplayErrorUsernameSpace] = useState("none");
     const [displayErrorUsernameLength, setDisplayErrorUsernameLength] = useState("none");
     const [displayErrorPasswordLength, setDisplayErrorPasswordLength] = useState("none");
     const [displayErrorAlreadyExists, setDisplayErrorAlreadyExists] = useState("none")

     // For Login Alerts
     const [displaySuccessLogin, setDisplaySuccessLogin] = useState("none");
     const [displayErrorUserLogin, setDisplayErrorUserLogin] = useState("none");
     const [displayErrorPasswordLogin, setDisplayErrorPasswordLogin] = useState("none");

     // For Internal Server Error
     const [displayErrorInternalServer, setDisplayErrorInternalServer] = useState("none");


     // For Register
     setTimeout(() => {
          // Success Alert
          if (successRegister) {
               setDisplayRegister("block");
          }
          else {
               setDisplayRegister("none");
          }

          // errorName alert
          if (errorName) {
               setDisplayErrorName('block');
          } else {
               setDisplayErrorName('none');
          }

          // errorUsernameSpace Alert
          if (errorUsernameSpace) {
               setDisplayErrorUsernameSpace("block");
          } else {
               setDisplayErrorUsernameSpace('none');
          }

          // errorUsernameLength Alert
          if (errorUsernameLength) {
               setDisplayErrorUsernameLength("block");
          } else {
               setDisplayErrorUsernameLength("none");
          }

          // errorPasswordLength Alert
          if (errorPasswordLength) {
               setDisplayErrorPasswordLength("block");
          } else {
               setDisplayErrorPasswordLength("none");
          }

          // errorAlreadyExists Alert
          if (errorAlreadyExists) {
               setDisplayErrorAlreadyExists("block");
          } else {
               setDisplayErrorAlreadyExists("none");
          }
     }, 1);

     // For Login
     setTimeout(() => {
          // successLogin Alert
          if (successLogin) {
               setDisplaySuccessLogin("block");
          }
          else {
               setDisplaySuccessLogin("none");
          }

          // errorUserLogin Alert
          if (errorUserLogin) {
               setDisplayErrorUserLogin("block");
          }
          else {
               setDisplayErrorUserLogin("none");
          }

          // errorPasswordLogin Alert
          if (errorPasswordLogin) {
               setDisplayErrorPasswordLogin("block");
          }
          else {
               setDisplayErrorPasswordLogin("none");
          }
     }, 1);

     // For Internal Server Error
     setTimeout(() => {
          if (errorInternalServer) {
               setDisplayErrorInternalServer("block");
          }
          else {
               setDisplayErrorInternalServer("none");
          }
     }, 1);


     // For Register
     const displayRegisterStyle = {
          display: displayRegister
     }

     const displayErrorNameStyle = {
          display: displayErrorName
     }

     const displayErrorUsernameSpaceStyle = {
          display: displayErrorUsernameSpace
     }

     const displayErrorUsernameLengthStyle = {
          display: displayErrorUsernameLength
     }

     const displayErrorPasswordLengthStyle = {
          display: displayErrorPasswordLength
     }

     const displayErrorAlreadyExistsStyle = {
          display: displayErrorAlreadyExists
     }


     // For Login

     const displaySuccessLoginStyle = {
          display: displaySuccessLogin
     }

     const displayErrorUserLoginStyle = {
          display: displayErrorUserLogin
     }

     const displayErrorPasswordLoginStyle = {
          display: displayErrorPasswordLogin
     }

     // For Internal Server Error
     const displayErrorInternalServerStyle = {
          display: displayErrorInternalServer
     }

     return (
          <>
               {/* REGISTER ALERTS */}
               <div className="registerAlerts">
                    {/* Success Alert */}
                    <div className="" style={displayRegisterStyle}>
                         <div className="bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full" role="alert">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                   <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                              </svg>
                              Your account has been created successfully! You will be redirected to login page in few seconds....
                         </div>
                    </div>

                    {/* ErrorName Alert */}
                    <div className="" style={displayErrorNameStyle}>
                         <div className="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full" role="alert">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                   <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                              </svg>
                              Invalid Name. Please try again
                         </div>
                    </div>

                    {/* ErrorUsernameSpace Alert */}
                    <div className="" style={displayErrorUsernameSpaceStyle}>
                         <div className="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full" role="alert">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                   <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                              </svg>
                              Username should not contain spaces. Please try again
                         </div>
                    </div>

                    {/* ErrorUsernameLength Alert */}
                    <div className="" style={displayErrorUsernameLengthStyle}>
                         <div className="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full" role="alert">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                   <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                              </svg>
                              Username must be between 4 - 20 Characters. Please try again
                         </div>
                    </div>

                    {/* ErrorPasswordLength Alert */}
                    <div className="" style={displayErrorPasswordLengthStyle}>
                         <div className="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full" role="alert">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                   <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                              </svg>
                              Password must be between 4 - 30 Characters. Please try again
                         </div>
                    </div>

                    {/* ErrorAlreadyExists Alert */}
                    <div className="" style={displayErrorAlreadyExistsStyle}>
                         <div className="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full" role="alert">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                   <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                              </svg>
                              User already exists. Please try again or go to <Link to="/login" className="ml-1 text-blue-600 underline"> Login Page</Link>
                         </div>
                    </div>
               </div>


               {/* LOGIN ALERTS */}
               <div className="loginAlerts">
                    {/* SuccessLogin Alert */}
                    <div className="" style={displaySuccessLoginStyle}>
                         <div className="bg-green-100 rounded-lg py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full" role="alert">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                   <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                              </svg>
                              You have been loggedin successfully! You will be redirected to home page in few seconds....
                         </div>
                    </div>

                    {/* ErrorUserLogin Alert */}
                    <div className="" style={displayErrorUserLoginStyle}>
                         <div className="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full" role="alert">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                   <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                              </svg>
                              User does not exists. Please try again or go to <Link to="/register" className="ml-1 text-blue-600 underline"> Register Page</Link>
                         </div>
                    </div>

                    {/* ErrorPasswordLogin Alert */}
                    <div className="" style={displayErrorPasswordLoginStyle}>
                         <div className="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full" role="alert">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                   <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                              </svg>
                              Invalid credentials. Please try again
                         </div>
                    </div>
               </div>

               {/* Internal Server Error Alert */}
               <div className="internalServerAlerts">
                    {/* errorInternalServer Alert */}
                    <div className="" style={displayErrorInternalServerStyle}>
                         <div className="bg-red-100 rounded-lg py-5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full" role="alert">
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                   <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                              </svg>
                              Internal Server Error! Please Try again later
                         </div>
                    </div>
               </div>
          </>
     );
}

export default Alert