import React from 'react'
import Vector from '../assets/icons/Vector (1).png'
import Logo from '../assets/icons/Group 215.png'


const Footer = () => {
  return (
    <div className='w-full lg:max-w-[1440px] bg-[#EDE9EF] bg-cover text-[#26093A] mx-auto pt-10'> 
      <div className='grid  md:grid-cols-3 lg:flex flex-row justify-between  gap-6 lg:gap-[6rem]  px-16 pb-10 items-center'>
      <div className='space-y-1'>
        <h1 className='font-bold'>Products</h1>
        <ul className='space-y-1 text-[13px] font-semibold'>
          <li>Bitcoin</li>
          <li>Alt</li>
          <li>Flat</li>
          <li>Refil</li>
          <li>P2P</li>
        </ul>
      </div>

      <div className='space-y-1'>
        <h1 className='font-bold'>Learn</h1>
        <ul className='space-y-1 text-[13px] font-semibold'>
          <li>Blog</li>
          <li>Help Center</li>
        </ul>
      </div>

      <div className='space-y-1 order-5 lg:order-3'>
        <h1 className='font-bold'>Contact</h1>
        <ul className='space-y-1 text-[13px] font-semibold'>
          <li>hello@tradexpress.com</li>
          <li>support@tradexpress.com</li>
        </ul>
        <div className='pt-2'>
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className='space-y-1'>
        <h1 className='font-bold'>Company</h1>
        <ul className='space-y-1 text-[13px] font-semibold'>
          <li>About Us</li>
          <li>Careers</li>
          <li>Rates</li>
          <li>Mobile</li>
        </ul>
      </div>

      <div className='space-y-1'>
        <h1 className='font-bold'>Legal</h1>
        <ul className='space-y-1 text-[13px] font-semibold'>
          <li>Privacy Policy</li>
          <li>Anti-Money Laundering</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
      </div>

      <div className='bg-white  w-full lg:max-w-[1440px] mx-auto '>
         <div className='flex flex-row gap-4 py-2 justify-center items-center border-white '>
         <img src={Vector} alt="" />
         <p className='text-[12px] lg:text-sm font-medium'>2021 Tradexpress Technologies. All Right Reserved</p>
         </div>
        </div>


      
      
    </div>
  )
}

export default Footer
