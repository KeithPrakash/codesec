import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({

  firstName:{
    required:true,
    type:"String"
  },  
  lastName:{
    required:true,
    type:"String"
  },
  email:{
    unique:true,
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
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'favorite' }],
})
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};


export default mongoose.model('user',userSchema);