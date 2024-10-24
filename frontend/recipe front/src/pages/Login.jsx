
import { useState ,useContext} from 'react';
import { Link, } from 'react-router-dom'
import AuthContext from '../util/AuthContext';

const Login = () => {

  const [email,setEmail] =useState(null);
  const [password,setPassword] =useState(null);
  const [error,setError] =useState(false);
 
const {login , isAutenticated} = useContext(AuthContext)

console.log(isAutenticated)

  const handleForm= async(e)=>{
    e.preventDefault();

      try{
        console.log(email,password)
            


         await login({email,password})
      
      }catch(error){
           console.log(error);
             setError(true)
      }




}
  return (
    <div className='h-[100dvh] w-full bg-slate-100  flex justify-center items-center'>

                  <form action="" onSubmit={handleForm}>
              
        <div className='w-[340px] h-auto flex flex-col gap-6   inset-full bg-white p-[30px] rounded-2xl'>

            <div className='w-full flex justify-center'> logo</div>
            <h2 className='font-semibold text-lg'>Login</h2>
              <input type="text" className='h-[56px] w-full bg-slate-100 rounded' placeholder='email' value={email}  onChange={(e)=>setEmail(e.target.value) } required/>
              <input type="text" className='h-[56px] w-full bg-slate-100 rounded' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
              <button className='bg-pink-500 w-full text-center p-4 text-white  capitalize hover:opacity-70' type="submit"> Sign in</button>
              {error ? <p className='text-red-500 text-center'> Something went wrong</p> : null}
              <p className='text-sm'>Dont have an account? <span  className='text-blue-700'>  <Link to="/register">Create an account
              </Link></span></p>
        </div>
      
        </form>
    </div>
  )
}

export default Login