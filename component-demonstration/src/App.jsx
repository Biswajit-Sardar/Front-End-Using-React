import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import Product from './components/Product/Product'
import About from './components/About/About'
import Review from './components/Review/Review'
import Contact from './components/Contact/Contact'
import Blog from './components/Blog/Blog'





import './App.css'

function App() {
  return (
    <div className="app">
      <main className="main-content">
        <Header />
        <Home />
        <Menu />
        <Product/>
        <About />
        <Review />
        <Contact />
        <Blog />


      </main>
      
      
    </div>
  )
}
export default App
