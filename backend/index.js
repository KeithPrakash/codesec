import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoute from "./Routes/userRoute.js"
import cors from 'cors'
import favoriteRoute from "./Routes/favourteRoute.js"
import recipeRoute from "./Routes/recipeRoute.js"
import rateLimit from 'express-rate-limit';




dotenv.config();
const app = express();

app.use(cors())
app.use(express.json());


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  
  max: 100,  
});

app.use(limiter);

mongoose.connect(process.env.MONGO_URL).then(()=>{
  app.listen(process.env.PORT, async()=>{
    try{
      console.log(3000,"running")
    }catch(error){
      console.log(error)
    }
        
  })
})

app.use('/api/v1/user',userRoute);
app.use('/api/v1/user/favorite',favoriteRoute);
app.use('/api/v1/category',recipeRoute);

app.get('/',(req,res)=>{

  res.json({message:"it works,test"}).statusCode(200)
})