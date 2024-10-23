import mongoose from "mongoose";

const userSchema =mongoose.Schema({

  firstName:{
    required:true,
    type:"String"
  },  
  lastName:{
    required:true,
    type:"String"
  },
  email:{
    required:true,
    type:"String"
  },
  tel:{
   required:true,
   type:"String"
  },
  password:{
    require:true,
    type:"String"
  },
})


export default mongoose.model('user',userSchema);