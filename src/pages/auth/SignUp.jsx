import React, {useState} from 'react'
import Individual from '../../components/Individual'
import Business from '../../components/Business'

const SignUp = () => {
  const [active, setActive] = useState('individual')
  return (
    <div className='bg-[#EEEDEE] bg-cover w-full lg:w-[30%] mx-auto lg:max-w-[1440px] pb-10 rounded-sm mt-16 flex flex-col justify-center items-center'>
    <div className='text-center py-8'>
      <h1 className='text-3xl font-semibold'>Welcome</h1>
    </div>
       <div className='grid grid-cols-2  rounded-2xl justify-center text-sm bg-[#E4E4E4] w-4/5'>
          <button className={` py-2 rounded-3xl ${active === 'individual' ? 'bg-white': ''}`} onClick={()=> setActive('individual')}>Individual</button>
          <button className={` py-2 rounded-3xl ${active === 'business' ? 'bg-white': ''}`} onClick={()=> setActive('business')}>Business</button>
          </div>
          {active === 'individual' && <Individual/> }
          {active === 'business' && <Business/> }
      
      
    </div>
  )
}

export default SignUp
