import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import { users } from '../../Db';
import { RxTriangleDown } from "react-icons/rx";


const CustomerRevCard = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row gap-8'>
      {users.map((user)=>(
        <div className="" key={user.id}>
          <div className='bg-[#7C20BE] py-8 lg:py-10 px-4 lg:px-12 text-white flex flex-row text-md mt-8 mb-6 rounded-sm gap-4 relative '>
        <div className='text-2xl w-0 relative right-2 bottom-2 '>
          <div></div>
          < RiDoubleQuotesL /></div>
        <p className='text-sm'>{user.review}</p>
        <RxTriangleDown  size={100} className='absolute md:top-10 lg:top-30 xl:top-20 xl:left-4 lg:left-4  top-20  text-[#7C20BE]' />
        </div>
    
      <div className='flex gap-4 items-center px-8'>
        <img className='w-16' src={user.icon} alt="" />
          <div className='text-[#292929]'>
          <h1 className=' font-bold text-xl'>{user.name}</h1>
          <p className='text-[12px] font-semibold'>{user.country}</p>
          </div>
      </div>

        </div>
      ))}
      
    </div>
  )
}

export default CustomerRevCard
