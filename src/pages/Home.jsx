import React from 'react'
import Hero from '../components/Hero'
import CoinSection from '../components/CoinSection'
import WhyCrypto from '../components/WhyCrypto'
import Steps from '../components/Steps'
import GetStarted from '../components/GetStarted'
import CustomersReview from '../components/CustomersReview'
import Footer from '../layout/Footer'
const Home = () => {
  return (
    <div>
      <Hero/> 
      <CoinSection/>
      <WhyCrypto/>
      <Steps/>
      <GetStarted/>
      <CustomersReview/>
      <Footer/>

      
    </div>
  )
}

export default Home
