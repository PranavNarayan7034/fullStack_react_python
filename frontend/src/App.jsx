import React, { useState } from 'react'
import Login from './Components/Login'
import Signup from './Components/Signup'
import axios from 'axios'

const App = () => {
    const [message, setMessage] = useState("")
    const [hideLogin, setHideLogin] = useState(true)
    const [hideSignup, setHideSignup] = useState(true)
    const onBackendCall = () => {
        axios.get('http://127.0.0.1:8000/api/demo')
            // .then(response => console.log(response.data))
            .then(response => setMessage(response.data))
    }
    const showLogin = () => {
        // console.log("Login clicked")
        setHideLogin(false)
        setHideSignup(true)
    }
    const showSignup = () => {
        // console.log("Create account clicked")
        setHideLogin(true)
        setHideSignup(false)
    }
    
    return (
        <div className='flex flex-col gap-4 items-start ms-3'>
            <h1 className='text-3xl text-center '>Home Component</h1>
            <button
                className='px-8 py-2 bg-blue-400'
                onClick={onBackendCall}>
                Click Here to Get Response
                From backend
            </button>
            <p>{message}</p>
            <div className='flex gap-3'>
                <button className='px-8 py-2 bg-orange-400' onClick={showLogin}>Login</button>
                <button className='px-8 py-2 bg-orange-400' onClick={showSignup}>Create Account</button>
            </div>
            {!hideLogin && <Login />}
            {!hideSignup && <Signup />}
        </div>
    )
}

export default App