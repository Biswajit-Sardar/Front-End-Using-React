import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import Product from './components/Product/Product'
import About from './components/About/About'
import Review from './components/Review/Review'
import Contact from './components/Contact/Contact'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import Abouts from './components/Small-Components/Abouts/Abouts'
import Menus from './components/Small-Components/Menus/Menus'
import Products from './components/Small-Components/Products/Products'
import Reviews from './components/Small-Components/Reviews/Reviews'
import Contacts from './components/Small-Components/Contacts/Contacts'

import './App.css'

function HomePage() {
  return (
    <>
      <Home />
      <Menu />
      <Product />
      <About />
      <Review />
      <Contact />
      <Blog />
      <Footer />
    </>
  )
}
function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        {/* Main/Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Separate About Page */}
        <Route path="/about" element={<Abouts />} />

         <Route path="/menu" element={<Menus />} />
         <Route path="/products" element={<Products />} />
         <Route path="/reviews" element={<Reviews />} />
         <Route path="/contact" element={<Contacts />} />
         
      </Routes>
      <Footer />

    </BrowserRouter>
  )
}

export default App
