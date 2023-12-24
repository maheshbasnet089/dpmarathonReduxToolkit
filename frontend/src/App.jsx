
import './App.css'
import {  BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import router from './router'
import Navbar from './globals/components/navbar/Navbar'
import Footer from './globals/components/footer/Footer'
import Home from './pages/home/Home'
import Login from './pages/auth/login/Login'
import Register from './pages/auth/register/Register'
import Cart from './pages/cart/Cart'


function App() {


  return (
    <>
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/cart" element={<Cart />} />

   </Routes>
   <Footer/>
   </BrowserRouter>

    </>
  )
}

export default App
