import React from 'react'
import { crypto } from '../../Db'



const WhyCryptoCard = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row mx-auto gap-16 items-center'> 
    {crypto.map((review)=>(
       <div className='bg-white rounded-sm lg:w-1/3 lg:h-95 justify-center text-center flex flex-col gap-2  py-12 items-center px-6' key={review.id}>
       <img className='w-[25%]' src={review.img} alt="" />
       <h1 className='text-[#26093A] font-bold'>{review.name}</h1>
       <p className='text-[#26093A] text-sm  '>{review.desc}</p>
     </div>

    ))}
    
     
    </div>
  )
}

export default WhyCryptoCard
