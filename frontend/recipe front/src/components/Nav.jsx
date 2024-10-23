import { NavLink } from "react-router-dom";


 const Nav =()=>{
  return(
    <nav className='flex p-7 justify-around shadow-md'>
    
    <div>LOGO</div> <div className='flex gap-10 text-3xl font-semibold'> <div>   <NavLink to="/home"        >Home</NavLink></div> <div> <NavLink to="/favourites">Favourite</NavLink></div></div>    <>Logout</></nav>

  )
 }


 export default Nav;