import axios from 'axios'
import { toast } from 'react-toastify';
const getAuthToken = () => {
    return localStorage.getItem('token');
  };
console.log("got the tokwb",getAuthToken())
const Card = ({ item, index }) => {

const addItem=async({item})=>{

    try{
        const response=  await axios.post('https://codesec.onrender.com/api/v1/user/favorite/add',{
          title:item.strMeal,
          image:item.strMealThumb,
          recipeId:item.idMeal         
        },{
          headers:{
                Authorization: `Bearer ${getAuthToken()}`
        }})
        if(response.status==200){
          toast.success("added")
          }

    }catch(error){
        console.log(error)
    }
}
  return (
   
        <div key={index}   className='hover:scale-105 hover:shadow-lg border shadow-sm' >
          <img src={item?.strMealThumb} alt=""  className='rounded-xl'/>

          <h3 className='font-semibold text-lg'>{item?.strMeal}</h3>
          <button onClick={()=>addItem({item})} className='bg-pink-500 font-semibold text-white text-sm py-1 px-3 rounded-sm hover:bg-pink-300'>Add Favourties</button>
            </div>
  )
}

export default Card