import React from 'react'
import image from '../assets/icons/Group 175.png'
import Ring from '../assets/icons/Group 127.png'
import {Link} from 'react-router-dom'


const Hero = () => {
  return (
  

      <div className='bg-[#7C20BE] w-full lg:max-w-[1440px] h-[600px] lg:h-[751px] flex items-center justify-center  lg:pr-[10rem] mx-auto relative '>
      <div className='px-4 lg:px-16 flex flex-col gap-10 lg:gap-6 items-center text-center lg:items-start lg:text-start text-white  '>
        <div className='flex flex-col gap-8'>
        <h1 className=' text-3xl lg:text-5xl lg:w-[65%] font-bold'>Buy, sell and manage your Crypto on TradExpress.</h1>
        <h4 className='text-base lg:text-[18px] lg:w-[38%]'>Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC & XRP with NGN.</h4>
        </div>

        <div className='flex flex-col gap-8'>
        <div>
        <Link to='/SignUp'><button className='bg-white text-[#7C1FBF]  w-[310px] md:w-[342px]  lg:w-[339px] py-2 rounded-sm'>Get Started</button></Link>
        </div>

        <div className=''>
          <img className='' src={image} alt="" />
        </div>

        </div>
    

      </div>

      <div className='hidden lg:block absolute lg:w-[852px] items-center mx-auto lg:mb-[-6rem] right-16'>
       <img className='' src={Ring} alt="" />
       </div>
     

      
    </div>
    
  )
}

export default Hero
