import React, {useState} from 'react'
import Buy from '../components/Buy'
import Sell from '../components/Sell'

const Instant = () => {
  const [active, setActive] = useState('buy')
  return (
    <div className='bg-[#EEEDEE] w-full lg:w-4/6 mx-auto rounded-sm mt-16'>
      <div className='text-3xl font-bold text-center pt-8 pb-10'>
        <h1>Buy/Sell Instantly</h1>
      </div>

      <div className='text-center mx-auto w-4/6 rounded-3xl bg-[#E4E4E4] '>
        <button className={`w-1/2 rounded-3xl py-2 ${active === 'buy' ? 'bg-white': ''}`} onClick={()=> setActive('buy')}>Buy</button>
        <button className={`w-1/2 rounded-3xl py-2 ${active === 'sell' ? 'bg-white': ''}`} onClick={()=> setActive('sell')}>Sell</button>
      </div>

      {active === 'buy' && <Buy/> }
      {active === 'sell' && <Sell/> }

    </div>
  )
}

export default Instant
