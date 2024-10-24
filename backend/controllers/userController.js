import userSchema from "../models/user.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const register = async (req, res) => {
  const {firstName,lastName, email,tel, password } = req.body;
  console.log(req.body)

  try {
    const user = new userSchema({firstName,lastName,tel, email, password });
    
    await user.save();
    const token = `{generateToken(user)}`;


    res.json({ token, user: { email: user.email,id: user._id } })
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userSchema.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password); 

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    console.log("success");
    const token = generateToken(user);
    res.status(200).json({ token, user: { email: user.email, id: user._id } }); 

  } catch (error) {
    res.status(500).json({ error: error.message }); 
};

}
export  {register ,login};