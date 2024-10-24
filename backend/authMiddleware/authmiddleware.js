import jwt from "jsonwebtoken";
 

 export const authMiddleware = async(req, res, next) => {
    
    const token = req.headers['authorization'];  

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    if(token.startsWith('Bearer ')){
        try {
            const extractedToken =  await token.split(' ')[1];
            console.log(extractedToken,"extracted");
            const decodedToken =  await jwt.verify(extractedToken,process.env.JWT_SECRET);
            req.user = decodedToken; 
            console.log("got throgue");
            next();
          } catch (error) {
            return res.status(401).json({ message: 'Invalid token' });
          }

    }else(
        console.log("how hpw")
    )

    

  };