import React from 'react'
import Icon from '../assets/icons/emojione-monotone_keycap-1.png'
import Cuate from '../assets/icons/cuate create.png'
import Icon1 from '../assets/icons/emojione-monotone_keycap-2.png'
import Rafiki from '../assets/icons/rafiki depo.png'
import Icon2 from '../assets/icons/emojione-monotone_keycap-3 (1).png'
import Trade from '../assets/icons/cuate crypto.png'
import {Link} from 'react-router-dom'

const Steps = () => {
  return (
    <div className='w-full lg:max-w-[1440px] mx-auto px-16 pt-8'>
      <div className=' grid grid-cols gap-4 text-center'>
        <h1 className='text-[#26093A] text-3xl font-bold'>Buy and Sell your Cryptocurrency in 3 simple steps</h1>
        <p className='text-[#292929] text-sm lg:w-1/2 mx-auto '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lectus faucibus et nunc id sollicitudin pretium nulla. Et nunc tempus mauris ullamcorper mauris, rhoncus sed magna. Eu consectetur nulla aliquam consectetur lectus. Rutrum feugiat et, tellus mattis donec et odio molestie amet.</p>
      </div>
      

    <section className='text-[#292929] w-full  flex flex-col lg:flex-row py-16 gap-10 lg:gap-0 items-center lg:items-start text-center lg:text-start'>
      <div className=''>
        <img className='w-8' src={Icon} alt="" />
      </div>
      <div className='flex flex-col gap-3 lg:ml-6'>
        <Link to='/SignUp'><h1 className='text-xl font-bold'>Create a free Account</h1></Link>
        <p className='text-sm '>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
      </div>

      <div className='lg:ml-[8rem]'>
      <img src={Cuate} alt="" />
      </div>
      </section>

      <section className='pt-8 text-[#292929] flex flex-col lg:flex-row py-16 gap-10 lg:gap-0 items-center lg:items-start text-center lg:text-start'>
        <div className='lg:mr-[8rem] order-3 lg:order-1'>
          <img src={Rafiki} alt="" />
        </div>

        <div className='order-1 lg:order-2'>
          <img className='w-10' src={Icon1} alt="" />
        </div>

        <div className='flex flex-col gap-3 lg:ml-6 order-2 lg:order-3'>
          <h1 className='text-xl font-bold'>Deposit</h1>
          <p className='text-sm '>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>
        </div>
      </section>

      <section className='text-[#292929] w-full  flex flex-col lg:flex-row py-16 gap-10 lg:gap-0 items-center lg:items-start text-center lg:text-start'>
      <div className=''>
        <img className='w-8' src={Icon2} alt="" />
      </div>
      <div className='flex flex-col gap-3 lg:ml-6'>
        <Link to='/Instant'><h1 className='text-xl font-bold'>Buy/ Sell Crypto</h1></Link>
        <p className='text-sm '>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
      </div>

      <div className='lg:ml-[8rem]'>
      <img src={Trade} alt="" />
      </div>
      </section>
    </div>
  )
}

export default Steps
