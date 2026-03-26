import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {

  const [formData, setFormData] = useState({
    username: "",email: "",password: ""
  })

  const onFormchange = (e) => {
    // console.log(e)
    // console.log(e.target.name)
    // console.log(e.target.value)
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // console.log(formData)

  const onSignup = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/signup',
        formData)
      console.log("Signup Completed,",response.data)
      alert("Signup Completed...")
    } catch (error) {
      if (error.response) {
        console.log("Error response : ",
          error.response.data)
      }
      console.log("Error in Signup", error)
      alert("Error in Signup , Try again")
    }
  }

  return (
    <div className='h-screen w-full bg-black/65 absolute top-0 left-0 flex items-center justify-center'>
      <div className='bg-white p-12 flex flex-col gap-5'>
        <h1 className='text-center text-3xl font-bold'>Create Account</h1>
        <div className='flex flex-col'>
          <label className='text-black/50'>Name</label>
          <input
            name='username'
            type="text"
            onChange={onFormchange}
            className='border-b-2 outline-0 p-2' />
        </div>
        <div className='flex flex-col'>
          <label className='text-black/50'>Email</label>
          <input
            name='email'
            type="email"
            onChange={onFormchange}
            className='border-b-2 outline-0 p-2' />
        </div>
        <div className='flex flex-col'>
          <label className='text-black/50'>Password</label>
          <input
            name='password'
            type="password"
            onChange={onFormchange}
            className='border-b-2 outline-0 p-2' />
        </div>
        <div className='text-center'

        >
          <button onClick={onSignup}
            className='text-lg px-8 py-2 bg-blue-500 text-white border-0'>
            Signup</button>
        </div>
      </div>
    </div>
  )
}

export default Signup