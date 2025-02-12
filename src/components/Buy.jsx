import React from 'react'

const Buy = () => {
  return (
    <div className='bg-[#EEEDEE] w-full lg:w-[30%] mx-auto rounded-sm pt-6'>
      <form>
        <div className='w-[70%] mx-auto flex flex-col gap-2 pt-10 text-sm '>
        <label className='font-bold'>Coin to Buy</label>
        <div className='bg-white flex justify-between py-2 rounded-sm px-4'> <h1>Bitcoin (BTC)</h1>
          <select className='text-[#7C20BF]' name="" id=""></select>
        </div>

        <div className='grid gap-2 py-6'>
        <label className='font-bold'>Currency</label>
        <div className='bg-white flex justify-between py-2 rounded-sm px-4'> <h1>Naira (NGN)</h1>
          <select className='text-[#7C20BF]' name="" id=""></select>
        </div>
        </div>

        <div className='grid gap-2 pb-10'>
          <label className='font-bold'>Amount</label>
          <div className='flex bg-white py-2 px-4 rounded-sm gap-1'>NGN 
            <h1 className='border-l border-[#707070] pl-1  '>3,000,000.00</h1>
          </div>
        </div>

        <div className='pb-16'>
        <button className='bg-[#7C20BF] rounded-sm w-full py-2 text-white '>
            Continue
          </button>
        </div>
        </div>
        
      </form>
      
    </div>
  )
}

export default Buy