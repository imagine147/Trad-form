import React from 'react'
import Logo from '../assets/icons/Group 201.png'
import {Link} from 'react-router-dom'

const GetStarted = () => {
  return (
    <div className='bg-[#EDE9EF] w-full lg:max-w-[1440px] mx-auto px-16 pt-8 text-center justify-items-center'>
      <div className='flex flex-col gap-4 py-4'>
        <p className='text-[#292929] text-sm font-semibold'>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
        <h1 className='text-[#26093A] text-3xl font-bold'>Create your account for free and start trading today!</h1>
      </div>
      

      <div className='pt-8 flex flex-col gap-6'>
      <Link to='/SignUp'><button className='bg-[#7C20BF] text-white w-[310px] mx-auto py-2 rounded-sm'>Get Started</button></Link>
      
      <div className='pb-16'>
        <img className='' src={Logo} alt="" />
      </div>
      </div>
      
    </div>
  )
}

export default GetStarted
