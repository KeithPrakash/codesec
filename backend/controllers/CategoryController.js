
import axios from 'axios';


const getByCategory =async(req,res)=>{

    const { id } = req.params;
           console.log("hittig")
     try{

        const response =await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)

        res.json({data:response.data}).status(200)
     }catch(error){
        res.json({message:error.message}).status(500)
     }
}

export {getByCategory}