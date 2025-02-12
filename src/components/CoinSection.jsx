import ArrowDown from '../assets/icons/Group 99 (1).png'
import ArrowUp from '../assets/icons/Group 101.png'
import React, { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import axios from 'axios'

const CoinSection = () => {
  const {coinId} = useParams();
  const [coin, setCoin] =useState(null);

  // const products =data.find((p)=> p.id === parseInt(productId))
  const fetchCoin = async ()=>{
    const url = `https://api.coinlore.net/api/tickers/?start=0&limit=5${coinId}
`;

    try{
      const response = await axios.get(url);
      const data = await response?.data;
      console.log(data);

      if (data) {
        setCoin(data);
      }
      
    }catch (error){
      console.log(error);
      
    }

  }


    useEffect(()=>{
      fetchCoin();
    }, [coinId]);

    if (!coin){
      return <div>Loading...</div>;
    
  }



  return (
    <div className='lg:max-w-[1440px]  bg-[#EDE9EF] w-full justify-items-center mx-auto px-16 py-2 border-1 border-[#C5C0C0] '>
      <div className='grid grid-cols lg:flex flex-row gap-6 text-sm '>
      <div className='flex flex-row gap-6 '>
        <div className='flex flex-col gap-6'>
          <h3>BTC/NGN</h3>
          <h3>20,560.101.59 NGN</h3>
        </div>
        <div className='flex gap-2 '>
        <h3 className=''>-3.21%</h3>
        <img className='h-5' src={ArrowDown} alt="" />
        </div>
      </div>

      <div className='lg:border-r-1 text-[#C5C0C0]'></div>
      <div className='block lg:hidden text-[#C5C0C0]'><hr /></div>
      
      <div className='flex flex-row gap-6'>
        <div className='flex flex-col gap-6'>
          <h3>USDT/NGN</h3>
          <h3>453.44 NGN</h3>
        </div>
        <div className='flex gap-2'>
          <h3>+10.20%</h3>
          <img className='h-5' src={ArrowUp} alt="" />
        </div>
      </div>

      <div className='lg:border-r-1 text-[#C5C0C0]'></div>
      <div className='block lg:hidden text-[#C5C0C0]'><hr /></div>

      <div className='flex flex-row gap-6'>
        <div className='flex flex-col gap-6'>
          <h3>ETH/NGN</h3>
          <h3>818,490.32 NGN</h3>
        </div>
        <div className='flex gap-2'>
        <h3>+253%</h3>
        <img className='h-5' src={ArrowUp} alt="" />
        </div>
      </div>

      <div className='lg:border-r-1 text-[#C5C0C0]'></div>
      <div className='block lg:hidden text-[#C5C0C0]'><hr /></div>

      <div className='flex flex-row gap-6'>
        <div className='flex flex-col gap-6'>
          <h3>LTC/NGN</h3>
          <h3>818,490.32NGN</h3>
        </div>
        <div className='flex gap-2'>
        <h3>81,002.32</h3>
        <img className='h-5' src={ArrowDown} alt="" />
        </div>
      </div>

      <div className='lg:border-r-1 text-[#C5C0C0]'></div>
      <div className='block lg:hidden text-[#C5C0C0]'><hr /></div>

      <div className='flex flex-col gap-6'>
        <p>XRP/N</p>
        <p>226.56</p>
      </div>
      </div>
      
    </div>
  )
}

export default CoinSection
