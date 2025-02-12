import React from 'react'
import WhyCryptoCard from './reuseable/WhyCryptoCard'


const WhyCrypto = () => {
  return (
    <div className='bg-[#EDE9EF] bg-cover w-full lg:max-w-[1440px] mx-auto pt-10 pb-20 px-16 items-center'>
       <div className='text-center pb-8 flex flex-col gap-4 '>
           <h1 className='text-[#26093A] text-3xl font-bold'>Why do people get involved with Cryptocurrencies?</h1>
           <button className='text-[#7C20BE] border w-[35%] lg:w-[10%] mx-auto rounded-sm py-2 text-sm '>See Less</button>

           
           </div>
           <WhyCryptoCard/>
    </div>
  )
}

export default WhyCrypto



