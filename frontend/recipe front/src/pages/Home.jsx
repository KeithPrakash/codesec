import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Favourite from './Favourite'



const  categories=[
    {id:"1",category:"Beef"},
    {id:"2",category:"Chicken"},
    {id:"3",category:"Dessert"},
    {id:"4",category:"Lamb"},
    {id:"6",category:"Pasta"},
]
const Home = () => {
const [data, setData]=useState([])
const [selected ,setSelected] =useState("Beef");

useEffect( ()=>{

const getData= async()=>{
try{
    const response =  await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selected}`);
    console.log(response.data)
    setData(response.data)

}catch(e){
console.log(e)
}
}
getData();

},[selected])
  return (
  <div>
  <nav className='flex p-7 justify-around shadow-md'>
    
    <div>LOGO</div>     <div className='flex gap-10 text-3xl font-semibold'> <div>Home</div> <div>Favourite</div></div>    <>Logout</></nav>

<div className='p-20 flex gap-5  mx-auto'>
{
  categories.map((item ,index)=>(

      <div key={index}      onClick={()=>setSelected(item.category)}     className={`py-3 px-5 rounded-full border-slate-400  text-slate ${item.category === selected ? 'bg-pink-500 text-white' : 'bg-white'}`}> {item.category} </div>
  ))
}
</div>

<div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-4 lg:w-[80%] mx-auto'>
{
    data.meals? data.meals.map((item,index)=>(

        <div key={index}>
          <img src={item.strMealThumb} alt=""  className='rounded-xl'/>
          <h3 className='font-semibold text-lg'>{item.strMeal}</h3>
            </div>
    ))   : <div>no items</div>
}

</div>

  </div>
  

  )
}

export default Home;