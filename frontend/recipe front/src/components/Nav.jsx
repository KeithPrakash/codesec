import { NavLink } from "react-router-dom";
import AuthContext from "../util/AuthContext";
import { useContext } from "react";
import icon from "../assets/logout.png"
import Logo from "../assets/recipe.png"
import { ToastContainer } from "react-toastify";

 const Nav =()=>{

  const {logout} =useContext(AuthContext);
  return(
    <>
     <ToastContainer/>
     <nav className='flex p-7 justify-around shadow-md'>
    
    <div> <img className="w-8" src={Logo} /></div> <div className='flex gap-10 text-3xl font-semibold'> <div>   <NavLink to="/home" className={({isActive})=> isActive? "text-blue-600":" "}       >Home</NavLink></div> <div> <NavLink to="/favourites" className={({isActive})=> isActive? "text-blue-600":" "}   >Favourite</NavLink></div></div>    <img className="w-8" src={icon} onClick={()=>logout()} /></nav>
    </>
  

  )
 }


 export default Nav;