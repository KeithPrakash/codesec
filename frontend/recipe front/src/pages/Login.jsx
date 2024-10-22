import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-[100dvh] w-full bg-slate-100  flex justify-center items-center'>


        <div className='w-[340px] h-auto flex flex-col gap-6   inset-full bg-white p-[30px] rounded-2xl'>

            <div className='w-full flex justify-center'> logo</div>
            <h2 className='font-semibold text-lg'>Login</h2>

              <input type="text" className='h-[56px] w-full bg-slate-100 rounded'  />
              <input type="text" className='h-[56px] w-full bg-slate-100 rounded'  />

              <button className='bg-pink-500 w-full text-center p-4 text-white  capitalize hover:opacity-70'> Sign in</button>



              <p className='text-sm'>Don't have an account? <span  className='text-blue-700'>  <Link to="/register">Create an account
              </Link></span></p>
        </div>

    </div>
  )
}

export default Login