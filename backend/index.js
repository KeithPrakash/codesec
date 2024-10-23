import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoute from "./Routes/userRoute.js"

dotenv.config();
const app = express();


app.use(express.json());

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

app.get('/',(req,res)=>{

  res.json({message:"oyy oyy"}).statusCode(200)
})