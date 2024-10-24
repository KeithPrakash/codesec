
import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import axios from 'axios'
import FavCard from '../components/FavCard';
import { toast } from 'react-toastify';

const Favourite = () => {

  const [data ,setData]=useState([]);

  const getAuthToken = () => {
    return localStorage.getItem('token');
  };
 



  const fetchData = async () => {
    try{
         const response = await axios.get('http://localhost:3000/api/v1/user/favorite/list',{
           headers:{
                 Authorization: `Bearer ${getAuthToken()}`
         }}
           
         );
         setData(response.data);
         console.log(response.data)

       } catch (error) {
          console.log(error)
       } 
     };
  const removeItem= async(id)=>{
    try{
        const response = await axios.delete(`http://localhost:3000/api/v1/user/favorite/${id}`,
            {
                headers:{
                      Authorization: `Bearer ${getAuthToken()}`
              }}
        );
        if(response){
         toast.success("item removed")

            fetchData()
        }
}catch(error){
    console.error(error);
}
}
  useEffect(()=>{

    
  
    fetchData()
},[])


  return (
  <div>
    <Nav/>


    <div className='grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-4 lg:w-[80%] mx-auto pt-20'>
{
    data? data.map((item,index)=>(


        <FavCard   item={item} key={index}  removeItem={removeItem} />

    ))   : <div>no items</div>
}
</div>
  </div>

  )
}

export default Favourite