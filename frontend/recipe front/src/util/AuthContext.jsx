
import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

  const [isAuthenticated,setIsAuthenticated]=useState(false);
  const [token ,setToken]= useState(null)

  const navigate=useNavigate();

  useEffect(() => {
    if(localStorage.getItem('token') && localStorage.getItem('user')){
        setToken(localStorage.getItem('token'))    
        setIsAuthenticated(true);
        navigate("/home")
    }else{
        setIsAuthenticated(false)
    }
    
   
  }, []);

  const login = async ({email,password}) => {
    try{
          console.log(email,password ,"ko data")
            
          const response = await  axios.post("https://codesec.onrender.com/api/v1/user/login",{email,password});

          if(response.status==200){
            console.log(response.data)

           localStorage.setItem("token",response.data.token);
           localStorage.setItem("user",response.data.user);
           setIsAuthenticated(true);
           navigate('/home', {replace: true })
          }else{
           navigate('/', { replace: true });
          }
      }catch(error){
            console.log(error)
      }
  };
  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setIsAuthenticated(false)
   
    navigate("/",{replace:true})
  };
  return (
    <AuthContext.Provider value={{  login, logout,isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;