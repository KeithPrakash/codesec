

import { Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Favourite from './pages/Favourite'
import PrivateRoute from './util/PrivateRoute'
import 'react-toastify/dist/ReactToastify.css';
function App() {
 

  return (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/favourites" element={ <PrivateRoute><Favourite/></PrivateRoute>}/>
        </Routes>
  )
}

export default App
