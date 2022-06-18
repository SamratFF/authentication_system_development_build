import React, { useState } from 'react'
import alertContext from './AlertContext'

const AlertState = (props) => {

     // Internal Server Alert State
     const [errorInternalServer, setErrorInternalServer] = useState(false)

     // Register Alerts State
     const [successRegister, setSuccessRegister] = useState(false);
     const [errorName, setErrorName] = useState(false);
     const [errorUsernameSpace, setErrorUsernameSpace] = useState(false);
     const [errorUsernameLength, setErrorUsernameLength] = useState(false);
     const [errorPasswordLength, setErrorPasswordLength] = useState(false);
     const [errorAlreadyExists, setErrorAlreadyExists] = useState(false);

     // Login Alerts State
     const [successLogin, setSuccessLogin] = useState(false);
     const [errorUserLogin, setErrorUserLogin] = useState(false);
     const [errorPasswordLogin, setErrorPasswordLogin] = useState(false);

     return (
          <alertContext.Provider value={{ successRegister, setSuccessRegister, errorName, setErrorName, errorUsernameSpace, setErrorUsernameSpace, errorUsernameLength, setErrorUsernameLength, errorPasswordLength, setErrorPasswordLength, errorAlreadyExists, setErrorAlreadyExists, errorUserLogin, setErrorUserLogin, errorPasswordLogin, setErrorPasswordLogin, successLogin, setSuccessLogin, errorInternalServer, setErrorInternalServer }}>
               {props.children}
          </alertContext.Provider>
     )
}

export default AlertState