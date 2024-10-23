

import { Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Favourite from './pages/Favourite'

function App() {
 

  return (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/favourites" element={<Favourite/>}/>
        </Routes>
  )
}

export default App
