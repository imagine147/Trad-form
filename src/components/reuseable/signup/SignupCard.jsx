import React from 'react'
import { useForm } from 'react-hook-form'

const SignupCard = () => {
    const { register, handleSubmit, formState: { errors,}} = useForm()
    const onSubmit = (data) => {
      // TODO: Send the form data to the server
      console.log(data)

    }
  return (
    <div className='bg-[#EEEDEE] bg-cover w-full lg:w-[30%] mx-auto lg:max-w-[1440px] pb-10 rounded-sm mt-16'>
      <div className='text-center py-8'>
        <h1 className='text-3xl font-semibold'>Welcome</h1>
      </div>
      
      <div className='grid  justify-items-center w-[80%] mx-auto'>
        <form  action="" onSubmit={handleSubmit (onSubmit)}>
          <div className='grid grid-cols-2  rounded-2xl justify-center text-sm'>
          <button className='bg-white py-2 rounded-3xl  relative left-6 '>Individual</button>
          <button className='bg-[#E4E4E4] py-2 rounded-3xl relative right-6'>Business</button>
          </div>

          <div className=' grid grid-cols gap-6 py-8 text-sm'>
            <input className='bg-white py-2 rounded-sm px-6' type="text" placeholder='Username'
             {...register('userName',{required: 'This field is required',
              pattern: {
                value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                message: "This field is required"
              }})} />
            {errors.userName && <p style={{color: "#d73c3c"}}>{errors.userName.message}</p>}

            <input className='bg-white py-2 rounded-sm px-6' type="text" placeholder='Full Name' 
            {...register('fullName',{required: 'This field is required',
              pattern: {
                value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                message: "This field is required"
              }})} />
            {errors.fullName && <p style={{color: "#d73c3c"}}>{errors.fullName.message}</p>}

            <input className='bg-white py-2 rounded-sm px-6' type="Email" placeholder='Email' 
            {...register('email',{required: 'Please enter a valid email',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter a valid Email Address"
              }})} />
            {errors.email && <p style={{color: "#d73c3c"}}>{errors.email.message}</p>}

            <input className='bg-white py-2 rounded-sm px-6' type="PhoneNumber" placeholder='Phone Number' 
            {...register('phoneNumber',{required: 'This field is required',
              pattern: {
                message: "This field is required"
              }})} />
            {errors.phoneNumber && <p style={{color: "#d73c3c"}}>{errors.phoneNumber.message}</p>}

            <input className='bg-white py-2 rounded-sm px-6' type="text" placeholder='Referral Code {optional}' />
          </div>

          <div className='w-full items-center flex flex-col justify-center'>

          <div>
          <h3 className='text-sm text-center pb-6 px-6'>By clicking the Sign Up button below, you agree to TradExpress <span className='text-[#7C20BF]'>terms and service</span></h3>
          </div>

          
          <button className='bg-[#7C20BF] rounded-sm w-full py-2 text-white '>
            Sign Up
          </button>
          </div>

          <div>
            <h3 className='text-black text-sm text-center  pt-8'>Already have an account? <span className='text-[#7C20BF] '>Click here</span></h3>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default SignupCard
