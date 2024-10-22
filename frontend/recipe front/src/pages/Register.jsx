import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='h-[100dvh] bg-slate-300 flex justify-center items-center'>
       <div className='p-10  md:p-20 rounded-xl flex flex-col gap-8  bg-white '> 

        <div className='text-center text-2xl w-full'>  logo</div>

        <div className='flex flex-col gap-6'>
            
            <h2 className='block font-semibold text-2xl'>Register</h2>

            <div className='grid  grid-cols-1 md:grid-cols-2 gap-3'>
            <input type="text" className='h-[56px] w-full bg-slate-100 rounded block' />
            <input type="text" className='h-[56px] w-full bg-slate-100 rounded block' />
            <input type="text" className='h-[56px] w-full bg-slate-100 rounded block' />
            <input type="text" className='h-[56px] w-full bg-slate-100 rounded block'  />
            <input type="text" className='h-[56px] w-full bg-slate-100 rounded block' />
            <input type="text" className='h-[56px] w-full bg-slate-100 rounded block' />
            </div>
                 <button className='text-white bg-pink-400 px-4 py-2 rounded-md  w-fit'> Create account</button>
        </div>

          <p className='text-sm'>Already Have an account? <span className='text-blue-400 underline'><Link to="/"> Login</Link></span></p>
       </div>
    </div>
  )
}

export default Register