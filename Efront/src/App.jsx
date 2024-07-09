import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import LoginSignup from './Pages/LoginSignup'
import Shop from './Pages/Shop'
import Product from './Pages/Product'
import ShopCategory from './Pages/ShopCategory'
import Cart1 from './Pages/Cart1'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/assets/banner_mens.png';
import women_banner from './Components/assets/banner_women.png';
import kid_banner from './Components/assets/banner_kids.png';

// import Cart from './Pages/Cart'
function App() {

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory  banner={men_banner} category="men"/>}/>
      <Route path='/womens' element={<ShopCategory  banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner ={kid_banner} category="kid"/>}/>
      <Route path="product" element={<Product/>}>
      <Route path=':productId' element={<Product/>}/> 
      </Route>
      <Route path='/cart' element={<Cart1/>
    }/>
      <Route path='/login' element={<LoginSignup/>}/>


    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
