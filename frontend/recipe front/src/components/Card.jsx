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
   
        <div key={index}  onClick={()=>addItem({item})} className='hover:scale-105 hover:shadow-lg' >
          <img src={item?.strMealThumb} alt=""  className='rounded-xl'/>

          <h3 className='font-semibold text-lg'>{item?.strMeal}</h3>
            </div>
  )
}

export default Card