import React from 'react'
import CustomerRevCard from './reuseable/CustomerRevCard'



const CustomersReview = () => {
  return (
<div className='w-full lg:max-w-[1440px] mx-auto pt-8 pb-16 text-center px-16'>
  <div className=''>
  <h1 className='text-[#26093A] text-3xl font-bold'>Customer’s Review</h1>
  </div>
  <CustomerRevCard/>

</div>
  )
}

export default CustomersReview
