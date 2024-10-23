import user from "../models/user.js"

const register=(req,res)=>{

  const {firstName, lastName,email,tel,password} = req.body;
  console.log(req.body);
  
}




export  {register};