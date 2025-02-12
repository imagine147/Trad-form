import React, { useEffect, useState  } from 'react'
import Very from '../assets/icons/Rectangle 26.png'
import { Link } from 'react-router-dom'

const Verification = () => {
  const[verify, setVerification]= useState({})
  useEffect(()=>{
    const data = localStorage.getItem('formData')
    if (data){
      setVerification(JSON.parse(data))
    }
  })
  return (
    <div className='bg-[#FBF8FD] w-full lg:w-[30%] mx-auto '>
      <div className='w-[70%] mx-auto py-16 text-center justify-items-center'>
        <div className='space-y-8'>
        <h1 className='text-3xl '>You're Almost In!</h1>

<h1 className='text-3xl font-bold '>Welcome {Verification.username}</h1>
        </div>

        <div className='py-6'>
          <img src={Very} alt="" />

        </div>

        <div className='text-sm font-medium py-12'>
          <h3>An activation link has been sent to {Verification.email} Please click on the link to verify your email and activate your TradExpress account.</h3>
        </div>


        <div className='bg-[#7C20BF] mt-6 mb-8 w-[60%] rounded-sm mx-auto text-sm '>
        <button className='rounded-sm  py-2 text-white '>
            Sign Up
          </button>
        </div>

        <div className='flex gap-2 justify-center text-sm '>
          <h3 className=''>Already have an account?</h3>
          <Link to='/Login'><h3 className='text-[#7C20BF]'>Click here</h3></Link>
          
        </div>

        

      </div>
      
    </div>
  )
}

export default Verification
