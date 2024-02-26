/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import Navbar from "./Navbar"
import Footer from './Footer'
import Home from './Home'
import Shop from './Shop'
import ProductDetails from './ProductDetails'
import Cart from './Cart'
import Checkout from './Checkout'
import Testimonial from './Testimonial'
import ContactUs from './ContactUs'
import Error from './Error'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path='/shop' element={<Shop />} />
        <Route path='/product' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/*' element={<Error />} />
        </Routes>
        <Footer/>      
    </BrowserRouter>
  )
}
