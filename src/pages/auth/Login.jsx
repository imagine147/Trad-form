import React from 'react'
import { useForm } from 'react-hook-form'
import {Link} from 'react-router-dom'

const Login = () => {
  const { register, handleSubmit, formState: { errors,}} = useForm()
  const onSubmit = (data) => {
    // TODO: Send the form data to the server
    console.log(data)

    
  }
  return (
    <div className='w-full lg:w-[30%] mx-auto bg-[#EEEDEE] mt-16 mb-16 rounded-sm justify-items-center text-sm'>
      <div className='w-[70%] text-center py-10'>
      <div className='text-3xl font-bold pt pb-16 '>
        <h1>Welcome Back</h1>
      </div>

      <form action="w-full" onSubmit={handleSubmit (onSubmit)}>
        <div className='grid gap-6 '>
          <input className='bg-white py-2 rounded-sm px-4 text-sm ' type="text" placeholder='Username' 
          {...register('userName',{required: 'This field is required',
            pattern: {
              value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
              message: "This field is required"
            }})} />
          {errors.userName && <p className='text-red-500 text-start'>{errors.userName.message}</p>}
          
          <input className='bg-white py-2 rounded-sm px-4 text-sm ' type="Password" placeholder='password' {...register('password',{required: "This field is required",
          pattern:{
            minLength: 'password must be at least 8 characters long'
          }
          })} />
          {errors.password && <p className='text-red-500 text-start'>{errors.password.message}</p>}
        </div>

        <div className='flex justify-between py-8'>
          <div className='flex gap-2'>
          <input className='accent-[#7C20BF]' type="checkbox"  />
          <h1>Remember Password</h1>
          </div>

          <h3 className='text-end text-[#7C20BF]'>Forgot Password?</h3>
        </div>

        <div>
        <div className='pb-6'>
        <button className='bg-[#7C20BF] rounded-sm w-full py-2 text-white '>
            Login
          </button>
        </div>
        </div>

        <div className='flex gap-2 justify-center '>
          <h3 className=''>New User?</h3>
          <Link to='/SignUp'><h3 className='text-[#7C20BF]'>Click here</h3></Link>
          
        </div>
      </form>
      </div>
      
    </div>
  )
}

export default Login
