
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName,setFirstName]=useState(null);
  const [lastName,setLastName]=useState(null);
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
  const [confirmPassword,setConfirmPassword]=useState(null);
  const [tel,setTel]=useState(null)
  const [error,setError]=useState(null)

  const navigate =useNavigate()
  const handleRegister= async(e)=>{
        e.preventDefault()

         if(password!=confirmPassword) {
           return  setError("password not matching.");
          
         }
           setError(null)
        try{
          const response=await axios.post('http://localhost:3000/api/v1/user/register',{
                firstName,lastName,email,tel,password
        } ) 
      
         console.log(response)
         if(response.status === 200){
          navigate('/')
         }
      
      
      
      }catch(error){
          console.log(error)
          return  setError("something went wrong");
        }
      
      
      
  }
  return (
    <div className='h-[100dvh] bg-slate-300 flex justify-center items-center'>
       <div className='p-10  md:p-20 rounded-xl flex flex-col gap-8  bg-white '> 
        <div className='text-center text-2xl w-full'>  logo</div>

        <form  onSubmit={handleRegister}>
        <div className='flex flex-col gap-6'>         
            <h2 className='block font-semibold text-2xl'>Register</h2>
            <div className='grid  grid-cols-1 md:grid-cols-2 gap-3'>
            <input type="text" className='h-[56px] w-full bg-slate-100 rounded block' placeholder='first name' value={firstName}  onChange={(e)=>setFirstName(e.target.value)} required/>
            <input type="text" className='h-[56px] w-full bg-slate-100 rounded block' placeholder='second name' value={lastName}   onChange={(e)=>setLastName(e.target.value)} required / >
            <input type="text" className='h-[56px] w-full bg-slate-100 rounded block' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}  required/>
            <input type="text" className='h-[56px] w-full bg-slate-100 rounded block' placeholder='tel' value={tel} onChange={(e)=>setTel(e.target.value)} required />
            <input type="text" className='h-[56px] w-full bg-slate-100 rounded block'  placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            <input type="text" className='h-[56px] w-full bg-slate-100 rounded block'  placeholder='password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} required/>
            </div>
                 <button className='text-white bg-pink-400 px-4 py-2 rounded-md  w-fit'> Create account</button>
                 {error}
        </div>
        </form>
          <p className='text-sm'>Already Have an account? <span className='text-blue-400 underline'><Link to="/"> Login</Link></span></p>
       </div>
    </div>
  )
}

export default Register;