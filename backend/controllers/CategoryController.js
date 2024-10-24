
import axios from 'axios';


const getByCategory =async(req,res)=>{

    const { id } = req.params;
          
     try{

        const response =await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)

        res.status(200).json({data:response.data})
     }catch(error){
        res.status(500).json({message:error.message})
     }
}

export {getByCategory}